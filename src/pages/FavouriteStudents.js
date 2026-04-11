import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function FavouriteStudents() {
  const { favorites, removeFromFavorites } = useContext(StudentContext);

  return (
    <div>
      <h2>Favourite Students</h2>

      {favorites.length === 0 ? (
        <p>No favourites added</p>
      ) : (
        favorites.map((student) => (
          <div key={student.id}>
            <p>{student.name} - {student.roll}</p>
            <button onClick={() => removeFromFavorites(student.id)}>
              Remove</button>
          </div>
        ))
      )}
    </div>
  );
}

export default FavouriteStudents;