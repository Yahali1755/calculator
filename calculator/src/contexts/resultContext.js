import React, { useContext, useState } from 'react'

const ResultContext = React.createContext()
const UpdateResultContext = React.createContext();

export const useResult = () => {
    useContext(ResultContext);
};

export const useUpdateResult = () => {
    useContext(UpdateResultContext);
};

export const ResultProvider = ({ children }) => {
    const [result, setResult] = useState(0);

    return (
        <ResultContext.Provider value={result}>
            <UpdateResultContext.Provider value={setResult}>
                {children}
            </UpdateResultContext.Provider>
        </ResultContext.Provider>
    )
}