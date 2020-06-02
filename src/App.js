import React, { Component } from 'react';
import ContactCard from './ContactCard';
import './App.css';

class App extends Component {
  render(){
    return (
      <>
      <ContactCard name="John" mobile="917-987-7890" work="800-888-1234" email="john@work.com"/>
      <ContactCard name="Mike" mobile="347-123-4512" work="800-888-1234" email="mike@work.com"/>
      <ContactCard name="Sam" mobile="646-319-0009" work="800-888-1234" email="Sam@work.com"/>
      <ContactCard name="Jake" mobile="646-419-8765" work="800-888-1234" email="jake@work.com"/>
     </>
    )
  }
}



export default App;
