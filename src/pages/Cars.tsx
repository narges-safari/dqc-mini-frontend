import { Box, Grid } from "@mui/material";
import Info from "../components/Info/Info";
import CarsData from "../assets/data/data.json";
import Statistic from "../components/Statistic/Statistic";
import { useCars } from "./Car.biz";

const Cars = () => {
  const { colorRender } = useCars();

  return (
    <Box margin={3} borderRadius={4} padding={3}>
      {CarsData.map((item) => (
        <Grid
          container
          spacing={3}
          paddingBottom={2}
          marginBottom={2}
          borderBottom={"2px solid #d9d8d8"}
          style={{ borderBottomLeftRadius: 40 }}
        >
          <Grid item xs={5} display={"flex"} flexDirection={"column"}>
            <Info
              title={item.title}
              description={item.description}
              cars={item.cars}
              uniqueValues={item.uniqueValues}
            />
          </Grid>
          <Grid item xs={7} display={"flex"} flexDirection={"column"}>
            <Box width={"100%"} height={8} bgcolor={"#00c58d"} marginTop={3} />
            {item.statistics.map((sts) => (
              <Statistic
                name={sts.name}
                color={colorRender(sts.name)}
                detail={sts.detail}
                percentage={sts.percentage}
              />
            ))}
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default Cars;
