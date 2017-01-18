import React, { Component, PropTypes } from 'react';
import withSideEffect from 'react-side-effect';

class FixedPage extends Component {
  static propTypes = {
    fixed: PropTypes.bool.isRequired
  };

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return null;
  }
}

const any = (list, iterator) => {
  for (let i = 0; i < list.length; i++) {
    if (iterator(list[ i ])) {
      return true;
    }
  }

  return false;
};

const reducePropsToState = propsList => {
  return any(propsList, ({ fixed }) => fixed);
};

let scrollTop = null, lastFixed = false;

const handleStateChangeOnClient = fixed => {
  if (fixed === lastFixed) {
    return;
  }
  lastFixed = fixed;

  const scrollingElement = document.scrollingElement || document.documentElement;

  if (fixed) {
    scrollTop = scrollingElement.scrollTop;
    Object.assign(
      scrollingElement.style,
      {
        top: `${scrollTop * -1}px`, left: 0, right: 0, bottom: 0, position: 'fixed', overflow: 'hidden'
      }
    );
    scrollingElement.scrollTop = scrollTop;
  } else {
    Object.assign(
      scrollingElement.style,
      {
        top: null, left: null, right: null, bottom: null, position: null, overflow: null
      }
    );
    scrollingElement.scrollTop = scrollTop;
    scrollTop = null;
  }
};

export default withSideEffect(
  reducePropsToState,
  handleStateChangeOnClient
)(FixedPage);