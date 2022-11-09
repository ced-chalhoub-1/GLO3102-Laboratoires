<template>
  <div :key="data['ts']" v-for="day in data.data">
    <p>{{new Date(day.datetime).toLocaleDateString('en-us', this.options)}}</p>
    <p>Max Temperature: {{day.app_max_temp}}°</p>
    <p>Min Temperature: {{day.app_min_temp}}°</p>

  </div>
</template>

<script>
export default {
  name: "WeatherDiv",
  props: {
    data: Array
  },
  data() {
    return{
      options: {  weekday: 'long'}
    }
  }
}
</script>

<style scoped>

</style>