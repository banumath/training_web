import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the diaryhome state domain
 */

const selectDiaryhomeDomain = state => state.diaryhome || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Diaryhome
 */

const makeSelectDiaryhome = () =>
  createSelector(
    selectDiaryhomeDomain,
    substate => substate,
  );

export default makeSelectDiaryhome;
export { selectDiaryhomeDomain };
