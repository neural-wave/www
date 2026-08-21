<template>
  <main class="flex flex-col items-center px-[50px]">
    <hero-section-component />
    <companies-section-component class="mt-[100px]" :year="year" />
    <join-section-component class="my-[300px]" />
    <lugano-section-component class="mb-[300px]" />
    <team-section-component :year="year" />
    <final-section-component />
  </main>
</template>

<script lang="ts">
import {ArrowDown} from "@lucide/vue";
import CtaComponent from "@/components/CtaComponent.vue";
import HeroSectionComponent from "@/components/sections/HeroSectionComponent.vue";
import CompaniesSectionComponent from "@/components/sections/CompaniesSectionComponent.vue";
import JoinSectionComponent from "@/components/sections/JoinSectionComponent.vue";
import LuganoSectionComponent from "@/components/sections/LuganoSectionComponent.vue";
import TeamSectionComponent from "@/components/sections/TeamSectionComponent.vue";
import FinalSectionComponent from "@/components/sections/FinalSectionComponent.vue";

export default {
  name: 'HomeView',
  components: {
    FinalSectionComponent,
    TeamSectionComponent,
    LuganoSectionComponent,
    JoinSectionComponent,
    CompaniesSectionComponent,
    HeroSectionComponent,
    CtaComponent,
    ArrowDown,
  },
  data() {
    return {
      year: 2026,
    }
  }
}
</script>
