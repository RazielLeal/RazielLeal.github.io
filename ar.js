
document.addEventListener('DOMContentLoaded', () => {
  console.log('✅ Script `ar.js` iniciado.');

  let jugadorActualIndex = 0;
  let carruselIntervalo = null;
  const TIEMPO_POR_JUGADOR = 3000; // 3000 ms = 3 segundos

  const nombresPaises = [
    "Estados Unidos",  // targetIndex: 0
    "Mexico",          // targetIndex: 1
    "Canada",          // targetIndex: 2
    "Nueva Zelanda",   // targetIndex: 3
    "Iran",            // targetIndex: 4
    "Argentina",       // targetIndex: 5
    "Uzbekistan",      // targetIndex: 6
    "Corea del sur",   // targetIndex: 7
    "Egipto",          // targetIndex: 8
    "Australia",       // targetIndex: 9
    "Brasil",          // targetIndex: 10
    "Ecuador",         // targetIndex: 11
    "Uruguay",         // targetIndex: 12
    "Cabo verde",      // targetIndex: 13
    "Paraguay",        // targetIndex: 14
    "Tunez",           // targetIndex: 15
    "Argelia",         // targetIndex: 16
    "Arabia Saudita"   // targetIndex: 17
  ];

  // --- CÓDIGO NUEVO: Base de Datos de Jugadores ---
  const jugadoresPorPais = {
    "Mexico": [
      {
        nombre: "Luis Malagón",
        calificacion: 4,
        imagen: "/imagenes/mexico/luis-malagon.jpg" 
      },
      {
        nombre: "Jorge Sánchez",
        calificacion: 4,
        imagen: "/imagenes/mexico/jorge-sanchez.jpg"
      },
      {
        nombre: "Cesar Montes",
        calificacion: 4,
        imagen: "/imagenes/mexico/cesar-montes.jpg"
      },
      {
        nombre: "Johan Vásquez",
        calificacion: 4,
        imagen: "/imagenes/mexico/Johan-Vasquez.jpeg"
      },
      {
        nombre: "Jesús Gallardo",
        calificacion: 4,
        imagen: "/imagenes/mexico/Jesus-Gallardo.jpg"
      },
      {
        nombre: "Edson Álvarez",
        calificacion: 5,
        imagen: "/imagenes/mexico/Edson-Alvarez.jpg"        
      },
      {
        nombre:"Orbelín Pineda",
        calificacion: 4,
        imagen: "/imagenes/mexico/Orbelin-Pineda.jpg"
      },
      {
        nombre: "Luis Chávez",
        calificacion: 4,
        imagen: "/imagenes/mexico/Luis-Chavez.jpg"
      },
      {
        nombre: "Hirving Lozano",
        calificacion: 4,
        imagen: "/imagenes/mexico/Hirving-Lozano.jpg"
      },
      {
        nombre: "Alexis Vega",
        calificacion: 4,
        imagen: "/imagenes/mexico/Alexis-Vega.jpg"
      },
      {
        nombre: "Santiago Giménez",
        calificacion: 5,
        imagen: "/imagenes/mexico/gimenez.jpeg"
      }    
    ],
    "Argentina": [
      {
        nombre: "Emiliano Martínez",
        calificacion: 4,
        imagen: "/imagenes/argentina/emiliano-martinez.jpeg" 
      },
      {
        nombre: "Nahuel Molina",
        calificacion: 4,
        imagen: "/imagenes/argentina/Nahuel-Molina.jpg"
      },
      {
        nombre: "Cristian Romero",
        calificacion: 4,
        imagen: "/imagenes/argentina/Cristian-Romero.png"
      },
      {
        nombre: "Lisandro Martínez",
        calificacion: 4,
        imagen: "/imagenes/argentina/Lisandro-Martinez.jpg"
      },
      {
        nombre: "Nicolás Tagliafico",
        calificacion: 4,
        imagen: "/imagenes/argentina/tagliafico.jpg"
      },
      {
        nombre: "Rodrigo De Paul",
        calificacion: 5,
        imagen: "/imagenes/argentina/depaul.jpg"        
      },
      {
        nombre:"Enzo Fernández",
        calificacion: 4,
        imagen: "/imagenes/argentina/enzo.jpg"
      },
      {
        nombre: "Alexis Mac Allister",
        calificacion: 4,
        imagen: "/imagenes/argentina/alexis-mac-allister.jpg"
      },
      {
        nombre: "Lionel Messi",
        calificacion: 4,
        imagen: "/imagenes/argentina/messi.jpg"
      },
      {
        nombre: "Lautaro Martínez",
        calificacion: 4,
        imagen: "/imagenes/argentina/lautaro.jpg"
      },
      {
        nombre: "Julián Álvarez",
        calificacion: 5,
        imagen: "/imagenes/argentina/julian.jpg"
      }    
    ],
    "Brasil": [
      {
        nombre: "Ederson Moraes",
        calificacion: 88,
        imagen: "/imagenes/brasil/ederson.jpg"
      },
      {
        nombre: "Wesley França",
        calificacion: 76,
        imagen: "/imagenes/brasil/wesley.jpg"
      },
      {
        nombre: "Eder Militão",
        calificacion: 86,
        imagen: "/imagenes/brasil/eder.jpg"
      },
      {
        nombre: "Gabriel Magalhães",
        calificacion: 87,
        imagen: "/imagenes/brasil/gabriel.jpg"
      },
      {
        nombre: "Caio Henrique",
        calificacion: 77,
        imagen: "/imagenes/brasil/caio.jpg"
      },
      {
        nombre: "Bruno Guimarães",
        calificacion: 86,
        imagen: "/imagenes/brasil/bruno.jpeg"
      },
      {
        nombre: "Joelinton Cássio",
        calificacion: 82,
        imagen: "/imagenes/brasil/joelinton.jpeg"
      },
      {
        nombre: "Lucas Paquetá",
        calificacion: 82,
        imagen: "/imagenes/brasil/lucas.jpg"
      },
      {
        nombre: "Rodrygo Goes",
        calificacion: 86,
        imagen: "/imagenes/brasil/rodrygo.jpeg"
      },
      {
        nombre: "Vinicius Junior",
        calificacion: 90,
        imagen: "/imagenes/brasil/vinicius.jpg"
      },
      {
        nombre: "Richarlison de Andrade",
        calificacion: 78,
        imagen: "/imagenes/brasil/richarlison.jpg"
      }
    ],
    "Uruguay": [
      {
        nombre: "Santiago Mele",
        calificacion: 77,
        imagen: "/imagenes/uruguay/santiago.jpg"
      },
      {
        nombre: "Nahitan Nández",
        calificacion: 76,
        imagen: "/imagenes/uruguay/nahitan.jpg"
      },
      {
        nombre: "Ronald Araújo",
        calificacion: 83,
        imagen: "/imagenes/uruguay/ronald.jpg"
      },
      {
        nombre: "Sebastián Cáceres",
        calificacion: 76,
        imagen: "/imagenes/uruguay/sebastian.jpg"
      },
      {
        nombre: "Matías Viña",
        calificacion: 78,
        imagen: "/imagenes/uruguay/matias.jpg"
      },
      {
        nombre: "Manuel Ugarte",
        calificacion: 79,
        imagen: "/imagenes/uruguay/manuel.jpg"
      },
      {
        nombre: "Federico Valverde",
        calificacion: 89,
        imagen: "/imagenes/uruguay/federico.jpg"
      },
      {
        nombre: "Rodrigo Bentancur",
        calificacion: 80,
        imagen: "/imagenes/uruguay/rodrigo.jpg"
      },
      {
        nombre: "Brian Rodríguez",
        calificacion: 76,
        imagen: "/imagenes/uruguay/brian.jpg"
      },
      {
        nombre: "Cristian Olivera",
        calificacion: 74,
        imagen: "/imagenes/uruguay/cristian.jpg"
      },
      {
        nombre: "Darwin Núñez",
        calificacion: 79,
        imagen: "/imagenes/uruguay/darwin.jpg"
      }
    ],
    "Ecuador": [
      {
        nombre: "Hernán Galíndez",
        calificacion: 74,
        imagen: "/imagenes/ecuador/hernan.jpg"
      },
      {
        nombre: "Angelo Preciado",
        calificacion: 75,
        imagen: "/imagenes/ecuador/angelo.jpg"
      },
      {
        nombre: "Willian Pacho",
        calificacion: 80,
        imagen: "/imagenes/ecuador/willian.jpg"
      },
      {
        nombre: "Piero Hincapié",
        calificacion: 81,
        imagen: "/imagenes/ecuador/piero.jpg"
      },
      {
        nombre: "Pervis Estupiñan",
        calificacion: 80,
        imagen: "/imagenes/ecuador/pervis.jpg"
      },
      {
        nombre: "Alan Franco",
        calificacion: 75,
        imagen: "/imagenes/ecuador/alan.jpg"
      },
      {
        nombre: "Moisés Caicedo",
        calificacion: 87,
        imagen: "/imagenes/ecuador/moises.jpg"
      },
      {
        nombre: "Kendry Paez",
        calificacion: 73,
        imagen: "/imagenes/ecuador/kendry.jpeg"
      },
      {
        nombre: "Gonzalo Plata",
        calificacion: 77,
        imagen: "/imagenes/ecuador/gonzalo.jpg"
      },
      {
        nombre: "Enner Valencia",
        calificacion: 78,
        imagen: "/imagenes/ecuador/enner.jpg"
      },
      {
        nombre: "Joel Ordoñez",
        calificacion: 72,
        imagen: "/imagenes/ecuador/joel.jpg"
      }
    ],
    "Paraguay": [
      {
        nombre: "Roberto Fernández",
        calificacion: 73,
        imagen: "/imagenes/paraguay/roberto.jpg"
      },
      {
        nombre: "Juan Cáceres",
        calificacion: 74,
        imagen: "/imagenes/paraguay/juan.jpg"
      },
      {
        nombre: "Gustavo Gómez",
        calificacion: 81,
        imagen: "/imagenes/paraguay/gustavo.jpg"
      },
      {
        nombre: "Omar Alderete",
        calificacion: 78,
        imagen: "/imagenes/paraguay/omar.jpg"
      },
      {
        nombre: "Júnior Alonso",
        calificacion: 77,
        imagen: "/imagenes/paraguay/junior.jpg"
      },
      {
        nombre: "Andrés Cubas",
        calificacion: 75,
        imagen: "/imagenes/paraguay/andres.jpg"
      },
      {
        nombre: "Diego Gómez",
        calificacion: 78,
        imagen: "/imagenes/paraguay/diego.jpg"
      },
      {
        nombre: "Miguel Almirón",
        calificacion: 80,
        imagen: "/imagenes/paraguay/miguel.jpg"
      },
      {
        nombre: "Ramón Sosa",
        calificacion: 79,
        imagen: "/imagenes/paraguay/ramon.jpg"
      },
      {
        nombre: "Antonio Sanabria",
        calificacion: 76,
        imagen: "/imagenes/paraguay/antonio.jpg"
      },
      {
        nombre: "Ronaldo Martínez",
        calificacion: 72,
        imagen: "/imagenes/paraguay/ronaldo.jpg"
      }
    ],
    "Estados Unidos": [
      {
        nombre: "Matt Freese",
        calificacion: 76,
        imagen: "/imagenes/usa/matt.png"
      },
      {
        nombre: "Sergiño Dest",
        calificacion: 79,
        imagen: "/imagenes/usa/sergino.jpg"
      },
      {
        nombre: "Chris Richards",
        calificacion: 77,
        imagen: "/imagenes/usa/chris.png"
      },
      {
        nombre: "Tim Ream",
        calificacion: 72,
        imagen: "/imagenes/usa/tim.jpg"
      },
      {
        nombre: "Antonee Robinson",
        calificacion: 82,
        imagen: "/imagenes/usa/antonee.jpg"
      },
      {
        nombre: "Tyler Adams",
        calificacion: 83,
        imagen: "/imagenes/usa/tyler.jpg"
      },
      {
        nombre: "Weston McKennie",
        calificacion: 82,
        imagen: "/imagenes/usa/weston.jpg"
      },
      {
        nombre: "Malik Tillman",
        calificacion: 79,
        imagen: "/imagenes/usa/malik.jpg"
      },
      {
        nombre: "Timothy Weah",
        calificacion: 77,
        imagen: "/imagenes/usa/timothy.png"
      },
      {
        nombre: "Christian Pulisic",
        calificacion: 84,
        imagen: "/imagenes/usa/christian.png"
      },
      {
        nombre: "Folarin Balogun",
        calificacion: 77,
        imagen: "/imagenes/usa/folarin.png"
      }
    ],
    "Canada":[
      {
        nombre: "Dayne St. Clair",
        calificacion: 73,
        imagen: "/imagenes/canada/dayne.png" 
      },
      {
        nombre: "Alistair Johnston",
        calificacion: 78,
        imagen: "/imagenes/canada/alistair.png"
      },
      {
        nombre: "Möise Bombito",
        calificacion: 72,
        imagen: "/imagenes/canada/moise.png"
      },
      {
        nombre: "Derek Cornelius",
        calificacion: 72,
        imagen: "/imagenes/canada/derek.png"
      },
      {
        nombre: "Alphonso Davies",
        calificacion: 84,
        imagen: "/imagenes/canada/alphonso.png"
      },
      {
        nombre: "Stephen Eustáquio",
        calificacion: 78,
        imagen: "/imagenes/canada/stephen.png"
      },
      {
        nombre: "Ismaël Koné",
        calificacion: 74,
        imagen: "/imagenes/canada/ismael.png"
      },
      {
        nombre: "Tajon Buchanan",
        calificacion: 77,
        imagen: "/imagenes/canada/tajon.png"
      },
      {
        nombre: "Ali Ahmed",
        calificacion: 71,
        imagen: "/imagenes/canada/ali.png"
      },
      {
        nombre: "Jonathan David",
        calificacion: 84,
        imagen: "/imagenes/canada/jonathan.png"
      },
      {
        nombre: "Cyle Larin",
        calificacion: 77,
        imagen: "/imagenes/canada/cyle.png"
      }
    ],
    "Nueva Zelanda": [
      {
        nombre:"Max Crocombe",
        calificacion: 70,
        imagen: "/imagenes/nz/max.png"
      },
      {
        nombre:"Tyler Bindon",
        calificacion: 68,
        imagen: "/imagenes/nz/tyler.png"
      },
      {
        nombre:"Michael Boxall",
        calificacion:69,
        imagen: "/imagenes/nz/michael.png"
      },
      {
        nombre: "Finn Surman",
        calificacion: 68,
        imagen: "/imagenes/nz/finn.png"
      },
      {
        nombre: "Liberato Cacace",
        calificacion:73,
        imagen: "/imagenes/nz/liberato.png"
      },
      {
        nombre: "Joe Bell",
        calificacion: 74,
        imagen: "/imagenes/nz/joe.png"
      },
      {
        nombre: "Marko Stamenic",
        calificacion: 71,
        imagen: "/imagenes/nz/marko.png"
      },
      {
        nombre: "Sarpreet Singh",
        calificacion: 72,
        imagen: "/imagenes/nz/sarpreet.png"
      },
      {
        nombre:"Elijah Just",
        calificacion: 70,
        imagen: "/imagenes/nz/elijah.png"
      },
      {
        nombre:"Ben Waine",
        calificacion: 69,
        imagen: "/imagenes/nz/ben.png"
      },
      {
        nombre:"Chris Wood",
        calificacion: 82,
        imagen: "/imagenes/nz/chris.png"
      }

    ],
    "Iran": [
      {
        nombre:"Alireza Beiranvand",
        calificacion: 78,
        imagen: "/imagenes/iran/alireza.jpg"
      },
      {
        nombre:"Sadegh Moharrami",
        calificacion: 74,
        imagen: "/imagenes/iran/sadegh.jpg"
      },
      {
        nombre: "Morteza Pouraliganji",
        calificacion: 75,
        imagen: "/imagenes/iran/morteza.png"
      },
      {
        nombre: "Shoja Khalilzadeh",
        calificacion: 74,
        imagen: "/imagenes/iran/shoja.jpg"
      },
      {
        nombre: "Milad Mohammadi",
        calificacion: 72,
        imagen: "/imagenes/iran/milad.jpg"
      },
      {
        nombre: "Saeid Ezatolahi",
        calificacion: 74,
        imagen: "/imagenes/iran/saeid.jpg"
      },
      {
        nombre: "Saman Ghoddos",
        calificacion: 73,
        imagen: "/imagenes/iran/saman.png"
      },
      {
        nombre: "Alireza Jahanbakhsh",
        calificacion: 76,
        imagen: "/imagenes/iran/alireza2.png"
      },
      {
        nombre: "Mehdi Ghaedi",
        calificacion: 75,
        imagen: "/imagenes/iran/mehdi.jpg"
      },
      {
        nombre: "Sardar Azmoun",
        calificacion: 79,
        imagen: "/imagenes/iran/sardar.png"
      },
      {
        nombre: "Mehdi Taremi",
        calificacion: 78,
        imagen: "/imagenes/iran/mehdi2.png"
      }

    ],
    "Uzbekistan": [
      {
        nombre:"Utkir Yusupov",
        calificacion: 71,
        imagen: "/imagenes/uzbe/utkir.png"
      },
      {
        nombre: "Khojiakbar Alijonov",
        calificacion: 70, 
        imagen: "/imagenes/uzbe/khojiakbar.png"
      },
      {
        nombre: "Abdukodir Khusanov",
        calificacion: 77,
        imagen: "/imagenes/uzbe/abdukodir.png"
      },
      {
        nombre: "Rustam Ashurmatov",
        calificacion: 70,
        imagen: "/imagenes/uzbe/rustam.jpg"
      },
      {
        nombre: "Farrukh Sayfiev",
        calificacion:69,
        imagen: "/imagenes/uzbe/farrukh.png"
      },
      {
        nombre:"Otabek Shukurov",
        calificacion: 72,
        imagen: "/imagenes/uzbe/otabek.png"
      },
      {
        nombre: "Odiljon Hamrobekov",
        calificacion: 71,
        imagen: "/imagenes/uzbe/odiljon.jpg"
      },
      {
        nombre: "Abbosbek Fayzullaev",
        calificacion: 73,
        imagen: "/imagenes/uzbe/abbosbek.png"
      },
      {
        nombre: "Oston Urunov",
        calificacion: 72,
        imagen: "/imagenes/uzbe/oston.png"
      },
      {
        nombre: "Jaloliddin Masharipov",
        calificacion: 76,
        imagen: "/imagenes/uzbe/jaloliddin.png"
      },
      {
        nombre: "Eldor Shomurodov",
        calificacion: 74,
        imagen: "/imagenes/uzbe/eldor.png"
      }
      
    ],
    "Corea del sur": [
      {
        nombre:"Kim Seung-gyu",
        calificacion: 76,
        imagen: "/imagenes/coreasur/1.jpg"
      },
      {
        nombre: "Kim Moon-hwan",
        calificacion: 69,
        imagen: "/imagenes/coreasur/2.jpg"
      },
      {
        nombre: "Kim Min-jae",
        calificacion: 82,
        imagen: "/imagenes/coreasur/3.png"
      },
      {
        nombre: "Kim Young-gwon",
        calificacion: 75,
        imagen: "/imagenes/coreasur/4.png"
      },
      {
        nombre: "Lee Ki-je",
        calificacion: 71,
        imagen: "/imagenes/coreasur/5.png"
      },
      {
        nombre: "Jung Woo-young",
        calificacion: 65,
        imagen: "/imagenes/coreasur/6.png"
      },
      {
        nombre: "Hwang In-beom",
        calificacion: 78,
        imagen: "/imagenes/coreasur/7.png"
      },
      {
        nombre: "Lee Jae-sung",
        calificacion: 77,
        imagen: "/imagenes/coreasur/8.png"
      },
      {
        nombre: "Lee Kang-in",
        calificacion: 82,
        imagen: "/imagenes/coreasur/9.png"
      },
      {
        nombre: "Hwang Hee-chan",
        calificacion: 78,
        imagen: "/imagenes/coreasur/10.png"
      },
      {
        nombre: "Son Heung-min",
        calificacion: 87,
        imagen: "/imagenes/coreasur/11.png"
      }

    ],
    "Australia": [
      {
        nombre:"Mathew Ryan",
        calificacion: 77,
        imagen: "/imagenes/australia/1.png"
      },
      {
        nombre: "Nathaniel Atkinson",
        calificacion: 71,
        imagen: "/imagenes/australia/2.png"
      },
      {
        nombre: "Harry Souttar",
        calificacion: 75,
        imagen: "/imagenes/australia/3.png"
      },
      {
        nombre: "Kye Rowles",
        calificacion: 73,
        imagen: "/imagenes/australia/4.png"
      },
      {
        nombre: "Jordan Bos",
        calificacion: 74,
        imagen: "/imagenes/australia/5.png"
      },
      {
        nombre: "Jackson Irvine",
        calificacion: 75,
        imagen: "/imagenes/australia/6.png"
      },
      {
        nombre: "Connor Metcalfe",
        calificacion: 72,
        imagen: "/imagenes/australia/7.png"
      },
      {
        nombre: "Ajdin Hrustic",
        calificacion: 73,
        imagen: "/imagenes/australia/8.png"
      },
      {
        nombre: "Martin Boyle",
        calificacion: 71,
        imagen: "/imagenes/australia/9.png"
      },
      {
        nombre: "Mathew Leckie",
        calificacion: 72,
        imagen: "/imagenes/australia/10.png"
      },
      {
        nombre: "Mitchell Duke",
        calificacion: 70,
        imagen: "/imagenes/australia/11.png"
      }

    ],
    "Arabia Saudita": [
      {
        nombre:"Mohammed Al-Owais",
        calificacion: 75,
        imagen: "/imagenes/arabia/1.png"
      },
      {
        nombre: "Saud Abdulhamid",
        calificacion: 75,
        imagen: "/imagenes/arabia/2.png"
      },
      {
        nombre: "Hassan Tambakti",
        calificacion: 76,
        imagen: "/imagenes/arabia/3.png"
      },
      {
        nombre: "Ali Al-Bulaihi",
        calificacion: 73,
        imagen: "/imagenes/arabia/4.png"
      },
      {
        nombre: "Yasser Al-Shahrani",
        calificacion: 74,
        imagen: "/imagenes/arabia/5.png"
      },
      {
        nombre: "Abdullah Al-Khaibari",
        calificacion: 72,
        imagen: "/imagenes/arabia/6.png"
      },
      {
        nombre: "Mohamed Kanno",
        calificacion: 72,
        imagen: "/imagenes/arabia/7.png"
      },
      {
        nombre: "Salem Al-Dawsari",
        calificacion: 82,
        imagen: "/imagenes/arabia/8.png"
      },
      {
        nombre: "Abdulrahman Ghareeb",
        calificacion: 74,
        imagen: "/imagenes/arabia/9.png"
      },
      {
        nombre: "Saleh Al-Shehri",
        calificacion: 73,
        imagen: "/imagenes/arabia/10.png"
      },
      {
        nombre: "Firas Al-Buraikan",
        calificacion: 75,
        imagen: "/imagenes/arabia/11.png"
      }

    ],
    "Egipto": [
      {
        nombre:"Mohamed El Shenawy",
        calificacion: 79,
        imagen: "/imagenes/egipto/1.png"
      },
      {
        nombre:"Mohamed Hany",
        calificacion: 73,
        imagen: "/imagenes/egipto/2.png"
      },
      {
        nombre:"Ahmed Hegazy",
        calificacion: 76,
        imagen: "/imagenes/egipto/3.png"
      },
      {
        nombre:"Mohamed Abdelmonem",
        calificacion: 75,
        imagen: "/imagenes/egipto/4.png"
      },
      {
        nombre:"Ahmed Fatouh",
        calificacion: 74,
        imagen: "/imagenes/egipto/5.png"
      },
      {
        nombre:"Mohamed Elneny",
        calificacion: 76,
        imagen: "/imagenes/egipto/6.png"
      },
      {
        nombre:"Emam Ashour",
        calificacion: 75,
        imagen: "/imagenes/egipto/7.png"
      },
      {
        nombre:"Marwan Attia",
        calificacion: 73,
        imagen: "/imagenes/egipto/8.png"
      },
      {
        nombre:"Mohamed Salah",
        calificacion: 90,
        imagen: "/imagenes/egipto/9.png"
      },
      {
        nombre:"Mahmoud Hassan",
        calificacion: 77,
        imagen: "/imagenes/egipto/10.png"
      },
      {
        nombre:"Mostafa Mohamed",
        calificacion: 77,
        imagen: "/imagenes/egipto/11.png"
      }
    ],
    "Cabo verde": [
      {
        nombre:"Vozinha Diaz",
        calificacion: 70,
        imagen: "/imagenes/cabo/1.png"
      },
      {
        nombre:"Willy Semedo",
        calificacion: 71,
        imagen: "/imagenes/cabo/2.png"
      },
      {
        nombre:"Logan Costa",
        calificacion: 74,
        imagen: "/imagenes/cabo/3.png"
      },
      {
        nombre:"Roberto Lopes",
        calificacion: 69,
        imagen: "/imagenes/cabo/4.png"
      },
      {
        nombre:"João Paulo",
        calificacion: 70,
        imagen: "/imagenes/cabo/5.png"
      },
      {
        nombre:"Kevin Pina",
        calificacion: 72,
        imagen: "/imagenes/cabo/6.png"
      },
      {
        nombre:"Jamiro Monteiro",
        calificacion: 74,
        imagen: "/imagenes/cabo/7.png"
      },
      {
        nombre:"Deroy Duarte",
        calificacion: 71,
        imagen: "/imagenes/cabo/8.png"
      },
      {
        nombre:"Ryan Mendes",
        calificacion: 73,
        imagen: "/imagenes/cabo/9.png"
      },
      {
        nombre:"Garry Rodrigues",
        calificacion: 74,
        imagen: "/imagenes/cabo/10.png"
      },
      {
        nombre:"Bebé Correia",
        calificacion: 73,
        imagen: "/imagenes/cabo/11.png"
      }
    ],
    "Tunez": [
      {
        nombre:"Aymen Dahmen",
        calificacion: 74,
        imagen: "/imagenes/tunez/1.png"
      },
      {
        nombre:"Wajdi Kechrida",
        calificacion: 72,
        imagen: "/imagenes/tunez/2.png"
      },
      {
        nombre:"Montassar Talbi",
        calificacion: 77,
        imagen: "/imagenes/tunez/3.png"
      },
      {
        nombre:"Yassine Meriah",
        calificacion: 73,
        imagen: "/imagenes/tunez/4.png"
      },
      {
        nombre:"Ali Abdi",
        calificacion: 74,
        imagen: "/imagenes/tunez/5.png"
      },
      {
        nombre:"Ellyes Skhiri",
        calificacion: 82,
        imagen: "/imagenes/tunez/6.png"
      },
      {
        nombre:"Aïssa Laïdouni",
        calificacion: 78,
        imagen: "/imagenes/tunez/7.png"
      },
      {
        nombre:"Anis Ben Slimane",
        calificacion: 73,
        imagen: "/imagenes/tunez/8.png"
      },
      {
        nombre:"Elias Achouri",
        calificacion: 74,
        imagen: "/imagenes/tunez/9.png"
      },
      {
        nombre:"Naïm Sliti",
        calificacion: 75,
        imagen: "/imagenes/tunez/10.png"
      },
      {
        nombre:"Seifeddine Jaziri",
        calificacion: 71,
        imagen: "/imagenes/tunez/11.png"
      }
    ],
    "Argelia": [
      {
        nombre:"Anthony Mandrea",
        calificacion: 74,
        imagen: "/imagenes/argelia/1.png"
      },
      {
        nombre: "Youcef Atal",
        calificacion: 76,
        imagen: "/imagenes/argelia/2.png"
      },
      {
        nombre: "Ramy Bensebaini",
        calificacion: 79,
        imagen: "/imagenes/argelia/3.png"
      },
      {
        nombre: "Aïssa Mandi",
        calificacion: 75,
        imagen: "/imagenes/argelia/4.png"
      },
      {
        nombre: "Rayan Aït-Nouri",
        calificacion: 78,
        imagen: "/imagenes/argelia/5.png"
      },
      {
        nombre: "Nabil Bentaleb",
        calificacion: 75,
        imagen: "/imagenes/argelia/6.png"
      },
      {
        nombre: "Ismaël Bennacer", 
        calificacion: 83,
        imagen: "/imagenes/argelia/7.png"
      },
      {
        nombre: "Houssem Aouar",
        calificacion: 78,
        imagen: "/imagenes/argelia/8.png"
      },
      {
        nombre: "Riyad Mahrez",
        calificacion: 85,
        imagen: "/imagenes/argelia/9.png"
      },
      {
        nombre: "Saïd Benrahma",
        calificacion: 78,
        imagen: "/imagenes/argelia/10.png"
      },
      {
        nombre: "Islam Slimani",
        calificacion: 76,
        imagen: "/imagenes/argelia/11.png"
      }
    ]
  };
  // ---------------------------------------------

  // --- Seleccionar elementos del DOM ---
  const sceneEl = document.querySelector('a-scene');
  const countryUi = document.querySelector('#nombre-pais-ui');
  const countryNameEl = document.querySelector('#nombre-pais');
  const playerCard = document.querySelector('#player-card');
  const playerNameEl = document.querySelector('#player-name');
  const playerImageEl = document.querySelector('#player-image');
  const playerRatingEl = document.querySelector('#player-rating');
  // ----------------------------------------------------

  // --- Verificar que todos los elementos existen ---
  if (!sceneEl || !countryUi || !countryNameEl || !playerCard) { // <-- Añadimos playerCard a la verificación
    console.error('❌ ¡ERROR! Falta uno o más elementos esenciales en el HTML.');
    return;
  }
  console.log('✅ Elementos HTML encontrados correctamente.');

 // --- FUNCIÓN AUXILIAR PARA MOSTRAR UN JUGADOR ---

  const mostrarJugador = (jugador) => {
    if (!jugador) return;
    
    playerNameEl.textContent = jugador.nombre;
    playerImageEl.setAttribute('src', jugador.imagen);
    
    let estrellasHTML = '';
    for (let i = 0; i < 5; i++) {
      estrellasHTML += i < jugador.calificacion? '★' : '☆';
    }
    playerRatingEl.innerHTML = estrellasHTML;
  };

  sceneEl.addEventListener('targetFound', event => {
    const targetIndex = event.target.components['mindar-image-target'].data.targetIndex;

    if (typeof targetIndex!== 'number') return;

    const nombreDelPais = nombresPaises[targetIndex];
    console.log(`👍 Target válido encontrado. Índice: ${targetIndex}, País: ${nombreDelPais}`);
    
    countryNameEl.textContent = nombreDelPais;
    countryUi.classList.add('show');

    // ==================================================================
    // AQUÍ ESTÁ LA CORRECCIÓN PRINCIPAL: LÓGICA DEL CARRUSEL
    // ==================================================================
    
    // 1. Detener cualquier carrusel que se estuviera ejecutando antes.
    clearInterval(carruselIntervalo);

    const jugadores = jugadoresPorPais[nombreDelPais];
    if (jugadores && jugadores.length > 0) {
      // 2. Mostrar la tarjeta y el primer jugador inmediatamente.
      jugadorActualIndex = 0;
      mostrarJugador(jugadores[jugadorActualIndex]);
      playerCard.classList.add('show');

      // 3. Si hay más de un jugador, iniciar el intervalo para rotarlos.
      if (jugadores.length > 1) {
        carruselIntervalo = setInterval(() => {
          // Avanza al siguiente jugador. El '%' hace que vuelva al inicio (0)
          // cuando llega al final del arreglo, creando un bucle.
          jugadorActualIndex = (jugadorActualIndex + 1) % jugadores.length;
          mostrarJugador(jugadores[jugadorActualIndex]);
          console.log(`Mostrando jugador: ${jugadores[jugadorActualIndex].nombre}`);
        }, TIEMPO_POR_JUGADOR);
      }
    } else {
      // Si el país no tiene jugadores, nos aseguramos de que la tarjeta esté oculta.
      playerCard.classList.remove('show');
    }
  });

  // sceneEl.addEventListener('targetLost', event => {
  //   console.log('💨 Target perdido. Ocultando UI.');
  //   countryUi.classList.remove('show');
    
  //   // --- CÓDIGO NUEVO: Ocultar también la tarjeta ---
  //   playerCard.classList.remove('show');
  //   // ---------------------------------------------
  // });

  sceneEl.addEventListener('targetLost', event => {
    console.log('💨 Target perdido. Ocultando UI y deteniendo carrusel.');
    countryUi.classList.remove('show');
    playerCard.classList.remove('show');
    
    // --- ¡MUY IMPORTANTE! DETENER EL CARRUSEL ---
    // Esto detiene el temporizador para que no siga ejecutándose en segundo plano.
    clearInterval(carruselIntervalo);
  });
  
  // ---------------------------------------------
  // MODAL DE FILTROS
  // ---------------------------------------------

  // 1. Seleccionar los nuevos elementos
  const filtersBtn = document.querySelector('#filters-btn');
  const filtersModal = document.querySelector('#filters-modal');
  const closeModalBtn = document.querySelector('#close-modal-btn');
  const filterOptions = document.querySelectorAll('.filter-option');
  const aScene = document.querySelector('a-scene');

  // 2. Abrir el modal
  filtersBtn.addEventListener('click', () => {
    filtersModal.classList.add('modal-visible');
    filtersModal.classList.remove('modal-hidden'); // Opcional, dependiendo del CSS
  });

  // 3. Cerrar el modal
  const closeModal = () => {
    filtersModal.classList.remove('modal-visible');
    filtersModal.classList.add('modal-hidden'); // Opcional
  };

  closeModalBtn.addEventListener('click', closeModal);
  filtersModal.addEventListener('click', (event) => {
    // Cierra el modal solo si se hace clic en el fondo (overlay)
    if (event.target === filtersModal) {
      closeModal();
    }
  });

  // 4. Aplicar un filtro
  filterOptions.forEach(button => {
    button.addEventListener('click', () => {
      const filterValue = button.dataset.filter;
      console.log(`Aplicando filtro: ${filterValue}`);
      
      // Aplicamos el filtro directamente al canvas de A-Frame
      aScene.canvas.style.filter = filterValue;
      
      closeModal(); // Cierra el modal después de seleccionar un filtro
    });
  });
});