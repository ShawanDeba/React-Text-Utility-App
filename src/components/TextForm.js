import React, { useState } from 'react'


export default function TextForm(props) {

    let textbox = document.getElementById('textbox');

    // Function to change the text
    const changeText = (event) => {
        setText(event.target.value);
        console.log("text area changed");

    }

    // function to change the text using the button
    const changeUpperCase = () => {
        if (document.getElementById('textbox').value === "")
            props.showAlertProp("Please Enter Some Text", "danger")

        else {
            setText(text.toUpperCase());
            props.showAlertProp("Converted to upper Case", "success")
        }

    }

    const changeLowerCase = () => {
        if (document.getElementById('textbox').value === "")
            props.showAlertProp("Please Enter Some Text", "danger")
        // alert("Please Enter Some Text");

        else {
            setText(text.toLowerCase());
            props.showAlertProp("Converted to lower Case", "success")

        }
    }

    const clear_text = () => {
        if (document.getElementById('textbox').value === "")
            alert("Please Enter Some Text");

        else {
            setText("");
            props.showAlertProp("Text Cleared", "success")

        }
    }

    const capitalizefirst_text = () => {
        if (document.getElementById('textbox').value === "")
            alert("Please Enter Some Text");

        else {

            let words = text.split(" ");

            words = words.map((ele) => {
                return ele[0].toUpperCase() + ele.slice(1).toLowerCase();
            });

            console.log(words);
            let temp_text = words.join(" ");
            setText(temp_text);
        }
    }


    const copyToClipboard = () => {
        if (document.getElementById('textbox').value === "")
            props.showAlertProp("Please Enter Some Text", "danger");

        else {
            textbox.select();
            navigator.clipboard.writeText(text);
            props.showAlertProp("Text Copied", "success")
        }
    }


    const removeExtraSpace = () => {
        if (document.getElementById('textbox').value === "")
            props.showAlertProp("Please Enter Some Text", "danger");

        else {
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "));
            props.showAlertProp("Extra Space Removed", "success")
        }
    }




    /*
        This is a example of STATE and STATE HOOK
        this is how you change a variable in React, 
        we are declaring a variable TEXT and then passing it to the value of TEXTAREA
    */
    let [text, setText] = useState();
    console.log("text:" + text);
    // console.log("text:" + textbox.value);


    // setText("hello world"); // setText is a function which is used to change the value of text
    // text = "hello world"; // we can't change like this


    let number_of_words = 0;

    if (text !== undefined && text !== "") {

        text.split(" ").forEach(element => {
            if (element !== "")
                number_of_words++;

        });


        // Same Function for characters
        // let newText = text.split(/[ ]+/);
        // newText = newText.join(" ");
        // number_of_characters = newText.length;
    }




    


    return (
        <div className='mt-5'>
            <h1 className="" style={{ color: `${props.colorProp === '#fff' || props.colorProp === '#D9AA02' ? '#000000' : '#fff'}` }}>{props.heading}</h1>

            <div className="mb-3 border border-primary mb-4 border-4 rounded border-opacity-50" data-bs-theme={props.mode} style={{ color: `${props.colorProp === '#fff' ? '#000000' : '#fff'}` }}>
                <textarea className="form-control" value={text} onChange={changeText} id="textbox" rows="8" style={{ backgroundColor: `${props.colorProp}`, color: `${props.colorProp === '#fff' || props.colorProp === '#D9AA02'? '#000000' : '#fff'}` }}></textarea>
            </div>

            <button className="btn btn-primary " onClick={changeUpperCase}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={changeLowerCase}>Convert To Lowercase</button>
            <button className="btn btn-primary mx-3" onClick={clear_text}>Clear</button>
            <button className="btn btn-primary mx-3" onClick={capitalizefirst_text}>Capitalize First Letter</button>
            <button className="btn btn-primary mx-3" onClick={copyToClipboard}>Copy To Clipboard</button>
            <button className="btn btn-primary mx-3" onClick={removeExtraSpace}>Remove Extra Space</button>

            <div className={`text-summary my-4 border border-primary p-3 mb-4 border-4 rounded border-opacity-50`} style={{ backgroundColor: `${props.colorProp}`, color: `${props.colorProp === '#fff' || props.colorProp === '#D9AA02' ? '#000000' : '#fff'}` }}>
                <h2>Text Summary</h2>
                <p>Number Of Words : {text === undefined || text === "" ? 0 : number_of_words}</p>

                <p>Number Of Characters : {text === undefined ? 0 : text.length}</p>
                <p>Reading Time : {text === undefined || text === "" ? 0 : number_of_words * 0.008}</p>

                <h2>Preview</h2>
                <p>{text}</p>
            </div>

        </div>
    )
}
