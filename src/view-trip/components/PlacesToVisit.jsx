// // // // import React, { useState, useEffect } from 'react';

// // // // // Helper function to fetch images from Unsplash API
// // // // const fetchImage = async (placeName) => {
// // // //     const accessKey = 'JSo_qClUOf_BDuNOVZSDa0BS61J_4uTnnAJ9iiT5leE'; // Replace with your actual Unsplash API Key
// // // //     const endpoint = `https://api.unsplash.com/search/photos?query=${placeName}&client_id=${accessKey}`;
// // // //     try {
// // // //         const response = await fetch(endpoint);
// // // //         const data = await response.json();
// // // //         console.log(`Fetched image for ${placeName}:`, data.results); // Log fetched images
// // // //         return data.results.length > 0 ? data.results[0]?.urls?.regular : '/placeholder.png'; // Default to placeholder if no images are found
// // // //     } catch (error) {
// // // //         console.error("Error fetching image for", placeName, error);
// // // //         return '/placeholder.png'; // Fallback to placeholder if error occurs
// // // //     }
// // // // };

// // // // // Component to render the image card for each place
// // // // const ImageCard = ({ item, imageUrl, handleRedirect }) => {
// // // //     const timeToTravel = item.timeToTravel || 'N/A'; // Fallback value if timeToTravel is missing

// // // //     return (
// // // //         <div
// // // //             className="flex mb-4 items-center p-4 border rounded-lg shadow-lg cursor-pointer"
// // // //             onClick={() => handleRedirect(item)}
// // // //         >
// // // //             <img
// // // //                 src={imageUrl}
// // // //                 alt={item.placeName}
// // // //                 className="w-48 h-48 object-cover rounded-lg mr-4"
// // // //             />
// // // //             <div>
// // // //                 <h4 className='font-medium'>{item.placeName}</h4>
// // // //                 <p>{item.placeDetails}</p>
// // // //                 <p><strong>Time to Travel:</strong> {timeToTravel}</p>
// // // //                 <p><strong>Best Time to Visit:</strong> {item.bestTimeToVisit}</p>
// // // //                 <p><strong>Ticket Pricing:</strong> {item.ticketPricing}</p>
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // };

// // // // function PlacesToVisit({ trip }) {
// // // //     const [images, setImages] = useState({}); // To store fetched images for each place

// // // //     useEffect(() => {
// // // //         console.log('Trip data:', trip); // Log trip data for debugging

// // // //         // Fetch images for all places when the component is mounted
// // // //         const fetchAllImages = async () => {
// // // //             const newImages = {};
// // // //             if (trip?.tripData?.itinerary) {
// // // //                 // Loop through all the days in itinerary
// // // //                 for (const day of Object.values(trip?.tripData?.itinerary || {})) {
// // // //                     // Loop through each place in the day's plan
// // // //                     for (const item of day.plan) {
// // // //                         console.log('Fetching image for:', item.placeName); // Log place name being fetched
// // // //                         if (!newImages[item.placeName]) {
// // // //                             const imageUrl = await fetchImage(item.placeName);
// // // //                             newImages[item.placeName] = imageUrl;
// // // //                         }
// // // //                     }
// // // //                 }
// // // //             }
// // // //             setImages(newImages);
// // // //         };

// // // //         fetchAllImages();
// // // //     }, [trip]);

// // // //     const handleRedirect = (item) => {
// // // //         // Access Geo Coordinates using bracket notation due to space in the key name
// // // //         const GeoCoordinates = item['Geo Coordinates'];
// // // //         if (!GeoCoordinates || !GeoCoordinates.latitude || !GeoCoordinates.longitude) {
// // // //             console.error("GeoCoordinates or coordinates are missing for:", item.placeName);
// // // //             alert("Coordinates for this location are missing or invalid.");
// // // //             return;
// // // //         }

// // // //         const { latitude, longitude } = GeoCoordinates;
// // // //         const url = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=18/${latitude}/${longitude}`;
// // // //         window.open(url, '_blank'); // Open in a new tab
// // // //     };

// // // //     return (
// // // //         <div>
// // // //             <h2 className='font-bold text-xl mt-5 mb-6'>Places to Visit</h2>

