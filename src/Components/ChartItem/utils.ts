import { getDatasetProps } from "./interfaces";
import { useAppContext } from "../../Context/AppContext";

const getYearsInBetween = (start: string, end: string) => {
    const min = (new Date(start)).getFullYear();
    const max = (new Date(end)).getFullYear();
    const years = []

    for(let i = min; i <= max; i++){years.push(i)}

    return years;

}

const getYearlyValues = (datapoint: any, yearsInBetween: number[]) => {
    const values = yearsInBetween.map(year => datapoint[year]);
    return values;
}

export const useGetDataset = (details: getDatasetProps ) => {

    const nullDataset = {
        labels: [],
        datasets: []
    }

    const start_year = details.start_year;
    const end_year = details.end_year;
    const indicator_name = details.indicator_name;

    const unfiltered = useAppContext().dataset;
    const filtered = unfiltered.find((datapoint) => datapoint["Indicator Name"] === indicator_name);

    if(!filtered) return nullDataset;

    const yearsInBetween = getYearsInBetween(start_year, end_year);
    const yearlyValues = getYearlyValues(filtered, yearsInBetween);
    

    return {
        labels: yearsInBetween,
        datasets: [{
            label: "",
            data: yearlyValues,
            borderColor: '#36A2EB',
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ]
        }]
    };
}