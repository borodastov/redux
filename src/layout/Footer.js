import React from 'react';
import { connect } from 'react-redux';

function Footer(props) {
  return (
    <div>
    Hello----! {props.name}
    </div>
  );
}

const mapDispatchToProps = state => ({
  name: state.name
});

export default connect(mapDispatchToProps)(Footer);

