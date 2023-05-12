<template>
  <Navbar />
  <section
    id="weather-area"
    class="d-flex align-items-center justify-content-center"
  >
    <div class="weather">
      <h4>Weather App</h4>

      <input
        type="text"
        placeholder="Location to search"
        class="location"
        v-model="location"
      />
      <button @click="getData">Check Weather</button>
      <span></span>
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
    let location = ref(null);
    let storage = ref({ data: [] });
    console.log("The fucking data: ", storage.value);

    function getData() {
      if (location.value) {
        axios
          .post(
            `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location.value}`
          )
          .then((response) => {
            storage.value = response.data;
            // console.log(response.data)
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        console.log("Fuck Ya");
      }
    }

    // watch if user location changes
    watch(location.value, getData);

    return {
      location,
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
  background: linear-gradient(145deg, var(--navy), var(--navy));
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
</style>
