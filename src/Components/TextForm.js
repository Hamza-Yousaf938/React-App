import React , {useState} from 'react'     //rfc

export default function TextForm(props) {
    const handleUpClick = ()=> {
        // console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = ()=> {
        let newText = "";
        setText(newText);
    }
    const Speak = ()=> {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    const handleCopy = ()=> {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleOnChange = (event)=> {
        // console.log("On changed click");
        setText(event.target.value);
    }
    const [text, setText] = useState(''); // in useState we write for user enter text here
    // text = new text; wrong way to use it
    // setText("new text");
  return ( 
    <>
    
    
                <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange}id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={Speak}>Speak</button>
                 <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                </div>

<div className="container my-4">
    <h2>Your text Summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
</div>
                </>
  )
}
