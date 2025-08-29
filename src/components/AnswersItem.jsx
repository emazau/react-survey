// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below
/* eslint-disable react/prop-types */

// This is the main component being exported from this file
export default function AnswersItem({data, key}) {
  console.log(data);
  console.log(key);
  return (
    <li>
      <article className="answer">
        <h3>{data.name || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{data.color}</span>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{data.email}</span>
        </p>
      </article>
    </li>
  );
}
