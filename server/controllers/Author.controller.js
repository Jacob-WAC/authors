const { response } = require("express");
const { Author } = require("../models/Author.model");
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World",
    });
};

module.exports.createAuthor = (request, response) => {
    const { name } = request.body;
    Author.create({
        name,
    })
        .then((author) => response.json(author))
        .catch((err) => response.json(err));
};

module.exports.getAllAuthor = (request, response) => {
    Author.find({})
        .collation({ locale: "en", strength: 1 })
        .sort({ name: 1 })
        .then((authors) => response.json(authors))
        .catch((err) => response.json(err));
};

module.exports.getAuthor = (request, response) => {
    Author.findOne({ _id: request.params.id })
        .then((author) => response.json(author))
        .catch((err) => response.json(err));
};

module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({ _id: request.params.id }, request.body, {
        new: true,
    })
        .then((updatedAuthor) => response.json(updatedAuthor))
        .catch((err) => response.json(err));
};

module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id })
        .then((deleteConfirmation) => response.json(deleteConfirmation))
        .catch((err) => response.json(err));
};
