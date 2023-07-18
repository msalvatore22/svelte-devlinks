<script lang="ts">

</script>


<div class="card w-[480px] bg-base-100 shadow-xl">
    <div class="card-body w-full">
    <h1 class="card-title text-3xl">Login</h1>
    <p class='text-gray mb-6'>Add your details below to get back into the app</p>
    <div class="form-control w-full">
        <label for="email" class="label">
        <span class="label-text">Email address</span>
        </label>
        <input id="email" type="text" placeholder="e.g. alex@email.com" class="input input-bordered w-full mb-4" />
        <label for="password" class="label">
            <span class="label-text">Password</span>
        </label>
        <input id="password" type="text" placeholder="Enter your password" class="input input-bordered w-full mb-4" />
    </div>
    <div class="card-actions">
        <button class="btn btn-primary w-full mb-4">Login</button>
    </div>
    <p class='text-gray text-center'>Don't have an account? <a class="text-primary" href="/auth/create">Create account</a></p>
    </div>
</div>

