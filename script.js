function check() {
    const input = document.getElementById('password').value;
    const result = document.getElementById('result');

    if (input.toUpperCase() === 'HEART') {
      result.innerHTML = '<div class="msg ok">C39nnqRw</div>';
    } else {
      result.innerHTML = '<div class="msg bad">Неверный пароль</div>';
    }
  }