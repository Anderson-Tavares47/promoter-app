import React, { useState } from 'react';

const AnswerForm = ({ questions }) => {
  const [answers, setAnswers] = useState({});
  
  const handleChange = (e, index) => {
    const updatedAnswers = { ...answers };
    updatedAnswers[index] = e.target.value;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(answers); // Você pode fazer o que quiser com as respostas aqui
  };

  return (
    <div>
      <h1>Answer Questions</h1>
      <form onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <div key={index}>
            <label>
              {question.text} - Type: {question.type}
              <input
                type={question.type === 'integer' ? 'number' : 'text'}
                value={answers[index] || ''}
                onChange={(e) => handleChange(e, index)}
                required
              />
            </label>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AnswerForm;
