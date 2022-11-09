<template>
  <div id="container">
    <nav id="header">
      <Entete :data="data"/>
      <div v-if="data.length === 0">Loading...</div>
    </nav>
    <WeatherDiv :data="data"/>
  </div>


</template>
<script>
import Entete from "./components/Entete.vue";
import api from "@/services/api";
import WeatherDiv from "./components/WeatherDiv.vue";

export default {
  name: "App",
  components:{
    WeatherDiv,
    Entete,
  },
  data(){
    return {
      data: [],
      location: {
        latitude: "",
        longitude:""
      }
    };
  },
  created() {
    this.getLocation();
  },
  methods: {
    success(position) {
      this.location.latitude = position.coords.latitude;
      this.location.longitude = position.coords.longitude;

      api.getWeatherForecast(this.location).then((data) => {
        Object.freeze(this.data = data);
      })
    },
    error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    },
    getLocation() {
        const options = {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        };
        const geolocation = navigator.geolocation;
        geolocation.getCurrentPosition(this.success, this.error, options);
    },
  }
}
</script>
<style scoped>
#container{

}
</style>