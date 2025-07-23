import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import AppLayout from '../AppLayout/AppLayout'
import Hero from '../Component/Hero'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      children:[
        {
          path:"",
          element:<Hero />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
