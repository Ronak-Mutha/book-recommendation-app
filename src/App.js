import { useState, React } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

const booksDB = {
  javascript: [
    {
      name: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      rating: "4.5/5"
    },
    {
      name: "You Don't Know JS",
      author: "Kyle Simpson",
      rating: "4/5"
    },
    {
      name: "A Smarter Way to Learn JavaScript",
      author: "Mark Myers",
      rating: "3.5/5"
    }
  ],
  python: [
    {
      name:
        "Python Crash Course: A Hands-On, Project-Based Introduction to Programming",
      author: "Eric Matthes",
      rating: "4/5"
    },
    {
      name: "Learn Python the Hard Way",
      author: "Zed Shaw",
      rating: "3.5/5"
    },
    {
      name:
        "Automate the Boring Stuff with Python: Practical Programming for Total Beginners",
      author: "Al Sweigart",
      rating: "4/5"
    }
  ],
  react: [
    {
      name:
        "The Road to React: Your journey to master plain yet pragmatic React.js",
      author: "Robin Wieruch",
      rating: "4/5"
    },
    {
      name: "React Explained: Your Step-by-Step Guide to React",
      author: "Zac Gordon",
      rating: "4.5/5"
    },
    {
      name:
        "React Cookbook: Create Dynamic Web Apps with React Using Redux, Webpack, Node.js, and GraphQL",
      author: "Carlos Santana Roldán",
      rating: "4/5"
    }
  ]
};

const books = Object.keys(booksDB);

export default function App() {
  const [selectedLanguage, setLanguage] = useState("javascript");

  const languageClickHandler = (language) => setLanguage(language);

  return (
    <div className="App">
      <h1>
        ‍
        <span role="img" aria-label="book">
          📚
        </span>{" "}
        Programming Books
      </h1>
      <p>
        {" "}
        Checkout my favorite programming books. Select any language to get
        started.{" "}
      </p>

      <div>
        {books.map((language) => (
          <button
            key={language}
            onClick={() => languageClickHandler(language)}
            style={{
              backgroundColor: language === selectedLanguage ? "#FFE3E3" : "",
              borderWidth: language === selectedLanguage ? "3px" : ""
            }}
          >
            {" "}
            {language}{" "}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul>
          {booksDB[selectedLanguage].map((book) => (
            <li key={book.name}>
              <div className="name">{book.name} </div>
              <div className="author">{book.author} </div>
              <div className="rating">
                <FontAwesomeIcon icon={faStar} />
                {book.rating}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
