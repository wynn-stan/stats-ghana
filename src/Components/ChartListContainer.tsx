import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

import { useAppContext } from '../Context/AppContext';
import Overview from './Overview';
import ChartItem from './ChartItem';
import AddNew from './AddNew';


const ChartListContainer:React.FC = () => {

    const ctx = useAppContext();
    const [chartList, setChartList] = ctx.charts;

    return (
        <Container fluid="xl" className='chart-list'>
            <Row className=''>
                {
                    chartList.length > 0 ? chartList.map((item) => <Col sm={12} md={6} lg={4} className="my-2"><ChartItem key={item.indicator_name} details={item} /></Col>)
                              : <AddNew />
                }
            </Row>
        </Container>
    );
}
export default ChartListContainer;

