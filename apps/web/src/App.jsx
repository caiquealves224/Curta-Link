import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [shortUrl, setShortUrl] = useState('')
  const [urlInput, setUrlInput] = useState('')

  const handleClick = () => {
    if (!urlInput.trim()) {
      alert('Por favor, insira uma URL válida')
      return
    }
    
    fetch(`${import.meta.env.VITE_API_URL}/shorten`, {
      method: 'POST',
      headers: {    
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: urlInput })
    })
      .then(response => response.json())
      .then(data => {
        console.log('Data fetched:', data)
        if (data.shortUrl) {
          setShortUrl(data.shortUrl)
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Curto - Link</h1>
      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input 
          type='text' 
          placeholder='cole seu link aqui' 
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
        />
        <button onClick={handleClick}>encurtar</button>
        <p>URL Encurtada: {shortUrl || 'Nenhuma URL encurtada ainda'}</p>
      </div>
    </>
  )
}

export default App
