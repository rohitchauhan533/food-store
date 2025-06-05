import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';



// 1.Header
// logo
// Nav Item (Home about us )
// 2. Body
// Search Component
// Rest Container
// cards
// 3. Footer
// copyright
// links
// address

function App() {

  
  return (
    <div className="App">
    <Header/>
    <Outlet/>
    </div>
  );
}

export default App;
