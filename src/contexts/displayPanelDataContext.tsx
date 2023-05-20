import { useContext, useState, FC, createContext, SetStateAction, Dispatch, ReactNode } from 'react'

import { defaultEquationValue } from '../utils/equationUtil';

interface DisplayPanelDataProps {
    equation: string,
    result: string
}

interface EquationProviderProps {
    children: ReactNode
}

const DisplayPanelDataContext = createContext({equation: "", result: defaultEquationValue});
const SetDisplayPanelDataContext = createContext<Dispatch<SetStateAction<DisplayPanelDataProps>>>(undefined);

export const useDisplayPanelData = () => useContext<DisplayPanelDataProps>(DisplayPanelDataContext);
export const useSetDisplayPanelData = () => useContext<Dispatch<SetStateAction<DisplayPanelDataProps>>>(SetDisplayPanelDataContext);

export const DisplayPanelDataProvider: FC<EquationProviderProps> = ({ children }) => {
    const [displayPanelData, setDisplayPanelData] = useState<DisplayPanelDataProps>({equation: "", result: defaultEquationValue});
    
    return (
        <DisplayPanelDataContext.Provider value={displayPanelData}>
            <SetDisplayPanelDataContext.Provider value={setDisplayPanelData}>
                {children}
            </SetDisplayPanelDataContext.Provider>
        </DisplayPanelDataContext.Provider>
    );
};