interface AuthorizationCodeParams {
    code: string;
}

const getLoginUrl = async() => {
    try{
        const response = await fetch('/api/login');
        if (!response.ok){
            throw new Error('Network error');
        }
        const data = await response.json();
        console.log(data.url);
        return data.url.targetUrl;
    }
    catch (err){
        console.error('Error: ');
        throw err;
    }
}

const getAccessToken = async(code: AuthorizationCodeParams) => {
    try{
        const response = await fetch('/api/login', {
            method: 'POST',
            headers : {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(code)
        });
        if (!response.ok){
            throw new Error('Network error');
        }
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch (err){
        console.error('Error: ');
        throw err;
    }
}


export default { getLoginUrl, getAccessToken }