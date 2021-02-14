import React, {Component} from 'react'
import './Web.css'
import WebLogo from '../../Assets/WebLogo.svg'
import SearchField from 'react-search-field'
import Sidemenu from '../../Components/Sidemenu'



import { BrowserRouter, Switch, Route } from "react-router-dom";


import Settings from '../Pages/Settings'
import StorageOne from '../Pages/StorageOne'
import StorageTwo from '../Pages/StorageTwo'
import StorageThree from '../Pages/StorageThree'
import StorageFour from '../Pages/StorageFour'
import Entry from '../Pages/Entry'
import MainContent from '../Pages/MainContent'



class Web extends Component {
    constructor(props){
        super();
        this.state={
           
        }
    }

    onChange = () =>  {
         
    }
    
    onClick=(e) =>{
        if (e.target.classList.contains('side-navigation-panel-select-option-text')){
            console.log('ti vrika', e.target.textContent)
            document.getElementById('header-changer').textContent=e.target.textContent
        }
        
    }

    
    render(){
        return(
            <BrowserRouter>
            <div className="grid-container" onClick={this.onClick}>
                <div className="Menu">
                    <img src={WebLogo} className='image-web'/>
                    <Sidemenu/>
                </div>
                <div className="Main">
                <div className="grid-container-Content">
                    <div className="Header">
                        <h1 id='header-changer' className="header-web">Κεντρική Σελίδα</h1>
                            <SearchField
                                placeholder="Αναζήτηση υλικού, έλεγχος αποθεμάτων"
                                onChange={this.onChange}
                                classNames="test-class"
                            />
                    </div>
                    <div id="Content">
                    <Switch>
                        <Route path="/Web" component={MainContent}/>
                        <Route path="/Storage/StorageOne" component={StorageOne}/>
                        <Route path="/Storage/StorageTwo" component={StorageTwo}/>
                        <Route path="/Storage/StorageThree" component={StorageThree}/>
                        <Route path="/Storage/StorageFour" component={StorageFour}/>
                        <Route path="/Entry" component={Entry}/>=
                        <Route path="/settings" component={Settings}/>
                    </Switch>
                    </div>
                </div>
                </div>
            </div>
            </BrowserRouter>
        )
    }
}

export default Web