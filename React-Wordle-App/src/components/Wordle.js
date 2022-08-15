import React from 'react';
import {useEffect} from 'react';
import useWordle from '../hooks/useWordle';
import Grid from './Grid';
import Keypad from './Keypad';

const Wordle = ({solution}) => {
    const { currentGuess, handleKeyup, guesses, isCorrect, turn } = useWordle(solution)

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup);

        return () => window.removeEventListener('keyup', handleKeyup);
    }, [handleKeyup]);

    useEffect(() => {

    }, [guesses, turn, isCorrect]);


    return (
        <div>
            <div>Guess: {currentGuess}</div>
            <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
            <Keypad />
        </div>
    )
}

export default Wordle