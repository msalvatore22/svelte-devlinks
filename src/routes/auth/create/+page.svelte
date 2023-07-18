<script lang="ts">

</script>


<div class="card bg-base-100 shadow-xl w-[480px]">
    <div class="card-body">
    <h1 class="card-title text-3xl">Create account</h1>
    <p class="mb-6 text-gray">Let's getyou started sharing your links!</p>
    <div class="form-control w-full">
        <label for="email" class="label">
            <span class="label-text">Email address</span>
        </label>
        <input id="email" type="text" placeholder="e.g. alex@email.com" class="input input-bordered w-full mb-4" />
        <label for="password" class="label">
            <span class="label-text">Password</span>
        </label>
        <input id="password" type="text" placeholder="Enter your password" class="input input-bordered w-full mb-4" />
        <label for="confirm" class="label">
            <span class="label-text">Confirm password</span>
        </label>
        <input id="confrim" type="text" placeholder="At least 8 characters" class="input input-bordered w-full mb-4" />
    </div>
    <p class="text-sm text-gray mb-4">Password must contain at least 8 characters</p>
    <div class="card-actions">
        <button class="btn btn-primary w-full mb-4">Create new account</button>
    </div>
    <p class="text-gray text-center">Already have an account? <a class="text-primary" href="/auth/login">Login</a></p>
    </div>
</div>

