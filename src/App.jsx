
import Main from "./components/Main"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { BrowserRouter } from "react-router-dom"


function App() {

  return (
    <BrowserRouter>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
