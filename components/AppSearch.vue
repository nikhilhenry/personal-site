<template>
  <div class="app-search">
    <div class="card">
      <div class="text">
        <i class="fas fa-search"></i>
        <h2>Search articles from this blog</h2>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background-color: #fff;
  padding: 1rem 2rem 1rem;
  border-radius: 5px;

  .text {
    color: #9e9e9e;
    display: flex;
    align-items: center;
    i {
      font-size: 2rem;
      margin-right: 20px;
    }

    h2 {
      font-weight: 400 !important;
    }
  }
}
</style>
