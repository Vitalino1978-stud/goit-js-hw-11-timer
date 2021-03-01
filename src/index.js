import '../style.css'
const refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]')

}
// console.log(refs.days);

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;
  }
  getTimeComponents(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    return {days, hours, mins, secs}
 }
  init() {
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetDate - currentTime;
       
      const time = this.getTimeComponents(deltaTime);
    this.updateTimerFace(time)
    }, 1000)
  }

  updateTimerFace({ days, hours, mins, secs }) {
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;
  }
   
}

const timer1 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Apr 12, 2021'),
  });

// console.log(timer1);
timer1.init();