<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
})

const isOpen = ref(false)
</script>

<template>
  <div>
    <UButton :label="label" @click="isOpen = true" />

    <UModal v-model="isOpen">
      <div class="p-4">
        <UButton icon="i-simple-icons-github" color="black" to="/auth/github" external>
          Github
        </UButton>
        <UButton icon="i-simple-icons-github" color="black" to="/auth/google" external>
          Github
        </UButton>
      </div>
    </UModal>
  </div>
</template>

