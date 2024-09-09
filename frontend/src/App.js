import React, { useState, useEffect } from "react";
import { DatabaseEditor } from "./modules/DatabaseEditor";
import { MainPage } from "./modules/Main";
import { About } from "./modules/About";
import { TruthOrDare } from "./modules/TruthOrDare.js";
import { Paranoia } from "./modules/Paranoia.js";
import { WouldYouRather } from "./modules/WouldYouRather.js";
import { Pictionary } from "./modules/Pictionary.js";
import { KissMarryKill } from "./modules/KissMarryKill.js";
import { Charades } from "./modules/Charades.js";
import { NeverHaveIEver } from "./modules/NeverHaveIEver.js";
import { SmashOrPass } from "./modules/SmashOrPass.js";
import { Storytime } from "./modules/Storytime.js";
import './styles/GlobalStyle.css';

export const App = () => {
  const [viewer, setViewer] = useState(0);

  return(
    <html>
      { viewer === 0 ? <MainPage setViewer={setViewer}/> : null }
      { viewer === 1 ? <DatabaseEditor setViewer={setViewer}/> : null }
      { viewer === 2 ? <About setViewer={setViewer}/> : null }
      { viewer === 3 ? <TruthOrDare setViewer={setViewer}/> : null }    
      { viewer === 4 ? <Paranoia setViewer={setViewer}/> : null }
      { viewer === 5 ? <WouldYouRather setViewer={setViewer}/> : null }
      { viewer === 6 ? <Pictionary setViewer={setViewer}/> : null }
      { viewer === 7 ? <KissMarryKill setViewer={setViewer}/> : null }
      { viewer === 8 ? <Charades setViewer={setViewer}/> : null }
      { viewer === 9 ? <NeverHaveIEver setViewer={setViewer}/> : null }
      { viewer === 10 ? <SmashOrPass setViewer={setViewer}/> : null }
      { viewer === 11 ? <Storytime setViewer={setViewer}/> : null }
      </html>
  );

};
