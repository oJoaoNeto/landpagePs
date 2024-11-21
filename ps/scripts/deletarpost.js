function loadPosts() {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const postsContainer = document.getElementById('postsContainer');
    postsContainer.innerHTML = '';
    posts.forEach((post, index) => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        const titleElement = document.createElement('p');
        titleElement.innerHTML = `<strong></strong> ${post.title}`;
        const contentElement = document.createElement('p');
        contentElement.innerHTML = `<strong></strong> ${post.content}`;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.onclick = function() {
            deletePost(index);  
        };
        postDiv.appendChild(titleElement);
        postDiv.appendChild(contentElement);
        postDiv.appendChild(deleteButton);
        postsContainer.appendChild(postDiv);
    });
}
function deletePost(postIndex) {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.splice(postIndex, 1); 
    localStorage.setItem('posts', JSON.stringify(posts));  
    loadPosts();  
}
window.onload = loadPosts;