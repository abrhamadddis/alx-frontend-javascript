interface Student {
    firstName:string;
    lastName:string;
    age:number;
    location:string;
}

const studentOne:Student = {
    firstName: "abrham",
    lastName: "addis",
    age: 25,
    location:"addisababa"
}

const studentTwo:Student = {
    firstName: "Beruk",
    lastName: "Birhanu",
    age:24,
    location:"addisababa"
}
const studentsList: Student[] = [studentOne, studentTwo]
const body = document.body
const table = document.createElement('table')
table.innerHTML = (
                `<tr>
                    <td>first name</td>
                    <td>location</td>
                </tr>`
                )

studentsList.forEach((stud: Student): void => {
    const eleme = (
        `<tr>
            <td>${stud.firstName}</td>
            <td>${stud.location}</td>
         </tr>
        `)
        table.innerHTML += eleme
})
body.innerHTML += table
