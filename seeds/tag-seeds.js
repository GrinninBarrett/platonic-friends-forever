const { Tag } = require('../models');

const tagData = [
    {
        tag_name: 'sports',
    },
    {
        tag_name: 'movies',
    },
    {
        tag_name: 'music',
    },
    {
        tag_name: 'outdoors',
    },
    {
        tag_name: 'home-body',
    },
    {
        tag_name: 'exercise',
    },
    {
        tag_name: 'video games',
    },
    {
        tag_name: 'film',
    },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;