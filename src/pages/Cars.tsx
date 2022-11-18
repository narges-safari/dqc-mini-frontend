import { Box, Grid } from "@mui/material";
import Info from "../components/Info/Info";
import carsJson from "../assets/data/data.json";
import Statistic from "../components/Statistic/Statistic";
import { useCars } from "./Car.biz";
import { CarData } from "./Cars.types";

const carsData: CarData[] = carsJson;

const Cars = () => {
  const { findColorHandler, findMaxPercentageName } = useCars();

  return (
    <Box margin={3} borderRadius={4} padding={3}>
      {carsData.map((item: CarData, index: number) => (
        <Grid
          key={index}
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
            <Box
              width={"100%"}
              height={8}
              bgcolor={findColorHandler(findMaxPercentageName(item.statistics))}
              marginTop={3}
            />
            {item.statistics.map((sts, index: number) => (
              <Statistic
                key={index}
                name={sts.name}
                color={findColorHandler(sts.name)}
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
