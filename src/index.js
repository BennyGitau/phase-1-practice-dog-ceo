console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', () => {

    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
   fetch(imgUrl)
   .then((res) => res.json())
   .then((data) =>handledogs(data))

   .catch((error) => console.log(error))

    
//function to display dogs
function handledogs(array) {
    array.message.forEach((img) => {
        let image = document.createElement('img')
        image.src = img;
        const imageList = document.getElementById('dog-image-container')
        imageList.appendChild(image)

    });
};

    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
        .then((response) => response.json())
        .then((data) => displayName(data))
        
        .catch((error) => console.log(error))


//function to display breeds
function displayName(array) {
    const variousBreeds = Object.keys(array.message)
    variousBreeds.forEach((name) => {
        let li = document.createElement('li')
        li.innerText = name;
        document.getElementById('dog-breeds').appendChild(li);

    })
}
//changin the color of li element on click

    const list = document.getElementById('dog-breeds')
    list.addEventListener('click', (e) => {
        if (e.target.tagName === "LI") {
            e.target.style.color = 'red'
        }
})
    const input = document.getElementById('breed-dropdown');
    console.log(input)

    input.addEventListener('change', function(event){
        let filter = event.target.value
        let doglist = document.getElementById('dog-breeds')
        let dogs = doglist.getElementsByTagName('li')
        for (let i = 0; i < dogs.length; i++) {
            const txtValue = dogs[i].textContent
            if(txtValue.startsWith(filter)) {
                dogs[i].style.display = "list-item"
            } else {
                dogs[i].style.display = "none"
        }
    }
})

})