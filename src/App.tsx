import React from 'react';
import './sass/index.scss';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './Components/Navbar';
import ChartListContainer from './Components/ChartListContainer';
import { AppContextProvider } from './Context/AppContext';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <AppContextProvider>
      <div className="App">
        <Navbar />
        <ChartListContainer />
        
      </div>
    </AppContextProvider>
  );
}

export default App;
