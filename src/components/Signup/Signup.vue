<script setup>
    //import ref, reactive and onMounted from 'vue';
    import { ref, reactive, onMounted } from 'vue';
    const email = ref('');
    const password = ref('');
    
    const signUp = async () => {
    try {
        const response = await fetch('http://localhost:3000/users/signup', {
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
  <div class="app">
        <h2 class="title">Create an account</h2>
        <div class="alert hidden">
            Here is some feedback
        </div>
        <div class="signup">
            <div>
            <label for="email">Email</label>
            <input type="text" class="input--text" name="email" id="email" v-model="email">
            </div>
            
            <div>
            <label for="password">Password</label>
            <input type="password" class="input--text" name="password" id="password" v-model="password">
            </div>
            
            <button @click="signUp" class="btn btn--primary">Let's go</button>
        </div>
    </div>
</template>

<style scoped>
* {box-sizing: border-box;}
html { height: 100%; display: flex; }

body
{
  font-family: Helvetica, sans-serif;
  background-color: #DDDDDD;
  margin: auto;
}

.input--text::placeholder
{
  color: #ccc;
}

.input--text
{
  font-size: 1em;
  width: 100%;
  padding: 0.4em;
  color: #000;
  margin-bottom: 1em;
}

.app
{
  background-color: white;
  width: 400px;
  box-shadow: 0px 0px 1em #ccc;
  font-size: 1.25em;
  padding: 1em;
}
.todo
{
  border-top: 1px solid #ddd;
  color: #F94D35;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.8em;
}

.todo__delete
{
  margin-left: auto;
  color: blue;
}

.todo__delete:active
{
  color: red;
}

.todo__state
{
  margin-right: 0.5em;  
}

.todo--completed
{
  color: #fcb3a8;
}

.todo--completed .todo__text
{
  display: inline-block;
  position: relative;
}

.todo--completed .todo__state
{
  visibility: hidden;
}

.todo--completed .todo__state::before
{
  content: "✔";
  visibility: visible;  
  color: red;
  position: relative;
  top: -0.2em;
}

.todo--completed .todo__text::before
{
  content: " ";
  display: block;
  position: absolute;
  height: 0.1em;
  width: 100%;
  margin-top: calc(1em / 2 - 2px);
  border-bottom: 3px solid #F94D35;
}

.btn
{
  font-size: 1em;
  padding: 0.5em;
  font-weight: bold;
  border-radius: 0.2em;
  border: none;
  color: white;
  background-color: #F94D35;
  cursor: pointer;
}

.btn:active
{
  position: relative;
  top: 1px;
}

.hidden
{
  display:none;
}

.alert
{
  background-color: #B4C4E7;
  padding: 0.5em;
  margin-bottom: 1em;
  color: #32549d;
}
</style>
