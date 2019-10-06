<script>
   export let post;

   $: thumbnail = post.image.replace(/\b(\w*uploads\w*)\b/g, "thumbnails");
</script>

<style>
   .image{
      width: 100px;
      height: 100px;
   }

   img{
      width: 100%;
      height: 100%;
   }
   
</style>
<div class="image">
   <img alt={post.imageAlt} src={thumbnail} />
</div>