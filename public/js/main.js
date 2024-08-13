const getPostsBtn = document.querySelector('#get-posts-btn');
const output = document.querySelector('#output'); 

async function showPosts() {
    try {
        const res = await fetch('http://localhost:8080/api/posts/');

        if (!res.ok) {
            throw new Error('Failed to fetch posts');
        }

        const posts = await res.json();
        output.innerHTML = '';

        posts.forEach((post) => {
            const postElement = document.createElement('div');
            postElement.textContent = post.title;
            output.appendChild(postElement);
        });
    } catch (error) {
        console.log('Error fetching posts: ', error);
    }
}

// Event listener
getPostsBtn.addEventListener('click', showPosts); 
