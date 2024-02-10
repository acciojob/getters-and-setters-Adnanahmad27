//complete this code
class Person {
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	get name(){
		return this.name;
	}
	get age(){
		return this.age;
	}
	set name(name){
		this.name = name;
	}
	set age(age){
		this.age = age;
	}
}

class Student extends Person {
	constructor(name,age) {
    super(name,age); // call the super class constructor and pass in the name parameter
	}
	
	study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	constructor(name,age) {
    super(name,age);
	}
	teach(){
		console.log(`${this.name} is teaching`);
	}
}
const person = new Person("John", 25);
console.log(person.name); // Output: John

person.age = 30;
console.log(person.age); // Output: 30

const student = new Student("Alice", 22);
student.study(); // Output: Alice is studying

const teacher = new Teacher("Bob", 40);
teacher.teach(); // Output: Bob is teaching
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
