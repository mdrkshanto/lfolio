<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-black sticky-top py-0">
    <router-link :to="{ name: 'home' }" class="navbar-brand"
      >Md Rezaul Karim Shanto</router-link
    >
    <button
      class="navbar-toggler shadow-none"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target=".mainMenu"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse mainMenu justify-content-end">
      <ul class="navbar-nav align-items-center">
        <li class="nav-item">
          <router-link :to="{name:'home'}" class="nav-link" :class="$route.name === 'home' ? 'active' : ''">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name:'about'}" class="nav-link" :class="$route.name === 'about' ? 'active' : ''">About</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name:'resume'}" class="nav-link" :class="$route.name === 'resume' ? 'active' : ''">Resume</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name:'skills'}" class="nav-link" :class="$route.name === 'skills' ? 'active' : ''">Skills</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name:'contact'}" class="nav-link"  :class="$route.name === 'contact' ? 'active' : ''">Contact</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<style scoped>
.img {
  height: 2rem;
  width: 5rem;
}
</style>
