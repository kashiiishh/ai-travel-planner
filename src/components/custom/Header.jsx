// import React, { useEffect } from 'react'
// import { Button } from '../ui/button'
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
// import { googleLogout } from '@react-oauth/google';
// import { useNavigate } from 'react-router-dom';

// function Header() {

//     const user = JSON.parse(localStorage.getItem('user'));

//     const navigation = useNavigate();
//     useEffect(() => {
//         console.log(user);
//     }, [])

//     return (
//         <div className='p-3 shadow-sm flex justify-between items-center px-5'>
//             <img src="/logo.svg" alt="" />
//             <div>

//                 {user ?
//                     <div className='flex items-center gap-3'>

//                         <Button variant="outline" className="rounded-full">My Trips</Button>

//                         <Popover>
//                             <PopoverTrigger className='p-0 m-0 border-0 shadow-none background-none rounded-full'>
//                                 <img src={user?.picture} className="h-[35px] w-[35px] rounded-full" />
//                             </PopoverTrigger>
//                             <PopoverContent >
//                                 <h2 className="hover: cursor-pointer" onClick={() => {
//                                     googleLogout();
//                                     localStorage.clear();


//                                     navigation('/');
//                                 }
//                                 }>
//                                     Logout
//                                 </h2>
//                             </PopoverContent>
//                         </Popover>

//                     </div>
//                     :
//                     <Button>Sign In</Button>
//                 }
//             </div>
//         </div>
//     )
// }

// export default Header


import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Header() {
    const user = JSON.parse(localStorage.getItem("user"));
    const navigation = useNavigate();

    useEffect(() => {
        console.log(user);
    }, []);

    // Google login handler
    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            try {
                const { data } = await axios.get("https://www.googleapis.com/oauth2/v1/userinfo?alt=json", {
                    headers: {
                        Authorization: `Bearer ${tokenResponse.access_token}`,
                    },
                });

                localStorage.setItem("user", JSON.stringify(data));
                window.location.reload();
            } catch (error) {
                console.error("Google login failed: ", error);
            }
        },
        onError: (error) => {
            console.error("Login Failed: ", error);
        },
    });

    return (
        <div className="p-3 shadow-sm flex justify-between items-center px-5">
            <img src="/logo.svg" alt="Logo" />
            <div>
                {user ? (
                    <div className="flex items-center gap-3">
                        {/* Redirect to /my-trips on click */}
                        <Button
                            variant="outline"
                            className="rounded-full"
                            onClick={() => navigation("/my-trips")}
                        >
                            My Trips
                        </Button>

                        <Popover>
                            <PopoverTrigger className="p-0 m-0 border-0 shadow-none background-none rounded-full">
                                <img src={user?.picture} className="h-[35px] w-[35px] rounded-full" alt="User Profile" />
                            </PopoverTrigger>
                            <PopoverContent>
                                <h2
                                    className="hover: cursor-pointer"
                                    onClick={() => {
                                        googleLogout();
                                        localStorage.clear();
                                        navigation("/");
                                    }}
                                >
                                    Logout
                                </h2>
                            </PopoverContent>
                        </Popover>
                    </div>
                ) : (
                    <Button onClick={() => login()}>Sign In</Button>
                )}
            </div>
        </div>
    );
}

export default Header;
