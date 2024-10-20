document.addEventListener('DOMContentLoaded', function() { 
    const chatbotToggler = document.querySelector('.chatbot-toggler');
    const chatbotContainer = document.querySelector('.chatbot');
    const sendButton = document.getElementById('send-btn');
    const textarea = document.querySelector('.chat-input textarea');
    const chatbox = document.querySelector('.chatbox');

    // Toggle chatbot visibility on click
    chatbotToggler.addEventListener('click', () => {
        chatbotContainer.classList.toggle('show-chatbot');

        // Toggle between mode_comment (show icon) and close icons
        const iconElements = chatbotToggler.querySelectorAll('.material-symbols-outlined');
        iconElements.forEach(icon => icon.classList.toggle('hidden'));
    });

    // OpenAI API configuration
    const apiUrl = "https://api.openai.com/v1/chat/completions";
    const apiKey = "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"; // Replace with your actual API key
    const model = "gpt-3.5-turbo";

    // Function to send a request to OpenAI API
    async function sendMessageToAPI(userMessage) {
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: model,
                    messages: [{ role: "user", content: userMessage }]
                })
            });

            // Check if the response is ok
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.error.message}`);
            }

            const data = await response.json();
            const botMessage = data.choices[0].message.content.trim();
            addMessage(botMessage, 'incoming');
        } catch (error) {
            console.error('Error fetching response from OpenAI:', error);
            addMessage('Buddy is trying to get information for you.', 'incoming');
        }
    }

    // Add message to chatbox
    function addMessage(message, type) {
        const chatMessage = document.createElement('li');
        chatMessage.classList.add('chat', type);
        chatMessage.innerHTML = type === 'outgoing' 
            ? `<p>${message}</p>` 
            : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
        chatbox.appendChild(chatMessage);
        chatbox.scrollTop = chatbox.scrollHeight; // Auto-scroll to the bottom
    }

    // Handle send button click
    sendButton.addEventListener('click', () => {
        const userMessage = textarea.value.trim();
        if (userMessage !== "") {
            addMessage(userMessage, 'outgoing');
            textarea.value = ""; // Clear the textarea
            sendMessageToAPI(userMessage); // Send the user's message to the OpenAI API
        }
    });

    // Optionally handle Enter key press
    textarea.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            sendButton.click();
        }
    });
});
