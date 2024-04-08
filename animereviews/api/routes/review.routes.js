const { Router } = require("express");
const router = Router();

const { createReview, updateReview, deleteReview, getReviews, getReview} = require("../controllers/reviews.controller")
const protectAuth = require("../middleware/protectAuth")


router.post("/", protectAuth, createReview)
router.get("/", getReviews)
router.get("/:id", getReview)
router.put("/:id", protectAuth,updateReview)
router.delete("/:id", protectAuth, deleteReview)

module.exports = router