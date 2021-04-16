// functionaliy of the form
const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', submit);
    function submit(e) {
        e.preventDefault();
        const input = document.querySelector("#searchByID");

        console.log(input.value);
        // fetch function
        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');
            console.log(data.title)
            console.log(data.summary)
            title.innerText = data.title;
            summary.innerText = data.summary;

        });
        };
    
}
    // init only runs when all the dom content has loaded
    document.addEventListener('DOMContentLoaded', init);