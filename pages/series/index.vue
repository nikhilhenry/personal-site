<template>
  <div class="series">
    <div class="hero">
      <div class="wrapper">
        <h1 class="title">📝 Series</h1>
        <p class="subtitle">Rabit holes of thought...</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  // background-color: #8ec5fc;
  // background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
  // background: linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%);
  background-color: #08aeea;
  background-image: linear-gradient(0deg, #08aeea 0%, #2af598 100%);

  color: white;
  text-align: center;
  padding-top: 2em;
  height: 35vh;

  .title {
    margin-bottom: 0.5em;
    font-size: 3rem;
  }
  .subtitle {
    font-size: 1.5rem;
  }
}
</style>
