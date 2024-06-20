// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter,RouterProvider,React, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Companies from './components/Companies';
import Jobs from './components/Jobs';
import About from './components/About';
import RootLayout from './RootLayout';

function App() {

  let router = createBrowserRouter([
    {
      path:'/',
      element:<RootLayout/>,
      children:[
        {
          path:'',
          element:<Home/>
        },
      ]
    }
  ])

  return (
    <div>
    <RouterProvider router={router}/>
</div>
  );
}

export default App;
