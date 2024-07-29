<script>
  import { page } from '$app/stores';

  function isActive(url) {
    let currentPath = $page.url.pathname;
    return currentPath === url;
  }
</script>

<div class="navbar">
  <a href="/" class="{isActive('/') ? 'selected-page-button' : 'page-button'}">Home</a>
  <a href="/projects" class="{isActive('/projects') ? 'selected-page-button' : 'page-button'}">Projects</a>
  <a href="/experiments" class="{isActive('/experiments') ? 'selected-page-button' : 'page-button'}">Experiments</a>
  <a href="/friends" class="{isActive('/friends') ? 'selected-page-button' : 'page-button'}">Friends</a>
</div>
