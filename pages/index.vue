<template>
  <div class="container">
    <section class="author-card">
      <div class="meta">
        <div class="avatar">
          <img src="../assets/avatar.png" />
        </div>
        <div class="info">
          <h2 class="name">Nikhil Henry</h2>
          <p class="summary">
            An IBDP student and tech enthusiast skilled at exploring new
            frameworks and applying skills of problem solving and leadership to
            craft meaningful user experiences.
          </p>
        </div>
      </div>
      <div class="articles">
        <Article />
        <Article />
      </div>
    </section>
  </div>
</template>

<script>
import ArticleItem from '@/components/ArticleItem'

export default {
  components: {
    Article: ArticleItem,
  },
}
</script>

<style lang="scss" scoped>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
  .avatar {
    height: 140px !important;
    width: auto;
    display: block !important;
    margin-right: 2rem;
    img {
      height: 100%;
      width: auto;
      border-radius: 35%;
      object-fit: cover;
    }
  }
  .name {
    padding-bottom: 1rem;
  }
  .summary {
    font-size: 1.1rem;
  }
}

.articles {
  margin-top: 7rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 3rem;
}
</style>
