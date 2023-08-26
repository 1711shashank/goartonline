import React from 'react';

const FavoritesTable = ({ magazineName, websiteUrl }) => {
    return (
        <table className="favorite-table">
            <thead>
                <tr>
                    <th className='table-head'>{magazineName}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <a className='table-link' href={`http://${websiteUrl}`}>{websiteUrl}</a>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default FavoritesTable;
