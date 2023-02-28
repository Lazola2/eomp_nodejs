<template lang="">
    <div class="admin_desc">
        <div class="create info">
            <i class="fa-regular fa-square-plus"></i>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iste cumque sunt enim odio libero, nobis tempora in culpa veniam?</p>
        </div>
        <div class="read info">
            <i class="fa-solid fa-up-right-from-square"></i>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam ratione labore obcaecati cumque eum aliquam reiciendis, deleniti doloribus dolorem laborum?</p>
        </div>
        <div class="update info">
            <i class="fa-solid fa-pen-to-square"></i>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nostrum distinctio maiores repellat fugiat aliquid neque odit temporibus odio praesentium.</p>
        </div>
        <div class="delete info">
            <i class="fa-solid fa-trash"></i>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat provident accusamus iusto numquam iste dicta incidunt veniam facilis nisi aperiam?</p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .admin_desc {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 65vh;
        border: none;
        border-right: 3px solid var(--theme-color);
        padding: 2rem;
        gap: 2rem;
        
    }

    .info {
        display: flex;
        gap: 3rem;
        width: 90%;
        align-items: center;
        color: var(--theme-color);
    }

    .info i {
        scale: 4;
    }
    
    .info p {
        color: var(--theme-color)
    }
</style>