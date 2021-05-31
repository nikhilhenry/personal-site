<template>
  <div class="app-search">
    <div id="card">
      <div id="search-wrapper">
        <input
          class="input is-medium"
          type="text"
          placeholder="Type to search nikhilhenry.me"
        />
      </div>
      <div id="text">
        <i class="fas fa-search"></i>
        <h2>Search articles from this blog</h2>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~bulma';

#card {
  background-color: #fff;
  padding: 2rem;
  border-radius: 5px;
  width: 80vw;
  max-width: 800px;

  #text {
    color: #9e9e9e;
    display: flex;
    align-items: center;
    margin-top: 2rem;
    text-align: center !important;
    justify-content: center;
    i {
      font-size: 2rem;
      margin-right: 20px;
    }

    h2 {
      font-weight: 400 !important;
      font-size: 1.2rem;
    }
  }
}
</style>
