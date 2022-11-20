class Account{
    isSet = false;
    username = "";
    password = "";

    constructor(isSet = false, username = "", password = "") {
        this.isSet = isSet;
        this.username = username;
        this.password = password;
    }
}