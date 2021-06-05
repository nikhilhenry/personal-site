<template>
  <div class="collections">
    <div class="hero">
      <h1 class="title">📝 Collections</h1>
      <p class="subtitle">Rabit holes of thought...</p>
    </div>
    <div class="container">
      <!-- list of collections -->
      <div class="collection-items">
        <Collection
          v-for="(collection, index) in collections"
          :key="index"
          :collection="collection"
        />
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
  async asyncData({ $content, params }) {
    const collections = await $content('collections').fetch()

    return { collections }
  },
  head: {
    title: 'Collections - Nikhil Henry',
  },
}
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #08aeea;
  background-image: linear-gradient(0deg, #08aeea 0%, #2af598 100%);

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

.collection-items {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 3rem;
}
</style>
