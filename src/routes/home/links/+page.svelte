<script lang="ts">
    import { userData } from "$lib/firebase";
</script>

<main class="grid grid-cols-40-auto gap-x-6 mt-8">
    <div class="flex justify-center bg-base-100 rounded-xl p-20">
        <img class="" src="/illustration-phone-mockup.svg" alt="phone outline">
    </div>
    <div class="bg-base-100 rounded-xl p-20">
        <h1 class="text-3xl font-bold">Customize your links</h1>
        <p class="text-gray mt-2">Add/edit/remove links below and then share all your profiles with the world!</p>
        <button class="btn btn-outline btn-primary w-full mt-10">+ Add new link</button>
        <div class="flex flex-col justify-center items-center bg-neutral p-10 rounded-xl mt-8">
            <img class='w-2/4' src="/illustration-empty.svg" alt="how to illustration">
            <div class="flex flex-col justify-center w-5/6 my-8">
                <h1 class="text-3xl font-bold text-center">Let's get you started</h1>
                <p class="text-center text-gray mt-8">Use the "Add new link" button to get started. Once you have more than one link, you can reorder and edit them. We're here to help you share your profiles with everyone!</p>
            </div>   
        </div>
        <div class="divider"></div>
        <div class="flex justify-end w-full">
            <button class="btn btn-primary">Save</button>
        </div>
    </div>

</main>