<template>
  <Navbar />
  <section
    id="weather-area"
    class="d-flex flex-column flex-md-row align-items-center justify-content-center"
  >
    <div class="weather mt-5 mt-md-0">
      <h4>Weather App</h4>
      <input
        type="text"
        placeholder="Location to search"
        class="location"
        v-model="location"
      />
      <button @click="getData">Check Weather</button>
    </div>

    <div
      class="weather-information mt-3 mt-md-0 ms-md-3 d-flex align-items-center justify-content-center"
    >
      <div v-if="weatherData">
        <small class="text-center d-block fw-bold">Weather Information</small>
        <span class="tag fw-bold rounded-5">Location</span>
        <h2 class="fw-bold text-center mt-1">
          {{ weatherData.location.name }}
        </h2>
        <span class="tag fw-bold rounded-5">Time</span>
        <h4 class="fw-bold text-center mt-1">
          {{ weatherData.location.localtime }}
        </h4>
        <span class="tag fw-bold rounded-5">Temperature</span>
        <h4 class="fw-bold text-center mt-1">
          {{ weatherData.current.temp_c + "°C" }}
        </h4>
        <span class="tag fw-bold rounded-5">Condition</span>
        <h4 class="fw-bold text-center mt-1">
          {{ weatherData.current.condition.text }}
        </h4>
        <span class="tag fw-bold rounded-5">Image</span>
        <h4 class="fw-bold text-center mt-1">
          <img :src="weatherData.current.condition.icon" alt="" />
        </h4>
      </div>
      <div v-else>
        <p class="fw-bold">No Weather Data Yet...</p>
        <img src="../../public/img/loading.gif" class="loading-img" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import { ref, watch } from "vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    Navbar,
  },
  setup() {
    let API_KEY = "267e2861260b4cd7ba4172707231105";
    const location = ref(null);
    const weatherData = ref(null);
    function getData() {
      if (location.value) {
        axios
          .post(
            `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location.value}`
          )
          .then((response) => response)
          .then((data) => {
            weatherData.value = data.data;
            console.log(data);
            console.log(weatherData.value);
          });
      }
    }

    // watch if user location changes
    watch(location.value, getData);

    return {
      location,
      weatherData,
      getData,
    };
  },
};
</script>

<style scoped>
#weather-area {
  min-height: 100vh;
}
.weather {
  padding: 20px;
  border-radius: 8px;
  box-shadow: 20px 20px 60px rgb(38, 38, 86);
  background-color: var(--navy);
  width: 300px;
}

.weather > h4 {
  text-align: center;
  color: var(--white);
}
.weather > .location {
  border: 1px solid var(--white);
  margin-top: 10px;
  width: 100%;
  outline: none;
  padding: 9px 12px;
  border-radius: 8px;
  background: linear-gradient(145deg, #f2f2f2, #f0f0f0);
}
.weather > button {
  margin-top: 10px;
  width: 100%;
  outline: none;
  padding: 9px 12px;
  border-radius: 8px;
  background: var(--yellow);
  font-weight: 700;
  color: var(--navy);
}
.weather > span {
  color: red;
}

.weather-information {
  padding: 20px;
  border-radius: 8px;
  box-shadow: 20px 20px 60px rgb(38, 38, 86);
  background-color: #fff;
  width: 300px;
  transition: 300ms ease-in;
}

.weather-information .tag {
  font-size: 10px;
  letter-spacing: 1px;
  background-color: var(--yellow);
  color: var(--navy);
  padding: 2px 5px;
}
.loading-img {
  width: 100%;
}
</style>
