import React, {useState} from 'react';
import {Button, Paper, Typography} from "@mui/material";

const DigitSelector: React.FC = () => {
    const [selectedDigitsArray, setSelectedDigitsArray] = useState<number[]>([]);
    const [receivedToken, setReceivedToken] = useState<string>('');
    const [isTokenDataReceived, setTokenDataReceived] = useState<boolean>(false);
    const [validationInfo,setValidationInfo] = useState<string>('');

    const handleDigitSelect = (digit: number) => {
        if (!selectedDigitsArray.includes(digit)) {
            setSelectedDigitsArray((prevState) => [...prevState, digit]);
        } else {
            setSelectedDigitsArray((prevState) => prevState.filter((d) => d !== digit));
        }
    };

    const shouldHighlight = (digit: number) => {
        return selectedDigitsArray.includes(digit);
    }

    const sendSelectedDigits = async (selectedDigitsArray: number[]) => {
        const url = 'http://localhost:8080/generate'; // Update the URL as needed

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(selectedDigitsArray),
            });
            if (response.ok) {
                const data = await response.text();
                console.log('Received data from server:', data);
                setTokenDataReceived(true);
                setReceivedToken(data);
            } else {
                console.error('Failed to send data to server');
            }
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };

    const sendTokenToValidate = async (receivedToken: String) => {
        const url = 'http://localhost:8081/validate'; // Update the URL as needed

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(receivedToken),
            });
            if (response.ok) {
                const data = await response.text();
                console.log('Received data from validator server:', data);
                setValidationInfo(data);
            } else {
                console.error('Failed to send data to validator server');
            }
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };

    return (
        <Paper sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Typography variant={'h2'}>Select a Digit</Typography>
            <div>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit) => (
                    <Button
                        key={digit}
                        onClick={() => handleDigitSelect(digit)}
                        sx={{
                            backgroundColor: shouldHighlight(digit) ? 'rgba(133, 245, 110, 0.25)' : 'rgba(117, 125, 115, 0.25)',
                        }}>
                        {digit}
                    </Button>
                ))}
            </div>
            <Typography variant={'body1'} align="center" alignItems="center">
                <div>Selected Digits Array:</div>
                <div>{selectedDigitsArray.join(', ')}</div>
            </Typography>
            <Button
                onClick={() => sendSelectedDigits(selectedDigitsArray)}
            >Create Token</Button>
            {isTokenDataReceived && <Typography
                variant={'body1'} align="center" alignItems="center">
                <div>Your token has been created:</div>
                <div>{receivedToken}</div>
            </Typography>
            }
            {isTokenDataReceived && <Button
            onClick={()=>sendTokenToValidate(receivedToken)}
            >Validate token using Luhn algorithm
            </Button>}
            {validationInfo && <Typography
                variant={'body1'} align="center" alignItems="center">
                <div>{validationInfo}</div>
            </Typography>
            }
        </Paper>
    );
}

export default DigitSelector;