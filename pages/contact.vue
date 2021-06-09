<template>
  <div class="container">
    <h2 class="is-size-4">Send me an email</h2>

    <form
      data-netlify="true"
      name="contact"
      class="form"
      method="POST"
      data-netlify-recaptcha="true"
    >
      <!-- name -->
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Your name" />
        </div>
      </div>

      <!-- email -->
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input
            class="input"
            type="email"
            placeholder="hello@example.com"
            value=""
          />
        </div>
      </div>

      <!-- subject -->
      <div class="field">
        <label class="label">Subject</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Write something"
            value=""
          />
        </div>
      </div>

      <!-- purpose -->
      <div class="field">
        <label class="label">Purpose</label>
        <div class="control">
          <div class="select">
            <select>
              <option>Say Hi</option>
              <option>Software Development</option>
              <option>Education</option>
              <option>Business</option>
              <option>Other</option>
            </select>
          </div>
        </div>
      </div>

      <!-- message field -->
      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea class="textarea" placeholder="Your message"></textarea>
        </div>
      </div>

      <!-- recaptcha -->
      <div data-netlify-recaptcha="true"></div>

      <!-- send button -->
      <div class="field">
        <div class="control has-text-centered">
          <button class="button is-link">Send</button>
        </div>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import 'bulma';

.container {
  max-width: 550px !important;
}

h2 {
  margin: 3rem 0 3rem;
}

.field {
  margin-bottom: 1.5rem !important;
}

/* TABLETS PORTRAIT */
@media only screen and (max-width: 820px) {
  .container {
    padding: 1.5rem;
  }
}
</style>
