<script>
   import { formatDistanceStrict } from 'date-fns';
   import PostComponent from './post';

   export let posts;
</script>
<style>
   a:hover {
      text-decoration: underline;
   }

   .image {
      width: 35%;
      max-width: 200px;
      min-width: 100px;
      margin-left: .5rem;

      border: 1px solid #eaeaea;
      display: flex;
   }

   img {
      width: 100%;
      height: 100%;
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
               <div class="image">
                  <img alt={post.imageAlt} src={post.image} />
               </div>
            {/if}
         </header>
      </PostComponent>
   {/each}
</div>