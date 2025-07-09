import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router'
import {Home,About,Project,Experience,Contact} from './component/index'
import Layout from './component/Layout.jsx'

const router = createBrowserRouter(
  [{
    path:'/',
    element:<Layout/>,
    children:[{
        path:'',
        element:<Home/>
    },
    {
      path:'About',
      element:<About/>
    },
    {
      path:'Project',
      element:<Project/>
    },
   {
      path:'Experience',
      element:<Experience/>
    },
    {
      path:'Contact',
      element:<Contact/>
    }
  ]
  }

]
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
