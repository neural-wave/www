<template>
  <div class="flex flex-col justify-center items-center gap-20 py-20 px-[50px]">
    <div class="flex flex-col justify-center items-center gap-9 py-20 sm:h-[calc(80vh-350px)]">
      <span class="text-5xl font-[500] text-center">Neural Wave {{ year }}</span>

      <div class="flex flex-wrap justify-center gap-6">
        <img src="../assets/pill/pill-location.svg" class="h-[35px]" alt="Lugano is the location of the hackathon" />
        <img src="../assets/pill/pill-date-24.svg" class="h-[35px]" alt="The hackathon lasts from the 25th to the 27th of October" />
      </div>
    </div>

    <div class="flex flex-row flex-wrap justify-center items-center gap-9">
      <stats-card-component v-for="stat in recap.statistics" :key="stat.title" :stat="stat"/>
    </div>

    <div class="flex flex-col items-center justify-center gap-10 mt-20 w-[100%]">
      <span class="text-3xl text-center">Gallery</span>

      <gallery-component :year="year" :images="recap.n_images" />
    </div>

    <div class="flex flex-col items-center justify-center gap-10 mt-20 w-[100%]">
      <span class="text-3xl text-center">Videos</span>

      <iframe class="w-[80%] h-[20vh] md:h-[50vh] lg:h-[80vh]"
        :src="recap.video"
        allow="encrypted-media; picture-in-picture"
        allowfullscreen 
      />
    </div>
    
    <iframe class="w-[80%] h-[20vh] md:h-[50vh] lg:h-[80vh]"
        :src="recap.tv"
        allow="encrypted-media; picture-in-picture"
        allowfullscreen
    />

    <div class="flex flex-col items-center justify-center gap-10 mt-20 w-[100%] md:w-[70%]">
      <span class="text-3xl text-center">Teams</span>

      <div class="flex flex-row flex-wrap justify-center items-center gap-9">
        <repo-card-component v-for="repo in repos" :key="repo.name" :repo="repo"/>
      </div>

      <div class="flex gap-8 flex-wrap justify-center">
        <span class="flex gap-2">
          <img src="../assets/icons/gold.svg" class="w-6 h-6" alt="gold medal"> Global First Prize
        </span>

        <span class="flex gap-2">
          <img src="../assets/icons/silver.svg" class="w-6 h-6" alt="silver medal"> Global Second Prize
        </span>

        <span class="flex gap-2">
          <img src="../assets/icons/bronze.svg" class="w-6 h-6" alt="bronze medal"> Global Third Prize
        </span>

        <span class="flex gap-2">
          <img src="../assets/icons/project.svg" class="w-6 h-6" alt="project medal"> Project Winner
        </span>
      </div>
    </div>

    <companies-section-component class="mt-20" :year="year" />
    <team-section-component class="mt-20" :year="year" />
  </div>
</template>

<script lang="ts">
import StatsCardComponent from "@/components/cards/StatsCardComponent.vue";
import {mapActions} from "pinia";
import {Recap, useRecapsStore} from "@/store/recaps.ts";
import {Repo, useReposStore} from "@/store/repos.ts";
import GalleryComponent from "@/components/GalleryComponent.vue";
import RepoCardComponent from "@/components/cards/RepoCardComponent.vue";
import CompaniesSectionComponent from "@/components/sections/CompaniesSectionComponent.vue";
import TeamSectionComponent from "@/components/sections/TeamSectionComponent.vue";

export default {
  name: "RecapView",
  components: {
    CompaniesSectionComponent,
    RepoCardComponent, 
    GalleryComponent,
    StatsCardComponent,
    TeamSectionComponent,
  },
  data() {
    return {
      year: Number(this.$route.params.year),
      recap: {} as Recap,
      repos: [] as Repo[],
    }
  },
  mounted() {
    this.recap = this.getRecapByYear()(this.year)
    this.repos = this.getReposByYear()(this.year)
  },
  methods: {
    ...mapActions(useRecapsStore, ['getRecapByYear']),
    ...mapActions(useReposStore, ['getReposByYear']),
  }
}
</script>
