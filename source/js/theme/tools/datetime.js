/* 
 * hexo theme meow
 * datetime scripts
 */

const initDatetime = () => {
  const calcDate = (dateString) => {
    const now = new Date();
    const target_date = new Date(dateString);
    const period = now.getTime() - target_date.getTime();
    const year = 1000 * 60 * 60 * 24 * 365;

    const period_year = period / year
    const result_year = Math.floor(period_year);
    const period_month = (period_year - result_year) * 12
    const result_month = Math.floor(period_month);
    const period_day = (period_month - result_month) * 30
    const result_day = Math.floor(period_day);

    return {
      year: result_year,
      month: result_month,
      day: result_day
    };
  };

  const showRuntime = () => {
    const runtime_span = document.getElementById("runtime");
    if (runtime_span) {
      const startdate = runtime_span.getAttribute("data-startdate");
      let runtime_string = runtime_span.textContent;
      let result_date = calcDate(startdate);

      const regex = /\.([\u4e00-\u9fa5]+|\s?\w+)/g;
      if (result_date.year > 0) {
        const year_string = runtime_string.match(regex)[0];
        const year = year_string.replace(".", result_date.year);
        runtime_string = runtime_string.replace(year_string, year);
      } else {
        runtime_string = runtime_string.replace(runtime_string.match(regex)[0], "");
      }

      if (result_date.month > 0) {
        const month_string = runtime_string.match(regex)[0];
        const month = month_string.replace(".", result_date.month);
        runtime_string = runtime_string.replace(month_string, month);
      } else {
        runtime_string = runtime_string.replace(runtime_string.match(regex)[0], "");
      }

      if (result_date.day > 0) {
        const day_string = runtime_string.match(regex)[0];
        const day = day_string.replace(".", result_date.day);
        runtime_string = runtime_string.replace(day_string, day);
      } else if (result_date.year == 0 && result_date.month == 0) {
        const day_string = runtime_string.match(regex)[0];
        const day = day_string.replace(".", "1");
        runtime_string = runtime_string.replace(day_string, day);
      } else {
        runtime_string = runtime_string.replace(runtime_string.match(regex)[0], "");
      }

      runtime_span.textContent = runtime_string;
    }
  };

  showRuntime();
};

export default initDatetime;