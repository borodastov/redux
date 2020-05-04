const initialState = {
    players: ['Jim',"Bim"],
    field: [
        null, null, null,
        null, null, null,
        null, null, null
    ],
    currentPlayer: 1,
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

switch (action.type)
{
    case 'CLICK':

        const newField = [...state.field];
        let newCurrentPlayer = state.currentPlayer;
        if (!newField[action.payload]) {


            if (state.currentPlayer == 1) {
                newField[action.payload] = 'O';
                newCurrentPlayer = 0;
            } else {
                newField[action.payload] = 'X';
                newCurrentPlayer = 1;
            }
        }

        return {
            ...state,
            field: newField,
            currentPlayer: newCurrentPlayer
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