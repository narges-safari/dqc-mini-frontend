import { boxColorDictionary } from "./Car.const";

export const useCars = () => {
  const colorRender = (_name: string) => {
    return boxColorDictionary.find((item) => item.name === _name)?.color;
  };

  return { colorRender };
};
