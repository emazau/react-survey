import { useState } from "react";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [amount, setAmount] = useState(0);
  const initalForm = {
    color: "0",
    spendTime: [],
    details: "",
    name: "",
    email: ""   
    };
 
    
    const [userData, setUserData] = useState(initalForm);
    const [history, setHistory] = useState([]);



  const submitForm = (event) => {
    event.preventDefault();
    console.log(userData);
    setAmount(amount => amount+1)
    setHistory(prevItems => [...prevItems, userData])

    setUserData(initalForm);

    console.log(history);



  };

  const updateCheckbox = (event) =>{
      const name = event.target.name;
      const value = event.target.value;
      console.log(value)
      console.log(name)
      console.log(event.target.checked)
      


      if (event.target.checked && name === "spend-time" && value === "swimming" && userData.spendTime.includes("swimming")){
        const items = userData.spendTime.filter(i => i !== value)
        setUserData({ ...userData, spendTime: items})
      }
      else if (event.target.checked && name === "spend-time" && value === "noTime" &&  userData.spendTime.includes("noTime")) {
        const items = userData.spendTime.filter(i => i !== value)
        setUserData({ ...userData, spendTime: items})
      }
      else if (event.target.checked && name === "spend-time" && value === "chatting" &&  userData.spendTime.includes("chatting")) {
        const items = userData.spendTime.filter(i => i !== value)
        setUserData({ ...userData, spendTime: items})
      }
      else if (event.target.checked && name === "spend-time" && value === "bathing" &&  userData.spendTime.includes("bathing")) {
        const items = userData.spendTime.filter(i => i !== value)
        setUserData({ ...userData, spendTime: items})
      }
      else {
        setUserData({ ...userData, spendTime: [...userData.spendTime, value]})
      }


  };


  return (<>
  <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList history={history}/>
      </section>
      <section className="survey__form">
        
<form className="form" onSubmit={submitForm}>
  <h2>Tell us what you think about your rubber duck!</h2>


  
  <div className="form__group radio">
    <h3>How do you rate your rubber duck colour?</h3>
<ul>
  <li>
    <input id="color-one" type="radio" name="color" 
    value="1" 
    checked={userData.color == "1"}

    onChange={e => setUserData({...userData, color: e.target.value})} />
    
    <label htmlFor="color-one">1</label>
  </li>
  <li>
    <input id="color-two" type="radio" name="color" value="2"
    checked={userData.color == "2"}

    onChange={e => setUserData({...userData, color: e.target.value})}/>
    <label htmlFor="color-two">2</label>
  </li>
  <li>
    <input id="color-three" type="radio" name="color" value="3"
    checked={userData.color == "3"}

    onChange={e => setUserData({...userData, color: e.target.value})} />
    <label htmlFor="color-three">3</label>
  </li>
  <li>
    <input id="color-four" type="radio" name="color" value="4" 
    checked={userData.color === "4"}

    onChange={e => setUserData({...userData, color: e.target.value})}/>
    <label htmlFor="color-four">4</label>
  </li>
</ul>

  </div>
    
   <div className="form__group">
    <h3>How do you like to spend time with your rubber duck</h3>
    <ul>
  <li>
    <label
      ><input
        name="spend-time"
        type="checkbox"
        value="swimming"
        checked={userData.spendTime.includes("swimming")}
        onChange={updateCheckbox}
      />Swimming</label
    >
  </li>
  <li>
    <label
      ><input name="spend-time" type="checkbox" 
      value="bathing"
              checked={userData.spendTime.includes("bathing")}
        onChange={updateCheckbox}
      />Bathing</label>
  </li>
  <li>
    <label
      ><input
        name="spend-time"
        type="checkbox"
        value="chatting"
        checked={userData.spendTime.includes("chatting")}
        onChange={updateCheckbox}
      />Chatting</label
    >
  </li>
  <li>
    <label
      ><input name="spend-time" 
      type="checkbox" value="noTime"         
      checked={userData.spendTime.includes("noTime")}
      onChange={updateCheckbox} />
      I don&apos;t like to spend time with it
      </label>
  </li>
</ul>

  </div>
         
  <label
    >What else have you got to say about your rubber duck?
    <textarea
      name="review"
      cols="30"
      rows="10"
      onChange={e => setUserData({...userData, details: e.target.value})}
      value={userData.details}
    ></textarea></label
  ><label
    >Put your name here (if you feel like it):<input
      type="text"
      name="username"
      onChange={e => setUserData({...userData, name: e.target.value})}
      value={userData.name}
       /></label><label
    >Leave us your email pretty please??<input
      type="email"
      name="email"
      onChange={e => setUserData({...userData, email: e.target.value})}
      value={userData.email} /></label>
      <input className="form__submit" type="submit" 
      value="Submit Survey!" 
      onChange={submitForm}
      
      />





        </form>

        
        </section>
    </main>
    </>
  );
}

export default Survey;
