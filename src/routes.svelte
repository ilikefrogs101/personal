<script>
    import { Router, Route } from 'svelte-routing';
        
    import Home from '../pages/Home.svelte';
    import Projects from '../pages/Projects.svelte';
    import Experiments from '../pages/Experiments.svelte';
    import Friends from '../pages/Friends.svelte';
    import NotFound from '../pages/NotFound.svelte';
  
    const Routes = {
        '/*': NotFound,
        '/projects': Projects,
        '/experiments': Experiments,
        '/friends': Friends,
        '/': Home,
    };

    export const baseRoute = '/';
    export let url = '';
</script>

<Router {url}>
    <div>
      {#each Object.entries(Routes) as [path, Page]}
        <Route path={`${baseRoute}${path}`}><Page /></Route>
        <Route path={`${path}`}><Page /></Route>
      {/each}
    </div>
</Router>