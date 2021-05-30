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
        <Article
          v-for="(article, index) in articles"
          :key="index"
          :in-collection="true"
          :article="article"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ArticleItem from '@/components/ArticleItem'

export default {
  components: {
    Article: ArticleItem,
  },
  async asyncData({ $content, params, error }) {
    const path = `/${params.slug || 'index'}`
    const articles = await $content('articles')
      .where({ collection: path })
      .fetch()
      .catch(() => {
        return error({ statusCode: 404, message: 'Article not found' })
      })

    return {
      articles,
    }
  },
}
</script>

<style lang="scss" scoped>
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
