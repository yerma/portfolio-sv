<script>
  import { onMount } from 'svelte'
  import { _, locale } from 'svelte-i18n'
  import typed from 'typed.js'

  let subtitleElement;
  let subtitles = [
      $_('home.line1'),
      $_('home.line2'),
      $_('home.line3')
    ]
  let typedInstance

  function initTyped(messages) {
    if (typedInstance) typedInstance.destroy()
    typedInstance = new typed(subtitleElement, {
      strings: messages,
      typeSpeed: 80,
      cursorChar: '_',
      loop: true,
      loopCount: Infinity,
      backSpeed: 10
    })
  }



  onMount(() => {
    initTyped(subtitles)
    locale.subscribe(() => {
      initTyped(subtitles)
    })
  })
</script>

<div class="home d-flex align-items-center">
  <div class="titulo">
      <h3>Yermaín Araya</h3>
      <p><span bind:this={subtitleElement} /></p>
  </div>
</div>

<style lang="scss">
  .home {
    height: 100%;
    color: var(--darkgray);

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      opacity: .5;
      background: url('img/background.jpg');
      background-size: cover;
      filter: grayscale(100);
      transition: all 1s ease-in-out;
    }

    .titulo {
      width: 100%;
      padding: 0 2rem;
      text-align: center;
      z-index: 1;
      animation: fadeIn 1.5s ease-out forwards;

      h3 {
        position: relative;
        font-family: 'Kaushan Script', cursive;
        font-size: 8vw;
        color: #000;
        width: 60vw;
        margin: 0 auto;
        white-space: nowrap;

        &:before {
          content: "";
          height: 12%;
          background: var(--magenta);
          width: 100%;
          position: absolute;
          left: 0;
          bottom: 20%;
          transform-origin: 0 50% 0;
          z-index: -1;
          mix-blend-mode: multiply;
          transform: scalex(0);
          animation: highlight .5s ease-out forwards;
          animation-delay: 1000ms;
        }

        @media screen and (max-width: 768px) {
          font-size: 12vw;
          width: 85vw;
        }
      }

      p {
        font-size: 1.5rem;
        min-height: 36px;

        @media screen and (max-width: 768px) {
          font-size: 1.2rem;
        }
      }
    }
  }

  @keyframes highlight {
    to { transform: scalex(1); }
  }


</style>
