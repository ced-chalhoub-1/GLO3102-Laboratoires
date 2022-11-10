<template>
  <h1>{{data['city_name']}}, {{data['country_code']}}</h1>
</template>

<script>
export default {
  name: "Entete",
  props: {
    data: Array
  }
}

</script>

<style scoped>

</style>