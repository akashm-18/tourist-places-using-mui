import {
   Box,
   Container,
   Typography,
   Paper,
   BottomNavigation,
} from "@mui/material";
import React from "react";
import ImageCollage from "../components/ImageCollage";
import CustomizedAccordions from "../components/CustomizedAccordions";
import BasicModal from "../components/BasicModal";

const Tour = () => {
   return (
      <Container sx={{ width: 900 }}>
         <Typography variant="h3" component="h1" marginTop={3}>
            Explore the World in Vegas
         </Typography>
         <Box marginTop={3} sx={{ display: "flex" }}>
            <img
               src="https://d2ru2mvuh5wx24.cloudfront.net/avtivity_bootstrap/1241/flight_of_angels_3__1920x864.jpg"
               alt=""
               height={325}
               width={650}
            />
            <ImageCollage />
         </Box>
         <Box>
            <Typography variant="h6" component="h4" marginTop={3}>
               About this Ticket
            </Typography>
            <Typography variant="paragraph" component="p" marginTop={3}>
               {" "}
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Doloremque voluptas voluptatibus nostrum impedit nisi minus
               tempore eum facere dolores, quis accusamus eius consequatur
               dignissimos porro perferendis optio, eveniet est magnam magni
               quos itaque. Quaerat velit quod fugiat, repellat perferendis
               officiis.{" "}
            </Typography>
         </Box>
         <Box marginBottom={10}>
            <Typography
               variant="h6"
               component="h4"
               marginTop={3}
               marginBottom={2}>
               Frequently Asked Questions
            </Typography>
            <CustomizedAccordions />
         </Box>
         <Paper
            sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
            elevation={3}>
            <BottomNavigation>
               {" "}
               <BasicModal />{" "}
            </BottomNavigation>
         </Paper>
      </Container>
   );
};

export default Tour;
