/**
 *
 * Diaryhome
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectDiaryhome from './selectors';
import reducer from './reducer';
import saga from './saga';
import DiaryHome from '../../components/DiaryHome';

export function Diaryhome() {
  useInjectReducer({ key: 'diaryhome', reducer });
  useInjectSaga({ key: 'diaryhome', saga });

  return (
    <div>
      <DiaryHome />
    </div>
  );
}

Diaryhome.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  diaryhome: makeSelectDiaryhome(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Diaryhome);
