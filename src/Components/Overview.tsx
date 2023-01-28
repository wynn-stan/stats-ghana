import { Card } from "react-bootstrap";

const Overview = () => {
    return (
        <Card className="chart-item mx-auto">
            <Card.Img variant="top" src="/flag.png" />
            <Card.Body className='description'>
                {/* <span>Country: {data.country}</span>
                <span>Data Source: {data.data_source}</span>
                <span>Last Updated: {data.last_updated}</span> */}
            </Card.Body>
        </Card>
    )
}

export default Overview;