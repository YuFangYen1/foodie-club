import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import FilterListIcon from '@mui/icons-material/FilterList'
import { COLORS } from '../../constants/colors'
import Popover from '@mui/material/Popover'
import Chip from '@mui/material/Chip'
import Slider from '@mui/material/Slider'
import { foodTypes } from '../../constants/foodTypes'
import './index.css'

const FilterMenuRestaurant = ({ pricePref, setPricePref, foodPref, setFoodPref }) => {
    const [anchorEl, setAnchorEl] = useState(null)
    // const [pricePref, setPricePref] = useState([])
    // const [foodPref, setFoodPref] = useState([])
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    
    const handleClose = () => {
        setAnchorEl(null)
    }

    const handlePriceClick = (value) => {
        if (value === null || value === undefined) {
            return
        }

        if (pricePref.includes(value)) {
            setPricePref(pricePref.filter(el => el !== value))
        } else {
            setPricePref([...pricePref, value])
        }
    }

    const handleFoodClick = (value) => {
        if (value === null || value === undefined) {
            return
        }

        if (foodPref.includes(value)) {
            setFoodPref(foodPref.filter(el => el !== value))
        } else {
            setFoodPref([...foodPref, value])
        }
    }

    const open = Boolean(anchorEl);
    const id = open ? 'filter-popover' : undefined;
    return (
        <Box>
            <IconButton
                id={id}
                aria-label='join-group-filter-button'
                onClick={handleClick}
            >
                <FilterListIcon/>
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                >
                <Box sx={{background: COLORS.lightGrey, height: 500, overflowY: 'scroll', padding: 2}}>
                    {/* Price Preference */}
                    <Typography variant='subtitle1' sx={{fontWeight: 'bold', marginY: 1}}>Price</Typography>
                    <Box>
                        <Chip
                            label='£'
                            variant='filled'
                            onClick={() => {handlePriceClick('£')}}
                            className={`chip-selector ${pricePref.includes('£') ? 'chip-selector--active' : ''}`}
                            sx={{
                                marginX: 1
                            }}
                        />
                        <Chip
                            label='££'
                            variant='filled'
                            onClick={() => {handlePriceClick('££')}}
                            className={`chip-selector ${pricePref.includes('££') ? 'chip-selector--active' : ''}`}
                            sx={{
                                marginX: 1
                            }}
                        />
                        <Chip
                            label='£££'
                            variant='filled'
                            onClick={() => {handlePriceClick('£££')}}
                            className={`chip-selector ${pricePref.includes('£££') ? 'chip-selector--active' : ''}`}
                            sx={{
                                marginX: 1
                            }}
                        />
                        <Chip
                            label='££££'
                            variant='filled'
                            onClick={() => {handlePriceClick('££££')}}
                            className={`chip-selector ${pricePref.includes('££££') ? 'chip-selector--active' : ''}`}
                            sx={{
                                marginX: 1
                            }}
                        />
                    </Box>
                    {/* Food Preference */}
                    <Typography variant='subtitle1' sx={{fontWeight: 'bold', marginY: 1}}>Types of Cuisine</Typography>
                    <Box sx={{display: 'flex', flexWrap: 'wrap', width: 200}}>
                        {foodTypes.map(el => {
                            return (
                                <Chip
                                    key={el.id}
                                    label={el.label}
                                    variant='filled'
                                    onClick={() => {handleFoodClick(el.value)}}
                                    className={`chip-selector ${foodPref.includes(el.value) ? 'chip-selector--active' : ''}`}
                                    sx={{
                                        marginX: 1,
                                        marginY: 0.5
                                    }}
                                />
                            )
                        })}
                    </Box>
                </Box>
            </Popover>
        </Box>
    )
}

export default FilterMenuRestaurant
