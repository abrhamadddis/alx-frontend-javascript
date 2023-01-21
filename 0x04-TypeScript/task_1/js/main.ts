interface Teacher{
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: string,
    yearsOfExperience?: number,
    location:string,
    [index: string]: any;
}
interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction{
    firstName: string,
    lastName: string;
}

function printTeacher(input:printTeacherFunction):string{
    return(`${input.firstName[0]}, ${input.lastName}`)
}

const teacher: printTeacherFunction = {
    firstName: "John",
    lastName: "Doe"
}

console.log(printTeacher(teacher));

interface studentInterface{
    firstName: string,
    lastName: string,
    workOnHomework(): string,
    displayName(): string
}
class StudentClass implements studentInterface{
    firstName: string;
    lastName: string;
    constructor(firstName:string, lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework(): string {
        return "Currently working";
    }
    displayName(): string {
        return `${this.firstName}`;
    }
}