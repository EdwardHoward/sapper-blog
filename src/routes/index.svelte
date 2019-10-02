<script context="module">
   export function preload({ params, query }) {
      return this.fetch(`posts.json`).then(r => r.json()).then(posts => {
         return { posts };
      });
   }
</script>

<script>
   import PostList from '../components/postlist'

   export let posts;
</script>

<svelte:head>
   <title>Edward's Blog</title>
</svelte:head>

<PostList {posts} />