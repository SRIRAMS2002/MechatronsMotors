import { BrowserRouter,Routes,Route } from "react-router-dom";
import Achievements from "./pages/Achievements";
import Alumini from "./pages/Alumini";
import Founders from "./pages/Founders";
import Gallery from "./pages/Gallery";
import Members from "./pages/Members";
import Mentors from "./pages/Mentors";
import Projects from "./pages/Project";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Contact from "./pages/Contact";
import Desc1 from './ProPages/Desc1';
import Desc2 from './ProPages/Desc2';
import Desc3 from './ProPages/Desc3';
import Desc4 from './ProPages/Desc4';
import Desc5 from './ProPages/Desc5';
import AchPages1 from "./AchPages/AchPages1";
import AchPages2 from "./AchPages/AchPages2";
import AchPages3 from "./AchPages/AchPages3";
import AchPages4 from "./AchPages/AchPages4";
import AchPages5 from "./AchPages/AchPages5";

import React from "react";


const App = () => {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 pt-6 sm:pt-12 ">
      <img
        src="/src/assets/beams.jpg"
        alt=""
        className="absolute rotate-180 bg-repeat top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        width="1308"
      />
      <div className="absolute inset-0 bg-[url('/src/assets/grid/gridsm.jpg')] bg-center [mask-image:linear-gradient(360deg,white,rgba(255,255,255,0))]"></div>
      
      <BrowserRouter>
      <Routes>
        <Route index element = {<Home/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/Achievements" element={<Achievements/>} />
        <Route path="/Alumini" element={<Alumini/>} />
        <Route path="/Founders" element={<Founders/>} />
        <Route path="/Gallery" element={<Gallery/>} />
        <Route path="/Members" element={<Members/>} />
        <Route path="/Mentors" element={<Mentors/>} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/Projects/Desc1" element={<Desc1/>} />
        <Route path="/Projects/Desc2" element={<Desc2/>} />
        <Route path="/Projects/Desc3" element={<Desc3/>} />
        <Route path="/Projects/Desc4" element={<Desc4/>} />
        <Route path="/Projects/Desc5" element={<Desc5/>} />

        <Route path="/Achievements/AchPages1" element={<AchPages1/>} />
        <Route path="/Achievements/AchPages2" element={<AchPages2/>} />
        <Route path="/Achievements/AchPages3" element={<AchPages3/>} />
        <Route path="/Achievements/AchPages4" element={<AchPages4/>} />
        <Route path="/Achievements/AchPages5" element={<AchPages5/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="*" element={<ErrorPage/>} />

      </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;
