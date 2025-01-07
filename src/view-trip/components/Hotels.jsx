// // // import React, { useState, useEffect } from 'react';

// // // // Helper function to fetch images from Unsplash API
// // // const fetchImage = async (query) => {
// // //     const accessKey = 'JSo_qClUOf_BDuNOVZSDa0BS61J_4uTnnAJ9iiT5leE'; // Replace with your Unsplash API Key
// // //     const endpoint = `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`;
// // //     try {
// // //         const response = await fetch(endpoint);
// // //         const data = await response.json();
// // //         return data.results.length > 0 ? data.results[0]?.urls?.regular : '/placeholder.png'; // Default placeholder
// // //     } catch (error) {
// // //         console.error("Error fetching image:", error);
// // //         return '/placeholder.png'; // Fallback in case of error
// // //     }
// // // };

// // // // Function to extract and standardize hotel data from nested structures
// // // const extractHotels = (tripData) => {
// // //     if (!tripData || !Array.isArray(tripData)) return [];

// // //     for (const item of tripData) {
// // //         if (item.travelPlan && item.travelPlan.hotels && Array.isArray(item.travelPlan.hotels)) {
// // //             console.log("Found hotels inside travelPlan:", item.travelPlan.hotels); // Debugging
// // //             return item.travelPlan.hotels.map((hotel) => ({
// // //                 name: hotel["HotelName"] || "Unknown Hotel",
// // //                 address: hotel["Hotel address"] || "Address not available",
// // //                 price: hotel["Price"] || "Price not available",
// // //                 rating: hotel["rating"] || "No rating",
// // //                 imageUrl: hotel["hotel image URL"] || null,
// // //                 geoCoordinates: hotel["geo coordinates"] || {},
// // //                 description: hotel["descriptions"] || "No description available",
// // //             }));
// // //         }
// // //     }

// // //     console.warn("No hotels found in travelPlan."); // Debugging
// // //     return [];
// // // };

// // // function Hotels({ trip }) {
// // //     const [hotels, setHotels] = useState([]); // Store standardized hotel data
// // //     const [hotelImages, setHotelImages] = useState({}); // Store fetched images for each hotel

// // //     // Map and fetch data when the trip changes
// // //     useEffect(() => {
// // //         const fetchHotelImages = async () => {
// // //             const tripData = trip?.tripData || [];
// // //             console.log("Raw Trip Data:", tripData); // Debugging

// // //             const standardizedHotels = extractHotels(tripData);
// // //             console.log("Standardized Hotels:", standardizedHotels); // Debugging
// // //             setHotels(standardizedHotels);

// // //             const images = {};
// // //             for (const hotel of standardizedHotels) {
// // //                 const query = hotel.name || hotel.address || 'hotel';
// // //                 images[query] = await fetchImage(query);
// // //             }
// // //             setHotelImages(images);
// // //         };

// // //         fetchHotelImages();
// // //     }, [trip]);

// // //     // Handle click event for opening map links
// // //     const handleHotelClick = (hotel) => {
// // //         const { latitude, longitude } = hotel.geoCoordinates;
// // //         if (latitude && longitude) {
// // //             const mapUrl = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=18/${latitude}/${longitude}`;
// // //             window.open(mapUrl, '_blank');
// // //         } else {
// // //             alert('Location not available for this hotel.');
// // //         }
// // //     };

// // //     return (
// // //         <div>
// // //             <h2 className="font-bold text-xl mt-5">Hotel Recommendations</h2>
// // //             <div className="flex grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-3">
// // //                 {hotels.length > 0 ? (
// // //                     hotels.map((hotel, index) => {
// // //                         const imageUrl = hotelImages[hotel.name] || hotel.imageUrl || '/placeholder.png';

// // //                         return (
// // //                             <div
// // //                                 key={index}
// // //                                 className="rounded overflow-hidden shadow-lg hover:scale-105 transition-all cursor-pointer"
// // //                                 onClick={() => handleHotelClick(hotel)}
// // //                             >
// // //                                 <img
// // //                                     src={imageUrl}
// // //                                     alt={hotel.name}
// // //                                     className="h-64 w-full object-cover"
// // //                                 />
// // //                                 <div className="p-2 flex flex-col gap-2">
// // //                                     <h2 className="font-bold text-lg text-center">
// // //                                         {hotel.name}
// // //                                     </h2>
// // //                                     <h2 className="font-semibold text-md text-gray-500 text-center">
// // //                                         📍{hotel.address}
// // //                                     </h2>
// // //                                     <h2 className="text-sm font-medium text-center">
// // //                                         💰{hotel.price} per night
// // //                                     </h2>
// // //                                     <h2 className="text-sm text-gray-500 font-medium text-center">
// // //                                         ⭐{hotel.rating} stars
// // //                                     </h2>
// // //                                 </div>
// // //                             </div>
// // //                         );
// // //                     })
// // //                 ) : (
// // //                     <p className="text-center text-gray-500 mt-5">No hotels available to display.</p>
// // //                 )}
// // //             </div>
// // //         </div>
// // //     );
// // // }

