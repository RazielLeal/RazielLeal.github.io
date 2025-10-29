
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
        imagen: "/mexico/luis-malagon.jpg" 
      },
      {
        nombre: "Jorge Sánchez",
        calificacion: 4,
        imagen: "/mexico/jorge-sanchez.jpg"
      },
      {
        nombre: "Cesar Montes",
        calificacion: 4,
        imagen: "/mexico/cesar-montes.jpg"
      },
      {
        nombre: "Johan Vásquez",
        calificacion: 4,
        imagen: "/mexico/Johan-Vasquez.jpeg"
      },
      {
        nombre: "Jesús Gallardo",
        calificacion: 4,
        imagen: "/mexico/Jesus-Gallardo.jpg"
      },
      {
        nombre: "Edson Álvarez",
        calificacion: 5,
        imagen: "/mexico/Edson-Alvarez.jpg"        
      },
      {
        nombre:"Orbelín Pineda",
        calificacion: 4,
        imagen: "/mexico/Orbelin-Pineda.jpg"
      },
      {
        nombre: "Luis Chávez",
        calificacion: 4,
        imagen: "/mexico/Luis-Chavez.jpg"
      },
      {
        nombre: "Hirving Lozano",
        calificacion: 4,
        imagen: "/mexico/Hirving-Lozano.jpg"
      },
      {
        nombre: "Alexis Vega",
        calificacion: 4,
        imagen: "/mexico/Alexis-Vega.jpg"
      },
      {
        nombre: "Santiago Giménez",
        calificacion: 5,
        imagen: "/mexico/gimenez.jpeg"
      }    
    ],
    "Argentina": [
      {
        nombre: "Emiliano Martínez",
        calificacion: 4,
        imagen: "/argentina/emiliano-martinez.jpeg" 
      },
      {
        nombre: "Nahuel Molina",
        calificacion: 4,
        imagen: "/argentina/Nahuel-Molina.jpg"
      },
      {
        nombre: "Cristian Romero",
        calificacion: 4,
        imagen: "/argentina/Cristian-Romero.png"
      },
      {
        nombre: "Lisandro Martínez",
        calificacion: 4,
        imagen: "/argentina/Lisandro-Martinez.jpg"
      },
      {
        nombre: "Nicolás Tagliafico",
        calificacion: 4,
        imagen: "/argentina/tagliafico.jpg"
      },
      {
        nombre: "Rodrigo De Paul",
        calificacion: 5,
        imagen: "/argentina/depaul.jpg"        
      },
      {
        nombre:"Enzo Fernández",
        calificacion: 4,
        imagen: "/argentina/enzo.jpg"
      },
      {
        nombre: "Alexis Mac Allister",
        calificacion: 4,
        imagen: "/argentina/alexis-mac-allister.jpg"
      },
      {
        nombre: "Lionel Messi",
        calificacion: 4,
        imagen: "/argentina/messi.jpg"
      },
      {
        nombre: "Lautaro Martínez",
        calificacion: 4,
        imagen: "/argentina/lautaro.jpg"
      },
      {
        nombre: "Julián Álvarez",
        calificacion: 5,
        imagen: "/argentina/julian.jpg"
      }    
    ],
    "Brasil": [
      {
        nombre: "Ederson moraes",
        calificacion: 88,
        imagen: ""
      },
      {
        nombre: "wesley França",
        calificacion: 76,
        imagen: ""
      },
      {
        nombre: "Eder Militão",
        calificacion: 86,
        imagen: ""
      },
      {
        nombre: "Gabriel Magalhães",
        calificacion: 87,
        imagen: ""
      },
      {
        nombre: "Caio Henrique",
        calificacion: 77,
        imagen: ""
      },
      {
        nombre: "Bruno Guimarães",
        calificacion: 86,
        imagen: ""
      },
      {
        nombre: "Joelinton Cássio",
        calificacion: 82,
        imagen: ""
      },
      {
        nombre: "Lucas Paquetá",
        calificacion: 82,
        imagen: ""
      },
      {
        nombre: "Rodrygo Goes",
        calificacion: 86,
        imagen: ""
      },
      {
        nombre: "Vinicius Junior",
        calificacion: 90,
        imagen: ""
      },
      {
        nombre: "Richarlison de Andrade",
        calificacion: 78,
        imagen: ""
      }
    ],
    "Uruguay": [
      {
        nombre: "Santiago Mele",
        calificacion: 77,
        imagen: ""
      },
      {
        nombre: "NahitanNández",
        calificacion: 76,
        imagen: ""
      },
      {
        nombre: "Ronald Araújo",
        calificacion: 83,
        imagen: ""
      },
      {
        nombre: "Sebastián Cáceres",
        calificacion: 76,
        imagen: ""
      },
      {
        nombre: "Matías Viña",
        calificacion: 78,
        imagen: ""
      },
      {
        nombre: "Manuel Ugarte",
        calificacion: 79,
        imagen: ""
      },
      {
        nombre: "Federico Valverde",
        calificacion: 89,
        imagen: ""
      },
      {
        nombre: "Rodrigo Bentancur",
        calificacion: 80,
        imagen: ""
      },
      {
        nombre: "Brian Rodríguez",
        calificacion: 76,
        imagen: ""
      },
      {
        nombre: "Cristian Olivera",
        calificacion: 74,
        imagen: ""
      },
      {
        nombre: "Darwin Núñez",
        calificacion: 79,
        imagen: ""
      }
    ],
    "Ecuador": [
      {
        nombre: "Hernán Galíndez",
        calificacion: 74,
        imagen: ""
      },
      {
        nombre: "Angelo Preciado",
        calificacion: 75,
        imagen: ""
      },
      {
        nombre: "William Pacho",
        calificacion: 80,
        imagen: ""
      },
      {
        nombre: "Piero Hincapié",
        calificacion: 81,
        imagen: ""
      },
      {
        nombre: "Pervis Estupiñan",
        calificacion: 80,
        imagen: ""
      },
      {
        nombre: "Alan Franco",
        calificacion: 75,
        imagen: ""
      },
      {
        nombre: "Moisés Caicedo",
        calificacion: 87,
        imagen: ""
      },
      {
        nombre: "Kendry Paez",
        calificacion: 73,
        imagen: ""
      },
      {
        nombre: "Gonzalo PLata",
        calificacion: 77,
        imagen: ""
      },
      {
        nombre: "Enner Valencia",
        calificacion: 78,
        imagen: ""
      },
      {
        nombre: "Joel Ordoñez",
        calificacion: 72,
        imagen: ""
      }
    ],
    "Paraguay": [
      {
        nombre: "Roberto Fernández",
        calificacion: 73,
        imagen: ""
      },
      {
        nombre: "Juan Cáceres",
        calificacion: 74,
        imagen: ""
      },
      {
        nombre: "Gustavo Gómez",
        calificacion: 81,
        imagen: ""
      },
      {
        nombre: "Omar Alderete",
        calificacion: 78,
        imagen: ""
      },
      {
        nombre: "Júnior Alonso",
        calificacion: 77,
        imagen: ""
      },
      {
        nombre: "Andrés Cubas",
        calificacion: 75,
        imagen: ""
      },
      {
        nombre: "Diego Gómez",
        calificacion: 78,
        imagen: ""
      },
      {
        nombre: "Miguel Almirón",
        calificacion: 80,
        imagen: ""
      },
      {
        nombre: "Ramón Sosa",
        calificacion: 79,
        imagen: ""
      },
      {
        nombre: "Antonio Sanabria",
        calificacion: 76,
        imagen: ""
      },
      {
        nombre: "Ronaldo Martínez",
        calificacion: 72,
        imagen: ""
      }
    ],
    "Estados Unidos": [
      {
        nombre: "Matt Freese",
        calificacion: 76,
        imagen: ""
      },
      {
        nombre: "Sergiño Dest",
        calificacion: 79,
        imagen: ""
      },
      {
        nombre: "Chris Richards",
        calificacion: 77,
        imagen: ""
      },
      {
        nombre: "Tim Ream",
        calificacion: 72,
        imagen: ""
      },
      {
        nombre: "Antonee Robinson",
        calificacion: 82,
        imagen: ""
      },
      {
        nombre: "Tyler Adams",
        calificacion: 83,
        imagen: ""
      },
      {
        nombre: "Weston McKennie",
        calificacion: 82,
        imagen: ""
      },
      {
        nombre: "Malik Tillman",
        calificacion: 79,
        imagen: ""
      },
      {
        nombre: "Timothy Weah",
        calificacion: 77,
        imagen: ""
      },
      {
        nombre: "Christian Pulisic",
        calificacion: 84,
        imagen: ""
      },
      {
        nombre: "Folarin Balogun",
        calificacion: 77,
        imagen: ""
      }
    ],
    "Canada":[
      {
        nombre: "Dayne St. Clair",
        calificacion: 73,
        imagen: "" 
      },
      {
        nombre: "Alistair Johnston",
        calificacion: 78,
        imagen: "" 
      },
      {
        nombre: "Möise Bombito",
        calificacion: 72,
        imagen: "" 
      },
      {
        nombre: "Derek Cornelius",
        calificacion: 72,
        imagen: "" 
      },
      {
        nombre: "Alphonso Davies",
        calificacion: 84,
        imagen: "" 
      },
      {
        nombre: "Stephen Eustáquio",
        calificacion: 78,
        imagen: "" 
      },
      {
        nombre: "Ismaël Koné",
        calificacion: 74,
        imagen: "" 
      },
      {
        nombre: "Tajon Buchanan",
        calificacion: 77,
        imagen: "" 
      },
      {
        nombre: "Ali Ahmed",
        calificacion: 71,
        imagen: "" 
      },
      {
        nombre: "Jonathan David",
        calificacion: 84,
        imagen: "" 
      },
      {
        nombre: "Cyle Larin",
        calificacion: 77,
        imagen: "" 
      }
    ],
    "Nueva Zelanda": [
      {
        nombre:"Max Crocombe",
        calificacion: 70,
        imagen: ""
      },
      {
        nombre:"Tyler Bindon",
        calificacion: 68,
        imagen: ""
      },
      {
        nombre:"Michael Boxall",
        calificacion:69,
        imagen: ""
      },
      {
        nombre: "Finn Surman",
        calificacion: 68,
        imagen: ""
      },
      {
        nombre: "Liberato Cacace",
        calificacion:73,
        imagen: ""
      },
      {
        nombre: "Joe Bell",
        calificacion: 74,
        imagen: ""
      },
      {
        nombre: "Marko Stamenic",
        calificacion: 71,
        imagen: ""
      },
      {
        nombre: "Sarpreet Singh",
        calificacion: 72,
        imagen: ""
      },
      {
        nombre:"Elijah Just",
        calificacion: 70,
        imagen: ""
      },
      {
        nombre:"Ben Waine",
        calificacion: 69,
        imagen: ""
      },
      {
        nombre:"Chris Wood",
        calificacion: 82,
        imagen: ""
      }

    ],
    "Iran": [
      {
        nombre:"Alireza Beiranvand",
        calificacion: 78,
        imagen: ""
      },
      {
        nombre:"Sadegh Moharrami",
        calificacion: 74,
        imagen: ""
      },
      {
        nombre: "Morteza Pouraliganji",
        calificacion: 75,
        imagen: ""
      },
      {
        nombre: "Shoja Khalilzadeh",
        calificacion: 74,
        imagen: ""
      },
      {
        nombre: "Milad Mohammadi",
        calificacion: 72,
        imagen: ""
      },
      {
        nombre: "Saeid Ezatolahi",
        calificacion: 74,
        imagen: ""
      },
      {
        nombre: "Saman Ghoddos",
        calificacion: 73,
        imagen: ""
      },
      {
        nombre: "Alireza Jahanbakhsh",
        calificacion: 76,
        imagen: ""
      },
      {
        nombre: "Mehdi Ghaedi",
        calificacion: 75,
        imagen: ""
      },
      {
        nombre: "Sardar Azmoun",
        calificacion: 79,
        imagen: ""
      },
      {
        nombre: "Mehdi Taremi",
        calificacion: 78,
        imagen: ""
      }

    ],
    "Uzbekistan": [
      {
        nombre:"Utkir Yusupov",
        calificacion: 71,
        imagen: ""
      },
      {
        nombre: "Khojiakbar Alijonov",
        calificacion: 70, 
        imagen: ""
      },
      {
        nombre: "Abdukodir Khusanov",
        calificacion: 77,
        imagen: ""
      },
      {
        nombre: "Rustam Ashurmatov",
        calificacion: 70,
        imagen: ""
      },
      {
        nombre: "Farrukh SayFiev",
        calificacion:69,
        imagen: ""
      },
      {
        nombre:"Otabek Shukurov",
        calificacion: 72,
        imagen: ""
      },
      {
        nombre: "Odiljon Hamrobekov",
        calificacion: 71,
        imagen: ""
      },
      {
        nombre: "Abbosbek Fayzullaev",
        calificacion: 73,
        imagen: ""
      },
      {
        nombre: "Oston Urunov",
        calificacion: 72,
        imagen: ""
      },
      {
        nombre: "Jaloliddin Masharipov",
        calificacion: 76,
        imagen: ""
      },
      {
        nombre: "Eldor Shomurodov",
        calificacion: 74,
        imagen: ""
      }
      
    ],
    "Corea del sur": [
      {
        nombre:"Kim Seung-gyu",
        calificacion: 76,
        imagen: ""
      },
      {
        nombre: "Kim Moon-hwan",
        calificacion: 69,
        imagen: ""
      },
      {
        nombre: "Kim Min-jae",
        calificacion: 82,
        imagen: ""
      },
      {
        nombre: "Kim Young-gwon",
        calificacion: 75,
        imagen: ""
      },
      {
        nombre: "Lee Ki-je",
        calificacion: 71,
        imagen: ""
      },
      {
        nombre: "Jung Woo-young",
        calificacion: 65,
        imagen: ""
      },
      {
        nombre: "Hwang In-beom",
        calificacion: 78,
        imagen: ""
      },
      {
        nombre: "Lee Jae-sung",
        calificacion: 77,
        imagen: ""
      },
      {
        nombre: "Lee Kang-in",
        calificacion: 82,
        imagen: ""
      },
      {
        nombre: "Hwang Hee-chan",
        calificacion: 78,
        imagen: ""
      },
      {
        nombre: "Son Heung-min",
        calificacion: 87,
        imagen: ""
      }

    ],
    "Australia": [
      {
        nombre:"Mathew Ryan",
        calificacion: 77,
        imagen: ""
      },
      {
        nombre: "Nathaniel Atkinson",
        calificacion: 71,
        imagen: ""
      },
      {
        nombre: "Harry Souttar",
        calificacion: 75,
        imagen: ""
      },
      {
        nombre: "Kye Rowles",
        calificacion: 73,
        imagen: ""
      },
      {
        nombre: "Jordan Bos",
        calificacion: 74,
        imagen: ""
      },
      {
        nombre: "Jackson Irvine",
        calificacion: 75,
        imagen: ""
      },
      {
        nombre: "Connor Metcalfe",
        calificacion: 72,
        imagen: ""
      },
      {
        nombre: "Ajdin Hrustic",
        calificacion: 73,
        imagen: ""
      },
      {
        nombre: "Martin Boyle",
        calificacion: 71,
        imagen: ""
      },
      {
        nombre: "Matthew Leckie",
        calificacion: 72,
        imagen: ""
      },
      {
        nombre: "Mitchell Duke",
        calificacion: 70,
        imagen: ""
      }

    ],
    "Arabia Saudita": [
      {
        nombre:"Mohammed Al-Owais",
        calificacion: 75,
        imagen: ""
      },
      {
        nombre: "Saud Abdulhamid",
        calificacion: 75,
        imagen: ""
      },
      {
        nombre: "Hassan Tambakti",
        calificacion: 76,
        imagen: ""
      },
      {
        nombre: "Ali Al-Bulaihi",
        calificacion: 73,
        imagen: ""
      },
      {
        nombre: "Yasser Al-Shahrani",
        calificacion: 74,
        imagen: ""
      },
      {
        nombre: "Abdullah Al-Khaibari",
        calificacion: 72,
        imagen: ""
      },
      {
        nombre: "Mohammed Kanno",
        calificacion: 72,
        imagen: ""
      },
      {
        nombre: "Salem Al-Dawsari",
        calificacion: 82,
        imagen: ""
      },
      {
        nombre: "Abdulrahman Ghareeb",
        calificacion: 74,
        imagen: ""
      },
      {
        nombre: "Saleh Al-Shehri",
        calificacion: 73,
        imagen: ""
      },
      {
        nombre: "Firas Al-Buraikan",
        calificacion: 75,
        imagen: ""
      }

    ],
    "Egipto": [
      {
        nombre:"Mohamed El Shenawy",
        calificacion: 79,
        imagen: ""
      },
      {
        nombre:"Mohamed Hany",
        calificacion: 73,
        imagen: ""
      },
      {
        nombre:"Ahmed Hegazi",
        calificacion: 76,
        imagen: ""
      },
      {
        nombre:"Mohamed Abdelmonem",
        calificacion: 75,
        imagen: ""
      },
      {
        nombre:"Ahmed Fatouh",
        calificacion: 74,
        imagen: ""
      },
      {
        nombre:"Mohamed Elneny",
        calificacion: 76,
        imagen: ""
      },
      {
        nombre:"Emam Ashour",
        calificacion: 75,
        imagen: ""
      },
      {
        nombre:"Marwan Attia",
        calificacion: 73,
        imagen: ""
      },
      {
        nombre:"Mohamed Salah",
        calificacion: 90,
        imagen: ""
      },
      {
        nombre:"Mahmoud Hassan",
        calificacion: 77,
        imagen: ""
      },
      {
        nombre:"Mostafa Mohamed",
        calificacion: 77,
        imagen: ""
      }
    ],
    "Cabo verde": [
      {
        nombre:"Vozinha Dias",
        calificacion: 70,
        imagen: ""
      },
      {
        nombre:"Willy Semedo",
        calificacion: 71,
        imagen: ""
      },
      {
        nombre:"Logan Costa",
        calificacion: 74,
        imagen: ""
      },
      {
        nombre:"Roberto Lopes",
        calificacion: 69,
        imagen: ""
      },
      {
        nombre:"João Paulo",
        calificacion: 70,
        imagen: ""
      },
      {
        nombre:"Kevin Pina",
        calificacion: 72,
        imagen: ""
      },
      {
        nombre:"Jamiro Monteiro",
        calificacion: 74,
        imagen: ""
      },
      {
        nombre:"Deroy Duarte",
        calificacion: 71,
        imagen: ""
      },
      {
        nombre:"Ryan Mendes",
        calificacion: 73,
        imagen: ""
      },
      {
        nombre:"Garry Rodrigues",
        calificacion: 74,
        imagen: ""
      },
      {
        nombre:"Bebé Correia",
        calificacion: 73,
        imagen: ""
      }
    ],
    "Tunez": [
      {
        nombre:"Aymen Dahmen",
        calificacion: 74,
        imagen: ""
      },
      {
        nombre:"Wajdi Kechrida",
        calificacion: 72,
        imagen: ""
      },
      {
        nombre:"Montassar Talbi",
        calificacion: 77,
        imagen: ""
      },
      {
        nombre:"Yassine Meriah",
        calificacion: 73,
        imagen: ""
      },
      {
        nombre:"Ali Abdi",
        calificacion: 74,
        imagen: ""
      },
      {
        nombre:"Ellyes Skhiri",
        calificacion: 82,
        imagen: ""
      },
      {
        nombre:"Aïssa Laïdouni",
        calificacion: 78,
        imagen: ""
      },
      {
        nombre:"Anis Ben Slimane",
        calificacion: 73,
        imagen: ""
      },
      {
        nombre:"Elias Achouri",
        calificacion: 74,
        imagen: ""
      },
      {
        nombre:"Naïm Sliti",
        calificacion: 75,
        imagen: ""
      },
      {
        nombre:"Seifeddine Jaziri",
        calificacion: 71,
        imagen: ""
      }
    ],
    "Argelia": [
      {
        nombre:"Anthony Mandrea",
        calificacion: 74,
        imagen: ""
      },
      {
        nombre: "Youcef Atal",
        calificacion: 76,
        imagen: ""
      },
      {
        nombre: "Ramy Bensebaini",
        calificacion: 79,
        imagen: ""
      },
      {
        nombre: "Aïssa Mandi",
        calificacion: 75,
        imagen: ""
      },
      {
        nombre: "Rayan Aït-Nouri",
        calificacion: 78,
        imagen: ""
      },
      {
        nombre: "Nabil Bentaleb",
        calificacion: 75,
        imagen: ""
      },
      {
        nombre: "Ismaël Bennacer", 
        calificacion: 83,
        imagen: ""
      },
      {
        nombre: "Houssem Aouar",
        calificacion: 78,
        imagen: ""
      },
      {
        nombre: "Riyad Mahrez",
        calificacion: 85,
        imagen: ""
      },
      {
        nombre: "Saïd Benrahma",
        calificacion: 78,
        imagen: ""
      },
      {
        nombre: "Islam Slimani",
        calificacion: 76,
        imagen: ""
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