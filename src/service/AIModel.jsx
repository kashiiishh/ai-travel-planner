// const {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
// } = require("@google/generative-ai");

// const apiKey = import.meta.env.VITE_GEMINI_AI_API_KEY;
// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({
//     model: "gemini-2.0-flash-exp",
//     systemInstruction: "User\nGenerate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time t travel each of the location for 3 days with each day plan with best time to visit in JSON format.",
// });

// const generationConfig = {
//     temperature: 1,
//     topP: 0.95,
//     topK: 40,
//     maxOutputTokens: 8192,
//     responseMimeType: "application/json",
// };


// export const chatSession = model.startChat({
//     generationConfig,
//     history: [
//         {
//             role: "user",
//             parts: [
//                 { text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time t travel each of the location for 3 days with each day plan with best time to visit in JSON format." },
//             ],
//         },
//         {
//             role: "model",
//             parts: [
//                 { text: "```json\n{\n  \"location\": \"Las Vegas\",\n  \"duration\": \"3 Days\",\n  \"budget\": \"Cheap\",\n  \"travelers\": \"Couple\",\n  \"hotels\": [\n    {\n      \"hotelName\": \"Circus Circus Hotel & Casino\",\n      \"hotelAddress\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": \"60-120 USD/night\",\n       \"hotelImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Circus_Circus_Las_Vegas_2019.jpg/800px-Circus_Circus_Las_Vegas_2019.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.1265,\n        \"longitude\": -115.1683\n      },\n      \"rating\": 3.8,\n      \"description\": \"A budget-friendly option on the Strip with a circus theme, free circus acts, and a large casino. Offers basic amenities and is good for a fun, affordable stay.\"\n    },\n    {\n      \"hotelName\": \"Excalibur Hotel & Casino\",\n      \"hotelAddress\": \"3850 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": \"70-130 USD/night\",\n      \"hotelImageUrl\":\"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Excalibur_Hotel_and_Casino_Las_Vegas_2022.jpg/800px-Excalibur_Hotel_and_Casino_Las_Vegas_2022.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.0983,\n        \"longitude\": -115.1746\n      },\n      \"rating\": 4.0,\n      \"description\": \"A medieval-themed hotel with affordable rooms, multiple dining options, a large pool area, and various shows. A fun choice for couples on a budget.\"\n    },\n     {\n      \"hotelName\": \"OYO Hotel and Casino Las Vegas\",\n      \"hotelAddress\": \"115 E Tropicana Ave, Las Vegas, NV 89109\",\n      \"price\": \"50-110 USD/night\",\n         \"hotelImageUrl\":\"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/OYO_Hotel_%26_Casino_Las_Vegas_view_from_the_south.jpg/800px-OYO_Hotel_%26_Casino_Las_Vegas_view_from_the_south.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.0991,\n        \"longitude\": -115.1691\n      },\n      \"rating\": 3.6,\n      \"description\": \"Formerly known as the Hooters Casino Hotel, OYO provides value for money with basic rooms, a pool, and casino. Located near the south end of the Strip.\"\n    }\n  ],\n  \"itinerary\": {\n    \"day1\": {\n      \"theme\": \"Exploring the Strip & Free Attractions\",\n      \"bestTimeToVisit\": \"Late afternoon to evening\",\n      \"plan\": [\n        {\n          \"placeName\": \"Bellagio Conservatory & Botanical Gardens\",\n          \"placeDetails\": \"Stunning floral displays that change seasonally. Free to visit and absolutely breathtaking.\",\n          \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Bellagio_Conservatory_Las_Vegas_2018.jpg/800px-Bellagio_Conservatory_Las_Vegas_2018.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1127,\n            \"longitude\": -115.1744\n          },\n           \"ticketPricing\": \"Free\",\n          \"timeToTravel\": \"Start after lunch\"\n        },\n        {\n          \"placeName\": \"Bellagio Fountains Show\",\n           \"placeDetails\": \"Iconic water fountain show with music and lights. Check schedule online; free to watch.\",\n          \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Bellagio_fountains_night_May_2015.jpg/800px-Bellagio_fountains_night_May_2015.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1127,\n            \"longitude\": -115.1745\n          },\n           \"ticketPricing\": \"Free\",\n            \"timeToTravel\": \"After Bellagio Gardens, ~5-10 min walk\"\n        },\n         {\n          \"placeName\": \"Walk the Las Vegas Strip\",\n          \"placeDetails\": \"Enjoy the free spectacle of the themed hotels, street performers, and vibrant atmosphere. People watching is a free activity in itself.\",\n          \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/The_Strip%2C_Las_Vegas_at_night_%2851927856117%29.jpg/800px-The_Strip%2C_Las_Vegas_at_night_%2851927856117%29.jpg\",\n           \"geoCoordinates\": {\n            \"latitude\": 36.1162,\n            \"longitude\": -115.1735\n          },\n           \"ticketPricing\": \"Free\",\n          \"timeToTravel\": \"Evening, from Bellagio\"\n        }\n      ]\n    },\n    \"day2\": {\n      \"theme\": \"Downtown Vegas & Fremont Street\",\n      \"bestTimeToVisit\": \"Afternoon into the evening\",\n      \"plan\": [\n        {\n          \"placeName\": \"Fremont Street Experience\",\n          \"placeDetails\": \"A pedestrian mall with a massive video canopy, free light shows, and live music. A totally different experience from the Strip.\",\n          \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Fremont_Street_Experience_Canopy.jpg/800px-Fremont_Street_Experience_Canopy.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1713,\n            \"longitude\": -115.1420\n          },\n          \"ticketPricing\": \"Free (cost for some activities)\",\n           \"timeToTravel\": \"Mid-afternoon from the Strip - 15-20 min car ride or by bus\"\n        },\n         {\n          \"placeName\": \"Downtown Container Park\",\n          \"placeDetails\": \"An open-air shopping and entertainment center made from shipping containers. Good food and unique shops.\",\n          \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Downtown_Container_Park_20170829.jpg/800px-Downtown_Container_Park_20170829.jpg\",\n           \"geoCoordinates\": {\n            \"latitude\": 36.1694,\n            \"longitude\": -115.1413\n          },\n            \"ticketPricing\": \"Free (cost for shopping & dining)\",\n          \"timeToTravel\": \"Walking distance from Fremont Street Experience\"\n        },\n          {\n          \"placeName\": \"Free Light shows at Fremont Street\",\n          \"placeDetails\": \"Experience the amazing light show on the giant canopy above Fremont Street.\",\n          \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/FremontStreetExperienceLasVegas_20130721_2.jpg/800px-FremontStreetExperienceLasVegas_20130721_2.jpg\",\n            \"geoCoordinates\": {\n            \"latitude\": 36.1713,\n            \"longitude\": -115.1420\n          },\n            \"ticketPricing\": \"Free\",\n          \"timeToTravel\": \"Evening at Fremont Street Experience\"\n        }\n      ]\n    },\n    \"day3\": {\n      \"theme\": \"South Strip & Relaxing Activities\",\n      \"bestTimeToVisit\": \"Daytime\",\n      \"plan\": [\n       {\n          \"placeName\": \"M&M's World\",\n          \"placeDetails\": \"A colorful and fun four-story store with all things M&M's.\",\n          \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/M%26M_World_Las_Vegas.JPG/800px-M%26M_World_Las_Vegas.JPG\",\n           \"geoCoordinates\": {\n            \"latitude\": 36.1075,\n            \"longitude\": -115.1706\n          },\n           \"ticketPricing\": \"Free (cost for shopping)\",\n            \"timeToTravel\": \"Morning, taxi or monorail from hotel\"\n        },\n          {\n            \"placeName\": \"Coke Store\",\n            \"placeDetails\": \"A multi-story shop filled with Coca-Cola merchandise, and you can try various Coke products from around the world.\",\n            \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Las_Vegas_Coca_Cola_Store_Interior.jpg/800px-Las_Vegas_Coca_Cola_Store_Interior.jpg\",\n            \"geoCoordinates\": {\n                \"latitude\": 36.1075,\n                \"longitude\": -115.1708\n            },\n            \"ticketPricing\":\"Free (cost for purchasing)\",\n             \"timeToTravel\": \"Next to M&M's World\"\n         },\n        {\n          \"placeName\": \"Pool Time or Relax at hotel\",\n           \"placeDetails\": \"Take advantage of the pool at your hotel. Relax and recover from a busy trip.\",\n          \"placeImageUrl\":\"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Excalibur_pool_area_2018.jpg/800px-Excalibur_pool_area_2018.jpg\",\n           \"geoCoordinates\": {\n              \"latitude\": 36.0983,\n              \"longitude\": -115.1746\n          },\n           \"ticketPricing\":\"Free (Included with hotel stay)\",\n           \"timeToTravel\": \"Afternoon at your hotel\"\n        }\n\n      ]\n    }\n  }\n}\n```" },
//             ],
//         },
//     ],
// });





