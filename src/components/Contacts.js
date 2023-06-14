import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import './Contacts.css';


const Contacts = () => {
  return (
    <div className="my-5">
      <h2 className="mb-3">Contacts</h2>
      <ListGroup horizontal>
        <ListGroup.Item className="border-0 p-0">
          <a href="#" className="contact-link"><FontAwesomeIcon icon={faFacebook} /></a>
        </ListGroup.Item>
        <ListGroup.Item className="border-0 p-0">
          <a href="#" className="contact-link"><FontAwesomeIcon icon={faTwitter} /></a>
        </ListGroup.Item>
        <ListGroup.Item className="border-0 p-0">
          <a href="#" className="contact-link"><FontAwesomeIcon icon={faLinkedin} /></a>
        </ListGroup.Item>
        <ListGroup.Item className="border-0 p-0">
          <a href="#" className="contact-link"><FontAwesomeIcon icon={faGithub} /></a>
        </ListGroup.Item>
      </ListGroup>
     
    </div>
  );
};

export default Contacts;