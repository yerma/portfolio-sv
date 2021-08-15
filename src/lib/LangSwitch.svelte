<script>
  import { locale } from 'svelte-i18n'
  let langOpen = false
  let currentLocale = 'en'

  function switchLang(lang) {
		locale.set(lang)
		currentLocale = lang
	}
</script>

<li class="language dropdown d-none d-md-block">
  <button
    type="button"
    id="dropdownMenuButton"
    data-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
    on:click|preventDefault={() => { langOpen = !langOpen }}
  >
    <i class="fa fa-globe fa-lg" />
  </button>
  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton" class:show={langOpen}>
    <button
      class="dropdown-item"
      class:active={currentLocale === 'es'}
      on:click|preventDefault={() => switchLang('es')}>Español</button
    >
    <button
      class="dropdown-item"
      class:active={currentLocale === 'en'}
      on:click|preventDefault={() => switchLang('en')}>English</button
    >
  </div>
</li>

<style lang="scss">
  .language {
    button {
      cursor: pointer;
      padding: 8px 15px;
      transition: all 0.3s ease;

      &:hover {
        background: var(--magenta);
        color: #fff;
      }
    }

    &.show button {
      background: var(--magenta);
      color: #fff;
    }
  }

  .dropdown {
    .dropdown-menu {
      margin: 0;
      border-color: var(--magenta);
      border-radius: 0;
      border-width: 2px;
      padding: 0;
      text-align: center;
      transition: max-height 0.3s, opacity 0.2s 0.1s, visibility 0s 0.3s;
      max-height: 0;
      display: block;
      overflow: hidden;
      opacity: 0;
      visibility: hidden;
      right: 0;

      &.show {
        transition: max-height 0.3s, opacity 0.2s, visibility 0s;
        max-height: 190px;
        opacity: 1;
        visibility: visible;
      }

      button {
        font-weight: lighter;
        cursor: pointer;

        &:hover {
          font-weight: normal;
        }

        &.active {
          background: var(--lightgray);
          font-weight: normal;
          cursor: default;
          color: inherit;
        }
      }
    }
  }
</style>