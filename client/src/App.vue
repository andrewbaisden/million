<template>
  <div>
    <Weather :weather="datas"/>
  </div>
</template>

<script>
import axios from "axios";
import Weather from "./components/Weather.vue";

export default {
  components: {
    Weather
  },
  data: function() {
    return {
      datas: ""
    };
  },
  mounted() {
    this.getAPI();
  },
  methods: {
    async getAPI() {
      try {
        const API = "http://localhost:5000/weather";
        const response = await axios.get(API);
        console.log("Response", response);
        console.log("Data", response.data);
        this.datas = response.data.list;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Nunito:400,700");
:root {
  --primary-colour: #343436; /* Example CSS Variable */
}
html {
  font-size: 62.5%; /* font-size 1em = 10px on default browser settings */
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-size: 1.6rem;
  background: #502544;
  display: grid;
  justify-content: center;
  font-family: "Nunito", sans-serif;
}
</style>
