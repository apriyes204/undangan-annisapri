export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Achmad Dwi Apriyanto',
            child: 'Putra ke 2',
            father: 'Karmin Sriyanto',
            mother: 'Purwanti',
            image: '../src/assets/images/co.png'
        },
        P: {
            id: 2,
            name: "Annisa Sakinah Qur'ani",
            child: 'Putri ke 2',
            father: 'Kodaryanto',
            mother: 'Nurjani',
            image: '../src/assets/images/ce.png'
        },

        couple: './src/assets/images/berdua.png'
    },

    time: {
        marriage:  {
            year: '2024',
            month: 'Desember',
            date: '24',
            day: 'Selasa',
            hours: {
                start: '08.00',
                finish: '11.00'
            }
        },
        reception: {
            year: '',
            month: '',
            date: '',
            day: '',
            hours: {
                start: '',
                finish: ''
            }
        },
        tempat: {
            lokasi: 'Masjid Ramlie Musofa'
        },
        address: 'Jl. Danau Sunter Utara Raya Selatan No.12C - 14A, RT 13 RW 16, Sunter Agung, Kec. Tj. Priok, Jkt Utara, DKI Jakarta, 14350'
    },

    link: {
        // calendar: 'https://calendar.app.google/sZuPoeZejuhSmmbi7',
        calendar: 'https://calendar.app.google/ReJ3eWLxxH9tEBKNA',
        
        // map: 'https://maps.app.goo.gl/nYWhSwiDVU714NpB8',
        map: 'https://www.google.com/maps/dir//Ramlie+Musofa+Mosque,+Blok+I+%2F+10,+Jl.+Danau+Sunter+Utara+Raya+Selatan+No.12C+-+14A,+RT.13%2FRW.16,+Sunter+Agung,+Kec.+Tj.+Priok,+Jkt+Utara,+Daerah+Khusus+Ibukota+Jakarta+14350/@-6.22592,106.8302336,17z/data=!4m17!1m7!3m6!1s0x2e69f570cdea6529:0x1b4883b8bedbee8e!2sRamlie+Musofa+Mosque!8m2!3d-6.1461504!4d106.8712171!16s%2Fg%2F11fhwkr4k0!4m8!1m0!1m5!1m1!1s0x2e69f570cdea6529:0x1b4883b8bedbee8e!2m2!1d106.8712178!2d-6.1461544!3e9?entry=ttu',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/foto-1.png'
        },
        {
            id: 2,
            image: './src/assets/images/foto-2.png'
        },
        {
            id: 3,
            image: './src/assets/images/foto-3.png'
        },
        {
            id: 4,
            image: './src/assets/images/foto-4.png'
        },
        {
            id: 5,
            image: './src/assets/images/foto-5.png'
        },{
            id:6,
            image:'./src/assets/images/foto-6.png'
        },{
            id:7,
            image:'./src/assets/images/foto-7.png'
        },{
            id:8,
            image:'./src/assets/images/foto-8.png'
        }
    ],

    bank: [
        {
            id: 1,
            name: "Annisa Sakinah Qur'ani",
            icon: './src/assets/images/bca.png',
            rekening: '8415720986'
        },
        {
            id: 2,
            name: 'Achmad Dwi Apriyanto',
            icon: './src/assets/images/banksi.png',
            rekening: '7089709622'
        },
    ],

    audio: './src/assets/audio/lagu.mp3',

    // api: 'https://script.google.com/macros/s/AKfycbw20dzmJFBhCGIOMJXuKadQa9HQkABtLK47t-SWU9JMLeR25NiU5vF1Dxk0I3k_HmSZCQ/exec',    
    api: 'https://script.google.com/macros/s/AKfycbxp7GJ-mlO8OtLOHfK6X5w-dSCaqw8Fg4iiA35keHfSxaZO7ynO6WELVgOBxpRxZzk9/exec',

    navbar: [
        
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}