import { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/books";
import "./css/App.css";
import logo from "./logos.png";

function App() {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <img src={logo} alt="logo" className="logo" />
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
