<template lang="">
    <div class="description">
        <p class="orange">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni earum quos fuga eligendi optio temporibus eos eaque molestiae dolores quod.</p>
    </div>
</template>
<script>
export default {
    name: 'description'
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@500&display=swap');
    .description {
        height: 70vh;
        width: 100%;
        border: none;
        border-right: 3px solid var(--theme-color);
        padding: 2rem;
    }
    .description p {
        font-size: 25px;
        font-family: 'Nunito', sans-serif;
        text-align: center;
    }

   
    
</style>