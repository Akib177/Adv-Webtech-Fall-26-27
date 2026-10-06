function getStudentdata(){
    return new Promise ((resolve, reject) => {
        resolve(
            {
                id: "23-53177-3",
                name: "Adnan Akib",
                department: "CSE",
                cgpa: 3.75
            });
        });
}

async function displayStudentData(){
    try{
        const student= await getStudentdata();
        console.log("student Data Received");
        console .log("ID: ", student.id);
        console.log("Name:" , student.name);
        console.log("Department: ", student.department);
        console.log("CGPA: ", student.cgpa);

    }
    catch(error){
        console.log("Error: ", error);
    }
}

displayStudentData();