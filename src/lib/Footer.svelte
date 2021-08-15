<script>
  import '../i18n.js'
  import { _, isLoading } from 'svelte-i18n'
  export let active = false
</script>

{#if !$isLoading}
  <footer class="p-3" class:active on:click={() => active = !active}>
    <h4>{$_('nav.contact')}</h4>
    <div class="d-flex align-items-center">
        <div class="col-xs-12 col-md-6">
            <a class="p-2 align-self-middle" href="mailto:info@yermainaraya.com">
                <i class="fa fa-envelope-o fa-lg">&nbsp;</i>&nbsp;info@yermainaraya.com</a>
        </div>
        <div class="col-xs-12 col-md-6 d-flex align-items-center justify-content-md-end">
            <a class="p-1" href="https://github.com/yerma" target="_blank"><i class="fa fa-github fa-lg">&nbsp;</i></a>
            <a class="p-1" href="https://www.behance.net/yerma" target="_blank"><i class="fa fa-behance fa-lg">&nbsp;</i></a>
            <a class="p-1" href="https://www.linkedin.com/in/yermain-araya-villacura-6911a1103/" target="_blank"><i class="fa fa-linkedin fa-lg">&nbsp;</i></a>
        </div>
    </div>
  </footer>
{/if}


<style lang="scss">
  footer {
    position: fixed;
    width: 100%;
    background-color: var(--turquoise);
    bottom: -3rem;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    h4 {
      position: absolute;
      right:0;
      bottom: 80%;
      background: var(--turquoise);
      padding: 0.3rem 1rem;
      font-size: 1.2em;
      font-weight: normal;
      color: #FFF;

      &:after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        right: 100%;
        border: 1.5rem solid var(--turquoise);
        border-top-color: transparent;
        border-left-color: transparent;
      }
    }

    a {
      color: #FFF;
      font-weight: 300;
      white-space: nowrap;

      &:hover {
        color: var(--darkgray);
      }
    }

    &.active {
      bottom: 0;
    }
  }
</style>