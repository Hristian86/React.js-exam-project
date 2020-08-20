import getCookie from "../components/Cookioes/GetCookie"

const LocalizationFunc = () => {
    const lang = getCookie('language');
    if (lang == "BG") {

        const language = {
            language: "Български",
            product: "Продукти",
            about: "За нас",
            contact: "Контакти",
            search: "Търси",
            register: "Регистриране",
            login: "Вход",
            logout: "Изход",
            managment: "контрол панел",
            //end of navbar
            city: "Град",
            forSale: "За продан",
            forRent: "Под наем",
            homePageProductDescription: "Това са нашите предложения с най-високи цени",
            weather: "Времето в русе",
            price: "Цена:",
            details: "Детайли",
            //end of home page
            footerDescription1: "Общото схващане за долния колонтитул на уебсайта е, че той не е толкова важен, колкото заглавката или основната част на съдържанието. ",
            footerDescription2: "Това се отнася до донякъде остарялото схващане, че най-важната информация трябва да лежи над сгъвката или преди да започнете превъртане.",
            ourServices: "Услугите, които предлагаме са:",
            ourServicesDescription: "Продаваме и отдаваме под наем имоти",
            //end of footer
            //email: "Емайл",
            //password: "Парола",
            //ConfirmPassword: "Потвърждавана не паролата",
            //SubmitToRegister: "Изпратете за регистрация",
            //LoginComponent: "Вход"

        };

        Object.freeze(language);

        return language;

    } else {

        const language = {
            language: "English",
            product: "Products",
            about: "About us",
            contact: "Contacts",
            search: "Search",
            register: "Register",
            login: "Login",
            logout: "Log out",
            managment: "management",
            //end of navbar
            city: "City",
            forSale: "For sale",
            forRent: "For rent",
            homePageProductDescription: "These are our proposals with highest prices",
            weather: "The weather in Russe",
            price: "Price:",
            details: "Details",
            //end of home page
            footerDescription1: "The common perception of the website footer is that it�s not as important as the header or body of the content. ",
            footerDescription2: "This relates to the somewhat antiquated notion that the most important information must lie above the fold, or before you start scrolling.",
            ourServices: "Our services are:",
            ourServicesDescription:"Whe sell and offer for rent properties.",
            //end of footer
            //email: "Email",
            //password: "Password",
            //ConfirmPassword: "Confirm password",
            //SubmitToRegister: "Submit to register",
            //LoginComponent: "Log in"

        };

        Object.freeze(language);

        return language;
    }
}

export default LocalizationFunc;