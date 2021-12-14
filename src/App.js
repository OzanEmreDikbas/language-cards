
// import './App.css';
// import Cards from './components/cards/Cards';
// import Header from './components/header/Header';
// import Navbar from './components/navbar/Navbar';

// function App() {
//   return (
//     <div className="App">
//         <Navbar />
//         <Header />
//         <Cards />
//     </div>
//   );
// }

// export default App;

import Cards from "./components/cards/Cards";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { useState } from "react";
function App() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleShow = () => setIsVisible(!isVisible);
  return (
    <div className='App'>
      <Navbar />
      <Cards isVisible={isVisible} toggleShow={toggleShow} />
    </div>
  );
}
export default App;