// Notas de expertise en coordinación de proyectos. Las destacadas en Home
// son las de índice 0, 2 y 4 (notas 1, 3 y 5) — ver FeaturedNotes.jsx.
const notes = [
  {
    title: {
      es: "Qué implica coordinar un proyecto correctamente",
      en: "What it really takes to coordinate a project well",
    },
    excerpt: {
      es: "Coordinar un proyecto no es solo checar tareas: es sostener tiempos, personas y entregas a la vez, sin que ninguno se caiga por cuidar a los otros.",
      en: "Coordinating a project isn't just about checking tasks off a list — it's about holding timelines, people, and deliverables together at once, without dropping any of them.",
    },
    text: {
      es: "Coordinar un proyecto no es solo checar que las tareas se hagan. Es sostener tres cosas al mismo tiempo: los tiempos, las personas y las entregas, y que ninguna de las tres se caiga por cuidar a las otras dos. Un proyecto bien coordinado tiene tres cosas: alguien que ve el panorama completo (no solo su parte), información que fluye sin que nadie tenga que perseguirla, y decisiones que se toman a tiempo, no cuando ya es tarde. Esto aplica igual si el proyecto es lanzar un sitio web, abrir una tienda o organizar un evento: el tamaño cambia, la lógica no. Mi trabajo es poner esa estructura desde el primer día, para que el equipo se enfoque en hacer bien su parte y no en adivinar qué falta.",
      en: "Coordinating a project isn't just about checking that tasks get done. It's about holding three things at once: timelines, people, and deliverables, without letting any of the three slip while you protect the other two. A well-coordinated project has three things: someone who sees the whole picture (not just their own piece), information that flows without anyone having to chase it, and decisions that get made on time, not once it's already too late. This applies whether the project is launching a website, opening a store, or organizing an event: the size changes, the logic doesn't. My job is to put that structure in place from day one, so the team can focus on doing their part well instead of guessing what's missing.",
    },
  },
  {
    title: {
      es: "Herramientas digitales: saberlas usar (y “programarlas”) es una ventaja",
      en: "Digital tools: knowing how to use them (and set them up right) is an edge",
    },
    excerpt: {
      es: "Trello y Notion no organizan nada solos: organizan lo que tú decidiste poner en ellos. La diferencia está en cómo se configuran desde el principio.",
      en: "Trello and Notion don't organize anything on their own — they organize whatever you decided to put into them. The difference is in how they're set up from the start.",
    },
    text: {
      es: "Trello y Notion no organizan nada por sí solos, organizan lo que tú decidiste poner en ellos. La diferencia entre un tablero que sirve y uno que se abandona a las dos semanas está en cómo se configura desde el principio: qué se registra, quién actualiza qué, y qué pasa cuando algo se atrasa. Ahí es donde entra el poder real de estas herramientas. Y hoy sumo algo más: uso inteligencia artificial para automatizar reportes, ordenar información y ahorrar horas de trabajo manual que antes se iban en armar tableros o resúmenes a mano. Saber usar estas herramientas, y saber configurarlas para que trabajen para ti, no es un extra, es lo que hace que un proyecto se sostenga solo, sin que alguien tenga que estar empujándolo todos los días.",
      en: "Trello and Notion don't organize anything on their own — they organize whatever you decided to put into them. The difference between a board that actually works and one that gets abandoned after two weeks comes down to how it's set up from the start: what gets logged, who updates what, and what happens when something falls behind. That's where the real power of these tools shows up. And these days I add one more layer: I use AI to automate reports, organize information, and save hours of manual work that used to go into building boards or summaries by hand. Knowing how to use these tools, and knowing how to set them up to work for you, isn't a nice extra — it's what makes a project hold itself together without someone having to push it every single day.",
    },
  },
  {
    title: {
      es: "Comunicación clara: el problema más común (y el más fácil de evitar)",
      en: "Clear communication: the most common problem (and the easiest to avoid)",
    },
    excerpt: {
      es: "La mayoría de los problemas en un proyecto no nacen de un mal plan: nacen de que alguien no supo algo a tiempo, o no lo supo con claridad.",
      en: "Most project problems don't come from a bad plan — they come from someone not knowing something in time, or not knowing it clearly.",
    },
    text: {
      es: "La mayoría de los problemas que he visto en un proyecto no nacen de un mal plan, nacen de que alguien no supo algo a tiempo, o lo supo pero no de forma clara. La comunicación falla en silencio: nadie avisa que algo se atrasó, alguien asume que ‘ya se sabía’, o la información se queda en un chat que nadie vuelve a leer. Algunos hábitos que sí funcionan: que cada actualización importante quede por escrito y no solo dicha en una llamada, que exista un solo lugar donde se consulta el estado real del proyecto (no cinco chats distintos), y que avisar un atraso a tiempo se vea como algo normal, no como un fracaso. Cuando la comunicación es clara, la coordinación deja de sentirse como estar encima de todos, y empieza a sentirse como que todos ya saben qué hacer.",
      en: "Most of the problems I've seen in a project don't come from a bad plan — they come from someone not knowing something in time, or knowing it but not clearly enough. Communication fails quietly: no one flags that something is running late, someone assumes “everyone already knew,” or the information sits in a chat nobody reads again. Some habits that actually work: important updates get written down, not just said out loud on a call; there's a single place to check the real status of the project, not five different chats; and flagging a delay early is treated as normal, not as a failure. When communication is clear, coordination stops feeling like staying on top of everyone, and starts feeling like everyone already knows what to do.",
    },
  },
  {
    title: {
      es: "Documentación: la memoria de todo proyecto bien coordinado",
      en: "Documentation: the memory of every well-coordinated project",
    },
    excerpt: {
      es: "Un proyecto sin documentación depende de que alguien se acuerde. Y la memoria de las personas falla, sobre todo con varios proyectos corriendo a la vez.",
      en: "A project with no documentation depends on someone remembering. And memory fails, especially when several projects are running at once.",
    },
    text: {
      es: "Un proyecto sin documentación depende de que alguien se acuerde. Y la memoria de las personas falla, sobre todo cuando hay varios proyectos corriendo a la vez. Documentar no es llenar formatos por llenarlos: es dejar por escrito qué se decidió, por qué se decidió así, y qué sigue, para que la respuesta a ‘¿por qué hicimos esto?’ no dependa de preguntarle a alguien y esperar. Documentar bien también protege al proyecto de algo muy común: que la persona que sabía algo importante deje de estar disponible (se va, se enferma, cambia de rol) y el conocimiento se pierda con ella. Un buen sistema de documentación es simple, se actualiza en el momento (no después) y cualquiera del equipo lo puede consultar sin tener que preguntar.",
      en: "A project with no documentation depends on someone remembering. And memory fails, especially when several projects are running at once. Documenting isn't about filling out forms for the sake of it: it's about writing down what was decided, why it was decided that way, and what comes next, so the answer to “why did we do this?” doesn't depend on asking someone and waiting. Good documentation also protects the project from something very common: the person who knew something important stops being available (they leave, get sick, change roles), and the knowledge disappears with them. A good documentation system is simple, gets updated in the moment (not later), and anyone on the team can check it without having to ask.",
    },
  },
  {
    title: {
      es: "Coordinar no es perseguir a la gente: cómo llevar a tu equipo al mismo ritmo",
      en: "Coordinating isn't chasing people: how to get your team moving at the same pace",
    },
    excerpt: {
      es: "Coordinar bien no es perseguir a la gente pidiendo actualizaciones: es diseñar el proyecto para que el avance se vea sin que nadie tenga que pedirlo.",
      en: "Coordinating well isn't about chasing people for updates — it's about designing the project so progress is visible without anyone having to ask.",
    },
    text: {
      es: "Cuando alguien coordina mal, se nota: anda detrás de cada persona pidiendo actualizaciones, y eso cansa a todos, incluida a esa persona. Coordinar bien es lo contrario: es diseñar el proyecto para que el avance sea visible sin que nadie tenga que pedirlo. Esto se logra con revisiones cortas y frecuentes en vez de una sola revisión larga al final, con expectativas claras desde el inicio sobre qué se espera de cada quien y para cuándo, y con espacio real para que alguien diga ‘esto se me va a atrasar’ sin sentir que está fallando. Un equipo bien coordinado no avanza porque alguien lo esté empujando todo el tiempo, avanza porque todos saben exactamente dónde está el proyecto y qué sigue. Ese es el ritmo que busco construir en cada proyecto que coordino.",
      en: "When someone coordinates poorly, it shows: they're chasing every person for updates, and that wears everyone out, including them. Coordinating well is the opposite: it means designing the project so progress is visible without anyone having to ask for it. That happens through short, frequent check-ins instead of one long review at the end, clear expectations from the start about what's expected from each person and by when, and real space for someone to say “this is going to run late” without feeling like they failed. A well-coordinated team doesn't move forward because someone is pushing it all the time — it moves forward because everyone knows exactly where the project stands and what's next. That's the pace I aim to build into every project I coordinate.",
    },
  },
];

export default notes;
