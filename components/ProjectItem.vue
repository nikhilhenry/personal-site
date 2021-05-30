<template>
  <article class="article">
    <img
      src="https://images.unsplash.com/photo-1504890096598-8377c02363d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2156&q=80"
      class="cover-img"
    />
    <div class="content">
      <div class="title-bar">
        <h2 class="title">Exploration</h2>
        <span class="date">May 4, 2021</span>
      </div>
      <div class="technologies">
        <ul class="stacks">
          <li class="stack vue">vue</li>
          <li class="stack firebase">firebase</li>
          <li class="stack go">go</li>
        </ul>
      </div>
      <div class="description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div class="btn-group">
        <a href="#" class="btn source"
          ><i class="fas fa-code-branch"></i> view source</a
        >
        <a href="#" class="btn build"
          ><i class="fas fa-terminal"></i> view build</a
        >
      </div>
    </div>
  </article>
</template>

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
        // background-color: #2a9d8f;
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
      i {
        margin-right: 0.5rem;
      }
    }
    // find a better color
    .source {
      background-color: #0077b6;
      margin-right: 15px;
    }
    .build {
      background-color: #4facfe;
    }
  }
}
</style>
