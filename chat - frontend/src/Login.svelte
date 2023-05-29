<script>
    function submit() {

    }
</script>

<form on:submit|preventDefault={submit}>
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
        padding: 0 17px;
    }

    input:focus {

    }

    button {
        border:  0;
        outline: 0;
        height: 40px;
        display: block;
        width: 100%;
            
    }


</style>