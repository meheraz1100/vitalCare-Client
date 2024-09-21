import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home/Home';
import AllServices from './Components/AllServices/AllServices';
import AddNewService from './Components/AddNewService/AddNewService';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateService from './Components/UpdateService/UpdateService';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: () => fetch('https://vitalcare-server.vercel.app/services'),
  },
  {
    path: "/allServices",
    element: <AllServices />,
    loader: () => fetch('https://vitalcare-server.vercel.app/services')
  },
  {
    path: '/addNewService',
    element: <AddNewService />
  },
  {
    path: '/updateService/:id',
    element: <UpdateService></UpdateService>,
    loader: ({params}) => fetch(`https://vitalcare-server.vercel.app/services/${params.id}`)
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="max-w-7xl mx-auto">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  </StrictMode>,
)
