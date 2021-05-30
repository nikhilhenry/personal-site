<template>
  <article class="article">
    <img :src="project.cover_image" class="cover-img" />
    <div class="content">
      <div class="title-bar">
        <h2 class="title">{{ project.title }}</h2>
        <span class="date">{{ createdAt }}</span>
      </div>
      <div class="technologies">
        <ul class="stacks">
          <li
            v-for="(stack, index) in project.stacks"
            :key="index"
            class="stack"
          >
            {{ stack }}
          </li>
        </ul>
      </div>
      <div class="description">
        <p>
          {{ project.description }}
        </p>
      </div>
      <div class="btn-group">
        <a :href="project.source_link" target="_blank" class="btn source"
          ><i class="fas fa-code-branch"></i> view source</a
        >
        <a :href="project.live_link" target="_blank" class="btn build"
          ><i class="fas fa-terminal"></i> view build</a
        >
      </div>
    </div>
  </article>
</template>

<script>
import formatDate from '../mixins/formatDate'

export default {
  mixins: [formatDate],
  props: {
    project: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return { raw_createdAt: '' }
  },
  created() {
    this.raw_createdAt = this.project.createdAt
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/styling/stackColors.scss';

.article {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #dfe4e7;
  cursor: pointer;

  .cover-img {
    max-height: 280px;
    width: 100%;
    border-radius: 0.5em;
    object-fit: cover;
  }

  .content {
    padding: 1.5rem 0 1rem;

    .title {
      font-size: 1.8rem;
    }

    .date {
      color: #616161;
    }
  }

  .technologies {
    margin: 1rem 0 1.5rem;
    .stacks {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      max-width: 100%;
      .stack {
        margin-right: 0.5rem;
        padding: 0.4rem 0.8rem 0.4rem;
        background-color: #cbb2fe;
        color: #fff;
        border-radius: 5px;
        text-transform: capitalize;
      }
    }
  }

  .btn-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;

    .btn {
      padding: 1rem 1.5rem 1rem;
      text-transform: uppercase;
      color: white;
      border-radius: 5px;
      font-size: 16px;
      width: 95%;
      text-align: center;
      font-weight: bold;
      transition: all ease-out 0.2s;
      i {
        margin-right: 0.5rem;
      }
    }
    // find a better color
    .source {
      background-color: #4facfe;
      border: 1px solid #4facfe;
      margin-right: 15px;
      &:hover {
        color: #4facfe;
        background-color: transparent;
      }
    }
    .build {
      background-color: #8187dc;
      border: 1px solid #8187dc;
      &:hover {
        color: #8187dc;
        background-color: transparent;
      }
    }
  }
}
</style>
