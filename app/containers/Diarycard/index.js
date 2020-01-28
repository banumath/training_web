/**
 *
 * Diarycard
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import PropTypes from 'prop-types';
import makeSelectDiarycard from './selectors';
import reducer from './reducer';
import saga from './saga';
import DiaryCard from '../../components/DiaryCard';

export function Diarycard() {
  useInjectReducer({ key: 'diarycard', reducer });
  useInjectSaga({ key: 'diarycard', saga });

  return (
    <div>
      <DiaryCard
        title="title"
        subtitle="feaefwa"
        description="i am good gcbsckdskjcnsjdkjckjcjdakjcbjkabjcka abcjabckacbicbkcb bbbckja ckjdncsjc dghsjaaaaaa
        fghjkbbbbb"
        backgroundColor="#f00"
      />
    </div>
  );
}

Diarycard.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  diarycard: makeSelectDiarycard(),
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

export default compose(withConnect)(Diarycard);
