import { defineStore } from "pinia";

export interface Repos {
  year: number;
  repos: Repo[];
}

export interface Repo {
  team: string;
  project: string;
  prizes: string[];
}

export const useReposStore = defineStore("repos", {
  state: () => ({
    repos: [
      {
        year: 2024,
        repos: [
          {
            team: "MoliseAI",
            project: "Ai4Privacy",
            prizes: [],
          },
          {
            team: "CudaLibre",
            project: "Duferco",
            prizes: ["gold", "project"],
          },
          {
            team: "Operators Of The Neuron",
            project: "Bosch",
            prizes: [],
          },
          {
            team: "NeuroGlobetrotters",
            project: "Bosch",
            prizes: ["bronze", "project"],
          },
          {
            team: "The Last Ones",
            project: "Ai4Privacy",
            prizes: [],
          },
          {
            team: "Underfitted",
            project: "Swisscom",
            prizes: [],
          },
          {
            team: "Lazzaroni",
            project: "PastaHR",
            prizes: [],
          },
          {
            team: "Dropped Neurons",
            project: "Ai4Privacy",
            prizes: ["project"],
          },
          {
            team: "Squigosauri",
            project: "PastaHR",
            prizes: ["bronze", "project"],
          },
          {
            team: "BischBosch",
            project: "Bosch",
            prizes: [],
          },
          {
            team: "Sbirulini",
            project: "Duferco",
            prizes: ["bronze"],
          },
          {
            team: "DaemonKiller",
            project: "Swisscom",
            prizes: [],
          },
          {
            team: "Mensa Martiri",
            project: "Duferco",
            prizes: [],
          },
          {
            team: "Team Name",
            project: "Swisscom",
            prizes: ["silver", "project"],
          },
          {
            team: "Hackerbros",
            project: "Ai4Privacy",
            prizes: [],
          },
          {
            team: "Og D3A",
            project: "Bosch",
            prizes: [],
          },
          {
            team: "RadYomki",
            project: "Duferco",
            prizes: [],
          },
        ] as Repo[],
      },
      {
        year: 2026,
        repos: [
          {
            team: "PhDs but not for long",
            project: "AET",
            prizes: [],
          },
          {
            team: "Inde",
            project: "AET",
            prizes: [],
          },
          {
            team: "Tom&Will",
            project: "AET",
            prizes: [],
          },
          {
            team: "ApplePi",
            project: "AET",
            prizes: ["gold", "project"],
          },
          {
            team: "AI-uto!",
            project: "AIL",
            prizes: [],
          },
          {
            team: "TokenLarpers",
            project: "AIL",
            prizes: [],
          },
          {
            team: "dropped_neurons",
            project: "AIL",
            prizes: [],
          },
          {
            team: "SilCrst",
            project: "AIL",
            prizes: ["silver", "project"],
          },
          {
            team: "D3A24",
            project: "Sartiq",
            prizes: ["project"],
          },
          {
            team: "Better Call Sol",
            project: "Sartiq",
            prizes: [],
          },
          {
            team: "AACtivEtion Functions",
            project: "Sartiq",
            prizes: [],
          },
          {
            team: "CUDA_Libre",
            project: "Bosch",
            prizes: ["bronze", "project"],
          },
          {
            team: "Fuma c'anduma",
            project: "Bosch",
            prizes: [],
          },
          {
            team: "Slop Busters",
            project: "Bosch",
            prizes: [],
          },
          {
            team: "blackpepper-ai",
            project: "Bosch",
            prizes: [],
          },
          {
            team: "Fine-Tuned Stepperz",
            project: "SIB",
            prizes: [],
          },
          {
            team: "praedixit",
            project: "SIB",
            prizes: [],
          },
          {
            team: "ScientificShrimps",
            project: "SIB",
            prizes: ["project"],
          },
          {
            team: "EpsilonDev",
            project: "SIB",
            prizes: [],
          },
          {
            team: "Legal Immigrants",
            project: "Lifeware",
            prizes: [],
          },
          {
            team: "Fable 7.4",
            project: "Lifeware",
            prizes: [],
          },
          {
            team: "NaMa",
            project: "Lifeware",
            prizes: [],
          },
          {
            team: "MortisAI-Lugano26",
            project: "Lifeware",
            prizes: ["project"],
          },
        ] as Repo[],
      },
    ] as Repos[],
  }),
  actions: {
    getReposByYear() {
      return (year: number): Repo[] => {
        return this.repos
          .filter((obj: Repos) => obj.year == year)[0]
          .repos.sort((a: Repo, b: Repo) => a.team.localeCompare(b.team));
      };
    },
  },
});
