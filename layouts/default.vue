<template>
  <div>
    <!-- navbar -->
    <div class="navbar">
      <div class="container">
        <header class="navbar-header">
          <div class="title">Nikhil Henry</div>
          <div class="icon">
            <i class="fas fa-search"></i>
          </div>
        </header>
        <ul class="nav-items">
          <div class="navigation">
            <li class="nav-item"><nuxt-link to="#">home</nuxt-link></li>
            <li class="nav-item"><nuxt-link to="#">about me</nuxt-link></li>
            <li class="nav-item"><nuxt-link to="#">series</nuxt-link></li>
            <li class="nav-item"><nuxt-link to="#">projects</nuxt-link></li>
          </div>
          <div class="social">
            <li class="nav-item">
              <a href="https://github.com/nikhilhenry" target="_"
                ><i class="fab fa-github"></i
              ></a>
            </li>
            <li class="nav-item">
              <a
                href="https://www.linkedin.com/in/nikhil-henry-07b79a135/"
                target="_"
                ><i class="fab fa-linkedin"></i
              ></a>
            </li>
            <li class="nav-item">
              <a href="https://www.instagram.com/_nikhilhenry_/"
                ><i class="fab fa-instagram"></i
              ></a>
            </li>
          </div>
        </ul>
      </div>
    </div>
    <Nuxt />
  </div>
</template>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.navbar {
  width: 100%;
  border-bottom: 1px solid rgba(156, 163, 175, 0.2);

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 1rem auto 0;

    .navbar-header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin: 1rem auto;
      font-size: 24px;

      .title {
        font-weight: bold;
        font-size: 2rem;
      }
    }

    .nav-items {
      display: flex;
      flex-direction: row;
      list-style-type: none;
      justify-content: space-between;
      width: 95%;
      align-items: center;
      padding: 0 !important;

      .nav-item {
        text-transform: uppercase;
        padding: 0.5rem 1rem 0.8rem;

        border-radius: 15px 15px 5px 5px;
        a {
          text-decoration: none;
          color: #000;
        }

        &:hover {
          // background-color: rgb(227, 242, 253); interseting color
          background-color: rgba(156, 163, 175, 0.2);
        }
      }

      .social {
        display: flex;
        .nav-item {
          padding: 0.5rem 0.5rem 0.8rem;
        }
        a {
          font-size: 1.5rem;
          color: #92a3ab;
          margin: 0.5rem;
        }
      }

      .navigation {
        display: flex;
      }
    }
  }
}
</style>
