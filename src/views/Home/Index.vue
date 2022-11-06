<template>
  <div >
    <div class="title">
      ДОБРО ПОЖАЛОВАТЬ НА НАШ ЗАМЕЧАТЕЛЬНЫЙ САЙТ!
      <br>
      кстати, если в макете в фигме выделить любую из иконок, и в instanse нажать Go to main component
      откроется макет полного сайта trivia в фигма, мне кажется вам это не нужно :/ 
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomePage',
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.title {
  width: 80%;
  margin: 80px auto;
  border: 4px solid $primary;
  padding: 16px;
  text-align: center;
  font-size: 24px;
}
</style>