// // // //             <div>
// // // //                 {trip?.tripData?.itinerary && Object.entries(trip.tripData.itinerary).map(([dayKey, dayData], index) => {
// // // //                     console.log('Day data:', dayData); // Log day data for debugging
// // // //                     return (
// // // //                         <div key={index} className="mb-6">
// // // //                             <h3 className='font-semibold text-lg underline'>{`Day ${index + 1}: ${dayData.theme}`}</h3>
// // // //                             <div>
// // // //                                 {dayData.plan && dayData.plan.map((item, itemIndex) => {
// // // //                                     console.log('Rendering place:', item.placeName); // Log each place being rendered
// // // //                                     const imageUrl = images[item.placeName] || '/placeholder.png'; // Fallback to placeholder if image is not found
// // // //                                     return (
// // // //                                         <ImageCard
// // // //                                             key={itemIndex}
// // // //                                             item={item}
// // // //                                             imageUrl={imageUrl}
// // // //                                             handleRedirect={handleRedirect}
// // // //                                         />
// // // //                                     );
// // // //                                 })}
// // // //                             </div>
// // // //                         </div>
// // // //                     );
// // // //                 })}
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // }

// // // // export default PlacesToVisit;


// // // import React, { useState, useEffect } from 'react';

// // // // Helper function to fetch images from Unsplash API
// // // const fetchImage = async (placeName) => {
// // //     const accessKey = 'JSo_qClUOf_BDuNOVZSDa0BS61J_4uTnnAJ9iiT5leE'; // Replace with your actual Unsplash API Key
// // //     const endpoint = `https://api.unsplash.com/search/photos?query=${placeName}&client_id=${accessKey}`;
// // //     try {
// // //         const response = await fetch(endpoint);
// // //         const data = await response.json();
// // //         console.log(`Fetched image for ${placeName}:`, data.results); // Log fetched images
// // //         return data.results.length > 0 ? data.results[0]?.urls?.regular : '/placeholder.png'; // Default to placeholder if no images are found
// // //     } catch (error) {
// // //         console.error("Error fetching image for", placeName, error);
// // //         return '/placeholder.png'; // Fallback to placeholder if error occurs
// // //     }
// // // };

// // // // Component to render the image card for each place
// // // const ImageCard = ({ item, imageUrl, handleRedirect }) => {
// // //     const timeToTravel = item.timeToTravel || 'N/A'; // Fallback value if timeToTravel is missing

// // //     return (
// // //         <div
// // //             className="flex mb-4 items-center p-4 border rounded-lg shadow-lg cursor-pointer"
// // //             onClick={() => handleRedirect(item)}
// // //         >
// // //             <img
// // //                 src={imageUrl}
// // //                 alt={item.placeName}
// // //                 className="w-48 h-48 object-cover rounded-lg mr-4"
// // //             />
// // //             <div>
// // //                 <h4 className='font-medium'>{item.placeName}</h4>
// // //                 <p>{item.placeDetails}</p>
// // //                 <p><strong>Time to Travel:</strong> {timeToTravel}</p>
// // //                 <p><strong>Best Time to Visit:</strong> {item.bestTimeToVisit}</p>
// // //                 <p><strong>Ticket Pricing:</strong> {item.ticketPricing}</p>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // function PlacesToVisit({ trip }) {
// // //     const [images, setImages] = useState({}); // To store fetched images for each place

// // //     useEffect(() => {
// // //         console.log('Trip data:', trip); // Log trip data for debugging

// // //         // Fetch images for all places when the component is mounted
// // //         const fetchAllImages = async () => {
// // //             const newImages = {};
// // //             if (trip?.tripData?.itinerary) {
// // //                 // Loop through all the days in itinerary
// // //                 for (const day of Object.values(trip?.tripData?.itinerary || {})) {
// // //                     // Loop through each place in the day's plan
// // //                     for (const item of day.plan) {
// // //                         console.log('Fetching image for:', item.placeName); // Log place name being fetched
// // //                         if (!newImages[item.placeName]) {
// // //                             const imageUrl = await fetchImage(item.placeName);
// // //                             newImages[item.placeName] = imageUrl;
// // //                         }
// // //                     }
// // //                 }
// // //             }
// // //             setImages(newImages);
// // //         };

// // //         fetchAllImages();
// // //     }, [trip]);

// // //     const handleRedirect = (item) => {
// // //         // Access Geo Coordinates using bracket notation due to space in the key name
// // //         const GeoCoordinates = item['Geo Coordinates'];
// // //         if (!GeoCoordinates || !GeoCoordinates.latitude || !GeoCoordinates.longitude) {
// // //             console.error("GeoCoordinates or coordinates are missing for:", item.placeName);
// // //             alert("Coordinates for this location are missing or invalid.");
// // //             return;
// // //         }

