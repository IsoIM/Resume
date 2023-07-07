var arrLang = {
   'en': {
      'name': 'Mamakhov Iskender',
      'contacts': 'Contacts:',
      'info': 'Student Kherson National Technical University.',
      'info2': 'Specialization in computer science.',
      'columnlang': 'Languages ​​of communication',
      'ua': '• Fluent in the Ukraining language',
      'ru': '• Fluent in the Russian language',
      'en': '• Intermediate level of English',
      'columnlangprog': 'Programming languages',
      'columncomputer': 'PC knowledge',
      'user': '• Confident user World, Office, Excel',
      'aboutme': 'About me',
      'fullinfotext1': 'My name is Iskender, I have been programming for over three years in the IT industry. I have a set skills and experience with various programming languages, such as: HTML, CSS, SCSS, JavaScript, Python, C#, C++.',
      'fullinfotext2': 'I use Visual Studio Editor and Visual Studio Cod to develop, edit, debug, compile, and publish my code.',
      'fullinfotext3': "I'm always looking to expand my knowledge and experience in the field of programming, so I regularly attend courses and conferences to stay abreast of the latest trends and innovations in the industry.",
      'fullinfotext4': 'In addition, I have good communication skills and know how to work in a team. I am ready for new professional challenges and ready to participate in the most difficult projects.',
      'fullinfotext5': 'I am proud of my professional achievements and am sure that my experience and knowledge will be appreciated in the new team.',
   },
   'ua': {
      'name': 'Мамахов Іскендер',
      'contacts': 'Контакти:',
      'info': "Студент Херсонського національного технічного університету.",
      'info2': "Спеціальність комп'ютерні науки.",
      'columnlang': 'Мови спілкування',
      'ua': '• Українська вільно',
      'ru': '• Російська вільно',
      'en': '•  Англійська середній',
      'columnlangprog': 'Мови програмування',
      'columncomputer': 'Знання ПК',
      'user': '• Впевнений користувач World, Office, Excel',
      'aboutme': 'Про себе',
      'fullinfotext1': 'Мене звуть Іскендер, я займаюся програмуванням понад три роки в індустрії IT. Я маю набір навичок та досвід роботи з різними мовами програмування, такими як: HTML, CSS, SCSS, JavaScript, Python, C#, C++.',
      'fullinfotext2': 'Для розробки, редагування, налагодження та складання коду, а також для публікації програми я використовую редактор Visual Studio та Visual Studio Cod.',
      'fullinfotext3': 'Я завжди прагну розширювати свої знання та досвід у галузі програмування, тому я регулярно беру участь у курсах та конференціях, щоб залишатися в курсі останніх тенденцій та інновацій в індустрії.',
      'fullinfotext4': '"Крім того, я маю гарні комунікативні навички і вмію працювати в команді. Я готовий до нових професійних викликів та готовий брати участь у найскладніших проектах.',
      'fullinfotext5': 'Я пишаюся своїми професійними досягненнями та впевнений, що мій досвід та знання будуть оцінені у новій команді.',
   },
}



$(function () {
   $('.translate').click(function () {
      var lang = $(this).attr('id');

      $('.lang').each(function (index, item) {
         $(this).text(arrLang[lang][$(this).attr('key')]);
      });
   });
});
