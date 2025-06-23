import { useState } from "react";
import Button from "@components/Button";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdClose, IoIosDocument } from "react-icons/io";

import windows3 from "../assets/windows-3.png";

const Navbar = () => {
 const [openContact, setOpenContact] = useState(true);
 return (
  <>
   <div className="bg-gray-200 p-0.5 retro-border flex gap-2 h-[7vh] items-center justify-between text-gray-800 relative">
    <div
     className={`absolute -top-36 left-0  h-fit bg-gray-300 px-2 py-1 flex flex-col retro-border gap-1 [&>a]:px-1 z-10 ${
      openContact ? "visible" : "hidden"
     }`}
    >
     <a
      href="https://github.com/alexespejo"
      className="retro-border retro-border-btn flex items-center gap-1"
      target="_blank"
     >
      <FaGithub />
      <span>Github</span>
     </a>
     <a
      href="https://www.linkedin.com/in/alex-espejo-4a604920a/"
      className="retro-border retro-border-btn flex items-center gap-1"
      target="_blank"
     >
      <FaLinkedin />
      <span>Linkedin</span>
     </a>

     <a
      href="mailto:abespejo@uci.edu"
      className="retro-border retro-border-btn flex items-center gap-1"
     >
      <MdEmail />
      <span>Email</span>
     </a>

     <button
      className="retro-border retro-border-btn flex items-center gap-1"
      onClick={() => setOpenContact(false)}
     >
      <IoMdClose />
      <span>Close</span>
     </button>
    </div>

    <button
     className="p-0.5 flex gap-1 items-center retro-border-invert text-sm h-9"
     onClick={() => setOpenContact((prev) => !prev)}
    >
     <img src={windows3} alt="logo" className="w-3 h-3" /> Contact
    </button>

    <div className="flex gap-1">
     <Button
      icon={<FaGithub />}
      href="https://github.com/personal-website-redux"
      className="icon-btn"
     />
     <Button
      icon={<IoIosDocument />}
      href="https://github.com/alexespejo/personal-website-redux"
      className="icon-btn"
     />
    </div>
   </div>
  </>
 );
};

export default Navbar;
