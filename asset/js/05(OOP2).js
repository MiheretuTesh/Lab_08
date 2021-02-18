// 1. A Person Object for Base 
const PersonObj = {

    greeting() {
        return `Hi , ${this.firstName} ${this.lastName}`;
    }
}
const person = Object.create(PersonObj);
person.firstName = "Person"
person.lastName = "person"
console.log(person.greeting())

//2. Create Theon Object using Person Template
const Theon = {
    greeting() {
        return `Hi , ${this.firstName} ${this.lastName}`;
    }
}
let theon = Object.create(Theon);
theon.firstName = "Theon";
theon.lastName = "Greyjoy"

//3. Add firstName[Theon] and lastName[Greyjoy] 


//4. Display the greeting on Theon Object [remove the string when you have the object]
Obj_C2.innerHTML = theon.greeting();
