const arrayeventos = [
    {
      id : "1",
      imagen: "images/kurt.png",
      description: "Reviven a Kurt Cobain y Nirvana vuelve a la Argentina",
      date: "Primavera 2023",
      price : "8500"
    },
    {
      id : 2,
      imagen: "images/dillom.png",
      description: "Dillom destrozará el Movistar Arena con misiles Exocet",
      date: "Primavera 2023",
      price : "85600"
    },
    {
      id : 3,
      imagen: "images/mona.png",
      description: "La Mona Gimenez toca en las Islas Malvinas",
      date: "Primavera 2023",
      price : "80500"
    },
    {
      id : 4,
      imagen: "images/futbol.png",
      description: "Lanús y Banfield se disputan el campeonato cerradura",
      date: "Primavera 2023",
      price : "82500"
    },
    {
      id : 5,
      imagen: "images/moria.png",
      description: "Moria Casan presenta: Terminator 2 llega al teatro",
      date: "Primavera 2023",
      price : "84800"
    }
  ]





const eventoSeleccionado = JSON.parse(localStorage.getItem('eventoSeleccionado')); 
const cantidadGuardada = parseInt(localStorage.getItem('cantidadGuardada')) || 1;

