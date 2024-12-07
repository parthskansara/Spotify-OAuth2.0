import { useEffect, useState } from "react";
import ProfileAPI from "../services/ProfileAPI";
import LoginAPI from "../services/LoginAPI";

const UserPage = () => {
    const urlParams = new URLSearchParams(window.location.search);

    interface ProfileData {
        images: { url: string }[];
        display_name: string;
    }

    const [profileData, setProfileData] = useState<ProfileData | null>(null);

    useEffect(() => {
        const getProfileData = async () => {
            try{
                const data = await ProfileAPI.getUserProfile();
                setProfileData(data);
            } catch (err){
                console.error('Error fetching token');
            }
        };
        getProfileData();
    }, [])

    const handleLogout = async () => {
        const res = await LoginAPI.logOut();
    }
    

            

    return (
        <>
            {profileData && (
                <>

                    <img src={profileData.images[0].url} />
                    <p>Welcome! {profileData.display_name}</p>

                    <button onClick={handleLogout}>Logout</button>
                </>
            )}
        </>
    );
}

export default UserPage;