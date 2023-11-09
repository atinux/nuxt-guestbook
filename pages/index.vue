<script setup>
const toast = useToast()
const { user, loggedIn } = useUserSession()
const { data: comments, refresh } = await useFetch('/api/comments')

const userComment = computed(() => comments.value?.find(comment => comment.author === user.value?.username))
const userCommentBody = ref(userComment.value?.body || '')
const editing = ref(userComment.value ? false : true)
const otherComments = computed(() => comments.value?.filter(comment => comment.author !== user.value?.username))

async function saveComment() {
  if (!userCommentBody.value.trim()) return
  editing.value = false
  await $fetch('/api/comment', {
    method: 'PUT',
    body: {
      body: userCommentBody.value.trim()
    }
  })
  .then(() => {
    toast.add({
      title: 'Comment saved.'
    })
    refresh()
  })
  .catch(err => {
    editing.value = true
    toast.add({
      title: 'An error occured',
      description: err.message,
      color: 'red'
    })
  })
}
</script>

<template>
  <UPageBody>
    <UPageColumns>
      <UPageCard v-if="loggedIn" @dblclick="editing = true">
        <UButton v-if="!editing" color="gray" variant="ghost" icon="i-heroicons-pencil" square size="xs" class="absolute right-2 top-2" @click="editing = true" />
        <UTextarea v-if="editing" v-model="userCommentBody" class="p-0" :rows="1" :autoresize="true" :autofocus="true" @blur="saveComment" />
        <q v-else class="italic text-lg">
          {{ userCommentBody }}
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
          Login to comment
        </UButton>
      </UPageCard>
      <UPageCard v-for="comment of otherComments" :key="comment.id" :to="`https://github.com/${comment.author}`" target="_blank">
        <q class="italic text-lg">
          {{ comment.body }}
        </q>
        <div class="flex gap-2 items-center mt-4">
          <UAvatar
            :src="`https://github.com/${comment.author}.png`"
            loading="lazy"
            :alt="comment.author"
            size="md"
          />
          <p class="font-semibold">
            {{ comment.author }}
          </p>
        </div>
      </UPageCard>
    </UPageColumns>
  </UPageBody>
</template>
