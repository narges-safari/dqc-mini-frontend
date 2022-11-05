import { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import { IInfoProps } from "./Info.types";

const data = [
  { name: "FORD", percent: 9, disable: false },
  { name: "CHEVROLET", percent: 8, disable: false },
  { name: "Other", percent: 83, disable: true },
];

const Info = (props: IInfoProps) => {
  const { title, description, uniqueValues } = props;

  return (
    <Fragment>
      <Typography variant={"h5"}>{title}</Typography>
      <Typography>{description}</Typography>
      {uniqueValues ? (
        <Box>
          <Typography color={"blue"}>2053</Typography>
          <Typography fontWeight={"bold"}>Unique Values</Typography>
        </Box>
      ) : (
        data.map((item) => (
          <Box display={"flex"} justifyContent={"space-between"} marginTop={2}>
            <Typography
              variant={"subtitle2"}
              color={item.disable ? "gray" : "inherit"}
            >
              {item.name}
            </Typography>
            <Typography
              color={item.disable ? "gray" : "blue"}
            >{`${item.percent}%`}</Typography>
          </Box>
        ))
      )}
    </Fragment>
  );
};

export default Info;
