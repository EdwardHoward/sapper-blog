<script>
   export let segment;
</script>

<style>
   main {
      position: relative;
      max-width: 56em;
      background-color: white;
      margin: 0 auto;
      box-sizing: border-box;
      padding: calc(50px + 1rem) 0;
   }

   header {
      height: 50px;
      background: #f7f7f7;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #eaeaea;
      position: fixed;
      width: 100%;
      z-index: 1;

   }

   header a {
      color: #333;
   }

   h1 {
      margin: 0;
      font-size: 20px;
      position: relative;
   }

   .home {
      padding-left: 1.5rem;
   }

   .not-home:before {
      content: '«';
      position: absolute;
      left: -1rem;
      color: #6f6f6f;
      line-height: 1.4rem;
   }
</style>

<header>
   <div class="home">
      <a href="/blog" title="home">
         <h1 class:not-home={segment}>Edward Howard</h1>
      </a>
   </div>
</header>
<main>
   <slot></slot>
</main>
