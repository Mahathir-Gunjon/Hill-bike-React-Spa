import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Components/Shop/Shop';
import Faq from './Components/Faq/Faq';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Shop></Shop>
      <Faq></Faq>
    </div>
  );
}

export default App;
