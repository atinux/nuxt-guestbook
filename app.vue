<script setup>
const { loggedIn, clear } = useUserSession()
useHead({
  htmlAttrs: { lang: 'en' },
})

useSeoMeta({
  title: 'Nuxt Quotes',
  description:
    'A Nuxt demo hosted with Edge-side rendering, authentication and queyring a SQLite database'
})
</script>

<template>
  <UHeader>
    <template #logo>
      Nuxt Quotes
    </template>
    <template #right>
      <UColorModeButton />
      <UButton v-if="loggedIn" color="gray" @click="clear">
        Logout
      </UButton>
      <UButton v-else to="/auth/login" external color="gray">
        Login
      </UButton>
    </template>
  </UHeader>
  <UContainer>
    <NuxtPage />
  </UContainer>
</template>
