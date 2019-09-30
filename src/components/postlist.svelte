<script>
   import { formatDistanceStrict } from 'date-fns';
   import PostComponent from './post';

   export let posts;
</script>
<style>
   a:hover {
      text-decoration: underline;
   }
</style>

{#each posts as post}
   <PostComponent post={post} let:date={date}>
      <header slot="header">
         <a rel='prefetch' href='posts/{post.slug}'><h2>{post.title}</h2></a>
         <h3>{post.subtitle}</h3>
         <div class="date">{date}</div>
      </header>
   </PostComponent>
{/each}