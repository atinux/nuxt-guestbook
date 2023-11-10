<script setup>
const { loggedIn, clear } = useUserSession()

useSeoMeta({
  title: 'Nuxt Guestbook',
  description:
    'A Nuxt demo hosted with Edge-side rendering, authentication and queyring a SQLite database'
})
</script>

<template>
  <UHeader>
    <template #logo>
      Nuxt Guestbook
    </template>
    <template #right>
      <UColorModeButton />
      <UButton v-if="loggedIn" color="gray" @click="clear">
        Logout
      </UButton>
      <UButton v-else icon="i-simple-icons-github" color="gray" to="/auth/github" external>
        Login with GitHub
      </UButton>
    </template>
  </UHeader>
  <UContainer>
    <NuxtPage />
  </UContainer>
</template>
