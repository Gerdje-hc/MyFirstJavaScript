class Person {
    constructor(fname = 'John', lname = 'Doe') {
        this.firstname = fname;
        this.lastname = lname;
    }

    get fullname () {
        return `${this.firstname} ${this.lastname}`;
    }
}

class Actor extends Person {
    constructor( firstname, lastname, ...characters){
       super (firstname, lastname)
        this characters = "characters"



    }

    Class
}