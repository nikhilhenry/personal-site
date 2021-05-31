<template>
  <div class="result">
    <h2 class="title">{{ result.title }}</h2>
    <span class="data">{{ createdAt }}</span>
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
