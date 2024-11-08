// AlertComponent.tsx
import React from 'react';
import { Alert, AlertTitle } from '@mui/material';
import { useAlert } from './AlertContext';

const AlertComponent: React.FC = () => {
    const { alert, setAlert } = useAlert();

    if (!alert) return null;

    return (
        <Alert
            severity={alert.type}
            onClose={() => setAlert(null)}
            sx={{ position: 'fixed', top: 16, right: 16, zIndex: 9999 }}
        >
            <AlertTitle>{alert.title}</AlertTitle>
            {alert.message}
        </Alert>
    );
};

export default AlertComponent;