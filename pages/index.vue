<script setup>
const toast = useToast()
const { user, loggedIn } = useUserSession()
const { data: quotes, refresh } = await useFetch('/api/quotes')

const userQuote = computed(() => quotes.value?.find(quote => quote.author === user.value?.username))
const userQuoteBody = ref(userQuote.value?.body || '')
const editing = ref(userQuote.value ? false : true)
const otherQuotes = computed(() => quotes.value?.filter(quote => quote.author !== user.value?.username))

async function saveQuote() {
  if (!userQuoteBody.value.trim()) return
  editing.value = false
  await useFetch('/api/quote', {
    method: 'PUT',
    body: {
      body: userQuoteBody.value.trim()
    }
  })
  toast.add({
    title: 'Quote saved!'
  })

  refresh()
}
</script>

<template>
  <UPageBody>
    <UPageColumns>
      <UPageCard v-if="loggedIn" @dblclick="editing = true">
        <UButton v-if="!editing" color="gray" variant="ghost" icon="i-heroicons-pencil" square size="xs" class="absolute right-2 top-2" @click="editing = true" />
        <UTextarea v-if="editing" v-model="userQuoteBody" class="p-0" :rows="1" :autoresize="true" :autofocus="true" @blur="saveQuote" />
        <q v-else class="italic text-lg">
          {{ userQuoteBody }}
        </q>
        <div class="flex gap-2 items-center mt-4">
          <UAvatar
            :src="`https://github.com/${user.username}.png`"
            loading="lazy"
            :alt="user.username"
            size="md"
          />
          <p class="font-semibold">
            {{ user.username }}
          </p>
        </div>
      </UPageCard>
      <UPageCard v-else :ui="{ wrapper: 'text-center' }">
        <UButton to="/auth/github" external color="black" icon="i-simple-icons-github">
          Login to add a quote
        </UButton>
      </UPageCard>
      <UPageCard v-for="quote of otherQuotes" :key="quote.id" :to="`https://github.com/${quote.author}`" target="_blank">
        <q class="italic text-lg">
          {{ quote.body }}
        </q>
        <div class="flex gap-2 items-center mt-4">
          <UAvatar
            :src="`https://github.com/${quote.author}.png`"
            loading="lazy"
            :alt="quote.author"
            size="md"
          />
          <p class="font-semibold">
            {{ quote.author }}
          </p>
        </div>
      </UPageCard>
    </UPageColumns>
  </UPageBody>
</template>
