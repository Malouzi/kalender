import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Calendar from '../components/Calendar'; 
import Calendarsite from '../components/Calendarsite'; 

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Calendar />,
      },
      {
        path: 'calendarsite/:doorId',
        element: <Calendarsite />,
      },
    ],
  },
]);