interface APIResponse {
    body: string;
    headers?: object;  // Optional parameter 
    responseTime?: number;  //Optional Parameters 

}

let response1: APIResponse = {
    body: 'Hi',
};

let response2: APIResponse = {
    body: 'Hi',
    headers: {},
    responseTime: 400
};