import { Box, Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
const Links = ({ title }) => {
  return (
    <Box
      // className="border"
      sx={{
        ":hover .show-when-hover": { display: "block" },
        ":hover": { cursor: "pointer" },

        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography variant="body1">{title}</Typography>
    </Box>
  );
};

export default Links;
