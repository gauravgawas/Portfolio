import { BrowserRouter,Route,Routes } from "react-router-dom"
import { lazy ,Suspense} from "react"
import './App.css';
const Home=lazy(()=>import("./Pages/Home").then(module=>({default:module.Home})));
const NotFound=lazy(()=>import("./Pages/NotFound").then(module=>({default:module.NotFound})));
function App() {


  return (
    <>
     <Suspense fallback={<div >Loading...</div>}>
      <BrowserRouter>
      <Routes>
       
        <Route index element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
        
      </Routes>
      </BrowserRouter>
      </Suspense>
    </>
  )
}

export default App
