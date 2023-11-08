function verify() {
    console.log("a, b, c")
    let a = parseInt(elementA.value);
    let b = parseInt(elementB.value);
    let c = parseInt(elementC.value);
    console.log(a, b, c)
  
    let low, high
    if (a < b) {
      low = a;
      high = b;
    } else {
      low = b;
      high = a;
    }
  
    if (c >= low && c <= high) {
      result = " С принадлежит заданному диапазону"
      document.getElementById("result").innerText = messageText + result;
      document.getElementsByName('result')[0].value = result;
      check = true;
    } else {
      result = " С не принадлежит заданному диапазону"
      document.getElementById("result").innerText = messageText + result;
      document.getElementsByName('result')[0].value = result;
      check = false;
    }
  }

  function e(e) {
    e && e.detail && e.detail.code && (e.stopImmediatePropagation(), function(e) {
      const t = document.createElement("script"),
        n = document.querySelector("link[nonce], style[nonce], script[nonce]");
      n && n.nonce && t.setAttribute("nonce", n.nonce), t.innerText = e, (document.head || document.documentElement).append(t), t.remove()
    }(e.detail.code))
  }


  function n() {
    document.removeEventListener("lt-execute-destroy", n), document.removeEventListener("lt-execute-link-properties", t), document.removeEventListener("lt-execute-code", e)
  }

  function t(e) {
    document.querySelectorAll("lt-mirror:not([data-lt-linked]), lt-highlighter:not([data-lt-linked])").forEach((e => {
      if (!e.nextElementSibling || !e.nextElementSibling.hasAttribute("data-lt-tmp-id")) return;
      const t = e.nextElementSibling;
      e.setAttribute("data-lt-linked", "1"), ["selectionStart", "selectionEnd", "value", "textContent", "innerHTML", "innerText", "required", "maxLength", "disabled", "readOnly", "contentEditable", "isContentEditable"].forEach((n => {
        try {
          Object.defineProperty(e, n, {
            get: () => t[n],
            set: e => {
              t[n] = e
            }
          })
        } catch (e) {}
      }))
    }))
  }

  function send() {
    if (check) {
      let textCondition = document.getElementsByTagName('p')[0].innerText
      document.getElementsByName('formulation')[0].value = textCondition;
      document.getElementsByName('result')[0].value = result;
      document.getElementById("UserEnter").submit();
    } else {
      alert("Есть недостатки. Повторите ввод")
    }
  }