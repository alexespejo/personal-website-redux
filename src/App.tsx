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

import { FavMusicDialog } from "@components/dialogs/FavMusic";
import { PhotosDialog } from "@components/dialogs/Photos";

function App() {
 const constraintsRef = useRef<HTMLDivElement>(null);
 const [openFileExplorer, setOpenFileExplorer] = useState(false);
 const handleCloseFileExplorer = () => setOpenFileExplorer(false);
 const handleOpenFileExplorer = () => setOpenFileExplorer(true);

 const [openFavMusic, setOpenFavMusic] = useState(false);
 const handleCloseFavMusic = () => setOpenFavMusic(false);
 const handleOpenFavMusic = () => setOpenFavMusic(true);

 const [openPhotos, setOpenPhotos] = useState(false);
 const handleClosePhotos = () => setOpenPhotos(false);
 const handleOpenPhotos = () => setOpenPhotos(true);

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
    <DialogWindowImage
     imageSrc={folder}
     label="Photos"
     onClick={handleOpenPhotos}
    />

    <DialogWindowImage
     imageSrc={folder}
     label="Music"
     onClick={handleOpenFavMusic}
    />
   </DialogWindow>

   <PhotosDialog
    constraintsRef={constraintsRef}
    open={openPhotos}
    onClose={handleClosePhotos}
   />

   <FavMusicDialog
    constraintsRef={constraintsRef}
    open={openFavMusic}
    onClose={handleCloseFavMusic}
   />

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
