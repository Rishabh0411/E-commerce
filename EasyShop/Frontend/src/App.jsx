import { BrowserRouter, Routes, Route } from "react-router-dom"
import Mainlayout from "./Layout/Mainlayout"
import HomePage from "./components/Home/HomePage.jsx"
import NotFound from "./components/ui/NotFound.jsx"

function App() {  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainlayout/>}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App