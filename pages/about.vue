<template>
  <div class="container">
    <nuxt-content :document="page" class="content" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    const page = await $content('/about')
      .fetch()
      .catch(() => {
        return error({ statusCode: 404, message: 'Article not found' })
      })
    return { page }
  },
}
</script>

<style lang="scss" scoped>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.container {
  padding: 2rem 0 1rem !important;
}

::v-deep .nuxt-content {
  h1 {
    margin: 1rem 0 1rem;
    font-size: 3rem;
  }

  p {
    line-height: 24px;
    font-size: 20px;
    margin: 24px 0;
  }
}
</style>
