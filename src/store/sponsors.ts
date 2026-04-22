import { defineStore } from "pinia";

export interface Sponsors {
  year: number;
  sponsors: Sponsor[];
}

export interface Sponsor {
  name: string;
  url: string;
  type: string;
}

export const useSponsorsStore = defineStore("sponsors", {
  state: () => ({
    categories: ["main", "gold", "silver", "bronze", "project", "compute", "other"],
    sponsors: [
      {
        year: 2026,
        sponsors: [
          {
            name: "usi",
            url: "https://www.usi.ch/",
            type: "main",
          },
          {
            name: "artificialy",
            url: "https://www.artificialy.com/",
            type: "gold",
          },
          {
            name: "banana",
            url: "https://www.banana.ch/",
            type: "bronze",
          },
        ],
      },
      {
        year: 2024,
        sponsors: [
          {
            name: "usi",
            url: "https://www.usi.ch/",
            type: "main",
          },
          {
            name: "hasler",
            url: "https://haslerstiftung.ch/",
            type: "main",
          },
          {
            name: "lightning",
            url: "https://lightning.ai/",
            type: "compute",
          },
          {
            name: "bosch",
            url: "https://www.bosch.ch/",
            type: "project",
          },
          {
            name: "swisscom",
            url: "https://www.swisscom.ch/",
            type: "project",
          },
          {
            name: "cscs",
            url: "https://www.cscs.ch/",
            type: "bronze",
          },
          {
            name: "duferco",
            url: "https://www.duferco.com/",
            type: "silver, project",
          },
          {
            name: "casale",
            url: "https://www.casale.ch/",
            type: "silver",
          },
          {
            name: "usc",
            url: "https://www.startup.usi.ch/en",
            type: "bronze",
          },
          {
            name: "brightside",
            url: "https://brightside-capital.com/",
            type: "bronze",
          },
          {
            name: "confinale",
            url: "https://confinale.ch/en/",
            type: "bronze",
          },
          {
            name: "banana",
            url: "https://www.banana.ch/",
            type: "bronze",
          },
          {
            name: "pastahr",
            url: "https://www.pastahr.com/",
            type: "project",
          },
          {
            name: "ai4privacy",
            url: "https://www.ai4privacy.com/",
            type: "project",
          },
          {
            name: "seegarten",
            url: "https://www.hotellido-lugano.com/en/",
            type: "other",
          },
          {
            name: "masaba",
            url: "https://www.masabacoffee.ch/en",
            type: "other",
          },
          {
            name: "repair-store",
            url: "https://my.lugano.ch/repairstore/",
            type: "other",
          },
        ] as Sponsor[],
      },
    ] as Sponsors[],
  }),
  actions: {
    getSponsorsByYear() {
      return (year: number): Sponsor[] => {
        return this.sponsors.filter((obj: Sponsors) => obj.year == year)[0]
          .sponsors;
      };
    },
  },
});
