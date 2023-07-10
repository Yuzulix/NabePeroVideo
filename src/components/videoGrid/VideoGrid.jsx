import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import VideoCard from "./VideoCard";
import Chip from "@mui/material/Chip";
import { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";

const VideoGrid = () => {
  const [chips, setChips] = useState([
    { key: 0, label: "Reaction", show: false },
    { key: 1, label: "TikTok", show: false },
    { key: 2, label: "YouTube Shorts", show: false },
    { key: 3, label: "eLearning", show: false },
    { key: 4, label: "Opening/Closing", show: false },
    { key: 5, label: "Marketing", show: false },
    { key: 6, label: "Anime", show: false },
  ]);
  const handleClick = (chipToChange) => {
    const newChips = chips.map((c) =>
      c.key === chipToChange.key
        ? { ...chipToChange, show: !chipToChange.show }
        : c
    );
    setChips(newChips);
  };

  const handleClear = () => {
    const newChips = chips.map((c) => ({ ...c, show: false }));
    setChips(newChips);
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
        <Chip label="Clear Filters" color="primary" onClick={handleClear} />
        {chips.map((chip) => (
          <Chip
            key={chip.key}
            label={chip.label}
            color="primary"
            onDelete={chip.show ? () => handleClick(chip) : null}
            onClick={() => handleClick(chip)}
            deleteIcon={<DoneIcon />}
          />
        ))}
      </Stack>
      <Grid component="section" container spacing={{ xs: 1, md: 6 }}>
        <Grid item xs={12} md={4}>
          <VideoCard />
        </Grid>
        <Grid item xs={12} md={4}>
          <VideoCard />
        </Grid>
        <Grid item xs={12} md={4}>
          <VideoCard />
        </Grid>
        <Grid item xs={12} md={4}>
          <VideoCard />
        </Grid>
        <Grid item xs={12} md={4}>
          <VideoCard />
        </Grid>
      </Grid>
    </>
  );
};

export default VideoGrid;
