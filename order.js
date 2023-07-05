let mknOrder = [
    {
        dipesan: false,
        harga: 20,
        nama: 'Dragon Roast',
    },
    {
        dipesan: false,
        harga: 17,
        nama: 'Broomstick Burger',
    },
    {
        dipesan: false,
        harga: 15,
        nama: 'Magical Stew',
    },
    {
        dipesan: false,
        harga: 19,
        nama: 'Shepherds Pie with Magical Gravy',
    },
    {
        dipesan: false,
        harga: 18,
        nama: 'Treacle Tart with Clotted Cream',
    },
];

let mnmOrder = [
    {
        dipesan: false,
        harga: 14,
        nama: 'Butterbeer',
    },
    {
        dipesan: false,
        harga: 12,
        nama: 'Potion of Enchantment',
    },
    {
        dipesan: false,
        harga: 12,
        nama: 'Firebolt Punch',
    },
    {
        dipesan: false,
        harga: 10,
        nama: 'Hogsmeade Hot Chocolate',
    },
    {
        dipesan: false,
        harga: 15,
        nama: 'Quidditch Quencher',
    },
];

let totalOrder = 0;

const mknTerpilih = document.getElementsByClassName('mkn');
const mnmTerpilih = document.getElementsByClassName('mnm');
const textTOTAL = document.getElementById('last-item');

for (let i = 0; i < mknTerpilih.length; i++) {
    mknTerpilih[i].addEventListener('click', function() {
        setMknPemesanan(i, mknTerpilih[i]);
    });
}

function setMknPemesanan(index, elemen) {
    if (mknOrder[index].dipesan === false) {
        mknOrder[index].dipesan = true;
        elemen.style.backgroundColor = "maroon";
        elemen.style.color = "white";
        totalOrder += mknOrder[index].harga;
    } else {
        mknOrder[index].dipesan = false;
        elemen.style.backgroundColor = "lightgrey";
        elemen.style.color = "black";
        totalOrder -= mknOrder[index].harga;
    }
    textTOTAL.innerHTML = "TOTAL <span>$" + totalOrder + "</span>";
}

for (let i = 0; i < mnmTerpilih.length; i++) {
    mnmTerpilih[i].addEventListener('click', function() {
        setMnmPemesanan(i, mnmTerpilih[i]);
    });
}

function setMnmPemesanan(index, elemen) {
    if (mnmOrder[index].dipesan === false) {
        mnmOrder[index].dipesan = true;
        elemen.style.backgroundColor = "maroon";
        elemen.style.color = "white";
        totalOrder += mnmOrder[index].harga;
    } else {
        mnmOrder[index].dipesan = false;
        elemen.style.backgroundColor = "lightgrey";
        elemen.style.color = "black";
        totalOrder -= mnmOrder[index].harga;
    }
    textTOTAL.innerHTML = "TOTAL <span>$" + totalOrder + "</span>";
}
