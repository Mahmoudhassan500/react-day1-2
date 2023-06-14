import React from 'react';
import { ListGroup, ProgressBar } from 'react-bootstrap';

import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 90, variant: 'success' },
    { name: 'CSS', level: 80, variant: 'success' },
    { name: 'JavaScript', level: 70, variant: 'success' },
    { name: 'React', level: 60, variant: 'success' },
  ];

  return (
    <div className="my-5">
      <h2 className="mb-3">Skills</h2>
      <ListGroup>
        {skills.map((skill) => (
          <ListGroup.Item key={skill.name}>
            <div className="d-flex justify-content-between align-items-center">
              <div>{skill.name}</div>
              <div className="w-50">
                <ProgressBar now={skill.level} label={`${skill.level}%`} variant={skill.variant} />
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Skills;