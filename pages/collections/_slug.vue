<template>
  <div class="collections">
    <div class="hero" :style="{ backgroundImage: 'url(' + image + ')' }">
      <div class="wrapper">
        <h1 class="title">🧭 Exploration</h1>
        <p class="subtitle">Rabit holes of thought...</p>
      </div>
    </div>
    <div class="container">
      <!-- list of collections -->
      <div class="articles">
        <Collection />
        <Collection />
      </div>
    </div>
  </div>
</template>

<script>
import CollectionItem from '@/components/CollectionItem'

export default {
  components: {
    Collection: CollectionItem,
  },
  data() {
    return {
      image:
        'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    }
  },
}
</script>

<style lang="scss">
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: grey;
  background-blend-mode: darken;

  color: white;
  text-align: center;
  padding-top: 2em;
  height: 35vh;

  .title {
    margin-bottom: 0.5em;
    font-size: 3rem;
  }
  .subtitle {
    font-size: 1.5rem;
  }
}

.articles {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 3rem;
}
</style>
