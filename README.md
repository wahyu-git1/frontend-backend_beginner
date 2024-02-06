dalam kode ini mempunyai frontend yaitu di folder public/index.js dan backend di server.js

use technology 
1. node.js <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fd%2Fd9%2FNode.js_logo.svg%2F2560px-Node.js_logo.svg.png&tbnid=Qefj6DmXPZynBM&vet=12ahUKEwiZio6unpaEAxUjjmMGHVAaDOIQMygAegQIARBM..i&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFile%3ANode.js_logo.svg&docid=2wfpxQDTjMS_1M&w=2560&h=1566&q=logo%20node%20js&ved=2ahUKEwiZio6unpaEAxUjjmMGHVAaDOIQMygAegQIARBM"/>
 
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
