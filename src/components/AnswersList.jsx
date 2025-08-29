import AnswersItem from "./AnswersItem";
/* eslint-disable react/prop-types */
export default function AnswersList({history }) {
  console.log("Inside AnswersList: ", history);


  return (
    <ul>
      {history.map((data, i) => (
        <AnswersItem data={data} key={i} />
      ))}
    </ul>
  );
}
