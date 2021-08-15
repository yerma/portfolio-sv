<script>
  import '../i18n.js'
  import { _ } from 'svelte-i18n'
</script>

<div class="about d-flex">
  <article class="col-md-6 offset-md-6 align-self-center">
    <div class="bio">
      <h3>{$_('about.title')}</h3>
      <p>{$_('about.description1')}</p>
      <p>{$_('about.description2')}</p>
    </div>
    <hr />
    <div class="contact-details">
      <h4>{$_('about.moreInfo')}</h4>
      <div class="contact-cols d-flex flex-wrap justify-content-around align-items-center">
        <div class="align-self-middle">
          <a href="Yermain-Araya.pdf" target="_blank"><i class="fa fa-file-text-o fa-2x" />&nbsp;CV</a>
        </div>
        <div class="align-self-middle">
          <a class="p-1" href="https://github.com/yerma" target="_blank">
            <i class="fa fa-github fa-2x">&nbsp;</i>
          </a>
          <a class="p-1" href="https://www.behance.net/yerma" target="_blank">
            <i class="fa fa-behance fa-2x">&nbsp;</i>
          </a>
          <a class="p-1" href="https://www.linkedin.com/in/yermain-araya-villacura-6911a1103/" target="_blank">
            <i class="fa fa-linkedin fa-2x">&nbsp;</i>
          </a>
        </div>
        <div class="align-self-middle">
          <a class="p-1 align-self-middle" href="mailto:info@yermainaraya.com">
              <i class="fa fa-envelope-o fa-lg" />&nbsp;info@yermainaraya.com</a>
        </div>
      </div>
    </div>
  </article>
</div>

<style lang="scss">
  .about {
    position: relative;
    height: 100%;
    background: url('img/perfil.jpg') left center no-repeat;
    background-size: auto 100vh;
    padding: 50px 3rem;

    &:after {
      content: '';
      background: rgba(255, 255, 255, 0.75);
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }

    article {
      z-index: 1;
      background: rgba(255,255,255,.5);
    }

    .bio {
      margin-bottom: 40px;

      h3 {
        font-size: 2.6rem;
        color: var(--magenta);
        font-family: 'Kaushan script', cursive;
        margin-bottom: 20px;
      }
    }

    .contact-cols {
      div {
        margin-bottom: 25px;
      }
    }
    h4 {
      color: var(--turquoise);
      font-size: 1.2rem;
      margin-bottom: 25px;
    }

    a {
      color: var(--darkgray);

      &:hover {
        color: var(--turquoise);
      }
    }
  }
</style>
