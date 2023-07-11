import { createContext } from "react";

export const videos = [
  { title: "Bros React", tags: ["Reaction", "Anime"] },
  { title: "Bros Market", tags: ["Marketing"] },
  { title: "Bros Anime", tags: ["Anime"] },
];

const VideoContext = createContext();

export default VideoContext;
