<template>
  <div class="flex w-[600px]">
    <template v-for="(node, i) in visible" :key="i">
      <component
        :is="node"
        class="before:mx-2 flex-none w-auto"
        :class="{ 'container' : i !== 0 }"
        :data-content="separator"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    separator?: string
  }>(),
  {
    separator: '·'
  }
)

const slots = useSlots()
const visible = slots.default?.()
</script>
<style>
.container:empty {
  display: none;
}
.container::before {
  content: attr(data-content);
}
</style>
