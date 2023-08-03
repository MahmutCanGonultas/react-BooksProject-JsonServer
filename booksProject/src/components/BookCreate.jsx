import { useState } from "react";
import useBooksContext from "../hooks/use-book-context";
import "../css/BookCreate.css";

function BookCreate() {
  const [title, setTitle] = useState("");
  const { createBook } = useBooksContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle("");
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className="book-create">
      <h3 className="book-create_add-title">Add a Book</h3>
      <form onSubmit={handleSubmit} className="book-create_form">
        <label className="book-create_title">Title</label>
        <div className="as">
          <input
            onChange={handleChange}
            value={title}
            className="input input-create"
          />
          <button className="btn btn-create">Add</button>
        </div>
      </form>
    </div>
  );
}

export default BookCreate;
