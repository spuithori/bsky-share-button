<script lang="ts">
  export let type: 'button' | 'icon' = 'button';
  export let width = 96;
  export let height = 30;
  export let title: string = document.title || '';
  export let url: string = location.href;
  export let lang: string = document.documentElement.lang || 'en';

  let buttonText = lang === 'ja' ? 'シェア' : 'Share';

  let text = title + '\n' + url;
</script>

<svelte:options tag="bsky-share-button"></svelte:options>

<a class="button" aria-label="{buttonText}" href="https://bsky.app/intent/compose?text={encodeURIComponent(text)}" style="--bsky-share-button-width: {width}px; --bsky-share-button-height: {height}px" target="_blank" rel="nofollow"><svg xmlns="http://www.w3.org/2000/svg" height="14" width="15.75" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#fff" d="M407.8 294.7c-3.3-.4-6.7-.8-10-1.3c3.4 .4 6.7 .9 10 1.3zM288 227.1C261.9 176.4 190.9 81.9 124.9 35.3C61.6-9.4 37.5-1.7 21.6 5.5C3.3 13.8 0 41.9 0 58.4S9.1 194 15 213.9c19.5 65.7 89.1 87.9 153.2 80.7c3.3-.5 6.6-.9 10-1.4c-3.3 .5-6.6 1-10 1.4C74.3 308.6-9.1 342.8 100.3 464.5C220.6 589.1 265.1 437.8 288 361.1c22.9 76.7 49.2 222.5 185.6 103.4c102.4-103.4 28.1-156-65.8-169.9c-3.3-.4-6.7-.8-10-1.3c3.4 .4 6.7 .9 10 1.3c64.1 7.1 133.6-15.1 153.2-80.7C566.9 194 576 75 576 58.4s-3.3-44.7-21.6-52.9c-15.8-7.1-40-14.9-103.2 29.8C385.1 81.9 314.1 176.4 288 227.1z"/></svg>{buttonText}</a>

<style lang="postcss">
  @import "ress.css";

  .button {
      font-family: sans-serif;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      background-color: #4a83fc;
      color: #fff;
      font-weight: bold;
      width: var(--bsky-share-button-width, 96px);
      height: var(--bsky-share-button-height, 30px);
      text-decoration: none;
      font-size: calc(var(--bsky-share-button-height, 40px) * 0.425);
      border-radius: 4px;
      transition: opacity .2s linear;
  }

  .button:hover {
      opacity: .7;
  }
</style>