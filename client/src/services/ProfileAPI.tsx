const getUserProfile = async () => {
    try{
        const response = await fetch('/api/profile');
        if (response.status === 401){
            return response.json().then(() => {
                window.location.href = '/';
            })
        }
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