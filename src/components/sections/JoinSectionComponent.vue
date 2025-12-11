<template>
  <div class="flex flex-col justify-center gap-20">
    <div class="flex flex-col items-center justify-center gap-4">
      <span class="text-3xl">Why Should I Join?</span>

      <span class="text-center opacity-60 max-w-[520px]">
        Here is what the Neural Wave hackathon will offer to its participants during the course of the event’s weekend.
      </span>
    </div>

    <div class="flex flex-wrap justify-center gap-12">
      <card-component icon="cutting-edge" title="Cutting Edge Technology">
        Participants will have the opportunity to work on cutting-edge projects, leveraging AI techniques such as ML,
        NLP, computer vision, and more.
      </card-component>

      <card-component icon="challenges" title="Real-World Challenges">
        Companies will offer real-world challenges to be tackled by the participants of Neural Wave by contributing
        with datasets and propose specific challenges.
      </card-component>

      <card-component icon="connections" title="Connections Everywhere">
        Develop your interest, hone your abilities, and form many deep connections with other fellow enthusiasts and
        professionals of the sector.
      </card-component>
    </div>
  </div>
</template>

<script lang="ts">
import CardComponent from "@/components/cards/CardComponent.vue";

export default {
  name: 'JoinSectionComponent',
  components: {CardComponent}
}
</script>
