import { type Doc, type APISpaceXResponse } from '../types/api';

export const getLaunches = async () => {

    //  const res = await fetch('https://api.spacexdata.com/v5/launches'); 
    //const data = JSON.stringify(await res.json());
    //Podemos limitar con query
    const res = await fetch('https://api.spacexdata.com/v5/launches/query', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: {date_unix: "asc"},
                limit: 10,
            },
        })
    });

    const { docs : launches } = await res.json() as APISpaceXResponse;
    return launches;
};


export const getLaunchById = async ({id} : {id : string}) => 
{
    const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);
    const launch = await res.json() as Doc;
    return launch;
};