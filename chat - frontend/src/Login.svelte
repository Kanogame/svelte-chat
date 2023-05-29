<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  let user = '';
  let erMsg = '';

  function submit() {
    if (!user) {
      erMsg = 'Имя должно быть задано';
      return;
    }
    dispatch('loginEntered', user);
  }
</script>

<form on:submit|preventDefault={submit}>
  <input type="text" placeholder="Имя" bind:value={user}>
  {#if erMsg}
    <div>{erMsg}</div>
  {/if}
  <button type="submit">В чат</button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 50px 15px;
  }

  input {
    height: 40px;
    padding: 0 12px;
    border: 1px solid transparent;
    outline: 0;
    transition: all .2s ease-out;
  }

  input:focus {
    border: 1px solid violet;
  }

  button {
    border: 0;
    outline: 0;
    height: 40px;
    display: block;
    width: 100%;
    background: rgb(234, 22, 234);
    color: #fff;
    transition: all .2s ease-out;
  }

  button:hover {
    transform: scale(1.1);
  }
</style>