<script context="module">
   export function preload({ params, query }) {
      return this.fetch(`posts.json`).then(r => r.json()).then(posts => {
         return { posts };
      });
   }
</script>

<script>
   import { formatDistanceStrict } from 'date-fns';
   import PostList from '../components/postlist'

   export let posts;
</script>

<svelte:head>
   <title>Blog</title>
</svelte:head>

<PostList posts={posts} />