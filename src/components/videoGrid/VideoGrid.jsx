import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import VideoCard from "./VideoCard";
import { useContext, useState, useEffect } from "react";
import VideoContext from "./VideoContext";
import Tag from "./Tag";

const VideoGrid = () => {
  const videos = useContext(VideoContext);
  const tags = [
    "Reaction",
    "TikTok",
    "YouTube Shorts",
    "eLearning",
    "Opening/Closing",
    "Marketing",
    "Anime",
  ];

  const [filterList, setFilterList] = useState([]);
  const [renderList, setRenderList] = useState([videos]);

  useEffect(() => {
    if (filterList.length === 0) {
      setRenderList(videos);
    } else {
      const filtered = [];
      videos.forEach((video) => {
        video.tags.forEach((tag) => {
          if (filterList.includes(tag) && !filtered.includes(video)) {
            filtered.push(video);
          }
        });
      });
      setRenderList(filtered);
    }
  }, [videos, filterList]);

  const handleClick = (clickedTag) => {
    if (filterList.includes(clickedTag)) {
      setFilterList(filterList.filter((e) => e !== clickedTag));
    } else {
      setFilterList([...filterList, clickedTag]);
    }
  };

  return (
    <>
      <Stack
        sx={{ margin: 2 }}
        direction="row"
        spacing={1}
        useFlexGap
        flexWrap="wrap"
      >
        {tags.map((tag) => {
          return <Tag key={tag} tag={tag} onClick={() => handleClick(tag)} />;
        })}
      </Stack>
      <Grid component="section" container spacing={{ xs: 1, md: 6 }}>
        {renderList.map((video, i) => (
          <Grid item xs={12} md={4} key={i}>
            <VideoCard title={`${video.title}`} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default VideoGrid;
