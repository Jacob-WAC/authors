const AuthorController = require("../controllers/Author.controller");
module.exports = function (app) {
    app.get("/api", AuthorController.index);
    app.post("/api/new", AuthorController.createAuthor);
    app.get("/api/authors", AuthorController.getAllAuthor);
    app.get("/api/authors/:id", AuthorController.getAuthor);
    app.put("/api/authors/:id", AuthorController.updateAuthor);
    app.delete("/api/authors/:id", AuthorController.deleteAuthor);
};
