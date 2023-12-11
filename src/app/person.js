"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(pAadhar, pName, pAge) {
        if (pAadhar === void 0) { pAadhar = ''; }
        if (pName === void 0) { pName = ''; }
        if (pAge === void 0) { pAge = 18; }
        this.aadhar = ''; //~ C# string
        this.name = '';
        this.age = 0; //~ C#int, int16, int32, int64, long, short, decimal
        this.secrets = []; //~ C# Arrays{}
        this.isAlive = true; //~ C# Boolean
        this.hobbies = {}; //~ C# Object
        this.awardsReceived = []; //~ C# Array
        this.aadhar = pAadhar;
        this.name = pName;
        this.age = pAge;
    }
    Person.GetPeople = function () {
        if (Person.People.length == 0) {
            Person.People.push(new Person("AA12345678901A", "Meena", 25));
            Person.People.push(new Person("BB12345678901B", "Teena", 23));
            Person.People.push(new Person("CC12345678901C", "Reena", 29));
        }
        return Person.People;
    };
    Person.AddPerson = function (person) {
        //Add him to Person.People array
        if (person == undefined)
            return false;
        Person.People.push(person);
        return true;
    };
    Person.People = [];
    return Person;
}());
exports.Person = Person;
