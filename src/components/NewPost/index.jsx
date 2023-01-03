import React from "react";
import {
  Box,
  Button,
  Input,
  InputBase,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import {
  CgProfile,
  HiOutlineGif,
  AiOutlinePicture,
  CgOptions,
  GrEmoji,
  TbCalendarTime,
  GiPositionMarker,
} from "../../assets/icons";
import "./NewPost.css";

const NewPost = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ marginTop:1.5}}>
          <CgProfile fontSize={30} />
        </Box>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": {
              width: "27em",
            },
            "& .MuiInputBase-root": {
              color: "white",
              border: "none",
              "& fieldset": {
                border: "none",
              },
            },
          }}
          autoComplete="off"
        >
          <TextField
            multiline
            maxRows={10}
            placeholder="¿Qué está pasando?"
            fullWidth
          />
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", paddingY: 2 }}>
        <Box
          sx={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <AiOutlinePicture color="#1B92E2" fontSize={20} className="icon" />
          <HiOutlineGif color="#1B92E2" fontSize={20} className="icon" />
          <CgOptions color="#1B92E2" fontSize={20} className="icon" />
          <GrEmoji color="#1B92E2" fontSize={20} className="icon" />
          <TbCalendarTime color="#1B92E2" fontSize={20} className="icon" />
          <GiPositionMarker color="#1B92E2" fontSize={20} className="icon" />
        </Box>
        <Box
          sx={{
            width: "30%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              textTransform: "none",
              color: "white",
              padding: 0.9,
              borderRadius: 10,
              width: 90,
              backgroundColor: "#1d9bf0",
              "&:hover": {
                backgroundColor: "#1a8cd8",
              },
            }}
          >
            Twittear
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export { NewPost };
