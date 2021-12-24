<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <router-link :to="{ name: 'dashboard' }" class="brand-link">
      <img
        src="frontEnd/assets/img/me.webp"
        alt="AdminLTE Logo"
        class="brand-image img-circle elevation-3"
        style="opacity: 0.8"
      />
      <span class="brand-text font-weight-light">Shanto</span>
    </router-link>
    <div class="sidebar">
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img
            src="frontEnd/assets/img/me.webp"
            class="img-circle elevation-2"
            alt="User Image"
          />
        </div>
        <div class="info">
          <a href="#" class="d-block">Md Rezaul Karim Shanto</a>
        </div>
      </div>

      <div class="form-inline">
        <div class="input-group" data-widget="sidebar-search">
          <input
            class="form-control form-control-sidebar"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <div class="input-group-append">
            <button class="btn btn-sidebar">
              <i class="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div>
      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          data-accordion="false"
        >
          <!-- <li class="nav-item">
            <router-link
              :to="{ name: 'dashboard' }"
              class="nav-link"
              :class="$route.name === 'dashboard' ? 'active bg-secondary' : ''"
            >
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>Dashboard</p>
            </router-link>
          </li> -->
          <li class="nav-item">
            <router-link
              :to="{ name: 'adminHome' }"
              class="nav-link"
              :class="$route.name === 'adminHome' ? 'active bg-secondary' : ''"
            >
              <i class="fas fa-igloo"></i>
              <p>Home</p>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>
