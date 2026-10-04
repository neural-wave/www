<template>
    <div class="flex flex-col items-center justify-center gap-20">
      <span class="text-3xl text-center">Artificial Intelligence + Lugano <br /> A Match Made in Heaven</span>

      <div class="flex flex-wrap justify-center gap-12 max-w-239.5">
        <div class="flex flex-row items-start max-[1005px]:max-w-134 max-w-239.5 bg-[#160D2F]/20 border border-nw-border rounded-[8px] p-7 gap-12 max-[1005px]:gap-7 max-[1005px]:flex-col">
          <div class="flex flex-col min-[1005px]:w-[50%] gap-7">
            <img src="../../assets/icons/history.svg" alt="history icon" class="w-15" />

            <div class="flex flex-col gap-2">
              <span class="text-xl font-bold">History</span>

              <span class=" w-full text-justify">
                Lugano’s ties with Artificial Intelligence date back to the 90s, when IDSIA USI - SUPSI’s researchers
                started producing world class Artificial Intelligence and Machine Learning models. Today, IDSIA USI -
                SUPSI is still active as a main player in state-of-the-art research in the field and throughout the
                years, many successful minds have crossed paths with them.
              </span>
            </div>
          </div>

          <img src="../../assets/background/lugano.jpg" alt="city of Lugano from above" class="min-[1005px]:w-[50%] w-full h-full object-cover rounded" />
        </div>

        <div class="flex flex-col w-full justify-center items-center min-[1005px]:flex-row max-w-[958px] gap-12">
          <card-component title="Università della Svizzera italiana" icon="usi" class="max-w-[536px] w-full min-[1005px]:w-[51%]">
            Università della Svizzera italiana (USI) started offering the first Master in Artificial Intelligence in
            Switzerland, profiting from the competences of the Faculty of Informatics and the Istituto Dalle Molle
            di studi sull’intelligenza artificiale (IDSIA USI - SUPSI).
          </card-component>

          <card-component title="Lugano" icon="lugano" class="max-w-[536px] w-full min-[1005px]:w-[49%]">
            The sunny Lugano is the perfect hub for Artificial Intelligence research and, for the first time, we want
            to offer a fully AI-focused hackathon where over the course of 48 hours, brilliant AI solutions will be
            brought to life to solve complex problems.
          </card-component>
        </div>
      </div>

      <div class="flex flex-col gap-2 items-center">
        <span>
          <a class="hover:underline" href="https://www.usi.ch/it" target="_blank">
            Learn more about <b>USI</b>
          </a> &nbsp;→
        </span>

        <span>
          <a class="hover:underline" href="https://www.idsia.usi-supsi.ch/" target="_blank">
            Learn more about <b>IDSIA USI - SUPSI</b>
          </a> &nbsp;→
        </span>
      </div>
    </div>
</template>

<script lang="ts">
import CardComponent from "@/components/cards/CardComponent.vue";

export default {
  name: 'LuganoSectionComponent',
  components: {CardComponent}
}
</script>
