<template>
  <div class="article">
    <div class="container">
      <img :src="article.coverImage" class="article-img" />
      <section class="info">
        <h1 class="title">{{ article.title }}</h1>
        <section class="stats">
          <span class="date">{{ createdAt }}</span>
          <span class="duration">
            <i class="far fa-clock"></i>
            <!-- @todo add read time -->
            <span>{{ article.readingTime }}</span>
          </span>
          <nuxt-link :to="'/collections/' + article.collection" class="series"
            >#{{ article.collection }}</nuxt-link
          >
        </section>
        <h3 class="sub-title">
          {{ article.description }}
        </h3>
      </section>
      <nuxt-content :document="article" class="content" />
    </div>
  </div>
</template>

<script>
import formatDate from '@/mixins/formatDate'

export default {
  mixins: [formatDate],
  async asyncData({ $content, app, params, error }) {
    const path = `/${params.slug || 'index'}`
    const article = await $content('articles', path)
      .where({})
      .fetch()
      .catch(() => {
        return error({ statusCode: 404, message: 'Article not found' })
      })

    return {
      article,
    }
  },
  data() {
    return { raw_createdAt: '' }
  },
  created() {
    this.raw_createdAt = this.article.createdAt
  },
  head() {
    return {
      title: this.article.title,
      titleTemplate: '%s - Nikhil Henry',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description,
        },
        {
          hid: 'image',
          name: 'og:image',
          property: 'og:image',
          content: this.article.coverImage,
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.article {
  margin: 3rem 0 3rem;
  .article-img {
    width: 100%;
    min-height: 350px;
    max-height: 580px;
    border-radius: 0.5em;
    object-fit: cover;
    margin-bottom: 1rem;
  }

  .info {
    border-bottom: 1px solid #dfe4e7;
    .title {
      font-size: 2.5em;
      margin: 1rem 0;
    }

    .stats {
      margin: 1.5rem 0 1.5rem;
      color: rgba(97, 97, 97, 1);
      font-size: 20px;

      .duration {
        margin: 0 1rem 0;
      }
      .series {
        text-decoration: none;
        color: #3eb0ef;
      }
    }
    .sub-title {
      color: #868383;
      font-weight: 400;
      margin-bottom: 2rem;
    }
  }

  .content {
    padding: 1rem 0 1rem;
  }
}
</style>
