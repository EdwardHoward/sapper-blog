<script>
   import { formatDistanceStrict } from 'date-fns';
   import PostComponent from './post';
   import Thumbnail from './thumbnail';

   export let posts;
</script>
<style>
   a:hover {
      text-decoration: underline;
   }

   .flex-1 {
      flex: 1;
   }

   .d-flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
   }

   .align-start {
      align-self: start;
   }
</style>

<div class="articles">
   {#each posts as post}
      <PostComponent post={post} let:date={date}>
         <header slot="header" class="d-flex">
            <div class="flex-1 align-start">
               <a rel='prefetch' href='posts/{post.slug}'><h2>{post.title}</h2></a>
               <div class="flex-1">
                  <h3>{post.subtitle}</h3>
                  <div class="date">{date}</div>
               </div>
            </div>
            {#if post.image}
               <Thumbnail post={post} />
            {/if}
         </header>
      </PostComponent>
   {/each}
</div>