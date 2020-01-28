import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the diarycard state domain
 */

const selectDiarycardDomain = state => state.diarycard || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Diarycard
 */

const makeSelectDiarycard = () =>
  createSelector(
    selectDiarycardDomain,
    substate => substate,
  );

export default makeSelectDiarycard;
export { selectDiarycardDomain };
