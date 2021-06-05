<template>
  <div class="app-search">
    <div id="card">
      <div id="search-wrapper">
        <div class="control is-medium" :class="{ 'is-loading': searching }">
          <input
            v-model="searchQuery"
            class="input is-medium"
            type="text"
            placeholder="Type to search nikhilhenry.me"
          />
        </div>
      </div>
      <ul v-if="results.length" class="results">
        <li v-for="(result, index) in results" :key="index">
          <ResultItem :result="result" />
        </li>
      </ul>
      <div v-else id="text">
        <i class="fas fa-search"></i>
        <h2 v-if="noResults">No posts found</h2>
        <h2 v-else>Search articles from this blog</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppSearch',
  data() {
    return {
      searchQuery: '',
      searching: false,
      results: [],
      noResults: false,
    }
  },
  watch: {
    async searchQuery(q) {
      if (!q) {
        this.searching = false
        this.results = []
        return
      }
      this.searching = true
      this.results = await this.$content('articles')
        .sortBy('position', 'asc')
        .only(['title', 'slug', 'createdAt', 'to'])
        .limit(12)
        .search(q)
        .fetch()
      this.searching = false
      if (!this.results.length) this.noResults = true
      else this.noResults = false
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~bulma';

#card {
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  width: 80vw;
  max-width: 800px;

  .results {
    margin-top: 2rem;
  }

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
