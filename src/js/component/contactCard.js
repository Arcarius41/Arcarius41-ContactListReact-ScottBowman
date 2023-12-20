import React from 'react';
import { useHref } from 'react-router';

export const ContactCard = ({contact}) => {
    return (
        <div className="card mb-3" style={{maxWidth:"100%"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="https://i.ibb.co/7J5cXcS/miguel-angel-hernandez-c-Obu-Sxlc-Uac-unsplash.jpg" className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">{contact.full_name}</h3>
              <p className="card-text fs-3">{contact.email}</p>
              <p className="card-text fs-3">{contact.phone}</p>
              <p className="card-text fs-3">{contact.address}</p>
              <button onClick={() => console.log(contact)}>click me</button>
            </div>
          </div>
        </div>
      </div>
    );
};


