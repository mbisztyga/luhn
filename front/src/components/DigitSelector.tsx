import React, {useState} from 'react';
import {Button, Typography} from "@mui/material";

interface DigitSelectorState {
    selectedDigit: number | null;
    selectedDigitsArray: number[];
}

const DigitSelector: React.FC = () => {
    const [state, setState] = useState<DigitSelectorState>({
        selectedDigit: null,
        selectedDigitsArray: []
    });

    const handleDigitSelect = (digit: number) => {
        if (!state.selectedDigitsArray.includes(digit)) {
            setState((prevState) => ({
                selectedDigit: digit,
                selectedDigitsArray: [...prevState.selectedDigitsArray, digit],
            }));
        } else {
            setState((prevState) => ({
                selectedDigit: digit,
                selectedDigitsArray: prevState.selectedDigitsArray.filter((d) => d !== digit),
            }));
        }
    };

    const shouldHighlight = (digit: number) => {
        return state.selectedDigitsArray.includes(digit);
    }

    return (
        <div>
            <Typography variant='h2'>Select a Digit</Typography>
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
            <p>Selected Digits Array: {state.selectedDigitsArray.join(', ')}</p>
        </div>
    );
};

export default DigitSelector;