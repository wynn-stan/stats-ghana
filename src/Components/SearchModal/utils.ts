import { ChartList } from "../../Context/AppContext/interfaces"

export const getDefaultValues = (list: ChartList[]) => list.map((item) => {
    return {label: item.indicator_name, value: item.indicator_name}
})

export const updateChartList = (setSelected:React.Dispatch<React.SetStateAction<any[]>> ,choices: readonly any[]) => {

    const newChartList:ChartList[] = choices.map((choice) => {
        return {indicator_name: choice.label, start_year: "2015", end_year: "2021"}
    });

    setSelected(newChartList);
}