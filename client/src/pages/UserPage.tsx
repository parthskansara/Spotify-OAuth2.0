import { useEffect, useState } from "react";
import ProfileAPI from "../services/ProfileAPI";

const UserPage = () => {
    const urlParams = new URLSearchParams(window.location.search);

    let accessToken = urlParams.get('access_token') || '';
    if (accessToken) {
        localStorage.setItem('access_token', accessToken);
    } else {
        accessToken = localStorage.getItem('access_token') || '';
    }

    interface ProfileData {
        images: { url: string }[];
        display_name: string;
    }

    const [profileData, setProfileData] = useState<ProfileData | null>(null);

    useEffect(() => {
        const getProfileData = async () => {
            try{
                const data = await ProfileAPI.getUserProfile(accessToken);
                setProfileData(data);
                console.log(profileData)
            } catch (err){
                console.error('Error fetching token');
            }
        };
        getProfileData();
    }, [])

    

            

    return (
        <>
            {profileData && (
                <>
                    <img src={profileData.images[0].url} />
                    <p>Welcome! {profileData.display_name}</p>
                </>
            )}
        </>
    );
}

export default UserPage;