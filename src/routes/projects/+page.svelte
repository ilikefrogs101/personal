<script lang="ts">
    import PageBar from '../../components/pagebar.svelte';

    function toggleExpand(index: number) {
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
            expanded: false,
        },
        { 
            id: 2, 
            name: 'Minirail Simulator', 
            description: 'A miniature train simulator I helped with', 
            image: '',
            link: '',
            expanded: false,
        },
        { 
            id: 3, 
            name: 'Pinboard/Notes App', 
            description: 'A notes app in the style of a pinboard I am working on', 
            image: 'NotesPreview.png',
            link: 'https://github.com/ilikefrogs101/Notes/releases', 
            sourceLink: 'https://github.com/ilikefrogs101/Notes',
            expanded: false,
        },
        { 
            id: 4, 
            name: 'Unnamed Game Engine', 
            description: 'A game engine I am creating for a future game', 
            image: '',
            link: '', 
            sourceLink: '',
            expanded: false,
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
                <button class="project-button" on:click={()=> toggleExpand(index)}>
                    <span class="subtitle">{name}</span>
                </button>
                {#if expanded}
                <p> </p>
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
