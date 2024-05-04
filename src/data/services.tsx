interface Service {
    title: string;
    description: string;
    image: string;
}


export const services: Service[] = [
    {
        title: "Event Metrics",
        description: "Track your ticket sales, attendees count and more with much ease.",
        image: "event"
    },
    {
        title: "Registration & Ticketing",
        description: "Manage your Event registrations and ticket sales easier and receive payments instantly.",
        image: "registration"
    },
    {
        title: "Branded Badges",
        description: "Create your custom branded badges for your events and get them printed.",
        image: "branded"
    },
    {
        title: "Oragniser App",
        description: "Manage your events at the palm of your hand with our Oragniser App.",
        image: "organizer"
    },
    {
        title: "Attendee Engagement",
        description: "Engage with your attendees via email, surveys and much more.",
        image: "attendee"
    },
    {
        title: "Add to Calendar",
        description: "Effortless way to add your events to registered users calendars by 1-click.",
        image: "calendar"
    },
]