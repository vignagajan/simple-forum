const asyncHandler = require("express-async-handler");

const Topic = require("../models/topicModel");

/*
    desc: Get All Comments
    route: GET /api/topic/:id/comments
    access: Public
*/

const getComments = asyncHandler(async (req, res) => {
  const topic = await Topic.findById(req.params.id);

  if (!topic) {
    res.status(400);
    throw new Error("Topic not found");
  }

  res.status(200).json(topic.comments);
});

/*
    desc: Add comment
    route: GET /api/topic/:id
    access: Private
*/
const addComment = asyncHandler(async (req, res) => {
  const topic = await Topic.findById(req.params.id);
  if (!topic) {
    res.status(400);
    throw new Error("Topic not found");
  }
  //check comment
  if (!req.body.comment) {
    res.status(400);
    throw new Error("Please enter a comment");
  }
  topic.comments.push({
    comment: req.body.comment,
    user: req.user.id,
  });
  topic.save(function (err) {
    if (err) {
      res.status(400);
      throw new Error(err);
    }
  });
  res.status(200).json(topic.comments);
});

/*
    desc: Delete comment
    route: DELETE /api/topic/:id/:cid
    access: Private
*/
const deleteComment = asyncHandler(async (req, res) => {
  const topic = await Topic.findById(req.params.id);
  if (!topic) {
    res.status(400);
    throw new Error("Topic not found");
  }
  topic.comments.id(req.params.cid).remove();
  topic.save(function (err) {
    if (err) return handleError(err);
    console.log("Success!");
  });
  res.status(200).json(topic.comments);
});

module.exports = {
  getComments,
  addComment,
  deleteComment,
};
