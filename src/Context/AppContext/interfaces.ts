import { ReactNode } from "react";

export interface Props {
    children: ReactNode;
}

export interface ChartList {
    indicator_name: string,
    start_year: string,
    end_year: string
}

export interface IAppContext {
    dataset: any[],
    charts: [ChartList[], React.Dispatch<React.SetStateAction<ChartList[]>>],
    chartOptions: any[],
    searchbar: [boolean, React.Dispatch<React.SetStateAction<boolean>>] 
}