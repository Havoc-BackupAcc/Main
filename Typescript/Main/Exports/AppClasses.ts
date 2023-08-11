class User {
    public name : string;
    public age : number;
    public password : string;

    constructor(name: string, age: number, password: string) {
        this.name = name;
        this.age = age;
        this.password = password;
    }

    Login(username: string, password: string) {
        if(username === this.name && password === this.password) {
            return;
        }
        else {
            
        }
    }
}

