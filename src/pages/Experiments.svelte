<script>
    import PageBar from '../components/pagebar.svelte';
  
    function toggleExpand(index) {
      experiments.forEach((experiment, i) => {
        if (i !== index) {
          experiment.expanded = false;
        }
      });
      experiments[index].expanded = !experiments[index].expanded;
    }


    let experiments = [
      {
        id: 1,
        name: 'Raycast Car Controller',
        image: '',
        description: 'Just a simple open source raycast car controller for Unity',
        link: 'https://github.com/ilikefrogs101/Raycast-Car-Controller',
      },
      {
        id: 2,
        name: 'Language Generation',
        image: '',
        description: 'An experiment to generate realistic-ish language within certain parameters',
        link: 'https://github.com/ilikefrogs101/Language-Generation',
      },
    ];
</script>

<main>
    <PageBar />

    <div>
        <h1 class="title">Experiments</h1>
        <ul>
            {#each experiments as { id, name, image, description, link, expanded }, index (id)}
            <li class="experiment">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <h4 class="experiment-button" on:click={()=> toggleExpand(index)}>
                    <span class="subtitle">{name}</span>
                </h4>
                {#if expanded}
                <div class="expanded-experiment">
                    <p class="body-text">{description}</p>
                    {#if image}
                    <img src={image} alt={name}> {/if}
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <p class="body-text-link">Link</p>
                    </a>
                </div>
                {/if}
            </li>
            {/each}
        </ul>
    </div>
</main>