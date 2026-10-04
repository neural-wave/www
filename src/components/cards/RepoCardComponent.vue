<template>
  <div class="flex flex-col items-start bg-[#160D2F]/20 border border-nw-border rounded-[8px] p-7 gap-5">
    <div class="absolute flex -translate-y-9.2 -translate-x-1.75">
      <img
          v-for="prize in repo.prizes"
          :src="getImage(prize)"
          class="w-6 h-6"
          alt="project winner"
      />
    </div>

    <div class="flex items-center gap-5">
      <span class="font-bold text-2xl text-left">{{ repo.team }}</span>

      <a :href="repo.url" target="_blank">
        <img src="../../assets/icons/github-line.svg" class="w-5 h-5" alt="twitter logo icon"/>
      </a>
    </div>

    <span class="text-justify font-medium">{{ repo.project }}</span>
  </div>
</template>

<script lang="ts">
import {PropType} from "vue";
import {Repo} from "@/store/repos.ts";

export default {
  name: 'RepoCardComponent',
  props: {
    repo: {
      type: Object as PropType<Repo>,
      required: true
    }
  },
  methods: {
    getImage(name: string) {
      return new URL(`../../assets/icons/${name}.svg`, import.meta.url).href
    },
  }
}
</script>
