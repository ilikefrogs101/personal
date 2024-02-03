<script>
    import PageBar from '../components/pagebar.svelte';

    function toggleExpand(index) {
        projects.forEach((project, i) => {
        if (i !== index) {
            project.expanded = false;
        }
      });
      projects[index].expanded = !projects[index].expanded;
    }

    let projects = [
        { 
            id: 1, 
            name: 'HIGHBLAST', 
            description: 'My first and biggest programming project', 
            image: '',
            link: 'https://store.steampowered.com/app/1801630/HIGHBLAST/', 
        },
        { 
            id: 2, 
            name: 'Minirail Simulator', 
            description: 'A miniature train simulator I helped with', 
            image: '',
            link: '',
        },
        { 
            id: 3, 
            name: 'Pinboard/Notes App', 
            description: 'A notes app in the style of a pinboard I am working on', 
            image: 'Assets/NotesPreview.png',
            link: 'https://github.com/ilikefrogs101/Notes/releases', 
            sourceLink: 'https://github.com/ilikefrogs101/Notes',
        },
        { 
            id: 4, 
            name: 'Unnamed Game Engine', 
            description: 'A game engine I am creating for a future game', 
            image: '',
            link: '', 
            sourceLink: '',
        },
    ];
</script>

<main>
    <PageBar />

    <div>
        <h1 class="title">Projects</h1>
        <ul>
            {#each projects as { id, name, image, description, link, sourceLink, expanded }, index (id)}
            <li class="project">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <h4 class="project-button" on:click={()=> toggleExpand(index)}>
                    <span class="subtitle">{name}</span>
                </h4>
                {#if expanded}
                <div class="expanded-project">
                    <p class="body-text">{description}</p>
                    {#if image}
                    <img src={image} alt={name}> {/if}
                    {#if link}
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <p class="body-text-link">Link</p>
                    </a>
                    {/if}
                    {#if sourceLink}
                    <a href={sourceLink} target="_blank" rel="noopener noreferrer">
                        <p class="body-text-link">View Source</p>
                    </a>
                    {/if}
                </div>
                {/if}
            </li>
            {/each}
        </ul>
    </div>
</main>
