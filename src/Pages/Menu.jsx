import React from "react";
import { MenuList } from "../Data/Data";
import Layout from "../Components/Layout/Layout";
import { Box, Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";

const Menu = () => {
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {MenuList && MenuList.length > 0 ? (
          MenuList.map((menu, index) => (
            <Card
              key={index} // Ensure each card has a unique key
              sx={{
                maxWidth: "398px",
                display: "flex",
                m: 2,
              }}
            >
              <CardActionArea>
                <CardMedia
                  sx={{ minHeight: "400px" }}
                  component="img"
                  src={menu.image}
                  alt={menu.name}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom component="div">
                    {menu.name}
                  </Typography>
                  <Typography variant="body2">{menu.description}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))
        ) : (
          <Typography variant="h6" color="text.secondary" sx={{ mt: 5 }}>
            No menu items available.
          </Typography>
        )}
      </Box>
    </Layout>
  );
};

export default Menu;
