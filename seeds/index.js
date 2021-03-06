const sequelize = require('../config/connection');
const seedCourse = require('./courseData');
const seedComment = require('./commentData');
const seedUser = require('./userData');
const seedVote = require('./voteData');
const seedImages = require('./imagesData');

const seedAll = async () => {
    await sequelize.sync({forced: false });
    await seedUser();

    await seedCourse();

    await seedImages();

    await seedComment();

    await seedVote();

    process.exit(0);
};

seedAll();