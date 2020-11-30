// import React, {useState} from "react";
// import questions from "../questions";
// // import handleOptionClick from "./Finish";



// function Card(props) {

//     return (
//     <div className="card">
      
//         <div className= "question-section">
//             <h2>{props.question}</h2>
//             </div>

//             <div className='answer-section'>
//               <button onClick = {handleOptionClick} >{props.answer.answerText}</button>
//               <button onClick = {handleOptionClick}>{props.answer2.answerText}</button>
//               <button onClick = {handleOptionClick}>{props.answer3.answerText}</button>
//               <button onClick = {handleOptionClick}>{props.answer4.answerText}</button>
// 					</div>
//     </div>
    
//   );
// }
// import React from "react";
// import questions from "../questions";
// import Card from "./Card";
// import Finish from "./Finish";


// function createCard(question){
//     return (
//       <Card 
//       key = {question.id}
//       question= {question.questionText}
//       answer ={question.options[0]}
//       answer2 ={question.options[1]}
//       answer3={question.options[2]}
//       answer4={question.options[3]}

//       />

//     )
//   }

// function App() {
//   return <div>
//      {questions.map(createCard)} 
//      <Finish/>
//   </div>;
// }

// export default App;
// <button key ={questions.id}
// onClick={}
// //   style={{ backgroundColor: isOptionClick ? "yellow" : "#252d4a" }}
// >{questions.answerText}</button>

 