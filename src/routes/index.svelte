<script>
    import { Router, Route } from 'svelte-routing';
    import Home from '../pages/Home.svelte';
    import Projects from '../pages/Projects.svelte';
    import Experiments from '../pages/Experiments.svelte';
    import Friends from '../pages/Friends.svelte';
  
    export let url = '';
</script>

<Router {url} basepath="/">
    <div>
        <Route path="friends" component={Friends} />
        <Route path="experiments" component={Experiments} />
        <Route path="projects" component={Projects} />
        <Route path="/" component={Home} />
    </div>
</Router>