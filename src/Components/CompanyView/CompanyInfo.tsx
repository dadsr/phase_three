import {CompanyEntity} from "../../Models/CompanyEntity";
import {ThemeProvider} from "react-bootstrap";
import {Box, Typography} from "@mui/material";


interface CompanyInfoProps  {
    company: CompanyEntity;
}

const CompanyInfo: React.FC<CompanyInfoProps> = ({ company }) => {
    return(
        <ThemeProvider
            theme={{
                palette: {
                    primary: {
                        main: '#007FFF',
                        dark: '#0066CC',
                    },
                },
            }}
        >
            <Box
                sx={{
                    width: '23vh',
                    height: '100vh',
                    borderRadius: 1,
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
                    padding: 4,
                    display:'flex',
                    flexDirection: 'column',
                    gap: 2,
                }}>
                <Typography variant="h6" component="h2">
                    Company Information:
                </Typography>
                <Typography variant="body1">
                    <strong>Company:</strong> {company.name}
                </Typography>
                <Typography variant="body1">
                    <strong>Email:</strong> {company.email}
                </Typography>
            </Box>
        </ThemeProvider>
    );
};

export default CompanyInfo;

