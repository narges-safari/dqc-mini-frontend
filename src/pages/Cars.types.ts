export interface CarData {
  title: string;
  description: string;
  cars?: Cars[];
  uniqueValues?: number;
  statistics: Statistics[];
}

export interface Statistics {
  name: string;
  percentage?: number;
  detail: string;
}

export interface Cars {
  name: string;
  percentage: number;
  disable: boolean;
}

export interface IBoxColorDictionaryProps {
  name: string;
  color: string;
}
