import {defineStore} from "pinia";

export interface Faq {
    question: string
    answer: string
    category: string
}

export const useFaqsStore = defineStore('faqs', {
    state: () => ({
        faqs: [
            {
                question: "Is there a participation fee?",
                answer: "Yes, there will be a small fee of 10 CHF.",
                category: "Registration"
            },
            {
                question: "How does the selection process work?",
                answer: "First, pre-register to show your interest. This step isn’t binding, but please only apply if you’re serious about joining. We’ll review all applications to see if we can match your skill set with the companies' needs. If you’re applying as a team, we’ll assess your group as a whole. If selected, you’ll receive an email with a link to register. Congrats, you’re in! 🎉 Final step: Confirm your spot by registering on the MyLugano app and pay the 10 CHF fee. We can’t wait to see you there! 🙌 Once registered, you'll be invited to our Discord server, where you can connect with other participants, get all the latest updates, and access additional resources.",
                category: "Registration"
            },
            {
                question: "When will I know if I am accepted? What's the general timeline?",
                answer: "You should receive an email during the month of September letting you know if you're in!",
                category: "Registration"
            },
            {
                question: "What if I sign-up and can not come?",
                answer: "We will be sad to see you go 🥺, but we will not be able to reimburse your participation fee, and hope to see you next year!",
                category: "Registration"
            },
            {
                question: "Can we sleep on the hackathon during the night?",
                answer: "Yes, there will be a designated sleeping area during the event, so don't forget to bring your sleeping bags.",
                category: "Organization"
            },
            {
                question: "Will we have access to bathrooms and showers?",
                answer: "Yes, you can ask the staff during the event, and they will provide you with an access card that must be returned after use. Don't forget to bring a towel.",
                category: "Organization"
            },
            {
                question: "Will we have food and drinks during the event?",
                answer: "Yes, and they will be available free of charge. Moreover, water dispensers will be present, so be sure to bring a water bottle.",
                category: "Organization"
            },
            {
                question: "What should I bring with me to the event?",
                answer: "Your laptop/computer, clothing for more than two days and a sleeping bag. Feel free to bring your mouse and keyboard. Plugs will be provided.",
                category: "Organization"
            },
            {
                question: "How to sign up as a team?",
                answer: "During the registration process, you'll need to enter your team's name. Please make sure that all team members register and that they use the same team name.",
                category: "Team Up"
            },
            {
                question: "Can I sign up alone?",
                answer: "No worries! You can find with your team members on the Discord server we've set up for all participants, or you can meet them on the first day of the hackathon.",
                category: "Team Up"
            },
            {
                question: "Is there a way participants can communicate with each other?",
                answer: "Yes, you will receive a link to the Discord server once you've been selected!",
                category: "Team Up"
            },
            {
                question: "What kind of projects should we expect?",
                answer: "Our lovely sponsors have provided some exciting real-life challenges which you will learn more about during the hackathon. If you want teasers you can follow us on Instagram.",
                category: "Projects"
            },
            {
                question: "Will there be mentorship or support during the hackathon?",
                answer: "Yes, from our lovely sponsors and staff that will be present during the event!",
                category: "Projects"
            },
            {
                question: "Can I come to work on an already existing idea or a project?",
                answer: "No, because this hackathon is a competition where each team must start on equal footing.",
                category: "Projects"
            },
            // {
            //     question: "What resources and tools will be provided?",
            //     answer: "You'll receive a lightning.ai account with a limited amount of credits per team, and each member will be assigned to a workspace within the platform.",
            //     category: "Software and Tools"
            // },
            // {
            //     question: "Will we have a tutorial on how to use the lightning.ai platform?",
            //     answer: "Yes, on Friday, there will be an introductory seminar by lightning.ai staff on how to use the platform.",
            //     category: "Software and Tools"
            // },
            {
                question: "Can we use our own tools and libraries?",
                answer: "Yes, you can use any tool or library you find suitable for your task.",
                category: "Software and Tools"
            },
            {
                question: "What should I do if I have more questions or simply want to express my endless gratitude?",
                answer: "That's so sweet! ❤️ You can reach out to us with any questions at info@neuralwave.ch.",
                category: "Other"
            }
        ] as Faq[]
    })
})