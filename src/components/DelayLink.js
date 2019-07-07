import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";

export class DelayLink extends Component {
  static propTypes = {
    delay: PropTypes.number,
  };
  static defaultProps = {
    delay: 0
  };
  static contextTypes = Link.contextTypes;
  constructor(props) {
    super(props);
    this.timeout = null;
  }
  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }
  handleClick = ( e ) => {
    const { to, delay } = this.props;

    if (e.defaultPrevented) { return; }
    e.preventDefault();

    this.timeout = setTimeout(() => {
        this.props.history.push(to);
    }, delay);
  };

  render() {
    const props = Object.assign({}, this.props);
    delete props.delay;

    return (
      <Link {...props} onClick={this.handleClick} />
    );
  }
}

export default withRouter(DelayLink);