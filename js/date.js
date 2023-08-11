const timeDate = document.querySelector('#time');
const displayDateTime = () => {
  setInterval(() => {
    const currentDate = DateTime.utc().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
    timeDate.innerHTML = currentDate;
  }, 1000);
};