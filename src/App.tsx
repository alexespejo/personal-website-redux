import "./App.css";
import Navbar from "@components/Navbar";
import { useRef, useState } from "react";
import DesktopApp from "./components/DesktopApp";
import directoryClosed from "@assets/dir_portfolio.png";
import directoryOpen from "@assets/dir_resume.png";
import recycleBin from "@assets/recycle_bin.png";
import fileExplorer from "@assets/file_explorer.png";
import folder from "@assets/folder.png";
import { DialogWindow, DialogWindowImage } from "@components/DialogWindow";

import { albums } from "@/utils/albums";

function App() {
 const constraintsRef = useRef<HTMLDivElement>(null);
 const [openFileExplorer, setOpenFileExplorer] = useState(false);
 const handleCloseFileExplorer = () => setOpenFileExplorer(false);
 const handleOpenFileExplorer = () => setOpenFileExplorer(true);

 const [openTest, setOpenTest] = useState(false);
 const handleCloseTest = () => setOpenTest(false);
 const handleOpenTest = () => setOpenTest(true);

 return (
  <div className="flex flex-col-reverse">
   {/* Navbar */}
   <Navbar />

   {/* Dialog Windows */}
   <DialogWindow
    constraintsRef={constraintsRef}
    title="File Explorer"
    open={openFileExplorer}
    onClose={handleCloseFileExplorer}
   >
    <DialogWindowImage imageSrc={folder} label="Photos" />
    <DialogWindowImage
     imageSrc={folder}
     label="Music"
     onClick={handleOpenTest}
    />
   </DialogWindow>

   <DialogWindow
    constraintsRef={constraintsRef}
    title="Music"
    open={openTest}
    onClose={handleCloseTest}
   >
    <h1 className="font-mono text-[0.6rem]">
     Hip Hop Albums I like - too lazy too lazy to describe why
    </h1>
    <ul className="flex flex-wrap gap-1 items-start justify-center">
     {albums
      .sort((a, b) => b.releaseDate.localeCompare(a.releaseDate))
      .map((album) => (
       <li key={album.title}>
        <img src={album.image} alt={album.title} className="w-20 h-20" />
       </li>
      ))}
    </ul>
   </DialogWindow>

   {/* Desktop */}
   <div
    className="h-[93vh] w-screen relative overflow-hidden"
    ref={constraintsRef}
   >
    <div className="flex flex-col mt-1 ml-1">
     <DesktopApp imageSrc={recycleBin} />
     <DesktopApp imageSrc={fileExplorer} ondblclick={handleOpenFileExplorer} />
    </div>

    <DesktopApp
     constraintsRef={constraintsRef}
     position="top-[20%] left-[10%]"
     imageSrc={directoryClosed}
     label="Projects"
    />

    <DesktopApp
     constraintsRef={constraintsRef}
     position="top-[32%] right-[20%]"
     imageSrc={directoryOpen}
     label="Resume"
    />
   </div>
  </div>
 );
}

export default App;
