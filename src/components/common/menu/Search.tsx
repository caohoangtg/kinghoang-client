import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { AiFillCloseCircle } from 'react-icons/ai'

const Search = () => {
    const [open, setOpen] = useState(false)

    const toggleOpen = (isOpen: boolean) => {
        setOpen(isOpen)
    }

    return (
        <React.Fragment>
            <div className={`search${open === true ? ' open' : ''}`}>
                <div className="search-box">
                    <BsSearch
                        className="search-icon"
                        onClick={() => toggleOpen(true)}
                    />
                    <input
                        className="search-text"
                        type="text"
                        placeholder="Enter the item name"
                    />
                    <AiFillCloseCircle
                        size={'1.5em'}
                        className="search-clear-text"
                    />
                    <button
                        className="search-cancel"
                        onClick={() => toggleOpen(false)}
                    >
                        Cancel
                    </button>
                </div>
                <div className="search-result"></div>
            </div>
        </React.Fragment>
    )
}

export default Search
