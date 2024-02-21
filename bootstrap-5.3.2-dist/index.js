
        
              function displayHello() {
                const languages = ['english', 'kiswahili','japannes', 'french', 'german', 'chinnese'];
                let currentLanguageIndex = 0;
                let currentLetterIndex = 0;
            
                const greetingElement = document.getElementById('greeting');
                const placeholderElement = document.getElementById('placeholder');
            
                function updateLanguage() {
                    const currentLanguage = languages[currentLanguageIndex];
                    const currentGreeting = getHelloInLanguage(currentLanguage);
            
                    if (currentLetterIndex === 0) {
                        greetingElement.textContent = '|';
                    } else if (currentLetterIndex <= currentGreeting.length) {
                        greetingElement.textContent = currentGreeting.substring(0, currentLetterIndex);
                    } else {
                        greetingElement.textContent = '|';
                        currentLetterIndex = 0;
                        currentLanguageIndex = (currentLanguageIndex + 1) % languages.length;
                    }
            
                    currentLetterIndex++;
                }
            
                function getHelloInLanguage(language) {
                    const languageGreetings = {
                        english: 'HELLO',
                        kiswahili: 'JAMBO',
                        japannes: 'こんにちは',
                        french: 'BONJOUR',
                        german: 'HALLO',
                        chinnese:'你好'
                        
                    };
            
                    return languageGreetings[language];
                }
            
                updateLanguage();
                setInterval(updateLanguage, 400);
            }
            
            displayHello();
            
            
            

  document.addEventListener("DOMContentLoaded", function() {
      // Add 'show' class to elements after a delay
      setTimeout(function() {
          const contentElement = document.querySelector('.content');
          const cardElement = document.querySelector('.card');

          contentElement.classList.add('show');
          cardElement.classList.add('show');
      }, 500); // Adjust the delay (in milliseconds) as needed
  });



  document.addEventListener("DOMContentLoaded", function() {
      // Add 'show' class to elements after a delay
      setTimeout(function() {
          const contentElement = document.querySelector('.content');
          const cardElement = document.querySelector('.card');
          const imageElement = document.querySelector('.image');

          contentElement.classList.add('show');
          cardElement.classList.add('show');
          imageElement.classList.add('show');
      }, 500); // Adjust the delay (in milliseconds) as needed
  });


  document.addEventListener("DOMContentLoaded", function () {
    // Add 'show' class to elements after a delay
    setTimeout(function () {
        const contentElement = document.querySelector('.content');
        const cardElement = document.querySelector('.card');
        const imageElement = document.querySelector('.image');
        const contactElement = document.querySelector('.card-body'); // Adjust the selector as needed

        contentElement.classList.add('show');
        cardElement.classList.add('show');
        imageElement.classList.add('show');

        // Add the 'shake' class to the contact element after 30 seconds
        setTimeout(function () {
            contactElement.classList.add('shake');
        }, 30000); // 30 seconds
    }, 500); // Adjust the delay (in milliseconds) as needed
});









