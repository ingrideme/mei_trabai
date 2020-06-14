import React from 'react';

export default class Logo extends React.Component {

    render(){
        return(
            <div className="logo">
                <picture>
                    <source media="(max-width: 768px)" srcSet="/img/icon-S.png" />
                    <source media="(min-width: 769px)" srcSet="/img/icon-L.png" />
                    <img src="/img/icon-L.png" alt="Logomarca Amazon"/>
                </picture>
            </div>
        );
    }
}