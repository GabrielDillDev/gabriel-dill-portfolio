import Header from "./components/Header.jsx";
import Projetos from "./components/Projetos.jsx";
import GlobalStyle from "./components/GlobalStyle.jsx";
import Menu from "./components/Menu.jsx";
import Perfil from "./components/Perfil.jsx";
import Footer from "./components/Footer.jsx";

function App() {
 
  return (
    <>
    <GlobalStyle/>
    <Header/>
    <Menu/>
    <Projetos/>
    <Perfil/>
    <Footer/>
    </>
  )
}

export default App
