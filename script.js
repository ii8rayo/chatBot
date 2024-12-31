// Data
const userData = {
  name: "Raiyan Yasawy",
  skills: ["Full Stack Development", "Databases", "Networking", "Operating Systems"],
  education: [
    "Diploma in Computer Programming at Algonquin College", 
    "Pursuing BSc in Computer Science at Carleton University"
  ],
  experience: [
    { role: "IT Support - Intern", company: "Algonquin College", time: "4 months" },
    { role: "Front-end Developer - Intern", company: "Spiria", time: "4 months" }
  ],
  goals: [
    "Becoming a full-stack developer", 
    "Contributing to open-source projects", 
    "Expanding knowledge in AI and machine learning",
    "Learning Cyber Security and ethical hacking"
  ],
  location: "Ottawa, ON, Canada",
  age: "22",
  ethnicity: "Turkish",
  languages: ["English", "Turkish", "Arabic"],
  aboutMe: "Raiyan is passionate about technology and problem solving. Currently working towards becoming a full-stack developer while exploring new fields such as Cyber Security and AI.",
  contact: {
    email: "raiyan.yasawy@example.com",
    linkedin: "https://www.linkedin.com/in/raiyan-yasawy",
    github: "https://github.com/raiyanyasawy"
  }
};

// Display welcome message
function displayWelcomeMessage() {
  const chatBox = document.getElementById('chat-box');
  const welcomeMessage = document.createElement('div');

  // Use innerHTML to support line breaks and horizontal line
  welcomeMessage.innerHTML = "MosaicBot: I'm Raiyan's chatbot. You can ask me questions about Raiyan, his skills, experience, education, and more! <hr>Type your question below!";
  
  welcomeMessage.style.color = 'green';
  chatBox.appendChild(welcomeMessage);

  chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to get the response based on the user's question
function getBotResponse(question) {
  const chatBox = document.getElementById('chat-box');
  const botMessage = document.createElement('div');
  botMessage.style.color = 'green';

  // Check for greetings
  if (question.toLowerCase().includes('hi') || question.toLowerCase().includes('hello') || question.toLowerCase().includes('hey') || question.toLowerCase().includes('how are you') || question.toLowerCase().includes('howdy')) {
    botMessage.innerHTML = "MosaicBot: Hello! How can I assist you today? 😊";
  }
  // Check for asking how the bot is
  else if (question.toLowerCase().includes('how are you')) {
    botMessage.innerHTML = "MosaicBot: I'm just a bot, but thanks for asking! How can I help you today?";
  }
  // Check for gratitude
  else if (question.toLowerCase().includes('thank you') || question.toLowerCase().includes('thanks') || question.toLowerCase().includes('thank you very much')) {
    botMessage.innerHTML = "MosaicBot: You're welcome! 😊 Feel free to ask me anything else.";
  }
  // Check for about me
  else if (question.toLowerCase().includes('about raiyan') || question.toLowerCase().includes('who is raiyan') || question.toLowerCase().includes('raiyan') || question.toLowerCase().includes('how old is raiyan') || question.toLowerCase().includes('age') || question.toLowerCase().includes('tell me about raiyan')) {
    botMessage.innerHTML = `MosaicBot: Here's a little about Raiyan:<br>Age: ${userData.age}<br>Ethnicity: ${userData.ethnicity}<br>Languages: ${userData.languages.join(', ')}<br>${userData.aboutMe}`;
  }
  // Check for education
  else if (question.toLowerCase().includes('education')) {
    botMessage.innerHTML = "MosaicBot: Here's some info about Raiyan's education:<br>" + userData.education.join('<br>');
  }
  // Check for skills
  else if (question.toLowerCase().includes('skills')) {
    botMessage.innerHTML = "MosaicBot: Here's a list of Raiyan's skills:<br>" + userData.skills.join('<br>');
  }
  // Check for goals
  else if (question.toLowerCase().includes('goals')) {
    botMessage.innerHTML = "MosaicBot: Here are some of Raiyan's goals:<br>" + userData.goals.join('<br>');
  }
  // Check for experience
  else if (question.toLowerCase().includes('experience')) {
    const experiences = userData.experience.map(exp => `${exp.role} at ${exp.company} for ${exp.time}`).join('<br>');
    botMessage.innerHTML = "MosaicBot: Here's a list of Raiyan's experiences:<br>" + experiences;
  }
  // Check for contact
  else if (question.toLowerCase().includes('contact') || question.toLowerCase().includes('email') || question.toLowerCase().includes('how to reach you')) {
    botMessage.innerHTML = `MosaicBot: You can contact Raiyan at:<br>Email: <a href="mailto:${userData.contact.email}">${userData.contact.email}</a><br>LinkedIn: <a href="${userData.contact.linkedin}" target="_blank">${userData.contact.linkedin}</a><br>GitHub: <a href="${userData.contact.github}" target="_blank">${userData.contact.github}</a>`;
  }
  // Check for farewell
  else if (question.toLowerCase().includes('bye') || question.toLowerCase().includes('goodbye') || question.toLowerCase().includes('see you later') || question.toLowerCase().includes('take care')) {
    botMessage.innerHTML = "MosaicBot: Goodbye! Have a great day ahead! 😄";
  } else {
    botMessage.textContent = "MosaicBot: I'm sorry, I didn't understand that. Feel free to ask about Raiyan's education, skills, goals, experience, or more!";
  }

  chatBox.appendChild(botMessage);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Event listener for the "Send" button
document.getElementById('send').addEventListener('click', () => {
  const question = document.getElementById('question').value;
  const chatBox = document.getElementById('chat-box');

  // Append the question
  const userMessage = document.createElement('div');
  userMessage.textContent = `You: ${question}`;
  userMessage.style.color = 'blue';
  chatBox.appendChild(userMessage);

  // Clear the input
  document.getElementById('question').value = '';

  // Get bot response after a short delay
  setTimeout(() => {
    getBotResponse(question);
  }, 1000);
});

// Display the welcome message when the page loads
window.onload = displayWelcomeMessage;
