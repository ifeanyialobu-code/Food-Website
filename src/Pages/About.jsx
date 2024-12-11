import React from 'react';
import Layout from '../Components/Layout/Layout';
import { Box, Typography } from '@mui/material';
const About = () => {
  return (
    <Layout>
     <Box sx= {{
      my: 15,
       textAlign: "center",
       p: 2,
       "& h4": {
        fontWeight: "bold",
        my: 2,
        fontSize: "2rem"
       },
       "& p": {
        textAlign: "justify",
       },
       "@media (max-width:600px)": {
        mt: 0,
        "& h4 ": {
          fontSize: "1.5rem",
        },
       },

     }}>
      <Typography variant='h4'>
        Welcome To My Resturant.
      </Typography>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing 
        elit. Quidem quia, iste officia, tempore ex ullam rerum quas,
         repellat aliquid ipsam sit? Quod dolores numquam blanditiis 
         fugiat placeat unde itaque ab commodi similique nobis, sequi 
         voluptate iure nihil consequatur accusantium architecto animi 
         inventore voluptates labore dignissimos fugit voluptatum accusamus 
         laborum quia. Veritatis exercitationem porro vel magnam id, corporis 
         aperiam nostrum distinctio delectus, labore assumenda explicabo itaque! 
         Eius earum accusantium nihil, deleniti magnam numquam, corrupti ea ex error
          doloribus inventore incidunt cupiditate aspernatur temporibus odit ullam facere,
           libero optio! Aliquid nam delectus quia perspiciatis eos tempore doloremque maiores. 
           Velit voluptas quidem obcaecati?
      </p>
      <br />
      <p>
       Lorem, ipsum dolor sit amet consectetur adipisicing 
       elit. Fugiat voluptatum quidem, sit ratione unde molestias 
       quam quas provident ullam natus autem, numquam beatae corrupti 
       error facilis? Officia voluptates, quas repudiandae odit pariatur
        amet voluptatum atque ab voluptatibus dicta natus distinctio aperiam 
        error quis illo nemo magnam ea quos deleniti nesciunt. 
      </p>

     </Box>
    </Layout>
  );
};

export default About
