const { Collection } = require("mongodb");

class Movie {
    constructor (title, actor) {
        this.title = title
        this.actor = actor
    }

    async add () {
        await Collection.insertOne(this);
        return "Success";
        //add this to the database
}
    async list (collection) {
        return await collection.find().toArray()
        //list all moveis in the db
}

module.exports = Movie;