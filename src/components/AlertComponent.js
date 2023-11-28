import React from 'react'

const AlertComponent = (props) => {

    const capitalize = (word)=>{
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    
    return (
        // this && is used to make is work : return only is both are not null   
        props.alertProp && <div className = "container d-flex justify-content-center ">
            <div class={`alert alert-${props.alertProp.type} col-sm-6 mt-5" role="alert`}>
                {capitalize(props.alertProp.type)} : {props.alertProp.message}
            </div>
        </div>
    )
}

export default AlertComponent
