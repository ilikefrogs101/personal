<script>
  import { link } from 'svelte-routing';
  
  function isActive(url) {
    return url === window.location.pathname;
  }
</script>

<div class="navbar">
  <a href="/" class="{isActive('/') ? 'selected-page-button' : 'page-button'}" use:link>Home</a>
  <a href="projects" class="{isActive('/projects') ? 'selected-page-button' : 'page-button'}" use:link>Projects</a>
  <a href="experiments" class="{isActive('/experiments') ? 'selected-page-button' : 'page-button'}" use:link>Experiments</a>
  <a href="friends" class="{isActive('/friends') ? 'selected-page-button' : 'page-button'}" use:link>Friends</a>
</div>