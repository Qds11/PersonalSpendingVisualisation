<template>

    <div class="shadow-box p-5 m-5" >
      <BarChart  />
    </div>
 
</template>

<script>
  // @ is an alias to /src
  import BarChart from '@/components/BarChart.vue'

  export default {
    name: 'Index',
    components: {
      BarChart
    }
  }
</script>
<style scoped>

  .shadow-box {
    box-shadow: 5px 5px 6px 7px #ccc;
  }
</style>