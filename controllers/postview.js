const router = require("express").Router();

router.get("/", (req, res) => {
  const body = {
    title: "Tokenizing Words to Create Models",
    content:
      "In natural language processing, tokenization is an important preprocessing step. It involves breaking down text into individual words or tokens, which can then be used for various NLP tasks such as text classification, sentiment analysis, and machine translation. By creating models based on these tokens, we can extract meaningful information from textual data and enable machines to understand and analyze human language more effectively.",
    comments: [
      "Great post! Tokenization is indeed a crucial step in NLP.",
      "I've found that tokenizing words improves the accuracy of my text classification models.",
      "Thanks for sharing! I'm curious about the different tokenization techniques available.",
      "Reply to comment 1: Absolutely! Tokenization lays the foundation for many NLP applications.",
      "Reply to comment 3: There are several tokenization techniques, such as whitespace tokenization, rule-based tokenization, and neural network-based tokenization. Each technique has its strengths and use cases.",
    ],
  };

  const title = body.title;
  const content = body.content;
  const comments = body.comments;
  req.session.username
    ? res.render("postview", {
        post: {
          username: req.session.username,
          title,
          content,
          comments,
        },
        logged: true,
        items: [
          {
            name: "postview",
          },
        ],
      })
    : res.redirect("/login");
});

module.exports = router;
