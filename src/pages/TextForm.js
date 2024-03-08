import React, { useState } from 'react'

// x = 23; // Gives an error since 'x' is not declared
// var x; 


export default function TextForm(props) {
    // var x;

    const handleUpClick = () => {
        // console.log("Upper");
        // setText("Data Converted");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (e) => {
        setText(e.target.value);
        console.log("Change click");
    }
    
    const handleDelete = () => {
        setText("");
    }

    const [text,setText] = useState("default");
    return (
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" style={{backgroundColor: props.mode==='light'?'white':'black', color: props.mode === 'dark' ? 'white' : 'red',
            placeholderTextColor: 'white'
        }}/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'black', color: props.mode==='dark'?'white':'black'}}></textarea>
        </div>
        
        <button className="btn btn-primary" onClick={handleUpClick}>Covert Text in Input Area</button>
        <button className="btn btn-secondary mx-4" onClick={handleDelete}>Delete</button>

        <div className="container my-4">
            <h1>Your Text Summary:</h1>
            <p>There are {text.split(" ").filter((element) => {return element.length!==0}).length} words and {text.length} characters.</p>
            <p>It will take {0.008* text.split(" ").filter((element) => {return element.length!==0}).length}minutes to read.</p>
        </div>
        <div className="container my-4">
            <h1>Preview:</h1>
            <p>{text.length>0 ? text:'Enter the text to get your Preview'} </p>
        </div>
    </div>
  )
}
