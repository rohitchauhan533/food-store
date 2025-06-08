import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import UserContext from './utils/UserContext';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';



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

  const [userInfo, setUserInfo] = useState()

  useEffect(()=> {
    const data = {
      name: "Akshay Saini"
    };

    setUserInfo(data.name)
  },[])

  
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser: userInfo}}>
    <div className="App">
    <Header/>
    <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>


  );
}

export default App;
