## Private Message Bot
>Bot untuk meneruskan pesan dari user ke owner (Seperti Livegram)

>Note: Kalo mau fork/clone jangan lupa kasih star ya kak, makasi. Jangan lupa kalo install di lokal harus punya npm

Untuk mengganti pesan, silahkan pergi ke index.js dan cari tulisan 'Silahkan blabla'

### Penggunaan:
- Heroku
    - Tekan [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy) untuk deploy ke heroku
- Lokal / VPS
    - `git clone https://github.com/DoellBarr/PmTelegramBot`
    - `cd PmTelegramBot`
    - `npm i`
    - Ganti nama .env.example ke .env atau `cp .env.example .env`
    - Lalu isi `OWNER_ID` dan `BOT_TOKEN` atau `nano .env`
    - Setelah itu ketik `npm run start` atau `node index.js`

### Cara mendapatkan OWNER_ID
- Pergi ke [@MissRose_Bot](https://t.me/MissRose_Bot)
- Lalu ketik `/id`
- Salin angka yang muncul dan masukkan pada kolom OWNER_ID

### TODO
- Support media forward

#### Kredit:
- [KnorpelSenf](https://github.com/KnorpelSenf) untuk [grammY](https://github.com/grammyjs/grammY)
