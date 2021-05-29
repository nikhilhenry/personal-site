<template>
  <div class="article">
    <div class="container">
      <img
        src="https://images.unsplash.com/photo-1621675110684-84f7d1914cdc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2148&q=80"
        class="article-img"
      />
      <section class="info">
        <h1 class="title">Golden Gate Bridge</h1>
        <section class="stats">
          <span class="date">May 4, 2021</span>
          <span class="duration">
            <i class="far fa-clock"></i>
            <span>5 min read</span>
          </span>
          <nuxt-link to="#" class="series">#exploration</nuxt-link>
        </section>
        <h3 class="sub-title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </h3>
      </section>
      <section class="content">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?
      </section>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.article {
  margin: 3rem 0 3rem;
  .article-img {
    width: 100%;
    min-height: 350px;
    max-height: 580px;
    border-radius: 0.5em;
    object-fit: cover;
    margin-bottom: 1rem;
  }

  .info {
    border-bottom: 1px solid #dfe4e7;
    .title {
      font-size: 2.5em;
      margin-bottom: 1rem;
    }

    .stats {
      margin: 1rem 0 1.5rem;
      color: rgba(97, 97, 97, 1);
      font-size: 20px;

      .duration {
        margin: 0 1rem 0;
      }
      .series {
        text-decoration: none;
        color: #3eb0ef;
      }
    }
    .sub-title {
      color: #868383;
      font-weight: 400;
      margin-bottom: 2rem;
    }
  }

  .content {
    padding: 2rem 0 1rem;
  }
}
</style>
