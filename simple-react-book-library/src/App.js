import logo from "./logo.svg";
import "./App.css";
import { BookProvider } from "./BookContext";
import Books from "./components/Book";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import BookDetails from "./components/BookDetails";
import NotFound from "./components/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import SectretBooks from "./components/SecretBooks";

function App() {
  return (
    <BookProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/books" element={<Navigate to="/" />} />
          <Route path="/book/:bookId" element={<BookDetails></BookDetails>} />
          <Route path="*" element={<NotFound></NotFound>} />
          <Route
            path="/secret"
            element={<PrivateRoute Component={<SectretBooks />} />}
          />
        </Routes>
      </Router>
    </BookProvider>
  );
}

export default App;
