export interface Exprience{
    id?: number;
    title: string;
    description?: string;
    finishedMonth: number;
    finishedYear: number;
    startMonth?: number;
    startYear?: number;
    establishment?: string;
    technologies?: string[];
    categories: string[];
}