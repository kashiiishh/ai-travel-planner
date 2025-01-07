import { Button } from '@/components/ui/button';
import React, { useState, useEffect } from 'react';
import { FaShareFromSquare } from "react-icons/fa6";

// Helper function to fetch images from Unsplash API
const fetchImage = async (location) => {
    const accessKey = 'JSo_qClUOf_BDuNOVZSDa0BS61J_4uTnnAJ9iiT5leE'; // Replace with your actual Unsplash API Key
    const endpoint = `https://api.unsplash.com/search/photos?query=${location}&client_id=${accessKey}`;
    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        return data.results.length > 0 ? data.results[0]?.urls?.regular : '/placeholder.png'; // Default to placeholder if no image found
    } catch (error) {
        console.error("Error fetching image:", error);
        return '/placeholder.png'; // Fallback to placeholder in case of error
    }
};

function InformationSection({ trip }) {
    const [bannerImage, setBannerImage] = useState('/placeholder.png'); // Default image

    useEffect(() => {
        const fetchBannerImage = async () => {
            if (trip?.userSelection?.location) {
                const imageUrl = await fetchImage(trip.userSelection.location);
                setBannerImage(imageUrl);
            }
        };
        fetchBannerImage();
    }, [trip]);

    return (
        <div>
            {/* Dynamic banner image */}
            <img src={bannerImage} className='h-[340px] w-full object-cover rounded' alt={`${trip?.userSelection?.location} Banner`} />

            <div className='flex justify-between items-center'>
                <div className='my-5 gap-2 flex flex-col'>
                    <h2 className='text-2xl font-bold'>{trip?.userSelection?.location}</h2>

                    <div className='flex gap-5'>
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>📅 {trip?.userSelection?.days} Days</h2>
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>💸 {trip?.tripData?.budget} budget</h2>
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>🧔🏻 No. of Travellers: {trip?.userSelection?.persons}</h2>
                    </div>
                </div>

                <Button>
                    <FaShareFromSquare /> Share
                </Button>
            </div>
        </div>
    );
}

export default InformationSection;
