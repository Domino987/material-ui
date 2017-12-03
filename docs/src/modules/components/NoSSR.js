import React from 'react';
import PropTypes from 'prop-types';

const DefaultOnSSR = () => null;

class NoSSR extends React.Component {
  state = {
    canRender: false,
  };

  componentDidMount() {
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({ canRender: true });
  }

  render() {
    return this.state.canRender ? this.props.children : <DefaultOnSSR />;
  }
}

NoSSR.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NoSSR;
