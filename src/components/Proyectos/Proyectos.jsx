import { useState } from "react";
import "./Proyectos.css";

// Muestra la imagen del proyecto; si no existe o falla, muestra un recuadro </>
const ImagenProyecto = ({ src, alt }) => {
  const [fallo, setFallo] = useState(false);

  if (!src || fallo) {
    return <div className="proyecto-placeholder">{"</>"}</div>;
  }

  return <img src={src} alt={alt} onError={() => setFallo(true)} />;
};

const Proyectos = () => {
  // publicar: true  -> la tarjeta se muestra en el portafolio
  // publicar: false -> espacio reservado (no se muestra hasta completarlo)
  // imagen: ruta en /public/proyectos; si falta el archivo se muestra un recuadro </>
  // linkDemo / linkCodigo: "" -> el botón correspondiente no aparece
  const proyectosData = [
    {
      id: 1,
      publicar: true,
      imagen: "/proyectos/appescuela.png",
      titulo: "Directorio de Alumnos - appEscuela",
      descripcion:
        "Aplicación en React con tarjetas de alumnos reutilizables (props), cambio de estado con useState y contador interactivo.",
      tecnologias: ["React", "Vite", "Bootstrap", "useState", "Props"],
      linkDemo: "",
      linkCodigo: "https://github.com/tItAnIc-45/appEscuela",
    },
    {
      id: 2,
      publicar: true,
      imagen: "/proyectos/portafolio.png",
      titulo: "Portafolio Personal en React",
      descripcion:
        "Portafolio web responsivo hecho con componentes: Navbar, Banner, Perfil, Habilidades, Proyectos y Contacto.",
      tecnologias: ["React", "Vite", "CSS Grid", "Flexbox", "useState"],
      linkDemo: "",
      linkCodigo: "https://github.com/tItAnIc-45/portafolio",
    },
    {
      id: 3,
      publicar: true,
      imagen: "/proyectos/apptarea.png",
      titulo: "appTarea - Aplicación móvil (trabajo grupal)",
      descripcion:
        "Aplicación móvil Android desarrollada en equipo como trabajo final del seminario de Diseño y Desarrollo de Aplicaciones Móviles.",
      tecnologias: ["Android", "App móvil", "Trabajo en equipo"],
      // Pega aquí el enlace compartido de Drive (video, presentación) o el repo si lo subes a GitHub
      linkDemo: "",
      linkCodigo: "",
    },
    {
      id: 4,
      publicar: true,
      imagen: "/proyectos/cajafuerte.png",
      titulo: "Caja Fuerte con Alarma - Banco SENATI",
      descripcion:
        "Proyecto final de ciclo: caja fuerte con sistema de alarma desarrollada como caso del Banco SENATI. Incluye informe, presentación y video de demostración.",
      tecnologias: ["Proyecto final", "Trabajo en equipo"], // agrega aquí las tecnologías que usaste
      // Enlace compartido de Drive al video Proyecto_CAJA_FUERTE.mp4
      linkDemo: "",
      linkCodigo: "",
    },
    // ---- ESPACIOS PARA PROYECTOS DE CICLOS ANTERIORES ----
    {
      id: 5,
      publicar: false,
      imagen: "",
      titulo: "Proyecto del ciclo X",
      descripcion: "Describe en una o dos frases qué hace el proyecto.",
      tecnologias: ["Tecnología 1", "Tecnología 2"],
      linkDemo: "",
      linkCodigo: "",
    },
    {
      id: 6,
      publicar: false,
      imagen: "",
      titulo: "Proyecto del ciclo Y",
      descripcion: "Describe en una o dos frases qué hace el proyecto.",
      tecnologias: ["Tecnología 1", "Tecnología 2"],
      linkDemo: "",
      linkCodigo: "",
    },
  ];

  const proyectosVisibles = proyectosData.filter(
    (proyecto) => proyecto.publicar,
  );

  return (
    <section id="proyectos" className="proyectos-section">
      <div className="proyectos-container">
        <h2 className="section-title text-center">Proyectos Destacados</h2>

        <div className="proyectos-grid">
          {proyectosVisibles.map((proyecto) => (
            <article key={proyecto.id} className="proyecto-card">
              <div className="proyecto-imagen">
                <ImagenProyecto
                  src={proyecto.imagen}
                  alt={`Captura de ${proyecto.titulo}`}
                />
              </div>

              <div className="proyecto-contenido">
                <h3 className="proyecto-titulo">{proyecto.titulo}</h3>
                <p className="proyecto-desc">{proyecto.descripcion}</p>

                <div className="proyecto-tags">
                  {proyecto.tecnologias.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {(proyecto.linkDemo || proyecto.linkCodigo) && (
                  <div className="proyecto-links">
                    {proyecto.linkDemo && (
                      <a
                        href={proyecto.linkDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-proyecto btn-demo"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        Ver Demo
                      </a>
                    )}

                    {proyecto.linkCodigo && (
                      <a
                        href={proyecto.linkCodigo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-proyecto btn-codigo"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        Ver Código
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
