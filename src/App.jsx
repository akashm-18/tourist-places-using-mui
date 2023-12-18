import { Typography } from "@mui/material";
import "./App.css";
import SearchAppBar from "./components/SearchAppBar";
import TourCard from "./components/TourCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import cities from "./data.json";

function App() {
   return (
      <div>
         <SearchAppBar />
         <Container sx={{ marginY: 5 }}>
            {cities.map((city) => (
               <>
                  <Typography
                     variant="h4"
                     component="h2"
                     marginTop={5}
                     marginBottom={3}>
                     Top {city.name} Tours
                  </Typography>
                  <Grid container spacing={5}>
                     {city.tours.map((tour, index) => (
                        <TourCard tour={tour} key={index} />
                     ))}
                  </Grid>
               </>
            ))}
         </Container>
      </div>
   );
}

export default App;
