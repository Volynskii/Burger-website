import React,{useEffect} from 'react';
import Header from "./components/header";
import Home from "./components/home";
import Service from "./components/service";
import Menu from "./components/menu";
import About from "./components/about";
import Reviews from "./components/reviews";
import Contacts from "./components/contacts";
import Blogs from "./components/blogs";
import Footer from "./components/footer";
import Aos from "aos";
import "aos/dist/aos.css"



function App() {
    useEffect(() => {
        Aos.init({duration:700})
    });
  return (
    <>

      <Header/>
      <Home/>
<Service/>
<Menu/>
<About/>
<Reviews/>
<Contacts/>
<Blogs/>
<Footer/>
      </>
  );
}

export default App;
