import 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './assets/Home'
import About from './assets/About'
import Contact from './assets/Contact'
import Service from './assets/Service'
import Login from './assets/Login'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import { ThemeProvider } from 'styled-components'

function App() {
 
  const theme ={
    colors: {
      heading: "rgb 24 24 29",
      text: "rgba 24 24 29",
      white: "#ffffff",
      black: "#212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255",
      footer_bg: "#0a1435",
      btn: "rhb(98 84 243",
      border: "rgba(98, 84, 243, 0.5)",
      br: "#ffffff",
      gradient:
      "linear-gradient(0ged, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        
    },
    media: {mobile: "768px", tab: "998px"},
  };

  return (
   
        <ThemeProvider theme={theme}>
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Service" element={<Service/>} />
          <Route path="/Login" element={<Login/>} />
        </Routes>
        <Footer/>
        </BrowserRouter>
        </ThemeProvider>
    
  );
}

export default App