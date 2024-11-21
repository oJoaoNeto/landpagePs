document.getElementById('postForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('postTitle').value;
    const content = document.getElementById('postContent').value;
    const isVisible = document.getElementById('isVisible').checked;  
    if (!isVisible) {
        alert('Você deve marcar a opção para tornar o post visível!');
        return;  
    }
    const post = {
        title,
        content,
        isVisible  
    };
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
    window.location.href = 'realizacoes.html'; 
});

