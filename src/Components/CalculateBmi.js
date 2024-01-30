import React, { useState } from 'react';
import './calculatebmi.css'

function BmiCalculator() {
    const [heightValue, setHeightValu] = useState('');
    const [weightValue, setWeightValue] = useState('');
    const [bmiValue, setBmiValue] = useState('');
    const [bmiMessage, setBmiMessage] = useState('');

    const CalculateBmi = () => {
        if (heightValue && weightValue) {
            const heightInMeters = heightValue / 100;
            const bmi = (weightValue / (heightInMeters * heightInMeters)).toFixed(2);
            setBmiValue(bmi);

            let message = '';
            if (bmi < 18.5) {
                message = "You are Undeweight";
            }
            else if (bmi >= 18.5 && bmi < 25) {
                message = "You are Normal Weight";
            }
            else if (bmi >= 25 && bmi < 30) {
                message = "You are Overweight";
            }
            else {
                message = "You are Obese";
            }
            setBmiMessage(message);
        } else {
            setBmiValue('');
            setBmiMessage('');
        }
    };
    return (
        <div className="container">
            <h1><b><u>BMI CALCULATOR</u></b></h1>
            <div className="input-container">
                <label htmlFor="height">Enter Your Height (cm):</label>
                <input
                    type="number"
                    id="height"
                    value={heightValue}
                    onChange={(e) => setHeightValu(e.target.value)}
                />
            </div>
            <div className="input-container">
                <label htmlFor="weight">Enter Your Weight (kg):</label>
                <input
                    type="number"
                    id="weight"
                    value={weightValue}
                    onChange={(e) => setWeightValue(e.target.value)}
                />
            </div>
            <button className="calculate-btn" onClick={CalculateBmi}>
                Click to Calculate BMI
            </button>
            {bmiValue && bmiMessage && (
                <div className="result">
                    <p>
                        Your BMI: <span className="bmi-value">{bmiValue}</span>
                    </p>
                    <p>
                        Result: <span className="bmi-message">{bmiMessage}</span>
                    </p>
                </div>
            )}
        </div>
    );
}
export default BmiCalculator
