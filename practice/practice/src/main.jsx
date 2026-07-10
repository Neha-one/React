import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/App.jsx'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Women from './Women.jsx';
import Kids from './Kids.jsx';
import Men from './Men.jsx';
import Cart from './Cart.jsx';
import Home from './Home.jsx';

const router = createBrowserRouter([
  {
    path: '/', element: <App />, children: [
      { path: '/home', element: <Home /> },
    { path: '/women', element: <Women /> },
    { path: '/men', element: <Men /> },
    { path: '/kids', element: <Kids /> },
    { path: '/cart', element: <Cart /> }]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)