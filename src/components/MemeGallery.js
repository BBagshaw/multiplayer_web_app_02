import React, { useState, useEffect } from 'react';

function MemeGallery() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setMemes(data.data.memes);
        }
      })
      .catch(error => console.error('Error fetching memes:', error));
  }, []); // The empty array means this effect runs once after the initial render

  return (
    <div>
      <h1>Meme Gallery</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {memes.map((meme) => (
          <div key={meme.id} style={{ margin: '10px' }}>
            <h2>{meme.name}</h2>
            <img src={meme.url} alt={meme.name} style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MemeGallery;
