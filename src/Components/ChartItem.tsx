import { Card } from "react-bootstrap";
import React from "react";
import {Chart as ChartJS, BarElement, BarController, CategoryScale, LinearScale, Tooltip} from "chart.js"
import { Bar } from "react-chartjs-2";

import { Props } from "./ChartItem/interfaces";
import { useGetDataset } from "./ChartItem/utils";

ChartJS.register(BarElement, BarController, CategoryScale, LinearScale, Tooltip);

const ChartItem:React.FC<Props> = ({details}) => {

    const dataset = useGetDataset(details);

    return (
        <Card className="chart-item mx-auto">
            <Card.Header>
                <Bar 
                    data={dataset}
                    className="chart"
                />
            </Card.Header>
            <Card.Body className='description'>
                <Card.Text>
                    {details.indicator_name}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
export default ChartItem;