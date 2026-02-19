import { defineStore } from "pinia";

export interface Recap {
  year: number;
  n_images: number;
  video: string;
  tv: string;
  statistics: Statistic[];
}

export interface Statistic {
  value: string;
  title: string;
}

export const useRecapsStore = defineStore("recaps", {
  state: () => ({
    recaps: [
      {
        year: 2024,
        n_images: 60,
        video: "https://www.youtube.com/embed/Kk3w4KxhwKg",
        tv: "https://www.rsi.ch/play/embed?urn=urn:rsi:video:2310972&subdivisions=false",
        statistics: [
          {
            value: "5",
            title: "Projects",
          },
          {
            value: "17",
            title: "Teams",
          },
          {
            value: "62",
            title: "Participants",
          },
          {
            value: "21",
            title: "Countries",
          },
          {
            value: "10K",
            title: "CHF of Prize Pool",
          },
        ] as Statistic[],
      },
    ] as Recap[],
  }),
  actions: {
    getRecapByYear() {
      return (year: number): Recap => {
        return this.recaps.filter((obj: Recap) => obj.year == year)[0];
      };
    },
  },
});
