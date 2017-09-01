
function Film(title,rating,runlength) {
    this.title = title;
    this.rating = rating;
    this.runlength = runlength;
    this.comments = [];
    this.characters = [];
}

Film.prototype.setDescription = function (description){
    this.description = description;
};

Film.prototype.addComment = function (user,text) {
    this.comments.push ({
        user: user,
        text: text
    }
);


var F = new Film ("Legends of the fall",10,120);
F.setDescription ("Three American tourists follow a mysterious map deep into the jungles of Japan searching for an ancient temple. " +
    "When spirits entrap them, their adventure quickly becomes a horrific nightmare. ");

F.addComment (
    new User [{"usernr": "0001","name":"John","lastName": "Doh"}],"This is a great movie",
    new user [{"usernr": "0002","name":"Marie","lastName": "Doh"}], "I love this movie",
    new user [{"usernr": "0003","name":"Jerry","lastName": "Roth"}],"This movie is to romantic for me!",
    new user [{"usernr": "0004","name":"Annie","lastName": "Goris"}], "I have seen this movie 5 times. Great actors!"


)