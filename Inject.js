// Function to load HTML content into the specified div
function loadHTMLContent() {
  const contentContainer = document.getElementById("Steam");
  const content1 = document.getElementById("Nav");
  const content2 = document.getElementById("Campfire");
  const content3 = document.getElementById("Info");


  // Fetch the HTML file (change 'external-content.html' to your file's path)
  fetch('Steam.html')
    .then(response => response.text())
    .then(content => {
      // Insert the fetched HTML content into the div
      contentContainer.innerHTML = content;
    })
    .catch(error => {
      console.error('Error:', error);
    });



  fetch("Campfire.html")
    .then(response => response.text())
    .then(content => {
      // Insert the fetched HTML content into the div
      content2.innerHTML = content;
    })
    .catch(error => {
      console.error('Error:', error);
    });

  fetch("NavBar.html")
    .then(response => response.text())
    .then(content => {
      // Insert the fetched HTML content into the div
      content1.innerHTML = content;
    })
    .catch(error => {
      console.error('Error:', error);
    });


  fetch("Info.html")
    .then(response => response.text())
    .then(content => {
      // Insert the fetched HTML content into the div
      content3.innerHTML = content;
    })
    .catch(error => {
      console3.error('Error:', error);
    });





}





// Call loadHTMLContent when the page loads
window.addEventListener('load', loadHTMLContent);
