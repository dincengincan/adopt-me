import React, { useState } from 'react';

const SearchParams = () => {

    if (some) {
        const [location, setLocation] = useState("Seattle, WA");
    }



    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    location
                    <input id="location" value={location} placeholder="location" onChange={e => setLocation(e.target.value)} />
                    <button>Submit</button>
                </label>
            </form>
        </div>
    )
}

export default SearchParams;