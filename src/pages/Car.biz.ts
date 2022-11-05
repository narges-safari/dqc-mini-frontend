import { useCallback } from "react";
import { boxColorDictionary } from "./Car.const";
import { Statistics } from "./Cars.types";

export const useCars = () => {
  const colorRender = (_name: string) => {
    return boxColorDictionary.find((item) => item.name === _name)?.color;
  };

  //This function returns the name of the property with the larget percentage
  const findMaxName = useCallback((_statistics: Statistics[]) => {
    const percentageArray: number[] = [];
    _statistics.map((item) =>
      percentageArray.push(
        typeof item.percentage === "number" ? item.percentage : 0
      )
    );
    const maxPercantage = Math.max(...percentageArray);
    return _statistics.find((item) => item.percentage === maxPercantage)
      ?.name as string;
  }, []);

  return { colorRender, findMaxName };
};
