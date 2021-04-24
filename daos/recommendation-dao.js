const recommendationModel = require('../models/recommendations/recommendation-model');

const addRecommendation = (userId, bookId, username, bookTitle) => {
    return recommendationModel.create({userId, bookId, username, bookTitle});
}

const removeRecommendation = (userId, bookId) => {
    return recommendationModel.findOneAndRemove({userId, bookId});
}

const getRecommendationsForUser = (userId) => {
    return recommendationModel.find({userId})
}

const getAllRecommendations = () => {
    return recommendationModel.find();
}

const IsRecommendation = (userId, bookId) => {
    return recommendationModel.countDocuments({userId, bookId});
}

module.exports = {
    addRecommendation,
    removeRecommendation,
    getRecommendationsForUser,
    getAllRecommendations,
    IsRecommendation
}
