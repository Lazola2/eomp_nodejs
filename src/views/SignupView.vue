<template lang="">
    <div class="backgroundimg">
        <div class="loginPage">
            <div class="loginLeft">
                <signupForm></signupForm>
            </div>
            <div class="loginRight">
                <signupDesc></signupDesc>
            </div>
       </div>
    </div>
</template>
<script>
import signupForm from '@/components/SignupForm.vue'
import signupDesc from '@/components/SignupDesc.vue'

export default {
    name: 'signupView',
    components: {
        signupForm,
        signupDesc
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
.signupDesc {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>