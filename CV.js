const hombre = "male"

const obtenerPersona = async() => {
        let response = await fetch('https://randomuser.me/api/?format=json');
        return response.json();
      };
      
      obtenerPersona().then(({
        results
      }) => {
        const [user] = results;
        document.getElementById('NOMBRE1').innerHTML = "Nombre: "+user.name.first;
        document.getElementById("APELLIDO1").innerHTML = "Apellido: "+user.name.last;
        document.getElementById("EDAD1").innerHTML = "Edad: "+user.dob.age;
        document.getElementById("IMAGEN1").src = user.picture.large

    if ( user.gender == hombre) {

            document.getElementById("GENERO1").innerHTML = "Genero: Hombre"
            document.getElementById("PRESENTACION1").innerHTML = "Soy un profesional con amplia experiencia en finanzas, destacado por mi habilidad en análisis de datos y toma de decisiones estratégicas. Soy un líder sólido y comunicador efectivo, que inspira a mi equipo a trabajar en colaboración y a mantener una cultura de excelencia. Soy un pensador crítico y proactivo, que soluciona problemas eficientemente. Mi dedicación y compromiso con mi trabajo me convierten en una excelente adición a cualquier equipo de finanzas.";


          } else {

            document.getElementById("GENERO1").innerHTML = "Genero: Mujer"
            document.getElementById("PRESENTACION1").innerHTML = "Soy una profesional altamente capacitada y motivada en publicidad y marketing. Me apasiona la creatividad y la comunicación, y disfruto ideando estrategias publicitarias innovadoras y efectivas. Soy una líder inspiradora con ética laboral impecable y compromiso con la excelencia, lo que me convierte en una excelente adición a cualquier equipo de trabajo.";
            
          }

        
    document.getElementById("CONTACTO1").addEventListener("click", function () {

        if (document.getElementById("CONTACTO1").innerHTML == "Numero: ") {
            this.innerHTML = "Numero: "+user.phone;
        } else {
            this.innerHTML = "Numero: ";
        }
            })
          

    document.getElementById("CONTACTO2").addEventListener("click", function () {
        if (document.getElementById("CONTACTO2").innerHTML == "Email: ") {
            this.innerHTML = "Email: "+user.email;
        } else {
            this.innerHTML = "Email: ";
        }
          })
          
    document.getElementById("CONTACTO3").addEventListener("click", function () {
            if (document.getElementById("CONTACTO3").innerHTML == "Direccion: ") {
                this.innerHTML = "Direccion: "+user.location.street.name;
            } else {
                this.innerHTML = "Direccion: ";
            }
              })

    document.getElementById("recipient-name").value = user.email


        
      }) 

        