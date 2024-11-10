//basic type
type Person = {
    firstName: string;
    lastName: string;
};

var person2 : Person;
person2 = {firstName: 'f', lastName: 'l'};
//console.log(getFullName(person2));

function getFullName(person: Person): string {
    let {firstName, lastName} = person;
    return firstName + ' ' + lastName;
}

//2. Interfaces and Type Inference
interface Car {
    brand: string;
    year: number;
    color?: string;
}

let car : Car;
car = {brand:'Toyota', year:2020, color:'yellow'};
//describeCar(car);

function describeCar(car: Car): string {
    let {brand, year, color} = car;
    var desc = `This car is ${brand} , year : ${year}`;
    if (color)   {
        desc = desc + ` Color is ${color}`;
    }
    console.log(desc);
    return desc;
}

//console.log(formatValue(12.123456));

function formatValue(value: string | number): string {
    var res;
    if (typeof value == 'number')   {
        res = value.toFixed(2);
    }   else    {
        res = value;
    }
    return res;
}

let num: string;
num = 'a';
//console.log(wrapInArray(num));

function wrapInArray<T>(value: T): T[] {
    let arr : T[] = [];
    arr.push(value);
    return arr;
}

//5. Classes and Interfaces

interface Credentials {
    username: string;
    password: string;
}

class User1 implements Credentials {
    username: string;
    password: string;
    constructor(name: string, pass: string) {
        this.username = name;
        this.password = pass;
    }

    getCredentials() : JSON {
        let jsonString = '{}';
        let user = Object.assign({}, JSON.parse(jsonString));
        user = { ...user, 'username': this.username, 'password': this.password };

        //console.log(user);
        return user;
    };
}

let user1 = new User1('1', '12');
//console.log(user1.getCredentials());

//Enums
enum LogLevel {
    INFO = 'INFO',
    WARN = 'WARN',
    ERROR = 'ERROR'
}

function logMessage(level: LogLevel, message: string): void {
    var desc = `[${level}] ${message}`;
    //console.log(desc);
}
logMessage(LogLevel.INFO, '1');

//7. Mapped Types

type Person1 = {
    name: string;
    age: number;
    address: string;
};

type Optional<T> = {
     [P in keyof T]?: T[P]; 
};

type OptionalPerson1 = Optional<Person1>;

//8. Type Assertions

function getLength(value: string | string[]): number {
    let length;
    if (typeof value == 'string')   {
        let value1 = <string>value; 
        length = value1.length;
    }   else    {
        let value1 = <string[]>value; 
        length = value1.length;
    }
    return length;
}

//console.log(getLength('test'));
//console.log(getLength(['test', 'test1']));

//9 Intersection types
type Person2 = {
    name: string;
    age: number;
};

type Employee = {
    employeeId: number;
    department: string;
};

function createEmployeeProfile(profile: Person2 & Employee): void {
}

