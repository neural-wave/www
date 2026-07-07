import { defineStore } from "pinia";

export interface TeamMembers {
  year: number
  team: TeamMember[]
}

export interface TeamMember {
  name: string
  image: string
  linkedin: string
  github: string
  website: string
  work: string
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
            work: "",
          },
          {
            name: "Andrea Brites Marto",
            image: "andrea",
            linkedin: "https://www.linkedin.com/in/andrea-brites-marto/",
            github: "https://github.com/britesma",
            website: "",
            work: "",
          },
          {
            name: "Michele Cattaneo",
            image: "michele",
            linkedin: "https://www.linkedin.com/in/michele-cattaneo-614527210/",
            github: "https://github.com/MicheleCattaneo",
            website: "",
            work: "",
          },
          {
            name: "Jury D'Onofrio",
            image: "jury",
            linkedin:
              "https://www.linkedin.com/in/jury-andrea-d-onofrio-905118298/",
            github: "https://github.com/JuryAndrea",
            website: "",
            work: "",
          },
          {
            name: "Nicolai Hermann",
            image: "nico",
            linkedin: "https://www.linkedin.com/in/nicolai-hermann-9598121b5/",
            github: "https://github.com/nihermann",
            website: "https://nihermann.github.io/",
            work: "",
          },
          {
            name: "Francesco Huber",
            image: "fra",
            linkedin: "https://www.linkedin.com/in/francesco-huber-60111013b/",
            github: "",
            website: "",
            work: "",
          },
          {
            name: "Kyla Kaplan",
            image: "kyla",
            linkedin: "https://www.linkedin.com/in/kyla-kaplan/",
            github: "https://github.com/kybeka",
            website: "",
            work: "",
          },
          {
            name: "Sophie Kergassner",
            image: "sophie",
            linkedin: "https://www.linkedin.com/in/sophie-kergassner/",
            github: "https://github.com/sophie-kergassner",
            website: "https://sophie-kergassner.github.io/",
            work: "",
          },
          {
            name: "Volodymyr Kyrylov",
            image: "vol",
            linkedin: "https://www.linkedin.com/in/darkproger/",
            github: "https://github.com/proger",
            website: "",
            work: "",
          },
          {
            name: "Adam Novak",
            image: "adam",
            linkedin: "https://www.linkedin.com/in/adam-novak-2a03b216b/",
            github: "",
            website: "",
            work: "",
          },
          {
            name: "Edoardo Riggio",
            image: "edo",
            linkedin: "https://www.linkedin.com/in/edoardo-riggio/",
            github: "https://github.com/edoriggio",
            website: "https://edoriggio.com",
            work: "",
          },
          {
            name: "Elvi Mihai Sabau",
            image: "elvi",
            linkedin: "https://www.linkedin.com/in/elvimihai/",
            github: "https://github.com/Frenzoid/",
            website: "https://frenzoid.dev/",
            work: "",
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
            work: "https://sphn.ch/organization/implementation-teams/",
          },
          {
            name: "Michele Cattaneo",
            image: "michele",
            linkedin: "https://www.linkedin.com/in/michele-cattaneo-614527210/",
            github: "https://github.com/MicheleCattaneo",
            website: "",
            work: "https://datascience.ch/people/michele-cattaneo",
          },
          {
            name: "Auréliane Dubuis",
            image: "aure",
            linkedin: "https://www.linkedin.com/in/aur%C3%A9liane-dubuis/",
            github: "",
            website: "",
            work: "",
          },
          {
            name: "Alessandro Giagnorio",
            image: "ale",
            linkedin:
              "https://www.linkedin.com/in/alessandro-giagnorio-1a8731270/",
            github: "https://github.com/Devy99",
            website: "https://devy99.github.io/",
            work: "",
          },
          {
            name: "Nicolai Hermann",
            image: "nico",
            linkedin: "https://www.linkedin.com/in/nicolai-hermann-9598121b5/",
            github: "https://github.com/nihermann",
            website: "https://nihermann.github.io/",
            work: "",
          },
          {
            name: "Edoardo Riggio",
            image: "edo",
            linkedin: "https://www.linkedin.com/in/edoardo-riggio/",
            github: "https://github.com/edoriggio",
            website: "https://edoriggio.com",
            work: "https://aegis-forge.inf.usi.ch",
          },
          {
            name: "Elvi Mihai Sabau",
            image: "elvi",
            linkedin: "https://www.linkedin.com/in/elvimihai/",
            github: "https://github.com/Frenzoid/",
            website: "https://frenzoid.dev/",
            work: "",
          },
          {
            name: "Stefano Taillefert",
            image: "stefano",
            linkedin: "https://www.linkedin.com/in/stefano-taillefert",
            github: "https://github.com/Steeven9",
            website: "https://steeven.soulsbros.ch",
            work: "https://www.swisscom.ch/en/business.html",
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
