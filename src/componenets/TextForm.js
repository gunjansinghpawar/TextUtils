import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted TO UpperCase!", "success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted TO LowerCase!', 'success');
    }
    const clearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert('Cleared!', 'success');
    }

    const handleOnChange = (e) => {
        setText(e.target.value);
    }
    const handleHitory = () => {
        if (text.trim() !== '') {
            setHistory([...history, text]);
            setText(''); 
            props.showAlert('Saved To History!', 'success');
        }
    }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert('Extra Spaced Is Deleted!', 'success');
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert('Copied!', 'success');
    }

    const handlePrevious = (index) => {
        setText(history[index]);
    }
    const handleConvert = () => {
        setText(text.replace(/\b\w/g, (char) => char.toUpperCase()));
        props.showAlert('All Fisrt Letter Conerted To UpperCase!', 'success');
    };
    const [text, setText] = useState('');
    const [history, setHistory] = useState([]);
    return (
        <>
            <div>
                <div className="mb-3">
                    <h1>ENTER THE TEXT TO UTILS</h1>
                    <textarea className="form-control my-3" value={text} placeholder="Enter The Text Here" onChange={handleOnChange} id="myBox" rows="8" style={props.myStyle}></textarea>
                </div>
                <button className={`btn btn-${props.btnMode} my-1 mx-1`} onClick={handleUpClick}>CONVERT TO UPPERCASE</button>
                <button className={`btn btn-${props.btnMode}`} onClick={handleLoClick}>CONVERT TO LOWERCASE</button>
                <button className={`btn btn-${props.btnMode} my-1 mx-1`} onClick={handleHitory}>SAVE TO HISTORY</button>
                <button className={`btn btn-${props.btnMode}`} onClick={handleExtraSpace}>REMOVE EXTRA SPACE</button>
                <button className={`btn btn-${props.btnMode} my-1 mx-1`} onClick={handleCopy}>Copy To Clipboard</button>
                <button className={`btn btn-${props.btnMode}`} onClick={clearClick}>Clear Click</button>
                <button className={`btn btn-${props.btnMode} my-1 mx-1`} onClick={handleConvert}>CAPITALIZE TEXT</button>
            </div>
            <div className='container'>
                <h1>YOUR TEXT HAVE </h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} WORDS {text.length} CHARATCTERS</p>
                <p>Minute To Read This {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}min</p>
            </div>
            <h2>History</h2>
            <div className="conatiner border border-2 border-secondary p-5 my-2 pri" id="history">
                <ul>
                    {history.map((item, index) => (
                        <li key={index} onClick={() => handlePrevious(index)}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
} 