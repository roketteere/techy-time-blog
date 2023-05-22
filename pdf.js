async function addRole() {
  try {
    const results = await new Promise((resolve, reject) => {
      db.query("SELECT name FROM department", (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });

    const choices = results.map((result) => result.name);

    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "title",
        message: "What is the new role's title?",
      },
      {
        type: "input",
        name: "salary",
        message: "What is the new role's salary?",
      },
      {
        type: "list",
        name: "department",
        message: "What is the new role's department?",
        choices: choices,
      },
    ]);

    let department_id;
    for (let i = 0; i < results.length; i++) {
      if (answers.department === results[i].name) {
        department_id = results[i].id;
      }
    }

    const query = `
      INSERT INTO role (title, salary, department_id)
      VALUES (?, ?, (SELECT id FROM department WHERE name = ?))
    `;
    const values = [answers.title, answers.salary, answers.department];

    await new Promise((resolve, reject) => {
      db.query(query, values, (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    });

    // startApp();
  } catch (err) {
    throw err;
  }
}
