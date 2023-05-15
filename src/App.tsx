import Navbar from "./scenes/navbar/index"
import Benefits from "./scenes/benefits/index"
import OurClasses from "./scenes/ourClasses/index"
import ContactUs from "./scenes/contactUs/index"
import Footer from "./scenes/footer/index"
import React from "react";
import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";
import Home from "./scenes/home/index";


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

  const [isTopOfPage, setIsTopOfPage]=useState<boolean>(true);
  useEffect(()=>{
    const handleScroll = () => {
      if(window.screenY === 0){
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);

  }
    else {
      setIsTopOfPage(false);

    }
    }

    window.addEventListener("scroll", handleScroll);
    return()=> window.removeEventListener("scroll", handleScroll)
  },[]);
  
  
   return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}



export default App;
