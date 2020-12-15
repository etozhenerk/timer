"use strict";

function countTimer() {
  const dayTime = document.querySelector("#daytime"),
    weekDay = document.querySelector("#weekday"),
    time = document.querySelector("#time"),
    newYear = document.querySelector("#newyear");

  function getTime() {
    let options = {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };

    let dateNewYaer = new Date("01 january 2021").getTime(),
      dateNow = new Date().getTime(),
      dayNow = new Date().getDay(),
      dayTime = new Date().toLocaleString("ru", options),
      hours = new Date().getHours(),
    daysRemaning = Math.floor((dateNewYaer - dateNow) / 1000 / 60 / 60 / 24);

    return { daysRemaning, dayNow, dayTime, hours };
  }
  function update() {
    let days = [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ];
    let timer = getTime();
    if(timer.daysRemaning > 0){
      newYear.textContent = timer.daysRemaning;
    }else {
      newYear.textContent = 0;
    }

    weekDay.textContent = days[timer.dayNow];
    time.textContent = timer.dayTime;
    if(timer.hours > 5 && timer.hours <= 11){
      dayTime.textContent = 'Доброе утро';
    }else if(timer.hours > 11 && timer.hours <= 17){
      dayTime.textContent = 'Добрый день';
    } else if(timer.hours > 17 && timer.hours < 24){
      dayTime.textContent = 'Добрый вечер';
    }else if(timer.hours >= 0 && timer.hours <= 5){
      dayTime.textContent = 'Доброй ночи';
    }
    console.log(timer.hours);
  }
  update();
}

setInterval(countTimer, 1000);
