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
        padding: 0 0 0 12rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .loginRight {
        width: 100%;
        padding: 0 15rem 0 5rem;
        
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