import React from 'react';
import './App.css';
import LocationList from "./LocationList";
import NewLocationForm from './NewLocationForm';
const App: React.FC = () => {
  return (
    <div className="App">
      <div className="App-title">
        <h1>Lighthouse App</h1>
      </div>
      <NewLocationForm />
      <LocationList />
    </div>
  );
}

export default App;
