import Chip from "@mui/material/Chip";
import DoneIcon from "@mui/icons-material/Done";
import { useState } from "react";
import PropTypes from "prop-types";

const Tag = ({ tag, onClick }) => {
  const [isActive, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!isActive);
  };

  return (
    <Chip
      label={tag}
      color="primary"
      onDelete={
        isActive
          ? () => {
              toggleActive();
              onClick();
            }
          : null
      }
      onClick={() => {
        toggleActive();
        onClick(tag);
      }}
      deleteIcon={<DoneIcon />}
    />
  );
};

export default Tag;

Tag.propTypes = {
  tag: PropTypes.string,
  onClick: PropTypes.func,
};
