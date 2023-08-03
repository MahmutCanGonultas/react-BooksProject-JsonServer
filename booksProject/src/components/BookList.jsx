import BookShow from "../components/BookShow";
import useBooksContext from "../hooks/use-book-context";
import "../css/BookList.css";

function BookList() {
  const { books } = useBooksContext();

  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
