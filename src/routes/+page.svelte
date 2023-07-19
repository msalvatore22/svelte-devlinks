<script>
    import { user } from "$lib/firebase"
    import { signOut } from "firebase/auth";
    import { auth } from "$lib/firebase";


    async function handleSignOut(){
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        });
    }


</script>

{#if !$user}

<main class="flex flex-col justify-center items-center w-screen h-screen bg-neutral">
    <a class="absolute top-6 right-8 btn btn-outline btn-primary" href="/auth/login">Login</a>
    <div class="flex flex-col justify-center items-center">
        <h1 class="text-4xl font-bold">Welcome to </h1>
        <img class="w-96 my-10" src="/logo-devlinks-large.svg" alt="devlinks logo">
        <p class="text-primary text-lg mb-6">Customize and share your links to the world!</p>
        <a href="/auth/create" class="btn btn-primary">Get started</a>
    </div>
</main>

{:else}

<button on:click={handleSignOut} class="absolute top-6 right-8 btn btn-outline btn-primary">Sign out</button>
<h1>User logged in {$user.email}</h1>

{/if}
