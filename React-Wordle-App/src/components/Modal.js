import React from 'react'

const Modal = ({ isCorrect, turn, solution}) => {
    let end = "";

    if (turn === 1)         end = "st.";
    else if (turn === 2)    end = "nd.";
    else if (turn === 3)    end = "rd.";
    else                    end = "th.";

    const newGame = (() => {
        window.location.reload(true);
    })

    return (
        <div className="modal">
            {isCorrect && (
                <div>
                    <h1>You Won!</h1>
                    <p className="solution">{solution}</p>
                    <p>You found the solution in {turn}{end} turn</p>
                    <button onClick={newGame}>Try again!</button>
                </div>
            )}
            {!isCorrect && (
                <div>
                    <h1>Nevermind!</h1>
                    <p className="solution">{solution}</p>
                    <p>Better luck next time :)</p>
                    <button onClick={newGame}>Try again!</button>
                </div>
            )}
        </div>
    )
}

export default Modal