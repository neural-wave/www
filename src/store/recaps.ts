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
  changeSign: string;
  changeValue: string;
}

export const useRecapsStore = defineStore("recaps", {
  state: () => ({
    recaps: [
      {
        year: 2024,
        n_images: 59,
        video: "https://www.youtube.com/embed/Kk3w4KxhwKg",
        tv: "https://www.rsi.ch/play/embed?urn=urn:rsi:video:2310972&subdivisions=false",
        statistics: [
          {
            value: "5",
            title: "Projects",
            changeSign: "",
            changeValue: "",
          },
          {
            value: "17",
            title: "Teams",
            changeSign: "",
            changeValue: "",
          },
          {
            value: "62",
            title: "Participants",
            changeSign: "",
            changeValue: "",
          },
          {
            value: "21",
            title: "Countries",
            changeSign: "",
            changeValue: "",
          },
          {
            value: "10K",
            title: "CHF of Prize Pool",
            changeSign: "",
            changeValue: "",
          },
        ] as Statistic[],
      },
      {
        year: 2026,
        n_images: 71,
        video: "",
        tv: "",
        statistics: [
          {
            value: "6",
            title: "Projects",
            changeSign: "↑",
            changeValue: "1",
          },
          {
            value: "23",
            title: "Teams",
            changeSign: "↑",
            changeValue: "6",
          },
          {
            value: "95",
            title: "Participants",
            changeSign: "↑",
            changeValue: "33",
          },
          {
            value: "20+",
            title: "Countries",
          },
          {
            value: "12K",
            title: "CHF of Prize Pool",
            changeSign: "↑",
            changeValue: "2K",
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
