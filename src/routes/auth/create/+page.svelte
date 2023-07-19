<script lang="ts">
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "$lib/firebase";
import {
    goto,
} from '$app/navigation';

let email = ''
let password = ''
let confirm = ''

$: invalidEmail = false
$: isEmptyEmail = false
$: passwordMatch = true
$: passwordLength = true
$: validForm = !invalidEmail && !isEmptyEmail && passwordMatch && passwordLength

function checkEmail(){
    if(email.length === 0){
        isEmptyEmail = true
        invalidEmail = false
    } else {
        invalidEmail = !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        isEmptyEmail = false
    }
}

function checkPasswordMatch(){
    passwordMatch = password === confirm
}

function checkPasswordLength(){
    if(password.length !== 0){
        passwordLength = password.length >= 8
    }
}

async function createUser(e: SubmitEvent){
    email = email.toLowerCase().trim()

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user)
            if(user){
                goto('/')
            }
            // ...
        })
        .catch((err) => {
            console.log(err.code);
            console.log(err.message);
        });
}

</script>


<div class="card bg-base-100 shadow-xl w-[480px]">
    <div class="card-body">
    <h1 class="card-title text-3xl">Create account</h1>
    <p class="mb-6 text-gray">Let's getyou started sharing your links!</p>
    <form on:submit|preventDefault={createUser} novalidate class="form-control w-full">
        <label for="email" class="label invalid:text-error">
            <span class="label-text">Email address</span>
        </label>
        <div class="flex relative">
            <input 
            bind:value={email}
            on:blur={checkEmail} 
            id="email" 
            type="email" 
            placeholder="e.g. alex@email.com" 
            autocomplete="email"
            class="input input-bordered w-full mb-4 focus:border-primary invalid:[&:not(:placeholder-shown):not(:focus)]:border-error"
            required
            />
            {#if invalidEmail}
                <p class="text-error text-sm absolute top-3 right-3">Invalid email</p>
            {/if}
            {#if isEmptyEmail}
                <p class="text-error text-sm absolute top-3 right-3">Can't be empty</p>
            {/if}
        </div>
        <label for="password" class="label">
            <span class="label-text">Password</span>
        </label>
        <div class="flex relative">
            <input 
            bind:value={password}
            on:blur={checkPasswordLength}
            id="password" 
            type="password" 
            placeholder="Enter your password" 
            class="input input-bordered w-full mb-4 peer invalid:[&:not(:placeholder-shown):not(:focus)]:border-error" 
            required
            />
            {#if !passwordLength}
                <p class="text-error text-sm absolute right-3 top-3">Please check again</p>
            {/if}
        </div>
        <label for="confirm" class="label">
            <span class="label-text">Confirm password</span>
        </label>
        <div class="flex relative">
            <input 
            bind:value={confirm} 
            on:input={checkPasswordMatch}
            id="confrim" 
            type="password" 
            placeholder="At least 8 characters" 
            class="input input-bordered w-full mb-4" 
            required
            />
            {#if !passwordMatch}
                <p class="text-error text-sm absolute right-3 top-3">Passwords do not match</p>
            {/if}
        </div>

        <p class="text-sm text-gray mb-4">Password must contain at least 8 characters</p>
        <div class="card-actions">
            <button disabled={!validForm} type="submit" class="btn btn-primary w-full mb-4 group-invalid:pointer-events-none group-invalid:opacity-30">Create new account</button>
        </div>
    </form>
    <p class="text-gray text-center">Already have an account? <a class="text-primary" href="/auth/login">Login</a></p>
    </div>
</div>

