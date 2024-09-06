// src/queries.js
import { gql } from '@apollo/client'

// Fetch all characters with pagination
const GET_ALL_CHARACTERS = gql`
    query Character($page: Int) {
        characters(page: $page) {
            results {
                id
                name
                image
                status
                species
                location {
                    name
                }
            }
        }
    }`

// Fetch character details by ID
// Fetch character details by ID
const GET_CHARACTER_DETAILS = gql`
    query Character($id: ID!) {
        character(id: $id) {
            id
            name
            image
            status
            species
            type
            gender
            origin {
                name
            }
            location {
                name
            }
            episode {
                id
                name
                episode
            }
        }
    }`

// Fetch characters by location name
const GET_CHARACTERS_BY_LOCATION = gql`
    query CharactersByLocation($locationName: String!) {
        locations(filter: { name: $locationName }) {
            results {
                id
                name
                residents {
                    id
                    name
                    image
                    status
                    species
                    location {
                        name
                    }
                }
            }
        }
    }`

// Fetch locations with pagination
const GET_LOCATIONS = gql`
    query GetLocations($page: Int) {
        locations(page: $page) {
            info {
                count
                pages
                next
                prev
            }
            results {
                id
                name
                dimension
                type
            }
        }
    }`

// Assign a character to a specific location
const ASSIGN_CHARACTER_TO_LOCATION = gql`
    mutation AssignCharacterToLocation($characterId: ID!, $locationId: ID!) {
        assignCharacterToLocation(characterId: $characterId, locationId: $locationId) {
            id
            name
            location {
                name
            }
        }
    }
`

export {
    GET_ALL_CHARACTERS,
    GET_CHARACTER_DETAILS,
    GET_CHARACTERS_BY_LOCATION,
    GET_LOCATIONS,
    ASSIGN_CHARACTER_TO_LOCATION
}