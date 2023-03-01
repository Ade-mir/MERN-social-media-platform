import { Box } from "@mui/material";

// Profile image for each user in a circle.
const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt={"user"}
        src={`https://ademir-social-media-server.onrender.com/assets/${image}`} //NEED TO CHANGE THIS WHEN STORAGE IS IN THE CLOUD.
      />
    </Box>
  );
};

export default UserImage;
