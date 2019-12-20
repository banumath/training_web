import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the temp state domain
 */

const selectTempDomain = state => state.temp || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Temp
 */

const makeSelectTemp = () =>
  createSelector(
    selectTempDomain,
    substate => substate,
  );

export default makeSelectTemp;
export { selectTempDomain };
