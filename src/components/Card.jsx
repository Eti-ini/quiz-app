import React, {useState} from "react";
import questions from "../questions";

function Card(){
    // const styleForCorrectAnswer = {backgroundColor: "blue"};
    // const styleForDefaultAnswer = {backgroundColor: "red"};
    // const styleForWrongAnswer = {backgroundColor: "yellow"};
    // const [isAnswerCorrect, setCorrect] = useState(false);
    // const [isClicked, setClicked] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    var percentage = Math.floor(score/questions.length * 100)

    function Comment(){
        if (percentage > 49){
            return <h1>Bravo! You did well!</h1>
        }else{
            return<h1>You can do better!</h1>
        }
    }
  
    function handleAnswerOptionClick(isCorrect){
        if (isCorrect === true){
            setScore(score + 1)
        }

        const nextQuestion = currentQuestion + 1;
		    if (nextQuestion < questions.length) {
			    setCurrentQuestion(nextQuestion);
		      } else {
			    setShowScore(true);
		    }
        // setCorrect(isCorrect===true)
        
        // setClicked(true)

            }

            // var selectedId = questions[currentQuestion].id
     
    return(
        <div className="card" >
            {showScore ? <div className=' score-section '>
					<h1>Your score is {score} out of {questions.length}</h1>
                    <h1>{percentage} %</h1>
                    <h4>{Comment()}</h4>

				</div>:(
                    <>
                      

                <div className="card">

				   <div className= "question-section">
           <div className='question-counter'>
               <h3>
							 {currentQuestion + 1}</h3>
						</div>
             <div className="question">{questions[currentQuestion].questionText}</div>
             </div>
             
                 <div className="answer ">
                 {questions[currentQuestion].options.map((option, index) => (
                  <button key={index} selectedId= {option.index} onClick={() => handleAnswerOptionClick(option.isCorrect, index)
                    
                }
                // style={{backgroundColor: isClicked ? "red" : "yellow"}}

                // style={option.id === selectedId && isAnswerCorrect?
                //     styleForCorrectAnswer : option.id=== selectedId && !isAnswerCorrect?
                //     styleForWrongAnswer: styleForDefaultAnswer}  

                    >{option.answerText}</button>
             ))}
                    
                 </div>

      
                </div>
            
                    </>
                )                 
            }
           
      </div>
    )
}

export default Card;