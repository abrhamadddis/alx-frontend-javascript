interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location:string;
}
const StudentOne: Student = {
    firstName: 'abrham',
    lastName: 'addis',
    age: 25,
    location: 'enkulal',
}
const StudenTwo: Student = {
    firstName: 'melaku',
    lastName: 'alehegn',
    age: 26,
    location: 'gurara'  
}
const  studentsList: Student[] = [StudentOne, StudenTwo]
const body = document.body
const table = document.createElement('table')
table.innerHTML = (
    `<tr>
            <tr>first name</tr>
            <tr>last name</tr>
    </tr>`
)
studentsList.forEach((student: Student): void => {
    const row = `<tr>
                        <td>${student.firstName}</td>
                        <td>${student.lastName}</td>
                </tr>`
    table.innerHTML += row;
})
body.append(table)
