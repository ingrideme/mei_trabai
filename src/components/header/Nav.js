import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default class Nav extends React.Component {
    render(){
        return(
            <div className="nav">
                <AnchorLink href='#home'>Home</AnchorLink>
                <AnchorLink href='#benefits'>Benefits and Challanges</AnchorLink>
                <AnchorLink href='#services'>Amazon Elastic Container Service</AnchorLink>
                <AnchorLink href='#cases'>ECS use Cases</AnchorLink>
                <AnchorLink href='#conclusion'>Conclusion</AnchorLink>
                <AnchorLink href='#resources'>Resources</AnchorLink>

            </div>
        );
    }
}