<template>
  <div>
    <div v-if="!dayTemp" class="loading">
      <p>Loading weather data...</p>
    </div>
    <div v-else class="container">
      <div class="weather day1">
        <ul>
          <li>
            <p>{{dayOneDate}}</p>
          </li>
          <li>
            <p>{{dayTemp[0].weather[0].description}}</p>
          </li>
          <li>
            <img :src="dayOneImg" :alt="dayTemp[0].weather[0].description">
          </li>
          <li>
            <h1>{{dayOneTemp}}&#x2103;</h1>
          </li>
          <li>
            <h2>{{dayTemp[0].main.humidity}}%</h2>
          </li>
          <li>
            <h2>{{dayTemp[0].wind.speed}}mph</h2>
          </li>
        </ul>
      </div>
      <div class="weather day2">
        <ul>
          <li>
            <p>{{dayTwoDate}}</p>
          </li>
          <li>
            <p>{{dayTemp[8].weather[0].description}}</p>
          </li>
          <li>
            <img :src="dayTwoImg" :alt="dayTemp[1].weather[0].description">
          </li>
          <li>
            <h1>{{dayTwoTemp}}&#x2103;</h1>
          </li>
          <li>
            <h2>{{dayTemp[8].main.humidity}}%</h2>
          </li>
          <li>
            <h2>{{dayTemp[8].wind.speed}}mph</h2>
          </li>
        </ul>
      </div>
      <div class="weather day3">
        <ul>
          <li>
            <p>{{dayThreeDate}}</p>
          </li>
          <li>
            <p>{{dayTemp[16].weather[0].description}}</p>
          </li>
          <li>
            <img :src="dayThreeImg" :alt="dayTemp[2].weather[0].description">
          </li>
          <li>
            <h1>{{dayThreeTemp}}&#x2103;</h1>
          </li>
          <li>
            <h2>{{dayTemp[16].main.humidity}}%</h2>
          </li>
          <li>
            <h2>{{dayTemp[16].wind.speed}}mph</h2>
          </li>
        </ul>
      </div>
      <div class="weather day4">
        <ul>
          <li>
            <p>{{dayFourDate}}</p>
          </li>
          <li>
            <p>{{dayTemp[24].weather[0].description}}</p>
          </li>
          <li>
            <img :src="dayFourImg" :alt="dayTemp[3].weather[0].description">
          </li>
          <li>
            <h1>{{dayFourTemp}}&#x2103;</h1>
          </li>
          <li>
            <h2>{{dayTemp[24].main.humidity}}%</h2>
          </li>
          <li>
            <h2>{{dayTemp[24].wind.speed}}mph</h2>
          </li>
        </ul>
      </div>
      <div class="weather day5">
        <ul>
          <li>
            <p>{{dayFiveDate}}&#x2103;</p>
          </li>
          <li>
            <p>{{dayTemp[32].weather[0].description}}</p>
          </li>
          <li>
            <img :src="dayFiveImg" :alt="dayTemp[4].weather[0].description">
          </li>
          <li>
            <h1>{{dayFiveTemp}}</h1>
          </li>
          <li>
            <h2>{{dayTemp[32].main.humidity}}%</h2>
          </li>
          <li>
            <h2>{{dayTemp[32].wind.speed}}mph</h2>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { format } from "date-fns";
import clearSky from "@/assets/clear-sky.png";
import lightSnow from "@/assets/snow.png";
import cloudy from "@/assets/cloudy.png";

