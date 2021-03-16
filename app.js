// Giphy API https://developers.giphy.com/docs/api/endpoint/#search
// API Key h2YmOGvTNnKETDYttySgzoCMohuHzsii

const form = document.getElementById('searchform'); 
let searchInput = document.getElementById('search'); 
const gif = document.getElementById('gif'); 

// generateNum()
function generateNum() {
    let random = Math.floor(Math.random() * 30);
    return random;  
}

form.addEventListener('submit', function(e) {
    // e.preventDefault() 
    e.preventDefault(); 

    // execute getGif()
    getGif(); 
    
    // clear input value
    searchInput.value = '';  
}); 

// Async function getGif(q) 
async function getGif() {
    const q = searchInput.value
    const api_key = 'h2YmOGvTNnKETDYttySgzoCMohuHzsii'; 
    const res = await axios.get('http://api.giphy.com/v1/gifs/search', { params: {q, api_key}});
    // console.log(res.data.data[generateNum()].images.original.url);

    // append img to gif 
    const img = document.createElement('img'); 
    img.src = res.data.data[generateNum()].images.original.url; 
    img.classList.add('col-md-4', 'mb-2', 'w-100'); 
    gif.append(img); 
}
