import React , {useState}from 'react'

export default function About() {
    const [myStyle, setMyStyle] = useState({
        color:'black',
        backgroundColor:'white'
    } )
    
    const [btnText, setBtnText] = useState("Enable Dark Mode")

    const toggleStyle = () => {
        if (myStyle.color === 'black'){
            setMyStyle({
        color:'white',
        backgroundColor:'black',
        border: '1px solid white'
    } )
    setBtnText("Enable Light Mode")
        }
        else{
            setMyStyle({
        color:'black',
        backgroundColor:'white'
    } )
    setBtnText("Enable Dark Mode")
    
        }

    }
  return (

                <div classNameName="Container" style={myStyle}>
                    <h1>About TextUtils</h1>
                    
                <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>TextUtils is a simple yet powerful tool for analyzing and transforming your text.</strong>Whether you’re writing content, editing documents, or preparing formatted text, TextUtils helps you save time<code>.accordion-body</code>with quick and efficient text operations.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>Features: <br></br></strong> Convert text to UPPERCASE or lowercase <br></br>

Remove extra spaces
<br></br>
Count words and characters
<br></br>
Estimate reading time
<br></br>
Live preview of your text
<br></br>
Light and Dark mode for better readability
<br></br>
Custom background color selection
<br></br> 
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>How to use: <br></br></strong>  Type or paste your text in the input area. <br></br>

Choose from the available actions to modify your text.
<br></br>
See the results instantly in the preview section.<br></br>
                </div>
                </div>
            </div>
             <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #4
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>Why TextUtils? <br></br></strong>This app is designed for anyone who works with text regularly — students, writers, developers, and content creators — making text editing faster and more convenient.
                </div>
                </div>
            </div>
            </div>
            <div classNameName="container">
            <button onClick={toggleStyle} type="button" classNameName="btn btn-primary my-3">{btnText}</button>
            </div>
        </div>
     )
}
