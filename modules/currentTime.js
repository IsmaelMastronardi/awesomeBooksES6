// eslint-disable-next-line import/no-extraneous-dependencies
import DateTime from '../luxon/src/datetime.js';

const dateP = document.querySelector('#dateP');
setInterval(() => {
  const dt = DateTime.now();
  const dateString = dt.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  dateP.textContent = dateString;
}, 1000);
export default setInterval;
