<script>
    import { user } from "$lib/firebase"

</script>

{#if $user}
  <slot />
{:else}
    <p class="text-error text-center">
        You must be signed in to view this page.
        <a class="btn btn-primary" href="/auth/login">Sign in</a>
    </p>
{/if}