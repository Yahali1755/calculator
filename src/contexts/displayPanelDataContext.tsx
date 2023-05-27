import { useContext, useState, FC, createContext, SetStateAction, Dispatch, ReactNode } from 'react'

import { Operand } from '../constants/operand';

interface DisplayPanelDataProps {
    equation: string,
    result: string
}

interface DisplayPanelDataProviderProps {
    children: ReactNode
}

const DisplayPanelDataContext = createContext({equation: "", result: Operand.Zero as string});
const SetDisplayPanelDataContext = createContext<Dispatch<SetStateAction<DisplayPanelDataProps>>>(undefined);

export const useDisplayPanelData = () => useContext<DisplayPanelDataProps>(DisplayPanelDataContext);
export const useSetDisplayPanelData = () => useContext<Dispatch<SetStateAction<DisplayPanelDataProps>>>(SetDisplayPanelDataContext);

export const DisplayPanelDataProvider: FC<DisplayPanelDataProviderProps> = ({ children }) => {
    const [displayPanelData, setDisplayPanelData] = useState<DisplayPanelDataProps>({equation: "", result: Operand.Zero});
    
    return (
        <DisplayPanelDataContext.Provider value={displayPanelData}>
            <SetDisplayPanelDataContext.Provider value={setDisplayPanelData}>
                {children}
            </SetDisplayPanelDataContext.Provider>
        </DisplayPanelDataContext.Provider>
    );
};