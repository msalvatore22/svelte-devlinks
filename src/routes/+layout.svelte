<script lang="ts">
    import { db, user, userData } from "$lib/firebase";
    import "../app.css"

    $user
    $userData
</script>


<div class="w-screen min-h-screen bg-neutral p-8">
    <slot />
</div>


<style>
    @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;600;700&display=swap');
</style>