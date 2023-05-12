<template>
  <nav class="navbar navbar-expand-lg p-4 fixed-top">
    <div class="container">
      <h3 class="navbar-brand fs-3 fw-bold text-white">
        <i class="bi bi-cloud-lightning-rain"></i> Weather App
      </h3>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
.navbar {
  background-color: transparent !important;
}
</style>
