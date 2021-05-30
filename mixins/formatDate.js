export default {
  data() {
    return {
      createdAt: '',
    }
  },
  methods: {
    formateDate: function (date) {
      const formattedDate =
        date.toLocaleString('default', { month: 'short' }).toUpperCase() +
        ' ' +
        new Date(date).getDate() +
        ' ' +
        new Date(date).getFullYear()
      return formattedDate
    },
  },
  created() {
    // format scheduled_for
    const formattedDate = this.formateDate(
      new Date(this.objective.scheduled_for)
    )
    this.createdAt = formattedDate
  },
}
