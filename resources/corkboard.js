/**
 * Pinboard main function
 */
function pinboard() {
    // TODO: Read the posts.json file
    readTextFile('posts.json');
}

/**
 * Show all the posts on the page
 */
function showAllPosts(text) {
    // Grab the pinboard div from the page
    pinboardElement = document.getElementById('pinboard');
    // Decode the post data
    postData = JSON.parse(text);
    // Clear the pinboard
    pinboardElement.innerHTML = '';
    // Loop through the postData
    postData.forEach(function (post) {
        console.log('here');
        // Show the item
        pinboardElement.innerHTML += '<div class="post"><a class="title" href="' + post.url + '">' + post.title + '</a><span class="meta">Posted ' + post.date + ' by ' + post.user + '</span></div>';
    });
    
    // TODO: Make the back button work
}

/**
 * Show a single text post on the page.
 */
function showTextPost(text) {
    // TODO: Grab the pinboard div from the page
    pinboardElement = document.getElementById('pinboard');
    // TODO: Show the text
    pinboardElement.innerHTML = text;
    // TODO: Make the back button work
}

/**
 * Read a text file and display it when it's loaded
 */
function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                showAllPosts(allText);
            }
        }
    }
    rawFile.send(null);
}

pinboard();
