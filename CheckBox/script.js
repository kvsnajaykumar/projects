const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Prevents HTML submission and page refresh
    const fd = new FormData(form);
    // Attaches all elements in form with name attribute to new FormData
    let skills = [];
    // Creates array into which skills will be pushed if checked
    document.querySelectorAll('[type="checkbox"]').forEach(item => {
        // iterates through all checkbox elements
        if (item.checked === true) {
            skills.push(item.value);
            // Pushes checkbox value into skills if checked
        }
    })
    fd.append('skills', JSON.stringify(skills));
    // Stringify array to JSON and append to FormData object
    console.log(Object.fromEntries(fd));
    // Prints result as object
    console.log(Array.from(fd));
    // Prints result as array
});