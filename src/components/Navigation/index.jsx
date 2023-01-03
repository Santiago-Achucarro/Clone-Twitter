import { Box, Button, ButtonGroup } from "@mui/material";
import React from "react";
import { BsTwitter } from "react-icons/bs";

const Navigation = ({ navItems }) => {
  return (
    <Box
      sx={{
        width: "25%",
        height: "70vh",
        backgroundColor: "black",
        ml: 10,
        pt: 1.5,
        top: 0,
        bottom: "10%",
        position: "sticky",
      }}
      component="div"
    >
      <Box>
        <BsTwitter fontSize={30} />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", mt: 1 }}>
        {navItems.map((ele) => (
          <ButtonGroup key={ele.id}>
            <Button
              startIcon={ele.svg}
              sx={{
                paddingX: 2,
                fontSize: 22,
                color: "white",
                fontWeight: "200",
                textAlign: "center",
                textTransform: "none",
                borderRadius: 5,
                "&:hover": {
                  backgroundColor: "#191919",
                  cursor: "pointer",
                },
              }}
              variant="text"
              size="medium"
            >
              {ele.item}
            </Button>
          </ButtonGroup>
        ))}
      </Box>
      <Box>
        <Button
          variant="contained"
          sx={{
            mt: 2,
            paddingX: 10,
            paddingY: 1.5,
            borderRadius: 10,
            textTransform: "none",
            fontWeight: "700",
            fontSize: 15,
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
  );
};

export { Navigation };
