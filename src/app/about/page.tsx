import EventCard from "@/component/event-card/event-card";

export default async function About() {
    const data = [
        { url: `/image/1.jpg`, title: 'Legend', alt: 'Legend' },
        { url: `/image/2.jpg`, title: 'Legend', alt: 'Legend' },
        { url: `/image/3.jpg`, title: 'Legend', alt: 'Legend' },
        { url: `/image/4.jpg`, title: 'Legend', alt: 'Legend' },
        { url: `/image/5.jpg`, title: 'Legend', alt: 'Legend' }
    ]
    return (
        <div>
            <p>About</p>
            <EventCard data={data}></EventCard>
        </div>
    )
}
