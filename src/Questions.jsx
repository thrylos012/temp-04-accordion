import React from "react";
import SingleQuestion from "./SingleQuestion";

const Questions = ({ questions, activeId, toggleCuestion }) => {
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            {...question}
            activeId={activeId}
            toggleCuestion={toggleCuestion}
          />
        );
      })}
    </section>
  );
};

export default Questions;
