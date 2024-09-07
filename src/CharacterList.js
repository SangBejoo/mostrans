import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_CHARACTERS } from './queries';
import Card from './Card';
import './Card.css';
import './CharacterList.css';

const CharacterList = () => {
    const { loading, error, data } = useQuery(GET_ALL_CHARACTERS);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const totalPages = Math.ceil(data?.characters?.results?.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentCharacters = data?.characters?.results?.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="character-list-container">
            <div className="gallery">
                {currentCharacters?.map(character => (
                    <Card key={character.id} character={character} />
                ))}
            </div>
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={currentPage === index + 1 ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CharacterList;