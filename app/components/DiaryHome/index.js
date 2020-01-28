import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import style from './Diaryhome-jss';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      comment: '',
    };

    this.handleUsername = this.handleUsername.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleComment = this.handleComment.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log(this.state);
    this.setState({
      username: '',
      comment: '',
    });
  };

  handleUsername = e => {
    this.setState({
      username: e.target.value,
    });
  };

  handleComment = e => {
    this.setState({
      comment: e.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.username}
          placeholder="Submit new"
          onChange={this.handleUsername}
          className={classes.input}
        />
        <textarea
          value={this.state.comment}
          onChange={this.handleComment}
          placeholder="Description"
          className={classes.area}
        />
        <button type="submit" className={classes.submit} color="primary">
          Submit
        </button>
      </form>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(style)(Index);
