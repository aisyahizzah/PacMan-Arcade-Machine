# PacMan-Arcade-Machine

## (Ubah file README.md ini setelah program diselesaikan)

## Latar Belakang
Pacman merupakan video game yang telah populer sejak dekade 80-an. Dalam permainan ini pemain mengontrol karakter Pac-Man menggunakan keyboard arrows maupun joystick. Tujuan permainan ini yaitu untuk menggerakkan Pac-Man di dalam maze untuk melahap semua makanannya sebelum hantu-hantu memakan Pac-Man. Pemain dinyatakan menang apabila seluruh makanan telah habis dan Pac-Man masih bertahan hidup. Sedangkan pemain dinyatakan kalah apabila Pac-Man mati sebelum menghabiskan seluruh makanannya.

## Spesifikasi
Untuk mengatasi kejenuhan asisten lab IRK setelah menilai tubes, kordas mengusulkan untuk mengadakan Pacman Arcade Machine di lab IRK. Sebagai game developer Anda diminta untuk membuatkan lab IRK sebuah PacMan Arcade Machine yang menjalankan game pada Browser. Program dibuat menggunakan bahasa <b>JavaScript</b> dengan ketentuan sebagai berikut. 

1.  Ukuran Maze adalah minimum 20 x 15 dan maksimum 40 x 30. Anda mendesain sendiri bentuk maze sekreatif mungkin.
2.  Kontrol karakter Pac-Man menggunakan input keyboard
3.  Algoritma pergerakan bot ghost yang dapat Anda pilih: <b>Djikstra</b> ATAU <b>Breadth First Search</b>. Sebuah bot ghost pada awal permainan dispawn random di sebuah titik. kemudian bot akan mulai mengejar Pac-Man menggunakan mekanisme dari algoritma yang Anda pilih. Jika titik bot = titik Pac-Man maka Pac-Man akan dimakan bot dan mati.
4.  Jika pemain dalam kondisi kalah tampilkan pesan kekalahan (Misal: "Game Over") dan sebaliknya jika menang tampilkan pesan kemenangan (Misal: "You win").  
5.  Program dapat menampilkan score pemain. Koin yang dimakan bernilai 10 dan buah yang dimakan bernilai 50. Penempatan koin dan buah bebas,

Pada repositori ini telah disediakan asset yang <b>wajib</b> digunakan untuk program yang akan Anda buat, silakan Anda pakai dan boleh ditambah dengan asset lain dari luar jika diperlukan. 

Terakhir ubah isi file readme ini menjadi:
- Nama
- NIM
- Panduan memainkan permainan
- Alasan pemilihan algoritma (Djikstra / BFS)

## Bonus
1.  Tampilan program dibangun menggunakan library jQuery.
2.  Spawn 4 ghosts pada 4 titik berbeda di awal permainan. Kemudian setiap bot ghost mengejar Pac-Man menggunakan mekanisme dari algoritma yang Anda pilih.
3. Program dapat menampilkan scoreboard di akhir permainan. Pemain memasukkan input nama kemudian program menyimpan nama pemain dan score dalam file JSON. Scoreboard akan menampilkan score secara terurut dari score tertinggi hingga terendah.

## Penilaian
1.  Kebenaran fungsionalitas permainan dan kesesuaian spek
2.  Langkah algoritma pergerakan bot hantu
3.  Readme
4.  Kreativitas dan keindahan interface
5.  Bonus 1, 2, dan 3

Komponen 1 sampai 4 bernilai 1600 dan komponen 5 bernilai 900 (setiap bonus bernilai 300).

## Referensi