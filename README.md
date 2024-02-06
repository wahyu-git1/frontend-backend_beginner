dalam kode ini mempunyai frontend yaitu di folder public/index.js dan backend di server.js

use technology 
1. node.js </br> <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" width="500"/>
2. express </br> <img src="https://miro.medium.com/v2/resize:fit:700/1*XP-mZOrIqX7OsFInN2ngRQ.png" width="50"/>
3. nodemon </br> <img src="https://static-00.iconduck.com/assets.00/nodemon-icon-1800x2048-cec0ndk1.png" width="50"/>
 
<h1>penjelasannya front-end</h1>
1. menetapkan eventlistener sehingga nanti ketika btnGet atau btnPost ditekan akan menuju ke getInfo atau posInnfo
2. fungsi get info digunakan untuk mengambil data dari server dengan menggunakan metode GET. kketika tombol "get" ditekanm fungsi ini akan membuat permintaan ke endpoint '/info/james?key=hello' (dengan 'james' sebagai nilai parameter dinamis dan 'hello' ssebagai nilai query string 'key') data yang diterima dari server akan ditmpilkan didalam input field.
3. funsi 'postInfo' : digunakan untuk mengirim data dari server dengan menggunakan metode POST. ketika tombol "post" ditekan fungsi ini aka membuat errmintaan ke endpoint '/' dengan mengirimkan data dari inpt field sebafai payload json. server kemudan akan merespon dengan 'received' jika data berhasil diterima.


<h1>penjelasan back-end</h1>

1.experss server : membuat server express yang berjalan dipoort 8000
2.s static file middleware: menggunakan middleware 'expresss.static' untuk menyajikan file statis dari folder 'public', sehingga file 'index.html' dan 'index.js' dapat diakses melalui browser.
3. json middleware: menggunakan middleware 'express.json' untuk mengizinkan express untuk memahami dan menangani payload JSON dari permintaan POST
4. endpoint '/info/:dinamic'. menangani permntaan GET ke endpoint '/info/:dinamic'. saat menerima permitaan server mencetak nilai parameter dinamis dan nilai query strng 'key' ke konsole. kemudian merespons dengan objek json yang berisi informasi
5. endpoint POST '/' : menangani permintaan POST ke endpoit '/' saat menerima permintaan, server mencetak data yang diterima dari payload JSON ke konsol, kemudian merespons dengan pesan 'received' jika data yang berhasil diterima..

<h1>conclusiaon </h1>
dengan demikian, ketika anda membuka aplikasi di browser dan menekan tombol "get" atau "post" frontend akan melakukan permuintaan keserver, dan server akan merespons sesuai dengan permintaan yang diberikan.
