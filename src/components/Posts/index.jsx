import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import post from "../../assets/post.json";
import "./Posts.css";
import {
  BiMessageRounded,
  AiOutlineRetweet,
  AiOutlineHeart,
  BsDownload,
  IoIosStats,
  CgMore,
  CgProfile,
} from "../../assets/icons";

const Posts = () => {
  console.log(post);

  return post.map((ele) => (
    <Box
      sx={{
        borderTop: 1,
        borderBottom: 1,
        borderColor: "#2F3336",
      }}
    >
      <Box sx={{ display: "flex", mt: 2 }}>
        <Box sx={{ display: "flex", width: "90%", ml: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CgProfile fontSize={30} />
          </Box>
          <Typography sx={{ ml: 2 }}>{ele.user}</Typography>
          <Typography sx={{ ml: 2, color: "grey" }}>{ele["user@"]}</Typography>
        </Box>
        <CgMore color="grey" className="IconMore" />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 15,
          width: "80%",
          margin: "auto",
          mb: 2,
        }}
      >
        <p>{ele.text}</p>
      </Box>
      <Stack
        direction="row"
        spacing={1.5}
        justifyContent="space-evenly"
        mt={2}
        mb={1}
      >
        <Box>
          <IoIosStats className="iconStats" />
        </Box>
        <Box>
          <BiMessageRounded className="iconMsg" />
        </Box>
        <Box>
          <AiOutlineRetweet className="iconRetwt" />
        </Box>
        <Box>
          <AiOutlineHeart className="iconLike" />
        </Box>
        <Box>
          <BsDownload className="iconShare" />
        </Box>
      </Stack>
    </Box>
  ));
};

export { Posts };