// // //         const { latitude, longitude } = GeoCoordinates;
// // //         const url = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=18/${latitude}/${longitude}`;
// // //         window.open(url, '_blank'); // Open in a new tab
// // //     };

// // //     return (
// // //         <div>
// // //             <h2 className='font-bold text-xl mt-5 mb-6'>Places to Visit</h2>

// // //             <div>
// // //                 {trip?.tripData?.itinerary && Object.entries(trip.tripData.itinerary).map(([dayKey, dayData], index) => {
// // //                     console.log('Day data:', dayData); // Log day data for debugging
// // //                     return (
// // //                         <div key={index} className="mb-6">
// // //                             <h3 className='font-semibold text-lg underline'>{`Day ${index + 1}: ${dayData.theme}`}</h3>
// // //                             <div>
// // //                                 {dayData.plan && dayData.plan.map((item, itemIndex) => {
// // //                                     console.log('Rendering place:', item.placeName); // Log each place being rendered
// // //                                     const imageUrl = images[item.placeName] || '/placeholder.png'; // Fallback to placeholder if image is not found
// // //                                     return (
// // //                                         <ImageCard
// // //                                             key={itemIndex}
// // //                                             item={item}
// // //                                             imageUrl={imageUrl}
// // //                                             handleRedirect={handleRedirect}
// // //                                         />
// // //                                     );
// // //                                 })}
// // //                             </div>
// // //                         </div>
// // //                     );
// // //                 })}
// // //             </div>
// // //         </div>
// // //     );
// // // }

// // // export default PlacesToVisit;

// // import React, { useState, useEffect } from 'react';

// // // Helper function to fetch images from Unsplash API (Optional if you want to replace static images)
// // const fetchImage = async (placeName) => {
// //     const accessKey = 'JSo_qClUOf_BDuNOVZSDa0BS61J_4uTnnAJ9iiT5leE'; // Replace with your actual Unsplash API Key
// //     const endpoint = `https://api.unsplash.com/search/photos?query=${placeName}&client_id=${accessKey}`;
// //     try {
// //         const response = await fetch(endpoint);
// //         const data = await response.json();
// //         console.log(`Fetched image for ${placeName}:`, data.results); // Log fetched images
// //         return data.results.length > 0 ? data.results[0]?.urls?.regular : '/placeholder.png'; // Default to placeholder if no images are found
// //     } catch (error) {
// //         console.error("Error fetching image for", placeName, error);
// //         return '/placeholder.png'; // Fallback to placeholder if error occurs
// //     }
// // };

// // // Component to render the image card for each place
// // const ImageCard = ({ item, imageUrl, handleRedirect }) => {
// //     const timeToTravel = item.timeToTravel || 'N/A'; // Fallback value if timeToTravel is missing

// //     return (
// //         <div
// //             className="flex mb-4 items-center p-4 border rounded-lg shadow-lg cursor-pointer"
// //             onClick={() => handleRedirect(item)}
// //         >
// //             <img
// //                 src={imageUrl}
// //                 alt={item.placeName}
// //                 className="w-48 h-48 object-cover rounded-lg mr-4"
// //             />
// //             <div>
// //                 <h4 className='font-medium'>{item.placeName}</h4>
// //                 <p>{item.placeDetails}</p>
// //                 <p><strong>Time to Travel:</strong> {timeToTravel}</p>
// //                 <p><strong>Best Time to Visit:</strong> {item.bestTimeToVisit}</p>
// //                 <p><strong>Ticket Pricing:</strong> {item.ticketPricing}</p>
// //             </div>
// //         </div>
// //     );
// // };

// // // Component to render hotel details
// // const HotelCard = ({ hotel }) => {
// //     return (
// //         <div className="mb-4 p-4 border rounded-lg shadow-lg">
// //             <img
// //                 src={hotel.hotelImageUrl}
// //                 alt={hotel.hotelName}
// //                 className="w-48 h-48 object-cover rounded-lg mr-4"
// //             />
// //             <div>
// //                 <h4 className="font-medium">{hotel.hotelName}</h4>
// //                 <p>{hotel.hotelAddress}</p>
// //                 <p><strong>Price Range:</strong> {hotel.price}</p>
// //                 <p><strong>Rating:</strong> {hotel.rating}</p>
// //             </div>
// //         </div>
// //     );
// // };

