import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Select from "react-select";
import { useAppContext } from '../Context/AppContext';
import { Props } from './SearchModal/interfaces';
import { getDefaultValues, updateChartList } from './SearchModal/utils';

const SearchModal:React.FC<Props> = ({isSelecting, handleClose, list, setList}) => {

    const ctx = useAppContext();
    const chartOptions = ctx.chartOptions;
    const [selected, setSelected] = useState<any[]>([])

    return (
        <Modal show={isSelecting} onHide={() => handleClose(selected)} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>
                    Search For Charts
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Select 
                    defaultValue={getDefaultValues(list)}
                    closeMenuOnSelect={false}
                    isMulti
                    options={chartOptions}
                    onChange={(choices: readonly any[]) => updateChartList(setSelected,choices)}
                    className="search-bar"
                />
            </Modal.Body>

        </Modal>
    );
}
export default SearchModal;
