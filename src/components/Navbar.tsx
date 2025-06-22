import Button from "@components/Button";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import windows3 from "../assets/windows-3.png";

const Navbar = () => {
 return (
  <div className="bg-gray-200 p-0.5 retro-border flex gap-2 h-[7vh] items-center justify-between text-gray-800">
   <div className="p-0.5 flex gap-1 items-center retro-border-invert text-sm h-9">
    <img src={windows3} alt="logo" className="w-3 h-3" /> Alex Espejo
   </div>

   <div className="flex gap-1">
    <Button
     icon={<FaGithub />}
     href="https://github.com/alexespejo"
     className="icon-btn"
    />
    <Button
     icon={<FaLinkedin />}
     href="https://www.linkedin.com/in/alex-espejo-4a604920a/"
     className="icon-btn"
    />
    <Button
     icon={<MdEmail />}
     href="mailto:abespejo@uci.edu"
     className="icon-btn"
    />
   </div>
  </div>
 );
};

export default Navbar;
