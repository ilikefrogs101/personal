const content = document.getElementById('content');

const routes = {
    '': 'Pages/home.html',
    'projects': 'Pages/projects.html',
    'experiments': 'Pages/experiments.html',
    'friends': 'Pages/friends.html',
    '*': '404.html'
};

function isCurrentPage(hash) {
    return hash === window.location.hash.substring(1);
}

document.addEventListener('DOMContentLoaded', () => {
    const navbarLinks = document.querySelectorAll('.navbar-link');

    function loadPage(url) {
        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error('Page not found');
                return response.text();
            })
            .then(html => {
                content.innerHTML = html;
            })
            .catch(() => {
                content.innerHTML = loadPage("*");
            });
    }

    function getPageUrlFromHash() {
        const hash = window.location.hash.substring(1);
        return routes[hash] || routes['*'];
    }

    function handleNavigation() {
        const pageUrl = getPageUrlFromHash();
        loadPage(pageUrl);
        updateNavbarLinks();
    }

    function updateNavbarLinks() {
        navbarLinks.forEach(link => {
            const sectionId = link.getAttribute('href').substring(1); // Remove '#'
            link.className = isCurrentPage(sectionId) ? 'selected-page-button' : 'page-button';
        });
    }

    // Initial navigation
    handleNavigation();

   // Initial list rendering
   renderItemList(); 

    // Set up click event listeners for navigation links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const hash = event.target.getAttribute('href');
            history.pushState(null, '', hash);
            handleNavigation();
        });
    });

    // Handle browser navigation events
    window.addEventListener('popstate', handleNavigation);
    window.addEventListener('hashchange', renderItemList);
});

function renderItemList()
{
    if(isCurrentPage("projects"))
    {
        renderProjectsList();
    }
    else if(isCurrentPage("experiments"))
    {
        renderExperimentsList();
    }
    else if(isCurrentPage("friends"))
    {
        renderFriendsList();
    }
}

