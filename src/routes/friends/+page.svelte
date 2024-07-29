<script>
    import PageBar from '../../components/pagebar.svelte';
    
    function toggleExpand(index) {
        friends.forEach((friend, i) => {
        if (i !== index) {
            friend.expanded = false;
        }
      });
      friends[index].expanded = !friends[index].expanded;
    }
    
    let friends = [
        { 
            id: 1, 
            name: 'QuazarCG', 
            description: '"Amature 3d modeller, always wanted to get into game development. I use Blender and Godot"', 
            link: 'https://www.youtube.com/@QuazarCGI',
        },
        { 
            id: 2, 
            name: 'Lyvri', 
            description: '"A young programmer that programs. makes inexpensive games."', 
            link: 'https://sites.google.com/view/mysticaldevelopers/home',
        },
    ];
</script>

<main>
    <PageBar />

    <div>
        <h1 class="title">Friends</h1>
        <ul>
            {#each friends as { id, name, description, link, expanded }, index (id)}
            <li class="friend">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <h4 class="friend-button" on:click={()=> toggleExpand(index)}>
                    <span class="subtitle">{name}</span>
                </h4>
                {#if expanded}
                <div class="expanded-friend">
                    <p class="body-text">{description}</p>
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