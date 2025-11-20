<template>
  <div
    class="flex flex-col items-center gap-4 font-sans h-full
    justify-center bg-blue-300"
  >
    <div class="mx-auto">
      <DynamicSeparator class="text-white font-bold text-3xl">
        <span v-if="data.count">Count: {{ data.count }}</span>

        <span v-if="data.location.length">{{ data.location.join(', ') }}</span>

        <span v-if="data.salary">${{ formatSalary(data.salary) }}</span>

        <div v-if="data.timestamp">{{ calculateDaysAgo(data.timestamp) }} days ago</div>
      </DynamicSeparator>
    </div>
    <button
      class="bg-blue-900 hover:bg-blue-400 text-white font-bold py-2 px-4
      rounded-lg w-[200px] cursor-pointer transition-all duration-300"
      @click="$router.push('/')"
    >
      Go to Puzzle page
    </button>
  </div>
</template>

<script setup lang="ts">
const data = { count: 12, location: ['Warszawa', 'Poland'], salary: '123123', timestamp: '2024-07-07T07:07:07.123Z' }

function calculateDaysAgo (dateString: string): number {
  const now = Date.now()
  const then = new Date(dateString).getTime()

  const diffMs = now - then
  return Math.floor(diffMs / (1000 * 60 * 60 * 24))
}

function formatSalary (value: string | null): string | null {
  if (!value) return null
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
</script>
