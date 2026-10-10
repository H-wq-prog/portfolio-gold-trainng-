import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import MainPage from './Page/MainPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Exper from './Components/Experience/Exper'
import Work from './Components/Work/Work'
import Skills from './Components/Skills/Skills'
import GraphicDesign from './Components/Work/GraphicDesign/GraphicDesign'
import Apps from './Components/Work/Apps/Apps'
import Software from './Components/Work/Software/Software'


function App() {
const router =createBrowserRouter([
{path:'/',element:<MainPage/>,
  children:[
    {index:true , element:<Home/>},
    {path:'home', element:<Home/>},
    {path:'about', element:<About/>},
    {path:'exper', element:<Exper/>},
    {path:'skill', element:<Skills/>},
    {path:'work', element:<Work/>,

      children:[
        {index:true, element:<GraphicDesign/>},
        {path:'graphic', element:<GraphicDesign/>},
        {path:'app', element:<Apps/>},
        {path:'software', element:<Software/>}
      ]
    },
    
  ]
}
])
  return (
    <>
        <RouterProvider router={router}></RouterProvider>
        
    </>
  )
}

export default App
