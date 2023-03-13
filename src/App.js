// import logo from './logo.svg';
// import './App.css';
// import Navbar from './Components/Navbar';

// function App() {
//   return (
//     <Navbar/>
//   );
// }

// export default App;

import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchResult from './Components/SearchResult';
import Fetching from './Components/Fetching';

function App() {
  return (
    <>
      <Navbar/>
      
     
                {/* <Routes>
                    {/* <Route path="/" exact element={<Navbar />} /> */}
                    {/* <Route path="/:query/:startIndex" exact element={<SearchResult  />} />
                </Routes> */} 
        
    </>
    
  );
}

export default App;
