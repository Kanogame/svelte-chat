<script>
  import Chat from "./Chat.svelte";
  import Login from "./Login.svelte";

  let inChat = false;
  let user = '';

  function toChat(ev) {
    user = ev.detail;
    inChat = true;
  }
</script>

<div class="body">
  <div class="body-content">
    {#if inChat}
      <Chat {user} />
    {:else}
      <Login on:loginEntered={toChat} />
    {/if}
  </div>
</div>

<style>
  .body {
    background: rgb(131,58,180);
    background: linear-gradient(131deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
    height: calc(100vh - 64px);
    /* min-height: 300px; */
  }

  .body-content {
    max-width: 400px;
    height: 100%;
    margin: 0 auto;
  }
</style>