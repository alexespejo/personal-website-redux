import { motion } from "framer-motion";
import { getCurrentZIndex, setZIndex } from "@utils/zIndexManager";
import { MdClose } from "react-icons/md";
import { useCallback, useEffect, useState } from "react";

import DirectoryIcon from "@assets/directory_closed.png";

interface DialogWindowProps {
 children: React.ReactNode;
 constraintsRef?: React.RefObject<HTMLDivElement | null>;
 title: string;
 open: boolean;
 className?: string;
 onClose: () => void;
}

export function DialogWindow({
 children,
 constraintsRef,
 title,
 open,
 className,
 onClose,
}: DialogWindowProps) {
 const [zIndex, setZdex] = useState(getCurrentZIndex());

 const adjustZIndex = () => {
  return getCurrentZIndex() + 1;
 };

 const updateZIndex = useCallback(() => {
  setZIndex(adjustZIndex());
  setZdex(adjustZIndex());
 }, []);

 useEffect(() => {
  if (open) {
   setZdex(adjustZIndex);
  }
 }, [open]);

 return (
  <motion.dialog
   open={open}
   drag
   dragConstraints={constraintsRef || undefined}
   dragElastic={0.2}
   dragMomentum={false}
   style={{ zIndex }}
   onFocus={updateZIndex}
   onClick={updateZIndex}
   className={`w-full h-full sm:w-1/2 sm:h-3/4 absolute top-0 left-0 retro-border ${className}`}
  >
   <div className="w-full bg-blue-900 text-white text-xs px-1 py-1 flex justify-between items-center h-[4%] sm:h-[6%]">
    <span className="flex items-center gap-0.5">
     <img src={DirectoryIcon} alt="directory" className="w-3" /> {title}
    </span>
    <button
     onClick={onClose}
     className="retro-border text-black w-5 h-5 font-bold flex items-center justify-center retro-border-btn"
    >
     <MdClose />
    </button>
   </div>

   <div className="p-1 w-inherit h-[96%] sm:h-[94%]">
    {/* Body */}
    <div className="p-1 retro-border h-full">
     <div className="p-2 retro-border-invert w-full h-full gap-4 flex flex-col overflow-y-auto">
      {/* Content */}
      {children}
     </div>
    </div>
   </div>
  </motion.dialog>
 );
}

interface DialogWindowImageProps {
 imageSrc: string;
 label: string;
 onClick?: () => void;
}
export function DialogWindowImage({
 imageSrc,
 label,
 onClick,
}: DialogWindowImageProps) {
 return (
  <button
   onClick={onClick}
   className="text-center text-[0.6rem] font-sans flex items-center justify-center flex-col h-fit w-fit"
  >
   <img src={imageSrc} alt={label} className="w-10 h-10" />
   <span>{label}</span>
  </button>
 );
}
