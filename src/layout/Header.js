import React from 'react';
import {connect} from 'react-redux';
// import mapStateToProps from "react-redux/lib/connect/mapStateToProps";

function Header(props) {
    console.log(props.state)
    const {field} = props ;

    const click = (i) => {
        props.click(i) ;
    }

    return (
        <div>
            <div className='line'>
                <div className="cell" onClick={() => click(0)}>{field[0]}</div>
                <div className="cell" onClick={() => click(1)}>{field[1]}</div>
                <div className="cell" onClick={() => click(2)}>{field[2]}</div>
            </div>

            <div className='line'>
                <div className="cell" onClick={() => click(3)}>{field[3]}</div>
                <div className="cell" onClick={() => click(4)}>{field[4]}</div>
                <div className="cell" onClick={() => click(5)}>{field[5]}</div>
            </div>

            <div className='line'>
                <div className="cell" onClick={() => click(6)}>{field[6]}</div>
                <div className="cell" onClick={() => click(7)}>{field[7]}</div>
                <div className="cell" onClick={() => click(8)}>{field[8]}</div>
            </div>

            {/*<table>*/}
            {/*  <tr>*/}
            {/*    <td>=</td>*/}
            {/*    <td>=</td>*/}
            {/*    <td>=</td>*/}
            {/*  </tr>*/}
            {/*</table>*/}

            Current Player: {props.players[props.currentPlayer]}
            <hr/>
            Count {props.count}
            <hr/>
        </div>
    );
}


const mapStateToProps = state => ({

    state: state,
    field: state.field,
    name: state.name,
    players: state.players,
    a: state.age,
    count: state.count,
    currentPlayer: state.currentPlayer
});

const mapDispatchToProps = dispatch => ({
    click: (i) => dispatch({type: 'CLICK', payload: i})
});

//const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
