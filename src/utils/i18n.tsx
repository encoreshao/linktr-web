import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      "title": "LINK - TREE"
    }
  },
  zh: {
    translation: {
      "title": "LINK - 链",
      menu: {
        'home': '首页',
        'about': '关于',
        "help": '帮助',
      },
      about_us: {
        'title': "关于我们",
        'content': "链 - 使您的影响力更广，传播到世界每一个角落。您仅需要一个链接遍可以向世界展示所有你所想展示的信息。"
      },
      action: {
        'login': '登录',
        'signup': '注册',
        'signupAccount': '注册账号',
        'joinUs': '一键加入'
      },
      model: {
        user: {
          email: { label: '邮箱' },
          password: { label: '密码' }
        }
      },
      tip: {
        'freeSignUp': '免费注册账号',
        'haveAccount': '已经有账号?',
        'gotoManagementPage': '进入管理面板',
        'nearestWithWorld': '让我们离世界更近一些',
        'onlyOneLink': '世界可以您离近一点，再近一点',
        'takeYouToTheWorld': '您仅需要一个链接, 一个链接即可将您展示的内容带到整个世界!',
      }
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "zh",

    // keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
