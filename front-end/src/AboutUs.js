import { useState, useEffect } from 'react'
import loadingIcon from './loading.gif'
import axios from 'axios'
import './AboutUs.css'

function AboutUs() {
  const [bio, setBio] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState('')

  const fetchBio = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/bio`)
      .then(response => {
        const bio = response.data.bios[0]
        setBio(bio)
      })
      .catch(err => {
        const errMsg = JSON.stringify(err, null, 2)
        setError(errMsg)
      })
      .finally(() => {
        setLoaded(true)
      })
  }

  useEffect(() => {
    fetchBio()
  }, [])

  return (
    <div className='about-us'>
      {error && <p className="Messages-error">{error}</p>}

      {bio.name ? <h2>{bio.name}</h2> : <h2>Your Name</h2>}
      {!loaded && <img src={loadingIcon} alt="loading" />}

      {bio.profilePicUrl ? <img src={bio.profilePicUrl} alt="" className='photo'/> : <></>}
      {bio.introParagraph ? <p>{bio.introParagraph}</p> : <p>Your introduction paragraph about yourself...</p>}
    </div>
  )
}

export default AboutUs
