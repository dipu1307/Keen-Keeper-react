import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "react-toastify/dist/ReactToastify.css";

import { RouterProvider } from 'react-router-dom'
import { router } from './routes/AppRoutes/AppRoutes.jsx'
import InteractionProvider from './components/Context/InteractionProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <InteractionProvider>
     <RouterProvider router={router} />
   </InteractionProvider>
  </StrictMode>,
)
