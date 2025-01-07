// import { db } from '@/service/firebaseConfig';
// import { collection, getDocs, query, where } from 'firebase/firestore';
// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom';

// function MyTrips() {

//     const navigate = useNavigate();

//     const [userTrips, setUserTrips] = useState([]);


//     useEffect(() => {

//         GetUserTrips();
//     }, [])
//     const GetUserTrips = async () => {
//         const user = JSON.parse(localStorage.getItem('user'));

//         if (!user) {

//             navigate('/');
//             return;
//         }

//         setUserTrips([]);
//         const q = query(collection(db, "AITrips"), where("userEmail", "==", user?.email));
//         const querySnapshot = await getDocs(q);
//         querySnapshot.forEach((doc) => {
//             // doc.data() is never undefined for query doc snapshots
//             console.log(doc.id, " => ", doc.data());
//             setUserTrips(prevVal => [...prevVal, doc.data()])
//         });
//     }
//     return (
//         <div className='sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10'>

//             <h2 className='font-bold text-3xl'>My Trips</h2>

//             <div>

//                 {



//                     userTrips.map((trip, index) => (

//                     ))
//                 }
//             </div>
//         </div>
//     )
// }

// export default MyTrips


import { db } from '@/service/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; // Import Link for navigation
import axios from 'axios';

function MyTrips() {
    const navigate = useNavigate();
    const [userTrips, setUserTrips] = useState([]);
    const [photos, setPhotos] = useState({}); // To store photos for each destination

    const accessKey = 'JSo_qClUOf_BDuNOVZSDa0BS61J_4uTnnAJ9iiT5leE';

    useEffect(() => {
        GetUserTrips();
    }, []);

    const GetUserTrips = async () => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            navigate('/');
            return;
        }

        setUserTrips([]);
        const q = query(collection(db, 'AITrips'), where('userEmail', '==', user?.email));
        const querySnapshot = await getDocs(q);
        const trips = [];
        querySnapshot.forEach((doc) => {
            trips.push({ id: doc.id, data: doc.data() }); // Include doc.id as a unique identifier
        });
        setUserTrips(trips);
        fetchPhotos(trips);
    };

    const fetchPhotos = async (trips) => {
        const photoPromises = trips.map(async (trip) => {
            const location = trip.data.userSelection?.location.split(',')[0]; // Use main city name
            try {
                const endpoint = `https://api.unsplash.com/search/photos?query=${location}&client_id=${accessKey}`;
                const response = await axios.get(endpoint);
                return { location, photoUrl: response.data.results[0]?.urls?.regular };
            } catch (error) {
                console.error(`Error fetching photo for ${location}:`, error);
                return { location, photoUrl: null };
            }
        });

        const photoResults = await Promise.all(photoPromises);
        const photoMap = {};
        photoResults.forEach(({ location, photoUrl }) => {
            photoMap[location] = photoUrl;
        });
        setPhotos(photoMap);
    };

    const getBudgetLabel = (budget) => {
        if (!budget) return 'N/A';

        const budgetRange = budget.split(' - ').map(price => parseInt(price.replace('$', '').replace(',', '')));

        if (budgetRange.length === 2) {
            const [min, max] = budgetRange;

            if (min >= 2000) return 'Luxury';
            if (min >= 1000) return 'Comfortable';
            return 'Affordable';
        }

        return 'Affordable';
    };

    return (
        <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
            <h2 className="font-bold text-3xl mb-5">My Trips</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {userTrips.length > 0 ? (
                    userTrips.map((trip, index) => {
                        const location = trip.data.userSelection?.location.split(',')[0]; // Main city name
                        const days = trip.data.userSelection?.days || 'N/A';
                        const budget = trip.data.userSelection?.budget || 'N/A';
                        const persons = trip.data.userSelection?.persons || 'N/A';
                        const budgetLabel = getBudgetLabel(budget);

                        return (
                            <Link
                                key={index}
                                to={`/view-trip/${trip.id}`} // Dynamic URL using trip ID
                                className="border rounded-lg shadow-md overflow-hidden bg-white cursor-pointer"
                            >
                                {photos[location] ? (
                                    <img
                                        src={photos[location]}
                                        alt={location}
                                        className="h-48 w-full object-cover"
                                    />
                                ) : (
                                    <div className="h-48 w-full bg-gray-300 flex items-center justify-center text-gray-700">
                                        No Image Available
                                    </div>
                                )}
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">{location}</h3>
                                    <p className="text-gray-600">
                                        {days}-day trip with {budgetLabel} budget for {persons}
                                    </p>
                                </div>
                            </Link>
                        );
                    })
                ) : (
                    <p className="text-gray-500">No trips found</p>
                )}
            </div>
        </div>
    );
}

export default MyTrips;
