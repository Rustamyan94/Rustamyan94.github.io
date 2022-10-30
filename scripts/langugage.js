const languages = {
  ru: {
    title: "Портфолио Арсена Рустамяна",
    welcomeText: `Здравствуйте, меня зовут <span class="highlight">Арсен Рустамян</span>.
    <br />
    Я веб и мобайл программист.`,
    viewMyWork: `Посмотрите мою работу  <i class="mdi mdi-arrow-right"></i>`,
    menu: {
      home: "Главная",
      aboutMe: "Обо мне",
      portfolio: "Портфолио",
      contactMe: "Связь со мной",
    },
    about: {
      title: "Обо мне",
      c1: {
        title: "Быстро",
        desc: "Быстрое время загрузки и взаимодействие без задержек.",
      },
      c2: {
        title: "Адаптивный дизайн",
        desc: "Мои макеты будут работать на любом устройстве.",
      },
      c3: {
        title: "Интуитивный",
        desc: "Сильное предпочтение отдается простому в использовании.",
      },
      c4: {
        title: "Динамический",
        desc: "Веб-сайты не обязательно должны быть статичными.",
      },
      whoIsGuy: "Кто этот парень?",
      description: `React & React Native разработчик.
      <br />
      Самоучка, который с энтузиазмом использует свои знания.
      <br />
      <span class="page-link highlight" dest="contact"
        >Давай сделаем что-нибудь особенное.</span
      >`,
    },
    projects: {
      title: "ПРОЕКТЫ",
      learnMore: "ПОДРОБНЕЕ",
    },
    contact: {
      title: "СВЯЗЬ СО МНОЙ",
      formTitle: "У вас есть вопросы или вы хотите работать со мной?",
      inputName: "Имя",
      inputEmail: "Введите адрес электронной почты",
      inputMessage: "Ваше сообщение",
      formAlert: `Ваше сообщение было успешно отправлено. Спасибо!<span
      id="close"
      class="mdi mdi-close"
    ></span>`,
      formBtn: "ОТПРАВТЬ",
    },
    footer: {
      email: "Емайл:",
      tel: "Телефон:",
      name: "АРСЕН РУСТАМЯН",
    },
    modal: {
      view: "ПОСМОТРЕТЬ САЙТ",
    },
  },
  en: {
    title: "Portfolio Arsen Rustamyan",
    welcomeText: `Hay, my name is <span class="highlight">Arsen Rustamyan</span>.
    <br />
    I'm web and mobile developer`,
    viewMyWork: `View my works  <i class="mdi mdi-arrow-right"></i>`,
    menu: {
      home: "Home",
      aboutMe: "About me",
      portfolio: "Portfolio",
      contactMe: "Contact me",
    },
    about: {
      title: "About me",
      c1: {
        title: "Fast",
        desc: "Fast load times and lag free interaction, my highest priority.",
      },
      c2: {
        title: "Responsive",
        desc: "My layouts will work on any device, big or small.",
      },
      c3: {
        title: "Intuitive",
        desc: "Strong preference for easy to use, intuitive UX/UI.",
      },
      c4: {
        title: "Dynamic",
        desc: "Websites don't have to be static, I love making pages come to life.",
      },
      whoIsGuy: "Who's this guy?",
      description: `React & React Native Developer.
      <br />
      I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
      <br />
      <span class="page-link highlight" dest="contact"
        >Let's make something special.</span
      >`,
    },
    projects: {
      title: "Projects",
      learnMore: "Learn More",
    },
    contact: {
      title: "CONTACT ME",
      formTitle: "Have a question or want to work together?",
      inputName: "Name",
      inputEmail: "Email",
      inputMessage: "Your Message",
      formAlert: `Your message has been sent successfully. Thanks!<span
      id="close"
      class="mdi mdi-close"
    ></span>`,
      formBtn: "Submit",
    },
    footer: {
      email: "Email:",
      tel: "Phone Number:",
      name: "ARSEN RUSTAMYAN",
    },
    modal: {
      view: "VIEW",
    },
  },
};
$(() => {
  $("#btnRu").click(() => {
    $("#btnEn").removeClass("active2");
    $("#btnRu").addClass("active2");
    $("title").html(languages.ru.title);
    $("#welcomeText").html(languages.ru.welcomeText);
    $("#viewMyWork").html(languages.ru.viewMyWork);
    $("#homeMenu").html(languages.ru.menu.home);
    $("#aboutMenu").html(languages.ru.menu.aboutMe);
    $("#portfolioMenu").html(languages.ru.menu.portfolio);
    $("#contactMenu").html(languages.ru.menu.contactMe);
    // About
    $("#about-title").html(languages.ru.about.title);
    $("#about-c1-title").html(languages.ru.about.c1.title);
    $("#about-c1-desc").html(languages.ru.about.c1.desc);
    $("#about-c2-title").html(languages.ru.about.c2.title);
    $("#about-c2-desc").html(languages.ru.about.c2.desc);
    $("#about-c3-title").html(languages.ru.about.c3.title);
    $("#about-c3-desc").html(languages.ru.about.c3.desc);
    $("#about-c4-title").html(languages.ru.about.c4.title);
    $("#about-c4-desc").html(languages.ru.about.c4.desc);
    $("#about-whoIsGuy").html(languages.ru.about.whoIsGuy);
    $("#about-description").html(languages.ru.about.description);
    // Projects
    $("#projects-title").html(languages.ru.projects.title);
    $("#portfolio #gallery .button").html(languages.ru.projects.learnMore);
    // Contact
    $("#contact-title").html(languages.ru.contact.title);
    $("#contact-formTitle").html(languages.ru.contact.formTitle);
    $("#input-name").attr("placeholder", languages.ru.contact.inputName);
    $("#input-email").attr("placeholder", languages.ru.contact.inputEmail);
    $("#input-message").attr("placeholder", languages.ru.contact.inputMessage);
    $("#form-alert").html(languages.ru.contact.formAlert);
    $("#contact-form #submit").attr("value", languages.ru.contact.formBtn);
    // Footer
    $("#footer-email").html(languages.ru.footer.email);
    $("#footer-tell").html(languages.ru.footer.tel);
    $("#footer-name").html(languages.ru.footer.name);
    // MODAL
    $("#modal-view").html(languages.ru.modal.view);
  });
  $("#btnEn").click(() => {
    $("#btnRu").removeClass("active2");
    $("#btnEn").addClass("active2");
    $("title").html(languages.en.title);
    $("#welcomeText").html(languages.en.welcomeText);
    $("#viewMyWork").html(languages.en.viewMyWork);
    $("#homeMenu").html(languages.en.menu.home);
    $("#aboutMenu").html(languages.en.menu.aboutMe);
    $("#portfolioMenu").html(languages.en.menu.portfolio);
    $("#contactMenu").html(languages.en.menu.contactMe);
    // About
    $("#about-title").html(languages.en.about.title);
    $("#about-c1-title").html(languages.en.about.c1.title);
    $("#about-c1-desc").html(languages.en.about.c1.desc);
    $("#about-c2-title").html(languages.en.about.c2.title);
    $("#about-c2-desc").html(languages.en.about.c2.desc);
    $("#about-c3-title").html(languages.en.about.c3.title);
    $("#about-c3-desc").html(languages.en.about.c3.desc);
    $("#about-c4-title").html(languages.en.about.c4.title);
    $("#about-c4-desc").html(languages.en.about.c4.desc);
    $("#about-whoIsGuy").html(languages.en.about.whoIsGuy);
    $("#about-description").html(languages.en.about.description);
    // Projects
    $("#projects-title").html(languages.en.projects.title);
    $("#portfolio #gallery .button").html(languages.en.projects.learnMore);
    // Contact
    $("#contact-title").html(languages.en.contact.title);
    $("#contact-formTitle").html(languages.en.contact.formTitle);
    $("#input-name").attr("placeholder", languages.en.contact.inputName);
    $("#input-email").attr("placeholder", languages.en.contact.inputEmail);
    $("#input-message").attr("placeholder", languages.en.contact.inputMessage);
    $("#form-alert").html(languages.en.contact.formAlert);
    $("#contact-form #submit").attr("value", languages.en.contact.formBtn);
    // Footer
    $("#footer-email").html(languages.en.footer.email);
    $("#footer-tell").html(languages.en.footer.tel);
    $("#footer-name").html(languages.en.footer.name);
    // MODAL
    $("#modal-view").html(languages.en.modal.view);
  });
});
