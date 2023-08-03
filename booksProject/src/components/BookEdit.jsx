import { useState } from "react";
import useBooksContext from "../hooks/use-book-context";
import "../css/BookEdt.css";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useBooksContext();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    editBookById(book.id, title);
  };

  return (
    <div className="book-edit">
      <form className="book-edit_form" onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" onChange={handleChange} value={title} />
        <button className="btn btn-create">Save</button>
      </form>
    </div>
  );
}

export default BookEdit;
