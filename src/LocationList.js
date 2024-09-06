import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { ASSIGN_CHARACTER_TO_LOCATION } from './queries'
import './LocationList.css'

const LocationList = ({ locations, characterId }) => {
    const [locationName, setLocationName] = useState('')
    const [assignCharacterToLocation, { error: mutationError }] = useMutation(ASSIGN_CHARACTER_TO_LOCATION)
    const [sortedLocations, setSortedLocations] = useState(locations)

    const handleAssign = async (locationId) => {
        try {
            await assignCharacterToLocation({
                variables: { characterId, locationName }
            })
            alert('Character assigned to location successfully')
        } catch (err) {
            alert('Error assigning character to location: ' + (mutationError ? mutationError.message : err.message))
        }
    }

    const sortLocations = () => {
        const sorted = [...sortedLocations].sort((a, b) => a.name.localeCompare(b.name))
        setSortedLocations(sorted)
    }

    return (
        <div className="location-list">
            <button onClick={sortLocations}>Sort Locations</button>
            <ul>
                {sortedLocations.map(location => (
                    <li key={location.id}>
                        {location.name}
                        <button onClick={() => handleAssign(location.id)}>Assign</button>
                    </li>
                ))}
            </ul>
            <form onSubmit={(e) => { e.preventDefault(); handleAssign() }}>
                <input
                    type="text"
                    value={locationName}
                    onChange={(e) => setLocationName(e.target.value)}
                    placeholder="Enter unique location name"
                    required
                />
                <button type="submit">Assign to New Location</button>
            </form>
        </div>
    )
}

export default LocationList