// import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

// const apiKey = import.meta.env.VITE_GEMINI_AI_API_KEY;
// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({
//     model: "gemini-2.0-flash-exp",
//     systemInstruction: "User\nGenerate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time t travel each of the location for 3 days with each day plan with best time to visit in JSON format.",
// });

// const generationConfig = {
//     temperature: 1,
//     topP: 0.95,
//     topK: 40,
//     maxOutputTokens: 8192,
//     responseMimeType: "application/json",
// };

// export const chatSession = model.startChat({
//     generationConfig,
//     history: [
//         {
//             role: "user",
//             parts: [
//                 { text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time t travel each of the location for 3 days with each day plan with best time to visit in JSON format." },
//             ],
//         },
//     ],
// });

import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

// Fetch API key securely from environment variables
const apiKey = import.meta.env.VITE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

// Define the model and system instructions to generate a travel plan for Las Vegas
const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
    systemInstruction: `
        User\n
        Generate a Travel Plan for Location: Las Vegas, for 3 Days for a Couple on a Cheap budget. 
        Provide a list of hotels with the following fields:
        - Hotel Name (key: hotelName)
        - Hotel Address (key: hotelAddress)
        - Price range (key: price)
        - Hotel Image URL (key: hotelImageUrl)
        - Geo Coordinates (key: geoCoordinates)
        - Rating (key: rating)
        - Description (key: description)

        Additionally, suggest an itinerary with the following fields:
        - Day (key: day)
        - Theme (key: theme)
        - Best Time to Visit (key: bestTimeToVisit)
        - Places (key: places) with:
          - Place Name (key: placeName)
          - Place Details (key: placeDetails)
          - Place Image URL (key: placeImageUrl)
          - Geo Coordinates (key: geoCoordinates)
          - Ticket Pricing (key: ticketPricing)
          - Time to Travel (key: timeToTravel)

        Return the data in JSON format so I can map over it in components like hotels.jsx and placestovisit.jsx.
    `,
});


// Configure the generation parameters for the AI model
const generationConfig = {
    temperature: 1,  // Randomness of responses
    topP: 0.95,      // Nucleus sampling for more focused outputs
    topK: 40,        // Top-k sampling for response variety
    maxOutputTokens: 8192,  // Maximum tokens for each output
    responseMimeType: "application/json",  // Set response format to JSON
};

// Start the chat session and pass in the user's request along with historical conversation context
export const chatSession = model.startChat({
    generationConfig,
    history: [
        {
            role: "user",
            parts: [
                {
                    text: `
                        Generate Travel Plan for Location: Las Vegas, for 3 Days for a Couple on a Cheap budget. 
                        Provide a list of hotel options with the following details:
                        - Hotel Name
                        - Hotel Address
                        - Price range (per night)
                        - Hotel Image URL
                        - Geo Coordinates
                        - Rating
                        - Hotel Description

                        Additionally, suggest an itinerary with:
                        - Place Name
                        - Place Details
                        - Place Image URL
                        - Geo Coordinates
                        - Ticket Pricing
                        - Time to Travel for each of the 3 days.

                        Each day should have the best time to visit and a suggested plan in JSON format.
                    `,
                },
            ],
        },
    ],
});
