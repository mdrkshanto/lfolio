<template>
  <div class="card card-dark bg-dark">
    <div class="card-header">
      <span class="card-title fw-bolder">Over View</span>
    </div>
    <div class="card-body">
      <table
        class="
          table table-sm table-dark table-striped table-bordered
          text-center
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
          <td>Name</td>
          <td>Title</td>
          <td>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            debitis impedit obcaecati quaerat laudantium dolores eum quia,
            corrupti maiores hic a eveniet molestiae maxime possimus
            praesentium, autem fugit porro pariatur.
          </td>
          <td>
            <div class="btn-group btn-group-sm border-0">
              <button class="btn btn-primary shadow-none">
                <i class="fas fa-edit"></i>
              </button>
              <button class="btn btn-danger shadow-none">
                <i class="fas fa-trash"></i>
              </button>
            </div>
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
