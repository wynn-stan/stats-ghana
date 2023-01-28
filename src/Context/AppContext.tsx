import React, { createContext, useContext, useState } from "react";
import {Props, IAppContext, ChartList} from "./AppContext/interfaces";

import { useFetchStats } from "../Hooks/useFetchStats";
import { getChartOptions } from "./AppContext/utils";

const AppContext = createContext({} as IAppContext);

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider:React.FC<Props> = ({children}) => {

    const [chartList, setChartList] = useState<ChartList[]>([])

    const data = useFetchStats();

    const chartOptions = getChartOptions(data);

    const [searchOpen, setSearchOpen] = useState<boolean>(false);

    return (
        <AppContext.Provider value={{
            dataset: data, 
            charts: [chartList, setChartList],
            chartOptions,
            searchbar: [searchOpen, setSearchOpen],
        }}>
            {children}
        </AppContext.Provider>
    )   
}
