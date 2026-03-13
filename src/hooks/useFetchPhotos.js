import { useState, useEffect } from 'react';

const useFetchPhotos = () => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                setLoading(true);
                // Requirement 2: Use exact API provided in assignment
                const response = await fetch('https://picsum.photos/v2/list?limit=30');
                if (!response.ok) {
                    throw new Error('Failed to fetch photos');
                }
                const data = await response.json();
                setPhotos(data);
                setError(null);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPhotos();
    }, []);

    return { photos, loading, error };
};

export default useFetchPhotos;
