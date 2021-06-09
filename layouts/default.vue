<template>
  <div>
    <!-- modal view -->
    <ModalView v-if="isSearchActive" @status="isSearchActive = !isSearchActive">
      <AppSearch />
    </ModalView>
    <!-- navbar -->
    <div class="navbar">
      <div class="n-container">
        <header class="navbar-header">
          <div class="title">Nikhil Henry</div>
          <div class="icon" @click="setSearchActive">
            <i class="fas fa-search"></i>
          </div>
        </header>
        <ul class="nav-items">
          <div class="navigation">
            <!-- home route -->
            <nuxt-link to="/">
              <li
                class="nav-item"
                :class="{ 'active-class': activeRoute == 'index' }"
              >
                home
              </li>
            </nuxt-link>
            <!-- about route -->
            <nuxt-link to="/about">
              <li
                class="nav-item"
                :class="{ 'active-class': activeRoute == 'about' }"
              >
                about
              </li>
            </nuxt-link>
            <!-- collection route -->
            <nuxt-link to="/collections">
              <li
                class="nav-item"
                :class="{ 'active-class': activeRoute == 'collections' }"
              >
                collections
              </li>
            </nuxt-link>
            <!-- projects route -->
            <nuxt-link to="/projects">
              <li
                class="nav-item"
                :class="{ 'active-class': activeRoute == 'projects' }"
              >
                projects
              </li>
            </nuxt-link>
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
              <nuxt-link to="/contact"
                ><i class="fas fa-paper-plane"></i
              ></nuxt-link>
            </li>
          </div>
        </ul>
      </div>
    </div>
    <Nuxt />
    <footer class="footer">
      <div class="socials">
        <span>stay connected</span>
        <div class="icons">
          <a href="https://github.com/nikhilhenry" target="_"
            ><i class="fab fa-github"></i
          ></a>
          <a
            href="https://www.linkedin.com/in/nikhil-henry-07b79a135/"
            target="_"
            ><i class="fab fa-linkedin"></i
          ></a>
          <nuxt-link to="/contact"
            ><i class="fas fa-paper-plane"></i
          ></nuxt-link>
        </div>
      </div>
      <span class="copy">&copy; 2021 Nikhil Henry</span>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    activeRoute() {
      return this.$route.name
    },
    isSearchActive() {
      if (this.$route.query.search) return true
      else return false
    },
  },
  methods: {
    setSearchActive() {
      this.$router.push({ query: { search: 'true' } })
    },
  },
}
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

$border-color: rgba(156, 163, 175, 0.2);

.navbar {
  width: 100%;
  border-bottom: 1px solid $border-color;

  .n-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0.5rem auto 0;

    .navbar-header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin: 1rem auto;
      font-size: 24px;
      padding-bottom: 1rem;

      .title {
        font-weight: bold;
        font-size: 2rem;
      }
      .icon {
        padding: 0.5rem 0.8rem;
        border-radius: 2rem;
        &:hover {
          background-color: $border-color;
        }
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
          background-color: $border-color;
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

  .active-class {
    font-weight: bold;
    background-color: $border-color;
  }
}

.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: rgba(250, 250, 250, 1);
  border-top: 1px solid #e5e7eb;
  margin-top: 3.5rem;
  color: #616161;

  .socials {
    text-align: center;
    margin-bottom: 2rem;
    span {
      text-transform: uppercase;
      font-size: 1.2rem;
      padding: 2rem 0 2rem;
      display: block;
    }
    .icons {
      display: flex;
      width: 250px;
      justify-content: space-evenly;
      a {
        font-size: 32px;
        color: #4b5563;
      }
    }
  }

  .copy {
    display: block;
    padding: 0 0 1rem;
    font-size: 1.1rem;
  }
}

/* TABLETS PORTRAIT */
@media only screen and (max-width: 820px) {
  html {
    font-size: 12px;
  }

  .social {
    display: none !important;
  }

  .n-container {
    width: 100% !important;
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }
}
</style>
