import { defineStore } from "pinia";

export interface Serie {
  title: string;
  subtitle: string;
  year: number;
  cover: string;
}

export const useSeriesStore = defineStore("seriesStore", {
  state: () => ({
    series: [
      {
        title: "1st Edition",
        subtitle: "25-27 Oct 2024",
        year: 2024,
        cover: "photo-4.jpg",
      },
      {
        title: "2nd Edition",
        subtitle: "16-18 Oct 2026",
        year: 2026,
        cover: "photo-27.jpg",
      },
    ] as Serie[],
  }),
  actions: {
    getSeries() {
      return this.series;
    },
  },
});
