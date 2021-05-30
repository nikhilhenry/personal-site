<template>
  <article class="article">
    <nuxt-link :to="'/articles/' + article.slug">
      <img :src="article.coverImage" class="cover-img" />
    </nuxt-link>
    <div class="content">
      <nuxt-link to="/articles/test-article">
        <h2 class="title">{{ article.title }}</h2>
      </nuxt-link>
      <section class="stats">
        <span class="date">{{ article.createdAt }}</span>
        <span class="duration">
          <i class="far fa-clock"></i>
          <!-- @todo add read time -->
          <span>5 min read</span>
        </span>
        <nuxt-link
          v-if="!inCollection"
          :to="'/collections/' + article.collection"
          class="series"
          >#exploration</nuxt-link
        >
      </section>
      <p class="excerpt">
        {{ article.description }}
      </p>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    inCollection: Boolean,
    article: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  text-decoration: none;
  color: inherit;
}

.article {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #dfe4e7;
  margin-top: 0;

  .cover-img {
    max-height: 280px;
    width: 100%;
    border-radius: 0.5em;
    object-fit: cover;
  }

  .content {
    padding: 1.5rem 0 2rem;

    .title {
      font-size: 1.8rem;
    }

    .stats {
      margin: 1rem 0 1rem;
      color: rgba(97, 97, 97, 1);

      .duration {
        margin: 0 1rem 0;
      }
      .series {
        text-decoration: none;
        color: #3eb0ef;
      }
    }
  }
}
</style>
