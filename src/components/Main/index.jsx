import { Box } from "@mui/system";
import React from "react";
import { Posts } from "../Posts";

const Main = () => {
  return (
    <Box sx={{ color: "white", width: "100%", height:"100vh", mt:8}}>
        <Box sx={{width:"50.4%",height:"100vh", backgroundColor:"black", ml:1.8, borderLeft:1, borderRight:1, borderColor:"#2F3336"}}>
            <Posts />
        </Box>
    </Box>
  );
};

export { Main };