// // // export default Hotels;







// // import React, { useState, useEffect } from 'react';

// // // Helper function to fetch images from Unsplash API
// // const fetchImage = async (query) => {
// //     const accessKey = 'JSo_qClUOf_BDuNOVZSDa0BS61J_4uTnnAJ9iiT5leE'; // Replace with your Unsplash API Key
// //     const endpoint = `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`;
// //     try {
// //         const response = await fetch(endpoint);
// //         const data = await response.json();
// //         return data.results.length > 0 ? data.results[0]?.urls?.regular : '/placeholder.png'; // Default placeholder
// //     } catch (error) {
// //         console.error("Error fetching image:", error);
// //         return '/placeholder.png'; // Fallback in case of error
// //     }
// // };

// // // Function to extract and standardize hotel data from nested structures
// // const extractHotels = (tripData) => {
// //     if (!tripData || !Array.isArray(tripData)) return [];

// //     for (const item of tripData) {
// //         if (item.travelPlan && item.travelPlan.hotels && Array.isArray(item.travelPlan.hotels)) {
// //             console.log("Found hotels inside travelPlan:", item.travelPlan.hotels); // Debugging
// //             return item.travelPlan.hotels.map((hotel) => ({
// //                 name: hotel["hotelName"] || "Unknown Hotel",
// //                 address: hotel["hotelAddress"] || "Address not available",
// //                 price: hotel["price"] || "Price not available",
// //                 rating: hotel["rating"] || "No rating",
// //                 imageUrl: hotel["hotelImageUrl"] || null,
// //                 geoCoordinates: hotel["geoCoordinates"] || {},
// //                 description: hotel["description"] || "No description available",
// //             }));
// //         }
// //     }

// //     console.warn("No hotels found in travelPlan."); // Debugging
// //     return [];
// // };

// // function Hotels({ trip }) {
// //     const [hotels, setHotels] = useState([]); // Store standardized hotel data
// //     const [hotelImages, setHotelImages] = useState({}); // Store fetched images for each hotel

// //     // Map and fetch data when the trip changes
// //     useEffect(() => {
// //         const fetchHotelImages = async () => {
// //             const tripData = trip?.tripData || [];
// //             console.log("Raw Trip Data:", tripData); // Debugging

// //             const standardizedHotels = extractHotels(tripData);
// //             console.log("Standardized Hotels:", standardizedHotels); // Debugging
// //             setHotels(standardizedHotels);

// //             const images = {};
// //             for (const hotel of standardizedHotels) {
// //                 const query = hotel.name || hotel.address || 'hotel';
// //                 images[query] = await fetchImage(query);
// //             }
// //             setHotelImages(images);
// //         };

// //         fetchHotelImages();
// //     }, [trip]);

// //     // Handle click event for opening map links
// //     const handleHotelClick = (hotel) => {
// //         const { latitude, longitude } = hotel.geoCoordinates;
// //         if (latitude && longitude) {
// //             const mapUrl = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=18/${latitude}/${longitude}`;
// //             window.open(mapUrl, '_blank');
// //         } else {
// //             alert('Location not available for this hotel.');
// //         }
// //     };

// //     return (
// //         <div>
// //             <h2 className="font-bold text-xl mt-5">Hotel Recommendations</h2>
// //             <div className="flex grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-3">
// //                 {hotels.length > 0 ? (
// //                     hotels.map((hotel, index) => {
// //                         const imageUrl = hotelImages[hotel.name] || hotel.imageUrl || '/placeholder.png';

