import React, {createContext, ReactNode, useContext, useState} from 'react';

type AlertType = 'error' | 'warning' | 'info' | 'success';

interface AlertContextType {
    alert: {
        type: AlertType;
        title: string;
        message: string;
    } | null;
    setAlert: React.Dispatch<React.SetStateAction<AlertContextType['alert']>>;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const AlertProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [alert, setAlert] = useState<AlertContextType['alert']>(null);

    return (
        <AlertContext.Provider value={{ alert, setAlert }}>
            {children}
        </AlertContext.Provider>
    );
};

export const useAlert = (): AlertContextType => {
    const context = useContext(AlertContext);
    if (context === undefined) {
        throw new Error('useAlert must be used within an AlertProvider');
    }
    return context;
};