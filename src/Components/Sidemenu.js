import React from 'react';
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { useHistory, useLocation } from "react-router-dom";
import './Sidemenu.css'


import Dashboard from '../Assets/Dashboard.svg'
import StorageOne from '../Assets/StorageOne.svg'
import StorageTwo from '../Assets/StorageTwo.svg'
import StorageThree from '../Assets/StorageThree.svg'
import StorageFour from '../Assets/StorageFour.svg'
import BasicTable from '../Assets/BasicTable.svg'
import Entry from '../Assets/Entry.svg'
import Settings from '../Assets/Settings.svg'


function Sidemenu() {
  const history = useHistory();
  const location = useLocation();


    return (
      <React.Fragment>
      <div className='sidebar'>
        <div className='Navigation-Header'>
          <img src={BasicTable}/> 
          <span>ΜΕΝΟΥ ΕΠΙΛΟΓΩΝ</span>
        </div>
        <Navigation
            activeItemId={location.pathname}
            onSelect={({itemId}) => {
              history.push(itemId)
            }}
            items={[
              {
                title: 'Κεντρική Σελίδα',
                itemId: '/Web',
                elemBefore: () => <img src={Dashboard} />,
              },
              {
                title: 'Αποθήκη 1',
                itemId: '/Storage/StorageOne',
                elemBefore: () => <img src={StorageOne} />,
              },
              {
                title: 'Αποθήκη 2',
                itemId: '/Storage/StorageTwo',
                elemBefore: () => <img src={StorageTwo} />,
              },
              {
                title: 'Αποθήκη 3',
                itemId: '/Storage/StorageThree',
                elemBefore: () => <img src={StorageThree} />,
              },
              {
                title: 'Αποθήκη 4',
                itemId: '/Storage/StorageFour',
                elemBefore: () => <img src={StorageFour} />,
              }
            ]}
          />
        <div className='Navigation-Footer'>
          <img src={BasicTable}/> 
          <span>ΚΑΤΑΧΩΡΙΣΗ ΥΛΙΚΩΝ ΚΑΙ ΚΩΔΙΚΩΝ</span>
        </div>
        <Navigation
            activeItemId={location.pathname}
            onSelect={({itemId}) => {
              history.push(itemId);
            }}
            items={[
              {
                title: 'Καταχώριση',
                itemId: '/Entry',
                elemBefore: () => <img src={Entry} />,
              },
            ]}
          />
          
      </div>
      <div className='settings'>
      <Navigation
        activeItemId={location.pathname}
        onSelect={({itemId}) => {
          history.push(itemId);
        }}
        items={[
          {
            title: 'ΡΥΘΜΙΣΕΙΣ',
            itemId: '/settings',
            elemBefore: () => <img src={Settings} />,
          },
        ]}
      />
      </div>
      </React.Fragment>
    );
}
export default Sidemenu