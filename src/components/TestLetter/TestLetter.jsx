import React from 'react';
import "./TestLetter.css";

const TestLetter = ({ selectedLetter }) => {
    const { status } = selectedLetter;
    const statusClass = {
        correct: "test-letter-correct",
        incorrect: "test-letter-incorrect",
        notAttempted: "test-letter-not-attempted"
    }[status]
    return (
        <span className={`test-letter ${statusClass}`}>{selectedLetter.testLetter}</span>
    );
}

export default TestLetter;