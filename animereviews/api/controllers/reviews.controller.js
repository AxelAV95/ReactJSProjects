const Review = require("../models/review");

const createReview = async (req, res) => {
  try {
    const doc = new Review({
      title: req.body.title,
      text: req.body.text,
      poster: req.body.poster,
      author: req.userId,
    });

    const review = await doc.save();

    return res.status(200).json(review);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateReview = async (req, res) => {
  try {

    const review = await Review.findOneAndUpdate(
        {_id: req.params.id},
        {
            title: req.body.title,
            text: req.body.text,
            poster: req.body.poster,
            author: req.userId

        },
        {new: true}
    
    );

    if(!review){
        return res.status(404).json({message: "Review not found"})
    }

    return res.status(200).json(review)

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteReview = async (req, res) => {
  try {

    const review = await Review.findOneAndDelete(
        {_id: req.params.id},       
    );

    if(!review){
        return res.status(404).json({message: "Review not found"})
    }

    return res.status(200).json(review)
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find()
      .sort({ createdAt: -1 })
      .populate("author", "-password")
      .exec();

    return res.status(200).json(reviews);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getReview = async (req, res) => {
  try {
    const reviewId = req.params.id;

    const review = await Review.findOneAndUpdate(
        {_id: reviewId},
        {$inc: {views: 1}},
        {returnDocument: "after"}
    
    ).populate("author", "-password").exec();

    if(!review){
        return res.status(404).json({message: "Review not found"})
    }

    return res.status(200).json(review)
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createReview,
  updateReview,
  deleteReview,
  getReviews,
  getReview,
};
