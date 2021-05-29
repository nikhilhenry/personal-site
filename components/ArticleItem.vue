<template>
  <article class="article">
    <nuxt-link to="articles/test_article" class="wrapper">
      <img
        src="https://images.unsplash.com/photo-1621675110684-84f7d1914cdc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2148&q=80"
        class="cover-img"
      />
      <div class="content">
        <h2 class="title">Golden Gate Bridge</h2>
        <section class="stats">
          <span class="date">May 4, 2021</span>
          <span class="duration">
            <i class="far fa-clock"></i>
            <span>5 min read</span>
          </span>
          <nuxt-link to="#" class="series">#exploration</nuxt-link>
        </section>
        <p class="excerpt">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt...
        </p>
      </div>
    </nuxt-link>
  </article>
</template>

<style lang="scss" scoped>
.wrapper {
  text-decoration: none;
  color: inherit;
}

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

    .stats {
      margin: 1rem 0 1rem;
      color: rgba(97, 97, 97, 1);

      .duration {
        margin: 0 1rem 0;
      }
      .series {
        text-decoration: none;
        color: #3eb0ef;
      }
    }
  }
}
</style>
