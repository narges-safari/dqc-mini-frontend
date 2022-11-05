import { Cars } from "../../pages/Cars.types";

export interface IInfoProps {
  title: string;
  description: string;
  cars?: Cars[];
  uniqueValues?: number;
}
