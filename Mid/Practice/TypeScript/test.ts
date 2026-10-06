interface Istudent{
    name: string;
    age: number;
    grade: number

}

function getName(): string {
    let name: string = "Akib";
    return name;
}

function getAge(): number {
    let age: number = 20;
    return age;
}

function getGrade(): number {
    return 3.75
}

function getStudentInfo():{name:string, age:number, grade:number}{

    const name= getName();
    const age= getAge();
    const grade= getGrade();
    console.log("Student Info: ", { name, age, grade });
    return { name, age, grade };
}

async function getStudentInfo2(): Promise<{name: string, age: number, grade: number}> {
    const name= await getName();
    const age= await getAge();
    const grade= await getGrade();
    console.log("Student Info: ", { name, age, grade });
    return { name, age, grade };
}

function getStudentInfo3(): Istudent {
    const name= getName();
    const age= getAge();
    const grade= getGrade();
    console.log("Student Info: ", { name, age, grade });
    return { name, age, grade };
}

function main(){

    getStudentInfo();
    getStudentInfo2();
    getStudentInfo3();
}

main();