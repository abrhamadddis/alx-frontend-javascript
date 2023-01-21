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