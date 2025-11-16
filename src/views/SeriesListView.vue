<template>
    <div class="h-[calc(100vh-445px)]">
        <div class="flex flex-col gap-6 w-full p-[50px] sm:p-[100px]">
            <span class="text-2xl font-bold">Previous Editions</span>
            <router-link to="/series/2024" class="hover:underline">
                <strong>1st Edition</strong> [2024] →
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
export default {
  name: "SeriesListView"
}
</script>