// // function PlacesToVisit({ trip }) {
// //     const [images, setImages] = useState({}); // To store fetched images for each place

// //     useEffect(() => {
// //         console.log('Trip data:', trip); // Log trip data for debugging

// //         // Fetch images for all places when the component is mounted
// //         const fetchAllImages = async () => {
// //             const newImages = {};
// //             if (trip?.tripData?.itinerary) {
// //                 // Loop through all the days in itinerary
// //                 for (const day of Object.values(trip?.tripData?.itinerary || {})) {
// //                     // Loop through each place in the day's plan
// //                     for (const item of day.places) {
// //                         console.log('Fetching image for:', item.placeName); // Log place name being fetched
// //                         if (!newImages[item.placeName]) {
// //                             const imageUrl = await fetchImage(item.placeName);
// //                             newImages[item.placeName] = imageUrl;
// //                         }
// //                     }
// //                 }
// //             }
// //             setImages(newImages);
// //         };

// //         fetchAllImages();
// //     }, [trip]);

// //     const handleRedirect = (item) => {
// //         // Access Geo Coordinates using bracket notation due to space in the key name
// //         const GeoCoordinates = item['geoCoordinates'];
// //         if (!GeoCoordinates || !GeoCoordinates.latitude || !GeoCoordinates.longitude) {
// //             console.error("GeoCoordinates or coordinates are missing for:", item.placeName);
// //             alert("Coordinates for this location are missing or invalid.");
// //             return;
// //         }

// //         const { latitude, longitude } = GeoCoordinates;
// //         const url = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=18/${latitude}/${longitude}`;
// //         window.open(url, '_blank'); // Open in a new tab
// //     };

// //     return (
// //         <div>
// //             <h2 className="font-bold text-xl mt-5 mb-6">Places to Visit</h2>

// //             {/* Render Hotels */}
// //             <h3 className="font-semibold text-lg underline mb-4">Hotels</h3>
// //             <div>
// //                 {trip?.tripData?.hotels?.map((hotel, index) => (
// //                     <HotelCard key={index} hotel={hotel} />
// //                 ))}
// //             </div>

// //             {/* Render Itinerary */}
// //             <div>
// //                 {trip?.tripData?.itinerary &&
// //                     trip?.tripData?.itinerary.map((dayData, index) => {
// //                         console.log('Day data:', dayData); // Log day data for debugging
// //                         return (
// //                             <div key={index} className="mb-6">
// //                                 <h3 className="font-semibold text-lg underline">{`Day ${index + 1}: ${dayData.theme}`}</h3>
// //                                 <div>
// //                                     {dayData.places &&
// //                                         dayData.places.map((item, itemIndex) => {
// //                                             console.log('Rendering place:', item.placeName); // Log each place being rendered
// //                                             const imageUrl = images[item.placeName] || '/placeholder.png'; // Fallback to placeholder if image is not found
// //                                             return (
// //                                                 <ImageCard
// //                                                     key={itemIndex}
// //                                                     item={item}
// //                                                     imageUrl={imageUrl}
// //                                                     handleRedirect={handleRedirect}
// //                                                 />
// //                                             );
// //                                         })}
// //                                 </div>
// //                             </div>
// //                         );
// //                     })}
// //             </div>
// //         </div>
// //     );
// // }

// // export default PlacesToVisit;



// import React, { useState, useEffect } from 'react';

// // Helper function to fetch images from Unsplash API (Optional if you want to replace static images)
// const fetchImage = async (placeName) => {
//     const accessKey = 'JSo_qClUOf_BDuNOVZSDa0BS61J_4uTnnAJ9iiT5leE'; // Replace with your actual Unsplash API Key
//     const endpoint = `https://api.unsplash.com/search/photos?query=${placeName}&client_id=${accessKey}`;
//     try {
//         const response = await fetch(endpoint);
//         const data = await response.json();
//         console.log(`Fetched image for ${placeName}:`, data.results); // Log fetched images
//         return data.results.length > 0 ? data.results[0]?.urls?.regular : '/placeholder.png'; // Default to placeholder if no images are found
//     } catch (error) {
//         console.error("Error fetching image for", placeName, error);
//         return '/placeholder.png'; // Fallback to placeholder if error occurs
//     }
// };

