import React from 'react';
import { Table } from 'react-bootstrap'
const EducationCard = (props) => {
    return (
      <div className="my-5">
        <h2 className="mb-3">Education</h2>
        <Table striped bordered hover className="education-table">
          <thead>
            <tr>
            <th>key</th>
            <th>school</th>
            <th>degree</th>
            <th>fieldOfStudy</th>
            <th>startYear</th>
            <th>endYear</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{props.key}</td>
              <td>{props.school}</td>
              <td>{props.degree}</td>
              <td>{props.fieldOfStudy}</td>
              <td>{props.startYear}</td>
              <td>{props.endYear}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
  
  export default EducationCard;