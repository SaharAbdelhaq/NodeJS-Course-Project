const { check, validationResult } = require("express-validator");

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{ title: "First Post", content: "This is the First Post" }],
  });
};

exports.createPost = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      Message: "Validation failed, enterd data incorrect",
      errors: errors.array(),
    });
  }

  const title = req.body.title;
  const content = req.body.content;

  res.status(200).send({ content: content, title: title });
};
