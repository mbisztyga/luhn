import React, { ReactNode } from 'react';
import {Typography} from "@mui/material";

interface CustomTypographyProps {
    children: ReactNode;
}

const InfoTypography: React.FC<CustomTypographyProps> = ({ children }) => {
    // Hard-coded values
    const variant = 'body1';
    const align = 'center';
    const alignItems = 'center';

    return (
        <Typography variant={variant} align={align} alignItems={alignItems}>
            {children}
        </Typography>
    );
};

export default InfoTypography;