<script>
  import Message from "./Message.svelte";

  export let user;

  let backendIp = '127.0.0.1';
  // backendIp = '';
  let messages = null;
  let newMessage = '';
  load();

  async function load() {
    try {
      const resp = await fetch(`//${backendIp}:13531/api/messages_get`, {
        method: 'POST',
      });
      messages = await resp.json();
    } catch (er) {
      console.log(er);
      alert(er.message);
      return;
    }
  }

  async function sendMessage() {
    try {
      const resp = await fetch(`//${backendIp}:13531/api/message_add`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user,
          text: newMessage,
        }),
      });
      await resp.json();
    } catch (er) {
      console.log(er);
      alert(er.message);
      return;
    }
    newMessage = '';
    await load();
  }

  async function keydown(ev) {
    if (ev.key === 'Enter') {
      ev.preventDefault();
      await sendMessage();
    }
  }
</script>

{#if messages === null}
  <div class="loading">Загрузка...</div>
{:else}
  <div class="chat">
    <div class="msg-list">
      {#each messages as msg (msg.id)}
        <Message
          isMine={msg.user === user}
          {msg}
        />
      {/each}
    </div>
    <div class="new-message">
      <textarea
        bind:value={newMessage}
        placeholder='Сообщение'
        on:keydown={keydown}
      ></textarea>
      <button on:click={sendMessage}>Отпр.</button>
    </div>
  </div>
{/if}

<style>
  .loading {
    color: #fff;
    text-align: center;
    padding-top: 15px;
  }

  .chat {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .msg-list {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow-y: auto;
    padding: 15px 12px;
  }

  .new-message {
    flex: 0 0 auto;
    display: flex;
  }

  textarea {
    flex: 1 1 auto;
    resize: none;
    border: 0;
    outline: 0;
    padding: 7px 14px;
  }

  button {
    flex: 0 0 80px;
    background: #fff;
    border: 0;
    border-left: 1px solid #ddd;
    outline: 0;
  }
</style>