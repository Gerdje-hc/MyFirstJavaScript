var film1 = {
    "title": "Legends of the fall",
    "description": "In the 1900s, three brothers and their father living in the remote wilderness of Montana are affected by betrayal, history, love, nature, and war",
    "year": "1994",
    "image":"legendsOffTheFall.jpg",
    "characters": [
        {"name": "Tristan Ludlow", "actor": {firstname: "Brad", lastname: "Pitt"}},
        {"name": "Colonel Ludlow", "actor": {firstname: "Anthony", lastname: "Hopkins"}},
        {"name": "Alfred Ludlow", "actor": {firstname: "Aidan", lastname: "Quin"}}
    ],

    "users": [
        {"usernr": "0001","name":"John","lastName": "Doh"},
        {"usernr": "0002","name":"Marie","lastName": "Doh"},
        {"usernr": "0003","name":"Jerry","lastName": "Roth"},
        {"usernr": "0004","name":"Annie","lastName": "Goris"}
    ],
    "comments": [
        {"usernr": "0001", "review":"This is a great movie"},
        {"usernr": "0002", "review":"I love this movie"},
        {"usernr": "0003", "review":"This movie is to romantic for me!"},
        {"usernr": "0004", "review":"I have seen this movie 5 times. Great actors!"}
    ]
};

var film2 = {
    "title": "Temple",
    "description": "Three American tourists follow a mysterious map deep into the jungles of Japan searching for an ancient temple. When spirits entrap them, their adventure quickly becomes a horrific nightmare",
    "year": "2017",
    "image": "temple.jpg",
    "characters": [
        {"name": "Ryo", "actor": {firstname: "Naoto", lastname: "Takenaka"}},
        {"name": "Ittoku", "actor": {firstname: "Asahi", lastname: "Uchida"}},
        {"name": "Christopher", "actor": {firstname: "Logan", lastname: "Hufman"}}
    ],

    "users": [
        {"usernr": "0001","name":"John","lastName": "Doh"},
        {"usernr": "0002","name":"Marie","lastName": "Doh"},
        {"usernr": "0003","name":"Jerry","lastName": "Roth"},
        {"usernr": "0004","name":"Annie","lastName": "Goris"}
    ],
    "comments": [
        {"usernr": "0001", "review":"Good script"},
        {"usernr": "0002", "review":"Good acting"},
        {"usernr": "0003", "review":"Beautiful sceens"},
        {"usernr": "0004", "review":"Good script!"}
    ]
};

document.write("<h1>" + film1.title + "</h1>")