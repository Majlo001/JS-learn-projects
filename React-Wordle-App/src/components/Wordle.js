import React from 'react';
import {useEffect} from 'react';
import useWordle from '../hooks/useWordle';

const Wordle = ({solution}) => {
    const { currentGuess, handleKeyup } = useWordle(solution)

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup);

        return () => window.removeEventListener('keyup', handleKeyup);
    }, [handleKeyup])


    return (
        <div>{currentGuess}</div>
    )
}

export default Wordle