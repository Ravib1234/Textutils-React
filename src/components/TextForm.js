import React, { useState } from "react";


export default function TextForm(props) {

const handleUpClick = ()=> {
  let newText = text.toUpperCase(); //Converts to Upper Text
  setText(newText);
  props.showAlert("Converted to uppercase","success");
}
const handleDownClick = ()=> {    //Converts to Lower Text
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success");
  }

  
const handleClearClick = ()=> {     //Clears Text
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared","success");
    
  }
const handleOnChange = (event)=> {  // From this function we can edit the text.
  
    setText(event.target.value)
}


  let [text, setText] = useState("");
// text = "new text"; // Wrong way to change the state
//   setText = ("new text"); // Correct way to change the state
  return (
      <>
    <div className="conatiner" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
         color:props.mode === 'dark' ? 'white' : '#042743'}}></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Conver to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleDownClick}>Conver to Lowercase</button>
      <button className="btn btn-primary mx-2" id="clear" onClick={handleClearClick}>Clear Text</button>
    </div>

    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h2>Your Text Summary</h2>
        <p> {text.split(' ').length} words and  {text.length} characters</p>
        <p>{0.08 * text.split(' ').length} Minutes to read</p>
        <h2>preview</h2>
        <p>{text.length>0 ?text: "Enter Something to preview it here"}</p>
    
  </div>
    
    </>
  );
}