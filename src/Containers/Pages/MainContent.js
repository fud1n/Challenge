import React from 'react'
import EclipseRed from '../../Assets/EclipseRed.svg'
import EclipseOrange from '../../Assets/EclipseOrange.svg'
import EclipseGreen from '../../Assets/EclipseGreen.svg'

const MainContent = () =>{
    return(
    <React.Fragment>
        <div className='items'>
            <img src={EclipseRed} className='eclipseRed'/>
            <h1 className='box-headers'>ΕξαγωγH</h1>
            <span className='box-text'>  Εξαγωγή υλικών ή ρεταλιών απο την αποθήκη </span>
        </div>
        <div className='items'>
            <img src={EclipseOrange} className='eclipseOrange'/>
            <h1 className='box-headers'>ΜΕΤΑΚΙΝΗΣΗ</h1>
            <span className='box-text'>  Εξαγωγή υλικών ή ρεταλιών απο την αποθήκη </span>
        </div>
        <div className='items'>
            <img src={EclipseGreen} className='eclipseGreen'/>
            <h1 className='box-headers'>ΕΙΣΑΓΩΓΗ</h1>
            <span className='box-text'>  Εξαγωγή υλικών ή ρεταλιών απο την αποθήκη </span>
        </div> 
    </React.Fragment>
    )
}

export default MainContent