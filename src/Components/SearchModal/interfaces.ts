import { ChartList } from "../../Context/AppContext/interfaces";

export interface Props {
    isSelecting: boolean;
    handleClose: (selected: any[]) => void;
    list: ChartList[];
    setList: React.Dispatch<React.SetStateAction<ChartList[]>>;
}