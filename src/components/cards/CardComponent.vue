<template>
  <div class="flex flex-col items-start w-[320px] bg-[#160D2F]/20 border border-nw-border rounded-[8px] p-7 gap-7">
    <img :src="getIcon()" :alt="`${icon} icon`" class="w-15" />

    <div class="flex flex-col gap-2">
      <span class="text-xl font-bold">{{ title }}</span>
      <span class="text-justify"> <slot /> </span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CardComponent',
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    getIcon() {
      return new URL(`../../assets/icons/${this.icon}.svg`, import.meta.url).href
    }
  }
}
</script>
