<script>
  // boolean
  export let isMine;
  // { id: number, user: string, text: string }
  export let msg;
</script>

<div class="message" class:is-mine={isMine}>
  <div class="user">{msg.user}</div>
  <div class="text">{msg.text}</div>
</div>

<style>
  .message {
    padding: 4px 7px;
    background: #fff;
    border-radius: 7px;
    width: max-content;
    max-width: 70%;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .message.is-mine {
    margin-left: auto;
    background: #d3ffad;
  }

  .user {
    font-size: 12px;
    font-weight: 500;
    color: rgb(210, 13, 210);
  }

  .text {
    font-size: 14px;
    /* overflow-x: hidden;
    text-overflow: ellipsis; */
    /* word-break: break-all; */
  }
</style>