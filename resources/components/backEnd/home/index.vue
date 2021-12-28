<template>
  <div class="card">
    <div class="card-header">
      <span class="card-title fw-bolder">Over View</span>
    </div>
    <div class="card-body">
      <table
        class="
          table table-sm table-dark table-striped table-bordered
          text-center
          rounded
        "
      >
        <thead>
          <th>Background</th>
          <th>Name</th>
          <th>Focus Title</th>
          <th>Short Description</th>
          <th>Action</th>
        </thead>
        <tbody>
          <td>Img</td>
          <td>Md Rezaul Karim Shanto</td>
          <td>Full Stack Web Developer</td>
          <td>
            I am a fully professional full stack web developer Involving with
            latest web designing and technologies is a great feel free to
            contact creative.
          </td>
          <td>
            <a href="#" class="btn btn-sm btn-primary nav-link text-primary shadow-none">
              <i class="fas fa-edit"></i>
            </a>
          </td>
        </tbody>
      </table>
    </div>
    <div class="card-footer">Footer</div>
  </div>
</template>
<style scoped>
th,
.btn-group {
  white-space: nowrap;
}
th,
td {
  vertical-align: middle !important;
}
</style>
