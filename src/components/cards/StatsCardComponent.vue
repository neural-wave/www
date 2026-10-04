<template>
  <div class="flex flex-col items-start bg-[#160D2F]/20 border border-nw-border rounded-[8px] p-7 gap-5 min-w-[148px] min-h-[148px]">
    <span class="font-bold text-5xl">{{ stat.value }}</span>
    <span class="text-justify font-medium">{{ stat.title }}</span>
  </div>
</template>

<script lang="ts">
import {Statistic} from "@/store/recaps.ts";
import {PropType} from "vue";

export default {
  name: 'StatsCardComponent',
  props: {
    stat: {
      type: Object as PropType<Statistic>,
      required: true
    }
  }
}
</script>
