<script context="module">
   export function preload({ params, query }) {
      return this.fetch(`posts.json`).then(r => r.json()).then(posts => {
         return { posts };
      });
   }
</script>

<script>
   import { formatDistanceStrict } from 'date-fns';
   export let posts;
</script>

<style>
   ul {
      margin: 0 0 1em 0;
      line-height: 1.5;
      list-style: none;
      padding: 0;
   }

   li {
      border-bottom: 1px solid #eaeaea;
      padding: 1rem 1.5rem;
   }

   ul li:first-child{
      padding-top: 0;
   }

   a:hover {
      text-decoration: underline;
   }

   .date {
      color: #6f6f6f;
   }
</style>

<svelte:head>
   <title>Blog</title>
</svelte:head>

<ul>
   {#each posts as post}
		<li>
         <a rel='prefetch' href='posts/{post.slug}'><h2>{post.title}</h2></a>
         <h3>{post.subtitle}</h3>
         <div class="date">{formatDistanceStrict(new Date(post.date), Date.now())} ago</div>
      </li>
	{/each}
</ul>