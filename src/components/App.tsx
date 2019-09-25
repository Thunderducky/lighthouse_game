import React from 'react';
import './App.css';
import LocationList from "./LocationList";
import NewLocationForm from './NewLocationForm';
const App: React.FC = () => {
  return (
    <div className="App" style={{display:"flex"}}>
      <NewLocationForm />
      <LocationList />
    </div>
  );
}

export default App;
