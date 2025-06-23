import { motion } from "framer-motion";

interface DesktopAppProps {
 constraintsRef?: React.RefObject<HTMLDivElement | null>;
 position?: string;
 children?: React.ReactNode;
 imageSrc?: string;
 label?: string;
 ondblclick?: () => void;
}
const DesktopApp = ({
 constraintsRef,
 position,
 children,
 imageSrc,
 label,
 ondblclick,
}: DesktopAppProps) => {
 return (
  <motion.button
   drag={constraintsRef ? true : false}
   dragElastic={0.2}
   dragConstraints={constraintsRef ?? false}
   dragMomentum={false}
   dragTransition={{ bounceStiffness: 1000, bounceDamping: 50 }}
   className={` cursor-pointer p-1 border-2 active:border-white border-white/0 border-dotted flex flex-col items-center justify-center gap-1 w-16 ${
    position ? position + " absolute" : ""
   }`}
   onDoubleClick={ondblclick}
   onTouchEnd={ondblclick}
  >
   {children}
   {imageSrc && (
    <img
     src={imageSrc}
     alt="desktop-app"
     draggable={false}
     className="w-9 h-9 sm:w-11 sm:h-11"
    />
   )}
   <span className="text-white text-[0.55rem] font-thin text-center">
    {label}
   </span>
  </motion.button>
 );
};

export default DesktopApp;
