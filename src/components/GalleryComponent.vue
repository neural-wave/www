<template>
  <carousel
      class="relative w-[80%] h-[40vw] md:h-[50vw]"
      v-slot="{ canScrollNext }"
      :opts="{ loop: true }">
    <carousel-content class="h-[40vw] md:h-[50vw]">
      <carousel-item v-for="number in images" :key="number" class="h-min">
        <img :src="getImage(number)" alt="photo" class="object-cover object-center h-auto">
      </carousel-item>
    </carousel-content>
    <carousel-previous class="bg-[#160D2F] bg-opacity-20 border border-nw-border rounded-full hover:bg-[#160D2F] hover:text-white" />
    <carousel-next
        v-if="canScrollNext"
        class="bg-[#160D2F] bg-opacity-20 border border-nw-border rounded-full hover:bg-[#160D2F] hover:text-white"
    />
  </carousel>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {Card, CardContent} from "@/components/ui/card";

export default defineComponent({
  name: "GalleryComponent",
  components: {CarouselPrevious, CardContent, Card, CarouselItem, CarouselNext, CarouselContent, Carousel},
  props: {
    year: {
      type: Number,
      required: true,
    },
    images: {
      type: Number,
      required: true,
    }
  },
  methods: {
    getImage(number: number) {
      return new URL(`../assets/gallery/${this.year}/photo-${number}.jpg`, import.meta.url).href
    },
  }
})
</script>
