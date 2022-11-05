import { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import { IInfoProps } from "./Info.types";
import { Cars } from "../../pages/Cars.types";

const Info = (props: IInfoProps) => {
  const { title, description, cars, uniqueValues } = props;

  return (
    <Fragment>
      <Typography variant={"h5"}>{title}</Typography>
      <Typography>{description}</Typography>
      {uniqueValues ? (
        <Box marginTop={4}>
          <Typography variant={"h4"} fontWeight={"bold"} color={"#0098de"}>
            {uniqueValues}
          </Typography>
          <Typography fontWeight={"bold"}>Unique Values</Typography>
        </Box>
      ) : (
        cars?.map((item: Cars) => (
          <Box display={"flex"} justifyContent={"space-between"} marginTop={2}>
            <Typography
              variant={"subtitle2"}
              color={item.disable ? "gray" : "inherit"}
            >
              {item.name}
            </Typography>
            <Typography
              color={item.disable ? "gray" : "blue"}
            >{`${item.percentage}%`}</Typography>
          </Box>
        ))
      )}
    </Fragment>
  );
};

export default Info;
