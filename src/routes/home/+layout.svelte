<script lang="ts">
    import { page } from "$app/stores";
</script>

<div class="navbar bg-base-100 flex justify-between">
    <img src="/logo-devlinks-large.svg" alt="devlinks logo">
    <div>
        <a href="/home/links" class="btn btn-secondary">Links</a>
        <a href="/home/profile" class="btn btn-link ml-8">Profile Details</a>
    </div>

    <button class="btn btn-outline btn-primary">Preview</button>
</div>

<slot />