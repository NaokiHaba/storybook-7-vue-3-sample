<script setup lang="ts">

import MyButton from "./MyButton.vue"

const props = defineProps({
  isLoggedIn: {
    type: Boolean,
    required: true
  }
})

const emits = defineEmits([ 'login', 'logout', 'signup' ])

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
<
style scoped >
header {
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 45px;
  background-color: #fff;
}

h1 {
  font-weight: 900;
  font-size: 20px;
  line-height: 1;
  margin: 6px 0 6px 10px;
  display: inline-block;
  vertical-align: top;
}

button + button {
  margin-left: 10px;
}

@media screen and (max-width: 720px) {
  .buttons {
    display: none;
  }
}
</style>