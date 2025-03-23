document.getElementById('createTopicButton').addEventListener('click', () => {
    const title = document.getElementById('topicTitle').value;
    const content = document.getElementById('topicContent').value;

    if (title.trim() === '' || content.trim() === '') {
        alert('Пожалуйста, заполните все поля.');
        return;
    }

    const topic = {
        title: title,
        content: content,
        comments: []
    };

    addTopicToList(topic);
    document.getElementById('topicTitle').value = '';
    document.getElementById('topicContent').value = '';
});

function addTopicToList(topic) {
    const topicList = document.getElementById('topicList');
    const topicDiv = document.createElement('div');
    topicDiv.className = 'topic';

    const topicTitle = document.createElement('h3');
    topicTitle.textContent = topic.title;
    topicDiv.appendChild(topicTitle);

    const topicContent = document.createElement('p');
    topicContent.textContent = topic.content;
    topicDiv.appendChild(topicContent);

    const commentInput = document.createElement('input');
    commentInput.placeholder = 'Ваш комментарий';
    topicDiv.appendChild(commentInput);

    const commentButton = document.createElement('button');
    commentButton.textContent = 'Добавить комментарий';
    commentButton.addEventListener('click', () => {
        const commentText = commentInput.value;
        if (commentText.trim() === '') {
            alert('Пожалуйста, введите комментарий.');
            return;
        }
        addCommentToTopic(topicDiv, commentText);
        commentInput.value = '';
    });
    topicDiv.appendChild(commentButton);

    const commentsDiv = document.createElement('div');
    commentsDiv.className = 'comments';
    topicDiv.appendChild(commentsDiv);

    topicList.appendChild(topicDiv);
}

function addCommentToTopic(topicDiv, commentText) {
    const commentsDiv = topicDiv.querySelector('.comments');
    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment';
    commentDiv.textContent = commentText;
    commentsDiv.appendChild(commentDiv);
}
