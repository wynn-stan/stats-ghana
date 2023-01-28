export const getChartOptions = (details:any[]) => {
    return details.map((datapoint) => {
        return {value: datapoint["Indicator Name"], label: datapoint["Indicator Name"] }
    });
}