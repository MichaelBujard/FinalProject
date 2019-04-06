const User = {

    firstName,
    lastName,
    userName,
    email,
    password,
    address,
    city,
    zipCode,
    streetNumber,

    constructor(first, last, user) {
        this.firstName = first;
        this.lastName  = last;
        this.userName = user;
    },

    //setters
    set setEmail(_email) {
        this.email = email;
    },
    set setPassword(_password) {
        this.password = password;
    },

    //getters
    get getFirstName() {
        return this.firstName;
    },
    get getLastName() {
        return this.lastName;
    },
    get getUserName() {
        return this.userName;
    },
    get getAddress() {
        return this.address;
    },
    get getEmail() {
        return this.email;
    },
    get getPassword() {
        return this.password;
    },
}