import getCatsImage from './modules/services';
import partitionSwitching from './modules/partition-switching';

document.addEventListener('DOMContentLoaded', () => {
  getCatsImage();
  partitionSwitching();
});
