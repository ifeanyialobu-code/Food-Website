import React from 'react';
import Layout from '../Components/Layout/Layout';
import { Box, Paper, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact My Restaurant</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur, 
          adipisicing elit. Quisquam deserunt odio ipsum eum ad. 
          Nisi repellat ex cumque vel ratione.
        </p>
      </Box>
      <Box sx ={{ m: 3,width: "600px", ml: 10,
        "@media (max-width:600px)": {
          width: "300px",
        }
       }} 
       >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor: "black", color:
                   "white",}}align='center'>Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 07035394710 (Toll-Free)
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
              <EmailIcon sx={{ color: "skyblue", pt: 1 }} /> ifeanyialobu@gmail.com
              </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
              <CallIcon sx={{ color: "green", pt: 1 }} /> 07035394710
              </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
