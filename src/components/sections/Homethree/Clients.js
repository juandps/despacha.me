import React, { Component } from 'react';

import companyicon1 from '../../../assets/img/clients/1.png';
import companyicon2 from '../../../assets/img/clients/2.png';
import companyicon3 from '../../../assets/img/clients/3.png';
import companyicon4 from '../../../assets/img/clients/4.png';
import companyicon5 from '../../../assets/img/clients/5.png';
import companyicon6 from '../../../assets/img/clients/6.png';

const clientpost = [
    {
        icon: companyicon1,
        companyname: "Green Co.",
    },
    {
        icon: companyicon2,
        companyname: "Green Co.",
    },
    {
        icon: companyicon3,
        companyname: "Green Co.",
    },
    {
        icon: companyicon4,
        companyname: "Green Co.",
    },
    {
        icon: companyicon5,
        companyname: "Green Co.",
    },
    {
        icon: companyicon6,
        companyname: "Green Co.",
    },
]
class Clients extends Component {
    render() {
        return (
            <div className="andro_companies">
                {clientpost.map((item, i) => (
                    <div key={i} className="andro_companies-item">
                        <img src={item.icon} alt="client" />
                        <div className="andro_companies-item-name">
                            <span>{item.companyname}</span>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Clients;