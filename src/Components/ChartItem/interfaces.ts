import { ChartList } from "../../Context/AppContext/interfaces";

export interface Props {
    details: ChartList;
}

export interface getDatasetProps {
    indicator_name: string,
    start_year: string ,
    end_year: string
}