function toggleProjectExpand(index) {
    projects.forEach((project, i) => {
    if (i !== index) {
        project.expanded = false;
    }
  });
  projects[index].expanded = !projects[index].expanded;
  renderProjectsList();
}
function renderProjectsList()
{
    const interval = setInterval(() => {
        if(document.getElementById('project-list'))
        {
            {
                const projectlist = document.getElementById('project-list');
                while (projectlist.firstChild) {
                    projectlist.removeChild(projectlist.lastChild);
                }        
                projects.forEach((project, i) => {
                    var newProjectElement = 
                    `<li class="project">
                        <button class="project-button" onclick="toggleProjectExpand(${i})">
                            <span class="subtitle">${project.name}</span>
                        </button>`;
                    
                    if(project.expanded)
                    {
                        newProjectElement += 
                        `<p> </p>
                        <div class="expanded-project">
                            <p class="body-text">${project.description}</p>
                        `;

                        if(project.image)
                        {
                            newProjectElement += `<img src=${project.image} alt=${project.name}`;
                        }

                        if(project.link)
                        {
                            newProjectElement += 
                            `<a href=${project.link} target="_blank" rel="noopener noreferrer">
                                <p class="body-text-link">Link</p>
                            </a>`;
                        }

                        if(project.sourceLink)
                        {
                            newProjectElement += 
                            `<a href=${project.sourceLink} target="_blank" rel="noopener noreferrer">
                                <p class="body-text-link">View Source</p>
                            </a>`;
                        }

                        newProjectElement += `</div>`;
                    }

                    newProjectElement += "</li>";
                    projectlist.insertAdjacentHTML('beforeend', newProjectElement);        
                });
            }
            clearInterval(interval);
        }
    }, 10)
}
function toggleExperimentExpand(index) {
    experiments.forEach((experiment, i) => {
    if (i !== index) {
        experiment.expanded = false;
    }
  });
  experiments[index].expanded = !experiments[index].expanded;
  renderExperimentsList();
}
function renderExperimentsList()
{
    const interval = setInterval(() => {
        if(document.getElementById('experiment-list'))
        {
            if(isCurrentPage("experiments"))
            {
                const experimentlist = document.getElementById('experiment-list');
                while (experimentlist.firstChild) {
                    experimentlist.removeChild(experimentlist.lastChild);
                }        
                experiments.forEach((experiment, i) => {
                    var newExperimentElement = 
                    `<li class="experiment">
                        <button class="experiment-button" onclick="toggleExperimentExpand(${i})">
                            <span class="subtitle">${experiment.name}</span>
                        </button>`;
                    
                    if(experiment.expanded)
                    {
                        newExperimentElement += 
                        `<p> </p>
                        <div class="expanded-experiment">
                            <p class="body-text">${experiment.description}</p>
                        `;

                        if(experiment.image)
                        {
                            newExperimentElement += `<img src=${experiment.image} alt=${experiment.name}`;
                        }

                        if(experiment.link)
                        {
                            newExperimentElement += 
                            `<a href=${experiment.link} target="_blank" rel="noopener noreferrer">
                                <p class="body-text-link">Link</p>
                            </a>`;
                        }

                        if(experiment.sourceLink)
                        {
                            newExperimentElement += 
                            `<a href=${experiment.sourceLink} target="_blank" rel="noopener noreferrer">
                                <p class="body-text-link">View Source</p>
                            </a>`;
                        }

                        newExperimentElement += `</div>`;
                    }

                    newExperimentElement += "</li>";
                    experimentlist.insertAdjacentHTML('beforeend', newExperimentElement);        
                });
            }
            clearInterval(interval);
        }
    }, 10)
}
function toggleFriendExpand(index) {
    friends.forEach((friend, i) => {
    if (i !== index) {
        friend.expanded = false;
    }
  });
  friends[index].expanded = !friends[index].expanded;
  renderFriendsList();
}
function renderFriendsList()
{
    const interval = setInterval(() => {
        if(document.getElementById('friend-list'))
        {
            if(isCurrentPage("friends"))
            {
                const friendlist = document.getElementById('friend-list');
                while (friendlist.firstChild) {
                    friendlist.removeChild(friendlist.lastChild);
                }        
                friends.forEach((friend, i) => {
                    var newFriendElement = 
                    `<li class="friend">
                        <button class="friend-button" onclick="toggleFriendExpand(${i})">
                            <span class="subtitle">${friend.name}</span>
                        </button>`;
                    
                    if(friend.expanded)
                    {
                        newFriendElement += 
                        `<p> </p>
                        <div class="expanded-friend">
                            <p class="body-text">${friend.description}</p>
                            <a href=${friend.link} target="_blank" rel="noopener noreferrer">
                                <p class="body-text-link">Link</p>
                            </a>
                        </div>`;
                    }

                    newFriendElement += "</li>";
                    friendlist.insertAdjacentHTML('beforeend', newFriendElement);        
                });
            }
            clearInterval(interval);
        }
    }, 10)
}

let projects = [
    { 
        name: 'syweav', 
        description: 'WIP system configuration and package management software', 
        image: null,
        link: null ,
        sourceLink: null,
    },
    {
        name: 'lyrbd',
        description: 'Music player daemon complete with playlists. Designed to easily integrate with window manager hotkeys.',
        image: null,
        link: null,
        sourceLink: null
    },
    {
        name: 'Unnamed Library Simulator',
        description: 'A WIP game where one can setup a library and organise books anyway they choose.',
        image: null,
        link: null,
        sourceLink: null
    },
    {
        name: 'Unnamed Space Combat Game',
        description: 'A WIP game where one can construct a ship and use it in combat. The more parts you add the more separate systems you will have to manage.'
    },
    { 
        name: 'Unnamed Bulletin Board Software', 
        description: 'A WIP bulletin board program. Designed to be able to physically represent the linking of ideas.', 
        image: null,
        link: null, 
        sourceLink: null,
    },
];
let experiments = [
    {
        name: 'Unnamed Game Engine',
        image: null,
        description: 'A WIP game engine.',
        link: null,
    },
    {
        name: 'Unnamed Physics Engine',
        image: null,
        description: 'A WIP physics engine to go with the aforemention game engine.',
        link: null,
    },
    {
        name: 'Unit Raycast Car Controller',
        image: null,
        description: 'A raycast car controller I made for unity games as an experiment.',
        link: 'https://github.com/ilikefrogs101/Raycast-Car-Controller'
    }
];
let friends = [
    { 
        name: 'QuazarCG', 
        description: '"Amature 3d modeller, always wanted to get into game development. I use Blender and Godot"', 
        link: 'https://www.youtube.com/@QuazarCGI',
    },
    { 
        name: 'Lyvri', 
        description: '"A young programmer that programs. makes inexpensive games."', 
        link: 'https://sites.google.com/view/mysticaldevelopers/home',
    },
];