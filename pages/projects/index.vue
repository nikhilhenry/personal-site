<template>
  <div class="projects">
    <div class="hero">
      <h1 class="title">🛠️ Projects</h1>
      <p class="subtitle">What I've been working on</p>
    </div>
    <div class="container">
      <div class="project-items">
        <Project
          v-for="(project, index) in projects"
          :key="index"
          :project="project"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectItem from '@/components/ProjectItem'
export default {
  components: {
    Project: ProjectItem,
  },
  async asyncData({ $content, params }) {
    const projects = await $content('projects').fetch()

    return { projects }
  },
  head: {
    title: 'Projects - Nikhil Henry',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Builds and concepts by Nikhil Henry.',
      },
    ],
  },
}
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding-top: 2em;
  height: 35vh;

  background-image: linear-gradient(to top, #4facfe 0%, #00f2fe 100%);

  .title {
    margin-bottom: 0.5em;
    font-size: 3rem;
  }
  .subtitle {
    font-size: 1.5rem;
  }
}

.project-items {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 3rem;
}
</style>
