export interface IInfoProps {
  title: string;
  cars?: Cars[];
  description: string;
  uniqueValues?: number;
}

export interface Cars {
  name: string;
  percentage: number;
  disable: boolean;
}
