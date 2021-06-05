<template>
  <div v-if="result" class="result">
    <NuxtLink :to="result.path">
      <h2 class="title">{{ result.title }}</h2>
      <span class="date">{{ createdAt }}</span>
    </NuxtLink>
  </div>
</template>

<script>
import formatDate from '../mixins/formatDate'
export default {
  name: 'ResultItem',
  mixins: [formatDate],
  props: {
    result: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return { raw_createdAt: '' }
  },
  created() {
    this.raw_createdAt = this.result.createdAt
  },
}
</script>

<style lang="scss" scoped>
.result {
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 5px;
  margin-top: 1rem;
  &:hover {
    box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000,
      0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }

  .title {
    color: #424242;
    font-size: 20px;
    margin-bottom: 0.5rem;
  }

  .date {
    color: #616161;
  }
}
</style>
