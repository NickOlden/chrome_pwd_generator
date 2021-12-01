document.addEventListener('DOMContentLoaded', function () {
  let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  });
  document.getElementById("id1_pwd_button").addEventListener("click", () => {
    Password.generate(6);
  }, false);

  document.getElementById("id1_pwd_copy").addEventListener("click", () => {
    CopyClip.copy(document.getElementById('id1_pwd_generator').value);
  }, false);
});

let Password = {

  _pattern : /[#?!@$%^&*a-zA-Z0-9]/,

  _getRandomByte : function() {
    let result = new Uint8Array(1);
    if(window.crypto && window.crypto.getRandomValues) {
      window.crypto.getRandomValues(result);
      return result[0];
    }
    else if(window.msCrypto && window.msCrypto.getRandomValues) {
      window.msCrypto.getRandomValues(result);
      return result[0];
    }
    else {
      return Math.floor(Math.random() * 256);
    }
  },

  generate : function(length) {
    document.getElementById('id1_pwd_generator').value = [...Array(3).keys()]
      .map(function () {
        return Array.apply(null, {'length': length})
          .map(function() {
            let result;
            while(true) {
              result = String.fromCharCode(this._getRandomByte());
              if(this._pattern.test(result)) {
                return result;
              }
            }
          }, this).join('')
      }, this).join('-');
  }
};

let CopyClip = {
  copy : function(copyText) {
    navigator.clipboard.writeText(copyText);
  }
}

