import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App';
import './index.css';
import BuidingComponents from './components/Pages/buildingComponents';
import SystemAndProgramPlanning from './components/Pages/systemAndProgramPlanning';
import SpecialEducation from './components/Pages/specialEducation';
import AboutMore from './components/Pages/aboutMore'
import SPecialEducation504 from './components/Pages/se';
import ContactUsPage from './components/contactPage';
import PortfolioPage from './components/porfoiloPage';
import ServicesPage from './components/servicesPage';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([    
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/capacityBuilding",
    element: <BuidingComponents />,
  },
  {
    path: "/systemandprogramPlanning",
    element: <SystemAndProgramPlanning/>,
  },
  {
    path: "/specialeducation",
    element: <SpecialEducation/>,
  },
  {
    path: "/aboutMore",
    element: <AboutMore/>,
  },

  {
    path: "/specialeducation504",
    element: <SPecialEducation504/>,
  },
  {
    path: "/servicesPage",
    element: <ServicesPage/>,
  },
  {
    path: "/portfolioPage",
    element: <PortfolioPage/>,
  },
  {
    path: "/contactPage",
    element: <ContactUsPage/>,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
