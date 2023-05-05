export interface Course{
  id?: number;
  title: string;
  description?: string;
  duration?: number;
  finishedMonth: number;
  finishedYear: number;
  startMonth?: number;
  startYear?: number;
  establishment?: string;
  technologies?: string[];
  categories: string[];
}
