/**
 * Time counter
 */

const futureTimeCountDown = (date, time, counter, interval = null, alerm = null) => {
   
    // get timestamps
    let start_time = Date.now();
    let end_time = new Date(date + ' ' + time);
    let order_time = Math.floor(Math.abs(end_time.getTime() - start_time));

    // get val form time
    let total_sec = Math.floor(order_time / 1000);
    let total_min = Math.floor(total_sec / 60);
    let total_hour = Math.floor(total_min / 60);
    let total_day = Math.floor(total_hour / 24);

    let hours = total_hour - (total_day * 24);
    let min = total_min - (total_day * 24 * 60) - (hours * 60);
    let sec = total_sec - (total_day * 24 * 60 * 60) - (hours * 60 * 60) - (min * 60);

    if (total_sec <= 0) {
        alerm.play();
        clearInterval(interval);
    }

    counter.innerHTML = `<h3>${total_day} Days : ${hours} Hours : ${min} Min : ${sec} Sec</h3>`;
}

/**
 * counter per
 */

const counterPer = (start_time, end_time) => {
    let time_deff = start_time - end_time;
    let time_change = end_time - Date.now();

    return Math.floor(Math.abs((100 * time_change) / time_deff));
}