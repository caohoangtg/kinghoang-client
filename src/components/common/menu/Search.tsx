import React, { useState, useEffect, useRef } from 'react'
import { BsSearch } from 'react-icons/bs'
import { AiFillCloseCircle } from 'react-icons/ai'
import Collapse from '@mui/material/Collapse'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'

const Search = () => {
    const [open, setOpen] = useState(false)
    const [searchText, setSearchText] = useState('')
    const searchInput = useRef<HTMLInputElement>(null)

    const toggleOpen = (isOpen: boolean) => {
        setOpen(isOpen)
    }

    useEffect(() => {
        if (open) {
            searchInput?.current?.focus()
        } else {
            setSearchText('')
        }
    }, [open])

    const handleOnChange = (event: any) => {
        console.log(event.target.value)
        setSearchText(event.target.value)
    }

    const handleClearSearchText = () => {
        setSearchText('')
    }

    const handleClick = () => {
        console.info('You clicked the Chip.')
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
                        ref={searchInput}
                        value={searchText}
                        onChange={handleOnChange}
                        placeholder="Enter the item name"
                    />
                    <AiFillCloseCircle
                        size={'1.5em'}
                        className="search-clear-text"
                        onClick={handleClearSearchText}
                    />
                    <button
                        className="search-cancel"
                        onClick={() => toggleOpen(false)}
                    >
                        Cancel
                    </button>
                </div>
                <Collapse
                    className="search-result"
                    in={searchText.length > 0 ? true : false}
                >
                    <Stack
                        className="search-result__box"
                        direction="row"
                        flexWrap="wrap"
                    >
                        <Chip
                            label="Hearty soup"
                            variant="outlined"
                            onClick={handleClick}
                        />
                        <Chip
                            label="Appetizing Appertizers"
                            variant="outlined"
                            onClick={handleClick}
                        />
                        <Chip
                            label="Delight Pizza"
                            variant="outlined"
                            onClick={handleClick}
                        />
                        <Chip
                            label="Tasty Pasta"
                            variant="outlined"
                            onClick={handleClick}
                        />
                        <Chip
                            label="Authentic Grill"
                            variant="outlined"
                            onClick={handleClick}
                        />
                        <Chip
                            label="Craft Burgers"
                            variant="outlined"
                            onClick={handleClick}
                        />
                        <Chip
                            label="Savoury Fish"
                            variant="outlined"
                            onClick={handleClick}
                        />
                        <Chip
                            label="Delicate Side Dishes"
                            variant="outlined"
                            onClick={handleClick}
                        />
                        <Chip
                            label="Assorted dessert"
                            variant="outlined"
                            onClick={handleClick}
                        />
                    </Stack>
                </Collapse>
            </div>
        </React.Fragment>
    )
}

export default Search
