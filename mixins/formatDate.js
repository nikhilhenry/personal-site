export default {
  data() {
    return {
      createdAt: '',
    }
  },
  methods: {
    formatDate: (date) => {
      const formattedDate =
        date.toLocaleString('default', { month: 'short' }) +
        ' ' +
        new Date(date).getDate() +
        ' ' +
        new Date(date).getFullYear()
      return formattedDate
    },
  },
  mounted() {
    // format scheduled_for
    const formattedDate = this.formatDate(new Date(this.raw_createdAt))
    this.createdAt = formattedDate
  },
}
