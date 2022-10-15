import logo from './logo.svg';
import './App.css';
import Main from './layout/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About/About';
import Home from './components/Home/Home';
import Order from './components/Order/Order';

function App() {
  const router = createBrowserRouter(
    [{
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader:async()=>fetch(`tshirt.json`),
          element:<Home></Home>
        },
        {
          path: "about",
          element:<About></About>
        },
        {
          path: "order",
          element: <Order></Order>
        }
      ]
    }]
  )
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
