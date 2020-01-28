import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import style from './DiaryStyle-jss';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const {
      classes,
      title,
      subtitle,
      description,
      backgroundColor,
    } = this.props;
    return (
      <div>
        <label>
          Name
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" className={classes.submit} />
        <Card className={classes.card} style={{ backgroundColor }}>
          <CardContent>
            <Typography className={classes.title}>{title}</Typography>
            <Typography className={classes.subtitle} color="textSecondary">
              {subtitle}
            </Typography>
            <Typography className={classes.description}>
              {description.length > 100
                ? description.substring(1, 100).concat('...')
                : description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Show More</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.object.isRequired,
  subtitle: PropTypes.object.isRequired,
  description: PropTypes.object.isRequired,
  backgroundColor: PropTypes.object.isRequired,
};

export default withStyles(style)(Index);
