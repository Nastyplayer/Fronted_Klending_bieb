
import { useState } from 'react';

export function useAccountUtils() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    return {
        loading,
        setLoading,
        error,
        setError,
        errorMessage,
        setErrorMessage,

    };
}