// // Component to render the image card for each place
// const ImageCard = ({ item, imageUrl, handleRedirect }) => {
//     const timeToTravel = item.timeToTravel || 'N/A'; // Fallback value if timeToTravel is missing

//     return (
//         <div
//             className="flex mb-4 items-center p-4 border rounded-lg shadow-lg cursor-pointer"
//             onClick={() => handleRedirect(item)}
//         >
//             <img
//                 src={imageUrl}
//                 alt={item.placeName}
//                 className="w-48 h-48 object-cover rounded-lg mr-4"
//             />
//             <div>
//                 <h4 className='font-medium'>{item.placeName}</h4>
//                 <p>{item.placeDetails}</p>
//                 <p><strong>Time to Travel:</strong> {timeToTravel}</p>
//                 <p><strong>Best Time to Visit:</strong> {item.bestTimeToVisit}</p>
//                 <p><strong>Ticket Pricing:</strong> {item.ticketPricing}</p>
//             </div>
//         </div>
//     );
// };

// // Component to render hotel details (kept separate)
// const HotelCard = ({ hotel }) => {
//     return (
//         <div className="mb-4 p-4 border rounded-lg shadow-lg">
//             <img
//                 src={hotel.hotelImageUrl}
//                 alt={hotel.hotelName}
//                 className="w-48 h-48 object-cover rounded-lg mr-4"
//             />
//             <div>
//                 <h4 className="font-medium">{hotel.hotelName}</h4>
//                 <p>{hotel.hotelAddress}</p>
//                 <p><strong>Price Range:</strong> {hotel.price}</p>
//                 <p><strong>Rating:</strong> {hotel.rating}</p>
//             </div>
//         </div>
//     );
// };

// function PlacesToVisit({ trip }) {
//     const [images, setImages] = useState({}); // To store fetched images for each place

//     useEffect(() => {
//         console.log('Trip data:', trip); // Log trip data for debugging

//         // Fetch images for all places when the component is mounted
//         const fetchAllImages = async () => {
//             const newImages = {};
//             if (trip?.tripData?.itinerary) {
//                 // Loop through all the days in itinerary
//                 for (const day of Object.values(trip?.tripData?.itinerary || {})) {
//                     // Loop through each place in the day's plan, excluding hotels
//                     for (const item of day.places) {
//                         console.log('Fetching image for:', item.placeName); // Log place name being fetched
//                         if (!newImages[item.placeName]) {
//                             const imageUrl = await fetchImage(item.placeName);
//                             newImages[item.placeName] = imageUrl;
//                         }
//                     }
//                 }
//             }
//             setImages(newImages);
//         };

//         fetchAllImages();
//     }, [trip]);

//     const handleRedirect = (item) => {
//         // Access Geo Coordinates using bracket notation due to space in the key name
//         const GeoCoordinates = item['geoCoordinates'];
//         if (!GeoCoordinates || !GeoCoordinates.latitude || !GeoCoordinates.longitude) {
//             console.error("GeoCoordinates or coordinates are missing for:", item.placeName);
//             alert("Coordinates for this location are missing or invalid.");
//             return;
//         }

//         const { latitude, longitude } = GeoCoordinates;
//         const url = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=18/${latitude}/${longitude}`;
//         window.open(url, '_blank'); // Open in a new tab
//     };

//     return (
//         <div>
//             <h2 className="font-bold text-xl mt-5 mb-6">Places to Visit</h2>

//             {/* Render Hotels - Keep separate */}
//             <h3 className="font-semibold text-lg underline mb-4">Hotels</h3>
//             <div>
//                 {trip?.tripData?.hotels?.map((hotel, index) => (
//                     <HotelCard key={index} hotel={hotel} />
//                 ))}
//             </div>

//             {/* Render Itinerary - Only Tourist Spots */}
//             <div>
//                 {trip?.tripData?.itinerary &&
//                     trip?.tripData?.itinerary.map((dayData, index) => {
//                         console.log('Day data:', dayData); // Log day data for debugging
//                         return (
//                             <div key={index} className="mb-6">
//                                 <h3 className="font-semibold text-lg underline">{`Day ${index + 1}: ${dayData.theme}`}</h3>
//                                 <div>
//                                     {dayData.places &&
//                                         dayData.places.map((item, itemIndex) => {
//                                             console.log('Rendering place:', item.placeName); // Log each place being rendered
//                                             const imageUrl = images[item.placeName] || '/placeholder.png'; // Fallback to placeholder if image is not found
//                                             return (
//                                                 <ImageCard
//                                                     key={itemIndex}
//                                                     item={item}
//                                                     imageUrl={imageUrl}
//                                                     handleRedirect={handleRedirect}
//                                                 />
//                                             );
//                                         })}
//                                 </div>
//                             </div>
//                         );
//                     })}
//             </div>
//         </div>
//     );
// }

