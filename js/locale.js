let LanguageSelector = {

  _RUS : {
    name: "Генератор паролей",
    input_placeholder: "Пароль",
    btn_generate_title: "Сенерировать",
    btn_copy_title: "Копировать..."
  },

  _CHI : {
    name: "密码生成器",
    input_placeholder: "密码",
    btn_generate_title: "产生",
    btn_copy_title: "复制..."
  },

  _ENG : {
    name: "Password generator",
    input_placeholder: "Password",
    btn_generate_title: "Generate",
    btn_copy_title: "Copy..."
  },

  getLocale : function(lang) {
    if(lang.indexOf('zh')) {
      return this._CHI;
    } else if(lang.indexOf('ru')) {
      return this._RUS;
    } else {
      return this._ENG;
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  let locale = LanguageSelector.getLocale(window.navigator.userLanguage || window.navigator.language)
  document.getElementById("id1_pwd_generator_title").innerHTML = locale.name;
  document.getElementById("id1_pwd_generator").placeholder = locale.input_placeholder;
  document.getElementById("id1_pwd_button").setAttribute("title", locale.btn_generate_title);
  document.getElementById("id1_pwd_copy").setAttribute("title", locale.btn_copy_title);
});
