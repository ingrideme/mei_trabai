import React from 'react';

export default class Address extends React.Component {

    render(){
        return(
            <div className="address">
                <picture>
                    <source media="(max-width: 768px)" srcSet="/img/iconzap-S.png" />
                    <source media="(min-width: 769px)" srcSet="/img/iconzap-L.png" />
                    <img src="/img/iconzap-L.png" alt="WhatsApp de Amazonian"/>
                </picture>

                <strong> (xx) xxxx-xxxx</strong> <br/>
            </div>
        );
    }
}