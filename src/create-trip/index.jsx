// import React, { useRef, useEffect } from 'react';
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

// function CreateTrip() {


//     return (
//         <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
//             <h2 className='font-bold text-3xl'>Tell us your Travel Preferences</h2>
//             <p className='mt-3 text-gray-500 text-xl'>Just provide your basic information, and our trip planner will generate a customized itinerary based on your preferences.</p>
//             <div className='mt-20'>
//                 <div>
//                     <h2 className='text-xl my-3 font-medium'>What is the destination of your choice?</h2>
//                     <GooglePlacesAutocomplete
//                         apiKey="****"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default CreateTrip;




// import React, { useState } from 'react';

// function CreateTrip() {
//     const [query, setQuery] = useState('');
//     const [results, setResults] = useState([]);
//     const [selectedLocation, setSelectedLocation] = useState('');

//     const handleSearch = async (e) => {
//         const value = e.target.value;
//         setQuery(value);

//         if (value.length > 2) {
//             try {
//                 const response = await fetch(`http://localhost:3001/geocode?q=${encodeURIComponent(value)}`);
//                 const data = await response.json();
//                 setResults(data);
//             } catch (error) {
//                 console.error('Error fetching geocode data:', error);
//             }
//         } else {
//             setResults([]);
//         }
//     };

//     const handleSelect = (result) => {
//         setQuery(result.formatted); // Update the input field
//         setSelectedLocation(result.formatted); // Save selected location in state
//         console.log('Selected Location:', result.formatted); // Log selected location to console
//         setResults([]); // Clear dropdown
//     };

//     return (
//         <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
//             <h2 className='font-bold text-3xl'>Tell us your Travel Preferences</h2>
//             <p className='mt-3 text-gray-500 text-xl'>
//                 Just provide your basic information, and our trip planner will generate a customized itinerary based on your preferences.
//             </p>
//             <div className='mt-20'>
//                 <div>
//                     <h2 className='text-xl my-3 font-medium'>What is the destination of your choice?</h2>
//                     <input
//                         type='text'
//                         value={query}
//                         onChange={handleSearch}
//                         placeholder='Search for a destination...'
//                         className='w-full p-2 border border-gray-300 rounded bg-white'
//                     />
//                     {results.length > 0 && (
//                         <ul className='border border-gray-300 rounded mt-2 bg-white'>
//                             {results.map((result, index) => (
//                                 <li
//                                     key={index}
//                                     onClick={() => handleSelect(result)}
//                                     className='p-2 cursor-pointer hover:bg-gray-100'
//                                 >
//                                     {result.formatted}
//                                 </li>
//                             ))}
//                         </ul>
//                     )}
//                     {selectedLocation && (
//                         <p className='mt-4 text-green-600'>Selected Location: {selectedLocation}</p>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default CreateTrip;


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AI_PROMPT, BudgetOptions, SelectTravelsList } from "@/constants/options";
import { chatSession } from "@/service/AIModel";
import { ChatSession } from "@google/generative-ai";
import React, { useState, useEffect } from "react";
import { toast, Toaster } from "sonner"; // Import sonner's toast

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { doc, setDoc } from "firebase/firestore";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { db } from "@/service/firebaseConfig";
import { useNavigate } from "react-router-dom";



