import React from 'react';

import Slide from './main/Slide';
import Information from './main/Information';
import Maps from './main/Maps';
import Contact from './main/Contact';

export default class Main extends React.Component {

     render(){
        return(
            <div className="main">
                <Slide/>
                <Contact/>
                <Maps/>
                <Information/>                                          
            </div>
        );
        
     }
}