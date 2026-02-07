import { defineStore } from "pinia";

export interface Repos {
  year: number;
  repos: Repo[];
}

export interface Repo {
  team: string;
  project: string;
  url: string;
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
            url: "https://github.com/Neural-Wave/project-MoliseAI",
            prizes: [],
          },
          {
            team: "CudaLibre",
            project: "Duferco",
            url: "https://github.com/Neural-Wave/project-CudaLibre",
            prizes: ["gold", "project"],
          },
          {
            team: "Operators Of The Neuron",
            project: "Bosch",
            url: "https://github.com/Neural-Wave/project-OperatorsOfTheNeuron",
            prizes: [],
          },
          {
            team: "NeuroGlobetrotters",
            project: "Bosch",
            url: "https://github.com/Neural-Wave/project-NeuroGlobetrotters",
            prizes: ["bronze", "project"],
          },
          {
            team: "The Last Ones",
            project: "Ai4Privacy",
            url: "https://github.com/Neural-Wave/project-TheLastOnes",
            prizes: [],
          },
          {
            team: "Underfitted",
            project: "Swisscom",
            url: "https://github.com/Neural-Wave/project-Underfitted",
            prizes: [],
          },
          {
            team: "Lazzaroni",
            project: "PastaHR",
            url: "https://github.com/Neural-Wave/project-Lazzaroni",
            prizes: [],
          },
          {
            team: "Dropped Neurons",
            project: "Ai4Privacy",
            url: "https://github.com/Neural-Wave/project-DroppedNeurons",
            prizes: ["project"],
          },
          {
            team: "Squigosauri",
            project: "PastaHR",
            url: "https://github.com/Neural-Wave/project-Squigosauri",
            prizes: ["bronze", "project"],
          },
          {
            team: "BischBosch",
            project: "Bosch",
            url: "https://github.com/Neural-Wave/project-BischBosch",
            prizes: [],
          },
          {
            team: "Sbirulini",
            project: "Duferco",
            url: "https://github.com/Neural-Wave/project-Sbirulini",
            prizes: ["bronze"],
          },
          {
            team: "DaemonKiller",
            project: "Swisscom",
            url: "https://github.com/Neural-Wave/project-DaemonKiller",
            prizes: [],
          },
          {
            team: "Mensa Martiri",
            project: "Duferco",
            url: "https://github.com/Neural-Wave/project-MensaMartiri",
            prizes: [],
          },
          {
            team: "Team Name",
            project: "Swisscom",
            url: "https://github.com/Neural-Wave/project-TeamName",
            prizes: ["silver", "project"],
          },
          {
            team: "Hackerbros",
            project: "Ai4Privacy",
            url: "https://github.com/Neural-Wave/project-Hackerbros",
            prizes: [],
          },
          {
            team: "Og D3A",
            project: "Bosch",
            url: "https://github.com/Neural-Wave/project-OgD3A",
            prizes: [],
          },
          {
            team: "RadYomki",
            project: "Duferco",
            url: "https://github.com/Neural-Wave/project-RadYomki",
            prizes: [],
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
