<template>
  <div class="content-wrapper" :class="$route.name === 'admin' ? 'm-0' : ''">
    <section class="content-header" v-if="$route.name !== 'admin'">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>{{ $route.meta }}</h1>
          </div>
        </div>
      </div>
    </section>

    <section :class="$route.name !== 'admin' ? 'content' : 'container-fluid'">
      <router-view />
    </section>
  </div>
</template>
