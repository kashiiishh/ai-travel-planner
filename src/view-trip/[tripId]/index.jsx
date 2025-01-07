import { db } from '@/service/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';
import InformationSection from '../components/InformationSection';
import Hotels from '../components/Hotels';
import PlacesToVisit from '../components/PlacesToVisit';
import Footer from '../components/Footer';

function Viewtrip() {
    const { tripId } = useParams();
    const [tripData, setTripData] = useState(null); // State to store trip data

    useEffect(() => {
        if (tripId) {
            GetTripdata();
        }
    }, [tripId]);

    const GetTripdata = async () => {
        const docRef = doc(db, 'AITrips', tripId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            setTripData(data); // Store the data in the state
            console.log("Document:", data); // Properly log the document data
        } else {
            console.log("No such document");
            toast('No trip found!');
        }
    };

    return (
        <div className='p-10 md:px-20 lg:px-44 xl:px-56'>



            <InformationSection trip={tripData} />
            <Hotels trip={tripData} />
            <PlacesToVisit trip={tripData} />
            <Footer trip={tripData} />
        </div>
    );
}

export default Viewtrip;
