document.getElementById('search-btn').addEventListener('click', async () => {
    const searchTerm = document.getElementById('inp-search').value.trim();
    const url = 'https://api.freepik.com/v1/resources?locale=en-US&page=1&limit=10&order=latest&term=' + encodeURIComponent(searchTerm);
    const apiKey = 'FPSXc393a6224f5348afa7da650c8d65be68';
    const options = {
        method: 'GET',
        headers: {
          'Accept-Language': 'en-US',
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-Freepik-API-Key': apiKey
        },
        mode: 'cors' // Set mode to 'cors'
      };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayResults(data.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

function displayResults(images) {
    const imageResults = document.getElementById('image-results');
    imageResults.innerHTML = ''; // Clear previous results
    images.forEach(image => {
        const imageElement = document.createElement('img');
        imageElement.src = image.image.source.url;
        imageElement.alt = image.title;
        imageResults.appendChild(imageElement);
    });
}