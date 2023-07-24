<script lang="ts">
  import { user, userData } from "$lib/firebase";

</script>

<h1>Profile</h1>
<p>{$user?.email}</p>
<p>{JSON.stringify($user)}</p>
<p>{JSON.stringify($userData)}</p>
<p>{$userData?.email}</p>