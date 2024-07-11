function displayText(button) {
    console.log('clicked');
    var textElement = button.nextElementSibling;
    
    if (textElement.style.display === 'none' || textElement.style.display === '') {
        textElement.style.display = 'block';
        button.textContent = 'See Less';
    } else {
        textElement.style.display = 'none';
        button.textContent = 'See More';
    }
  }