import { DialogWindow } from "@components/DialogWindow";
import { albums } from "@utils/albums";

interface FavMusicDialogProps {
 open: boolean;
 onClose: () => void;
 constraintsRef?: React.RefObject<HTMLDivElement | null>;
}
export const FavMusicDialog = ({
 open,
 onClose,
 constraintsRef,
}: FavMusicDialogProps) => {
 return (
  <DialogWindow
   constraintsRef={constraintsRef}
   title="Music"
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
       <img
        src={album.image}
        alt={album.title}
        className="w-20 h-20 sm:w-24 sm:h-24"
       />
      </li>
     ))}
   </ul>
  </DialogWindow>
 );
};
