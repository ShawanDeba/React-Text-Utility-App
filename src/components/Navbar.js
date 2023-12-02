import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';



const Navbar = (props) =>
(
  <nav className="navbar navbar-expand-lg"  style={{backgroundColor:`${props.colorProp}`,color:`${props.colorProp === '#fff' ? '#000000' : '#fff'}`}}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/" style={{color:`${props.colorProp === '#fff'||props.colorProp==='#D9AA02' ? '#000000' : '#fff'}`}}>{props.title}</Link>


      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            {/* use link istead of anchor to work with react touter dom */}
            <Link className="nav-link active" aria-current="page" to="/" style={{color:`${props.colorProp === '#fff'||props.colorProp==='#D9AA02' ? '#000000' : '#fff'}`}}>Home</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/about" style={{color:`${props.colorProp === '#fff'||props.colorProp==='#D9AA02' ? '#000000' : '#fff'}`}}>{props.about}</Link>
          </li>
        </ul>

        <div className="dropdown my-2 me-3">
          <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
          {`${props.colorNameProp}`}
          </button>
          <ul className="dropdown-menu">
            <li><button className='dropdown-item' onClick={props.changeColorThemeProp} id='blue'>Blue</button></li>
            <li><button className='dropdown-item' onClick={props.changeColorThemeProp} id='green'>Green</button></li>
            <li><button className='dropdown-item' onClick={props.changeColorThemeProp} id='red'>Red</button></li>
            <li><button className='dropdown-item' onClick={props.changeColorThemeProp} id='yellow'>Yellow</button></li>
          </ul>
        </div>



        <div className={`form-check form-switch`} style={{color:`${props.colorProp === '#fff' ||props.colorProp==='#D9AA02'? '#000000' : '#fff'}`}}>
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" data-toggle="switch" onClick={props.changeThemeProp} />
          <label className="form-check-label" for="flexSwitchCheckDefault">{`Enable ${props.colorProp === '#fff' ? 'dark' : 'light'} Mode`}</label>
          {console.log(props.colorProp)}
        </div>

      </div>
    </div>
  </nav>
);


// Used to define the data type of props
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: "Set your Title",
  about: "set your about"
}
// props are basically arguemtns passed to function based components 
// the argumets are paseed in App.js during function calling
export default Navbar
