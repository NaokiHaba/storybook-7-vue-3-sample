<script setup lang="ts">

import MyButton from "./MyButton.vue"

const props = defineProps({
  isLoggedIn: {
    type: Boolean,
    required: true
  },
})
</script>

<template>
  <header>
    <h1>Storybook 7 + Vue 3 + TypeScript サンプル</h1>

    <div class="button">
      <template v-if="props.isLoggedIn">
        <MyButton @click="$emit('logout')" label="ログアウト" size="small"/>
      </template>
      <template v-else>
        <MyButton @click="$emit('login')" label="ログイン" size="small"/>
        <MyButton @click="$emit('signup')" label="新規登録" size="small"/>
      </template>
    </div>
  </header>

</template>

<style scoped>

</style>