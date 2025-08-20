import React , {useState}from 'react'

export default function About() {
    const [myStyle, setMyStyle] = useState({
        color:'white',
        backgroundColor:'black'
    } )
    
    const [btnText, setBtnText] = useState("Enable Light Mode")

    const toggleStyle = () => {
        if (myStyle.color === 'black'){
            setMyStyle({
        color:'white',
        backgroundColor:'black',
        border: '1px solid white'
    } )
    setBtnText("Enable Dark Mode")
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
                    TextUtils:
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>TextUtils is a simple yet powerful tool for analyzing and transforming your text.</strong>Whether you’re writing content, editing documents, or preparing formatted text, TextUtils helps you save time with quick and efficient text operations.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Features:
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                     Convert text to UPPERCASE or lowercase <br></br>

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
                   How to use:
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                     Type or paste your text in the input area. <br></br>

Choose from the available actions to modify your text.
<br></br>
See the results instantly in the preview section.<br></br>
                </div>
                </div>
            </div>
             <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Why TextUtils?
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    This app is designed for anyone who works with text regularly — students, writers, developers, and content creators — making text editing faster and more convenient.
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
