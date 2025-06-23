import { DialogWindow } from "@components/DialogWindow";
import one from "@assets/photos/1-1.png";
import two from "@assets/photos/1-2.png";
import three from "@assets/photos/1-3.png";
import random from "@assets/photos/1653003413525.jpeg";

const Photo = ({
 src,
 alt,
 label,
 className,
}: {
 src: string;
 alt: string;
 label: string;
 className?: string;
}) => {
 return (
  <li
   className={`flex flex-col items-center gap-1 w-20 justify-center break-words ${className}`}
  >
   <a href={src} target="_blank" rel="noopener noreferrer">
    <img src={src} alt={alt} className="shadow-md" />
   </a>
   <span className="text-xs break-words w-20">{label}</span>
  </li>
 );
};
interface PhotosDialogProps {
 open: boolean;
 onClose: () => void;
 constraintsRef?: React.RefObject<HTMLDivElement | null>;
}
export const PhotosDialog = ({
 open,
 onClose,
 constraintsRef,
}: PhotosDialogProps) => {
 return (
  <DialogWindow
   constraintsRef={constraintsRef}
   title="Photos"
   open={open}
   onClose={onClose}
  >
   <ul className="flex items-end gap-2">
    <Photo src={one} alt="one" label="1-1.png" />
    <Photo src={two} alt="two" label="1-2.png" />
    <Photo src={three} alt="three" label="1-3.png" />
    <Photo
     src={random}
     alt="random"
     label="1653003413525.jpeg"
     className="sm:absolute bottom-[16%] right-[20%]"
    />
   </ul>
  </DialogWindow>
 );
};
