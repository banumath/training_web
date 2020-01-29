import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import style from './Diaryhome-jss';
import DiaryCard from '../DiaryCard';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      titlelist: [],
      descriptionlist: [],
    };
    this.addCard = this.addCard.bind(this);
  }

  handleUsername(value) {
    this.setState({
      title: value,
    });
  }

  handleComment(value) {
    this.setState({
      description: value,
    });
  }

  addCard() {
    if (this.state.title == null || this.state.title === '') {
      console.log('Missing title');
      return;
    }
    if (this.state.description == null || this.state.description === '') {
      console.log('Missing description');
      return;
    }
    this.setState(preState => ({
      titlelist: [...preState.titlelist, preState.title],
      descriptionlist: [...preState.descriptionlist, preState.description],
      title: '',
      description: '',
    }));
  }

  render() {
    const { classes } = this.props;

    const card = [];

    for (let i = 0; i < this.state.descriptionlist.length; 'i++') {
      card.push(
        <DiaryCard
          description={this.state.descriptionlist[i]}
          title={this.state.titlelist[i]}
          backgroundColor="#f00"
          subtitle="feaefwa"
        />,
      );
    }
    return (
      <div>
        <div>
          <div>
            <input
              type="text"
              value={this.state.title}
              placeholder="Submit new"
              onChange={e => this.handleUsername(e.target.value)}
              className={classes.input}
            />
            <textarea
              value={this.state.description}
              onChange={e => this.handleComment(e.target.value)}
              placeholder="Description"
              className={classes.area}
            />
            <button
              type="submit"
              onClick={this.addCard}
              className={classes.submit}
            >
              Submit
            </button>
          </div>
        </div>
        <div>{card}</div>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(style)(Index);
