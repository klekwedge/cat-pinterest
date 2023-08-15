import getCatsImage from './modules/services';
import partitionSwitching from './modules/partition-switching';
import anim from './modules/anim';

document.addEventListener('DOMContentLoaded', () => {
  getCatsImage();
  partitionSwitching();
  anim();
});
