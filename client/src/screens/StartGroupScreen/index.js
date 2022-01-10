import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import FilterListIcon from '@mui/icons-material/FilterList'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@mui/material/Link'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../../constants/theme'
import { COLORS } from '../../constants/colors'
import GroupBlock from '../../components/GroupBlock'
import SearchBar from '../../components/SearchBar'
import useMediaQuery from '@mui/material/useMediaQuery'
import FilterMenu from '../../components/FilterMenu'
import SelectedRestaurantBlock from '../../components/SelectedRestaurantBlock'
import { selectedRestaurants as restaurantData } from '../../mockData/selectedRestaurants'
import RestaurantBlock from '../../components/RestaurantBlock'

function StartGroupScreen() {
    const [selectedRestaurant, setSelectedRestaurant] = useState([])
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const handleSubmit = () => {
        console.log('Submit')
    }

    useEffect(() => {
        setSelectedRestaurant(restaurantData)
    }, [])
    return (
        <Box component='main'>
            <Typography variant='h4' sx={{fontWeight: 'bold'}}>
                {selectedRestaurant.length === 0 ? 'Select a Restaurant to Start a Group' : 'Great! Waiting for others to join...'}
            </Typography>
            <Box sx={{padding: 2, height: 160}}>
                {selectedRestaurant.map((el, idx) => {
                    return (
                        <SelectedRestaurantBlock
                            restaurantName={el.name}
                            imgSrc={el.imgSrc}
                            close={() => console.log('close')}
                            key={idx}
                        />
                    )
                })}

            </Box>
            <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{marginTop: 2}}>
                <Typography variant='h4' sx={{fontWeight: 'bold'}}>Start a Group</Typography>
                <Stack direction='row' alignItems='center' sx={{marginRight: 6}}>
                    {matches && <SearchBar id='join-group-search-bar'/>}
                    <IconButton aria-label='join-group-search-button' sx={{display: {sm: 'block', md: 'none'}}}>
                        <SearchIcon/>
                    </IconButton>
                    {/* <IconButton aria-label='join-group-filter-button'>
                        <FilterListIcon/>
                    </IconButton> */}
                    <FilterMenu/>
                </Stack>
            </Stack>
            <Box sx={{padding: 2}}>
                <Typography variant='h5' color='secondary' sx={{fontWeight: 'bold'}}>
                    French
                </Typography>
                <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                    {new Array(5).fill(null).map((el, idx) => {
                        return (
                            <RestaurantBlock key={idx}/>
                        )
                    })}
                </Box>
                <Typography variant='h5' color='secondary' sx={{fontWeight: 'bold', marginTop: 2}}>
                    Restaurants you might like
                </Typography>
                <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                    {new Array(3).fill(null).map((el, idx) => {
                        return (
                            <RestaurantBlock key={idx}/>
                        )
                    })}
                </Box>
            </Box>
        </Box>
    )
}

export default StartGroupScreen
