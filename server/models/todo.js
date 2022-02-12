class todo{
    constructor(_id, title, desc){
        this._id = _id;
        this.title =title;
        this.desc=desc;
    }

    getTodo(){
        return (`
            "_id" : "${this._id}",
            "title" : "${this.title}",
            "desc" : "${this.desc}"
        `)
    }
}

module.exports = todo;