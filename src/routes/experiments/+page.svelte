<script lang="ts">
   import PageBar from '../../components/pagebar.svelte';
  
    function toggleExpand(index: number) {
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
      {
        id: 3,
        name: 'Unnamed Physics Engine',
        image: '',
        description: 'A physics engine I am working on, if it turns out any good it will be integated into the game engine mentioned in my projects page ',
        link: '',
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
                <button class="experiment-button" on:click={()=> toggleExpand(index)}>
                    <span class="subtitle">{name}</span>
                </button>
                {#if expanded}
                <p> </p>
                <div class="expanded-experiment">
                    <p class="body-text">{description}</p>
                    {#if image}
                    <img src={image} alt={name}> {/if}
		    {#if link}
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <p class="body-text-link">Link</p>
                    </a>
		    {/if}
                </div>
                {/if}
            </li>
            {/each}
        </ul>
    </div>
</main>
