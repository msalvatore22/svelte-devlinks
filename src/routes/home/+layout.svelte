<script lang="ts">
    import { page } from "$app/stores";

    import { signOut } from "firebase/auth";
    import { auth } from "$lib/firebase";
    import { goto } from "$app/navigation";


    async function handleSignOut(){
        signOut(auth).then(() => {
            // Sign-out successful.
            goto('/auth/login')
        }).catch((error) => {
        // An error happened.
        });
    }
</script>

<div class="navbar bg-base-100 flex justify-between rounded-xl p-4">
    <img src="/logo-devlinks-large.svg" alt="devlinks logo">
    <div>
        <a href="/home/links" class="btn btn-secondary">Links</a>
        <a href="/home/profile" class="btn btn-link ml-8">Profile Details</a>
    </div>
    <div>
        <button class="btn btn-outline btn-primary mr-8">Preview</button>
        <button on:click={handleSignOut}>Logout</button>
    </div>

</div>

<slot />