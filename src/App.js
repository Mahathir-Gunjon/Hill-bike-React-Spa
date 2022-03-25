import { useEffect, useState } from 'react';
import './App.css';
import Bikes from './Components/Bikes/Bikes';
import Navbar from './Components/Navbar/Navbar';

function App() {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setBikes(data))
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="card-container container-fluid">
        {
          bikes.map(bike => <Bikes bike={bike} key={bike.id}></Bikes>)
        }
      </div>
    </div>
  );
}

export default App;
