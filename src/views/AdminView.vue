<template lang="">
    <div class="backgroundimg">
        <div class="loginPage">
            <div class="loginLeft">
                <adminDesc class="admin_description"></adminDesc>
            </div>
            <div class="loginRight">
                <adminForm></adminForm>
            </div>
        </div>
    </div>
</template>
<script>
import adminForm from '@/components/AdminForm.vue'
import adminDesc from '@/components/AdminDesc.vue'
export default {
    name: 'adminView',
    components: {
        adminForm,
        adminDesc
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
.admin_description {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>