// //                         return (
// //                             <div
// //                                 key={index}
// //                                 className="rounded overflow-hidden shadow-lg hover:scale-105 transition-all cursor-pointer"
// //                                 onClick={() => handleHotelClick(hotel)}
// //                             >
// //                                 <img
// //                                     src={imageUrl}
// //                                     alt={hotel.name}
// //                                     className="h-64 w-full object-cover"
// //                                 />
// //                                 <div className="p-2 flex flex-col gap-2">
// //                                     <h2 className="font-bold text-lg text-center">
// //                                         {hotel.name}
// //                                     </h2>
// //                                     <h2 className="font-semibold text-md text-gray-500 text-center">
// //                                         📍{hotel.address}
// //                                     </h2>
// //                                     <h2 className="text-sm font-medium text-center">
// //                                         💰{hotel.price} per night
// //                                     </h2>
// //                                     <h2 className="text-sm text-gray-500 font-medium text-center">
// //                                         ⭐{hotel.rating} stars
// //                                     </h2>
// //                                     <p className="text-sm text-gray-600 text-center">
// //                                         {hotel.description}
// //                                     </p>
// //                                 </div>
// //                             </div>
// //                         );
// //                     })
// //                 ) : (
// //                     <p className="text-center text-gray-500 mt-5">No hotels available to display.</p>
// //                 )}
// //             </div>
// //         </div>
// //     );
// // }

// // export default Hotels;

// import React, { useState, useEffect } from 'react';

// // Helper function to fetch images from Unsplash API
// const fetchImage = async (query) => {
//     const accessKey = 'JSo_qClUOf_BDuNOVZSDa0BS61J_4uTnnAJ9iiT5leE'; // Replace with your Unsplash API Key
//     const endpoint = `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`;
//     try {
//         const response = await fetch(endpoint);
//         const data = await response.json();
//         return data.results.length > 0 ? data.results[0]?.urls?.regular : '/placeholder.png'; // Default placeholder
//     } catch (error) {
//         console.error("Error fetching image:", error);
//         return '/placeholder.png'; // Fallback in case of error
//     }
// };

// // Function to extract and standardize hotel data from nested structures
// const extractHotels = (tripData) => {
//     if (!tripData || !Array.isArray(tripData)) return [];

//     for (const item of tripData) {
//         if (item.travelPlan && item.travelPlan.hotels && Array.isArray(item.travelPlan.hotels)) {
//             console.log("Found hotels inside travelPlan:", item.travelPlan.hotels); // Debugging
//             return item.travelPlan.hotels.map((hotel) => ({
//                 name: hotel["hotelName"] || "Unknown Hotel",
//                 address: hotel["hotelAddress"] || "Address not available",
//                 price: hotel["price"] || "Price not available",
//                 rating: hotel["rating"] || "No rating",
//                 imageUrl: hotel["hotelImageUrl"] || null,
//                 geoCoordinates: hotel["geoCoordinates"] || {},
//                 description: hotel["description"] || "No description available",
//             }));
//         }
//     }

//     console.warn("No hotels found in travelPlan."); // Debugging
//     return [];
// };

// function Hotels({ trip }) {
//     const [hotels, setHotels] = useState([]); // Store standardized hotel data
//     const [hotelImages, setHotelImages] = useState({}); // Store fetched images for each hotel

//     // Map and fetch data when the trip changes
//     useEffect(() => {
//         const fetchHotelImages = async () => {
//             const tripData = trip?.tripData || [];
//             console.log("Raw Trip Data:", tripData); // Debugging

//             const standardizedHotels = extractHotels(tripData);
//             console.log("Standardized Hotels:", standardizedHotels); // Debugging
//             setHotels(standardizedHotels);

//             const images = {};
//             for (const hotel of standardizedHotels) {
//                 const query = hotel.name || hotel.address || 'hotel';
//                 images[query] = await fetchImage(query);
//             }
//             setHotelImages(images);
//         };

//         fetchHotelImages();
//     }, [trip]);

//     // Handle click event for opening map links
//     const handleHotelClick = (hotel) => {
//         const { latitude, longitude } = hotel.geoCoordinates;
//         if (latitude && longitude) {
//             const mapUrl = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=18/${latitude}/${longitude}`;
//             window.open(mapUrl, '_blank');
//         } else {
//             alert('Location not available for this hotel.');
//         }
//     };

//     return (
//         <div>
//             <h2 className="font-bold text-xl mt-5">Hotel Recommendations</h2>
//             <div className="flex grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-3">
//                 {hotels.length > 0 ? (
//                     hotels.map((hotel, index) => {
//                         const imageUrl = hotelImages[hotel.name] || hotel.imageUrl || '/placeholder.png';

