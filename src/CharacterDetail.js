// src/CharacterDetail.js
import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { useParams, useNavigate } from 'react-router-dom'
import { GET_CHARACTER_DETAILS, ASSIGN_CHARACTER_TO_LOCATION, GET_LOCATIONS } from './queries'
import './CharacterDetail.css'

const CharacterDetail = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { loading, error, data } = useQuery(GET_CHARACTER_DETAILS, {
        variables: { id }
    })
    const [locationId, setLocationId] = useState('')
    const { loading: locationsLoading, error: locationsError, data: locationData } = useQuery(GET_LOCATIONS)
    const [assignCharacterToLocation, { error: mutationError }] = useMutation(ASSIGN_CHARACTER_TO_LOCATION)
    const [assignError, setAssignError] = useState(null)

    if (loading || locationsLoading) return <p>Loading...</p>
    if (error) return <p>Error {error.message}</p>
    if (locationsError) return <p>Error {locationsError.message}</p>

    const { character } = data

    const handleAssign = async (e) => {
        e.preventDefault()
        setAssignError(null)

        try {
            await assignCharacterToLocation({
                variables: { characterId: id, locationId }
            })
            alert('Character assigned to location successfully')
        } catch (err) {
            console.error('Error response:', err)
            setAssignError(mutationError ? mutationError.message : err.message)
        }
    }

    return (
        <div className="character-detail">
            <div className="character-header">
                <img src={character.image} alt={character.name} />
                <h1>{character.name}</h1>
            </div>

            <div className="character-info">
                <p><strong>Status:</strong> {character.status}</p>
                <p><strong>Species:</strong> {character.species}</p>
                <p><strong>Type:</strong> {character.type || 'N/A'}</p>
                <p><strong>Gender:</strong> {character.gender}</p>
                <p><strong>Origin:</strong> {character.origin.name}</p>
                <p><strong>Last known location:</strong> {character.location.name}</p>
            </div>

            <div className="character-episodes">
                <h2>Episodes:</h2>
                <ul>
                    {character.episode.map((ep) => (
                        <li key={ep.id}>{ep.name} ({ep.episode})</li>
                    ))}
                </ul>
            </div>

            <form onSubmit={handleAssign}>
                <select
                    value={locationId}
                    onChange={(e) => setLocationId(e.target.value)}
                    required
                >
                    <option value="" disabled>Select a location</option>
                    {locationData && locationData.locations && Array.isArray(locationData.locations.results) && locationData.locations.results.map((location) => (
                        <option key={location.id} value={location.id}>
                            {location.name}
                        </option>
                    ))}
                </select>
                <button type="submit">Assign to Location</button>
            </form>

            {assignError && <p className="error">Error: {assignError}</p>}

            <div className="navigation-buttons">
                <button onClick={() => navigate('/character-list')}>Back to Character List</button>
                <button onClick={() => navigate('/location')}>Back to CharacterByLocation</button>
            </div>
        </div>
    )
}
    export default CharacterDetail