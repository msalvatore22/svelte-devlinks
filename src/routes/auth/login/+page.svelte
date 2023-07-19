<script lang="ts">

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "$lib/firebase";
import {
    goto,
} from '$app/navigation';

let email = ''
let password = ''

async function handleSignIn(){
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            if(user){
                goto('/')
            }
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}


</script>


<div class="card w-[480px] bg-base-100 shadow-xl">
    <div class="card-body w-full">
    <h1 class="card-title text-3xl">Login</h1>
    <p class='text-gray mb-6'>Add your details below to get back into the app</p>
    <form on:submit|preventDefault={handleSignIn} novalidate class="form-control w-full">
        <label for="email" class="label">
            <span class="label-text">Email address</span>
        </label>
        <input 
            bind:value={email}
            id="email" 
            type="email" 
            placeholder="e.g. alex@email.com" 
            autocomplete="email"
            class="input input-bordered w-full mb-4 focus:border-primary invalid:[&:not(:placeholder-shown):not(:focus)]:border-error"
            required
        />
        <label for="password" class="label">
            <span class="label-text">Password</span>
        </label>
        <input 
            bind:value={password}
            id="password" 
            type="password" 
            placeholder="Enter your password" 
            class="input input-bordered w-full mb-4 peer invalid:[&:not(:placeholder-shown):not(:focus)]:border-error" 
            required
        />
        <div class="card-actions">
            <button class="btn btn-primary w-full mb-4">Login</button>
        </div>
        <p class='text-gray text-center'>Don't have an account? <a class="text-primary" href="/auth/create">Create account</a></p>

    </form>
    </div>  
</div>

