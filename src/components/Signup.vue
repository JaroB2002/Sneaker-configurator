<script setup>
    //import ref, reactive and onMounted from 'vue';
    import { ref, reactive, onMounted } from 'vue';
    const email = ref('');
    const password = ref('');
    
    const signUp = async () => {
    try {
        const response = await fetch('https://sneaker-api-4zoy.onrender.com/users/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: email.value,
            password: password.value
        })
        });

        const json = await response.json();

        if (json.status === 'success') {
            let feedback = document.querySelector('.alert');
                feedback.textContent = "Account created successfully";
                feedback.classList.remove('hidden');
            let token = json.data.token;
                localStorage.setItem('token', token);
                window.location.href = "/";
        }else{
            let feedback = document.querySelector('.alert');
                feedback.textContent = "Account creation failed";
                feedback.classList.remove('hidden');
        }
    } catch (error) {
        console.error('Error during signup:', error);
    }
    };
</script>
<template>
    <div class="relative md:h-screen flex overflow-hidden">
        <div class="flex flex-col sm:flex-row items-center md:items-start sm:justify-center flex-auto min-w-0 bg-white md:my-0 my-8">
            <div class="md:flex md:items-center md:justify-center w-full md:h-full sm:rounded-lg md:rounded-none bg-white px-6">
                <div class="max-w-md w-full mx-auto">
                    <div>
                        <img class="mx-auto h-12 w-auto" src="Logo.png" alt="Logo project komt er nog in">
                        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign up</h2>
                        <p class="mt-2 text-center text-sm text-gray-600"> of log in met je <a href="/" class="font-medium text-indigo-600 hover:text-indigo-500">account</a>.</p>
                    </div>
                    <div class="mt-8 space-y-6">
                        <div  class=" alert hidden bg-blue-100 border-t-4 border-blue-500 rounded-b text-blue-900 px-4 py-3 shadow-md">
                            Here is some feedback
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label for="email" class="sr-only">Email</label>
                                <input  id="email"  v-model="email" name="email" type="text" autocomplete="email" required class="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Email address">
                            </div>
                            <div>
                                <label for="password" class="sr-only">Wachtwoord</label>
                                <input v-model="password" id="password" name="password" type="password" autocomplete="current-password" required class="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Password">
                            </div>
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                <label for="remember-me" class="ml-2 block text-sm text-gray-900">Onthoud mijn gegevens</label>
                            </div>
                            <div class="text-sm">
                                <a href="reset_password.php" class="font-medium text-indigo-600 hover:text-indigo-500">Wachtwoord vergeten?</a>
                            </div>
                        </div>
                        <div>
                            <button  @click="signUp" type="submit" class="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                                    </svg>
                                </span> Registreer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sm:w-2/4 md:flex">
            <img class="w-full object-cover" src="https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg" alt="">
        </div>
    </div>
</template>

<style scoped>
</style>
