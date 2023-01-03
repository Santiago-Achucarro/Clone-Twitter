import { Box } from "@mui/system";
import React from "react";
import { NewPost } from "../NewPost";
import { Posts } from "../Posts";
import { Trend } from "../Trends";

const Main = () => {
  return (
    <Box
      sx={{
        color: "white",
        width: "100vw",
        ml:0.4,
        mt: 8,
        display: "flex",
      }}
    >
      <Box
        sx={{
          width: "50.4%",
          backgroundColor: "black",
          ml: 1.8,
          borderLeft: 1,
          borderRight: 1,
          borderColor: "#2F3336",
        }}
      >
        <NewPost />
        <Posts />
      </Box>
      <Trend />
    </Box>
  );
};

export { Main };
