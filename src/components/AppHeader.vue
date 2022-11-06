<template>
  <div class="header">
    <div class="container">
        <div class="header-wrapper">
            <img 
              src="@/assets/images/logo.svg" 
              alt="trivia" 
              class="logo"
            >

            <nav class="navigation">
              <router-link 
                v-for="(item, index) in navigationLinks" 
                :to="item.routeName"
                :key="index"
              >
                {{ item.name }}
              </router-link>
            </nav>

            <div class="icons">
              <img src="@/assets/images/ic_serch.svg">
              <img src="@/assets/images/ic_alert.svg">
              <img src="@/assets/images/ic_favourites.svg">
              <img src="@/assets/images/ic_support.svg">
              <img src="@/assets/images/ic_settings.svg">
            </div>

            <img class="profile-icon" src="@/assets/images/ic_profile.svg">
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      navigationLinks: [
        { routeName: '/', name: 'Рабочий стол' },
        { routeName: '/company', name: 'Компании' },
        { routeName: '/users', name: 'Пользователи' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.header {
  background-color: $white;

  & a,
  & img {
    opacity: 1;

    &:hover,
    & img:hover {
      cursor: pointer;
      opacity: 0.6;
    }
  }
}

.header-wrapper {
  display: flex;
  align-items: center;
  padding: 34px 0px 14px;
  position: relative;
}

.navigation{
  display: flex;
  margin: 0 auto 0 62px;

  & a {
    cursor: pointer;
    margin-right: 20px;
  }
}

.icons {
  display: flex;

  & img{
    margin-right: 20px;
  }
}

@media screen and (max-width:1024px) {
  .navigation {
    flex-direction: column;
  }
}
@media screen and (max-width:768px) {
  .header-wrapper {
    padding-bottom: 38px;
  }
  .navigation {
    flex-direction: row;
  }
  .icons {
    position: absolute;
    bottom: 8px;
    right: -20px;
  }
}
@media screen and (max-width:425px) {
  .header-wrapper {
    padding-bottom: 80px;
  }
  .navigation {
    position: absolute;
    flex-direction: column;
    bottom: 8px;
    left: -60px;
  }
  .icons {
    flex-direction: column;
  }
  .profile-icon {
    margin: 0 auto;
  }
}
</style>