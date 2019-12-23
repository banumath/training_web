import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Helmet } from 'react-helmet';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DataCard from './DataCard';
import firebase from '../../firebase';
import { fetch } from '../App/actions';

export default class FeaturePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      topic: '',
      description: '',
    };
  }

  componentDidMount = () => {
    try {
      // fetch initial data
      this.fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  fetchData = () => {
    try {
      // var docData = [];
      // firebase.firestore().collection('Posts').get().then(querySnap => {
      //   querySnap.forEach(
      //     doc => {
      //       let newItem = {};
      //       newItem.title = doc.data().title;
      //       newItem.description = doc.data().description;
      //       newItem.id = doc.id;
      //       if (!this.state.docId.includes(newItem.id)){
      //         doc.data().user.get().then(
      //           res => {
      //             newItem.username = res.data().name;
      //             this.setState(
      //               {
      //                 docId:[...this.state.docId,newItem.id],
      //                 data: [...this.state.data, newItem]
      //               }
      //             )
      //             // console.log(newItem);
      //             docData.push(newItem);
      //           }
      //         ).catch(err => {
      //           console.log(err);
      //         })
      //       }
      //     }
      //   );
      // });
    } catch (error) {
      console.log(error);
    }
  };

  uploadData = () => {
    const userRef = firebase
      .firestore()
      .collection('Users')
      .doc(this.props.location.state.userRef);
    firebase
      .firestore()
      .collection('Posts')
      .add({
        title: this.state.topic,
        description: this.state.description,
        user: userRef,
      })
      .then(docRef => {
        console.log('uuploaded');
        console.log(docRef.id);
      });
    this.fetchData();
  };

  render() {
    console.log(this.props.location.state.userRef);
    return (
      <div>
        <Helmet>
          <title>Feature Page</title>
          <meta
            name="description"
            content="Feature page of React.js Boilerplate application"
          />
        </Helmet>
        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="title"
            label="Tile"
            name="title"
            autoComplete="email"
            autoFocus
            onChange={text => {
              this.setState({
                topic: text.target.value,
              });
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="desc"
            label="Description"
            name="description"
            autoComplete="email"
            autoFocus
            onChange={text => {
              this.setState({
                description: text.target.value,
              });
            }}
          />
          <Button onClick={fetch} fullWidth variant="contained" color="primary">
            Enter
          </Button>
        </form>
        <div>
          {this.state.data.map(number => (
            <ul key={number.id}>
              <DataCard
                user={number.username}
                topic={number.title}
                description={number.description}
              />
            </ul>
          ))}
        </div>
      </div>
    );
  }
}

FeaturePage.propTypes = {
  location: PropTypes.object,
};
// const dispatchToProps = dispatch => ({
//   fetch: bindActionCreators(fetch, dispatch),
// });
