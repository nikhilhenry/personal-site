<template>
  <article class="article">
    <img
      src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      class="cover-img"
    />
    <div class="content">
      <h2 class="title">Exploration</h2>
      <section class="stats">
        <span class="date">May 4, 2021</span>
        <span class="count">
          <i class="fas fa-book"></i>
          <span>6 Articles</span>
        </span>
        <nuxt-link to="collections/exploration" class="link"
          >learn more</nuxt-link
        >
      </section>
      <p class="excerpt">
        An expedition into a world without limits, a world without bounds. An
        expedition into a world without limits, a world without bounds.
      </p>
    </div>
  </article>
</template>

<style lang="scss" scoped>
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
    padding: 1.5rem 0 2rem;

    .title {
      font-size: 1.8rem;
    }

    .excerpt {
      text-align: justify;
    }

    .stats {
      margin: 1rem 0 1rem;
      color: rgba(97, 97, 97, 1);
      display: flex;
      align-items: center;

      .count {
        margin: 0 1rem 0;
      }
      .series {
        text-decoration: none;
        color: #3eb0ef;
      }

      .link {
        margin-left: auto;
        text-decoration: none;
        text-transform: capitalize;
        color: white;
        background-color: #08aeea;
        border: 1px solid #08aeea;
        padding: 0.4rem 0.9rem 0.4rem;
        border-radius: 5px;
        transition: all ease-out 0.2s;

        &:hover {
          background: transparent;
          color: #08aeea;
        }
      }
    }
  }
}
</style>
