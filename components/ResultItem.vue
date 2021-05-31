<template>
  <div class="result">
    <h2 class="title">{{ result.title }}</h2>
    <span class="date">{{ createdAt }}</span>
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
