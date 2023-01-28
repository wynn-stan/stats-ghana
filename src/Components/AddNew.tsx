import React from 'react';
import { Card } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import { useAppContext } from '../Context/AppContext';

const AddNew:React.FC = () => {

    const ctx = useAppContext();
    const [searchOpen, setSearchOpen] = ctx.searchbar;

    return (
        <Card style={{ maxWidth: '18rem' }} onClick={() => setSearchOpen(true)} className="mx-auto">
            <Card.Body>
                <Card.Text>
                    <BsSearch className="add-new"/>
                </Card.Text>
                <Card.Text>
                    <p className="font-italic text-center pt-2">Search For Data...</p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
export default AddNew;
