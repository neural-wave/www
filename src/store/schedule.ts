import {defineStore} from "pinia";

export const useScheduleStore = defineStore('scheduleStore', {
    state: () => ({
        schedule: {
            friday: [
                {
                    time: '17:00',
                    event: 'Arrival, registration, and welcome apero',
                    place: 'Aula Magna'
                },
                {
                    time: '18:00',
                    event: 'Welcome by the Neural Wave team',
                    place: 'Aula Magna'
                },
                {
                    time: '18:15',
                    event: 'Keynote by main sponsor',
                    place: 'Aula Magna'
                },
                {
                    time: '18:45',
                    event: 'Tutorial by compute partner on their platform',
                    place: 'Aula Magna'
                },
                {
                    time: '19:15',
                    event: 'Event Kick-Off: Start Hacking!',
                    place: 'Aula Magna'
                },
            ],
            saturday: [
                {
                    time: '07:00 07:15',
                    event: 'Morning Yoga',
                    place: 'Aula Magna'
                },
                {
                    time: '09:00',
                    event: 'Breakfast',
                    place: 'Foyer'
                },
                {
                    time: '11:00',
                    event: 'Keynote',
                    place: 'Aula Magna'
                },
                {
                    time: '12:00 12:15',
                    event: 'Surprise challenge #1',
                    place: 'Aula Magna'
                },
                {
                    time: '13:00',
                    event: 'Lunch',
                    place: 'Foyer'
                },
                {
                    time: '14:00 17:00',
                    event: 'Networking at company stands',
                    place: 'Aula Magna'
                },
                {
                    time: '17:00',
                    event: 'Keynote',
                    place: 'Aula Magna'
                },
                {
                    time: '19:00',
                    event: 'Dinner',
                    place: 'Foyer'
                },
                {
                    time: '20:30 20:45',
                    event: 'Surprise challenge #2',
                    place: 'Aula Magna'
                }
            ],
            sunday: [
                {
                    time: '07:00 07:15',
                    event: 'Morning Yoga',
                    place: 'Aula Magna'
                },
                {
                    time: '08:30',
                    event: 'Breakfast',
                    place: 'Foyer'
                },
                {
                    time: '11:00',
                    event: 'Project submissions',
                    place: 'Online'
                },
                {
                    time: '12:00',
                    event: 'Lunch',
                    place: 'Foyer'
                },
                {
                    time: '15:00',
                    event: 'Award ceremony',
                    place: 'Aula Magna'
                },
                {
                    time: '16:00 17:00',
                    event: 'Farewell apero',
                    place: 'Foyer'
                }
            ]
        }
    })
})