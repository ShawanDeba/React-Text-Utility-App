


export default function AboutDarkMode(props) {


    

    // Creating a initial usestate of mode (white)

    // const [darkMode_Style, setMode] = useState({
    //     backgroundColor: 'white',
    //     color: 'black'
    // });


    // creating a initial use state of button

    // const [btnText, setBtnText] = useState("Enable Dark Mode")




    // function changeMode() {
    //     if (darkMode_Style.color === 'black') {
    //         setMode({
    //             backgroundColor: 'black',
    //             color: 'white'
    //         });
    //         setBtnText("Enable Light Mode");
    //     }

    //     else {
    //         setMode({
    //             backgroundColor: 'white',
    //             color: 'black'
    //         });
    //         setBtnText("Enable Dark Mode");
    //     }
    // }


    return (
        <>
            <div className='container p-0' >
                <div className="accordion my-4  mb-4 border-3 rounded border-opacity-50" id="accordionExample" >
                    <div className="accordion-item" >
                        <h2 className="accordion-header">
                            <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ backgroundColor: `${props.colorProp}`, color: `${props.colorProp === '#fff' || props.colorProp === '#D9AA02' ? '#000000' : '#fff'}` }}>
                                Analyze your text
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{ backgroundColor: `${props.colorProp}`, color: `${props.colorProp === '#fff' || props.colorProp === '#D9AA02' ? '#000000' : '#fff'}` }}>
                                Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ backgroundColor: `${props.colorProp}`, color: `${props.colorProp === '#fff' || props.colorProp === '#D9AA02' ? '#000000' : '#fff'}` }}>
                                Free to Use
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{ backgroundColor: `${props.colorProp}`, color: `${props.colorProp === '#fff' || props.colorProp === '#D9AA02' ? '#000000' : '#fff'}` }}>
                            <div className="accordion-body" >
                                TextUtils is a free character counter tool that provides instant character count & word count statistics for a given
                                text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character
                                limit…
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ backgroundColor: `${props.colorProp}`, color: `${props.colorProp === '#fff' || props.colorProp === '#D9AA02' ? '#000000' : '#fff'}` }}>
                                Browser Compatible
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{ backgroundColor: `${props.colorProp}`, color: `${props.colorProp === '#fff' || props.colorProp === '#D9AA02' ? '#000000' : '#fff'}` }}>
                                This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It
                                suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <button type="button" class="btn btn-primary" onClick={changeMode}>{btnText}</button> */}
        </>
    )
}
