import { useState } from "react";
import reviews from "./data.js";
import List from "./List.jsx";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
// console.log(reviews);
const App = () => {
  const [user, setUser] = useState(reviews);
  const [index, setIndex] = useState(0);

  const pervBtn = () => {
    setIndex((curIndex) => {
      const newIndex = curIndex - 1;
      if (newIndex < 1) {
        return user.length - 1;
      }
      return newIndex;
    });
  };
  const nextBtn = () => {
    setIndex((curIndex) => {
      const newIndex = curIndex + 1;
      if (newIndex > user.length - 1) {
        return 0;
      }
      return newIndex;
    });
  };

  const random = () => {
    const randomNum = Math.floor(Math.random() * user.length);
    setIndex(randomNum);
  };

  const { image, name, job, text } = user[index];
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <div className="quote-icon">
            <FaQuoteRight />
          </div>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={pervBtn}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextBtn}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={random}>
          surprise
        </button>
      </article>
    </main>
  );
};
export default App;