//                         return (
//                             <div
//                                 key={index}
//                                 className="rounded overflow-hidden shadow-lg hover:scale-105 transition-all cursor-pointer"
//                                 onClick={() => handleHotelClick(hotel)}
//                             >
//                                 <img
//                                     src={imageUrl}
//                                     alt={hotel.name}
//                                     className="h-64 w-full object-cover"
//                                 />
//                                 <div className="p-2 flex flex-col gap-2">
//                                     <h2 className="font-bold text-lg text-center">
//                                         {hotel.name}
//                                     </h2>
//                                     <h2 className="font-semibold text-md text-gray-500 text-center">
//                                         📍{hotel.address}
//                                     </h2>
//                                     <h2 className="text-sm font-medium text-center">
//                                         💰{hotel.price} per night
//                                     </h2>
//                                     <h2 className="text-sm text-gray-500 font-medium text-center">
//                                         ⭐{hotel.rating} stars
//                                     </h2>
//                                     <p className="text-sm text-gray-600 text-center">
//                                         {hotel.description}
//                                     </p>
//                                 </div>
//                             </div>
//                         );
//                     })
//                 ) : (
//                     <p className="text-center text-gray-500 mt-5">No hotels available to display.</p>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default Hotels;

import React, { useState, useEffect } from 'react';

// Helper function to fetch images from Unsplash API
const fetchImage = async (query) => {
    const accessKey = 'JSo_qClUOf_BDuNOVZSDa0BS61J_4uTnnAJ9iiT5leE'; // Replace with your Unsplash API Key
    const endpoint = `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`;
    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        return data.results.length > 0 ? data.results[0]?.urls?.regular : '/placeholder.png'; // Default placeholder
    } catch (error) {
        console.error("Error fetching image:", error);
        return '/placeholder.png'; // Fallback in case of error
    }
};

// Function to extract and standardize hotel data from tripData
const extractHotels = (tripData) => {
    if (!tripData || !Array.isArray(tripData.hotels)) return [];

    // Directly return hotels array with standardized structure
    return tripData.hotels.map((hotel) => ({
        name: hotel["hotelName"] || "Unknown Hotel",
        address: hotel["hotelAddress"] || "Address not available",
        price: hotel["price"] || "Price not available",
        rating: hotel["rating"] || "No rating",
        imageUrl: hotel["hotelImageUrl"] || null,
        geoCoordinates: hotel["geoCoordinates"] || {},
        description: hotel["description"] || "No description available",
    }));
};

function Hotels({ trip }) {
    const [hotels, setHotels] = useState([]); // Store standardized hotel data
    const [hotelImages, setHotelImages] = useState({}); // Store fetched images for each hotel

    // Map and fetch data when the trip changes
    useEffect(() => {
        const fetchHotelImages = async () => {
            const tripData = trip?.tripData || {}; // Adjusted to match your data structure
            console.log("Raw Trip Data:", tripData); // Debugging

            const standardizedHotels = extractHotels(tripData);
            console.log("Standardized Hotels:", standardizedHotels); // Debugging
            setHotels(standardizedHotels);

            const images = {};
            for (const hotel of standardizedHotels) {
                const query = hotel.name || hotel.address || 'hotel';
                images[query] = await fetchImage(query);
            }
            setHotelImages(images);
        };

        fetchHotelImages();
    }, [trip]);

    // Handle click event for opening map links
    const handleHotelClick = (hotel) => {
        const { latitude, longitude } = hotel.geoCoordinates;
        if (latitude && longitude) {
            const mapUrl = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=18/${latitude}/${longitude}`;
            window.open(mapUrl, '_blank');
        } else {
            alert('Location not available for this hotel.');
        }
    };

    return (
        <div>
            <h2 className="font-bold text-xl mt-5">Hotel Recommendations</h2>
            <div className="flex grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-3">
                {hotels.length > 0 ? (
                    hotels.map((hotel, index) => {
                        const imageUrl = hotelImages[hotel.name] || hotel.imageUrl || '/placeholder.png';

                        return (
                            <div
                                key={index}
                                className="rounded overflow-hidden shadow-lg hover:scale-105 transition-all cursor-pointer"
                                onClick={() => handleHotelClick(hotel)}
                            >
                                <img
                                    src={imageUrl}
                                    alt={hotel.name}
                                    className="h-64 w-full object-cover"
                                />
                                <div className="p-2 flex flex-col gap-2">
                                    <h2 className="font-bold text-lg text-center">
                                        {hotel.name}
                                    </h2>
                                    <h2 className="font-semibold text-md text-gray-500 text-center">
                                        📍{hotel.address}
                                    </h2>
                                    <h2 className="text-sm font-medium text-center">
                                        💰{hotel.price} per night
                                    </h2>
                                    <h2 className="text-sm text-gray-500 font-medium text-center">
                                        ⭐{hotel.rating} stars
                                    </h2>
                                    <p className="text-sm text-gray-600 text-center">
                                        {hotel.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p className="text-center text-gray-500 mt-5">No hotels available to display.</p>
                )}
            </div>
        </div>
    );
}

export default Hotels;
