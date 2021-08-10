import React from 'react';
import TryAgain from '../TryAgain/TryAgain';
import TypingChallenge from '../TypingChallenge/TypingChallenge';
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';
import "./TestContainer.css";

const TestContainer = ({ selectedParagraph, words, characters, wpm, timeRemaining, timerStarted, testInfo, onInputChange, startAgain }) => {
    return (
        <div className="test-container">
            {
                timeRemaining > 0 ? (
                    <div data-aos="fade-up" className="typing-challenge-container">
                        <TypingChallengeContainer
                            selectedParagraph={selectedParagraph}
                            words={words}
                            characters={characters}
                            wpm={wpm}
                            timeRemaining={timeRemaining}
                            timerStarted={timerStarted}
                            testInfo={testInfo}
                            onInputChange={onInputChange}
                        />
                    </div>
                ) : (
                    <div className="try-again-container">
                        <TryAgain words={words} characters={characters} wpm={wpm} startAgain={startAgain} />
                    </div>
                )
            }

        </div>
    );
}

export default TestContainer;