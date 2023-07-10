import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import VideoCard from "./VideoCard";
import { useContext, useState, useEffect } from "react";
import VideoContext from "./VideoContext";
import Tag from "./Tag";

const VideoGrid = () => {
  const videos = useContext(VideoContext);
  const tags = [
    "All",
    "Reaction",
    "TikTiok",
    "YouTube Shorts",
    "eLearning",
    "Opening/Closing",
    "Marketing",
    "Anime",
  ];

  const [filterList, setFilterList] = useState([]);
  const [renderList, setRenderList] = useState([videos]);

  useEffect(() => {
    if (!filterList === undefined || !filterList.length < 1) {
      let filtered = [];
      videos.forEach((video) => {
        video.tags.forEach((tag) => {
          if (filterList.includes(tag)) {
            if (!filtered.includes(video)) {
              filtered.push(video);
            }
          }
        });
      });
      setRenderList(filtered);
    } else {
      setRenderList(videos);
    }
  }, [filterList]);


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
          return (
            <Tag
              key={tag}
              tag={tag}
              onClick={() => {
                if (!filterList.includes(tag)) {
                  setFilterList((filterList) => [...filterList, tag]);
                } else {
                  setFilterList(filterList.filter((t) => t !== tag));
                }
              }}
            />
          );
        })}
      </Stack>
      <Grid component="section" container spacing={{ xs: 1, md: 6 }}>
        {renderList.map((video, i) => (
          <Grid item xs={12} md={4} key={i}>
            <VideoCard title={`${video.title}, ${video.categories}`} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default VideoGrid;
