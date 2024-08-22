const getResponse = (token: string, url: string) => {
    return fetch(url, {
        method: "GET",
        headers: {
            "Authorization-Token": token,
            "Content-Type": "application/json",
          }
    });
}

export async function sendGetConcurrently(token: string,urls: string[]) {
    try{
        return await Promise.all(urls.map(url => getResponse(token, url))).then(async (response) => {
            return Promise.all(response.map(async (data) => await data.json()));
        });
    } catch (err) {
        throw new Error('Request failed to retrieve resources: ' + err);
    }
}