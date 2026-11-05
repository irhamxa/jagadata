// Data Materi dan Bank Soal: Edukasi Keamanan Data Pribadi (JagaData)
// Terdiri dari 4 Level, masing-masing 4 Bab (total 16 Bab) dan 20 Soal Ujian (total 80 Soal)

window.EDU_CONTENT = {
  websiteTitle: "JagaData",
  tagline: "Panduan Cerdas & Praktis Menjaga Keamanan Data Pribadi",
  levels: [
    {
      id: 1,
      badge: "Level 1",
      nama: "Dasar",
      judul: "Fondasi Keamanan & Mengenali Penipuan",
      tujuan: "Pengguna mampu mengenali penipuan yang paling umum dan menerapkan kebiasaan keamanan paling dasar.",
      warna: "var(--lvl-1)",
      warnaBg: "var(--lvl-1-bg)",
      babs: [
        {
          id: "1.1",
          nomor: "Bab 1.1",
          judul: "Mengenal Data Pribadi dan Ancamannya",
          ringkasan: "Memahami apa itu data pribadi, jenis yang sensitif, dan mengapa menjadi incaran penjahat.",
          waktuBaca: "3-4 menit",
          sections: [
            {
              tipe: "paragraf",
              subjudul: "Apa itu data pribadi?",
              konten: "Informasi yang dapat mengenali atau dihubungkan dengan seseorang, misalnya nama lengkap, NIK, nomor KK, nomor HP, alamat, tanggal lahir, foto wajah, nomor rekening, dan akun media sosial. Data yang bersifat lebih sensitif antara lain data keuangan, kesehatan, dan biometrik (sidik jari, wajah)."
            },
            {
              tipe: "paragraf",
              subjudul: "Mengapa data kita diincar?",
              konten: "Data pribadi bisa dipakai untuk membobol rekening, mengajukan pinjaman online atas nama korban, membuka akun palsu, atau meyakinkan korban lain bahwa penipu \"mengenal\" mereka."
            },
            {
              tipe: "daftar",
              subjudul: "Tiga istilah utama:",
              items: [
                "<strong>Scam (penipuan):</strong> penipu membujuk korban agar menyerahkan uang atau data secara sukarela, lewat tipuan.",
                "<strong>Phishing:</strong> pesan, email, atau situs palsu yang menyamar sebagai pihak tepercaya untuk mencuri data login, OTP, atau data kartu.",
                "<strong>Hack (peretasan):</strong> akses ke akun atau perangkat tanpa izin, sering lewat password yang bocor atau malware."
              ]
            },
            {
              tipe: "callout",
              calloutType: "perhatian",
              judul: "Ingat:",
              konten: "Sebagian besar kejadian bukan karena penjahat \"sangat jago teknologi\", tetapi karena korban dibujuk melakukan sesuatu. Karena itu, kewaspadaan manusia adalah pertahanan utama."
            }
          ],
          kesimpulan: "Data pribadi punya nilai; penipu bekerja dengan membujuk, bukan hanya dengan teknologi."
        },
        {
          id: "1.2",
          nomor: "Bab 1.2",
          judul: "Mengenali Modus Penipuan Populer",
          ringkasan: "Daftar 7 modus penipuan yang paling marak di Indonesia dan ciri-ciri tanda bahayanya.",
          waktuBaca: "4-5 menit",
          sections: [
            {
              tipe: "daftar-nomor",
              subjudul: "Modus yang sering terjadi di Indonesia:",
              items: [
                "<strong>File APK \"undangan pernikahan\", \"resi paket\", atau \"tagihan\":</strong> Dikirim lewat WhatsApp. Jika dipasang, aplikasi berbahaya dapat membaca SMS (termasuk OTP) dan mengambil alih ponsel.",
                "<strong>Mengaku customer service bank atau e-commerce:</strong> Penipu menelepon atau mengirim pesan, mengaku mendeteksi masalah, lalu meminta data atau OTP.",
                "<strong>Hadiah atau undian palsu:</strong> \"Anda menang\", lalu diminta transfer biaya administrasi.",
                "<strong>Penipuan kurir:</strong> Pesan tentang paket gagal kirim disertai link atau biaya tambahan.",
                "<strong>Lowongan kerja atau tugas online palsu:</strong> Awalnya diberi komisi kecil agar percaya, lalu diminta setor modal lebih besar.",
                "<strong>Mengaku kerabat atau atasan:</strong> \"Ini nomor baru saya, tolong transfer dulu.\"",
                "<strong>Pinjaman online ilegal:</strong> Meminta akses kontak dan galeri, lalu meneror peminjam."
              ]
            },
            {
              tipe: "callout",
              calloutType: "bahaya",
              judul: "Tanda bahaya umum:",
              konten: "Mendesak (\"segera atau akun diblokir\"), terlalu menguntungkan, minta data rahasia, mengarahkan ke link atau aplikasi di luar toko resmi, dan meminta Anda merahasiakan percakapan."
            }
          ],
          kesimpulan: "Jika ada tekanan waktu, iming-iming besar, atau permintaan data rahasia, anggap mencurigakan sampai terbukti sebaliknya."
        },
        {
          id: "1.3",
          nomor: "Bab 1.3",
          judul: "OTP, PIN, dan Data yang Tidak Boleh Dibagikan",
          ringkasan: "Memahami data rahasia yang tidak boleh dibagikan kepada siapa pun, apa pun alasannya.",
          waktuBaca: "3-4 menit",
          sections: [
            {
              tipe: "daftar",
              subjudul: "Tidak boleh diberikan kepada siapa pun, termasuk yang mengaku petugas bank:",
              items: [
                "Kode OTP (kode sekali pakai) dari SMS, WhatsApp, atau aplikasi",
                "PIN ATM atau mobile banking dan password",
                "CVV/CVC (3 digit di belakang kartu) beserta tanggal kedaluwarsa kartu secara lengkap",
                "Kode verifikasi akun (misalnya WhatsApp 6 digit)"
              ]
            },
            {
              tipe: "callout",
              calloutType: "info",
              judul: "Penting Diingat",
              konten: "Bank dan penyedia layanan resmi tidak pernah meminta data-data ini lewat telepon, chat, atau email."
            },
            {
              tipe: "paragraf",
              subjudul: "Mengapa OTP begitu penting?",
              konten: "OTP adalah \"kunci terakhir\". Dengan OTP, penipu bisa menyelesaikan transaksi atau memindahkan akun WhatsApp Anda ke perangkat mereka."
            },
            {
              tipe: "callout",
              calloutType: "tindakan",
              judul: "Jika menerima OTP yang tidak diminta:",
              konten: "Artinya seseorang sedang mencoba masuk ke akun Anda. Jangan berikan ke siapa pun, abaikan, lalu segera ganti password akun terkait."
            }
          ],
          kesimpulan: "OTP, PIN, dan CVV tidak untuk dibagikan, apa pun alasannya."
        },
        {
          id: "1.4",
          nomor: "Bab 1.4",
          judul: "Password Kuat dan Kebiasaan Dasar",
          ringkasan: "Teknik membuat frasa sandi (passphrase) yang mudah diingat tetapi sulit ditebak, serta kebiasaan aman harian.",
          waktuBaca: "3-5 menit",
          sections: [
            {
              tipe: "daftar",
              subjudul: "Ciri password yang kuat:",
              items: [
                "<strong>Panjang:</strong> minimal 12 karakter. Panjang lebih penting daripada rumit.",
                "Tidak memakai nama, tanggal lahir, nomor HP, atau pola mudah (123456, qwerty, password).",
                "Berbeda untuk setiap akun. Jika satu akun bocor, akun lain tidak ikut terbuka."
              ]
            },
            {
              tipe: "callout",
              calloutType: "tips",
              judul: "Tips praktis:",
              konten: "Gunakan frasa sandi (passphrase), yaitu beberapa kata acak yang mudah diingat, misalnya <code>kopi-hujan-sepeda-biru-92</code>."
            },
            {
              tipe: "daftar",
              subjudul: "Kebiasaan dasar lain:",
              items: [
                "Perbarui sistem operasi dan aplikasi.",
                "Pasang aplikasi hanya dari toko resmi (Play Store, App Store).",
                "Kunci layar ponsel dengan PIN, pola, atau biometrik.",
                "Jangan membuka link atau lampiran dari pengirim yang tidak dikenal.",
                "Jangan memakai ulang password, terutama pada email dan perbankan."
              ]
            }
          ],
          kesimpulan: "Password panjang, unik, dan tidak dipakai ulang adalah fondasi keamanan akun."
        }
      ],
      bankSoal: [
        {
          id: "soal-1-1",
          level: 1,
          babRujukan: "Bab 1.1",
          pertanyaan: "Manakah yang termasuk data pribadi?",
          pilihan: [
            "Cuaca hari ini",
            "Nomor NIK dan nomor rekening",
            "Judul film favorit umum",
            "Nama kota di peta"
          ],
          jawabanBenar: 1,
          penjelasan: "NIK dan nomor rekening dapat mengidentifikasi seseorang dan berisiko disalahgunakan."
        },
        {
          id: "soal-1-2",
          level: 1,
          babRujukan: "Bab 1.1",
          pertanyaan: "Pesan yang menyamar sebagai bank untuk mencuri data login disebut...",
          pilihan: [
            "Spam iklan",
            "Antivirus",
            "Phishing",
            "Cache"
          ],
          jawabanBenar: 2,
          penjelasan: "Phishing adalah penyamaran sebagai pihak tepercaya untuk mencuri data."
        },
        {
          id: "soal-1-3",
          level: 1,
          babRujukan: "Bab 1.2",
          pertanyaan: "Seseorang mengirim file \"Undangan_Pernikahan.apk\" lewat WhatsApp. Tindakan terbaik adalah...",
          pilihan: [
            "Tidak memasang dan menghapus pesan, bila perlu tanya pengirim lewat jalur lain",
            "Langsung memasang agar tidak dianggap tidak sopan",
            "Meneruskan ke grup keluarga",
            "Memasang di ponsel lama saja"
          ],
          jawabanBenar: 0,
          penjelasan: "Undangan resmi tidak berupa file APK. APK dari luar toko resmi bisa berisi malware."
        },
        {
          id: "soal-1-4",
          level: 1,
          babRujukan: "Bab 1.3",
          pertanyaan: "Penelepon mengaku petugas bank dan meminta kode OTP \"untuk membatalkan transaksi\". Anda sebaiknya...",
          pilihan: [
            "Memberikan karena terdengar urgent",
            "Memberikan separuhnya saja",
            "Meminta mereka mengirim OTP lewat chat",
            "Menutup telepon dan menghubungi bank lewat nomor resmi"
          ],
          jawabanBenar: 3,
          penjelasan: "Bank tidak pernah meminta OTP. Verifikasi lewat kontak resmi yang Anda cari sendiri."
        },
        {
          id: "soal-1-5",
          level: 1,
          babRujukan: "Bab 1.2",
          pertanyaan: "Mana yang merupakan tanda bahaya penipuan?",
          pilihan: [
            "Pesan dari nomor kontak yang sudah lama dikenal tanpa permintaan aneh",
            "Tekanan waktu dan permintaan data rahasia",
            "Notifikasi resmi dari aplikasi yang Anda pakai",
            "Email tagihan yang Anda tunggu dari langganan"
          ],
          jawabanBenar: 1,
          penjelasan: "Desakan dan permintaan data rahasia adalah ciri umum penipuan."
        },
        {
          id: "soal-1-6",
          level: 1,
          babRujukan: "Bab 1.3",
          pertanyaan: "Anda menerima kode verifikasi WhatsApp padahal tidak meminta. Yang benar...",
          pilihan: [
            "Memberikan kode ke orang yang menghubungi",
            "Membalas pengirim kode",
            "Tidak membagikan kode dan memperkuat keamanan akun",
            "Menghapus aplikasi WhatsApp"
          ],
          jawabanBenar: 2,
          penjelasan: "Kode tak diminta menandakan ada yang mencoba masuk. Jangan dibagikan."
        },
        {
          id: "soal-1-7",
          level: 1,
          babRujukan: "Bab 1.4",
          pertanyaan: "Password yang paling kuat di antara berikut adalah...",
          pilihan: [
            "kopi-hujan-sepeda-biru-92",
            "12345678",
            "namaku2005",
            "password"
          ],
          jawabanBenar: 0,
          penjelasan: "Frasa panjang dan tidak umum jauh lebih sulit ditebak."
        },
        {
          id: "soal-1-8",
          level: 1,
          babRujukan: "Bab 1.4",
          pertanyaan: "Mengapa tidak boleh memakai password yang sama di semua akun?",
          pilihan: [
            "Karena password harus berganti tiap jam",
            "Karena akan lambat",
            "Karena tidak diizinkan aplikasi",
            "Jika satu akun bocor, akun lain ikut dapat dibobol"
          ],
          jawabanBenar: 3,
          penjelasan: "Penyerang mencoba password bocor di banyak layanan."
        },
        {
          id: "soal-1-9",
          level: 1,
          babRujukan: "Bab 1.2",
          pertanyaan: "Pesan: \"Paket Anda tertahan, bayar biaya Rp5.000 lewat link ini.\" Anda tidak merasa memesan. Anda sebaiknya...",
          pilihan: [
            "Klik link lalu bayar karena murah",
            "Mengabaikan dan cek langsung di aplikasi resmi ekspedisi atau toko",
            "Mengirim data kartu agar cepat selesai",
            "Membalas minta penjelasan lewat link"
          ],
          jawabanBenar: 1,
          penjelasan: "Link di pesan tak dikenal bisa mengarah ke situs palsu. Cek lewat aplikasi resmi."
        },
        {
          id: "soal-1-10",
          level: 1,
          babRujukan: "Bab 1.3",
          pertanyaan: "Data kartu yang tidak boleh diberikan ke siapa pun adalah...",
          pilihan: [
            "Nama bank penerbit saja",
            "Logo kartu",
            "CVV dan data kartu lengkap",
            "Jenis kartu (debit/kredit)"
          ],
          jawabanBenar: 2,
          penjelasan: "CVV dan data lengkap kartu dapat dipakai bertransaksi."
        },
        {
          id: "soal-1-11",
          level: 1,
          babRujukan: "Bab 1.4",
          pertanyaan: "Aplikasi sebaiknya dipasang dari...",
          pilihan: [
            "Toko resmi (Play Store/App Store)",
            "Link dari grup chat",
            "Situs tidak dikenal yang menjanjikan versi gratis",
            "File kiriman orang asing"
          ],
          jawabanBenar: 0,
          penjelasan: "Toko resmi menyaring aplikasi berbahaya, meski tidak menjamin 100%."
        },
        {
          id: "soal-1-12",
          level: 1,
          babRujukan: "Bab 1.2",
          pertanyaan: "Pesan \"Ini nomor baru saya, tolong transfer dulu, nanti kuganti\" dari nomor tak dikenal. Langkah paling tepat?",
          pilihan: [
            "Langsung transfer karena kasihan",
            "Transfer sebagian",
            "Minta foto selfie lalu transfer",
            "Hubungi orang tersebut lewat nomor lama atau telepon langsung untuk memastikan"
          ],
          jawabanBenar: 3,
          penjelasan: "Konfirmasi lewat saluran lain sebelum mengirim uang."
        },
        {
          id: "soal-1-13",
          level: 1,
          babRujukan: "Bab 1.1",
          pertanyaan: "Apa yang dimaksud scam?",
          pilihan: [
            "Kerusakan komputer",
            "Penipuan yang membujuk korban menyerahkan uang atau data",
            "Pembaruan aplikasi",
            "Jenis antivirus"
          ],
          jawabanBenar: 1,
          penjelasan: "Scam bergantung pada bujukan dan manipulasi korban."
        },
        {
          id: "soal-1-14",
          level: 1,
          babRujukan: "Bab 1.4",
          pertanyaan: "Panjang minimal password yang disarankan adalah sekitar...",
          pilihan: [
            "4 karakter",
            "6 karakter",
            "12 karakter atau lebih",
            "3 karakter"
          ],
          jawabanBenar: 2,
          penjelasan: "Semakin panjang, semakin sulit ditebak."
        },
        {
          id: "soal-1-15",
          level: 1,
          babRujukan: "Bab 1.2",
          pertanyaan: "Lowongan kerja yang meminta setoran modal dengan janji komisi besar kemungkinan...",
          pilihan: [
            "Penipuan",
            "Program resmi pemerintah",
            "Pelatihan gratis",
            "Magang bergaji"
          ],
          jawabanBenar: 0,
          penjelasan: "Pekerjaan sah tidak meminta Anda menyetor modal untuk \"membuka tugas\"."
        },
        {
          id: "soal-1-16",
          level: 1,
          babRujukan: "Bab 1.3",
          pertanyaan: "Siapa yang boleh mengetahui PIN mobile banking Anda?",
          pilihan: [
            "Petugas bank",
            "Customer service",
            "Keluarga dekat",
            "Hanya Anda sendiri"
          ],
          jawabanBenar: 3,
          penjelasan: "PIN bersifat rahasia dan tidak diminta oleh pihak resmi."
        },
        {
          id: "soal-1-17",
          level: 1,
          babRujukan: "Bab 1.2",
          pertanyaan: "Aplikasi pinjol meminta akses kontak dan galeri. Risikonya...",
          pilihan: [
            "Tidak ada risiko",
            "Data dapat disalahgunakan untuk teror dan penagihan",
            "Ponsel jadi lebih cepat",
            "Pinjaman otomatis lunas"
          ],
          jawabanBenar: 1,
          penjelasan: "Pinjol ilegal sering menyalahgunakan data kontak dan galeri."
        },
        {
          id: "soal-1-18",
          level: 1,
          babRujukan: "Bab 1.4",
          pertanyaan: "Mana yang BUKAN kebiasaan keamanan yang baik?",
          pilihan: [
            "Mengunci layar ponsel",
            "Memperbarui aplikasi",
            "Menyimpan password di kertas yang ditempel di layar laptop",
            "Memakai password berbeda di tiap akun"
          ],
          jawabanBenar: 2,
          penjelasan: "Password yang terlihat orang lain mudah disalahgunakan."
        },
        {
          id: "soal-1-19",
          level: 1,
          babRujukan: "Bab 1.2",
          pertanyaan: "Pesan \"Akun Anda akan diblokir 1 jam lagi, klik sekarang!\" menggunakan taktik...",
          pilihan: [
            "Desakan waktu untuk membuat panik",
            "Pengumuman resmi",
            "Edukasi pengguna",
            "Promosi biasa"
          ],
          jawabanBenar: 0,
          penjelasan: "Rasa panik membuat korban tidak sempat berpikir."
        },
        {
          id: "soal-1-20",
          level: 1,
          babRujukan: "Bab 1.1",
          pertanyaan: "Hacking adalah...",
          pilihan: [
            "Membeli barang online",
            "Mengganti wallpaper",
            "Mengunduh aplikasi resmi",
            "Mengakses akun atau perangkat tanpa izin"
          ],
          jawabanBenar: 3,
          penjelasan: "Peretasan berarti akses tanpa izin pemilik."
        }
      ]
    },
    {
      id: 2,
      badge: "Level 2",
      nama: "Menengah",
      judul: "Proteksi Lanjutan, Cek Tautan & Privasi",
      tujuan: "Pengguna mampu memperkuat akun dengan lapisan keamanan tambahan, memeriksa keaslian link, dan menjaga privasi saat online.",
      warna: "var(--lvl-2)",
      warnaBg: "var(--lvl-2-bg)",
      babs: [
        {
          id: "2.1",
          nomor: "Bab 2.1",
          judul: "Autentikasi Dua Faktor (2FA) dan Passkey",
          ringkasan: "Mengamankan akun dengan lapisan kedua agar password bocor saja tidak cukup untuk membobol.",
          waktuBaca: "4-5 menit",
          sections: [
            {
              tipe: "paragraf",
              subjudul: "Apa itu 2FA?",
              konten: "Lapisan keamanan kedua selain password. Meski password Anda bocor, penyerang tetap butuh \"faktor kedua\" untuk masuk."
            },
            {
              tipe: "daftar",
              subjudul: "Faktor autentikasi ada tiga jenis:",
              items: [
                "<strong>Sesuatu yang Anda tahu:</strong> password, PIN",
                "<strong>Sesuatu yang Anda miliki:</strong> ponsel, kunci keamanan (security key)",
                "<strong>Sesuatu yang melekat pada Anda:</strong> sidik jari, wajah"
              ]
            },
            {
              tipe: "daftar-nomor",
              subjudul: "Jenis 2FA, dari yang kurang sampai paling kuat:",
              items: [
                "<strong>Kode lewat SMS:</strong> Lebih baik daripada tanpa 2FA, tetapi rentan terhadap pengalihan nomor (SIM swap) dan malware pembaca SMS.",
                "<strong>Aplikasi autentikator (Google Authenticator, Microsoft Authenticator, dan sejenisnya):</strong> Kode dibuat di perangkat dan berganti tiap 30 detik.",
                "<strong>Kunci keamanan fisik dan passkey:</strong> Tahan terhadap phishing karena tidak ada kode yang bisa \"dibacakan\" ke penipu."
              ]
            },
            {
              tipe: "daftar",
              subjudul: "Praktik penting:",
              items: [
                "Aktifkan 2FA lebih dulu pada email utama, perbankan, e-wallet, dan media sosial. Email adalah \"kunci induk\" karena dipakai untuk reset password akun lain.",
                "Simpan kode cadangan (backup codes) di tempat aman, bukan di galeri ponsel.",
                "Waspada jika ada notifikasi persetujuan login yang tidak Anda lakukan. Tolak, lalu ganti password."
              ]
            }
          ],
          kesimpulan: "2FA membuat password yang bocor saja tidak cukup untuk membobol akun. Pilih aplikasi autentikator atau passkey bila tersedia."
        },
        {
          id: "2.2",
          nomor: "Bab 2.2",
          judul: "Password Manager dan Cek Kebocoran Data",
          ringkasan: "Mengelola puluhan password unik dengan brankas terenkripsi dan mengecek kebocoran data.",
          waktuBaca: "4-5 menit",
          sections: [
            {
              tipe: "paragraf",
              subjudul: "Masalahnya:",
              konten: "Punya puluhan akun dengan password unik dan panjang hampir mustahil dihafal semua."
            },
            {
              tipe: "paragraf",
              subjudul: "Solusinya: Password Manager",
              konten: "Aplikasi yang menyimpan semua password dalam brankas terenkripsi. Anda cukup mengingat satu master password yang sangat kuat (frasa panjang)."
            },
            {
              tipe: "daftar",
              subjudul: "Fungsinya:",
              items: [
                "Membuat password acak yang kuat",
                "Mengisi otomatis hanya pada situs yang benar, sehingga membantu menolak situs phishing",
                "Menandai password yang lemah, dipakai ulang, atau bocor"
              ]
            },
            {
              tipe: "callout",
              calloutType: "tips",
              judul: "Tips memilih:",
              konten: "Pakai layanan yang sudah dikenal luas dan terus diperbarui, serta aktifkan 2FA pada akun password manager itu sendiri. Jangan membagikan master password kepada siapa pun."
            },
            {
              tipe: "daftar-nomor",
              subjudul: "Cek kebocoran data (Have I Been Pwned):",
              kontenSebelum: "Data Anda mungkin sudah bocor dari layanan lain. Situs seperti Have I Been Pwned (haveibeenpwned.com) memungkinkan Anda memeriksa apakah email Anda pernah muncul dalam kebocoran. Jika ya:",
              items: [
                "Ganti password akun yang terdampak, dan akun lain yang memakai password sama.",
                "Aktifkan 2FA.",
                "Waspadai email atau telepon yang mengutip data Anda, karena penipu sering memanfaatkan data bocor agar terlihat meyakinkan."
              ]
            }
          ],
          kesimpulan: "Password manager memungkinkan password unik di setiap akun tanpa harus menghafal semuanya."
        },
        {
          id: "2.3",
          nomor: "Bab 2.3",
          judul: "Memeriksa Link, Situs, dan QR, serta Aman di WiFi Publik",
          ringkasan: "Cara membaca domain sebenarnya, jebakan gembok HTTPS, bahaya quishing, dan proteksi di jaringan terbuka.",
          waktuBaca: "4-5 menit",
          sections: [
            {
              tipe: "paragraf",
              subjudul: "Cara membaca alamat situs (URL)",
              konten: "Yang menentukan pemilik situs adalah domain utama, yaitu bagian tepat sebelum akhiran seperti .co.id atau .com."
            },
            {
              tipe: "daftar",
              subjudul: "Perbandingan domain:",
              items: [
                "<code>bank-contoh.co.id</code> dan <code>login.bank-contoh.co.id</code>: domain utama tetap <code>bank-contoh.co.id</code>.",
                "<code>bank-contoh.co.id.verifikasi-akun.com</code>: domain utama sebenarnya <code>verifikasi-akun.com</code>, jadi ini palsu.",
                "Waspadai salah ketik yang disengaja, misalnya huruf \"l\" diganti angka \"1\", atau tambahan tanda hubung."
              ]
            },
            {
              tipe: "callout",
              calloutType: "bahaya",
              judul: "Gembok HTTPS tidak berarti aman!",
              konten: "Gembok hanya menandakan koneksi terenkripsi. Situs phishing pun bisa memakai HTTPS. Periksa domainnya, bukan hanya gembok."
            },
            {
              tipe: "paragraf",
              subjudul: "Link pendek & QR Code Palsu (Quishing)",
              konten: "Link pendek (bit.ly dan sejenisnya) menyembunyikan tujuan sebenarnya. Jika dari sumber tak dikenal, jangan dibuka. Pada QR code palsu (\"quishing\"), penipu menempel QR di tempat umum atau mengirimnya lewat pesan. Pindai hanya QR dari sumber yang Anda percayai, dan periksa tujuan sebelum membuka atau membayar."
            },
            {
              tipe: "daftar",
              subjudul: "Aman di WiFi publik:",
              items: [
                "Anggap jaringan terbuka tidak aman. Penyerang dapat membuat WiFi kembaran (evil twin) dengan nama mirip.",
                "Hindari membuka mobile banking atau memasukkan data sensitif lewat WiFi publik. Gunakan data seluler untuk transaksi penting.",
                "Jika terpaksa, gunakan VPN tepercaya dan pastikan situs memakai HTTPS.",
                "Matikan fitur sambung otomatis ke jaringan terbuka dan fitur berbagi file."
              ]
            }
          ],
          kesimpulan: "Periksa domain utama, jangan percaya gembok semata, dan hindari transaksi sensitif di WiFi publik."
        },
        {
          id: "2.4",
          nomor: "Bab 2.4",
          judul: "Privasi Media Sosial, Jejak Digital, dan Izin Aplikasi",
          ringkasan: "Mencegah oversharing data berharga, bahaya kuis viral, dan mengatur izin aplikasi ponsel.",
          waktuBaca: "3-5 menit",
          sections: [
            {
              tipe: "paragraf",
              subjudul: "Oversharing memberi bahan bagi penipu",
              konten: "Informasi yang tampak sepele bisa dirangkai menjadi profil lengkap oleh penjahat siber:"
            },
            {
              tipe: "daftar",
              subjudul: "Data yang sering bocor tanpa sadar:",
              items: [
                "Foto KTP, SIM, kartu keluarga, boarding pass, tiket, atau paket dengan alamat terlihat",
                "Tanggal lahir lengkap, nama ibu kandung, nama sekolah",
                "Lokasi rumah dan kebiasaan harian, atau pengumuman \"sedang liburan, rumah kosong\""
              ]
            },
            {
              tipe: "callout",
              calloutType: "perhatian",
              judul: "Jangan menjawab \"kuis viral\"",
              konten: "Kuis seperti \"nama hewan peliharaan pertama\" atau \"jalan tempat tinggal masa kecil\" sering sama dengan pertanyaan keamanan yang dipakai untuk reset akun."
            },
            {
              tipe: "daftar",
              subjudul: "Atur privasi:",
              items: [
                "Batasi siapa yang dapat melihat postingan, daftar teman, dan nomor HP.",
                "Matikan geotag (lokasi otomatis) pada foto.",
                "Tinjau secara berkala aplikasi pihak ketiga yang tersambung ke akun Anda dan cabut yang tidak dipakai.",
                "Hati-hati menerima permintaan pertemanan dari akun yang tidak dikenal atau profil yang tampak \"terlalu sempurna\"."
              ]
            },
            {
              tipe: "paragraf",
              subjudul: "Izin aplikasi:",
              konten: "Berikan izin seperlunya. Aplikasi senter yang meminta akses kontak, SMS, dan mikrofon patut dicurigai. Pilih \"hanya saat aplikasi digunakan\" untuk lokasi, dan tinjau izin di pengaturan ponsel secara berkala."
            }
          ],
          kesimpulan: "Semakin sedikit informasi yang terbuka, semakin sulit penipu membuat skenario yang meyakinkan."
        }
      ],
      bankSoal: [
        {
          id: "soal-2-1",
          level: 2,
          babRujukan: "Bab 2.1",
          pertanyaan: "Tujuan utama 2FA adalah...",
          pilihan: [
            "Mempercepat login",
            "Menambah lapisan keamanan selain password",
            "Menghapus kebutuhan password",
            "Menghemat kuota"
          ],
          jawabanBenar: 1,
          penjelasan: "Dengan 2FA, password yang bocor saja tidak cukup untuk masuk."
        },
        {
          id: "soal-2-2",
          level: 2,
          babRujukan: "Bab 2.1",
          pertanyaan: "Manakah 2FA yang umumnya lebih aman daripada kode SMS?",
          pilihan: [
            "Pertanyaan keamanan nama hewan peliharaan",
            "Kode yang dikirim ke email publik bersama",
            "Foto selfie yang dikirim lewat chat",
            "Aplikasi autentikator atau passkey"
          ],
          jawabanBenar: 3,
          penjelasan: "SMS rentan SIM swap dan malware. Autentikator dan passkey lebih tahan serangan."
        },
        {
          id: "soal-2-3",
          level: 2,
          babRujukan: "Bab 2.1",
          pertanyaan: "Akun mana yang sebaiknya diamankan dengan 2FA paling dahulu?",
          pilihan: [
            "Email utama",
            "Akun game yang jarang dipakai",
            "Akun belanja lama",
            "Forum yang tidak aktif"
          ],
          jawabanBenar: 0,
          penjelasan: "Email dipakai untuk reset password akun lain, sehingga menjadi kunci induk."
        },
        {
          id: "soal-2-4",
          level: 2,
          babRujukan: "Bab 2.1",
          pertanyaan: "Anda menerima permintaan persetujuan login yang tidak Anda lakukan. Tindakan terbaik...",
          pilihan: [
            "Menyetujui agar notifikasi berhenti",
            "Mengabaikan tanpa tindakan lanjutan",
            "Menolak dan segera mengganti password",
            "Membagikan kode ke teman"
          ],
          jawabanBenar: 2,
          penjelasan: "Itu tanda seseorang mengetahui password Anda. Tolak dan ganti password."
        },
        {
          id: "soal-2-5",
          level: 2,
          babRujukan: "Bab 2.1",
          pertanyaan: "Di mana sebaiknya menyimpan kode cadangan (backup codes) 2FA?",
          pilihan: [
            "Di galeri ponsel yang disinkronkan publik",
            "Di status media sosial",
            "Di grup chat keluarga",
            "Di tempat aman, misalnya di password manager atau dicetak dan disimpan"
          ],
          jawabanBenar: 3,
          penjelasan: "Kode cadangan setara kunci akun, jadi harus tersimpan aman."
        },
        {
          id: "soal-2-6",
          level: 2,
          babRujukan: "Bab 2.2",
          pertanyaan: "Apa fungsi master password pada password manager?",
          pilihan: [
            "Hanya untuk mengganti tema",
            "Membuka brankas yang berisi semua password lain",
            "Membagikan password ke teman",
            "Menghapus akun lama"
          ],
          jawabanBenar: 1,
          penjelasan: "Master password adalah satu-satunya yang perlu diingat dan harus sangat kuat."
        },
        {
          id: "soal-2-7",
          level: 2,
          babRujukan: "Bab 2.2",
          pertanyaan: "Manfaat password manager dalam melawan phishing adalah...",
          pilihan: [
            "Mengisi otomatis hanya pada situs yang benar, sehingga situs palsu tidak terisi",
            "Mempercepat internet",
            "Memblokir semua iklan",
            "Menghapus virus otomatis"
          ],
          jawabanBenar: 0,
          penjelasan: "Pengisian otomatis mencocokkan domain, sehingga membantu menyadarkan Anda pada situs palsu."
        },
        {
          id: "soal-2-8",
          level: 2,
          babRujukan: "Bab 2.2",
          pertanyaan: "Email Anda ditemukan dalam kebocoran data. Langkah yang tepat...",
          pilihan: [
            "Tidak melakukan apa pun",
            "Menghapus email dan membuat yang baru tanpa mengganti password akun lain",
            "Mengganti password akun terkait, mengaktifkan 2FA, dan waspadai pesan penipuan",
            "Membagikan temuan ke media sosial beserta datanya"
          ],
          jawabanBenar: 2,
          penjelasan: "Ganti password, aktifkan 2FA, dan waspadai penipuan yang memakai data bocor."
        },
        {
          id: "soal-2-9",
          level: 2,
          babRujukan: "Bab 2.3",
          pertanyaan: "Domain utama sebenarnya dari bank-contoh.co.id.verifikasi-akun.com adalah...",
          pilihan: [
            "bank-contoh.co.id",
            "verifikasi-akun.com",
            "co.id",
            "bank-contoh"
          ],
          jawabanBenar: 1,
          penjelasan: "Domain utama adalah bagian tepat sebelum akhiran terakhir. Bagian di depannya hanya subdomain."
        },
        {
          id: "soal-2-10",
          level: 2,
          babRujukan: "Bab 2.3",
          pertanyaan: "Situs memiliki ikon gembok HTTPS. Artinya...",
          pilihan: [
            "Situs pasti resmi dan aman",
            "Situs bebas virus",
            "Pemiliknya terverifikasi pemerintah",
            "Koneksi terenkripsi, tetapi situsnya tetap bisa palsu"
          ],
          jawabanBenar: 3,
          penjelasan: "Situs phishing pun bisa memakai HTTPS. Periksa domainnya."
        },
        {
          id: "soal-2-11",
          level: 2,
          babRujukan: "Bab 2.3",
          pertanyaan: "Cara paling aman memakai mobile banking saat di kafe adalah...",
          pilihan: [
            "Memakai data seluler, bukan WiFi publik",
            "Memakai WiFi publik tanpa kata sandi",
            "Terhubung otomatis ke semua jaringan terbuka",
            "Menyalakan berbagi file"
          ],
          jawabanBenar: 0,
          penjelasan: "Data seluler lebih sulit disadap dibanding WiFi publik terbuka."
        },
        {
          id: "soal-2-12",
          level: 2,
          babRujukan: "Bab 2.3",
          pertanyaan: "Penipu membuat WiFi bernama mirip kafe untuk mencuri data pengguna. Teknik ini disebut...",
          pilihan: [
            "Evil twin (WiFi kembaran)",
            "Firewall",
            "Backup",
            "Enkripsi"
          ],
          jawabanBenar: 0,
          penjelasan: "Evil twin meniru nama jaringan asli agar korban terhubung."
        },
        {
          id: "soal-2-13",
          level: 2,
          babRujukan: "Bab 2.3",
          pertanyaan: "Link pendek dari pengirim tak dikenal sebaiknya...",
          pilihan: [
            "Dibuka cepat karena singkat",
            "Tidak dibuka karena tujuan sebenarnya tersembunyi",
            "Dibagikan ke teman",
            "Dibuka di banyak perangkat"
          ],
          jawabanBenar: 1,
          penjelasan: "Link pendek menyembunyikan tujuan sehingga berisiko jika dari sumber tak jelas."
        },
        {
          id: "soal-2-14",
          level: 2,
          babRujukan: "Bab 2.3",
          pertanyaan: "Anda menemukan stiker QR di meja yang menawarkan diskon besar dan mengarah ke pembayaran. Anda sebaiknya...",
          pilihan: [
            "Langsung bayar",
            "Mengirim data kartu ke nomor di stiker",
            "Menempelkan stiker yang sama di tempat lain",
            "Memastikan QR itu resmi dari pengelola sebelum dipindai atau membayar"
          ],
          jawabanBenar: 3,
          penjelasan: "QR palsu dapat diarahkan ke situs phishing atau rekening penipu."
        },
        {
          id: "soal-2-15",
          level: 2,
          babRujukan: "Bab 2.4",
          pertanyaan: "Mengapa mengunggah foto boarding pass atau tiket lengkap berisiko?",
          pilihan: [
            "Kode di dalamnya dapat dipakai untuk mengakses atau mengubah pemesanan",
            "Foto menjadi buram",
            "Penerbangan dibatalkan",
            "Kuota habis"
          ],
          jawabanBenar: 0,
          penjelasan: "Kode booking dan barcode pada tiket dapat disalahgunakan."
        },
        {
          id: "soal-2-16",
          level: 2,
          babRujukan: "Bab 2.4",
          pertanyaan: "Kuis viral di media sosial \"nama hewan peliharaan pertama Anda\" berisiko karena...",
          pilihan: [
            "Membuat akun terkunci otomatis",
            "Memakan memori ponsel",
            "Jawabannya sering sama dengan pertanyaan keamanan untuk reset akun",
            "Menaikkan tagihan internet"
          ],
          jawabanBenar: 2,
          penjelasan: "Jawaban kuis dapat dipakai penyerang menjawab pertanyaan keamanan."
        },
        {
          id: "soal-2-17",
          level: 2,
          babRujukan: "Bab 2.4",
          pertanyaan: "Fitur geotag pada foto sebaiknya...",
          pilihan: [
            "Selalu dinyalakan",
            "Dibiarkan menyebarkan lokasi rumah",
            "Dibagikan ke semua orang",
            "Dimatikan jika tidak diperlukan agar lokasi tidak terbuka"
          ],
          jawabanBenar: 3,
          penjelasan: "Geotag dapat membocorkan lokasi rumah dan kebiasaan harian."
        },
        {
          id: "soal-2-18",
          level: 2,
          babRujukan: "Bab 2.4",
          pertanyaan: "Aplikasi senter meminta izin kontak dan SMS. Sikap yang tepat...",
          pilihan: [
            "Menolak izin yang tidak relevan, atau tidak memakai aplikasi itu",
            "Menerima semua izin",
            "Memberikan izin sambil mematikan layar",
            "Membagikan izin ke teman"
          ],
          jawabanBenar: 0,
          penjelasan: "Izin harus relevan dengan fungsi aplikasi."
        },
        {
          id: "soal-2-19",
          level: 2,
          babRujukan: "Bab 2.4",
          pertanyaan: "Mana yang BUKAN praktik privasi yang baik?",
          pilihan: [
            "Membatasi siapa yang bisa melihat postingan",
            "Menerima semua permintaan pertemanan dari akun tak dikenal",
            "Mencabut aplikasi pihak ketiga yang tidak dipakai",
            "Meninjau izin aplikasi secara berkala"
          ],
          jawabanBenar: 1,
          penjelasan: "Akun tak dikenal dapat dipakai untuk mengumpulkan informasi dan menipu."
        },
        {
          id: "soal-2-20",
          level: 2,
          babRujukan: "Bab 2.1",
          pertanyaan: "SIM swap adalah...",
          pilihan: [
            "Mengganti operator demi promo",
            "Memperbarui kartu SIM rusak",
            "Pengalihan nomor Anda ke SIM milik penyerang untuk menerima SMS dan OTP Anda",
            "Mengunci SIM dengan PIN"
          ],
          jawabanBenar: 2,
          penjelasan: "SIM swap membuat penyerang menerima SMS dan OTP korban, sehingga 2FA berbasis SMS rentan."
        }
      ]
    },
    {
      id: 3,
      badge: "Level 3",
      nama: "Advanced",
      judul: "Psikologi Penipuan, Malware & Enkripsi",
      tujuan: "Pengguna memahami cara kerja manipulasi psikologis, melindungi perangkat dan data dari malware, serta menerapkan pengamanan teknis yang lebih dalam.",
      warna: "var(--lvl-3)",
      warnaBg: "var(--lvl-3-bg)",
      babs: [
        {
          id: "3.1",
          nomor: "Bab 3.1",
          judul: "Rekayasa Sosial (Social Engineering) dan Penipuan Berbasis AI",
          ringkasan: "Membedah manipulasi emosi, kloning suara AI, deepfake, dan prinsip \"Jeda dan Verifikasi\".",
          waktuBaca: "4-5 menit",
          sections: [
            {
              tipe: "paragraf",
              subjudul: "Definisi Rekayasa Sosial",
              konten: "Rekayasa sosial adalah teknik memanipulasi manusia, bukan sistem, agar menyerahkan data atau melakukan tindakan tertentu. Penipu mengeksploitasi emosi yang dapat diprediksi."
            },
            {
              tipe: "daftar",
              subjudul: "Pemicu psikologis yang sering dipakai:",
              items: [
                "<strong>Otoritas:</strong> mengaku polisi, bank, kurir, atasan, atau petugas pajak.",
                "<strong>Urgensi:</strong> \"selesaikan dalam 10 menit\".",
                "<strong>Ketakutan:</strong> ancaman pemblokiran, denda, atau kasus hukum.",
                "<strong>Keserakahan atau harapan:</strong> hadiah, investasi cepat kaya, pekerjaan mudah.",
                "<strong>Rasa percaya dan kasihan:</strong> mengaku keluarga yang kena musibah.",
                "<strong>Kelangkaan:</strong> \"hanya untuk 5 orang pertama\"."
              ]
            },
            {
              tipe: "daftar",
              subjudul: "Variasi serangan:",
              items: [
                "<strong>Phishing:</strong> lewat email massal.",
                "<strong>Spear phishing:</strong> ditargetkan, memakai nama, jabatan, atau data pribadi korban.",
                "<strong>Smishing:</strong> lewat SMS atau chat. <strong>Vishing:</strong> lewat telepon.",
                "<strong>Pretexting:</strong> membangun skenario palsu yang meyakinkan lebih dulu.",
                "<strong>Business Email Compromise (BEC):</strong> meniru atasan atau vendor agar bagian keuangan mentransfer dana ke rekening baru.",
                "<strong>Penipuan romansa dan investasi (pig butchering):</strong> membangun kedekatan berminggu-minggu lalu mengarahkan korban ke platform investasi palsu."
              ]
            },
            {
              tipe: "callout",
              calloutType: "bahaya",
              judul: "Penipuan berbantuan AI (Voice Cloning & Deepfake):",
              konten: "Suara dan wajah kini dapat ditiru (voice cloning, deepfake). Penipu dapat menelepon dengan suara mirip anggota keluarga, atau memakai video palsu. Karena itu:\n• Jangan menjadikan \"suaranya mirip\" sebagai bukti identitas.\n• Sepakati kata sandi keluarga (kode rahasia) untuk situasi darurat.\n• Verifikasi permintaan uang lewat saluran terpisah, misalnya menelepon balik ke nomor yang tersimpan.\n• Tulisan yang rapi dan tanpa salah ketik bukan lagi tanda aman, karena AI membuat pesan penipuan semakin mulus."
            },
            {
              tipe: "daftar-nomor",
              subjudul: "Pertahanan utama: jeda dan verifikasi",
              items: [
                "Berhenti saat merasa tertekan atau panik.",
                "Verifikasi lewat kanal resmi yang Anda cari sendiri.",
                "Libatkan orang lain, misalnya keluarga atau rekan, sebelum memutuskan."
              ]
            }
          ],
          kesimpulan: "Semua modus bekerja dengan memicu emosi. Jeda dan verifikasi di kanal terpisah memutus mayoritas serangan."
        },
        {
          id: "3.2",
          nomor: "Bab 3.2",
          judul: "Keamanan Perangkat, Malware, dan Cadangan Data",
          ringkasan: "Mengenal jenis malware, bahaya izin aksesibilitas Android, dan strategi backup 3-2-1.",
          waktuBaca: "4-5 menit",
          sections: [
            {
              tipe: "daftar",
              subjudul: "Jenis malware yang perlu dikenali:",
              items: [
                "<strong>Trojan/aplikasi palsu:</strong> tampak berguna, tetapi berisi kode jahat (termasuk APK palsu).",
                "<strong>Spyware dan stalkerware:</strong> mengintai aktivitas, lokasi, pesan, dan percakapan secara diam-diam.",
                "<strong>Keylogger:</strong> merekam ketikan, termasuk password.",
                "<strong>Ransomware:</strong> mengenkripsi data lalu meminta tebusan.",
                "<strong>Remote access trojan (RAT):</strong> memberi penyerang kendali jarak jauh atas perangkat."
              ]
            },
            {
              tipe: "callout",
              calloutType: "perhatian",
              judul: "Tanda perangkat mungkin terinfeksi:",
              konten: "Baterai cepat habis, panas tanpa sebab, kuota tiba-tiba boros, aplikasi asing muncul, notifikasi atau iklan aneh, SMS terkirim sendiri, atau ada permintaan izin \"Aksesibilitas\" dari aplikasi yang tidak relevan."
            },
            {
              tipe: "callout",
              calloutType: "bahaya",
              judul: "Bahaya izin Aksesibilitas dan administrator perangkat:",
              konten: "Banyak malware pada Android meminta izin ini untuk membaca layar, menyetujui transaksi, dan mencegah dicopot. Jangan beri izin tersebut pada aplikasi yang tidak jelas fungsinya."
            },
            {
              tipe: "daftar",
              subjudul: "Pertahanan perangkat:",
              items: [
                "Perbarui OS dan aplikasi secara rutin (patch keamanan menutup celah yang dieksploitasi).",
                "Gunakan perlindungan bawaan (Play Protect, Windows Security) dan aktifkan.",
                "Jangan melakukan root/jailbreak pada ponsel yang dipakai untuk keuangan.",
                "Aktifkan enkripsi penyimpanan, kunci layar yang kuat, serta fitur lacak dan hapus jarak jauh (Find My Device).",
                "Pakai akun pengguna terpisah di komputer bersama dan jangan memakai akun administrator untuk aktivitas harian.",
                "Waspadai pengisi daya atau kabel USB asing dan stasiun pengisian umum yang mencurigakan."
              ]
            },
            {
              tipe: "callout",
              calloutType: "tindakan",
              judul: "Cadangan data (backup) dengan prinsip 3-2-1:",
              konten: "<strong>3 salinan data</strong>, di <strong>2 jenis media berbeda</strong>, <strong>1 di antaranya di lokasi terpisah</strong> (misalnya penyimpanan cloud atau disk eksternal di tempat lain). Backup adalah penangkal terbaik terhadap ransomware: jangan pernah membayar tebusan sebagai langkah pertama, karena tidak ada jaminan data kembali dan Anda ditandai sebagai korban yang mau membayar."
            },
            {
              tipe: "daftar-nomor",
              subjudul: "Jika curiga perangkat terinfeksi:",
              items: [
                "Putuskan dari internet segera.",
                "Jangan login ke akun penting dari perangkat itu.",
                "Ganti password dari perangkat yang bersih.",
                "Hubungi bank bila ada akses keuangan.",
                "Lakukan pemindaian atau reset pabrik setelah mencadangkan data penting yang aman."
              ]
            }
          ],
          kesimpulan: "Perangkat yang diperbarui, dengan izin terbatas dan cadangan teratur, jauh lebih sulit dan lebih murah dipulihkan jika diserang."
        },
        {
          id: "3.3",
          nomor: "Bab 3.3",
          judul: "Enkripsi Dasar dan Komunikasi yang Aman",
          ringkasan: "Memahami enkripsi in transit, at rest, E2EE, batasan enkripsi, serta analisis header email.",
          waktuBaca: "4-5 menit",
          sections: [
            {
              tipe: "paragraf",
              subjudul: "Apa itu enkripsi?",
              konten: "Mengubah data menjadi bentuk acak yang hanya bisa dibuka dengan kunci. Tanpa kunci, data yang tercuri tidak berguna."
            },
            {
              tipe: "daftar",
              subjudul: "Di mana enkripsi bekerja:",
              items: [
                "<strong>Saat data bergerak (in transit):</strong> HTTPS melindungi data antara browser dan situs.",
                "<strong>Saat data tersimpan (at rest):</strong> enkripsi penyimpanan ponsel dan laptop (misalnya BitLocker atau FileVault) melindungi data jika perangkat hilang atau dicuri.",
                "<strong>End-to-end encryption (E2EE):</strong> hanya pengirim dan penerima yang bisa membaca pesan. Penyedia layanan pun tidak dapat membacanya. Aplikasi pesan populer memakai E2EE secara bawaan."
              ]
            },
            {
              tipe: "callout",
              calloutType: "perhatian",
              judul: "Batas enkripsi:",
              konten: "E2EE tidak melindungi dari penerima yang menyalin pesan, tangkapan layar, atau perangkat yang terinfeksi. Enkripsi juga tidak mencegah Anda ditipu oleh orang yang Anda ajak bicara."
            },
            {
              tipe: "daftar",
              subjudul: "Praktik komunikasi aman:",
              items: [
                "Kirim data sensitif lewat aplikasi ber-E2EE, bukan SMS atau email biasa.",
                "Hindari mengirim foto KTP atau dokumen penting tanpa menandai tujuannya, misalnya dengan watermark berisi \"hanya untuk keperluan X, tanggal Y\".",
                "Aktifkan fitur pesan sementara untuk percakapan sensitif bila perlu.",
                "Pasang kunci (PIN atau biometrik) pada aplikasi pesan, dan amankan cadangan chat dengan enkripsi.",
                "Berhati-hati dengan tautan perangkat tertaut (Linked Devices): tinjau secara berkala dan keluarkan perangkat yang tidak dikenal."
              ]
            },
            {
              tipe: "daftar",
              subjudul: "Mengenali email phishing tingkat lanjut:",
              items: [
                "Periksa alamat pengirim sebenarnya, bukan hanya nama tampilan.",
                "Arahkan kursor ke link untuk melihat tujuannya sebelum mengklik.",
                "Waspada lampiran seperti <code>.zip</code>, <code>.exe</code>, <code>.js</code>, atau dokumen yang meminta \"Enable Macros/Aktifkan konten\".",
                "Pesan dari \"rekan\" dengan permintaan mendadak soal pembayaran atau perubahan rekening perlu dikonfirmasi lewat telepon."
              ]
            }
          ],
          kesimpulan: "Enkripsi melindungi data dari penyadapan dan pencurian perangkat, tetapi tidak menggantikan kewaspadaan terhadap siapa yang Anda ajak bicara."
        },
        {
          id: "3.4",
          nomor: "Bab 3.4",
          judul: "Mengamankan Keuangan dan Mengurangi Jejak Data",
          ringkasan: "Strategi isolasi rekening, virtual card, data hygiene, dan mengecek legalitas rekening serta investasi.",
          waktuBaca: "4-5 menit",
          sections: [
            {
              tipe: "daftar",
              subjudul: "Memperkuat keamanan rekening dan e-wallet:",
              items: [
                "Aktifkan notifikasi transaksi (SMS/push) agar setiap mutasi langsung terlihat.",
                "Atur batas transaksi harian sesuai kebutuhan. Batas rendah memperkecil kerugian jika diretas.",
                "Pisahkan rekening: satu untuk tabungan utama, satu untuk transaksi harian dengan saldo secukupnya.",
                "Gunakan fitur kunci kartu atau pembatasan transaksi online/luar negeri bila bank menyediakan.",
                "Gunakan kartu virtual atau fitur pembayaran sekali pakai untuk belanja daring bila tersedia.",
                "Jangan menyimpan data kartu di banyak situs belanja."
              ]
            },
            {
              tipe: "daftar",
              subjudul: "Mengurangi jejak data (data hygiene):",
              items: [
                "Hapus akun lama yang tidak terpakai. Data di akun terbengkalai tetap bisa bocor.",
                "Gunakan alamat email alias atau terpisah untuk pendaftaran layanan yang tidak penting, supaya email utama tidak menyebar ke banyak tempat.",
                "Berikan data seperlunya saat mendaftar. Jika formulir meminta data yang tidak relevan, pertimbangkan tidak melanjutkan.",
                "Waspada pada SMS/WA spam dan telepon dari pihak yang tahu nama Anda. Itu bisa berasal dari data bocor atau dijual.",
                "Saat menjual atau menyerahkan perangkat, reset pabrik setelah keluar dari semua akun."
              ]
            },
            {
              tipe: "callout",
              calloutType: "bahaya",
              judul: "Ciri investasi atau pinjaman ilegal:",
              konten: "Menjanjikan untung tinggi dan pasti, tidak punya izin jelas, berasal dari kenalan baru di media sosial, dan meminta Anda mengajak orang lain. Cek status izin lewat kanal resmi OJK sebelum menyetor dana."
            },
            {
              tipe: "daftar",
              subjudul: "Pelaporan dan pengecekan resmi:",
              items: [
                "Cek rekening atau nomor yang dicurigai lewat layanan resmi pemerintah seperti <code>cekrekening.id</code> dan <code>aduannomor.id</code> (Komdigi).",
                "Laporkan penipuan keuangan lewat bank Anda dan kanal OJK (Indonesia Anti-Scam Centre/IASC; kontak OJK 157)."
              ]
            }
          ],
          kesimpulan: "Batasi kerugian dengan pengaturan rekening yang bijak, dan kurangi sebaran data supaya penipu punya sedikit bahan."
        }
      ],
      bankSoal: [
        {
          id: "soal-3-1",
          level: 3,
          babRujukan: "Bab 3.1",
          pertanyaan: "Teknik penipuan yang memanfaatkan emosi dan kepercayaan manusia, bukan celah sistem, disebut...",
          pilihan: [
            "Brute force",
            "Patch management",
            "Port scanning",
            "Rekayasa sosial (social engineering)"
          ],
          jawabanBenar: 3,
          penjelasan: "Rekayasa sosial menyerang manusia melalui manipulasi psikologis."
        },
        {
          id: "soal-3-2",
          level: 3,
          babRujukan: "Bab 3.1",
          pertanyaan: "Phishing yang ditargetkan dengan memakai nama dan jabatan korban disebut...",
          pilihan: [
            "Spear phishing",
            "Spam biasa",
            "Adware",
            "Defragmentasi"
          ],
          jawabanBenar: 0,
          penjelasan: "Spear phishing dipersonalisasi agar lebih meyakinkan."
        },
        {
          id: "soal-3-3",
          level: 3,
          babRujukan: "Bab 3.1",
          pertanyaan: "Anda ditelepon seseorang dengan suara mirip anak Anda yang meminta transfer darurat. Langkah paling tepat...",
          pilihan: [
            "Langsung transfer karena suaranya mirip",
            "Meminta penjelasan panjang lewat telepon yang sama",
            "Menutup telepon, menghubungi anak lewat nomor tersimpan atau kata sandi keluarga, lalu verifikasi",
            "Mengirim data rekening kepada penelepon"
          ],
          jawabanBenar: 2,
          penjelasan: "Suara dapat dipalsukan dengan AI. Verifikasi lewat saluran terpisah dan kata sandi keluarga."
        },
        {
          id: "soal-3-4",
          level: 3,
          babRujukan: "Bab 3.1",
          pertanyaan: "Keuangan menerima email dari \"direktur\" yang meminta pembayaran ke rekening baru hari ini. Tindakan terbaik...",
          pilihan: [
            "Membayar agar tidak dimarahi",
            "Memverifikasi lewat telepon atau jalur resmi lain sebelum membayar",
            "Membalas email dan meminta konfirmasi lewat email yang sama",
            "Meneruskan ke semua rekan"
          ],
          jawabanBenar: 1,
          penjelasan: "Ini pola Business Email Compromise. Konfirmasi harus lewat kanal terpisah."
        },
        {
          id: "soal-3-5",
          level: 3,
          babRujukan: "Bab 3.1",
          pertanyaan: "Teknik \"jeda dan verifikasi\" paling efektif karena...",
          pilihan: [
            "Memutus tekanan emosional dan urgensi yang menjadi senjata penipu",
            "Membuat penipu lelah",
            "Mempercepat transaksi",
            "Menghapus pesan otomatis"
          ],
          jawabanBenar: 0,
          penjelasan: "Penipu butuh korban bertindak cepat tanpa berpikir."
        },
        {
          id: "soal-3-6",
          level: 3,
          babRujukan: "Bab 3.2",
          pertanyaan: "Malware yang mengenkripsi file lalu meminta tebusan disebut...",
          pilihan: [
            "Keylogger",
            "Adware",
            "Spyware",
            "Ransomware"
          ],
          jawabanBenar: 3,
          penjelasan: "Ransomware mengunci data korban demi tebusan."
        },
        {
          id: "soal-3-7",
          level: 3,
          babRujukan: "Bab 3.2",
          pertanyaan: "Penangkal terbaik terhadap kerugian akibat ransomware adalah...",
          pilihan: [
            "Membayar tebusan secepatnya",
            "Mematikan antivirus",
            "Memiliki cadangan data (backup) yang terpisah dan teratur",
            "Memakai satu salinan data saja"
          ],
          jawabanBenar: 2,
          penjelasan: "Backup memungkinkan pemulihan tanpa membayar penjahat."
        },
        {
          id: "soal-3-8",
          level: 3,
          babRujukan: "Bab 3.2",
          pertanyaan: "Prinsip cadangan 3-2-1 berarti...",
          pilihan: [
            "3 password, 2 akun, 1 perangkat",
            "3 salinan data, 2 jenis media, 1 salinan di lokasi terpisah",
            "3 antivirus, 2 firewall, 1 VPN",
            "3 hari, 2 jam, 1 menit"
          ],
          jawabanBenar: 1,
          penjelasan: "Prinsip ini memperkecil risiko kehilangan data."
        },
        {
          id: "soal-3-9",
          level: 3,
          babRujukan: "Bab 3.2",
          pertanyaan: "Aplikasi tidak jelas meminta izin \"Aksesibilitas\" pada Android. Sikap yang tepat...",
          pilihan: [
            "Menyetujui agar aplikasi berjalan",
            "Menyetujui lalu menghapus nanti",
            "Memberikan ke semua aplikasi",
            "Menolak dan mencopot aplikasi jika fungsinya tidak membutuhkan izin itu"
          ],
          jawabanBenar: 3,
          penjelasan: "Izin Aksesibilitas sering dipakai malware untuk membaca layar dan menyetujui transaksi."
        },
        {
          id: "soal-3-10",
          level: 3,
          babRujukan: "Bab 3.2",
          pertanyaan: "Mengapa pembaruan sistem dan aplikasi penting?",
          pilihan: [
            "Menutup celah keamanan yang bisa dieksploitasi",
            "Hanya mengubah tampilan",
            "Menambah kuota",
            "Menghapus semua data"
          ],
          jawabanBenar: 0,
          penjelasan: "Patch keamanan menutup kerentanan yang diketahui."
        },
        {
          id: "soal-3-11",
          level: 3,
          babRujukan: "Bab 3.2",
          pertanyaan: "Ponsel Anda tiba-tiba boros baterai, panas, dan ada aplikasi asing yang tidak Anda pasang. Langkah awal yang tepat...",
          pilihan: [
            "Mengabaikan karena hal biasa",
            "Login ke mobile banking untuk memeriksa saldo",
            "Memutuskan dari internet, mengamankan akun dari perangkat bersih, lalu memeriksa atau mereset",
            "Memasang lebih banyak aplikasi pembersih dari sumber tak dikenal"
          ],
          jawabanBenar: 2,
          penjelasan: "Hindari memakai perangkat yang mungkin terinfeksi untuk mengakses akun penting."
        },
        {
          id: "soal-3-12",
          level: 3,
          babRujukan: "Bab 3.3",
          pertanyaan: "Pada end-to-end encryption (E2EE), siapa yang dapat membaca isi pesan?",
          pilihan: [
            "Penyedia layanan dan pemerintah",
            "Hanya pengirim dan penerima",
            "Semua orang di internet",
            "Operator seluler"
          ],
          jawabanBenar: 1,
          penjelasan: "E2EE membuat hanya ujung percakapan yang memegang kunci."
        },
        {
          id: "soal-3-13",
          level: 3,
          babRujukan: "Bab 3.3",
          pertanyaan: "Enkripsi penyimpanan ponsel dan laptop melindungi Anda dari risiko...",
          pilihan: [
            "Data terbaca jika perangkat hilang atau dicuri",
            "Baterai habis",
            "Layar retak",
            "Koneksi lambat"
          ],
          jawabanBenar: 0,
          penjelasan: "Enkripsi at rest menjaga data tetap tidak terbaca tanpa kunci."
        },
        {
          id: "soal-3-14",
          level: 3,
          babRujukan: "Bab 3.3",
          pertanyaan: "Manakah yang TIDAK dilindungi oleh E2EE?",
          pilihan: [
            "Pesan yang dikirim",
            "Pesan yang sedang dalam perjalanan",
            "Isi pesan dari penyedia layanan",
            "Pesan yang disalin atau di-screenshot oleh penerima"
          ],
          jawabanBenar: 3,
          penjelasan: "Enkripsi tidak mencegah penerima menyebarkan pesan atau perangkat terinfeksi membaca layar."
        },
        {
          id: "soal-3-15",
          level: 3,
          babRujukan: "Bab 3.3",
          pertanyaan: "Lampiran email meminta \"Aktifkan Macros\" untuk melihat dokumen. Tindakan terbaik...",
          pilihan: [
            "Mengaktifkan agar dokumen terbuka",
            "Tidak mengaktifkan, lalu verifikasi pengirim lewat jalur lain",
            "Meneruskan ke rekan",
            "Mengaktifkan di semua perangkat"
          ],
          jawabanBenar: 1,
          penjelasan: "Macro adalah jalur umum penyebaran malware lewat dokumen."
        },
        {
          id: "soal-3-16",
          level: 3,
          babRujukan: "Bab 3.3",
          pertanyaan: "Untuk memeriksa pengirim email dengan benar, Anda sebaiknya...",
          pilihan: [
            "Melihat logo di email saja",
            "Percaya nama tampilan pengirim",
            "Memeriksa alamat email asli pengirim dan tujuan link sebelum mengklik",
            "Membalas lalu melihat tanggapan"
          ],
          jawabanBenar: 2,
          penjelasan: "Nama tampilan mudah dipalsukan. Periksa alamat sebenarnya dan tujuan link."
        },
        {
          id: "soal-3-17",
          level: 3,
          babRujukan: "Bab 3.4",
          pertanyaan: "Mengapa menetapkan batas transaksi harian pada rekening berguna?",
          pilihan: [
            "Membatasi kerugian jika akun berhasil dibobol",
            "Menambah bunga tabungan",
            "Menghilangkan kebutuhan password",
            "Mempercepat transfer"
          ],
          jawabanBenar: 0,
          penjelasan: "Batas rendah membatasi jumlah uang yang bisa dikuras penyerang."
        },
        {
          id: "soal-3-18",
          level: 3,
          babRujukan: "Bab 3.4",
          pertanyaan: "Cara menjaga email utama tetap bersih dari penyebaran data adalah...",
          pilihan: [
            "Mendaftar ke semua layanan dengan email utama",
            "Memakai email alias atau terpisah untuk layanan yang tidak penting",
            "Mengganti email tiap hari",
            "Membagikan email di media sosial"
          ],
          jawabanBenar: 1,
          penjelasan: "Email terpisah membatasi dampak kebocoran dan spam pada akun utama."
        },
        {
          id: "soal-3-19",
          level: 3,
          babRujukan: "Bab 3.4",
          pertanyaan: "Sebelum menjual ponsel bekas, Anda sebaiknya...",
          pilihan: [
            "Langsung menyerahkannya",
            "Hanya menghapus foto",
            "Mencadangkan data, keluar dari semua akun, lalu reset pabrik",
            "Menyimpan password di catatan ponsel"
          ],
          jawabanBenar: 2,
          penjelasan: "Reset pabrik setelah keluar dari akun menghapus data pribadi dari perangkat."
        },
        {
          id: "soal-3-20",
          level: 3,
          babRujukan: "Bab 3.4",
          pertanyaan: "Tanda investasi yang patut dicurigai adalah...",
          pilihan: [
            "Terdaftar dan diawasi lembaga resmi",
            "Memberi simulasi risiko jelas",
            "Menyajikan izin yang bisa Anda verifikasi sendiri",
            "Menjanjikan untung tinggi dan pasti serta meminta Anda mengajak orang lain"
          ],
          jawabanBenar: 3,
          penjelasan: "Keuntungan tinggi yang pasti dan skema rekrutmen adalah ciri penipuan investasi."
        }
      ]
    },
    {
      id: 4,
      badge: "Level 4",
      nama: "Master",
      judul: "Respons Insiden, Forensik & Regulasi UU PDP",
      tujuan: "Pengguna mampu merespons insiden dengan tepat, menelusuri tanda serangan secara sederhana, melindungi keluarga atau organisasi, dan memahami hak serta kewajiban hukum terkait data pribadi.",
      warna: "var(--lvl-4)",
      warnaBg: "var(--lvl-4-bg)",
      babs: [
        {
          id: "4.1",
          nomor: "Bab 4.1",
          judul: "Respons Insiden, Apa yang Dilakukan Setelah Terkena Hack atau Scam",
          ringkasan: "Protokol darurat langkah demi langkah saat uang ditransfer, akun diretas, nomor WA dibajak, atau data KTP bocor.",
          waktuBaca: "5-6 menit",
          sections: [
            {
              tipe: "callout",
              calloutType: "perhatian",
              judul: "Prinsip utama:",
              konten: "Bertindak cepat, tenang, dan berurutan. Panik membuat langkah salah, misalnya menghapus bukti atau membalas penipu."
            },
            {
              tipe: "daftar-nomor",
              subjudul: "Jika Anda sudah mentransfer uang atau memberikan data keuangan:",
              items: [
                "<strong>Hubungi bank atau penyedia e-wallet segera lewat kontak resmi:</strong> Minta pemblokiran rekening atau kartu dan laporkan transaksi. Kecepatan sangat menentukan peluang dana tertahan.",
                "<strong>Kumpulkan bukti (lihat Bab 4.2):</strong> tangkapan layar percakapan, bukti transfer, nomor rekening tujuan, nomor telepon, tautan, dan waktu kejadian.",
                "<strong>Laporkan ke kanal resmi:</strong> bank Anda, OJK/Indonesia Anti-Scam Centre (IASC; kontak OJK 157) untuk penipuan keuangan, serta kepolisian (patroli siber) bila diperlukan. Verifikasi kanal dan nomor terbaru di situs resmi.",
                "<strong>Jangan berurusan dengan pihak yang menjanjikan \"mengembalikan dana\" dengan biaya di muka:</strong> Itu sering penipuan lanjutan terhadap korban."
              ]
            },
            {
              tipe: "daftar-nomor",
              subjudul: "Jika akun diretas:",
              items: [
                "Ubah password akun tersebut dari perangkat yang bersih. Ubah juga di akun lain yang memakai password sama, mulai dari email utama.",
                "Keluarkan semua sesi dan perangkat lain (\"Log out dari semua perangkat\"), lalu cabut aplikasi pihak ketiga yang tersambung.",
                "Aktifkan atau perbarui 2FA dan periksa metode pemulihan (nomor HP dan email cadangan) yang mungkin diubah penyerang.",
                "Periksa dampak: pesan terkirim, postingan, kontak, dan transaksi. Beri tahu kontak Anda agar tidak percaya permintaan uang dari akun itu.",
                "Gunakan jalur pemulihan resmi layanan tersebut bila akun terkunci."
              ]
            },
            {
              tipe: "paragraf",
              subjudul: "Situasi lainnya:",
              konten: "<strong>Jika nomor WhatsApp diambil alih:</strong> coba daftarkan ulang nomor dan aktifkan verifikasi dua langkah. Beri tahu kontak, dan hubungi dukungan layanan bila gagal.<br><br><strong>Jika perangkat terinfeksi:</strong> putuskan dari internet, amankan akun dari perangkat bersih, cadangkan data yang aman, lalu reset pabrik. Ganti semua password setelahnya.<br><br><strong>Jika kartu identitas atau data KTP bocor:</strong> waspadai pinjaman atau akun atas nama Anda. Pantau aktivitas keuangan Anda, dan periksa informasi kredit Anda lewat layanan resmi yang tersedia (misalnya SLIK OJK) secara berkala."
            }
          ],
          kesimpulan: "Cepat hubungi bank, amankan akun mulai dari email, kumpulkan bukti, laporkan lewat kanal resmi, dan jangan tergoda \"jasa pemulihan\"."
        },
        {
          id: "4.2",
          nomor: "Bab 4.2",
          judul: "Forensik Sederhana, Menelusuri dan Mengamankan Bukti",
          ringkasan: "Menjaga keutuhan bukti digital, melacak tanda akses ilegal, dan memeriksa berkas tanpa mengeksekusinya.",
          waktuBaca: "4-5 menit",
          sections: [
            {
              tipe: "paragraf",
              subjudul: "Tujuan:",
              konten: "Memahami apa yang terjadi dan menyimpan bukti agar laporan Anda kuat. Anda tidak perlu menjadi ahli forensik. Cukup disiplin dan teliti."
            },
            {
              tipe: "daftar",
              subjudul: "Mengamankan bukti:",
              items: [
                "Jangan hapus percakapan, email, atau berkas yang terkait, dan jangan blokir sebelum bukti disimpan.",
                "Ambil tangkapan layar lengkap yang memuat nomor atau akun pelaku, tanggal, jam, dan isi pesan.",
                "Simpan bukti transaksi: nomor referensi, rekening tujuan, nominal, dan waktu.",
                "Catat kronologi singkat: siapa menghubungi, lewat apa, apa yang diminta, apa yang Anda lakukan.",
                "Simpan salinan di tempat aman, misalnya satu di penyimpanan terpisah dari perangkat yang mungkin terinfeksi."
              ]
            },
            {
              tipe: "daftar",
              subjudul: "Menelusuri tanda akses tidak sah:",
              items: [
                "<strong>Buka halaman aktivitas keamanan akun:</strong> Google (\"Keamanan\"), Facebook/Instagram (\"Di mana Anda login\"), WhatsApp (\"Perangkat tertaut\"). Cari lokasi, perangkat, atau waktu login yang tidak Anda kenal.",
                "<strong>Periksa aturan penerusan email (forwarding/filter):</strong> Penyerang sering menambahkan aturan yang diam-diam menyalin atau menyembunyikan email.",
                "<strong>Periksa aplikasi dengan izin sensitif:</strong> Aksesibilitas, administrator perangkat, dan akses SMS, serta aplikasi baru yang tidak dikenali.",
                "<strong>Tinjau riwayat transaksi</strong> dan notifikasi bank atau e-wallet."
              ]
            },
            {
              tipe: "callout",
              calloutType: "tips",
              judul: "Memeriksa tautan dan berkas dengan aman:",
              konten: "Jangan membuka langsung. Salin alamat tautan ke layanan pemindai seperti VirusTotal. Namun, jangan anggap hasil \"bersih\" jaminan 100%. Untuk berkas mencurigakan, jangan pernah dijalankan. Hapus setelah bukti disimpan."
            },
            {
              tipe: "paragraf",
              subjudul: "Membaca email lebih dalam & Batas kemampuan sendiri:",
              konten: "Lihat header email (opsi \"Tampilkan asli\" atau \"View original\") untuk melihat jalur dan hasil pemeriksaan SPF, DKIM, dan DMARC. Jika menyangkut kerugian besar atau data organisasi, libatkan pihak berwenang atau tim profesional. Jangan memakai alat \"hack balik\" karena melanggar hukum."
            }
          ],
          kesimpulan: "Simpan bukti sebelum menghapus apa pun, periksa riwayat akses dan pengaturan akun, dan libatkan ahli saat insiden serius."
        },
        {
          id: "4.3",
          nomor: "Bab 4.3",
          judul: "Melindungi Keluarga dan Organisasi",
          ringkasan: "Edukasi ramah untuk lansia dan anak, kata sandi darurat keluarga, prinsip least privilege, dan budaya no-blame.",
          waktuBaca: "4-5 menit",
          sections: [
            {
              tipe: "daftar",
              subjudul: "Keluarga, terutama lansia dan anak:",
              items: [
                "<strong>Lansia sering menjadi sasaran penipuan telepon dan hadiah:</strong> Ajarkan tiga aturan sederhana: tidak memberi OTP/PIN, tidak mengklik link dari pesan asing, dan selalu telepon anak atau keluarga dulu sebelum transfer.",
                "<strong>Siapkan kata sandi keluarga:</strong> Gunakan kode rahasia yang disepakati bersama untuk memverifikasi permintaan darurat.",
                "Bantu mengaktifkan batas transaksi, notifikasi rekening, dan kunci layar di ponsel mereka.",
                "<strong>Anak dan remaja:</strong> ajarkan tidak membagikan data pribadi, lokasi, atau foto sensitif. Waspadai kontak orang asing, tawaran hadiah game, serta tekanan berbagi foto. Aktifkan parental control yang bijak.",
                "<strong>Buat suasana tanpa menyalahkan (no-blame culture):</strong> Saat ada anggota keluarga tertipu, rasa malu membuat korban menyembunyikan insiden sehingga kerugian membesar."
              ]
            },
            {
              tipe: "daftar",
              subjudul: "Organisasi (UMKM, sekolah, komunitas, kantor):",
              items: [
                "<strong>Prinsip hak akses minimum (least privilege):</strong> setiap orang hanya mendapat akses yang diperlukan. Cabut akses segera saat ada yang keluar.",
                "<strong>Wajibkan 2FA:</strong> pada email, keuangan, dan sistem penting. Gunakan password manager untuk tim.",
                "<strong>Pisahkan akun pribadi dan akun kerja:</strong> Hindari berbagi satu akun bersama.",
                "<strong>Prosedur verifikasi pembayaran ganda:</strong> perubahan rekening vendor atau permintaan transfer mendadak harus dikonfirmasi lewat kanal terpisah dengan minimal dua orang.",
                "<strong>Lakukan backup 3-2-1</strong> dan uji pemulihan secara berkala.",
                "<strong>Rutin pelatihan dan simulasi phishing singkat:</strong> Pelatihan yang sering dan ringan lebih efektif daripada sesi panjang setahun sekali.",
                "<strong>Miliki rencana respons insiden tertulis:</strong> siapa dihubungi, apa yang dilakukan, siapa melapor ke mana.",
                "<strong>Budaya pelaporan:</strong> dorong orang untuk melapor cepat saat salah klik, tanpa hukuman."
              ]
            }
          ],
          kesimpulan: "Pertahanan terbaik bersifat kolektif. Aturan sederhana, kebiasaan verifikasi, dan budaya terbuka melindungi lebih baik daripada alat canggih saja."
        },
        {
          id: "4.4",
          nomor: "Bab 4.4",
          judul: "UU Pelindungan Data Pribadi (UU PDP) dan Hak Anda",
          ringkasan: "Memahami UU No. 27 Tahun 2022, hak subjek data, kewajiban pengendali data, dan cara menuntut hak secara praktis.",
          waktuBaca: "4-5 menit",
          sections: [
            {
              tipe: "paragraf",
              subjudul: "Dasar Hukum: UU No. 27 Tahun 2022",
              konten: "Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP) mengatur hak pemilik data dan kewajiban pihak yang mengelola data di Indonesia."
            },
            {
              tipe: "daftar",
              subjudul: "Pihak-pihak utama:",
              items: [
                "<strong>Subjek data pribadi:</strong> orang yang datanya diproses, yaitu Anda.",
                "<strong>Pengendali data pribadi:</strong> pihak yang menentukan tujuan dan cara pemrosesan (misalnya perusahaan atau instansi).",
                "<strong>Prosesor data pribadi:</strong> pihak yang memproses data atas nama pengendali."
              ]
            },
            {
              tipe: "daftar",
              subjudul: "Hak subjek data (garis besar):",
              items: [
                "Mendapatkan informasi tentang kejelasan identitas, tujuan, dan penggunaan data.",
                "Mengakses dan memperoleh salinan data pribadi.",
                "Melengkapi dan memperbarui data yang tidak akurat.",
                "Mengakhiri pemrosesan, menghapus, atau memusnahkan data dalam kondisi yang ditentukan.",
                "Menarik kembali persetujuan pemrosesan data.",
                "Mengajukan keberatan atas keputusan otomatis, serta menuntut ganti rugi atas pelanggaran."
              ]
            },
            {
              tipe: "daftar",
              subjudul: "Kewajiban pengendali data (garis besar):",
              items: [
                "Memiliki dasar pemrosesan yang sah, misalnya persetujuan yang eksplisit.",
                "Menjaga keamanan data dari akses tidak sah.",
                "Memberitahukan kegagalan pelindungan data (kebocoran) secara tertulis kepada subjek data dan lembaga berwenang paling lambat 3 x 24 jam.",
                "Menghapus atau memusnahkan data bila tujuan tercapai atau atas permintaan yang sah."
              ]
            },
            {
              tipe: "daftar-nomor",
              subjudul: "Cara memakai hak Anda dalam praktik:",
              items: [
                "Baca kebijakan privasi layanan, terutama bagian data yang dikumpulkan dan dibagikan.",
                "Gunakan menu pengaturan privasi atau hubungi petugas pelindungan data layanan itu untuk mengakses, memperbaiki, atau menghapus data.",
                "Jika tidak ditanggapi, ajukan pengaduan tertulis kepada penyelenggara, atau teruskan ke lembaga/kementerian berwenang.",
                "Untuk penipuan atau peretasan, kanal pidana dan pelaporan (kepolisian, OJK, bank) tetap menjadi jalur utama."
              ]
            },
            {
              tipe: "callout",
              calloutType: "perhatian",
              judul: "Poin penting:",
              konten: "UU PDP tidak menggantikan kewaspadaan pribadi. Hukum membantu menuntut tanggung jawab pengelola data, tetapi data yang sudah bocor sulit ditarik kembali. Karena itu, mencegah tetap lebih baik."
            }
          ],
          kesimpulan: "Anda punya hak atas data Anda, dan pengendali data wajib melindunginya serta melaporkan kebocoran."
        }
      ],
      bankSoal: [
        {
          id: "soal-4-1",
          level: 4,
          babRujukan: "Bab 4.1",
          pertanyaan: "Anda baru saja mentransfer uang ke penipu. Langkah pertama yang paling tepat adalah...",
          pilihan: [
            "Menunggu beberapa hari",
            "Mengunggah kisah di media sosial lebih dulu",
            "Segera menghubungi bank lewat kontak resmi untuk meminta blokir dan melaporkan transaksi",
            "Menghubungi penipu untuk meminta kembali uang"
          ],
          jawabanBenar: 2,
          penjelasan: "Kecepatan melapor ke bank menentukan peluang dana tertahan."
        },
        {
          id: "soal-4-2",
          level: 4,
          babRujukan: "Bab 4.1",
          pertanyaan: "Seseorang menawarkan \"jasa pemulihan dana\" dengan biaya di muka. Kemungkinan besar ini...",
          pilihan: [
            "Layanan resmi pemerintah",
            "Penipuan lanjutan terhadap korban",
            "Program wajib bank",
            "Prosedur kepolisian"
          ],
          jawabanBenar: 1,
          penjelasan: "Korban sering menjadi sasaran penipuan berikutnya yang menjanjikan pengembalian dana."
        },
        {
          id: "soal-4-3",
          level: 4,
          babRujukan: "Bab 4.1",
          pertanyaan: "Akun media sosial Anda diretas. Urutan langkah yang paling masuk akal...",
          pilihan: [
            "Membuat akun baru tanpa mengganti password lama",
            "Mengunggah permintaan maaf dulu",
            "Mengabaikan sampai penyerang pergi",
            "Mengganti password dari perangkat bersih, keluar dari semua perangkat, mengaktifkan 2FA, lalu memberi tahu kontak"
          ],
          jawabanBenar: 3,
          penjelasan: "Utamakan kembali menguasai akun, kemudian cegah penyalahgunaan lebih lanjut."
        },
        {
          id: "soal-4-4",
          level: 4,
          babRujukan: "Bab 4.1",
          pertanyaan: "Mengapa email utama perlu diamankan lebih dulu setelah terjadi peretasan?",
          pilihan: [
            "Karena dipakai untuk reset password akun lain",
            "Karena ukurannya besar",
            "Karena tampilannya penting",
            "Karena gratis"
          ],
          jawabanBenar: 0,
          penjelasan: "Penguasaan email memberi jalan menguasai akun lain."
        },
        {
          id: "soal-4-5",
          level: 4,
          babRujukan: "Bab 4.2",
          pertanyaan: "Sebelum melapor penipuan, tindakan yang benar terhadap percakapan dengan pelaku adalah...",
          pilihan: [
            "Menghapus semua percakapan",
            "Memblokir lalu menghapus semuanya",
            "Menyimpan tangkapan layar dan bukti lebih dulu, baru kemudian mengamankan",
            "Membalas pelaku agar mengaku"
          ],
          jawabanBenar: 2,
          penjelasan: "Bukti yang utuh memperkuat laporan."
        },
        {
          id: "soal-4-6",
          level: 4,
          babRujukan: "Bab 4.2",
          pertanyaan: "Bukti yang baik pada kasus penipuan transfer mencakup...",
          pilihan: [
            "Hanya cerita lisan",
            "Tangkapan layar percakapan, bukti transaksi, nomor rekening/telepon pelaku, dan waktu kejadian",
            "Hanya nama panggilan pelaku",
            "Foto layar tanpa tanggal"
          ],
          jawabanBenar: 1,
          penjelasan: "Data identitas pelaku dan kronologi membantu penelusuran."
        },
        {
          id: "soal-4-7",
          level: 4,
          babRujukan: "Bab 4.2",
          pertanyaan: "Penyerang sering menambahkan sesuatu pada email korban agar tetap bisa mengintai. Hal yang perlu diperiksa adalah...",
          pilihan: [
            "Aturan penerusan (forwarding) dan filter email",
            "Warna tema email",
            "Ukuran font",
            "Tanda tangan email"
          ],
          jawabanBenar: 0,
          penjelasan: "Aturan penerusan dapat menyalin email diam-diam ke penyerang."
        },
        {
          id: "soal-4-8",
          level: 4,
          babRujukan: "Bab 4.2",
          pertanyaan: "Hasil pemindaian VirusTotal menyatakan sebuah tautan \"bersih\". Kesimpulan yang tepat...",
          pilihan: [
            "Pasti aman 100%",
            "Pasti berbahaya",
            "Tidak perlu waspada lagi",
            "Belum tentu aman, karena ancaman baru mungkin belum terdeteksi"
          ],
          jawabanBenar: 3,
          penjelasan: "Pemindai tidak sempurna terhadap ancaman yang baru."
        },
        {
          id: "soal-4-9",
          level: 4,
          babRujukan: "Bab 4.2",
          pertanyaan: "Untuk melihat jalur dan hasil pemeriksaan SPF/DKIM/DMARC sebuah email, Anda dapat...",
          pilihan: [
            "Membalas email tersebut",
            "Membuka opsi \"Tampilkan asli\" atau \"View original\" untuk melihat header",
            "Membagikan email ke grup",
            "Mengunduh lampiran"
          ],
          jawabanBenar: 1,
          penjelasan: "Header email memuat informasi asal dan hasil autentikasi pengirim."
        },
        {
          id: "soal-4-10",
          level: 4,
          babRujukan: "Bab 4.2",
          pertanyaan: "Anda menduga ada serangan serius pada sistem kantor. Sikap terbaik adalah...",
          pilihan: [
            "Membalas dengan meretas pelaku",
            "Menunggu sampai terjadi masalah besar",
            "Melibatkan tim keamanan atau ahli dan pihak berwenang",
            "Menghapus semua log"
          ],
          jawabanBenar: 2,
          penjelasan: "Insiden serius perlu penanganan profesional, dan \"hack balik\" melanggar hukum."
        },
        {
          id: "soal-4-11",
          level: 4,
          babRujukan: "Bab 4.3",
          pertanyaan: "Aturan sederhana yang paling penting untuk orang tua lansia adalah...",
          pilihan: [
            "Telepon keluarga dulu sebelum mentransfer uang atau memberikan data",
            "Mengikuti arahan penelepon dengan cepat",
            "Membagikan OTP agar urusan selesai",
            "Mengklik tautan hadiah"
          ],
          jawabanBenar: 0,
          penjelasan: "Verifikasi dengan keluarga memutus tekanan dan skenario penipu."
        },
        {
          id: "soal-4-12",
          level: 4,
          babRujukan: "Bab 4.3",
          pertanyaan: "Anggota keluarga Anda tertipu. Respons yang paling membantu adalah...",
          pilihan: [
            "Memarahi dan menyalahkan",
            "Menyuruh merahasiakan",
            "Membiarkan sendiri",
            "Mendengarkan tanpa menghakimi, lalu bersama-sama mengambil langkah pemulihan"
          ],
          jawabanBenar: 3,
          penjelasan: "Sikap menyalahkan membuat korban menyembunyikan kejadian dan memperbesar kerugian."
        },
        {
          id: "soal-4-13",
          level: 4,
          babRujukan: "Bab 4.3",
          pertanyaan: "Prinsip \"least privilege\" dalam organisasi berarti...",
          pilihan: [
            "Semua orang punya akses administrator",
            "Semua orang berbagi satu akun",
            "Setiap orang hanya mendapat akses yang diperlukan untuk tugasnya",
            "Akses dicabut setahun setelah keluar"
          ],
          jawabanBenar: 2,
          penjelasan: "Akses minimum mengurangi dampak jika satu akun diretas."
        },
        {
          id: "soal-4-14",
          level: 4,
          babRujukan: "Bab 4.3",
          pertanyaan: "Cara terbaik mencegah penipuan perubahan rekening vendor di organisasi adalah...",
          pilihan: [
            "Menyetujui lewat email yang sama",
            "Mempercayai nama pengirim",
            "Membayar dulu, verifikasi kemudian",
            "Mewajibkan konfirmasi lewat kanal terpisah dan persetujuan minimal dua orang"
          ],
          jawabanBenar: 3,
          penjelasan: "Verifikasi ganda memutus rantai penipuan BEC."
        },
        {
          id: "soal-4-15",
          level: 4,
          babRujukan: "Bab 4.3",
          pertanyaan: "Pelatihan keamanan yang paling efektif bagi tim adalah...",
          pilihan: [
            "Satu sesi panjang setahun sekali",
            "Sesi singkat, rutin, dengan simulasi nyata",
            "Hanya membagikan aturan tertulis",
            "Tidak perlu pelatihan"
          ],
          jawabanBenar: 1,
          penjelasan: "Pembiasaan rutin lebih efektif dibanding sesi sekali setahun."
        },
        {
          id: "soal-4-16",
          level: 4,
          babRujukan: "Bab 4.3",
          pertanyaan: "Seorang karyawan salah mengeklik link phishing dan ragu melapor. Budaya organisasi yang baik...",
          pilihan: [
            "Menghukum berat agar jera",
            "Menyembunyikan insiden",
            "Menunggu sampai ketahuan",
            "Mendorong pelaporan cepat tanpa menyalahkan agar dampak bisa ditekan"
          ],
          jawabanBenar: 3,
          penjelasan: "Pelaporan cepat memperkecil kerusakan."
        },
        {
          id: "soal-4-17",
          level: 4,
          babRujukan: "Bab 4.4",
          pertanyaan: "UU yang mengatur pelindungan data pribadi di Indonesia adalah...",
          pilihan: [
            "UU Nomor 5 Tahun 2000",
            "UU Nomor 1 Tahun 1950",
            "UU Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi",
            "UU Nomor 8 Tahun 1999 saja"
          ],
          jawabanBenar: 2,
          penjelasan: "UU PDP adalah UU Nomor 27 Tahun 2022."
        },
        {
          id: "soal-4-18",
          level: 4,
          babRujukan: "Bab 4.4",
          pertanyaan: "Dalam UU PDP, orang yang datanya diproses disebut...",
          pilihan: [
            "Pengendali data",
            "Subjek data pribadi",
            "Prosesor data",
            "Pelaku usaha"
          ],
          jawabanBenar: 1,
          penjelasan: "Subjek data pribadi adalah pemilik data yang diproses."
        },
        {
          id: "soal-4-19",
          level: 4,
          babRujukan: "Bab 4.4",
          pertanyaan: "Salah satu hak Anda sebagai subjek data adalah...",
          pilihan: [
            "Meminta akses, memperbaiki, atau menarik persetujuan atas pemrosesan data dalam kondisi tertentu",
            "Mengubah isi UU",
            "Menghapus data semua orang",
            "Menentukan tarif layanan"
          ],
          jawabanBenar: 0,
          penjelasan: "UU PDP memberi hak seperti akses, perbaikan, penarikan persetujuan, dan keberatan."
        },
        {
          id: "soal-4-20",
          level: 4,
          babRujukan: "Bab 4.4",
          pertanyaan: "Ketika terjadi kebocoran data pada sebuah layanan, pengendali data wajib...",
          pilihan: [
            "Merahasiakan agar reputasi terjaga",
            "Menunggu pengguna menemukan sendiri",
            "Menghapus jejak kebocoran",
            "Memberitahukan secara tertulis kepada subjek data dan lembaga berwenang dalam batas waktu yang ditetapkan"
          ],
          jawabanBenar: 3,
          penjelasan: "UU PDP mewajibkan pemberitahuan kegagalan pelindungan data kepada subjek data dan lembaga berwenang."
        }
      ]
    }
  ],

  // Soal placement test (5 soal pilihan representatif dari berbagai level)
  placementQuestions: [
    {
      id: "pt-1",
      level: 1,
      pertanyaan: "Jika Anda menerima pesan WhatsApp berisi file berakhiran '.apk' seperti undangan pernikahan dari nomor tak dikenal, tindakan terbaik adalah...",
      pilihan: [
        "Tidak membuka/memasang dan langsung menghapusnya",
        "Membukanya karena penasaran siapa yang menikah",
        "Meneruskannya ke teman dekat untuk mengecek",
        "Memasangnya dengan mematikan koneksi internet"
      ],
      jawabanBenar: 0,
      penjelasan: "File APK dari luar toko aplikasi resmi berbahaya dan dapat membaca SMS/OTP serta menguras rekening."
    },
    {
      id: "pt-2",
      level: 1,
      pertanyaan: "Pihak yang boleh meminta atau mengetahui kode OTP dan PIN Anda adalah...",
      pilihan: [
        "Customer service bank saat ada kendala akun",
        "Polisi atau penyidik siber",
        "Hanya Anda sendiri (tidak boleh diberikan ke siapapun)",
        "Petugas kurir pengantar paket"
      ],
      jawabanBenar: 2,
      penjelasan: "Bank dan instansi resmi mana pun tidak pernah meminta kode OTP atau PIN."
    },
    {
      id: "pt-3",
      level: 2,
      pertanyaan: "Mengapa ikon gembok (HTTPS) pada alamat situs tidak menjamin situs tersebut bukan situs penipuan?",
      pilihan: [
        "Karena HTTPS hanya mengenkripsi jalur koneksi, situs palsu pun bisa memakai HTTPS",
        "Karena gembok hanya aktif di komputer lama",
        "Karena HTTPS hanya buatan operator seluler",
        "Karena gembok hanya untuk toko online luar negeri"
      ],
      jawabanBenar: 0,
      penjelasan: "Situs phishing pun bisa memakai HTTPS. Selalu periksa nama domain utama secara cermat."
    },
    {
      id: "pt-4",
      level: 3,
      pertanyaan: "Strategi cadangan data (backup) yang tepat dengan prinsip 3-2-1 adalah...",
      pilihan: [
        "Menyimpan di 3 folder berbeda pada 1 laptop yang sama",
        "Memiliki 3 salinan data, pada 2 media berbeda, dengan 1 salinan disimpan di tempat terpisah",
        "Menyimpan password di 3 kertas berbeda",
        "Melakukan backup setiap 3 minggu, 2 bulan, dan 1 tahun"
      ],
      jawabanBenar: 1,
      penjelasan: "Prinsip 3-2-1 memastikan data tetap selamat saat terjadi bencana fisik atau serangan ransomware."
    },
    {
      id: "pt-5",
      level: 4,
      pertanyaan: "Jika baru saja tertipu dan terlanjur mentransfer uang ke rekening penipu, langkah nomor satu yang paling genting adalah...",
      pilihan: [
        "Menulis curhatan panjang di media sosial",
        "Segera menghubungi bank resmi untuk meminta pemblokiran rekening tujuan",
        "Meminta bantuan 'hacker' di Telegram untuk menarik dana",
        "Menghubungi kembali nomor penipu untuk meminta belas kasihan"
      ],
      jawabanBenar: 1,
      penjelasan: "Kecepatan melapor ke bank penerbit dan bank penerima sangat menentukan apakah dana masih dapat dibekukan."
    }
  ]
};
