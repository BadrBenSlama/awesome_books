import { DateTime } from './luxon.min.js';

const WhatsTheDate = () => {
  const newDateTime = `${DateTime.now().toLocaleString(DateTime.DATE_FULL)}, ${DateTime.now().toLocaleString(DateTime.TIME_24_WITH_SECONDS)}`;
  const time = document.getElementById('time_tag');
  time.textContent = newDateTime;
  setTimeout(() => {
    showTime();
  }, 500);
};

export default WhatsTheDate;