import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { CgMore, CgProfile } from "react-icons/cG";

const Posts = () => {
  return (
    <Box sx={{ borderTop: 1, borderBottom: 1, borderColor: "#2F3336" }}>
      <Box>
        <Box sx={{ display: "flex", mt: 2 }}>
          <Box sx={{ display: "flex", width: "90%", ml: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <CgProfile fontSize={30} />
            </Box>
            <Typography sx={{ ml: 2 }}>User</Typography>
            <Typography sx={{ ml: 2, color: "grey" }}>@User ‧ 4h</Typography>
          </Box>
          <Button
          variant="text"
            sx={{
              display: "flex",
              alignItems: "center",
              borderRadius: 2,
              "&:hover": {
                backgroundColor: "#1d89f0",
                opacity: 0.4,
              },
            }}
          >
            <CgMore color="grey" />
          </Button>
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim porro
            dignissimos modi eaque, similique accusamus. Eaque fugit porro magni
            ipsam? Nihil suscipit nesciunt laboriosam atque dolorem doloremque,
            exercitationem sapiente earum.
          </p>
        </Box>
      </Box>
    </Box>
  );
};

export { Posts };
