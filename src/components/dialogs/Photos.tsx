import { DialogWindow } from "@components/DialogWindow";
import { albums } from "@utils/albums";

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
 );
};
