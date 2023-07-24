<script lang="ts">

    const menuItems = [
        {
            "platform": "GitHub",
            "baseURL": "https://www.github.com/",
            "iconPath": "/icon-github.svg"
        },
        {
            "platform": "Frontend Mentor",
            "baseURL": "https://www.frontendmentor.io/",
            "iconPath": "/icon-frontend-mentor.svg"
        },
        {
            "platform": "Twitter",
            "baseURL": "https://www.twitter.com/",
            "iconPath": "/icon-twitter.svg"
        },
        {
            "platform": "LinkedIn",
            "baseURL": "https://www.linkedin.com/",
            "iconPath": "/icon-linkedin.svg"
        },
        {
            "platform": "Youtube",
            "baseURL": "https://www.youtube.com/",
            "iconPath": "/icon-youtube.svg"
        },
        {
            "platform": "Facebook",
            "baseURL": "https://www.facebook.com/",
            "iconPath": "/icon-facebook.svg"
        },
        {
            "platform": "Twitch",
            "baseURL": "https://www.twitch.tv/",
            "iconPath": "/icon-twitch.svg"
        },
        {
            "platform": "Dev.to",
            "baseURL": "https://www.dev.to/",
            "iconPath": "/icon-devto.svg"
        },
        {
            "platform": "Codewars",
            "baseURL": "https://www.codewars.com/",
            "iconPath": "/icon-codewars.svg"
        },
        {
            "platform": "Codepen",
            "baseURL": "https://www.codepen.io/",
            "iconPath": "/icon-codepen.svg"
        },
        {
            "platform": "freeCodeCamp",
            "baseURL": "https://www.freecodecamp.org/",
            "iconPath": "/icon-freecodecamp.svg"
        },
        {
            "platform": "GitLab",
            "baseURL": "https://www.gitlab.com/",
            "iconPath": "/icon-gitlab.svg"
        },
        {
            "platform": "Hashnode",
            "baseURL": "https://www.hashnode.com/",
            "iconPath": "/icon-github.svg"
        },
        {
            "platform": "Stack Overflow",
            "baseURL": "https://www.stackoverflow.com/",
            "iconPath": "/icon-stack-overflow.svg"
        }
    ]

    let selected: { platform: string, baseURL: string, iconPath: string }
    let link: string

</script>

<div class="flex flex-col bg-neutral w-full p-6 rounded-xl">
    <div class="flex justify-between">
        <img src="/icon-drag-and-drop.svg" alt="drag and drop icon">
        <button class="btn btn-ghost">Remove</button>
    </div>  
    <form class="form-control w-full">
        <label for="platform" class="label">
            <span class="label-text">Platform</span>
        </label>
        <select id="platform" bind:value={selected} class="select select-bordered">
            {#each menuItems as item }
                <option value={item}>{item.platform}</option>
            {/each}
        </select>
        <label for="link" class="label">
            <span class="label-text">Link</span>
        </label>
        <input 
            id="link"
            bind:value={link}
            class="input input-bordered w-full"
            placeholder={'e.g. ' + selected?.baseURL}
        />
    </form>
</div>

