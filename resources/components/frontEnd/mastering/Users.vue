<template>
  <div class="container-fluid m-0 p-0">
    <Header />
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Header from "./includes/Header";
import Navbar from "./includes/Navbar";
import Footer from "./includes/Footer";
export default {
  components: { Header, Navbar, Footer },
};
</script>
<style>
.text-justify {
  text-align: justify;
}

::placeholder {
  text-transform: capitalize;
}
</style>
