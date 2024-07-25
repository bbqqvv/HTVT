import React from 'react';

const SearchComponent = ({ keywords, setKeywords }) => {
    return (
        <div className="mb-4">
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 -3 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
                <input
                    type="text"
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                    placeholder="Áo polo, quần, giày ..."
                    className="w-full p-2 pl-10 border border-gray-300 rounded-xl mt-1 focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>
        </div>
    );
}

export default SearchComponent;
