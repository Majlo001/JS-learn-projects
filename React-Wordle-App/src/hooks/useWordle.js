import {useState} from 'react';

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [guesses, setGuesses] = useState([...Array(6)]);
    const [history, setHistory] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);
    const [usedKeys, setUsedKeys] = useState({});

    const formatGuess = () => {
        let solutionArray = [ ...solution];

        let formattedGuess = [...currentGuess].map((l) => {
            return {key: l.toLowerCase(), color: 'grey'}
        });

        formattedGuess.forEach((l, i) => {
            if(solution[i] === l.key) {
                formattedGuess[i].color = 'green';
                solutionArray[i] = null;
            } 
            else if (solutionArray.includes(l.key)) {
                formattedGuess[i].color = 'yellow';
                solutionArray[solutionArray.indexOf(l.key)] = null;
            }
        });

        return formattedGuess;
    }

    const addNewGuess = (formattedGuess) => {
        if (currentGuess === solution){
            setIsCorrect(true);
        }

        setGuesses(prev => {
            let newGuesses = [...prev];
            newGuesses[turn] = formattedGuess;
            return newGuesses;
        });
        setHistory(prev => {
            return [...prev, currentGuess];
        });
        setTurn(prev => {
            return prev + 1;
        });
        setUsedKeys(prev => {
            let newKeys = {...prev};

            formattedGuess.forEach((l) => {
                if (l.color === 'green'){
                    newKeys[l.key] = 'green';
                    return;
                }
                else if (l.color === 'yellow'){
                    newKeys[l.key] = 'yellow';
                    return;
                }
                else if (l.color === 'grey'){
                    newKeys[l.key] = 'grey';
                    return;
                }
            });

            return newKeys;
        });
        setCurrentGuess('');
    }

    const handleKeyup = ({key}) => {
        
        if (key === 'Enter') {
            if (turn > 5) {
                return;
            }
            if (history.includes(currentGuess)) {
                return;
            }
            if (currentGuess.length !== 5) {
                return;
            }
            const formatted = formatGuess();
            addNewGuess(formatted);
        }
        if (key === 'Backspace') {
            setCurrentGuess(prev => prev.slice(0, -1));
            return;
        }
        if (/^[A-Za-z]$/.test(key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess(prev => prev + key )
            }
        }
    }

    return { turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyup}
}

export default useWordle;