interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const Student1: Student = {
    firstName: 'Nicolas',
    lastName: 'Rondon',
    age: 20,
    location: 'Colimbia',
};

const Student2: Student = {
    firstName: 'Laura',
    lastName: 'Sanchez',
    age: 18,
    location: 'Colombia',
};

const studentsList: Student[] = [Student1, Student2];

function renderTable(students: Student[]): void {
  const table = document.createElement("table");
  const tableBody = document.createElement("tbody");

  students.forEach((student) => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);

  document.body.appendChild(table);
}
renderTable(studentsList);
