<script context="module">
   export async function preload({ params, query }) {
      // the `slug` parameter is available because
      // this file is called [slug].svelte
      const res = await this.fetch(`posts/${params.slug}.json`);
      const data = await res.json();

      if (res.status === 200) {
         return { post: data };
      } else {
         this.error(res.status, data.message);
      }
   }
</script>

<script>
   import PostComponent from '../../components/post';
   export let post;
</script>

<style>
   .content {
      margin-top: 1rem;
      overflow: hidden;
   }

   .content :global(h2) {
      font-size: 1.4em;
      font-weight: 500;
   }

   .content :global(pre) {
      background-color: #f9f9f9;
      box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
      padding: 0.5em;
      border-radius: 2px;
      overflow-x: auto;
   }

   .content :global(pre) :global(code) {
      background-color: transparent;
      padding: 0;
   }

   .content :global(ul) {
      line-height: 1.5;
   }

   .content :global(li) {
      margin: 0 0 0.5em 0;
   }

   .content :global(img) {
      max-width: 100%;
      display: block;
      margin: 0 auto;
   }

   .content :global(img + em) {
      display: block;
      text-align: center;
   }

   header {
      border-bottom: 1px solid #eaeaea;
      padding-bottom: .5rem;
   }

   main {
      padding: 0 1.5rem;
   }
</style>

<svelte:head>
   <title>{post.title}</title>
</svelte:head>

<PostComponent post={post} let:date={date}>
   <header slot="header">
      <h1>{post.title}</h1>
      <h2>{post.subtitle}</h2>
      <div class="date">Edward Howard - {date}</div>
   </header>
   <main class="content" slot="content">
      {@html post.html}
   </main>
</PostComponent>