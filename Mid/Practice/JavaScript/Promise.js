function getStudentResult() {
  return new Promise((resolve, reject) => {
    console.log("Requesting student result...");

    setTimeout(() => {
      const success = true;

      if (success) {
        const result = {
          id: 101,
          name: "Rahim",
          department: "CSE",
          marks: 85
        };

        console.log("Getting student result...");
        resolve(result);
      }
      
      else {
        reject("Unable to fetch student result");
      }
    }, 3000);
  });
}

async function displayResult() {
  try {
    const result = await getStudentResult();
    console.log("Result processed successfully");
    console.log("ID:", result.id);
    console.log("Name:", result.name);
    console.log("Department:", result.department);
    console.log("Marks:", result.marks);
  }

   catch (error) {
    console.log("Error:", error);
  }

   finally {
    console.log("Result processing completed.");
  }
}

displayResult();
