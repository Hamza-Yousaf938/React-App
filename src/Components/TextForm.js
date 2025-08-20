import React , {useState} from 'react'     //rfc

export default function TextForm(props) {
  
    const handleUpClick = ()=> {
        // console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase();
         props.showAlert("Converted to Upper Case", "success");
        setText(newText);
    }
    const handleLowClick = ()=> {
        let newText = text.toLowerCase();
        props.showAlert("Converted to Lower Case", "success");
        setText(newText);
    }
    const handleClearClick = ()=> {
        let newText = "";
         props.showAlert("Text Cleared", "success");
        setText(newText);
    }
    const Speak = ()=> {
        let msg = new SpeechSynthesisUtterance();
         props.showAlert("Speaking", "success");
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    const handleCopy = ()=> {
       
         props.showAlert("Copied to clipboard", "success");
        
     
        navigator.clipboard.writeText(text);
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
    
    
                <div className="container" style = {{color: props.mode === 'dark' ? 'white' : '#042743'}} >
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor: props.mode === 'dark' ? 'gray' : 'white' , color: props.mode === 'dark' ? 'white' : '#042743' }}  id="myBox" rows="8"></textarea>
                </div >
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={Speak}>Speak</button>
                 <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                </div>

<div className="container my-4" style = {{color: props.mode === 'dark' ? 'white' : '#042743'}} >
    <h2>Your text Summary</h2>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h3>Preview</h3>
         <p>{text.length>0?text:"Nothing to preview"}</p>
</div>
                </>
  )
}
