<script>
   import { format } from 'date-fns';
   export let post;

   $: date = `${format(new Date(post.date), 'MMM do')}`;
</script>
<style>
   article :global(.date){
      color: #6f6f6f;
   }

   article :global(header){
      border-bottom: 1px solid #eaeaea;
      padding: .5rem 1.5rem;
      flex: 1;
   }
</style>

<article>
   <slot name="header" date={date} />
   <slot name="content" />
</article>