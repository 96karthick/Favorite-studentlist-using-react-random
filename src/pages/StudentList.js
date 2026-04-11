import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function StudentList() {
  const { addToFavorites } = useContext(StudentContext);

  const students = [
    { id: 1, name: "Karthi", roll: 101 },
    { id: 2, name: "Arun", roll: 102 },
    { id: 3, name: "Vijay", roll: 103 },
    { id: 4, name: "Abdul", roll: 104 },
    { id: 5, name: "Kasi", roll: 105 },
    { id: 6, name: "sara", roll: 106 },
    { id: 7, name: "Arul", roll: 107 },
    { id: 8, name: "Sam", roll: 108 },
  ];

  return (
    <div>
      <h2>Student List</h2>

      {students.map((student) => (
        <div key={student.id}>
          <p>{student.name} - {student.roll}</p>
          <button onClick={() => addToFavorites(student)}>
            Add to Favourite
          </button>
        </div>
      ))}
    </div>
  );
}

export default StudentList;