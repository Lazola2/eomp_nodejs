<template lang="">
    <div class="backgroundimg">
       <div class="loginPage">
            <div class="loginLeft">
                <description></description>
            </div>
            <div class="loginRight">
                <loginForm></loginForm>
            </div>
       </div>
    </div>
</template>
<script>
import loginForm from '@/components/LoginForm.vue'
import description from '@/components/Description.vue'
export default {
    name: 'loginView',
    components: {
        loginForm,
        description
    }
}
</script>
<style scoped>
    .loginPage {
        width: 100vw;
        height: 100vh;
        display: flex;
    }

    .loginLeft {
        width: 100%;
        padding: 12rem 0 0 12rem;
        padding-top: 8rem;
    }

    .loginRight {
        width: 100%;
        padding: 12rem 15rem 0 5rem;
        padding-top: 8rem; 
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .description {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>