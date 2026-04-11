import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentList from "./pages/StudentList";
import FavouriteStudents from "./pages/FavouriteStudents";
import Navbar from "./components/Navbar";
import { StudentProvider } from "./context/StudentContext";

function App() {
  return (
    <StudentProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/favorites" element={<FavouriteStudents />} />
        </Routes>
      </BrowserRouter>
    </StudentProvider>
  );
}

export default App;
