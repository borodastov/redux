const initialState = {
    players: [null, null]  ,
    field: [
        null, null, null,
        null, null, null,
        null, null, null
    ],
    currentPlayer: 0,
    winner: null,
    name: 'Jim',
    count: 7,
    age: 123,
}
const reducer = (state = initialState, action) => {

//     console.log(action)
// if(action.type == 'PLUS'){
//     return {
//         ...state,
//         count: state.count + 1
//     }
// }
//
// if (action.type == 'MINUS'){
//     return {
//         ...state,
//         count: state.count - 1
//     }
// }
    const checkWinner = (field) => {
        if ((field[0] === field[1] && field[0] === field[2] && field[0] != null) ||
            (field[3] === field[4] && field[3] === field[5] && field[3] != null) ||
            (field[6] === field[7] && field[6] === field[8] && field[6] != null) ||
            (field[0] === field[4] && field[0] === field[8] && field[0] != null) ||
            (field[2] === field[4] && field[2] === field[6] && field[2] != null) ||
            (field[0] === field[3] && field[0] === field[6] && field[0] != null) ||
            (field[1] === field[4] && field[1] === field[7] && field[1] != null) ||
            (field[2] === field[5] && field[2] === field[8] && field[2] != null))
            return true;
        else return false;
    }

    switch (action.type) {
        case 'CLICK':

            const newField = [...state.field];
            let winner;
            let newCurrentPlayer = state.currentPlayer;
            if (!newField[action.payload]) {


                if (state.currentPlayer == 1) {
                    newField[action.payload] = 'O';
                    winner = 1;
                    newCurrentPlayer = 0;
                } else {
                    newField[action.payload] = 'X';
                    winner = 0;
                    newCurrentPlayer = 1;
                }

            }

            if (checkWinner(newField))
                return {
                    ...state,
                    field: newField,
                    currentPlayer: newCurrentPlayer,
                    winner: winner
                };
            else return {
                ...state,
                field: newField,
                currentPlayer: newCurrentPlayer,
            };

        case 'NewName':
            const newPlayers = [...state.players];
            console.log(newPlayers);
            newPlayers[action.payload[0]] = action.payload[1];

            return {
                ...state,
                players: newPlayers
            };


        default:
            return state;
    }
    // return {
    //     name: "John",
    //     age: 123,
    //     count: 5
    //
    //
    // }
}

export default reducer;