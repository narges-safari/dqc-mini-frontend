import { Box, Grid } from "@mui/material";
import Info from "../components/Info/Info";
import Statistic from "../components/Statistic/Statistic";
import data from "../assets/data/data.json";

const Cars = () => {
  return (
    <Box margin={3} borderRadius={4} padding={3}>
      {data.map((item) => (
        <Grid
          container
          spacing={3}
          paddingBottom={2}
          marginBottom={2}
          borderBottom={"2px solid #d9d8d8"}
          style={{ borderBottomLeftRadius: 40 }}
        >
          <Grid item xs={4} display={"flex"} flexDirection={"column"}>
            <Info title={item.title} description={item.description} />
          </Grid>
          <Grid item xs={8} display={"flex"} flexDirection={"column"}>
            <Box width={"100%"} height={8} bgcolor={"#00c58d"} marginTop={3} />
            <Statistic
              name={"valid"}
              color={"#00c58d"}
              quantityOrMostCommen={7385}
              percent={100}
            />
            <Statistic
              name={"Mismatched"}
              color={"#f97c00"}
              quantityOrMostCommen={0}
              percent={0}
            />
            <Statistic
              name={"Missing"}
              color={"#dc4e55"}
              quantityOrMostCommen={0}
              percent={0}
            />
            <Statistic name={"Unique"} quantityOrMostCommen={42} />
            <Statistic
              name={"Most Common"}
              quantityOrMostCommen={"FORD"}
              percent={9}
            />
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default Cars;
