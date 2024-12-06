const getUserProfile = async (access_token: string) => {
    try{
        const response = await fetch(`/api/profile/${access_token}`);
        if (!response.ok){
            throw new Error('Network error');
        }
        const data = await response.json();
        console.log("Logging in ProfileAPI: ", data);
        return data;
    }
    catch (err){
        console.error('Error: ');
        throw err;
    }
}

export default { getUserProfile }