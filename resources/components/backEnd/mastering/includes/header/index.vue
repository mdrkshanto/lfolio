<template>
  <nav class="main-header navbar navbar-expand navbar-dark justify-content-between">
    <ul class="navbar-nav">
      <li class="nav-item">
        <button class="btn nav-link" data-widget="pushmenu"><i class="fas fa-bars"></i
        ></button>
      </li>
      <li class="nav-item d-none d-md-inline-block">
        <router-link :to="{name:'dashboard'}" class="nav-link" :class="$route.name === 'dashboard' ? 'active' : ''">Home</router-link>
      </li>
    </ul>

    <ul class="navbar-nav">
      <li class="nav-item">
        <button class="btn nav-link">Logout</button>
      </li>
    </ul>
  </nav>
</template>
