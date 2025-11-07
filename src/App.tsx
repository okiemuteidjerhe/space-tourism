import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Destination from "./pages/Destination"
import Crew from "./pages/Crew"
import Technology from "./pages/Technology"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/destination" element={<Navigate to='/destination/moon' replace/>}/>
      <Route path="/destination/:name" element= {<Destination/>}/>
      <Route path="/crew" element={<Navigate to='/crew/commander' replace/>}/>
      <Route path="/crew/:role" element= {<Crew/>}/>
      <Route path="/technology" element= {<Navigate to='/technology/launch%20vehicle' replace/>}/>
      <Route path="/technology/:name" element= {<Technology/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}

export default App
