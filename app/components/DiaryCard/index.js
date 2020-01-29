import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import style from './DiaryStyle-jss';

const Index = props => {
  const { classes, title, subtitle, description, backgroundColor } = props;
  return (
    <div>
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
};

Index.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default withStyles(style)(Index);
