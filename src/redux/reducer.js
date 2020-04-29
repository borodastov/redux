const initialState = {
    player1: 'Jim',
    player2: 'Bim',
    field: [
        null, 'X', null,
        null, null, null,
        null, 'O', null
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
        newField[action.payload] = 'X';
        return {
            ...state,
            field: newField
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