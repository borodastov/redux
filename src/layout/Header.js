import React from 'react';
import { connect } from 'react-redux';

function Header(props) {
  return (
    <div>
    Hello! {props.name} {props.a}
    <hr/>
     <button> - </button> {props.count} <button>+</button>
    <hr/>
    </div>
  );
}

const mapDispatchToProps = state => ({
  name: state.name,
  a: state.age,
  count: state.count
});

export default connect(mapDispatchToProps)(Header);

