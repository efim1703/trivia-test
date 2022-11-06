<template>
  <div id="app">
    <app-header />
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'

export default {
  name: 'app',
  components: {
    AppHeader
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';

#app {
  background-color: #f1f1f1;
  height: 1000px;
}

</style>
