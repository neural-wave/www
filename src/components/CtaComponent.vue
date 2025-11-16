<template>
  <a v-if="!href.startsWith('/')" :href="href" target="_blank" class="relative h-fit w-fit">
    <img src="../assets/button/button-bg.svg" class="h-full w-[150px]" alt="CTA button background">

    <span class="absolute block m-auto top-0 bottom-0 left-0 right-0 w-fit h-fit font-[500] text-[15px] text-gray-300">
      <slot />
    </span>
  </a>

  <router-link v-else :to="href" class="relative h-fit w-fit">
    <img src="../assets/button/button-bg.svg" class="h-full w-[195px]" alt="CTA button background">

    <span class="absolute block m-auto top-0 bottom-0 left-0 right-0 w-fit h-fit font-[500] text-[15px] text-gray-300">
      <slot />
    </span>
  </router-link>
</template>

<script lang="ts">
export default {
  name: 'CtaComponent',
  props: {
    href: {
      type: String,
      required: true,
    },
  }
}
</script>
