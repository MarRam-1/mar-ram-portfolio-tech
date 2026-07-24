// Notas de expertise en coordinación de proyectos — contenido definitivo.
// Cada nota tiene: title, excerpt (texto corto para la vista colapsada / preview
// en Home) y body (array de bloques {type:"p"|"ul"} para la vista expandida,
// que preserva párrafos y listas tal como fueron redactados).
// Destacadas en Home: índices 0, 2 y 4 (notas 1, 3 y 5) — ver FeaturedNotes.jsx.
const notes = [
  {
    title: {
      es: "Qué implica coordinar un proyecto correctamente",
      en: `What "Successful Project Management" Actually Means`,
    },
    excerpt: {
      es: `Coordinar un proyecto correctamente implica que el resultado se cumpla en tiempo y forma, dentro del presupuesto planeado. Pero implica algo más que casi nadie menciona...`,
      en: `A successful project isn't just one that wraps up on time and on budget, though that's part of it. What most people never talk about is how you get there...`,
    },
    body: {
      es: [
        { type: "p", text: `Coordinar un proyecto correctamente implica que el resultado se cumpla en tiempo y forma, dentro del presupuesto planeado. Pero implica algo más que casi nadie menciona: que el camino para llegar ahí se recorra de forma tranquila y sostenible, sin que el equipo termine en burnout. Eso significa sostener al mismo tiempo los tiempos, las personas y las entregas, sin que ninguno de los tres se caiga por cuidar a los otros dos.` },
        { type: "p", text: `Para lograrlo, todo empieza con una planeación realista: conocer bien a tu equipo, conocer la zona, conocer los riesgos, para que las tareas fluyan sin que unos tengan que perseguir a otros. Aun con la mejor planeación, sería ingenuo pensar que todo va a salir exactamente como se previó. Siempre hay algo que amenaza al proyecto (el dinero, un accidente, hasta una pandemia), y lo que marca la diferencia en esos momentos es tomar decisiones a tiempo.` },
        { type: "p", text: `Una mala planeación hace que la amenaza sea el propio proyecto. Coordinar de verdad es la diferencia entre fluir hacia el resultado o dejar que las cosas avancen como puedan.` },
        { type: "p", text: `Esto aplica igual si el proyecto es lanzar un sitio web, abrir una tienda o organizar un evento: el tamaño cambia, la lógica no. Mi trabajo es poner esa estructura desde el primer día, para llegar juntos a la meta.` },
      ],
      en: [
        { type: "p", text: `A successful project isn't just one that wraps up on time and on budget, though that's part of it. What most people never talk about is how you get there: without burning out everyone involved along the way. That means keeping three things in balance at once, timeline, people, and deliverables, without letting one slide because you're too busy putting out fires on the other two.` },
        { type: "p", text: `It all starts with a plan that's actually grounded in reality: you need to know your team, know the terrain, know where things could go wrong, so tasks keep moving without anyone having to be chased down for updates. But even the best-laid plans won't survive contact with reality untouched. Something will always come up, budget issues, an accident, a global pandemic, and what separates a well-run project from a mess is how fast good decisions get made when it does.` },
        { type: "p", text: `Weak planning turns the project itself into the biggest risk. That's really the difference between coordinating well and just hoping things work out: one flows toward the finish line, the other stumbles there.` },
        { type: "p", text: `The scale doesn't matter, whether it's launching a website, opening a store, or pulling off an event, the logic is the same. My job is to build that structure in from day one, so we get there together.` },
      ],
    },
  },
  {
    title: {
      es: "Herramientas digitales: la ventaja no es tenerlas, es saberlas usar",
      en: `The Real Advantage Isn't the Tool. It's Knowing How to Use It.`,
    },
    excerpt: {
      es: `No existe una herramienta de organización mejor que otra. Todo está en cuál sabes realmente usar.`,
      en: `No single organizational tool beats the rest. It all comes down to which one you actually know how to use correctly.`,
    },
    body: {
      es: [
        { type: "p", text: `No existe una herramienta de organización mejor que otra. Todo está en cuál sabes realmente usar.` },
        { type: "p", text: `Mis favoritas son cuatro:` },
        { type: "ul", items: [
          `Notion, para tener toda la información de un proyecto en un solo lugar: documentos, avances, notas, todo junto y ordenado.`,
          `Trello, para ver de un vistazo en qué va cada tarea, con tableros y tarjetas que cualquiera del equipo puede revisar sin preguntar.`,
          `Google Calendar, para que los tiempos y las fechas límite queden claros y coordinados entre varias personas.`,
          `Inteligencia artificial, la última pero no menos importante: hoy es tan aliada como cualquiera de las anteriores.`,
        ]},
        { type: "p", text: `Cualquier persona puede sacarle provecho a estas herramientas. Lo que las hace realmente funcionales es saberlas usar más allá de lo básico. La diferencia entre un tablero que sirve y uno que se abandona a las dos semanas está en cómo se configura desde el principio: qué se registra, quién actualiza qué, y qué pasa cuando algo se atrasa. Con inteligencia artificial pasa algo parecido: no es lo mismo usarla para redactar un correo que para automatizar tareas repetitivas. La diferencia está en saberla "programar" correctamente, en saber pedirle lo que necesitas.` },
        { type: "p", text: `Saber usar estas herramientas, y saber configurarlas para que trabajen para ti, no es un extra: es lo que hace que un proyecto se sostenga casi solo. Y no se trata de que alguien coordine bien solo porque tiene herramientas. Se trata de que sepa coordinar aún sin ellas, y que sepa hacer un trabajo mucho más efectivo cuando sí las tiene a su alcance.` },
        { type: "p", text: `Ni siquiera tienen que ser estas cuatro. Me ha tocado trabajar en lugares donde lo único disponible es el paquete de Google o de Microsoft, y muchas veces la gente no conoce todo lo que ya traen para coordinar proyectos sabiéndolas usar y sacarles provecho:` },
        { type: "ul", items: [
          `Google Sheets o Excel`,
          `Google Tasks`,
          `Keep`,
          `Un Drive bien organizado`,
          `Planner`,
          `Teams`,
        ]},
        { type: "p", text: `...entre otras, todas disponibles también como app en el celular.` },
        { type: "p", text: `Pero repito: no es tener las herramientas, es saberlas usar. Un carpintero no es carpintero porque tiene martillo y clavos. Es carpintero porque sabe crear la mesa.` },
      ],
      en: [
        { type: "p", text: `No single organizational tool beats the rest. It all comes down to which one you actually know how to use correctly.` },
        { type: "p", text: `My four go-tos:` },
        { type: "ul", items: [
          `Notion, for keeping every piece of a project in one place, docs, progress, notes, all tidy and within reach.`,
          `Trello, for a quick read on where each task stands, with boards anyone on the team can check without having to ask.`,
          `Google Calendar, to keep deadlines and timelines straight across everyone involved.`,
          `Artificial intelligence, last on the list but far from least: these days it pulls its weight right alongside the rest.`,
        ]},
        { type: "p", text: `Anyone can put these tools to work. What separates the people who actually get value from them is knowing how to go beyond the defaults. The gap between a board that keeps running and one that quietly dies after two weeks comes down to how it's set up from day one: what gets tracked, who's responsible for updating it, and what the plan is when something falls behind. AI works the same way. There's a world of difference between using it to draft an email and using it to automate the repetitive stuff that eats your day. That difference comes down to knowing how to prompt it well, how to actually tell it what you need.` },
        { type: "p", text: `Knowing how to use these tools, and set them up to run for you instead of the other way around, isn't a bonus skill. It's what lets a project practically run on autopilot. And it's not that having tools makes someone a good project manager. It's that a good coordinator can get the job done with or without them, and does it that much better when the right tools are within reach.` },
        { type: "p", text: `These four aren't the only ones that matter, either. I've worked places where all you've got is the Google or Microsoft suite, and most people have no idea how much project-coordination power is already sitting there unused:` },
        { type: "ul", items: [
          `Google Sheets or Excel`,
          `Google Tasks`,
          `Keep`,
          `A well-organized Drive`,
          `Planner`,
          `Teams`,
        ]},
        { type: "p", text: `...among others, all of them available right from your phone too.` },
        { type: "p", text: `But it bears repeating: it's not about having the tools. It's about knowing how to use them. A carpenter isn't a carpenter because he owns a hammer and nails. He's a carpenter because he knows how to build the table.` },
      ],
    },
  },
  {
    title: {
      es: "Comunicación clara: el principal problema de la organización",
      en: `Clear Communication: Every Organization's Root Problem`,
    },
    excerpt: {
      es: `La mayoría de los problemas que he visto en un proyecto no nacen de un mal plan. Nacen de que alguien no supo algo a tiempo, o lo supo pero no de forma clara.`,
      en: `Most of the problems I've seen derail a project don't trace back to a bad plan. They trace back to someone not finding something out in time, or finding out but not getting the full picture.`,
    },
    body: {
      es: [
        { type: "p", text: `La mayoría de los problemas que he visto en un proyecto no nacen de un mal plan. Nacen de que alguien no supo algo a tiempo, o lo supo pero no de forma clara. La comunicación falla en silencio: nadie avisa que algo se atrasó, alguien asume que "ya se sabía", o la información se queda en un chat que nadie vuelve a leer.` },
        { type: "p", text: `Algunos hábitos que sí funcionan:` },
        { type: "ul", items: [
          `Que cada actualización importante quede por escrito, no solo dicha en una llamada.`,
          `Que exista un solo lugar donde se consulta el estado real del proyecto, no cinco chats distintos.`,
          `Que avisar un atraso a tiempo se vea como algo normal, no como un fracaso lleno de culpa.`,
        ]},
        { type: "p", text: `Cuando la comunicación es clara, coordinar deja de sentirse como estar encima de todos, y empieza a vivirse como que todos ya saben qué hacer.` },
        { type: "p", text: `Pero tan importante como qué se comunica es cómo se comunica. No es lo mismo dar una noticia en medio de una crisis que comunicar cuando todo fluye, y en las dos situaciones tiene que sostenerse lo mismo: calma, respeto y claridad. Cuando dejamos que las emociones toman el control de la comunicación, corremos el riesgo de comunicar de forma ambigua, de prometer algo irreal, o de que quien recibe el mensaje se cierre por la misma tensión del momento.` },
        { type: "p", text: `Por eso, al elegir a quien coordine un proyecto, no basta con que conozca la teoría y las herramientas. Lo que de verdad sostiene un proyecto es alguien capaz de comunicar con la misma claridad incluso cuando, inevitablemente, algo se complica.` },
      ],
      en: [
        { type: "p", text: `Most of the problems I've seen derail a project don't trace back to a bad plan. They trace back to someone not finding something out in time, or finding out but not getting the full picture. Communication tends to break down quietly: nobody flags the delay, someone assumes "everyone already knew," or the update sits in a chat thread nobody opens again.` },
        { type: "p", text: `A few habits that actually hold up:` },
        { type: "ul", items: [
          `Anything important gets written down, not just mentioned once on a call.`,
          `There's one place, and only one, to check where the project actually stands, not five scattered chats.`,
          `Flagging a delay early is treated as normal, not as a confession.`,
        ]},
        { type: "p", text: `When communication is clear, coordinating stops feeling like riding shotgun on everyone's work, and starts feeling like everyone's already on the same page.` },
        { type: "p", text: `But how you say something matters just as much as what you say. Breaking bad news mid-crisis calls for something different than a routine update when everything's on track, yet both demand the same three things: calm, respect, clarity. The moment emotions take the wheel, you risk getting vague, promising something you can't deliver, or watching the other person shut down under the pressure of the moment.` },
        { type: "p", text: `That's exactly why, when it comes to picking someone to coordinate a project, knowing the theory and the tools isn't enough. What actually holds a project together is someone who can communicate just as clearly when, inevitably, things go sideways.` },
      ],
    },
  },
  {
    title: {
      es: "Documentación: la memoria de todo proyecto bien coordinado",
      en: `Documentation: Every Well-Run Project's Long-Term Memory`,
    },
    excerpt: {
      es: `Un proyecto sin documentación depende de que alguien se acuerde. Y la memoria de las personas falla, sobre todo cuando hay varios proyectos corriendo a la vez.`,
      en: `A project with no documentation runs on one thing: somebody's memory. And memory fails, especially once you've got more than one project running at the same time.`,
    },
    body: {
      es: [
        { type: "p", text: `Un proyecto sin documentación depende de que alguien se acuerde. Y la memoria de las personas falla, sobre todo cuando hay varios proyectos corriendo a la vez. Documentar no es llenar formatos por llenarlos: es dejar por escrito qué se decidió, por qué se decidió así, y qué sigue, para que la respuesta a "¿por qué hicimos esto?" no dependa de preguntarle a alguien y esperar. Documentar bien también protege al proyecto de algo muy común: que la persona que sabía algo importante deje de estar disponible (se va, se enferma, cambia de rol) y el conocimiento se pierda con ella. Un buen sistema de documentación es simple, se actualiza en el momento (no después) y cualquiera del equipo lo puede consultar sin tener que preguntar.` },
        { type: "p", text: `Algunos tips para documentar de forma efectiva:` },
        { type: "ul", items: [
          `Que exista un proceso claro de documentación, para que no se conviertan en documentos que nadie quiere leer ni nadie quiere hacer.`,
          `Asegurar que todas las personas involucradas tengan acceso a la información. Esto incluye tener un proceso definido para integrar a nuevas personas al equipo: no solo les da acceso a lo que necesitan, también les ayuda a entender cómo funciona el proyecto sin tener que ir preguntando poco a poco. Ese tiempo no se pierde, se ahorra más adelante.`,
          `Mantener todo en un solo lugar centralizado, no repartido entre correos, chats y documentos sueltos que nadie sabe dónde buscar.`,
          `Ser selectivos con qué se documenta: no todo necesita un registro detallado. Documentar de más satura tanto como documentar de menos, y el criterio importa tanto como el hábito.`,
          `Revisar la documentación de vez en cuando para que no se vuelva obsoleta. Un documento desactualizado puede generar más confusión que no tener documento en absoluto.`,
        ]},
      ],
      en: [
        { type: "p", text: `A project with no documentation runs on one thing: somebody's memory. And memory fails, especially once you've got more than one project running at the same time. Documenting isn't about checking a box on some form. It's about putting on record what got decided, why it got decided that way, and what happens next, so "wait, why did we do it this way?" never turns into a scavenger hunt for whoever might remember. Solid documentation also protects a project from something that happens more often than you'd think: the one person who had the answer stops being available, they leave, they get sick, they switch roles, and the knowledge walks out the door with them. A good documentation system stays simple, gets updated in real time instead of "whenever there's a chance," and anyone on the team can pull it up without having to ask around.` },
        { type: "p", text: `A few tips for documenting the right way:` },
        { type: "ul", items: [
          `Set up a clear process for it, so it doesn't turn into paperwork nobody wants to read or write.`,
          `Make sure everyone involved actually has access to the information. That includes a real onboarding process for new team members, it doesn't just hand them the files, it helps them understand how the project runs without piecing it together one question at a time. That time isn't wasted. It pays for itself later.`,
          `Keep everything in one central place, not scattered across emails, chat threads, and random files nobody can track down.`,
          `Be selective about what gets documented. Not everything needs a full write-up. Over-documenting clutters things up just as much as under-documenting does, so judgment matters as much as the habit itself.`,
          `Circle back and update it every so often so it doesn't go stale. An outdated document can cause more confusion than having no document at all.`,
        ]},
      ],
    },
  },
  {
    title: {
      es: "Coordinar no es perseguir a la gente: cómo llevar a tu equipo al mismo ritmo",
      en: `Coordinating Isn't Babysitting: How to Get Everyone Moving in Sync`,
    },
    excerpt: {
      es: `Muchas veces se piensa que coordinar es estar encima de todos, preguntando "¿cómo vas?" a cada rato. Pero cuando alguien coordina así, se nota, y no para bien.`,
      en: `A lot of people think coordinating means hovering over everyone, checking in every five minutes with a "how's it coming along?" But when someone runs a project that way, it shows, and not in a good way.`,
    },
    body: {
      es: [
        { type: "p", text: `Muchas veces se piensa que coordinar es estar encima de todos, preguntando "¿cómo vas?" a cada rato. Pero cuando alguien coordina así, se nota, y no para bien: el proyecto no fluye, las personas trabajan de mal humor, los tiempos no se respetan, la información se pierde, y todos terminan dependiendo de una sola persona para poder avanzar.` },
        { type: "p", text: `Coordinar bien es lo contrario: el proyecto avanza con calma, la información fluye sin que nadie tenga que perseguirla, y nadie carga solo con el peso de que todo funcione. Esto se logra con revisiones cortas y frecuentes en vez de una sola revisión larga al final, con expectativas claras desde el inicio sobre qué se espera de cada quien y para cuándo, y con espacio real para que alguien diga "esto se me va a atrasar" sin sentir que está fallando.` },
        { type: "p", text: `Parte de esto es usar bien el tiempo, no solo el propio, el de todos. Empieza por algo simple: respetar el horario laboral y el tiempo de descanso de cada quien. Pero también significa que el tiempo que sí se usa sea útil. Muchas reuniones podrían haber sido un mensaje, y cuando sí hace falta reunirse, tiene que quedar claro de antemano qué se va a hablar y qué hay que preparar antes, para que nadie llegue a improvisar. Ese mismo cuidado aplica también con clientes y proveedores, no solo con el equipo interno: el tiempo de todos vale igual.` },
        { type: "p", text: `Pero nada de esto, ni el método ni el buen uso del tiempo, funciona sin algo menos técnico: tener control sobre las propias emociones. Solo así se puede comunicar con claridad y abrir espacio a un diálogo real. Ese diálogo importa mucho en un proyecto, y para que exista, todas las personas necesitan estar dispuestas a sostenerlo, incluso cuando toca hablar de cosas personales. Al final, nadie deja su vida en la puerta cuando entra a un proyecto. Esto no significa que quien coordina deba fungir como psicóloga del equipo. Pero si las personas van a dialogar entre ellas de todas formas, con o sin quien coordina presente, más vale que ese diálogo tenga un espacio sano donde suceder. Sin ese espacio, un proyecto se parece a cuando cada quien hace su parte por separado y todo se junta hasta el final: las piezas no combinan, y se nota que nadie las miró juntas antes de presentarlas.` },
        { type: "p", text: `Un equipo bien coordinado no avanza porque alguien lo esté empujando todo el tiempo. Avanza porque todos saben exactamente dónde está el proyecto y qué sigue, y porque hay un espacio real donde pueden hablar cuando algo no está bien del todo. Ahí es donde se junta lo que estudié con lo que sé hacer: mi formación en psicología y mi experiencia organizando proyectos son el mismo combo que aplico en cada proyecto que coordino.` },
      ],
      en: [
        { type: "p", text: `A lot of people think coordinating means hovering over everyone, checking in every five minutes with a "how's it coming along?" But when someone runs a project that way, it shows, and not in a good way: things stall, people work in a foul mood, deadlines slip, information falls through the cracks, and the whole team ends up unable to move without one single person's green light.` },
        { type: "p", text: `Good coordination looks like the opposite: the project moves at a steady clip, information flows without anyone having to hunt it down, and no one's shouldering the whole thing alone. You get there with short, frequent check-ins instead of one big review at the finish line, with clear expectations from day one about who owns what and by when, and with real room for someone to say "this one's going to slip" without it feeling like a confession.` },
        { type: "p", text: `Part of that is using time well, and not just your own, everyone's. Start with the basics: respect work hours, respect people's time off. But it also means making sure the time people do spend is worth spending. Half of all meetings could have been a two-line message, and on the occasions a meeting really is the right call, everyone should know going in what it's about and what they need to bring to the table, so nobody's winging it on the spot. That same respect goes for clients and vendors too, not just the internal team. Everyone's time is worth the same.` },
        { type: "p", text: `But none of it, not the process, not the time management, holds up without something far less technical: staying in control of your own emotions. That's the only way to communicate clearly and leave room for a real conversation. And that conversation matters more than people give it credit for, but it only happens if everyone's actually willing to have it, personal stuff included. Nobody clocks out of their personal life the second they log into a project. None of this means whoever's coordinating needs to double as the team therapist. But if people are going to talk to each other regardless, whether the coordinator's in the room or not, it's worth making sure that conversation has a healthy place to land. Without it, a project starts to look like everyone building their piece in a vacuum and only comparing notes at the very end, and it shows: nothing quite lines up.` },
        { type: "p", text: `A well-coordinated team doesn't move because someone's constantly pushing it forward. It moves because everyone knows exactly where things stand and what comes next, and because there's real space to speak up when something's off. That's where what I studied meets what I actually do for a living: psychology and project coordination turn out to be the same skill set, and it's the one I bring to every project I take on.` },
      ],
    },
  },
];

export default notes;
