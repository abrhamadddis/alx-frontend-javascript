interface Teacher{
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: string,
    yearsOfExperience?: number,
    location:string,
    [index: string]: any;
}