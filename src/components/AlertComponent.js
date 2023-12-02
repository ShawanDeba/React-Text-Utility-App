import React from 'react'

const AlertComponent = (props) => {

    const capitalize = (word)=>{
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    
    return (
        // this && is used to make is work : return only is both are not null 
         <div style={{height:'50px'}}>

        {props.alertProp && <div className = "d-flex justify-content-center">
            <div class={`alert alert-${props.alertProp.type} col-sm-6 w-100" role="alert`}>
                {capitalize(props.alertProp.type)} : {props.alertProp.message}
            </div>
        </div>}
        </div>  
    )
}

export default AlertComponent
