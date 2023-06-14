import React from 'react';
import { Container } from 'react-bootstrap';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import ServiceCard from './components/ServiceCard';
import EducationCard from './components/EducationCard';
import './App.css';

const services = [
  {
    title: 'Service 1',
    description: 'aaaaa'
  },
  {
    title: 'Service 2',
    description: 'bbbbbbbb'
  }
];

const education = [
  {
    school: 'School 1',
    degree: 'Degree 1',
    fieldOfStudy: 'Field of Study 1',
    startYear: 'Start Year 1',
    endYear: 'End Year 1'
  },
  {
    school: 'School 2',
    degree: 'Degree 2',
    fieldOfStudy: 'Field of Study 2',
    startYear: 'Start Year 2',
    endYear: 'End Year 2'
  }
];

const App = () => {
  return (
    <Container className="my-5">
      <Hero />
      <Skills />
      <h2>Services</h2>
      {services.map(service => (
        <ServiceCard
          key={service.title}
       
          serviceChild={service} 
        />
      ))}
      <h2>Education</h2>
      {education.map(edu => (
        <EducationCard
          key={edu.school}
          school={edu.school}
          degree={edu.degree}
          fieldOfStudy={edu.fieldOfStudy}
          startYear={edu.startYear}
          endYear={edu.endYear}
        />
      ))}
      <Contacts />
    </Container>
  );
};

export default App;