// export default PlacesToVisit;

import React, { useState, useEffect } from 'react';

// Helper function to fetch images from Unsplash API (Optional if you want to replace static images)
const fetchImage = async (placeName) => {
    const accessKey = 'JSo_qClUOf_BDuNOVZSDa0BS61J_4uTnnAJ9iiT5leE'; // Replace with your actual Unsplash API Key
    const endpoint = `https://api.unsplash.com/search/photos?query=${placeName}&client_id=${accessKey}`;
    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        return data.results.length > 0 ? data.results[0]?.urls?.regular : '/placeholder.png';
    } catch (error) {
        console.error("Error fetching image for", placeName, error);
        return '/placeholder.png'; // Fallback to placeholder if error occurs
    }
};

// Component to render the image card for each place
const ImageCard = ({ item, imageUrl, handleRedirect }) => {
    const timeToTravel = item.timeToTravel || 'N/A'; // Fallback value if timeToTravel is missing

    return (
        <div
            className="flex mb-4 items-center p-4 border rounded-lg shadow-lg cursor-pointer"
            onClick={() => handleRedirect(item)}
        >
            <img
                src={imageUrl}
                alt={item.placeName}
                className="w-48 h-48 object-cover rounded-lg mr-4"
            />
            <div>
                <h4 className='font-medium'>{item.placeName}</h4>
                <p>{item.placeDetails}</p>
                <p><strong>Time to Travel:</strong> {timeToTravel}</p>
                <p><strong>Best Time to Visit:</strong> {item.bestTimeToVisit}</p>
                <p><strong>Ticket Pricing:</strong> {item.ticketPricing}</p>
            </div>
        </div>
    );
};

function PlacesToVisit({ trip }) {
    const [images, setImages] = useState({}); // To store fetched images for each place

    useEffect(() => {
        // Fetch images for all places when the component is mounted
        const fetchAllImages = async () => {
            const newImages = {};
            if (trip?.tripData?.itinerary) {
                // Loop through all the days in itinerary
                for (const day of Object.values(trip?.tripData?.itinerary || {})) {
                    // Loop through each place in the day's plan
                    for (const item of day.places) {
                        if (!newImages[item.placeName]) {
                            const imageUrl = await fetchImage(item.placeName);
                            newImages[item.placeName] = imageUrl;
                        }
                    }
                }
            }
            setImages(newImages);
        };

        fetchAllImages();
    }, [trip]);

    const handleRedirect = (item) => {
        // Access Geo Coordinates using bracket notation due to space in the key name
        const GeoCoordinates = item['geoCoordinates'];
        if (!GeoCoordinates || !GeoCoordinates.latitude || !GeoCoordinates.longitude) {
            console.error("GeoCoordinates or coordinates are missing for:", item.placeName);
            alert("Coordinates for this location are missing or invalid.");
            return;
        }

        const { latitude, longitude } = GeoCoordinates;
        const url = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=18/${latitude}/${longitude}`;
        window.open(url, '_blank'); // Open in a new tab
    };

    return (
        <div>
            <h2 className="font-bold text-xl mt-5 mb-6">Places to Visit</h2>

            <div>
                {trip?.tripData?.itinerary &&
                    trip?.tripData?.itinerary.map((dayData, index) => (
                        <div key={index} className="mb-6">
                            <h3 className="font-semibold text-lg underline">{`Day ${index + 1}: ${dayData.theme}`}</h3>
                            <div>
                                {dayData.places &&
                                    dayData.places.map((item, itemIndex) => {
                                        const imageUrl = images[item.placeName] || '/placeholder.png'; // Fallback to placeholder if image is not found
                                        return (
                                            <ImageCard
                                                key={itemIndex}
                                                item={item}
                                                imageUrl={imageUrl}
                                                handleRedirect={handleRedirect}
                                            />
                                        );
                                    })}
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default PlacesToVisit;
