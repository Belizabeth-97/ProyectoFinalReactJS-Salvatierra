
import Main from "./components/Main"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { BrowserRouter } from "react-router-dom"
import CarritoProvider from "./components/Contexto"

function App() {

  return (
    <BrowserRouter>
      <CarritoProvider>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </CarritoProvider>
    </BrowserRouter>
  )
}

export default App
