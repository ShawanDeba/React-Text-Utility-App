import React, { useState } from 'react'




export default function AboutDarkMode(props) {


    // Creating More function of use State

    // Creating a initial usestate of mode (white)
    const [darkMode_Style, setMode] = useState({
        backgroundColor: 'white',
        color: 'black'
    });


    // creating a initial use state of button
    const [btnText, setBtnText] = useState("Enable Dark Mode")

    function changeMode() {

        if (darkMode_Style.color === 'black') {
            setMode({
                backgroundColor: 'black',
                color: 'white'
            });
            setBtnText("Enable Light Mode");
        }

        else {
            setMode({
                backgroundColor: 'white',
                color: 'black'
            });
            setBtnText("Enable Dark Mode");
        }
    }
    

    return (
        <>
            <div className='container p-0' >
                <div className="accordion my-4  mb-4 border-3 rounded border-opacity-50" id="accordionExample" >
                    <div className="accordion-item" >
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor:`${props.colorProp}`,color: `${props.colorProp === '#fff' || props.colorProp === '#D9AA02'? '#000000' : '#fff'}`}}>
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={darkMode_Style}>
                            <div className="accordion-body" style={{backgroundColor:`${props.colorProp}`,color: `${props.colorProp === '#fff' || props.colorProp === '#D9AA02'? '#000000' : '#fff'}`}}>
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor:`${props.colorProp}`,color: `${props.colorProp === '#fff' || props.colorProp === '#D9AA02'? '#000000' : '#fff'}`}}>
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{backgroundColor:`${props.colorProp}`,color: `${props.colorProp === '#fff' || props.colorProp === '#D9AA02'? '#000000' : '#fff'}`}}>
                            <div className="accordion-body" >
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor:`${props.colorProp}`,color: `${props.colorProp === '#fff' || props.colorProp === '#D9AA02'? '#000000' : '#fff'}`}}>
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{backgroundColor:`${props.colorProp}`,color: `${props.colorProp === '#fff' || props.colorProp === '#D9AA02'? '#000000' : '#fff'}`}}>
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button type="button" class="btn btn-primary" onClick={changeMode}>{btnText}</button>
        </>
    )
}
