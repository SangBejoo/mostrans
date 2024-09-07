import React, { useState, useEffect, useCallback } from 'react';
import { useQuery } from '@apollo/client';
import { useNavigate, useLocation } from 'react-router-dom';
import { GET_LOCATIONS, GET_CHARACTERS_BY_LOCATION } from './queries';
import './CharactersByLocation.css';

const CharactersByLocation = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const locationName = query.get('name');

    const [currentPage, setCurrentPage] = useState(1);
    const [activePage, setActivePage] = useState(1);
    const [visiblePages, setVisiblePages] = useState([1, 2, 3]);
    const charactersPerPage = 8;

    const { loading, error, data } = useQuery(GET_LOCATIONS);
    const { loading: charactersLoading, error: charactersError, data: charactersData } = useQuery(GET_CHARACTERS_BY_LOCATION, {
        variables: { locationName, page: currentPage },
        skip: !locationName,
    });

    const totalCharacters = charactersData ? charactersData.locations.results[0].residents.length : 0;
    const totalPages = Math.ceil(totalCharacters / charactersPerPage);

    const handleLocationSelect = (event) => {
        const selectedLocation = event.target.value;
        navigate(`/location?name=${selectedLocation}`);
    };

    const handleCardClick = (character) => {
        navigate(`/character/${character.id}`);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        setActivePage(pageNumber);
        updateVisiblePages(pageNumber);
    };

    const updateVisiblePages = useCallback((pageNumber) => {
        if (totalPages <= 3) {
            setVisiblePages([...Array(totalPages).keys()].map(i => i + 1));
        } else if (pageNumber === 1) {
            setVisiblePages([1, 2, 3]);
        } else if (pageNumber === totalPages) {
            setVisiblePages([totalPages - 2, totalPages - 1, totalPages]);
        } else {
            setVisiblePages([pageNumber - 1, pageNumber, pageNumber + 1]);
        }
    }, [totalPages]);

    useEffect(() => {
        updateVisiblePages(currentPage);
    }, [currentPage, totalPages, updateVisiblePages]);

    // Reset pagination when location changes
    useEffect(() => {
        setCurrentPage(1);
        setActivePage(1);
        updateVisiblePages(1);
    }, [locationName, updateVisiblePages]);

    if (loading) return <p>Loading locations...</p>;
    if (error) return <p>Error {error.message}</p>;

    return (
        <div className="character-by-location p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">Characters by Location</h1>
            <form className="max-w-sm mx-auto mb-4">
                <label htmlFor="locations" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a location</label>
                <select
                    id="locations"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={handleLocationSelect}
                    value={locationName || ''}
                >
                    <option value="" disabled>Select a location</option>
                    {data && data.locations && data.locations.results.map((location) => (
                        <option key={location.id} value={location.name}>
                            {location.name}
                        </option>
                    ))}
                </select>
            </form>
            {locationName && (
                <div className="characters-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {charactersLoading ? (
                        <p>Loading characters...</p>
                    ) : charactersError ? (
                        <p>Error {charactersError.message}</p>
                    ) : (
                        charactersData &&
                        charactersData.locations &&
                        charactersData.locations.results.length > 0 &&
                        charactersData.locations.results[0].residents.length === 0 ? (
                            <p>There is no character here</p>
                        ) : (
                            charactersData.locations.results[0].residents.slice((currentPage - 1) * charactersPerPage, currentPage * charactersPerPage).map((character) => (
                                <div
                                    key={character.id}
                                    className="character-item bg-white shadow-md rounded-lg overflow-hidden"
                                    onClick={() => handleCardClick(character)}>
                                    <img
                                        src={character.image}
                                        alt={character.name}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <p className="font-bold text-lg">{character.name}</p>
                                        <p className="text-gray-600">{character.status} - {character.species}</p>
                                    </div>
                                </div>
                            ))
                        )
                    )}
                </div>
            )}
            {totalPages > 1 && (
                <div className="pagination flex justify-center mt-4">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-blue-500 text-white rounded mx-1">
                        Previous
                    </button>
                    {visiblePages.map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`px-4 py-2 ${activePage === page ? 'bg-gray-500' : 'bg-blue-500'} text-white rounded mx-1`}>
                            {page}
                        </button>
                    ))}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-blue-500 text-white rounded mx-1">
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default CharactersByLocation;