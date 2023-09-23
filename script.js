// script.js

// Fetch the JSON data from the provided URL
fetch(
  "https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json"
)
  .then((response) => response.json())
  .then((data) => {
    // Assuming the JSON contains an array, you can access it here
    const myArray = data;

    // You can now use 'myArray' in your JavaScript code
    // console.log(myArray); // Output the array to the console

    // You can also pass it to another function if needed

    //    console.log("hoi");
    //    processFetchedData(data);

    const element = document.getElementsByTagName("table")[0];

    console.log(element);

    for (let i = 0; i < myArray.length; i++) {
      const rowElement = document.createElement("tr");

      //   console.log(rowElement);
      element.appendChild(rowElement);

      const colElement = document.createElement("td");
      rowElement.appendChild(colElement);
      //   console.log(colElement);
      colElement.innerText = myArray[i].id;
      const colElementName = document.createElement("td");
      rowElement.appendChild(colElementName);
      //   console.log(colElementName);
      const myImage = myArray[i].img_src;
      //   console.log(myImage);
      const pic = document.createElement("img");
      pic.src = myImage;
      //   console.log(pic);
      const firstName = myArray[i].first_name;
      const lastName = myArray[i].last_name;

      colElementName.append(pic, firstName, " ", lastName);
      const colElementGender = document.createElement("td");
      rowElement.appendChild(colElementGender);
      //   console.log(colElementGender);
      colElementGender.innerText = myArray[i].gender;
      const colElementClass = document.createElement("td");
      rowElement.appendChild(colElementClass);
      //   console.log(colElementClass);
      colElementClass.innerText = myArray[i].class;
      const colElementMarks = document.createElement("td");
      rowElement.appendChild(colElementMarks);
      //   console.log(colElementMarks);
      colElementMarks.innerText = myArray[i].marks;
      const colElementPassing = document.createElement("td");
      rowElement.appendChild(colElementPassing);
      //   console.log(colElementPassing);
      //   console.log(myArray[i].passing);
      if (myArray[i].passing == false) {
        colElementPassing.innerText = "Failed";
      } else {
        colElementPassing.innerText = "Passing";
      }
      const colElementEmail = document.createElement("td");
      rowElement.appendChild(colElementEmail);
      //   console.log(colElementEmail);
      colElementEmail.innerText = myArray[i].email;
    }
  })

  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });

//   function processFetchedData(data) {
//    console.log(data);
//   }

const searchButton = document.getElementsByClassName("btn-serach");

searchButton[0].addEventListener("click", () => {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const table = document.getElementById("studentTable");
  const rows = table.getElementsByTagName("tr");

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const Name = row.getElementsByTagName("td")[1].textContent.toLowerCase();

    const email = row.getElementsByTagName("td")[6].textContent.toLowerCase();

    if (Name.includes(input) || email.includes(input)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  }
});

const sortButtonOne = document.getElementById("one");

sortButtonOne.addEventListener("click", () => {
  const table = document.getElementById("studentTable");

  const rows = Array.from(table.getElementsByTagName("tr")).slice(1); // Exclude the header row;

  // Sort the rows based on the full name (assuming the full name is in the first column)
  rows.sort((a, b) => {
    const nameA = a.cells[1].textContent.trim().toLowerCase();
    const nameB = b.cells[1].textContent.trim().toLowerCase();
    return nameA.localeCompare(nameB);
  });

  // Clear the current table content
  for (let i = 0; i < rows.length; i++) {
    table.appendChild(rows[i]);
  }
});

const sortButtontwo = document.getElementById("two");

sortButtontwo.addEventListener("click", () => {
  const table = document.getElementById("studentTable");

  const rows = Array.from(table.getElementsByTagName("tr")).slice(1); // Exclude the header row;

  // Sort the rows based on the full name (assuming the full name is in the first column)
  rows.sort((a, b) => {
    const nameA = a.cells[1].textContent.trim().toLowerCase();
    const nameB = b.cells[1].textContent.trim().toLowerCase();
    return nameB.localeCompare(nameA);
  });

  // Clear the current table content
  for (let i = 0; i < rows.length; i++) {
    table.appendChild(rows[i]);
  }
});

const sortButtonthree = document.getElementById("three");

sortButtonthree.addEventListener("click", () => {
  const table = document.getElementById("studentTable");

  const rows = Array.from(table.getElementsByTagName("tr")).slice(1); // Exclude the header row;

  // Sort the rows based on the full name (assuming the full name is in the first column)
  rows.sort((a, b) => {
    const markA = a.cells[4].textContent;
    const markB = b.cells[4].textContent;
    return markA - markB;
  });

  // Clear the current table content
  for (let i = 0; i < rows.length; i++) {
    table.appendChild(rows[i]);
  }
});

const sortButtonfour = document.getElementById("four");

sortButtonfour.addEventListener("click", () => {
  const table = document.getElementById("studentTable");

  const rows = table.getElementsByTagName("tr");

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const passingName = row.getElementsByTagName("td")[5].textContent;

    if (passingName == "Passing") {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  }
});

const sortButtonfive = document.getElementById("five");

sortButtonfive.addEventListener("click", () => {
  const table = document.getElementById("studentTable");

  const rows = Array.from(table.getElementsByTagName("tr")).slice(1); // Exclude the header row;

  // Sort the rows based on the full name (assuming the full name is in the first column)
  rows.sort((a, b) => {
    const nameA = a.cells[3].textContent;
    const nameB = b.cells[3].textContent;
    return nameA - nameB;
  });

  // Clear the current table content
  for (let i = 0; i < rows.length; i++) {
    table.appendChild(rows[i]);
  }
});

const SortButtonsix = document.getElementById("six");
