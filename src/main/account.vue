<template>
    <div>
        <h1>这是account组件</h1>
        
    <router-link to="/account/login">login</router-link>
    <router-link to="/account/register">register</router-link>   

    <router-view></router-view>
    </div>
</template>
<script>
export default {
    
}
</script>
// 普通的 style 标签 支持 普通的样式 如果要启用 scss 或者less 需要为style 加上lang属性
<style>

</style>

