// src/resolvers.js
const resolvers = {
    Query: {
        // existing query resolvers
    },
    Mutation: {
        assignCharacterToLocation: async (_, { characterId, locationId }, { dataSources }) => {
            const character = await dataSources.characterAPI.getCharacterById(characterId);
            if (!character) {
                throw new Error('Character not found');
            }

            const location = await dataSources.locationAPI.getLocationById(locationId);
            if (!location) {
                throw new Error('Location not found');
            }

            character.location = location;
            await dataSources.characterAPI.updateCharacter(characterId, { location });

            return character;
        }
    }
};

module.exports = resolvers;