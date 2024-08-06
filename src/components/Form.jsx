import React, {useContext, useState} from 'react'
import { Movie } from '../Movie'

const Form = () => {
    let {setMySearch} = useContext(Movie)
    const [film, setFilm] = useState('')
    const [message, setMessage] = useState('')
    const checkValue = (e) => {
        setFilm(e.target.value)
    }
    const prosper = (e) => {
        setMySearch(film)
        e.preventDefault()
        setFilm('')
    }
    console.log(message)
    // console.log(film)
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', alignItems: 'center' }}>
            <div>
                <h1>Movie</h1>
            </div>
            <form style={{ display: 'flex', gap: '20px' }} onSubmit={prosper}>
                <input value={film} onChange={checkValue} type="text" placeholder='Search your movie here' />
                <input type="submit" value="Search" />
            </form>
            
        </div>

       
    )
}

export default Form