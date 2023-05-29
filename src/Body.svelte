<script>
    import Chat from "./Chat.svelte";
</script>

<div class="body">
    <div class="body-content">
        {#if chat}
            <Chat/>
        {/if}
    </div>
</div>

<style>
    .body {
        background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
        height: calc(100vh - 64px);
        min-height: 300px;
    }

    .body-content {
        border: 1px solid white;
        
    }
</style>