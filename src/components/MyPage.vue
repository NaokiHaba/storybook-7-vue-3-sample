<script setup lang="ts">

import { ref } from "vue"
import MyHeader from "./MyHeader.vue"

type User = {
  id: number;
}

const user = ref<User | null>(null)

function login() {
  user.value = {id: 1}
}

function logout() {
  user.value = null
}

function signup() {
  alert("新規登録")
}

</script>

<template>

  <div>
    <MyHeader :is-logged-in="!!user" @login="login" @logout="logout" @signup="signup"/>
    <main>
      <div class="content-wrapper">
        <div class="content" :key="i" v-for="i in 20">
          {{ "コンテンツがここに表示されます".repeat(20) }}
        </div>
      </div>
    </main>
  </div>

</template>

<style>
.content-wrapper {
  background-color: #fff;
  padding: 25px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 25px;
  row-gap: 1em;
}
@media screen and (max-width: 720px) {
  .content-wrapper {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media screen and (min-width: 721px) and (max-width: 1024px) {
  .content-wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>