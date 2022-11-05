import { Box, Typography } from "@mui/material";
import { IStatisticProps } from "./Statistic.types";

const Statistic = (props: IStatisticProps) => {
  const { name, color, quantityOrMostCommen, percent } = props;

  return (
    <Box display={"flex"} justifyContent={"space-between"} marginTop={1}>
      <Box display={"flex"} alignItems={"baseline"}>
        <Typography variant={"caption"}>{name}</Typography>
        {color && <Box marginLeft={0.5} bgcolor={color} height={8} width={8} />}
      </Box>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography variant={"caption"}>{quantityOrMostCommen}</Typography>
        <Typography
          display={"flex"}
          justifyContent={"flex-end"}
          variant={"caption"}
          color={"gray"}
          paddingLeft={2}
          width={36}
          visibility={percent === undefined ? "hidden" : "unset"}
        >
          {`${percent}%`}
        </Typography>
      </Box>
    </Box>
  );
};

export default Statistic;
