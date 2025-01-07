export const SelectTravelsList = [
    {
        id: 1,
        title: 'Just Me',
        desc: 'A solo traveler exploring the world.',
        icon: '✈️',
        people: '1 Person',
    },
    {
        id: 2,
        title: 'A Couple',
        desc: 'Two traveling in tandem.',
        icon: '👩🏻‍❤️‍👨🏻',
        people: '2 People',
    },
    {
        id: 3,
        title: 'Family',
        desc: 'A group of fun-loving adventurers.',
        icon: '👩🏻‍👩🏻‍👧🏻‍👦🏻',
        people: '3-5 People',
    },
    {
        id: 4,
        title: 'Friends',
        desc: 'Traveling with a group of close friends.',
        icon: '⛵',
        people: '3+ People',
    },
];

export const BudgetOptions = [
    {
        id: 1,
        title: 'Budget-Friendly',
        desc: 'For those traveling on a shoestring budget.',
        range: '$100 - $500',
        icon: '💸',
    },
    {
        id: 2,
        title: 'Comfortable',
        desc: 'A balance between comfort and cost.',
        range: '$500 - $1500',
        icon: '💰',
    },
    {
        id: 3,
        title: 'Luxury',
        desc: 'Premium travel with all the perks.',
        range: '$1500+',
        icon: '💎',
    },
];

export const AI_PROMPT = `Generate Travel Plan for Location: {location}, for {totalDays} Days for {traveler} with {budget}. Give me hotel options including HotelName, Hotel address, Price, hotel image URL, geo coordinates, rating, descriptions, and suggest itinerary for {totalDays} days, detailing each day's plan with best times to visit in JSON format.`;