function CreateTrip() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [openDailog, setOpenDailog] = useState(false);
    const [formData, setFormData] = useState({
        location: "",
        days: "",
        budget: "",
        persons: "",
    });

    const handleSearch = async (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value.length > 2) {
            try {
                const response = await fetch(
                    `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(
                        value
                    )}&apiKey=b4f6cf7cf5834931971cfda9622ef219`
                );
                const data = await response.json();
                setResults(data.features || []);
            } catch (error) {
                toast.error("Failed to fetch location data. Please try again.");
            }
        } else {
            setResults([]);
        }
    };

    const handleSelect = (location) => {
        const placeName = location.properties.formatted;
        setQuery(placeName);
        setFormData((prev) => ({
            ...prev,
            location: placeName,
        }));
        setResults([]);
    };

    const handleInputChange = (name, value) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // const onGenerateTrip = () => {

    //     console.log(formData);
    //     if (formData?.days > 10) {
    //         toast.error("Please enter a number of days less than 10.");
    //         return;
    //     }

    //     if (!formData.location || !formData.days || !formData.budget || !formData.persons) {
    //         toast.warning("Please fill out all fields to generate your trip.");
    //         return;
    //     }

    //     toast.success("Your trip has been successfully generated!");
    //     const FINAL_PROMPT = AI_PROMPT

    //         .replace('{location}', formData.location)
    //         .replace('{totalDays}', formData.days)
    //         .replace('{traveler}', formData.persons)
    //         .replace('{budget}', formData.budget)
    //         .replace('{totalDays}', formData.days)

    //     console.log(FINAL_PROMPT);
    // };


    // const onGenerateTrip = () => {
    //     console.log(formData);

    //     if (formData?.days > 10) {
    //         toast.error("Please enter a number of days less than 10.");
    //         return;
    //     }

    //     if (!formData.location || !formData.days || !formData.budget || !formData.persons) {
    //         toast.warning("Please fill out all fields to generate your trip.");
    //         return;
    //     }

    //     const FINAL_PROMPT = AI_PROMPT
    //         .replace('{location}', formData.location)
    //         .replace('{totalDays}', formData.days)
    //         .replace('{traveler}', formData.persons)
    //         .replace('{budget}', formData.budget)
    //         .replace('{totalDays}', formData.days);

    //     toast.success("Your trip has been successfully generated!");
    //     console.log(FINAL_PROMPT);
    // };



    // const onGenerateTrip = () => {
    //     console.log(formData);

    //     if (formData?.days > 10) {
    //         toast.error("Please enter a number of days less than 10.");
    //         return;
    //     }

    //     if (!formData.location || !formData.days || !formData.budget || !formData.persons) {
    //         toast.warning("Please fill out all fields to generate your trip.");
    //         return;
    //     }

    //     // Add "comfortable budget" descriptor to the budget
    //     const budgetDescriptor = `a comfortable budget of ${formData.budget}`;

    //     const FINAL_PROMPT = AI_PROMPT
    //         .replace('{location}', formData.location)
    //         .replace('{totalDays}', formData.days)
    //         .replace('{traveler}', formData.persons)
    //         .replace('{budget}', budgetDescriptor)
    //         .replace('{totalDays}', formData.days);

    //     toast.success("Your trip has been successfully generated!");
    //     console.log(FINAL_PROMPT);
    // };




    const budgetTypeMapping = [
        { range: "$100 - $500", type: "economical budget" },
        { range: "$500 - $1500", type: "comfortable budget" },
        { range: "$1500 - $3000", type: "luxurious budget" },
        { range: "$3000+", type: "premium budget" },
    ];

    // const onGenerateTrip = () => {
    //     console.log(formData);

    //     if (formData?.days > 10) {
    //         toast.error("Please enter a number of days less than 10.");
    //         return;
    //     }

    //     if (!formData.location || !formData.days || !formData.budget || !formData.persons) {
    //         toast.warning("Please fill out all fields to generate your trip.");
    //         return;
    //     }

    //     // Find the corresponding budget type dynamically
    //     const selectedBudget = budgetTypeMapping.find((item) => item.range === formData.budget);
    //     const budgetType = selectedBudget ? selectedBudget.type : "custom budget";
    //     const budgetDescriptor = `${budgetType} of ${formData.budget}`;

    //     const FINAL_PROMPT = AI_PROMPT
    //         .replace('{location}', formData.location)
    //         .replace('{totalDays}', formData.days)
    //         .replace('{traveler}', formData.persons)
    //         .replace('{budget}', budgetDescriptor);

    //     toast.success("Your trip has been successfully generated!");
    //     console.log(FINAL_PROMPT);
    // };



    const login = useGoogleLogin({
        onSuccess: (codeResp) => GetUserProfile(codeResp),
        onError: (error) => console.log(error)
    })
    const onGenerateTrip = async () => {
        console.log(formData);


        const user = localStorage.getItem('user');
        if (!user) {
            setOpenDailog(true)
            return;
        }
        // Validation
        if (formData?.days > 10) {
            toast.error("Please enter a number of days less than 10.");
            return;
        }

        if (!formData.location || !formData.days || !formData.budget || !formData.persons) {
            toast.warning("Please fill out all fields to generate your trip.");
            return;
        }

        // Find the selected budget from BudgetOptions
        const selectedBudget = BudgetOptions.find((item) => item.range === formData.budget);

        // Dynamically generate budget descriptor
        const budgetType = selectedBudget ? selectedBudget.title : "Custom Budget";
        const budgetDescriptor = `${budgetType} of ${formData.budget}`;
        setLoading(true);
        // Replace placeholders in AI_PROMPT
        const FINAL_PROMPT = AI_PROMPT
            .replace('{location}', formData.location)
            .replace('{totalDays}', formData.days)
            .replace('{traveler}', formData.persons)
            .replace('{budget}', budgetDescriptor)
            .replace('{totalDays}', formData.days);

        // Success Toast and Log
        toast.success("Your trip has been successfully generated!");
        console.log(FINAL_PROMPT);


        const result = await chatSession.sendMessage(FINAL_PROMPT);

        console.log(result.response.text());
        setLoading(false);
        SaveAITrip(result.response.text());
    };


    const SaveAITrip = async (TripData) => {

        setLoading(true);
        const user = JSON.parse(localStorage.getItem('user'));
        const docId = Date.now().toString();
        await setDoc(doc(db, "AITrips", docId), {
            userSelection: formData,
            tripData: JSON.parse(TripData),
            userEmail: user?.email,
            id: docId
        });

        setLoading(false);
        navigate('/view-trip/' + docId)
    }

    const GetUserProfile = (tokenInfo) => {
        // if (!tokenInfo?.access_token) {
        //     console.error("Access token is missing or invalid.");
        //     return;
        // }
        // console.log("Access token received:", tokenInfo.access_token);

        axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
            headers: {
                Authorization: `Bearer ${tokenInfo.access_token}`,
                Accept: 'Application/json'
            }
        })
            .then((resp) => {
                console.log(resp);
                localStorage.setItem('user', JSON.stringify(resp.data));
                setOpenDailog(false);
                onGenerateTrip();

            })
    }


    return (
        <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10 mx-56">
            <h2 className="font-bold text-3xl">Tell us your Travel Preferences 🏕️🌴</h2>
            <p className="mt-3 text-gray-500 text-xl">
                Just provide your basic information, and our trip planner will generate a customized itinerary based on your preferences.
            </p>
            <div className="mt-20 flex flex-col gap-10">
                <div>
                    <h2 className="text-xl my-3 font-medium">What is the destination of your choice?</h2>
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => handleSearch(e)}
                        placeholder="Search for a destination..."
                        className="w-full p-2 border border-gray-300 rounded bg-white"
                    />
                    {results.length > 0 && (
                        <ul className="border border-gray-300 rounded mt-2 bg-white">
                            {results.map((location, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleSelect(location)}
                                    className="p-2 cursor-pointer hover:bg-gray-100"
                                >
                                    {location.properties.formatted}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div>
                    <h2 className="text-xl my-3 font-medium">How many days are you planning your trip?</h2>
                    <Input
                        placeholder="Ex. 3"
                        type="number"
                        onChange={(e) => handleInputChange("days", e.target.value)}
                    />
                </div>

                <div>
                    <h2 className="text-xl my-3 font-medium">What is your budget?</h2>
                    <div className="grid grid-cols-3 gap-5 mt-5">
                        {BudgetOptions.map((item, index) => (
                            <div
                                key={index}
                                className={`p-4 border rounded-lg cursor-pointer hover:shadow-lg ${formData.budget === item.range ? "border-green-500" : ""
                                    }`}
                                onClick={() => handleInputChange("budget", item.range)}
                            >
                                <h2 className="text-3xl">{item.icon}</h2>
                                <h2 className="font-bold text-lg">{item.range}</h2>
                                <h2 className="text-sm text-gray-500">{item.desc}</h2>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-xl my-3 font-medium">Who do you plan on travelling with?</h2>
                    <div className="grid grid-cols-3 gap-5 mt-5">
                        {SelectTravelsList.map((item, index) => (
                            <div
                                key={index}
                                className={`p-4 border rounded-lg cursor-pointer hover:shadow-lg ${formData.persons === item.people ? "border-green-500" : ""
                                    }`}
                                onClick={() => handleInputChange("persons", item.people)}
                            >
                                <h2 className="text-3xl">{item.icon}</h2>
                                <h2 className="font-bold text-lg">{item.title}</h2>
                                <h2 className="text-sm text-gray-500">{item.desc}</h2>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="my-10 justify-end flex">
                    <Button disabled={loading} onClick={onGenerateTrip}>
                        {loading ?
                            <AiOutlineLoading3Quarters className="h-7 w-7 animate-spin" /> : 'Generate Trip'
                        }
                    </Button>
                </div>

                <Dialog open={openDailog}>

                    <DialogContent>
                        <DialogHeader>

                            <DialogDescription>
                                <img src="/logo.svg"></img>
                                <h2 className="font-bold text-lg mt-7">Sign In with Google</h2>
                                <p>Sign In to the app with Google Authentication</p>
                                <Button


                                    onClick={login}
                                    className="mt-5 w-full flex gap-4 items-center" >

                                    <FcGoogle className="h-7 w-7" />
                                    Sign In with Google


                                </Button>

                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>

            </div>
        </div >
    );
}

export default CreateTrip;