export default {
  data: function() {
    return {
      dayTemp: this.weather,
      dayOneDate: "",
      dayTwoDate: "",
      dayThreeDate: "",
      dayFourDate: "",
      dayFiveDate: "",
      dayOneTemp: "",
      dayTwoTemp: "",
      dayThreeTemp: "",
      dayFourTemp: "",
      dayFiveTemp: "",
      dayOneImg: "",
      dayTwoImg: "",
      dayThreeImg: "",
      dayFourImg: "",
      dayFiveImg: ""
    };
  },
  mounted() {},
  methods: {
    calcData() {
      if (!this.dayTemp) {
        console.log("Data is loading...");
      } else {
        // Weather Date data
        const dates = {
          dayOne: this.dayTemp[0].dt_txt,
          dayTwo: this.dayTemp[8].dt_txt,
          dayThree: this.dayTemp[16].dt_txt,
          dayFour: this.dayTemp[24].dt_txt,
          dayFive: this.dayTemp[32].dt_txt
        };

        // Convert time and date use dateFNS
        const convertTime = time => {
          const formatTime = format(time, "dddd Mo MMM HH:mm");
          return formatTime;
        };
        // Variables holding function for calculated time
        const dayOneTime = convertTime(dates.dayOne);
        const dayTwoTime = convertTime(dates.dayTwo);
        const dayThreeTime = convertTime(dates.dayThree);
        const dayFourTime = convertTime(dates.dayFour);
        const dayFiveTime = convertTime(dates.dayFive);

        // Weather time state data assigned from variables
        this.dayOneDate = dayOneTime;
        this.dayTwoDate = dayTwoTime;
        this.dayThreeDate = dayThreeTime;
        this.dayFourDate = dayFourTime;
        this.dayFiveDate = dayFiveTime;

        // Weather Temperature data
        const temps = {
          dayOne: this.dayTemp[0].main.temp,
          dayTwo: this.dayTemp[8].main.temp,
          dayThree: this.dayTemp[16].main.temp,
          dayFour: this.dayTemp[24].main.temp,
          dayFive: this.dayTemp[32].main.temp
        };

        const celcius = 273.15;

        // Convert temperatures
        const convertTemp = temps => {
          const dayTemp = parseFloat(temps) - celcius;
          const dayTempFixed = dayTemp.toFixed(2);
          return dayTempFixed;
        };

        // Variables holding function for calculated temperatures
        const dayOneTemp = convertTemp(temps.dayOne);
        const dayTwoTemp = convertTemp(temps.dayTwo);
        const dayThreeTemp = convertTemp(temps.dayThree);
        const dayFourTemp = convertTemp(temps.dayFour);
        const dayFiveTemp = convertTemp(temps.dayFive);

        // Weather temperature state data assigned from variables
        this.dayOneTemp = dayOneTemp;
        this.dayTwoTemp = dayTwoTemp;
        this.dayThreeTemp = dayThreeTemp;
        this.dayFourTemp = dayFourTemp;
        this.dayFiveTemp = dayFiveTemp;

        // Weather Temperature description data
        const description = {
          dayOne: this.dayTemp[0].weather[0].description,
          dayTwo: this.dayTemp[8].weather[0].description,
          dayThree: this.dayTemp[16].weather[0].description,
          dayFour: this.dayTemp[24].weather[0].description,
          dayFive: this.dayTemp[32].weather[0].description
        };

        // Calculate image type
        const calcWeatherImg = description => {
          if (description === "clear sky") {
            const img = clearSky;
            return img;
          } else if (description === "light snow") {
            const img = lightSnow;
            return img;
          } else if (
            description === "few clouds" ||
            description === "broken clouds"
          ) {
            const img = cloudy;
            return img;
          }
        };
        // Variables holding function for calculated images
        const dayOneImg = calcWeatherImg(description.dayOne);
        const dayTwoImg = calcWeatherImg(description.dayTwo);
        const dayThreeImg = calcWeatherImg(description.dayThree);
        const dayFourImg = calcWeatherImg(description.dayFour);
        const dayFiveImg = calcWeatherImg(description.dayFive);

        // Weather image state data assigned from variables
        this.dayOneImg = dayOneImg;
        this.dayTwoImg = dayTwoImg;
        this.dayThreeImg = dayThreeImg;
        this.dayFourImg = dayFourImg;
        this.dayFiveImg = dayFiveImg;
      }
    }
  },
  props: ["weather"],
  watch: {
    weather: function(newVal, oldVal) {
      if (newVal) this.dayTemp = newVal;
      this.calcData();
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 4rem;
}
.loading {
  p {
    color: #ffffff;
    font-size: 2rem;
  }
}
.weather {
  margin-bottom: 2rem;
  background: #ffffff;
  border-radius: 1rem;
  -webkit-box-shadow: 0px 0px 19px 0px rgba(71, 71, 71, 1);
  -moz-box-shadow: 0px 0px 19px 0px rgba(71, 71, 71, 1);
  box-shadow: 0px 0px 19px 0px rgba(71, 71, 71, 1);

  ul {
    list-style: none;
    padding: 2rem;
    text-align: center;
  }
}
@media (min-width: 1281px) {
  //CSS
  .container {
    margin-top: 5rem;
    max-width: 120rem; // 1200px
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 4rem;
  }
}
</style>

