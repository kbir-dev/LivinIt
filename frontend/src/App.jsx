import "./App.css"
import Header from "./components/Header"
import {Routes,Route} from "react"
import IndexPage from "./pages/IndexPage"


function App() {

  return (
    <Routes>
      <Route path={"/"} element={<IndexPage />}/>
    </Routes>
  )
}

export default App
