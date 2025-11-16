import { defineStore } from "pinia";

export interface TeamMembers {
  year: number;
  team: TeamMember[];
}

export interface TeamMember {
  name: string;
  image: string;
  linkedin: string;
  github: string;
  website: string;
}

export const useTeamStore = defineStore("team", {
  state: () => ({
    teamMembers: [
      {
        year: 2024,
        team: [
          {
            name: "Christian Altrichter",
            image: "chris",
            linkedin: "https://www.linkedin.com/in/christian-altrichter/",
            github: "https://github.com/Altricch",
            website: "",
          },
          {
            name: "Andrea Brites Marto",
            image: "andrea",
            linkedin: "https://www.linkedin.com/in/andrea-brites-marto/",
            github: "https://github.com/britesma",
            website: "",
          },
          {
            name: "Michele Cattaneo",
            image: "michele",
            linkedin: "https://www.linkedin.com/in/michele-cattaneo-614527210/",
            github: "https://github.com/MicheleCattaneo",
            website: "",
          },
          {
            name: "Jury D'Onofrio",
            image: "jury",
            linkedin:
              "https://www.linkedin.com/in/jury-andrea-d-onofrio-905118298/",
            github: "https://github.com/JuryAndrea",
            website: "",
          },
          {
            name: "Nicolai Hermann",
            image: "nico",
            linkedin: "https://www.linkedin.com/in/nicolai-hermann-9598121b5/",
            github: "https://github.com/nihermann",
            website: "https://nihermann.github.io/",
          },
          {
            name: "Francesco Huber",
            image: "fra",
            linkedin: "https://www.linkedin.com/in/francesco-huber-60111013b/",
            github: "",
            website: "",
          },
          {
            name: "Kyla Kaplan",
            image: "kyla",
            linkedin: "https://www.linkedin.com/in/kyla-kaplan/",
            github: "https://github.com/kybeka",
            website: "",
          },
          {
            name: "Sophie Kergassner",
            image: "sophie",
            linkedin: "https://www.linkedin.com/in/sophie-kergassner/",
            github: "https://github.com/sophie-kergassner",
            website: "https://sophie-kergassner.github.io/",
          },
          {
            name: "Volodymyr Kyrylov",
            image: "vol",
            linkedin: "https://www.linkedin.com/in/darkproger/",
            github: "https://github.com/proger",
            website: "",
          },
          {
            name: "Adam Novak",
            image: "adam",
            linkedin: "https://www.linkedin.com/in/adam-novak-2a03b216b/",
            github: "",
            website: "",
          },
          {
            name: "Edoardo Riggio",
            image: "edo",
            linkedin: "https://www.linkedin.com/in/edoardo-riggio/",
            github: "https://github.com/edoriggio",
            website: "https://www.erc-apps.com/",
          },
          {
            name: "Elvi Mihai Sabau",
            image: "elvi",
            linkedin: "https://www.linkedin.com/in/elvimihai/",
            github: "https://github.com/Frenzoid/",
            website: "https://frenzoid.dev/",
          },
        ] as TeamMember[],
      },
      {
        year: 2026,
        team: [
          {
            name: "Andrea Brites Marto",
            image: "andrea",
            linkedin: "https://www.linkedin.com/in/andrea-brites-marto/",
            github: "https://github.com/britesma",
            website: "",
          },
          {
            name: "Michele Cattaneo",
            image: "michele",
            linkedin: "https://www.linkedin.com/in/michele-cattaneo-614527210/",
            github: "https://github.com/MicheleCattaneo",
            website: "",
          },
          {
            name: "Auréliane Dubuis",
            image: "aure",
            linkedin: "https://www.linkedin.com/in/aur%C3%A9liane-dubuis/",
            github: "",
            website: "",
          },
          {
            name: "Alessandro Giagnorio",
            image: "ale",
            linkedin:
              "https://www.linkedin.com/in/alessandro-giagnorio-1a8731270/",
            github: "https://github.com/Devy99",
            website: "https://devy99.github.io/",
          },
          {
            name: "Nicolai Hermann",
            image: "nico",
            linkedin: "https://www.linkedin.com/in/nicolai-hermann-9598121b5/",
            github: "https://github.com/nihermann",
            website: "https://nihermann.github.io/",
          },
          {
            name: "Sophie Kergassner",
            image: "sophie",
            linkedin: "https://www.linkedin.com/in/sophie-kergassner/",
            github: "https://github.com/sophie-kergassner",
            website: "https://sophie-kergassner.github.io/",
          },
          {
            name: "Edoardo Riggio",
            image: "edo",
            linkedin: "https://www.linkedin.com/in/edoardo-riggio/",
            github: "https://github.com/edoriggio",
            website: "https://www.erc-apps.com/",
          },
          {
            name: "Stefano Taillefert",
            image: "stefano",
            linkedin: "https://www.linkedin.com/in/stefano-taillefert",
            github: "https://github.com/Steeven9",
            website: "",
          },
        ] as TeamMember[]
      }
    ] as TeamMembers[],
  }),
  actions: {
    getTeamByYear() {
      return (year: number): TeamMember[] => {
        return this.teamMembers.filter(
          (obj: TeamMembers) => obj.year == year,
        )[0].team;
      };
    },
  },
});
