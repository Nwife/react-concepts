import { useState, useEffect, useCallback } from "react";

export default function TripList() {
    const [trips, setTrips] = useState([]);
    const [url, setUrl] = useState<string>('http://localhost:3000/trips');

    const fetchTrips = useCallback(async() => {
        const response = await fetch(url);
        const json = await response.json()
        setTrips(json)
    }, [url])

    useEffect(() => {
        fetchTrips()
    }, [fetchTrips])

    console.log('first');

    return (
        <div><h1>Hello</h1></div>
    )
}