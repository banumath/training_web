/**
 *
 * Asynchronously loads the component for Diarycard
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
