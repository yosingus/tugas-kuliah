const form = document.getElementById('registrationForm');
const message = document.getElementById('message');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const nama = document.getElementById('nama').value.trim();
  const npm = document.getElementById('npm').value.trim();
  const email = document.getElementById('email').value.trim();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;
  const konfirmasiPassword = document.getElementById('konfirmasiPassword').value;
  const persetujuan = document.getElementById('persetujuan').checked;

  if (!nama || !npm || !email || !username || !password || !konfirmasiPassword) {
    showMessage('Mohon lengkapi semua kolom yang wajib diisi.', 'error');
    return;
  }

  if (username.length < 4) {
    showMessage('Username harus terdiri dari minimal 4 karakter.', 'error');
    return;
  }

  if (password.length < 8) {
    showMessage('Password harus terdiri dari minimal 8 karakter.', 'error');
    return;
  }

  if (password !== konfirmasiPassword) {
    showMessage('Konfirmasi password tidak sama dengan password.', 'error');
    return;
  }

  if (!persetujuan) {
    showMessage('Silakan centang pernyataan bahwa data sudah benar.', 'error');
    return;
  }

  showMessage(
    'Registrasi berhasil divalidasi! Halo, ' + nama +
    '. Ini masih berupa demo frontend; data belum disimpan ke database.',
    'success'
  );
});

form.addEventListener('reset', function () {
  message.textContent = '';
  message.className = 'message';
});

function showMessage(text, type) {
  message.textContent = text;
  message.className = 'message ' + type;
}
