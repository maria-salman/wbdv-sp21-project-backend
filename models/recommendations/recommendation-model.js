const mongoose = require('mongoose');
const usersSchema = require('./recommendation-schema');
const recommendationModel = mongoose.model('RecommendationModel', usersSchema);

module.exports = recommendationModel;