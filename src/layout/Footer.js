import React, { useState } from 'react';
import { connect } from 'react-redux';

function Footer(props) {

    const [name,setName] = useState('');
    const save =() => {
        props.changeName(name);
        setName('');
    }

    return (
    <div>
      <button onClick={props.minus}>-</button>
      <button onClick={props.plus}>+</button>
<hr/>
        Change name:
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        <button onClick={save}>Save</button>
    </div>
  );
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  minus: () => dispatch({ type: 'MINUS'}),
  plus: () => dispatch({type: 'PLUS'}),
    changeName: (name) => dispatch ({ type: 'CHANGE_NAME', payload: name})
});

export default connect(mapStateToProps, mapDispatchToProps, )(Footer);

