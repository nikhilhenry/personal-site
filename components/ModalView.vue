<template>
  <div class="modal is-clipped" :class="{ 'is-active': isActive }">
    <div class="modal-background" @click="setModalStatus"></div>
    <div class="modal-content">
      <slot></slot>
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      @click="setModalStatus"
    ></button>
  </div>
</template>

<script>
export default {
  name: 'ModalView',
  data() {
    return {
      isActive: true,
    }
  },
  methods: {
    setModalStatus() {
      this.isActive = !this.isActive
      this.$emit('status', this.isActive)
      //  send back if not active
      if (!this.isActive) this.$router.go(-1)
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'bulma';

.modal-content {
  overflow: visible;
}

.modal-background {
  background-color: rgba(10, 10, 10, 0.4);
}

@media only screen and (min-width: 1024px) {
  .modal-content {
    width: auto;
  }
}
</style>
