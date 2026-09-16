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
            name: "usc",
            url: "https://www.startup.usi.ch/",
            type: "silver",
          },
          {
            name: "ail",
            url: "https://www.ail.ch/",
            type: "silver, project",
          },
          {
            name: "aet",
            url: "https://www.aet.ch/",
            type: "silver, project",
          },
          {
            name: "banana",
            url: "https://www.banana.ch/",
            type: "bronze",
          },
          {
            name: "swisscom",
            url: "https://www.swisscom.ch/",
            type: "bronze",
          },
          {
            name: "cscs",
            url: "https://www.cscs.ch/",
            type: "bronze",
          },
          {
            name: "b4s",
            url: "https://www.brandsforstudents.ch/",
            type: "bronze",
          },
          {
            name: "lifeware",
            url: "https://www.lifeware.ch/",
            type: "project",
          },
          {
            name: "bosch",
            url: "https://www.bosch.ch/",
            type: "project",
          },
          {
            name: "sartiq",
            url: "https://www.sartiq.ai/",
            type: "project",
          },
          {
            name: "fizzy",
            url: "https://www.fizzy.ch/",
            type: "other",
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
            url: "https://www.haslerstiftung.ch/",
            type: "main",
          },
          {
            name: "lightning",
            url: "https://www.lightning.ai/",
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
            url: "https://www.startup.usi.ch/",
            type: "bronze",
          },
          {
            name: "brightside",
            url: "https://www.brightside-capital.com/",
            type: "bronze",
          },
          {
            name: "confinale",
            url: "https://www.confinale.ch/",
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
            url: "https://www.hotellido-lugano.com/",
            type: "other",
          },
          {
            name: "masaba",
            url: "https://www.masabacoffee.ch/",
            type: "other",
          },
          {
            name: "repair-store",
            url: "https://www.my.lugano.ch/repairstore/",
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
