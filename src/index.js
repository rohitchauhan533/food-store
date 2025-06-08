import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Body from './components/Body';
import RestaurantMenu from './components/RestaurantMenu';
import Shimmer from './components/Shimmer';
import Cart from './components/Cart';



const Grocery = lazy(()=> import("./components/Grocery"))



const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Body />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/grocery",
          element: <Suspense fallback={<Shimmer/>}><Grocery /></Suspense>
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/restaurants/:resId",
          element: <RestaurantMenu />
        },
        {
          path: "/cart",
          element: <Cart />
        }
        

      ]
    }
  ]

)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router= {appRouter}/>
  </React.StrictMode>
);

