// get elemenets 
const fiverr_form = document.getElementById('fiverr');
const counter = document.querySelector('.counter');
const alerm = document.getElementById('alerm');
const bar = document.getElementById('bar');
const perval = document.getElementById('perval');
const stop_alerm = document.getElementById('stop_alerm');


let count;

// submit fiverr form
fiverr_form.onsubmit = (e) => {
    e.preventDefault();

    clearInterval(count);
    
     // get form val
     const form_data = new FormData(e.target);
     const {date, time} = Object.fromEntries(form_data.entries());

     // start and end time
     let start_time = Date.now();
     let end_time = new Date(date + ' ' + time);

    count = setInterval(() => {
        futureTimeCountDown(date, time, counter, count, alerm);
        let per = counterPer(start_time, end_time);

        if(per > 0 && per < 30){
            bar.style.background = `red`;
        } else if (per >= 30 && per < 70){
            bar.style.background = `orange`;
        } else if (per >= 70 && per <= 100){
            bar.style.background = `green`;
        }else if (per == 0) {
            bar.style.display = 'none';
            perval.style.display = 'none';
        }

        per && (bar.style.display = 'block');
        bar.style.width = `${per}%`

        perval.innerHTML = `${per}%`
    }, 1000)

}

// stop alarm 
stop_alerm.onclick = (e) => {
    e.preventDefault();
    alerm.pause();
}