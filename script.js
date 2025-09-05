document.addEventListener("DOMContentLoaded", function () {
   // Задаем конечную дату и время для обратного отсчета
   const targetDate = new Date("2024-11-11T00:00:00");

   // Получаем элементы для дней, часов, минут и секунд
   const daysElement = document.querySelector(".fT-days");
   const daysElementEN = document.querySelector(".fT-daysEN");
   const hoursElement = document.querySelector(".clock-h");
   const minutesElement = document.querySelector(".clock-m");
   const secondsElement = document.querySelector(".clock-s");

   function updateCountdown() {
      const now = new Date();
      const timeRemaining = targetDate - now;

      // Если время истекло, останавливаем таймер
      if (timeRemaining <= 0) {
         daysElement.textContent = "0 дней";
         daysElementEN.textContent = "0 days";
         hoursElement.textContent = "00";
         minutesElement.textContent = "00";
         secondsElement.textContent = "00";
         clearInterval(countdownInterval);
         return;
      }

      // Вычисляем оставшиеся дни, часы, минуты и секунды
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
         (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
         (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      // Обновляем содержимое элементов
      dayRussianVariant = "дней";
      if (daysElement.classList.contains("lang-en")) {
         dayRussianVariant = `days`;
      } else if (days > 1) {
         dayRussianVariant = `дня`;
      }

      daysElement.textContent = `${days} ${dayRussianVariant}`;
      hoursElement.textContent = hours.toString().padStart(2, "0");
      minutesElement.textContent = minutes.toString().padStart(2, "0");
      secondsElement.textContent = seconds.toString().padStart(2, "0");
   }

   // Обновляем таймер каждую секунду
   // const countdownInterval = setInterval(updateCountdown, 1000);

   // Инициализируем таймер при загрузке
   // updateCountdown();

   // данные
   //    votesBase = {
   //     trump: {
   //         votes: 25,
   //         regeions: 0,
   //     },
   //     harris: {
   //         votes: 25,
   //         regeions: 0,
   //     }
   //    }

   // 18:30
   //
   // 22:00
   const data = {
      "13:30_05": {
         harrisVotes: 14,
         harrisRegions: 0,
         trumpVotes: 25,
         trumpRegions: 0,
      },
      "22:00_05": {
         harrisVotes: 16,
         trumpVotes: 36,
         harrisRegions: 0,
         trumpRegions: 0,
      },
      "23:30_05": {
         harrisVotes: 75,
         trumpVotes: 245,
         harrisRegions: 0,
         trumpRegions: 0,
      },
      "00:00_06": {
         harrisVotes: 141,
         trumpVotes: 353,
         harrisRegions: 0,
         trumpRegions: 0,
      },
      "03:30_06": {
         harrisVotes: 163,
         trumpVotes: 461,
         harrisRegions: 0,
         trumpRegions: 0,
      },

      "07:00_06": {
         harrisVotes: 167,
         trumpVotes: 499,
         harrisRegions: 0,
         trumpRegions: 0,
      },

      "08:00_06": {
         harrisVotes: 166,
         trumpVotes: 516,
         harrisRegions: 0,
         trumpRegions: 0,
      },

      "12:30_06": {
         harrisVotes: 176,
         trumpVotes: 660,
         harrisRegions: 0,
         trumpRegions: 0,
      },

      "16:00_06": {
         harrisVotes: 178,
         trumpVotes: 690,
         harrisRegions: 0,
         trumpRegions: 0,
      },

      "22:30_07": {
         harrisVotes: 193,
         trumpVotes: 935,
         harrisRegions: 0,
         trumpRegions: 0,
      },

      "13:00_01": {
         harrisVotes: 203,
         trumpVotes: 1004,
         harrisRegions: 0,
         trumpRegions: 0,
      },
   };
   const date = Object.keys(data).pop();
   const harrisVotes = data[date].harrisVotes;
   const trumpVotes = data[date].trumpVotes;
   const harrisRegions = data[date].harrisRegions;
   const trumpRegions = data[date].trumpRegions;

   const totalVotes = harrisVotes + trumpVotes;
   const harrisPercentage = ((harrisVotes / totalVotes) * 100).toFixed(0);
   const trumpPercentage = ((trumpVotes / totalVotes) * 100).toFixed(0);

   // Обновляем DOM
   document.getElementById("percentHarris").textContent = `${harrisPercentage}%`;
   document.getElementById("percentTrump").textContent = `${trumpPercentage}%`;
   document.getElementById("harrisBar").style.width = `${harrisPercentage}%`;
   document.getElementById("timeVote").textContent = `Данные за ${date[0]}${
      date[1]
   }:${date[3]}${date[4]}, ${date[7]}0 ноября (${harrisVotes + trumpVotes} чел)`;
   document.getElementById("countVotesHarris").textContent = harrisVotes;
   document.getElementById("countVotesTrump").textContent = trumpVotes;
   document.getElementById("countRegionsHarris").textContent = harrisRegions;
   document.getElementById("countRegionsTrump").textContent = trumpRegions;

   // Обновляем прогресс бар
   document.getElementById(
      "voteBarharris"
   ).style.width = `${harrisPercentage}%`;
});
