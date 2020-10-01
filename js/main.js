var searchInput = document.querySelector('#search-input');
var listItems = document.querySelectorAll('#list-items li');

searchInput.addEventListener('input', search);

function search(e) {
    var value = e.target.value.toLowerCase();

    listItems.forEach(element => {
        content = element.querySelector('.content');
        text = content.innerHTML;

        if (text.toLowerCase().includes(value)) {
            element.style.display = 'flex';
        } else {
            element.style.display = 'none';
        }
    });
}