<template>
  <div class="wrapper">
    <Header v-if="$route.name !== 'admin'" />
    <MainMenu v-if="$route.name !== 'admin'" />
    <MainContents class="bg-dark" />
  </div>
</template>
<script>
import Header from "./includes/header/index";
import MainMenu from "./includes/mainMenu/index";
import MainContents from "./includes/mainContents/index";
export default {
  components: { Header, MainMenu, MainContents },
};
</script>
<style>
@import "../../../../public/backEnd/assets/dist/css/adminlte.min.css";
</style>
