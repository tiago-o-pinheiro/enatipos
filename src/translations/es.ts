import { translations as en } from './en'
import { type TranslationKey } from './translation.types'

// Spread EN as a fallback so untranslated keys (notably long-form
// compatibility content) display in English until explicitly translated,
// rather than failing the type check.
export const translations: Record<TranslationKey, string> = {
  ...en,
  // Meta
  'meta.title': 'Enatipos — Descubre tu tipo del Eneagrama',
  'meta.description':
    '9 patrones. 1 mapa. Un test de autoconocimiento basado en el eneagrama.',

  // Language names
  'language.en': 'Inglés',
  'language.es': 'Español',
  'language.pt': 'Portugués',
  'language.ca': 'Catalán',
  'language.switcher.aria-label': 'Cambiar idioma (actual: ${current})',

  // Intro
  'intro.eyebrow': 'Test de autoconocimiento',
  'intro.title': 'Eneagrama',
  'intro.subtitle': '9 patrones. 1 mapa.',
  'intro.body.1.before':
    'El eneagrama describe 9 estructuras de personalidad a partir de la ',
  'intro.body.1.em': 'motivación inconsciente',
  'intro.body.1.after':
    ' que te mueve, no de tu conducta visible. Dos personas del mismo tipo pueden verse muy distintas por fuera y vibrar igual por dentro.',
  'intro.body.2.before': 'Son 30 preguntas. Responde desde lo que ',
  'intro.body.2.em': 'sientes',
  'intro.body.2.after':
    ' que te mueve, no desde quien querrías ser. Si dudas, elige la opción que te incomode un poco — ahí suele estar la verdad.',
  'intro.start.button': 'Empezar',
  'intro.start.aria-label': 'Empezar el test del eneagrama',
  'intro.duration': '≈ 5 minutos',

  // Quiz chrome
  'quiz.back.button': '← Atrás',
  'quiz.back.aria-label': 'Volver a la pregunta anterior',
  'quiz.progress.aria-label': 'Progreso del test',
  'quiz.option.aria-label': 'Opción ${letter}: ${text}',
  'quiz.diagram.aria-label': 'Diagrama del eneagrama con los nueve tipos',

  // Questions
  'quiz.question.1.prompt': 'Lo primero que haces al entrar a un espacio nuevo es…',
  'quiz.question.1.option.1':
    'Notar lo que se podría mejorar o está fuera de lugar.',
  'quiz.question.1.option.2':
    'Fijarte en cómo está la gente, quién necesita algo.',
  'quiz.question.1.option.3':
    'Escanear oportunidades para conectar o destacar.',
  'quiz.question.1.option.4':
    'Sentir si el ambiente resuena contigo o te incomoda.',

  'quiz.question.2.prompt': 'En una situación incierta, sueles…',
  'quiz.question.2.option.1':
    'Retirarte a observar y entender antes de implicarte.',
  'quiz.question.2.option.2': 'Anticipar qué puede salir mal y prepararte.',
  'quiz.question.2.option.3': 'Buscar el lado divertido o una salida nueva.',
  'quiz.question.2.option.4': 'Tomar el control rápidamente sin titubeos.',

  'quiz.question.3.prompt': 'Lo que más te desgasta en el día a día es…',
  'quiz.question.3.option.1': 'El conflicto y la tensión en el ambiente.',
  'quiz.question.3.option.2': 'Que las cosas estén mal hechas o sean injustas.',
  'quiz.question.3.option.3': 'Sentir que nadie te ve ni te valora.',
  'quiz.question.3.option.4': 'No estar avanzando o destacando como quisieras.',

  'quiz.question.4.prompt': 'Tu miedo más profundo podría ser…',
  'quiz.question.4.option.1': 'No tener identidad ni significado propio.',
  'quiz.question.4.option.2': 'Sentirte vacío, inútil o ser invadido por otros.',
  'quiz.question.4.option.3': 'Quedarte sin apoyo, sin seguridad, perdido.',
  'quiz.question.4.option.4':
    'Quedar atrapado en el dolor, limitación o aburrimiento.',

  'quiz.question.5.prompt': 'Cuando algo te molesta mucho, tú…',
  'quiz.question.5.option.1': 'Lo confrontas de frente sin filtro.',
  'quiz.question.5.option.2': 'Lo minimizas para mantener la paz.',
  'quiz.question.5.option.3': 'Lo contienes con disciplina y autocontrol.',
  'quiz.question.5.option.4': 'Lo acumulas hasta que explota emocionalmente.',

  'quiz.question.6.prompt': 'Tu forma más natural de demostrar afecto es…',
  'quiz.question.6.option.1':
    'Logrando cosas que impresionen o cuiden al otro.',
  'quiz.question.6.option.2':
    'Compartiendo tu mundo interior único y profundo.',
  'quiz.question.6.option.3':
    'Dando tiempo de calidad, atención, espacio mental.',
  'quiz.question.6.option.4':
    'Siendo leal, estable, presente incondicionalmente.',

  'quiz.question.7.prompt': 'Cuando nadie te mira, sueles ser…',
  'quiz.question.7.option.1': 'Muy inquieto, saltando entre ideas y planes.',
  'quiz.question.7.option.2': 'Igual de firme y directo que en público.',
  'quiz.question.7.option.3': 'Más tranquilo y ausente de lo que pareces.',
  'quiz.question.7.option.4': 'Aún más autocrítico contigo mismo.',

  'quiz.question.8.prompt': 'Tu relación con tus emociones es que…',
  'quiz.question.8.option.1': 'Las sientes por ti y también por los demás.',
  'quiz.question.8.option.2': 'Las manejas para que no bloqueen tus metas.',
  'quiz.question.8.option.3': 'Las exploras profundamente, viven contigo.',
  'quiz.question.8.option.4': 'Las observas desde cierta distancia racional.',

  'quiz.question.9.prompt': 'En un grupo nuevo, tiendes a…',
  'quiz.question.9.option.1': 'Buscar quiénes son confiables y coherentes.',
  'quiz.question.9.option.2': 'Alegrar el ambiente con tu energía.',
  'quiz.question.9.option.3': 'Imponerte naturalmente, hablar con fuerza.',
  'quiz.question.9.option.4': 'Fundirte sin destacar, seguir la corriente.',

  'quiz.question.10.prompt': 'Lo que más valoras en los demás es…',
  'quiz.question.10.option.1':
    'Su integridad, coherencia entre lo que dicen y hacen.',
  'quiz.question.10.option.2': 'Su calidez y disposición a cuidar.',
  'quiz.question.10.option.3': 'Su ambición y capacidad de lograr cosas.',
  'quiz.question.10.option.4': 'Su profundidad y autenticidad.',

  'quiz.question.11.prompt': 'Tu forma de tomar decisiones es…',
  'quiz.question.11.option.1':
    'Analizar toda la información antes de comprometerte.',
  'quiz.question.11.option.2': 'Consultar con personas de confianza.',
  'quiz.question.11.option.3':
    'Explorar múltiples opciones y mantenerlas abiertas.',
  'quiz.question.11.option.4': 'Decidir rápido desde el instinto, sin dudar.',

  'quiz.question.12.prompt': 'El tipo de trabajo que más te llena es…',
  'quiz.question.12.option.1':
    'Uno tranquilo, sin conflicto, con buen ambiente.',
  'quiz.question.12.option.2': 'Uno con propósito claro y estándares altos.',
  'quiz.question.12.option.3':
    'Uno donde puedas cuidar y conectar con personas.',
  'quiz.question.12.option.4':
    'Uno donde puedas destacar y crecer profesionalmente.',

  'quiz.question.13.prompt': 'Lo que más te molesta en los demás es…',
  'quiz.question.13.option.1': 'Que sean superficiales o emocionalmente torpes.',
  'quiz.question.13.option.2':
    'Que sean invasivos, exigentes o drenen tu energía.',
  'quiz.question.13.option.3': 'Que sean desleales o poco confiables.',
  'quiz.question.13.option.4':
    'Que sean aguafiestas o muy pesados emocionalmente.',

  'quiz.question.14.prompt': 'Tu relación con el dinero es que…',
  'quiz.question.14.option.1': 'Es una fuente de libertad, autonomía y poder.',
  'quiz.question.14.option.2': 'No le prestas demasiada atención activa.',
  'quiz.question.14.option.3': 'Lo administras con disciplina y responsabilidad.',
  'quiz.question.14.option.4': 'También lo usas para cuidar a los que quieres.',

  'quiz.question.15.prompt': 'Cuando algo te duele emocionalmente, tú…',
  'quiz.question.15.option.1':
    'Te distraes con trabajo, productividad y logros.',
  'quiz.question.15.option.2': 'Te sumerges dentro del sentimiento y lo habitas.',
  'quiz.question.15.option.3': 'Te aíslas para procesarlo en soledad.',
  'quiz.question.15.option.4': 'Buscas orientación en alguien de confianza.',

  'quiz.question.16.prompt': 'Al planear el futuro, tiendes a…',
  'quiz.question.16.option.1':
    'Imaginar muchas posibilidades y mantener opciones.',
  'quiz.question.16.option.2': 'Tomar el control y marcar el rumbo con fuerza.',
  'quiz.question.16.option.3': 'Fluir y ver qué se presenta sin forzar.',
  'quiz.question.16.option.4': 'Planearlo con detalle, criterio y principios.',

  'quiz.question.17.prompt': 'Tu peor defecto, según otros, podría ser…',
  'quiz.question.17.option.1': 'Ser entrometido o manipulador afectivamente.',
  'quiz.question.17.option.2': 'Ser vanidoso, competitivo o impaciente.',
  'quiz.question.17.option.3':
    'Ser dramático o autoindulgente emocionalmente.',
  'quiz.question.17.option.4': 'Ser distante, frío o desconectado.',

  'quiz.question.18.prompt':
    'En el fondo, más que cualquier otra cosa, quieres…',
  'quiz.question.18.option.1':
    'Sentirte seguro, respaldado, con un lugar estable.',
  'quiz.question.18.option.2':
    'Ser libre, estar contento, vivir sin limitaciones.',
  'quiz.question.18.option.3': 'Ser fuerte, autónomo, no depender de nadie.',
  'quiz.question.18.option.4': 'Estar en paz contigo mismo y con todo.',

  'quiz.question.19.prompt': 'Ante una decisión difícil, te guías por…',
  'quiz.question.19.option.1':
    'Lo que sientes que es lo correcto según tus principios.',
  'quiz.question.19.option.2': 'Cómo afectará a las personas que amas.',
  'quiz.question.19.option.3': 'Lo que te acerque más al éxito que buscas.',
  'quiz.question.19.option.4': 'Lo que sientas más auténtico y fiel a ti.',

  'quiz.question.20.prompt': 'Cuando conoces a alguien nuevo, notas primero…',
  'quiz.question.20.option.1': 'Si es inteligente y respeta tu espacio.',
  'quiz.question.20.option.2': 'Si es confiable y coherente.',
  'quiz.question.20.option.3': 'Si es divertido, interesante, con energía.',
  'quiz.question.20.option.4': 'Si es fuerte, directo, dice la verdad.',

  'quiz.question.21.prompt': 'Tu forma ideal de descansar es…',
  'quiz.question.21.option.1': 'No hacer nada, simplemente ser, desconectar.',
  'quiz.question.21.option.2':
    'Organizar tu espacio, tus rutinas, poner orden.',
  'quiz.question.21.option.3': 'Estar con la gente que quieres, conectar.',
  'quiz.question.21.option.4':
    'Avanzar en algún proyecto personal que te importa.',

  'quiz.question.22.prompt': 'Cuando alguien te critica, tu primera reacción es…',
  'quiz.question.22.option.1': 'Sentirlo como un ataque a tu esencia misma.',
  'quiz.question.22.option.2': 'Aislarte para procesarlo en privado.',
  'quiz.question.22.option.3': 'Dudar de ti mismo y consultar con otros.',
  'quiz.question.22.option.4': 'Minimizarlo, reenmarcarlo, seguir adelante.',

  'quiz.question.23.prompt': 'Lo que te hace sentir más vivo es…',
  'quiz.question.23.option.1': 'Sentir tu propio poder, tu fuerza plena.',
  'quiz.question.23.option.2': 'Un momento de armonía total con todo.',
  'quiz.question.23.option.3': 'Ver algo bien hecho, con calidad y cuidado.',
  'quiz.question.23.option.4': 'Sentir que alguien te necesita de verdad.',

  'quiz.question.24.prompt': 'En tu tiempo libre, prefieres…',
  'quiz.question.24.option.1':
    'Avanzar en proyectos personales, productividad.',
  'quiz.question.24.option.2':
    'Arte, música, reflexión profunda, soledad creativa.',
  'quiz.question.24.option.3': 'Leer, investigar, explorar ideas complejas.',
  'quiz.question.24.option.4':
    'Estar con tu círculo cercano, gente de confianza.',

  'quiz.question.25.prompt': 'Algo que los demás no saben de ti es que…',
  'quiz.question.25.option.1':
    'A veces tu alegría tapa un vacío que sientes.',
  'quiz.question.25.option.2':
    'Te sientes vulnerable más de lo que admites.',
  'quiz.question.25.option.3':
    'Tienes opiniones y deseos más fuertes de los que expresas.',
  'quiz.question.25.option.4':
    'Eres mucho más duro contigo que con cualquier otro.',

  'quiz.question.26.prompt': 'Tu forma de comunicar tiende a ser…',
  'quiz.question.26.option.1': 'Cálida, cercana, empática.',
  'quiz.question.26.option.2': 'Clara, motivadora, eficiente.',
  'quiz.question.26.option.3': 'Metafórica, emocional, con matices.',
  'quiz.question.26.option.4': 'Analítica, precisa, más bien reservada.',

  'quiz.question.27.prompt': 'Cuando las cosas no salen como querías, tú…',
  'quiz.question.27.option.1': 'Consultas a otros antes de decidir qué hacer.',
  'quiz.question.27.option.2': 'Cambias rápido a un plan B más atractivo.',
  'quiz.question.27.option.3': 'Empujas con más fuerza y determinación.',
  'quiz.question.27.option.4': 'Te adaptas al nuevo escenario sin mucho drama.',

  'quiz.question.28.prompt': 'Un lema inconsciente tuyo podría ser…',
  'quiz.question.28.option.1': '"Hay una forma correcta de hacer las cosas."',
  'quiz.question.28.option.2': '"Valgo cuando ayudo y cuido a otros."',
  'quiz.question.28.option.3': '"Valgo por lo que logro y lo que se ve."',
  'quiz.question.28.option.4': '"Soy especial, distinto al resto."',

  'quiz.question.29.prompt': 'Una de tus luchas internas más grandes es…',
  'quiz.question.29.option.1':
    'Salir de tu cabeza y habitar el cuerpo, el mundo.',
  'quiz.question.29.option.2':
    'Confiar sin dudar, sin anticipar el peligro.',
  'quiz.question.29.option.3':
    'Quedarte con lo difícil sin escapar a otra cosa.',
  'quiz.question.29.option.4': 'Mostrar vulnerabilidad sin sentirte débil.',

  'quiz.question.30.prompt': 'Lo que te haría sentir más pleno en la vida es…',
  'quiz.question.30.option.1':
    'Paz interior real y conexión con todo lo que te rodea.',
  'quiz.question.30.option.2': 'Vivir plenamente según tus valores más altos.',
  'quiz.question.30.option.3': 'Dar amor sin perderte a ti mismo en ello.',
  'quiz.question.30.option.4': 'Éxito real, no solo aparente ni externo.',

  // Results chrome
  'results.top-type.eyebrow': 'Tu tipo principal',
  'results.wing.line': 'con ala ${wing} — ${essence}',
  'results.section.essence': 'Esencia',
  'results.section.motivation': 'Lo que te mueve',
  'results.section.shadow': 'Tu sombra',
  'results.section.gift': 'Tu don',
  'results.section.key-work': 'Trabajo clave',
  'results.wing.eyebrow': 'El ala ${wing}',
  'results.wing.description':
    'Tu ala es el tipo adyacente que te matiza. Tu ${top} vive con los colores del ${wing} — ${essence}. Un ${top}w${wing} se expresa distinto a un ${top}w${other}.',
  'results.top3.eyebrow': 'Tus 3 tipos dominantes',
  'results.all-types.summary': 'Ver los 9 tipos',
  'results.type-bar.aria-label': 'Puntuación del tipo ${type}',
  'results.restart.button': 'Volver a hacer el test',
  'results.restart.aria-label': 'Volver a hacer el test',
  'results.home.button': 'Volver al inicio',
  'results.home.aria-label': 'Volver a la página de inicio',
  'results.disclaimer.line-1':
    'Este test es una herramienta de exploración, no un diagnóstico.',
  'results.disclaimer.line-2':
    'Tu tipo real se confirma observando tu motivación en el tiempo.',

  // Enneatype 1
  'enneatype.1.name': 'El Reformador',
  'enneatype.1.subtitle': 'El Perfeccionista',
  'enneatype.1.essence': 'Integridad, disciplina, propósito',
  'enneatype.1.motivation':
    'Vivir correctamente, mejorar lo que ve, ser bueno y útil. Tu brújula interna es fuerte y exigente.',
  'enneatype.1.shadow':
    'Crítica constante (a ti y a otros), rigidez, resentimiento cuando el mundo no cumple con tus estándares. Te cuesta soltar.',
  'enneatype.1.gift':
    'Tienes una claridad moral y una capacidad de construir con estándares altos que pocos tienen. Cuando integras tu propio error, te vuelves sabio.',
  'enneatype.1.key-work':
    'Aprender a descansar. Permitir lo imperfecto en ti y en otros.',

  // Enneatype 2
  'enneatype.2.name': 'El Ayudador',
  'enneatype.2.subtitle': 'El Dador',
  'enneatype.2.essence': 'Empatía, calidez, conexión',
  'enneatype.2.motivation':
    'Sentirte amado, necesario, irremplazable para quienes te rodean. Sintonizas con las emociones ajenas casi sin esfuerzo.',
  'enneatype.2.shadow':
    'Te olvidas de tus propias necesidades, das para recibir amor, caes en manipulación sutil o en orgullo de "ser el que ayuda".',
  'enneatype.2.gift':
    'Tu capacidad de cuidar y de leer al otro es real y poderosa. Cuando das desde la abundancia y no desde la carencia, transformas vidas.',
  'enneatype.2.key-work':
    'Preguntarte qué necesitas TÚ, sin mirar al otro primero.',

  // Enneatype 3
  'enneatype.3.name': 'El Triunfador',
  'enneatype.3.subtitle': 'El Ejecutor',
  'enneatype.3.essence': 'Logro, eficiencia, imagen',
  'enneatype.3.motivation':
    'Ser valioso, admirado, exitoso. Adaptas tu forma al entorno para destacar. Vives orientado a resultados.',
  'enneatype.3.shadow':
    'Confundes quién eres con lo que logras. Te pones máscaras. Evitas sentir porque sentir te frena. Miedo profundo al fracaso público.',
  'enneatype.3.gift':
    'Capacidad de adaptación, de ejecución y de inspirar. Cuando te conectas con tu verdad interior, tu éxito deja de ser hueco.',
  'enneatype.3.key-work':
    'Sentir lo que hay debajo de la imagen. Parar sin sentir culpa.',

  // Enneatype 4
  'enneatype.4.name': 'El Individualista',
  'enneatype.4.subtitle': 'El Romántico',
  'enneatype.4.essence': 'Autenticidad, profundidad, belleza',
  'enneatype.4.motivation':
    'Encontrar y expresar tu identidad única. Sientes intensamente y buscas significado en todo. Te identificas con lo que te falta.',
  'enneatype.4.shadow':
    'Envidia (de lo que otros tienen y tú no), melancolía como identidad, dramatización, autoindulgencia emocional, sensación crónica de estar "incompleto".',
  'enneatype.4.gift':
    'Profundidad emocional, creatividad, capacidad de estar con el dolor propio y ajeno sin huir.',
  'enneatype.4.key-work':
    'Ver lo que SÍ tienes. Salir del yo-especial y conectarte con lo ordinario.',

  // Enneatype 5
  'enneatype.5.name': 'El Investigador',
  'enneatype.5.subtitle': 'El Observador',
  'enneatype.5.essence': 'Conocimiento, perspicacia, autonomía',
  'enneatype.5.motivation':
    'Entender cómo funcionan las cosas. Conservar tu energía, tu espacio y tus recursos. Prefieres observar antes que participar.',
  'enneatype.5.shadow':
    'Aislamiento, desconexión emocional, acumulación de información sin acción, sensación de ser un extraño en el mundo.',
  'enneatype.5.gift':
    'Claridad mental, capacidad de ver patrones que otros no ven, maestría técnica.',
  'enneatype.5.key-work':
    'Bajar del pensamiento al cuerpo. Actuar antes de sentir que tienes "suficiente" información.',

  // Enneatype 6
  'enneatype.6.name': 'El Leal',
  'enneatype.6.subtitle': 'El Guardián',
  'enneatype.6.essence': 'Lealtad, coraje, confianza',
  'enneatype.6.motivation':
    'Sentirte seguro, con apoyo, con un sistema o grupo al que pertenecer. Anticipas peligros y escenarios.',
  'enneatype.6.shadow':
    'Ansiedad crónica, desconfianza, dudas constantes, proyección de miedos, oscilación entre obediencia y rebeldía.',
  'enneatype.6.gift':
    'Lealtad real, coraje bajo presión, capacidad de prever problemas y proteger a los tuyos.',
  'enneatype.6.key-work':
    'Confiar en tu propia autoridad interna. Distinguir miedo real de miedo imaginado.',

  // Enneatype 7
  'enneatype.7.name': 'El Entusiasta',
  'enneatype.7.subtitle': 'El Aventurero',
  'enneatype.7.essence': 'Alegría, visión, variedad',
  'enneatype.7.motivation':
    'Mantenerte estimulado, en movimiento, con opciones abiertas. Evitar el dolor y el aburrimiento. Ves posibilidades en todo.',
  'enneatype.7.shadow':
    'Escapismo, dispersión, superficialidad, dificultad para comprometerte, tapar el vacío con experiencias nuevas.',
  'enneatype.7.gift':
    'Visión optimista real, creatividad conectiva, capacidad de reenmarcar lo difícil y mover a otros.',
  'enneatype.7.key-work':
    'Quedarte con lo difícil sin huir. Profundizar en vez de multiplicar.',

  // Enneatype 8
  'enneatype.8.name': 'El Desafiador',
  'enneatype.8.subtitle': 'El Protector',
  'enneatype.8.essence': 'Fuerza, autonomía, justicia',
  'enneatype.8.motivation':
    'Ser fuerte, autónomo, no estar bajo el control de nadie. Proteges a los tuyos. Dices la verdad aunque incomode.',
  'enneatype.8.shadow':
    'Intimidación, exceso (trabajo, comida, confrontación), negar tu propia vulnerabilidad, ver el mundo como campo de batalla.',
  'enneatype.8.gift':
    'Fuerza real, liderazgo, capacidad de proteger a los débiles y romper estructuras injustas.',
  'enneatype.8.key-work':
    'Mostrar tu ternura. Aceptar que ser vulnerable no te quita fuerza.',

  // Enneatype 9
  'enneatype.9.name': 'El Pacificador',
  'enneatype.9.subtitle': 'El Mediador',
  'enneatype.9.essence': 'Paz, aceptación, presencia',
  'enneatype.9.motivation':
    'Mantener la armonía interior y con los demás. Evitar el conflicto. Fusionarte con lo que te rodea.',
  'enneatype.9.shadow':
    'Autoabandono, pasividad, postergación, olvidarte de tu propio deseo, estar presente-ausente. Rabia reprimida que explota raramente.',
  'enneatype.9.gift':
    'Capacidad de ver todos los lados, de calmar tensiones, de estar presente con lo que hay sin forzarlo.',
  'enneatype.9.key-work':
    'Despertar tu propio deseo. Tomar posición. Existir visiblemente.',

  'enneatype.1.growth':
    'En crecimiento, te relajas. El juego y el apetito por la vida del tipo 7 se vuelven disponibles — dejas de vigilarte y empiezas a disfrutar lo que has construido.',
  'enneatype.1.stress':
    'Bajo presión, te metes en el territorio del tipo 4 — melancolía, retirada, la sensación silenciosa de que nadie ve cuánto te has esforzado.',
  'enneatype.2.growth':
    'En crecimiento, encuentras tu propio interior — el autoconocimiento del tipo 4. Dejas de leer la sala primero y empiezas a notar lo que sientes.',
  'enneatype.2.stress':
    'Bajo presión, te volteas hacia el tipo 8 — directo, confrontativo, castigando a quien no te devolvió lo que diste.',
  'enneatype.3.growth':
    'En crecimiento, tomas la lealtad y la cooperación del tipo 6 — dejas de competir con la gente que ya te quiere.',
  'enneatype.3.stress':
    'Bajo presión, te apagas como el tipo 9 — desenchufado, todo parece lo mismo, nada se siente lo bastante urgente como para perseguirlo.',
  'enneatype.4.growth':
    'En crecimiento, ganas la firmeza y los principios del tipo 1 — haces las cosas sin necesidad de que primero se sientan significativas.',
  'enneatype.4.stress':
    'Bajo presión, te mueves hacia el tipo 2 — demasiado implicado en los demás, usando la ayuda para evitar el vacío en tu centro.',
  'enneatype.5.growth':
    'En crecimiento, accedes a la capacidad del tipo 8 de actuar desde el cuerpo — dejas de observar y empiezas a implicarte con peso.',
  'enneatype.5.stress':
    'Bajo presión, te dispersas como el tipo 7 — saltando entre ideas, evitando lo que importa quedándote en lo siguiente.',
  'enneatype.6.growth':
    'En crecimiento, te asientas en la confianza del tipo 9 — puedes descansar sin escanear amenazas. Las cosas están bien de verdad.',
  'enneatype.6.stress':
    'Bajo presión, echas mano del tipo 3 — actuando competencia, empujando más fuerte, esperando que el logro calme la ansiedad.',
  'enneatype.7.growth':
    'En crecimiento, tomas la profundidad del tipo 5 — puedes quedarte con una sola cosa el tiempo suficiente para entenderla.',
  'enneatype.7.stress':
    'Bajo presión, te mueves hacia el tipo 1 — crítico, resentido, ordenando a todo el mundo como si eso fuera a parar el malestar.',
  'enneatype.8.growth':
    'En crecimiento, te abres a la suavidad del tipo 2 — dejas que la gente te importe sin necesitar que sean útiles.',
  'enneatype.8.stress':
    'Bajo presión, te retiras al tipo 5 — planeando en secreto, cortando con la gente, sin confiar en nadie.',
  'enneatype.9.growth':
    'En crecimiento, encuentras el movimiento del tipo 3 — dejas de postergar y te presentas por lo que quieres.',
  'enneatype.9.stress':
    'Bajo presión, colapsas hacia el tipo 6 — duda, parálisis, revisando todas las posibilidades sin comprometerte con ninguna.',

  'enneatype.center.head': 'Mente',
  'enneatype.center.heart': 'Corazón',
  'enneatype.center.gut': 'Instinto',
  'results.tritype.eyebrow': 'Tu tritipo',
  'results.tritype.description':
    'El tipo dominante en cada uno de los tres centros — mente, corazón, instinto. Moldea cómo se expresa tu tipo principal día a día.',
  'results.arrows.eyebrow': 'Líneas de crecimiento y estrés',
  'results.arrows.growth.label': 'En crecimiento →',
  'results.arrows.stress.label': 'Bajo presión →',
  'results.triad.eyebrow': 'Tus tres centros',
  'results.triad.description':
    'El eneagrama lee la personalidad a través de tres inteligencias — instinto, corazón, mente. Tu perfil se apoya en cada una en proporciones distintas.',
  'results.triad.aria-label':
    'Instinto ${gut}%, corazón ${heart}%, mente ${head}%.',

  // Hub
  'hub.title': 'Dos puertas dentro.',
  'hub.subtitle': 'Una mirada a quien ya eres.',
  'hub.body':
    'Dos mapas complementarios. El Eneagrama revela la motivación inconsciente que te mueve. Jung / MBTI muestra cómo piensas, decides y actúas. Empieza por cualquiera — o recorre los dos.',
  'hub.card.enneagram.eyebrow': '9 patrones · ≈ 5 min',
  'hub.card.enneagram.title': 'Eneagrama',
  'hub.card.enneagram.subtitle': 'Por qué te mueves.',
  'hub.card.enneagram.pitch':
    'Nueve estructuras de personalidad basadas en la motivación inconsciente que te mueve — no en tu conducta visible.',
  'hub.card.enneagram.cta': 'Empezar →',
  'hub.card.enneagram.aria-label': 'Hacer el test del eneagrama',
  'hub.card.mbti.eyebrow': '16 tipos · ≈ 4 min',
  'hub.card.mbti.title': 'Jung / MBTI',
  'hub.card.mbti.subtitle': 'Cómo piensas.',
  'hub.card.mbti.pitch':
    'Cuatro dimensiones de la cognición — energía, percepción, decisión, estilo de vida. Dieciséis formas de estar en el mundo.',
  'hub.card.mbti.cta': 'Empezar →',
  'hub.card.mbti.aria-label': 'Hacer el test de Jung / MBTI',
  'hub.wiki.aria-label': 'Explorar la wiki de tipos',
  'hub.wiki.eyebrow': 'O explora la wiki',
  'hub.wiki.enneagram': '9 tipos del Eneagrama',
  'hub.wiki.mbti': '16 tipos Jung / MBTI',
  'hub.footnote':
    'Cada test es un espejo, no una jaula. Tómalo como un mapa, no como un veredicto.',

  // MBTI intro
  'mbti.intro.eyebrow': 'Mapa cognitivo',
  'mbti.intro.title': 'Jung / MBTI',
  'mbti.intro.subtitle': '4 dimensiones. 16 tipos.',
  'mbti.intro.body.1.before':
    'Carl Jung propuso que la mente trabaja a través de unas pocas ',
  'mbti.intro.body.1.em': 'funciones cognitivas',
  'mbti.intro.body.1.after':
    ' fundamentales. MBTI convierte esas funciones en cuatro dimensiones: dónde vive tu energía, cómo percibes, cómo decides y cómo organizas la vida.',
  'mbti.intro.body.2.before': 'Son 24 preguntas. Responde de forma ',
  'mbti.intro.body.2.em': 'espontánea',
  'mbti.intro.body.2.after':
    ', desde cómo eres normalmente — no desde la versión que actúas en el trabajo o en redes.',
  'mbti.intro.start.button': 'Empezar',
  'mbti.intro.start.aria-label': 'Empezar el test MBTI',
  'mbti.intro.duration': '≈ 4 minutos',

  // MBTI quiz chrome
  'mbti.quiz.back.button': '← Atrás',
  'mbti.quiz.back.aria-label': 'Volver a la pregunta anterior',
  'mbti.quiz.progress.aria-label': 'Progreso del test',
  'mbti.quiz.option.aria-label': 'Opción ${letter}: ${text}',
  'mbti.quiz.question.counter': 'Pregunta ${current} / ${total}',

  // MBTI questions
  'mbti.quiz.question.1.prompt': 'En un fin de semana largo, recargas estando…',
  'mbti.quiz.question.1.option.a': 'Con gente — cenas, planes, movimiento.',
  'mbti.quiz.question.1.option.b': 'Solo/a en casa — silencio, libros, tu propio ritmo.',

  'mbti.quiz.question.2.prompt': 'Al leer sobre algo nuevo, recuerdas mejor…',
  'mbti.quiz.question.2.option.a': 'Los ejemplos concretos y los hechos.',
  'mbti.quiz.question.2.option.b': 'La idea o el patrón de fondo.',

  'mbti.quiz.question.3.prompt': 'Un amigo se desahoga contigo. Tu primer instinto es…',
  'mbti.quiz.question.3.option.a': 'Diagnosticar la situación y ofrecer una solución.',
  'mbti.quiz.question.3.option.b': 'Acompañarle en cómo se siente.',

  'mbti.quiz.question.4.prompt': 'Tu sábado ideal es…',
  'mbti.quiz.question.4.option.a': 'Un plan claro desde por la mañana hasta la noche.',
  'mbti.quiz.question.4.option.b': 'Dejarlo abierto y ver qué surge.',

  'mbti.quiz.question.5.prompt': 'En una fiesta de desconocidos, después de dos horas estás…',
  'mbti.quiz.question.5.option.a': 'Encendido/a — quieres más.',
  'mbti.quiz.question.5.option.b': 'Listo/a para irte o encontrar una conversación tranquila.',

  'mbti.quiz.question.6.prompt': 'Confías más en alguien cuando…',
  'mbti.quiz.question.6.option.a': 'Habla desde la experiencia real y vivida.',
  'mbti.quiz.question.6.option.b': 'Ve conexiones que otros no ven.',

  'mbti.quiz.question.7.prompt': 'Al dar feedback sobre el trabajo de alguien, empiezas con…',
  'mbti.quiz.question.7.option.a': 'Lo que objetivamente está mal o podría mejorar.',
  'mbti.quiz.question.7.option.b': 'Lo que estuvo bien y cómo se sentirá la persona.',

  'mbti.quiz.question.8.prompt': 'Te incomoda cuando…',
  'mbti.quiz.question.8.option.a': 'Los planes son vagos o van cambiando.',
  'mbti.quiz.question.8.option.b': 'Las cosas se cierran demasiado pronto.',

  'mbti.quiz.question.9.prompt': 'En reuniones o chats de grupo, tú…',
  'mbti.quiz.question.9.option.a': 'Piensas en voz alta, hablas rápido, te alimentas de la sala.',
  'mbti.quiz.question.9.option.b': 'Escuchas, procesas por dentro, hablas cuando está listo.',

  'mbti.quiz.question.10.prompt': 'Al planear un viaje, ¿qué te atrae más?',
  'mbti.quiz.question.10.option.a': 'La comida, los sitios, el itinerario detallado.',
  'mbti.quiz.question.10.option.b': 'La atmósfera, la historia, la sensación del lugar.',

  'mbti.quiz.question.11.prompt': 'Una decisión difícil es difícil porque…',
  'mbti.quiz.question.11.option.a': 'Hay que sopesarla y encontrar el camino más lógico.',
  'mbti.quiz.question.11.option.b': 'No quieres hacer daño a nadie ni traicionar lo que importa.',

  'mbti.quiz.question.12.prompt': 'Tu mesa / habitación / bandeja tiende a estar…',
  'mbti.quiz.question.12.option.a': 'Ordenada — cada cosa tiene su sitio.',
  'mbti.quiz.question.12.option.b': 'Viva — un caos operativo por el que te mueves.',

  'mbti.quiz.question.13.prompt': 'Notas que te baja la energía cuando…',
  'mbti.quiz.question.13.option.a': 'Llevas demasiado tiempo solo/a.',
  'mbti.quiz.question.13.option.b': 'Llevas demasiado tiempo rodeado/a de gente.',

  'mbti.quiz.question.14.prompt': 'Te atrae más…',
  'mbti.quiz.question.14.option.a': 'Lo que es, ahora mismo — texturas, sabor, lo tangible.',
  'mbti.quiz.question.14.option.b': 'Lo que podría ser — posibilidades, significados, lo aún-no.',

  'mbti.quiz.question.15.prompt': 'Un amigo comete un error que te afecta. Tú…',
  'mbti.quiz.question.15.option.a': 'Se lo dices claro, aunque sea incómodo.',
  'mbti.quiz.question.15.option.b': 'Esperas, lo sientes, y encuentras forma de preservar el vínculo.',

  'mbti.quiz.question.16.prompt': 'Los plazos te hacen…',
  'mbti.quiz.question.16.option.a': 'Terminar pronto — odias la carrera de última hora.',
  'mbti.quiz.question.16.option.b': 'Rendir mejor en el sprint final — la presión te enfoca.',

  'mbti.quiz.question.17.prompt': 'En un entorno nuevo…',
  'mbti.quiz.question.17.option.a': 'Te lanzas y te presentas.',
  'mbti.quiz.question.17.option.b': 'Observas primero, entras despacio.',

  'mbti.quiz.question.18.prompt': '¿Qué cumplido te llega más adentro?',
  'mbti.quiz.question.18.option.a': '«Eres muy fiable. Puedo contar contigo.»',
  'mbti.quiz.question.18.option.b': '«Ves cosas que nadie más ve.»',

  'mbti.quiz.question.19.prompt': 'Tu forma de resolver conflictos es…',
  'mbti.quiz.question.19.option.a': 'Poner los hechos sobre la mesa y decidir qué es justo.',
  'mbti.quiz.question.19.option.b': 'Reparar la relación, y luego hablar del resto.',

  'mbti.quiz.question.20.prompt': 'Ante un proyecto abierto, tú…',
  'mbti.quiz.question.20.option.a': 'Lo divides en fases con hitos.',
  'mbti.quiz.question.20.option.b': 'Exploras en amplio y dejas que la forma emerja.',

  'mbti.quiz.question.21.prompt': 'Cuando estás muy cansado/a, quieres…',
  'mbti.quiz.question.21.option.a': 'Compañía — cena, una llamada, calor humano.',
  'mbti.quiz.question.21.option.b': 'Silencio — tu cuarto, nadie pidiéndote nada.',

  'mbti.quiz.question.22.prompt': 'Te irritan las conversaciones demasiado…',
  'mbti.quiz.question.22.option.a': 'Abstractas y desconectadas de la vida real.',
  'mbti.quiz.question.22.option.b': 'Literales y que pierden la imagen completa.',

  'mbti.quiz.question.23.prompt': 'En tensión con alguien, para ti gana…',
  'mbti.quiz.question.23.option.a': 'Ser honesto/a, aunque cueste.',
  'mbti.quiz.question.23.option.b': 'Ser amable, aunque algo quede sin decir.',

  'mbti.quiz.question.24.prompt': 'Itinerarios de viaje: tú…',
  'mbti.quiz.question.24.option.a': 'Los quieres reservados por adelantado.',
  'mbti.quiz.question.24.option.b': 'Prefieres decidir sobre la marcha.',

  // MBTI axis labels
  'mbti.axis.EI.label': 'Energía',
  'mbti.axis.EI.letter.a': 'E',
  'mbti.axis.EI.letter.b': 'I',
  'mbti.axis.EI.word.a': 'Extraversión',
  'mbti.axis.EI.word.b': 'Introversión',

  'mbti.axis.SN.label': 'Percepción',
  'mbti.axis.SN.letter.a': 'S',
  'mbti.axis.SN.letter.b': 'N',
  'mbti.axis.SN.word.a': 'Sensación',
  'mbti.axis.SN.word.b': 'Intuición',

  'mbti.axis.TF.label': 'Decisión',
  'mbti.axis.TF.letter.a': 'T',
  'mbti.axis.TF.letter.b': 'F',
  'mbti.axis.TF.word.a': 'Pensamiento',
  'mbti.axis.TF.word.b': 'Sentimiento',

  'mbti.axis.JP.label': 'Estilo de vida',
  'mbti.axis.JP.letter.a': 'J',
  'mbti.axis.JP.letter.b': 'P',
  'mbti.axis.JP.word.a': 'Juicio',
  'mbti.axis.JP.word.b': 'Percepción',

  // MBTI results chrome
  'mbti.results.eyebrow': 'Tu perfil',
  'mbti.results.axes.eyebrow': 'Tus cuatro dimensiones',
  'mbti.results.restart.button': 'Repetir el test',
  'mbti.results.restart.aria-label': 'Repetir el test MBTI',
  'mbti.results.home.button': 'Volver al inicio',
  'mbti.results.home.aria-label': 'Volver a la página de inicio',
  'mbti.results.disclaimer.line-1':
    'MBTI es una lente, no una etiqueta. Describe preferencia, no capacidad.',
  'mbti.results.disclaimer.line-2':
    'Úsalo como mapa para verte — no como caja en la que vivir.',

  // MBTI types
  'mbti.type.INTJ.name': 'El Arquitecto',
  'mbti.type.INTJ.subtitle': 'El Estratega',
  'mbti.type.INTJ.essence': 'Visión, sistemas, horizontes largos',
  'mbti.type.INTJ.motivation':
    'Entender cómo funcionan las cosas en el fondo y diseñar el mejor camino posible — y luego ejecutarlo en silencio.',
  'mbti.type.INTJ.shadow':
    'Certeza fría, impaciencia con quien aún no lo ve, tendencia a descartar la emoción como ineficiente.',
  'mbti.type.INTJ.gift':
    'Claridad estratégica que corta el ruido. Ves la forma de las cosas años antes que los demás.',
  'mbti.type.INTJ.key-work':
    'Quedarte con lo humano. No todo lo que te resiste está mal — a veces está vivo.',

  'mbti.type.INTP.name': 'El Lógico',
  'mbti.type.INTP.subtitle': 'El Pensador',
  'mbti.type.INTP.essence': 'Curiosidad, análisis, libertad de pensamiento',
  'mbti.type.INTP.motivation':
    'Entender. Desarmar las ideas, encontrar la inconsistencia, reconstruirlas mejor. Vives en el espacio de las preguntas.',
  'mbti.type.INTP.shadow':
    'Análisis sin fin que no se envía. Distancia emocional. Condescendencia con quien piensa menos rigurosamente.',
  'mbti.type.INTP.gift':
    'Pensamiento original. Notas supuestos que todos dan por sentado — y los desmontas.',
  'mbti.type.INTP.key-work':
    'Comprometerte con algo antes de sentir que está perfecto. Deja que el mundo pruebe tus ideas.',

  'mbti.type.ENTJ.name': 'El Comandante',
  'mbti.type.ENTJ.subtitle': 'El Constructor',
  'mbti.type.ENTJ.essence': 'Estrategia, acción, escala',
  'mbti.type.ENTJ.motivation':
    'Ver una visión y construirla. Combinas pensamiento estratégico con la pulsión de ejecutar en escala. Lideras sin pedir permiso.',
  'mbti.type.ENTJ.shadow':
    'Sobrecontrol, pasar por encima de la gente, confundir desacuerdo con debilidad. Tratar las relaciones como proyectos.',
  'mbti.type.ENTJ.gift':
    'Combinación rara de visión y ejecución. Conviertes planes imposibles en instituciones.',
  'mbti.type.ENTJ.key-work':
    'Bajar el ritmo para escuchar a la gente. Tu plan suele tener razón — pero tu paso a veces es inhumano.',

  'mbti.type.ENTP.name': 'El Retador',
  'mbti.type.ENTP.subtitle': 'El Visionario',
  'mbti.type.ENTP.essence': 'Ideas, provocación, posibilidad',
  'mbti.type.ENTP.motivation':
    'Jugar con ideas, desafiar la sabiduría recibida, abrir puertas que otros tomaban por muros. Piensas mejor discutiendo.',
  'mbti.type.ENTP.shadow':
    'Empezar diez cosas y no terminar ninguna. Discutir por deporte. Usar tu agilidad como escudo contra la vulnerabilidad.',
  'mbti.type.ENTP.gift':
    'Generatividad intelectual. Ves ángulos que nadie veía. Eres catalizador de personas y proyectos.',
  'mbti.type.ENTP.key-work':
    'Terminar. Profundizar lo suficiente en una cosa para que de verdad cambie algo.',

  'mbti.type.INFJ.name': 'El Defensor',
  'mbti.type.INFJ.subtitle': 'El Vidente',
  'mbti.type.INFJ.essence': 'Visión, profundidad, sentido',
  'mbti.type.INFJ.motivation':
    'Entender a las personas en profundidad y mover el mundo hacia una dirección más humana. Vives con un pie en lo que es y otro en lo que podría ser.',
  'mbti.type.INFJ.shadow':
    'Perfeccionismo con la gente. Quemarte en silencio. Retirarte por completo cuando te abruma, y llamarlo «protegerme».',
  'mbti.type.INFJ.gift':
    'Intuición profunda sobre las personas y sus patrones. Ves la humanidad entera de alguien antes de que la muestre.',
  'mbti.type.INFJ.key-work':
    'Dejarte conocer, no solo conocer. Ves a los demás con claridad — deja que te vean a ti.',

  'mbti.type.INFP.name': 'El Mediador',
  'mbti.type.INFP.subtitle': 'El Soñador',
  'mbti.type.INFP.essence': 'Autenticidad, profundidad, vida interior',
  'mbti.type.INFP.motivation':
    'Vivir alineado con tus valores. Proteger tu mundo interior y a las personas que necesitan protección.',
  'mbti.type.INFP.shadow':
    'Idealización que se rompe en decepción. Refugio en la fantasía. Tomar tu incomodidad con la realidad como prueba de tu especialidad.',
  'mbti.type.INFP.gift':
    'Imaginación moral. Sientes lo que otros no se permiten sentir, y puedes escribirlo / hacerlo / decirlo por ellos.',
  'mbti.type.INFP.key-work':
    'Traer tu mundo interior al exterior. El sueño importa cuando lo construyes.',

  'mbti.type.ENFJ.name': 'El Protagonista',
  'mbti.type.ENFJ.subtitle': 'El Catalizador',
  'mbti.type.ENFJ.essence': 'Liderazgo humano',
  'mbti.type.ENFJ.motivation':
    'Ver el potencial de la gente y ayudarles a alcanzarlo. Lideras elevando a los demás. Sientes la sala como información.',
  'mbti.type.ENFJ.shadow':
    'Identificarte demasiado con los demás. Perder tu propia forma. Manipulación sutil vestida de «ayudar». Resentimiento cuando el cuidado no vuelve.',
  'mbti.type.ENFJ.gift':
    'Puedes mover a grupos. Haces sentir visto a la gente — y a tu alrededor se vuelven más.',
  'mbti.type.ENFJ.key-work':
    'Volver a casa, a ti mismo/a. Tus necesidades no son una distracción de la misión.',

  'mbti.type.ENFP.name': 'El Activista',
  'mbti.type.ENFP.subtitle': 'La Chispa',
  'mbti.type.ENFP.essence': 'Posibilidad, calor, fuego',
  'mbti.type.ENFP.motivation':
    'Seguir lo que está vivo. Conectar con personas e ideas que se sienten verdad. Enciendes lo que tocas.',
  'mbti.type.ENFP.shadow':
    'Dispersarte entre demasiadas pasiones. Quemarte cuando lo nuevo deja de serlo. Dificultad con las fases lentas y áridas de lo real.',
  'mbti.type.ENFP.gift':
    'Vitalidad poco común. Traes energía a las salas y sentido a las relaciones.',
  'mbti.type.ENFP.key-work':
    'Quedarte cuando se vuelve ordinario. La profundidad es donde vive la segunda capa de sentido.',

  'mbti.type.ISTJ.name': 'El Logista',
  'mbti.type.ISTJ.subtitle': 'El Ancla',
  'mbti.type.ISTJ.essence': 'Fiabilidad, orden, deber',
  'mbti.type.ISTJ.motivation':
    'Hacerlo bien. Mantener funcionando los sistemas de los que otros dependen. Eres la razón por la que las cosas se sostienen.',
  'mbti.type.ISTJ.shadow':
    'Rigidez. Rechazar lo nuevo porque lo viejo funcionaba. Usar el «realismo» para evitar imaginar.',
  'mbti.type.ISTJ.gift':
    'Excelencia sin glamour. Eres la razón por la que las cosas funcionan. La gente confía en ti con motivo.',
  'mbti.type.ISTJ.key-work':
    'Permitirte cambiar la receta. La tradición es una herramienta, no la jefa.',

  'mbti.type.ISFJ.name': 'El Protector',
  'mbti.type.ISFJ.subtitle': 'El Guardián',
  'mbti.type.ISFJ.essence': 'Cuidado, memoria, devoción',
  'mbti.type.ISFJ.motivation':
    'Cuidar a las personas que quieres y los lugares a los que perteneces. Recuerdas lo que otros olvidan.',
  'mbti.type.ISFJ.shadow':
    'Resentimiento silencioso. Dar en exceso y sentirte invisible. Miedo al cambio disfrazado de lealtad.',
  'mbti.type.ISFJ.gift':
    'Eres el tejido silencioso que sostiene grupos y familias. Sin ti, se nota enseguida.',
  'mbti.type.ISFJ.key-work':
    'Pedir lo que necesitas en voz alta. Tu cuidado pesa más cuando es regalo, no deuda.',

  'mbti.type.ESTJ.name': 'El Ejecutivo',
  'mbti.type.ESTJ.subtitle': 'El Organizador',
  'mbti.type.ESTJ.essence': 'Estructura, acción, estándares',
  'mbti.type.ESTJ.motivation':
    'Que las cosas se hagan, bien y a tiempo. Organizas la realidad en cosas que funcionan. Asumes responsabilidad de forma natural.',
  'mbti.type.ESTJ.shadow':
    'Sobrecontrol. Descartar la emoción como blandenga. Confundir tus estándares con verdad universal.',
  'mbti.type.ESTJ.gift':
    'Haces que los planes grandes pasen de verdad. Eres infraestructura cívica en forma humana.',
  'mbti.type.ESTJ.key-work':
    'Ablandarte con quien no va a tu ritmo. No todo el mundo funciona como un proyecto.',

  'mbti.type.ESFJ.name': 'El Cónsul',
  'mbti.type.ESFJ.subtitle': 'El Anfitrión',
  'mbti.type.ESFJ.essence': 'Calor, orden, pertenencia',
  'mbti.type.ESFJ.motivation':
    'Crear espacios donde la gente se sienta bienvenida y las cosas fluyan. Cuidas el tejido de un grupo.',
  'mbti.type.ESFJ.shadow':
    'Necesitar caer bien. Tomarte el desacuerdo como algo personal. Cotillear para manejar la ansiedad de pertenecer.',
  'mbti.type.ESFJ.gift':
    'Haces comunidad donde no había. La gente se siente sostenida a tu alrededor.',
  'mbti.type.ESFJ.key-work':
    'Tolerar que te dejen de gustar por decir la verdad. Pertenecer traicionando la verdad no es pertenencia.',

  'mbti.type.ISTP.name': 'El Virtuoso',
  'mbti.type.ISTP.subtitle': 'El Artesano',
  'mbti.type.ISTP.essence': 'Destreza, autonomía, presencia',
  'mbti.type.ISTP.motivation':
    'Entender cómo funciona — usándolo, desmontándolo, haciéndolo. Aprendes con las manos.',
  'mbti.type.ISTP.shadow':
    'Evitación emocional. Enmudecer y desaparecer. Tratar los sentimientos como problema de otros.',
  'mbti.type.ISTP.gift':
    'Competencia serena bajo presión. En una crisis no actúas — actúas de verdad.',
  'mbti.type.ISTP.key-work':
    'Dejar entrar a la gente. Tu independencia es real; tu necesidad de conexión también.',

  'mbti.type.ISFP.name': 'El Aventurero',
  'mbti.type.ISFP.subtitle': 'El Artista Silencioso',
  'mbti.type.ISFP.essence': 'Estética, presencia, intensidad callada',
  'mbti.type.ISFP.motivation':
    'Vivir en belleza y verdad, a tu manera, sin imponer ni explicar. Sientes profundo y lo muestras por lo que haces.',
  'mbti.type.ISFP.shadow':
    'Retirarte por completo cuando te presionan. Evitar el conflicto hasta que se vuelve resentimiento. Subestimar tus propios dones.',
  'mbti.type.ISFP.gift':
    'Sensibilidad artística real. Haces más vivo el mundo a tu alrededor por cómo lo habitas.',
  'mbti.type.ISFP.key-work':
    'Dejar que tu trabajo se vea. Tu quietud no es lo mismo que tu ausencia.',

  'mbti.type.ESTP.name': 'El Empresario',
  'mbti.type.ESTP.subtitle': 'El Realista',
  'mbti.type.ESTP.essence': 'Acción, riesgo, presencia',
  'mbti.type.ESTP.motivation':
    'Actuar. Encarar la realidad de frente y hacer que algo pase. Piensas en movimiento.',
  'mbti.type.ESTP.shadow':
    'Impulsividad. Aburrimiento con lo que no se puede probar ahora. Quemar puentes que luego harán falta.',
  'mbti.type.ESTP.gift':
    'Desatascas cosas. Donde otros deliberan, tú te mueves — y sueles tener razón.',
  'mbti.type.ESTP.key-work':
    'Desarrollar el arco largo. Algunas cosas que quieres piden años de trabajo sin brillo.',

  'mbti.type.ESFP.name': 'El Animador',
  'mbti.type.ESFP.subtitle': 'El Intérprete',
  'mbti.type.ESFP.essence': 'Alegría, presencia, vida',
  'mbti.type.ESFP.motivation':
    'Estar plenamente vivo en el momento y llevarte a los demás. Encuentras la fiesta casi en cualquier cosa.',
  'mbti.type.ESFP.shadow':
    'Evitar lo incómodo quedándote en movimiento. Dejar que la fiesta tape un dolor más hondo. Dificultad con planificar y con las consecuencias.',
  'mbti.type.ESFP.gift':
    'Generas alegría. Sacas a la gente de su cabeza y la devuelves a su vida.',
  'mbti.type.ESFP.key-work':
    'Quedarte con el sentimiento difícil lo suficiente para aprender. El día después también es maestro.',

  // Share
  'share.button': 'Compartir',
  'share.button.aria-label': 'Compartir tu resultado',
  'share.preparing': 'Preparando tu tarjeta…',
  'share.copied': 'Copiado al portapapeles',
  'share.downloaded': 'Imagen guardada',
  'share.failed': 'No se pudo compartir — inténtalo de nuevo',
  'share.wa.text':
    'Hice el test de ${quiz} en enatipos. Mi resultado: ${result}. Haz el tuyo →',
  'share.quiz.enneagram': 'Eneagrama',
  'share.quiz.mbti': 'Jung / MBTI',
  'share.card.footer': 'enatipos — conócete',

  'wiki.mbti.index.eyebrow': 'Los 16 tipos',
  'wiki.mbti.index.title': 'Jung / MBTI',
  'wiki.mbti.index.subtitle': 'Dieciséis formas de estar en el mundo.',
  'wiki.enneagram.index.eyebrow': 'Los 9 tipos',
  'wiki.enneagram.index.title': 'Eneagrama',
  'wiki.enneagram.index.subtitle':
    'Nueve estructuras de motivación inconsciente.',
  'wiki.detail.take-test.mbti': 'Haz el test de Jung / MBTI →',
  'wiki.detail.take-test.enneagram': 'Haz el test del eneagrama →',
  'wiki.detail.back.mbti': '← Los 16 tipos',
  'wiki.detail.back.enneagram': '← Los 9 tipos',
  'wiki.detail.back-home': '← Inicio',
  'wiki.nav.types.mbti': 'Ver los 16 tipos',
  'wiki.nav.types.enneagram': 'Ver los 9 tipos',
  'results.wiki.cta': 'Más sobre ${code}',
  'wiki.famous-people.eyebrow': 'Personajes notables',
  'compatibility.title': 'Compatibilidad',
  'compatibility.section.dynamic': 'Cómo encienden',
  'compatibility.section.friction': 'Dónde rozan',
  'compatibility.section.together': 'Juntos',
  'compatibility.section.practice': 'El trabajo',
  'compatibility.placeholder': 'Aún estamos escribiendo este análisis. Vuelve pronto — o haz el test mientras tanto.',
  'compatibility.metadata.description': 'Cómo encajan ${aName} (${a}) y ${bName} (${b}) — sinergia, fricción y el trabajo conjunto.',
  'compatibility.cross-link.eyebrow': 'Compatibilidad con otros tipos',
  'compatibility.cross-link.intro.mbti': 'Cómo se relaciona ${code} con cada uno de los 16 tipos.',
  'compatibility.cross-link.intro.enneagram': 'Cómo se relaciona el Tipo ${type} con cada uno de los 9 tipos.',
  'compatibility.back.mbti': '← Volver a ${code}',
  'compatibility.back.enneagram': '← Volver al Tipo ${type}',

  // Eneagrama: compatibilidad entre tipos — 45 parejas × 4 secciones.
  'compatibility.enneagram.1-1.dynamic': "Dos reformadores ven la misma grieta en el mundo y sienten la misma urgencia por cerrarla. Los estándares se alinean rápido, y un proyecto moral compartido le da centro a la relación.",
  'compatibility.enneagram.1-1.friction': "Sin nadie que suavice el filo, cada imperfección se vuelve un veredicto. La crítica mutua se cuaja rápido en desprecio mutuo.",
  'compatibility.enneagram.1-1.together': "Una sociedad de cruzados — disciplinada, productiva, justiciera. Construyen algo que funciona; discuten si es lo bastante bueno.",
  'compatibility.enneagram.1-1.practice': "Suelta la auditoría. Ambos tienen que aprender que el fallo del otro al cumplir un estándar no es una traición personal — y que tener razón juntos no es lo mismo que estar cerca.",

  'compatibility.enneagram.1-2.dynamic': "El 1 aporta estructura y el 2 calor. El 2 humaniza la reforma del 1; el 1 evita que el cuidado del 2 se desplome en complacencia.",
  'compatibility.enneagram.1-2.friction': "El 1 corrige; el 2 toma la corrección como rechazo. El 2 da de más; el 1 nota que el dar está ligeramente desviado y lo dice.",
  'compatibility.enneagram.1-2.together': "Un par de maestro y cuidadora. Cohesivos cuando sirven a algo más grande que ellos; frágiles cuando giran la lente entre sí.",
  'compatibility.enneagram.1-2.practice': "El 1 tiene que recibir cuidado sin auditarlo. El 2 tiene que dejar de leer cada preferencia como un referéndum sobre su amor.",

  'compatibility.enneagram.1-3.dynamic': "Ambos son competentes, ambiciosos, orientados a resultados. Construyen con eficacia juntos — proyectos, negocios, familias — y desde fuera parecen una pareja imparable.",
  'compatibility.enneagram.1-3.friction': "El 1 quiere hacerlo bien; el 3 quiere hacerlo ya y que se vea bien. El 1 lee al 3 como alguien que recorta; el 3 lee al 1 como un freno al motor.",
  'compatibility.enneagram.1-3.together': "Triunfadores en claves distintas. Unidos por fuera, negociando por dentro entre principio y rendimiento.",
  'compatibility.enneagram.1-3.practice': "El 1 tiene que confiar en que 'suficientemente bueno para entregar' no es fracaso moral. El 3 tiene que frenar lo bastante para notar cuándo la victoria fue un atajo.",

  'compatibility.enneagram.1-4.dynamic': "La columna del 1 y la profundidad del 4 se complementan inusualmente bien. El 1 ancla el clima emocional del 4; el 4 descongela la vida interior del 1.",
  'compatibility.enneagram.1-4.friction': "El 1 lee los estados del 4 como autoindulgencia. El 4 lee la disciplina del 1 como evasión emocional — y se siente sermoneado por sentir.",
  'compatibility.enneagram.1-4.together': "Una pareja romántica-clásica. Hermosa en estaciones largas y suaves, brutal en las tormentas.",
  'compatibility.enneagram.1-4.practice': "El 1 tiene que dejar de optimizar los sentimientos del 4. El 4 tiene que dejar de usar el ánimo como identidad, sobre todo en conflicto.",

  'compatibility.enneagram.1-5.dynamic': "Ambos valoran la precisión y la competencia. Comparten una aversión a lo descuidado y un placer en afinar el modelo; la conversación es de alta señal.",
  'compatibility.enneagram.1-5.friction': "El 1 quiere el modelo implementado; el 5 lo quiere perfeccionado. El 1 se siente solo con el hacer mientras el 5 sigue investigando.",
  'compatibility.enneagram.1-5.together': "Un think-tank en forma doméstica. Tranquilo, ordenado, intelectualmente rico — y emocionalmente delgado si nadie lo cuida.",
  'compatibility.enneagram.1-5.practice': "El 1 tiene que liberar al 5 de ser co-ejecutor. El 5 tiene que participar en el mundo que el 1 sostiene, no solo analizarlo.",

  'compatibility.enneagram.1-6.dynamic': "Ambos son responsables, cumplidores, recelosos de la autoindulgencia. Hay reconocimiento mutuo inmediato: te tomas las cosas en serio, yo también.",
  'compatibility.enneagram.1-6.friction': "La certeza del 1 sobre lo correcto choca con la duda crónica del 6 sobre lo seguro. El 1 empieza a tirar; el 6 empieza a tensarse.",
  'compatibility.enneagram.1-6.together': "Una pareja construida sobre el deber. Fiable, leal, a veces sin alegría si olvidan darse permiso para la calma.",
  'compatibility.enneagram.1-6.practice': "El 1 tiene que dejar de tratar la ansiedad del 6 como un problema a resolver. El 6 tiene que dejar de buscar la certeza del 1 como sustituto de su propio apoyo.",

  'compatibility.enneagram.1-7.dynamic': "El 7 trae juego, posibilidad y elevación; el 1 trae disciplina, estructura y remate. Bien hecha, esta es una de las parejas más generativas del círculo.",
  'compatibility.enneagram.1-7.friction': "El 1 ve al 7 como ligero e irresponsable. El 7 ve al 1 como aguafiestas que raciona la alegría.",
  'compatibility.enneagram.1-7.together': "Opuestos cuyas flechas de crecimiento se cruzan — cada uno sostiene lo que el otro más necesita integrar.",
  'compatibility.enneagram.1-7.practice': "El 1 tiene que dejar que el placer exista sin ganarlo. El 7 tiene que quedarse en la habitación cuando algo es duro, aburrido o inacabado.",

  'compatibility.enneagram.1-8.dynamic': "Dos tipos de voluntad fuerte que no se acobardan. La honestidad es directa; la debilidad no se usa como arma; la lealtad, una vez dada, pesa.",
  'compatibility.enneagram.1-8.friction': "Ambos reprimen material de sombra similar en torno a la ira y el control. Los conflictos escalan rápido y rara vez aterrizan a la altura correcta.",
  'compatibility.enneagram.1-8.together': "Una alianza formidable — clara, principista, y un poco dura con quienes tienen alrededor.",
  'compatibility.enneagram.1-8.practice': "El 1 tiene que dejar de moralizar la franqueza del 8. El 8 tiene que dejar de leer los estándares del 1 como un intento de dominio.",

  'compatibility.enneagram.1-9.dynamic': "El 9 calma al crítico interno del 1; el 1 ayuda al 9 a aparecer en su propia vida. Mismo centro instintivo, distinto volumen — se reconocen al instante.",
  'compatibility.enneagram.1-9.friction': "La presión del 1 por mejorar choca con el instinto del 9 de mantener la paz, y el 9 desaparece en un acuerdo que no resuelve nada.",
  'compatibility.enneagram.1-9.together': "Una de las parejas más suaves entre los 1. Estable, lenta, a veces demasiado lenta.",
  'compatibility.enneagram.1-9.practice': "El 1 tiene que dejar de empujar — el 9 se retira más con cada empujón. El 9 tiene que tomar realmente una posición, especialmente la incómoda.",

  'compatibility.enneagram.2-2.dynamic': "Dos ayudadores saben hacer que una habitación se sienta sostenida. La generosidad fluye en ambas direcciones; los lenguajes del amor se alinean sin esfuerzo al principio.",
  'compatibility.enneagram.2-2.friction': "Ninguno es bueno recibiendo. Ambos llevan en silencio la cuenta de quién ha dado más, y el marcador nunca se reinicia.",
  'compatibility.enneagram.2-2.together': "Una pareja radiante hacia fuera; hacia dentro, una competencia silenciosa por quién es más generoso.",
  'compatibility.enneagram.2-2.practice': "Ambos tienen que arriesgarse a pedir lo que quieren, en palabras claras, y aceptar la respuesta no.",

  'compatibility.enneagram.2-3.dynamic': "El 3 le da al 2 un proyecto que apoyar y el 2 le da al 3 un lugar suave donde no se exige rendimiento — cuando esto funciona, funciona poderosamente.",
  'compatibility.enneagram.2-3.friction': "El 2 empieza a sentirse usado; el 3 empieza a sentirse gestionado. El cuidado del 2 se vuelve un pedido de atención; el motor del 3 empieza a parecer una marca que el 2 ayuda a llevar.",
  'compatibility.enneagram.2-3.together': "La plantilla clásica de la pareja imparable — admirada por fuera, transaccional por dentro si no tienen cuidado.",
  'compatibility.enneagram.2-3.practice': "El 3 tiene que dejarse amar por quien es, no por lo que produce — y dejar que el 2 lo vea cansado. El 2 tiene que dejar de ganarse la relación.",

  'compatibility.enneagram.2-4.dynamic': "Ambos viven en el centro del corazón. El vocabulario emocional fluye en los dos lados; profundidad, intimidad y sentido son la lengua nativa.",
  'compatibility.enneagram.2-4.friction': "El 2 quiere calmar lo que duele; el 4 quiere ser encontrado dentro del dolor, no rescatado de él. La ayuda del 2 se vuelve la prueba para el 4 de no ser comprendido.",
  'compatibility.enneagram.2-4.together': "Una pareja emocionalmente intensa — hermosa y agotadora en proporciones similares.",
  'compatibility.enneagram.2-4.practice': "El 2 tiene que sentarse con el dolor del 4 sin intentar levantarlo. El 4 tiene que dejar de rechazar el amor que llega en forma poco sofisticada.",

  'compatibility.enneagram.2-5.dynamic': "El 2 descongela al 5; el 5 le da al 2 una presencia firme y sin drama. Cada uno recibe una cualidad que el otro no genera fácil solo.",
  'compatibility.enneagram.2-5.friction': "El 2 quiere implicación; el 5 quiere espacio. El 2 lee la retirada del 5 como rechazo. El 5 lee el alcance del 2 como intrusión.",
  'compatibility.enneagram.2-5.together': "Un estudio de necesidades opuestas que pueden volverse profundamente complementarias o pasar hambre en silencio.",
  'compatibility.enneagram.2-5.practice': "El 2 tiene que darle al 5 su soledad sin convertirla en crisis. El 5 tiene que salir de la cueva a tiempo, no solo cuando le conviene.",

  'compatibility.enneagram.2-6.dynamic': "Ambos son leales, devotos y orientados a las personas que aman. La fiabilidad es alta; la relación se siente como un refugio para los dos.",
  'compatibility.enneagram.2-6.friction': "La duda del 6 choca con el orgullo del 2. El 2 sobre-tranquiliza; el 6 sigue probando. Bucles de ayuda ansiosa se forman rápido.",
  'compatibility.enneagram.2-6.together': "Un hogar cálido, fiable y un poco ansioso. Fuerte en cuidado, ligero en independencia.",
  'compatibility.enneagram.2-6.practice': "El 2 tiene que dejar de actuar una certeza que no siente. El 6 tiene que dejar de exigir una certeza que nadie puede dar.",

  'compatibility.enneagram.2-7.dynamic': "La energía del 7 ilumina la vida del 2; el cuidado del 2 le da a los entusiasmos del 7 un puerto base. Los días son brillantes, los planes están llenos, la agenda social zumba.",
  'compatibility.enneagram.2-7.friction': "El 2 quiere ser la prioridad; el 7 quiere lo siguiente. El intento del 2 por la cercanía suena al 7 como una jaula.",
  'compatibility.enneagram.2-7.together': "Una pareja expansiva, social, cálida — larga en movimiento, a veces corta en quietud.",
  'compatibility.enneagram.2-7.practice': "El 7 tiene que recibir realmente el amor del 2 en lugar de metabolizarlo como una opción más. El 2 tiene que dejar de retener al 7 siendo indispensable.",

  'compatibility.enneagram.2-8.dynamic': "2 y 8 son socios en dirección de crecimiento — el 2 crece hacia la franqueza del 8, el 8 crece hacia la ternura del 2. La polaridad lo vuelve eléctrico.",
  'compatibility.enneagram.2-8.friction': "La franqueza del 8 hiere al 2; la presión emocional del 2 al 8 le suena manipuladora. Poder y cuidado se enredan, y alguien siempre se siente en deuda.",
  'compatibility.enneagram.2-8.together': "Una pareja de protector y cuidadora — feroz, leal y ocasionalmente explosiva.",
  'compatibility.enneagram.2-8.practice': "El 8 tiene que aprender que la suavidad no es debilidad. El 2 tiene que dejar de usar el cuidado como moneda y simplemente decir lo que quiere.",

  'compatibility.enneagram.2-9.dynamic': "Ambos son acomodadores, cálidos, orientados a la paz. La casa está calmada, los amigos se sienten bienvenidos, el conflicto es raro.",
  'compatibility.enneagram.2-9.friction': "Ambos evitan declarar lo que realmente necesitan. El resentimiento crece en silencio; nada sale a la luz hasta que algo se rompe.",
  'compatibility.enneagram.2-9.together': "Una pareja suave, generosa, a menudo invisible — el tipo de relación junto a la que todo el mundo se relaja.",
  'compatibility.enneagram.2-9.practice': "Ambos tienen que luchar contra el reflejo de desaparecer en las preferencias del otro. El deseo honesto — incluso pequeño y sin glamur — es el antídoto.",

  'compatibility.enneagram.3-3.dynamic': "Dos triunfadores admiran el motor del otro y no se disculpan por la ambición. Las victorias se acumulan; la agenda se llena; el equipo rinde alto.",
  'compatibility.enneagram.3-3.friction': "Con ambos rindiendo, nadie está siendo visto — la relación se vuelve otra arena para ganar.",
  'compatibility.enneagram.3-3.together': "Una fusión más que un matrimonio. Brillante por fuera, transaccional por dentro si ninguno baja del escenario.",
  'compatibility.enneagram.3-3.practice': "Al menos uno de los dos tiene que sentarse primero. La vulnerabilidad tiene que volverse una entrega, en plazo, hasta que se vuelva natural.",

  'compatibility.enneagram.3-4.dynamic': "El 3 admira la autenticidad del 4; el 4 admira los resultados del 3. Cada uno representa lo que el otro secretamente desea — imagen frente a esencia.",
  'compatibility.enneagram.3-4.friction': "El 3 encuentra al 4 autoindulgente; el 4 encuentra al 3 hueco. Cada uno se siente como una acusación de la inseguridad más profunda del otro.",
  'compatibility.enneagram.3-4.together': "Una pareja creativa potente — la ejecución del 3 más la visión del 4 puede producir trabajo real — sostenida por la misma tensión que la desgasta.",
  'compatibility.enneagram.3-4.practice': "El 3 tiene que frenar y decir la verdad sobre lo que realmente siente. El 4 tiene que entregar la cosa sin convertirla en un referéndum sobre su alma.",

  'compatibility.enneagram.3-5.dynamic': "El 3 lleva las ideas del 5 al mundo; el 5 le da al 3 la profundidad que el motor solo no genera. Juntos pueden hacer un trabajo inusualmente riguroso.",
  'compatibility.enneagram.3-5.friction': "El 3 quiere visibilidad; el 5 quiere privacidad. El 3 lee la reticencia del 5 como retención; el 5 lee la exposición del 3 como superficial.",
  'compatibility.enneagram.3-5.together': "Una pareja de experto y operadora — silenciosamente poderosa, fácil de subestimar.",
  'compatibility.enneagram.3-5.practice': "El 3 tiene que valorar el proceso del 5, no solo su resultado. El 5 tiene que salir y representar el trabajo, no solo producirlo.",

  'compatibility.enneagram.3-6.dynamic': "El 6 le da al 3 una base de lealtad; el 3 le da al 6 un modelo de acción confiada. Hay alivio mutuo — el 6 deja de pronosticar desastres, el 3 deja de necesitar convencer a la sala.",
  'compatibility.enneagram.3-6.friction': "La preocupación del 6 choca con la imagen del 3 — el 3 empieza a sentirse 'puesto nervioso.' El 6 empieza a sospechar que el 3 esconde algo tras el pulido.",
  'compatibility.enneagram.3-6.together': "Una pareja en modo equipo — funcional, leal, a veces ansiosa de sí misma.",
  'compatibility.enneagram.3-6.practice': "El 3 tiene que dejar de vender la relación y simplemente estar en ella. El 6 tiene que dejar de poner a prueba si el 3 es real, y confiar en la evidencia.",

  'compatibility.enneagram.3-7.dynamic': "Ambos son optimistas, rápidos y alérgicos a quedarse en el ánimo bajo. La vida se ve bien — y a menudo lo está, genuinamente — durante largos tramos.",
  'compatibility.enneagram.3-7.friction': "A ninguno se le da bien parar. Cuando llega algo doloroso, ambos buscan distracción, y la relación pierde su centro emocional.",
  'compatibility.enneagram.3-7.together': "Una pareja brillante, ocupada, a menudo envidiable — fuerte en impulso, frágil en lo oscuro.",
  'compatibility.enneagram.3-7.practice': "Ambos tienen que aprender a quedarse cuando quedarse incomoda. La relación se profundiza exactamente en los momentos que quieren saltarse.",

  'compatibility.enneagram.3-8.dynamic': "Dos tipos asertivos, orientados a resultados, que no se encogen. El poder se comparte en lugar de disputarse; lo que construyen, lo construyen grande.",
  'compatibility.enneagram.3-8.friction': "Ambos pelean por ganar y leen la concesión como debilidad. El 3 maneja en torno a la ira del 8; el 8 detecta el manejo y le molesta.",
  'compatibility.enneagram.3-8.together': "Una pareja de alta octanaje — formidable en el mundo, dependiente de la honestidad cruda en privado.",
  'compatibility.enneagram.3-8.practice': "El 3 tiene que dejar de actuar para el 8 y empezar a ser visto por él. El 8 tiene que usar menos fuerza; ya está recibida.",

  'compatibility.enneagram.3-9.dynamic': "El 9 le da al 3 un centro tranquilo al que volver; el 3 le da al 9 una razón para presentarse de verdad. Sus líneas de crecimiento se cruzan — cada uno tiene lo que el otro más necesita.",
  'compatibility.enneagram.3-9.friction': "El 3 confunde el ritmo del 9 con pereza. El 9 confunde el motor del 3 con inquietud. El 3 tira; el 9 desaparece en silencio.",
  'compatibility.enneagram.3-9.together': "Una pareja complementaria, a menudo muy duradera — cuando ambos honran el ritmo del otro.",
  'compatibility.enneagram.3-9.practice': "El 3 tiene que dejar de confundir velocidad con valor. El 9 tiene que elegir, en voz alta, antes de que el 3 elija por los dos.",

  'compatibility.enneagram.4-4.dynamic': "Dos 4 se reconocen al instante — vocabulario emocional, sensibilidad estética y la suposición compartida de que la profundidad es el punto.",
  'compatibility.enneagram.4-4.friction': "Ambos compiten, a veces en silencio, por el papel del más herido. El estado de ánimo refleja al estado de ánimo; los espirales se profundizan en lugar de resolverse.",
  'compatibility.enneagram.4-4.together': "Una pareja romántica, intensa, a menudo artística — radiante en climas emocionales largos, peligrosa en una tormenta sin ancla.",
  'compatibility.enneagram.4-4.practice': "Uno de los dos tiene que mantener los pies en tierra cuando el otro está en lo oscuro. Turnarse; no caer ambos a la vez.",

  'compatibility.enneagram.4-5.dynamic': "La profundidad emocional del 4 se encuentra con la profundidad intelectual del 5. La soledad se comparte sin tensión; la conversación va a lugares donde otras personas no van.",
  'compatibility.enneagram.4-5.friction': "El 4 quiere ser sentido; el 5 quiere ser dejado en paz. El 4 lee la retirada del 5 como rechazo; el 5 lee la intensidad del 4 como asedio.",
  'compatibility.enneagram.4-5.together': "Una pareja silenciosa, hacia dentro, a veces hermética — el tipo de relación a la que la mayoría de los de fuera nunca ven el interior.",
  'compatibility.enneagram.4-5.practice': "El 4 tiene que dejar de dramatizar para conseguir implicación. El 5 tiene que arriesgar realmente la presencia, no solo la disponibilidad.",

  'compatibility.enneagram.4-6.dynamic': "Ambos sienten cosas que el resto del mundo se pierde. Hay un vínculo real en torno a la verdad emocional poco contada.",
  'compatibility.enneagram.4-6.friction': "La intensidad del 4 activa la ansiedad del 6; la preocupación del 6 desinfla el ánimo del 4. Pueden amplificar sus peores espirales si no tienen cuidado.",
  'compatibility.enneagram.4-6.together': "Una pareja leal, perceptiva, a veces preocupada — fuerte cuando son cotestigos, débil cuando son co-espirales.",
  'compatibility.enneagram.4-6.practice': "El 4 tiene que dejar de probar si el 6 se irá. El 6 tiene que dejar de escanear el ánimo del 4 y simplemente estar al lado.",

  'compatibility.enneagram.4-7.dynamic': "El 7 saca al 4 del pozo; el 4 le da a la vida del 7 profundidad y forma. Cada uno carga exactamente lo que el otro más resiste en sí mismo.",
  'compatibility.enneagram.4-7.friction': "El 4 lee la huida del 7 como traición al sentimiento. El 7 lee la profundidad del 4 como una trampa. La evasión y la intensidad chocan en lugar de equilibrarse.",
  'compatibility.enneagram.4-7.together': "Una pareja luz-y-oscuridad — de alta amplitud, alta recompensa, solo estable cuando ambos se inclinan hacia el centro.",
  'compatibility.enneagram.4-7.practice': "El 7 tiene que dejar de huir. El 4 tiene que dejar de tirar de la huida.",

  'compatibility.enneagram.4-8.dynamic': "Ambos son intensos, sin pretensión, alérgicos a la actuación. Hay una honestidad inmediata que el 4 y el 8 rara vez consiguen con nadie más.",
  'compatibility.enneagram.4-8.friction': "La fuerza del 8 se siente invasiva para el 4; el ánimo del 4 se siente caótico para el 8. Sentimientos grandes en ambos lados sin mucha regulación.",
  'compatibility.enneagram.4-8.together': "Una pareja volátil, devota — cuando se confían, no se confían así con nadie más.",
  'compatibility.enneagram.4-8.practice': "El 8 tiene que cuidar su poder; el 4 tiene que dejar de usar la emoción como contrarma.",

  'compatibility.enneagram.4-9.dynamic': "La dirección de crecimiento del 4 es el territorio natal del 9 — paz, aceptación, presencia. El 9 calma al 4 solo con estar en la habitación.",
  'compatibility.enneagram.4-9.friction': "El 9 se anestesia ante el clima emocional del 4; el 4 lee la anestesia como abandono. El 4 sube el volumen para ser sentido; el 9 se aleja más.",
  'compatibility.enneagram.4-9.together': "Una pareja suave, a menudo profunda — el 9 sostiene el continente; el 4 lo llena de color.",
  'compatibility.enneagram.4-9.practice': "El 9 tiene que mantenerse implicado cuando sube la temperatura. El 4 tiene que dejar de probar si al 9 le importa.",

  'compatibility.enneagram.5-5.dynamic': "Dos 5 se dan un regalo raro: presencia sin demanda. La soledad se comparte; las búsquedas intelectuales se acumulan.",
  'compatibility.enneagram.5-5.friction': "Ambos se retiran bajo presión, y nadie vuelve a reparar. Días de silencio se comprimen en meses de distancia.",
  'compatibility.enneagram.5-5.together': "Un vínculo silencioso, considerado, a menudo invisible — del tipo que sobrevive separaciones que ninguna otra relación de tipo soportaría.",
  'compatibility.enneagram.5-5.practice': "Uno de los dos tiene que romper el silencio. Por defecto, hacer la llamada, mandar el mensaje, el pequeño regreso — sin esperar a que se lo pidan.",

  'compatibility.enneagram.5-6.dynamic': "Ambos son tipos de cabeza que piensan duro antes de actuar. Hay un respeto compartido por la evidencia, la preparación y no dejarse engañar.",
  'compatibility.enneagram.5-6.friction': "El 6 quiere tranquilización; el 5 quiere que lo dejen pensar. El 6 empieza a tirar de la implicación; el 5 se retira; el 6 catastrofiza la retirada.",
  'compatibility.enneagram.5-6.together': "Una pareja cerebral, cuidadosa — fuerte en planificar, débil en calidez espontánea.",
  'compatibility.enneagram.5-6.practice': "El 5 tiene que sacar a flote su pensamiento — el silencio se lee como abandono para un 6. El 6 tiene que tolerar no ser informado en tiempo real.",

  'compatibility.enneagram.5-7.dynamic': "Ambos son tipos de cabeza — pero donde el 5 conserva, el 7 gasta. El 7 saca al 5 al mundo; el 5 le da al 7 algo en lo que profundizar de verdad.",
  'compatibility.enneagram.5-7.friction': "El ritmo del 7 agota al 5; la retirada del 5 frustra al 7. Distintas formas de evitar el mismo dolor.",
  'compatibility.enneagram.5-7.together': "Una pareja complementaria del centro de cabeza cuando cada uno respeta el metabolismo del otro.",
  'compatibility.enneagram.5-7.practice': "El 7 tiene que aterrizar. El 5 tiene que salir. Ambos tienen que dejar de usar la actividad mental para esquivar el sentir.",

  'compatibility.enneagram.5-8.dynamic': "La flecha de crecimiento del 5 apunta al 8 — hay una atracción real en esta pareja. El 8 trae al 5 a su cuerpo; el 5 le aporta al 8 perspectiva.",
  'compatibility.enneagram.5-8.friction': "La intensidad del 8 abruma al 5; el desapego del 5 enfurece al 8. El 5 se retira; el 8 escala; el espiral es rápido.",
  'compatibility.enneagram.5-8.together': "Una pareja extraña que, cuando funciona, integra poder e inteligencia de formas inusuales.",
  'compatibility.enneagram.5-8.practice': "El 8 tiene que bajar el volumen. El 5 tiene que salir de su cabeza y meterse en lo que la relación realmente se juega.",

  'compatibility.enneagram.5-9.dynamic': "Ambos son silenciosos, poco exigentes y contentos de compartir el espacio sin llenarlo. La casa está en paz; las noches de lectura son reales.",
  'compatibility.enneagram.5-9.friction': "Ambos se retiran bajo estrés, ninguno inicia el regreso, y las pequeñas distancias se vuelven permanentes casi sin que nadie lo note.",
  'compatibility.enneagram.5-9.together': "Una pareja suave, considerada, a veces demasiado callada — fuerte en ecuanimidad, ligera en calor.",
  'compatibility.enneagram.5-9.practice': "Ambos tienen que sobrecorregirse hacia la iniciativa — mensajes, planes, pequeñas ofertas de contacto — bastante más allá del punto en que cualquiera siente que hace falta.",

  'compatibility.enneagram.6-6.dynamic': "Dos 6 se vinculan rápido por la lealtad compartida, la vigilancia compartida y el raro alivio de no tener que explicar por qué revisan dos veces las cosas.",
  'compatibility.enneagram.6-6.friction': "La ansiedad se amplifica. Ambos buscan en el otro una certeza que ninguno tiene, y la preocupación escala sin un ancla externa.",
  'compatibility.enneagram.6-6.together': "Un hogar leal, devoto, ligeramente ansioso — fuerte en compromiso, vulnerable a los espirales.",
  'compatibility.enneagram.6-6.practice': "Al menos uno tiene que ser el calmado en cada momento dado. Turnarse a conciencia; no cundir el pánico al mismo tiempo.",

  'compatibility.enneagram.6-7.dynamic': "El optimismo del 7 levanta la preocupación del 6; la cautela del 6 ancla la persecución del 7. Mismo centro de cabeza, valor por defecto opuesto — una complementariedad real.",
  'compatibility.enneagram.6-7.friction': "El 7 minimiza lo que el 6 toma en serio; el 6 catastrofiza lo que el 7 descarta. Cada uno empieza a sentirse no encontrado en el clima emocional básico.",
  'compatibility.enneagram.6-7.together': "Una pareja expansiva-y-cauta — poderosa cuando cada uno respeta lo que el otro percibe.",
  'compatibility.enneagram.6-7.practice': "El 7 tiene que dejar de tratar la preocupación del 6 como un aguafiestas. El 6 tiene que dejar de tratar la ligereza del 7 como negación.",

  'compatibility.enneagram.6-8.dynamic': "La franqueza del 8 le da al 6 sensación de seguridad; la lealtad del 6 le da al 8 una pareja que no se acobarda. La confianza, una vez ganada, corre profundo.",
  'compatibility.enneagram.6-8.friction': "La fuerza del 8 activa el escaneo de amenazas del 6; el 6 empieza a probar el compromiso del 8, lo que el 8 lee como deslealtad.",
  'compatibility.enneagram.6-8.together': "Una pareja leal-y-protectora — fuerte, devota y rápida en cerrar filas.",
  'compatibility.enneagram.6-8.practice': "El 8 tiene que ser paciente con las pruebas del 6. El 6 tiene que dejar de probar una vez que se establezca la confianza.",

  'compatibility.enneagram.6-9.dynamic': "Ambos son suaves, leales y lentos en abandonar a las personas que aman. La relación es estable, sin drama y construida para durar.",
  'compatibility.enneagram.6-9.friction': "La preocupación del 6 presiona la paz del 9; la evasión del 9 mata de hambre la necesidad de implicación del 6. La presión se acumula en silencio.",
  'compatibility.enneagram.6-9.together': "Uno de los patrones de pareja más duraderos del círculo — silencioso, leal, a menudo largo.",
  'compatibility.enneagram.6-9.practice': "El 6 tiene que dejar de forzar al 9 a tomar una posición. El 9 tiene que tomar realmente una, especialmente las pequeñas, cada día.",

  'compatibility.enneagram.7-7.dynamic': "Dos 7 saben divertirse. Los planes se acumulan, las ideas se multiplican, la energía es brillante y la agenda está llena.",
  'compatibility.enneagram.7-7.friction': "Ninguno frena. Sentimientos grandes, conversaciones duras y días lentos se saltan juntos hasta que algo tiene que romperse.",
  'compatibility.enneagram.7-7.together': "Una pareja brillante, social, expansiva — envidiable por fuera, evasiva por dentro de lo que no brilla.",
  'compatibility.enneagram.7-7.practice': "Uno de los dos tiene que quedarse cuando el otro quiere salir corriendo. Sentarse con la cosa difícil a propósito; la relación no puede profundizarse de otro modo.",

  'compatibility.enneagram.7-8.dynamic': "Ambos son de alta energía, comprometidos con el mundo, alérgicos a la restricción. Las aventuras se multiplican; la pareja se mete en proyectos grandes que otros no probarían.",
  'compatibility.enneagram.7-8.friction': "La confrontación del 8 cae duro en la evasión del 7; la deflexión del 7 enfurece al 8. Los conflictos pasan de cero a riña sin punto medio.",
  'compatibility.enneagram.7-8.together': "Una pareja audaz, expansiva — poderosa en movimiento, frágil cuando la fuerzan a parar.",
  'compatibility.enneagram.7-8.practice': "El 8 tiene que bajar la fuerza. El 7 tiene que dejar de desviar y dejar que la conversación realmente ocurra.",

  'compatibility.enneagram.7-9.dynamic': "El 9 le da al 7 una base calmada y aceptante; el 7 despierta al 9 a su propia vida. Hay aquí una complementariedad suave y generativa.",
  'compatibility.enneagram.7-9.friction': "El ritmo del 7 abruma al 9; la deriva del 9 frustra al 7. El 7 empieza a ir solo; el 9 se desconecta en silencio.",
  'compatibility.enneagram.7-9.together': "Una pareja expansiva-y-calmada — brillante por fuera, en paz por dentro, cuando ambos se encuentran a medio camino.",
  'compatibility.enneagram.7-9.practice': "El 7 tiene que frenar. El 9 tiene que unirse activamente, no solo seguir la corriente.",

  'compatibility.enneagram.8-8.dynamic': "Dos 8 se reconocen al contacto — la franqueza es mutua, la debilidad no se usa como arma, la lealtad no es negociable.",
  'compatibility.enneagram.8-8.friction': "Ambos pelean por el control; ninguno cede fácil. Los conflictos escalan rápido y cuestan más de lo que cualquiera pretendía.",
  'compatibility.enneagram.8-8.together': "Una pareja formidable, ferozmente leal — imponente por fuera, tierna por dentro si alguno baja la armadura.",
  'compatibility.enneagram.8-8.practice': "Ambos tienen que turnarse en ser el suave. La fuerza no es el problema; la vulnerabilidad lo es.",

  'compatibility.enneagram.8-9.dynamic': "Mismo centro instintivo, expresión opuesta. El 9 templa la fuerza del 8; el 8 trae al 9 a la vida. Sus flechas de crecimiento se cruzan — una complementariedad profunda.",
  'compatibility.enneagram.8-9.friction': "El 8 empuja; el 9 desaparece en un acuerdo que no resuelve nada; el 8 empuja más fuerte. El ciclo es el ciclo.",
  'compatibility.enneagram.8-9.together': "Una pareja de protector y pacificador — devota, duradera, cuando ambos superan el baile.",
  'compatibility.enneagram.8-9.practice': "El 8 tiene que dejar de empujar — el 9 se retira más con cada empujón. El 9 tiene que mantenerse presente y decir no, en voz alta, cuando no es la verdad.",

  'compatibility.enneagram.9-9.dynamic': "Dos 9 crean un hogar pacífico, de baja fricción, casi por accidente. El confort se comparte, el conflicto es raro, los días son tranquilos.",
  'compatibility.enneagram.9-9.friction': "Ninguno inicia. Los resentimientos se acumulan en silencio; la relación se aleja despacio sin que nadie lo nombre.",
  'compatibility.enneagram.9-9.together': "Una pareja suave, sin drama, a veces demasiado quieta — radiante en un buen día, invisible en uno malo.",
  'compatibility.enneagram.9-9.practice': "Ambos tienen que ofrecer sus preferencias antes de que se las pidan. La fricción, en pequeñas dosis, no es enemiga — es la prueba de la presencia.",

  // MBTI: compatibilidad entre tipos — 136 parejas × 4 secciones.
  'compatibility.mbti.ENFJ-ENFJ.dynamic': "Dos protagonistas sintonizan con las mismas frecuencias emocionales y leen las salas de forma idéntica. La relación tiene una fluidez social inusual desde el primer día.",
  'compatibility.mbti.ENFJ-ENFJ.friction': "Ambos gestionan los sentimientos de todos mientras suprimen los suyos en silencio. El resentimiento se acumula en el sótano que ninguno reconocerá.",
  'compatibility.mbti.ENFJ-ENFJ.together': "Una pareja de alto rendimiento, generosa, externamente impresionante — grandes anfitriones, ligeramente exhaustos en privado.",
  'compatibility.mbti.ENFJ-ENFJ.practice': "Ambos tienen que arriesgarse a ser inconvenientes. Deja de leer la sala y di lo que realmente sientes.",

  'compatibility.mbti.ENFJ-ENFP.dynamic': "Ambos lideran con emoción y posibilidad. Las conversaciones son cálidas, expansivas y rápidamente íntimas.",
  'compatibility.mbti.ENFJ-ENFP.friction': "El ENFJ quiere conexión al servicio de algo; el ENFP quiere conexión por sí misma. El ENFJ empieza a sentirse gestionado; el ENFP empieza a sentirse dirigido.",
  'compatibility.mbti.ENFJ-ENFP.together': "Una pareja brillante, social, idealista — fuerte en sentido compartido, débil en logística.",
  'compatibility.mbti.ENFJ-ENFP.practice': "El ENFJ tiene que dejar de optimizar la vida del ENFP. El ENFP tiene que dejar de leer la estructura del ENFJ como control.",

  'compatibility.mbti.ENFJ-ENTJ.dynamic': "Dos líderes, uno cálido uno frío, ambos avanzando con convicción. Los planes se hacen y ejecutan con rapidez inusual.",
  'compatibility.mbti.ENFJ-ENTJ.friction': "El ENTJ optimiza para resultados; el ENFJ optimiza para personas. El ENTJ lee el cuidado del ENFJ como ineficiencia; el ENFJ lee el motor del ENTJ como frío.",
  'compatibility.mbti.ENFJ-ENTJ.together': "Una plantilla de pareja de poder — visible, productiva, formidable en cualquier sala que comparten.",
  'compatibility.mbti.ENFJ-ENTJ.practice': "El ENTJ tiene que considerar a las personas antes, no al final. El ENFJ tiene que dejar de suavizar verdades duras que el ENTJ verá de todas formas.",

  'compatibility.mbti.ENFJ-ENTP.dynamic': "El ENTP trae ideas provocadoras; el ENFJ les da un marco relacional. El ENTP es atestiguado; el ENFJ es estirado.",
  'compatibility.mbti.ENFJ-ENTP.friction': "El ENTP debate por deporte; el ENFJ se toma el desacuerdo personalmente. El ENFJ suaviza; el ENTP pincha; el ciclo escala.",
  'compatibility.mbti.ENFJ-ENTP.together': "Una pareja viva, intelectualmente cálida — fuerte en conversación, débil en resolución de conflictos.",
  'compatibility.mbti.ENFJ-ENTP.practice': "El ENTP tiene que aprender que algunas cosas no se deben pinchar. El ENFJ tiene que dejar de leer cada desafío como amenaza relacional.",

  'compatibility.mbti.ENFJ-ESFJ.dynamic': "Dos Fe-dominantes crean calidez relacional inmediata. Recibir, regalar, recordar — músculos compartidos, mutuamente apreciados.",
  'compatibility.mbti.ENFJ-ESFJ.friction': "El ESFJ por defecto tira hacia la tradición; el ENFJ por defecto tira hacia la visión. El ENFJ empuja crecimiento; el ESFJ quiere estabilidad — ambos se sienten no apoyados.",
  'compatibility.mbti.ENFJ-ESFJ.together': "Una pareja cálida, social, profundamente hospitalaria — grandes padres, ligeramente convencionales.",
  'compatibility.mbti.ENFJ-ESFJ.practice': "El ENFJ tiene que dejar de enmarcar las preferencias del ESFJ como pequeñas. El ESFJ tiene que dejar de leer la ambición del ENFJ como descontento.",

  'compatibility.mbti.ENFJ-ESFP.dynamic': "El ENFJ le da al ESFP profundidad y dirección; el ESFP le da al ENFJ permiso para estar en el momento. Ambos son personas de personas.",
  'compatibility.mbti.ENFJ-ESFP.friction': "El ENFJ planea el sentido; el ESFP quiere la experiencia. El ENFJ se siente solo con el futuro; el ESFP se siente sermoneado.",
  'compatibility.mbti.ENFJ-ESFP.together': "Una pareja brillante, generosa, cálida — fuerte en conexión, ligera en estructura.",
  'compatibility.mbti.ENFJ-ESFP.practice': "El ENFJ tiene que liberar al ESFP de ser un proyecto. El ESFP tiene que valorar la vista más larga del ENFJ.",

  'compatibility.mbti.ENFJ-ESTJ.dynamic': "Ambos lideran, ambos organizan, ambos mantienen las cosas en marcha. Hay respeto mutuo por la capacidad.",
  'compatibility.mbti.ENFJ-ESTJ.friction': "El ESTJ quiere eficiencia; el ENFJ quiere armonía. El ESTJ lee al ENFJ como políticamente blando; el ENFJ lee al ESTJ como relacionalmente brusco.",
  'compatibility.mbti.ENFJ-ESTJ.together': "Una pareja de alto rendimiento, de cara al público — geniales en logística, propensos a suprimir la capa blanda.",
  'compatibility.mbti.ENFJ-ESTJ.practice': "El ESTJ tiene que reconocer los sentimientos como datos, no como fricción. El ENFJ tiene que dejar de traducir cada directiva en un gesto relacional.",

  'compatibility.mbti.ENFJ-ESTP.dynamic': "La inmediatez del ESTP desbloquea al ENFJ; el ENFJ le da al ESTP un arco vital. Hay calor real entre estos dos.",
  'compatibility.mbti.ENFJ-ESTP.friction': "El ESTP vive ahora; el ENFJ vive hacia algo. El ESTP lee al ENFJ como predicador; el ENFJ lee al ESTP como superficial.",
  'compatibility.mbti.ENFJ-ESTP.together': "Una pareja viva, cargada — emocionante e inestable a partes iguales.",
  'compatibility.mbti.ENFJ-ESTP.practice': "El ESTP tiene que frenar para la conversación de sentido. El ENFJ tiene que dejar de hacer del ESTP un proyecto de desarrollo.",

  'compatibility.mbti.ENFJ-INFJ.dynamic': "Dos tipos Ni-Fe comparten la rara experiencia de ser encontrados. Las conversaciones son profundas, rápidas y silenciosamente comprendidas.",
  'compatibility.mbti.ENFJ-INFJ.friction': "El ENFJ actúa sobre la visión; el INFJ la refina por siempre. El ENFJ empuja; el INFJ se retira; ambos se sienten traicionados.",
  'compatibility.mbti.ENFJ-INFJ.together': "Una pareja profundamente sintonizada — excepcionalmente cercana, ocasionalmente sofocante.",
  'compatibility.mbti.ENFJ-INFJ.practice': "El ENFJ tiene que darle al INFJ espacio para procesar sin implicación. El INFJ tiene que salir de la profundidad y actuar.",

  'compatibility.mbti.ENFJ-INFP.dynamic': "La energía del ENFJ encuentra la profundidad del INFP. Ambos valoran el sentido, la autenticidad y la seriedad moral.",
  'compatibility.mbti.ENFJ-INFP.friction': "El ENFJ quiere ayudar; el INFP quiere ser dejado solo con sus sentimientos. La ayuda se lee como intrusión; la retirada se lee como rechazo.",
  'compatibility.mbti.ENFJ-INFP.together': "Una pareja tierna, idealista — fuerte en valores compartidos, frágil en el ritmo del día a día.",
  'compatibility.mbti.ENFJ-INFP.practice': "El ENFJ tiene que dejar de intentar arreglar al INFP. El INFP tiene que comunicar antes de retirarse, no después.",

  'compatibility.mbti.ENFJ-INTJ.dynamic': "Ambos comparten Ni — la visión se alinea a nivel profundo. El ENFJ humaniza los planes del INTJ; el INTJ rigoriza el cuidado del ENFJ.",
  'compatibility.mbti.ENFJ-INTJ.friction': "El INTJ optimiza; el ENFJ armoniza. El INTJ lee la emoción del ENFJ como ruido; el ENFJ lee la lógica del INTJ como fría.",
  'compatibility.mbti.ENFJ-INTJ.together': "Una pareja complementaria, a menudo silenciosamente poderosa — visionaria y cálida cuando ambos honran lo que aporta el otro.",
  'compatibility.mbti.ENFJ-INTJ.practice': "El INTJ tiene que dar peso a los datos relacionales. El ENFJ tiene que dejar de traducir el desacuerdo lógico como personal.",

  'compatibility.mbti.ENFJ-INTP.dynamic': "El INTP trae el marco; el ENFJ trae la aplicación. El INTP se descongela; el ENFJ se afila.",
  'compatibility.mbti.ENFJ-INTP.friction': "El INTP quiere pensar solo; el ENFJ quiere procesar juntos. El INTP se retira; el ENFJ presiona; el bucle se intensifica.",
  'compatibility.mbti.ENFJ-INTP.together': "Una pareja extraña que, cuando funciona, integra cabeza y corazón inusualmente bien.",
  'compatibility.mbti.ENFJ-INTP.practice': "El INTP tiene que sacar a flote su pensamiento antes de terminarlo. El ENFJ tiene que darle al INTP soledad sin pánico.",

  'compatibility.mbti.ENFJ-ISFJ.dynamic': "Dos tipos Fe — distintos ritmos, misma calidez. El ISFJ cuida la casa; el ENFJ cuida el mundo; ambos aseguran que las personas se sientan sostenidas.",
  'compatibility.mbti.ENFJ-ISFJ.friction': "El ENFJ empuja hacia fuera; el ISFJ se mantiene firme. El ENFJ lee al ISFJ como estático; el ISFJ lee al ENFJ como inquietante.",
  'compatibility.mbti.ENFJ-ISFJ.together': "Una pareja cálida, duradera, orientada a la familia — fuerte en cuidado, ligera en novedad.",
  'compatibility.mbti.ENFJ-ISFJ.practice': "El ENFJ tiene que frenar al tempo del ISFJ. El ISFJ tiene que arriesgarse a salir de la zona de confort a la que el ENFJ lo invita.",

  'compatibility.mbti.ENFJ-ISFP.dynamic': "La calidez del ENFJ encuentra la profundidad silenciosa del ISFP. El ISFP es uno de los pocos tipos que el ENFJ no puede leer fácilmente — lo que se vuelve la atracción.",
  'compatibility.mbti.ENFJ-ISFP.friction': "El ENFJ quiere conexión verbal; el ISFP muestra amor a través de la presencia. El ENFJ lee silencio como distancia; el ISFP lee presión como intrusión.",
  'compatibility.mbti.ENFJ-ISFP.together': "Una pareja suave, artística, silenciosamente cercana — hermosa en sus ritmos, difícil para los de fuera de ver por dentro.",
  'compatibility.mbti.ENFJ-ISFP.practice': "El ENFJ tiene que aprender el lenguaje del amor del ISFP. El ISFP tiene que verbalizar lo que cree que el ENFJ ya sabe.",

  'compatibility.mbti.ENFJ-ISTJ.dynamic': "Ritmos distintos pero seriedad compartida sobre el compromiso. El ENFJ trae calidez; el ISTJ trae fiabilidad.",
  'compatibility.mbti.ENFJ-ISTJ.friction': "El ISTJ hace lo acordado; el ENFJ sigue ajustando según las personas. El ISTJ se siente zarandeado; el ENFJ se siente rígidamente resistido.",
  'compatibility.mbti.ENFJ-ISTJ.together': "Una pareja estable, fiable, ligeramente tradicional — fuerte en confianza, débil en vocabulario emocional.",
  'compatibility.mbti.ENFJ-ISTJ.practice': "El ISTJ tiene que leer los datos relacionales que el ENFJ sigue sacando. El ENFJ tiene que honrar el acuerdo, no el último estado de ánimo.",

  'compatibility.mbti.ENFJ-ISTP.dynamic': "El ENFJ quiere saber qué siente el ISTP; el ISTP no siempre lo sabe. El ENFJ se vuelve el traductor que el ISTP necesita pero no pedirá.",
  'compatibility.mbti.ENFJ-ISTP.friction': "El ISTP necesita soledad; el ENFJ necesita implicación. El ISTP se retira; el ENFJ persigue; la persecución se vuelve la relación.",
  'compatibility.mbti.ENFJ-ISTP.together': "Una pareja complementaria, algo desigual — funciona cuando el ENFJ sostiene el hilo relacional, falla cuando el ENFJ se queda sin energía.",
  'compatibility.mbti.ENFJ-ISTP.practice': "El ISTP tiene que devolver el alcance, no solo recibir. El ENFJ tiene que dejar de sustituir su lectura por las palabras reales del ISTP.",

  'compatibility.mbti.ENFP-ENFP.dynamic': "Dos campañeros chispean con los entusiasmos del otro. Las posibilidades se multiplican; las conversaciones saltan; todo se siente vivo.",
  'compatibility.mbti.ENFP-ENFP.friction': "Ninguno termina. Dos Ne-doms juntos generan ideas más rápido de lo que cualquiera puede aterrizar. Las promesas se acumulan; el seguimiento se evapora.",
  'compatibility.mbti.ENFP-ENFP.together': "Una pareja brillante, generadora, dispersa — radiante en movimiento, frágil cuando hay que comprometerse.",
  'compatibility.mbti.ENFP-ENFP.practice': "Uno de los dos tiene que ser quien realmente cumple. Turnarse a conciencia; no dejar que el otro lo haga.",

  'compatibility.mbti.ENFP-ENTJ.dynamic': "El ENFP suministra posibilidad; el ENTJ suministra ejecución. El ENFP siente que los planes del ENTJ ganan corazón; el ENTJ siente que las ideas del ENFP ganan peso.",
  'compatibility.mbti.ENFP-ENTJ.friction': "El ENTJ quiere decisiones; el ENFP quiere opciones abiertas. El ENTJ lee al ENFP como ligero; el ENFP lee al ENTJ como apisonadora.",
  'compatibility.mbti.ENFP-ENTJ.together': "Una pareja de poder y chispa — cuando funciona, es difícil competir con ella.",
  'compatibility.mbti.ENFP-ENTJ.practice': "El ENTJ tiene que ralentizar el ciclo de decisión para que el ENFP se sienta elegido, no asignado. El ENFP tiene que comprometerse con una cosa y llevarla a término.",

  'compatibility.mbti.ENFP-ENTP.dynamic': "Dos Ne-doms en claves distintas (uno Fi, otro Ti). Las conversaciones son salvajes, generadoras y genuinamente divertidas.",
  'compatibility.mbti.ENFP-ENTP.friction': "El ENTP debate por la alegría; el ENFP toma posiciones personalmente. El ENTP pincha; el ENFP se hiere; el juego se vuelve pelea.",
  'compatibility.mbti.ENFP-ENTP.together': "Una pareja viva, rica en ideas — alto amperaje, cortocircuitos ocasionales.",
  'compatibility.mbti.ENFP-ENTP.practice': "El ENTP tiene que registrar cuándo los valores del ENFP están en juego. El ENFP tiene que diferenciar deporte de ataque.",

  'compatibility.mbti.ENFP-ESFJ.dynamic': "El ESFJ le da al ENFP un hogar emocional estable; el ENFP le da al ESFJ permiso para vagar. Hay alivio mutuo.",
  'compatibility.mbti.ENFP-ESFJ.friction': "El ESFJ quiere compromiso con cómo se han hecho las cosas; el ENFP quiere permiso para hacerlas distinto. Tradición vs. exploración.",
  'compatibility.mbti.ENFP-ESFJ.together': "Una pareja cálida, social, cuidada — fuerte en hospitalidad, a veces desajustada en horizontes.",
  'compatibility.mbti.ENFP-ESFJ.practice': "El ESFJ tiene que dejar al ENFP improvisar. El ENFP tiene que honrar los rituales que el ESFJ mantiene vivos.",

  'compatibility.mbti.ENFP-ESFP.dynamic': "Ambos son tipos cálidos, sociales, plenamente presentes — distintas intuiciones, mismo amor por el momento. La energía es alta.",
  'compatibility.mbti.ENFP-ESFP.friction': "El ENFP vive en posibilidad; el ESFP vive en el presente. El ENFP sigue gesticulando hacia el después; el ESFP no ve la urgencia.",
  'compatibility.mbti.ENFP-ESFP.together': "Una pareja brillante, alegre, algo poco aterrizada — diversión fácil, estructura difícil.",
  'compatibility.mbti.ENFP-ESFP.practice': "El ENFP tiene que dejar de leer el foco-ahora del ESFP como superficial. El ESFP tiene que comprometerse con el futuro al que el ENFP sigue señalando.",

  'compatibility.mbti.ENFP-ESTJ.dynamic': "El ESTJ aporta la estructura que el ENFP secretamente anhela; el ENFP trae la posibilidad que el ESTJ secretamente echa de menos. Los opuestos se atraen aquí, real.",
  'compatibility.mbti.ENFP-ESTJ.friction': "El ESTJ quiere el plan acordado ejecutado; el ENFP quiere revisar a mitad de vuelo. El ESTJ lee caos; el ENFP lee jaula.",
  'compatibility.mbti.ENFP-ESTJ.together': "Una pareja complementaria cuando ambos se inclinan el uno hacia el otro — abrasiva cuando ambos se atrincheran.",
  'compatibility.mbti.ENFP-ESTJ.practice': "El ESTJ tiene que sostener la estructura sin agarrarla. El ENFP tiene que honrar el plan una vez fijado.",

  'compatibility.mbti.ENFP-ESTP.dynamic': "Ambos son tipos vivos, energéticos, amantes de la acción — distintas funciones, tempo similar. Las aventuras se acumulan.",
  'compatibility.mbti.ENFP-ESTP.friction': "El ESTP quiere ahora; el ENFP quiere sentido. El ESTP lee al ENFP como pensar de más; el ENFP lee al ESTP como sentir de menos.",
  'compatibility.mbti.ENFP-ESTP.together': "Una pareja de alta energía, social, ligeramente impulsiva — fuerte en movimiento, débil en profundidad.",
  'compatibility.mbti.ENFP-ESTP.practice': "El ESTP tiene que implicarse con los valores del ENFP, no solo con la acción. El ENFP tiene que dejar de intentar hacer profundo al ESTP.",

  'compatibility.mbti.ENFP-INFJ.dynamic': "Una pareja famosamente magnética — el INFJ reconoce la profundidad del ENFP; el ENFP saca al INFJ. Ambos se sienten vistos rápido.",
  'compatibility.mbti.ENFP-INFJ.friction': "El INFJ sostiene la profundidad quieta; el ENFP la dispersa. El INFJ lee al ENFP como inquieto; el ENFP lee al INFJ como retenedor.",
  'compatibility.mbti.ENFP-INFJ.together': "Una pareja intensa, a menudo muy cercana — hermosa, ocasionalmente agotadora en su intensidad emocional.",
  'compatibility.mbti.ENFP-INFJ.practice': "El INFJ tiene que subir al tempo del ENFP a veces. El ENFP tiene que aterrizar lo suficiente para que el INFJ realmente lo encuentre.",

  'compatibility.mbti.ENFP-INFP.dynamic': "Dos tipos que usan Fi alrededor de valores compartidos. La autenticidad es el lenguaje; ambos sienten un permiso raro de ser ellos mismos.",
  'compatibility.mbti.ENFP-INFP.friction': "El ENFP procesa hacia fuera; el INFP procesa hacia dentro. El ENFP quiere implicación; el INFP necesita retiro. Perseguir-retirarse es real.",
  'compatibility.mbti.ENFP-INFP.together': "Una pareja tierna, idealista, profundamente sentida — fuerte en valores, débil en logística.",
  'compatibility.mbti.ENFP-INFP.practice': "El ENFP tiene que dar al INFP soledad sin convertirlo en crisis. El INFP tiene que sacar a flote lo que pasa antes de desvanecerse.",

  'compatibility.mbti.ENFP-INTJ.dynamic': "Una pareja muy querida en el imaginario MBTI — la estructura del INTJ encuentra la chispa del ENFP; ambos hallan al raro compañero que los hace más ellos mismos.",
  'compatibility.mbti.ENFP-INTJ.friction': "El INTJ quiere el plan comprometido; el ENFP quiere el plan abierto. El INTJ lee caos; el ENFP lee jaula.",
  'compatibility.mbti.ENFP-INTJ.together': "Una pareja complementaria con profundidad y alcance inusuales — una pareja de poder en disfraces distintos.",
  'compatibility.mbti.ENFP-INTJ.practice': "El INTJ tiene que considerar el clima emocional del ENFP. El ENFP tiene que comprometerse y ejecutar, no solo generar.",

  'compatibility.mbti.ENFP-INTP.dynamic': "Ambos son tipos que usan Ne — las conversaciones recorren el espacio de posibilidades sin esfuerzo. El INTP se calienta; el ENFP se afila.",
  'compatibility.mbti.ENFP-INTP.friction': "El INTP quiere pensar solo; el ENFP quiere pensar juntos. El INTP se retira a procesar; el ENFP se siente abandonado.",
  'compatibility.mbti.ENFP-INTP.together': "Una pareja brillante, intelectualmente juguetona — fuerte en conversación, débil en ritmo emocional.",
  'compatibility.mbti.ENFP-INTP.practice': "El INTP tiene que compartir el pensamiento medio formado, no el terminado. El ENFP tiene que dar al INTP espacio de proceso sin pánico.",

  'compatibility.mbti.ENFP-ISFJ.dynamic': "El ISFJ cuida la casa y las rutinas; el ENFP trae vida y sorpresa. Hay complementariedad real aquí.",
  'compatibility.mbti.ENFP-ISFJ.friction': "El ISFJ quiere estabilidad; el ENFP quiere novedad. El ISFJ lee al ENFP como inestable; el ENFP lee al ISFJ como restrictivo.",
  'compatibility.mbti.ENFP-ISFJ.together': "Una pareja cálida, algo doméstica, algo inquieta — funciona cuando ambos honran lo que aporta el otro.",
  'compatibility.mbti.ENFP-ISFJ.practice': "El ISFJ tiene que flexibilizar las rutinas para los arrebatos del ENFP. El ENFP tiene que valorar lo que el ISFJ mantiene vivo.",

  'compatibility.mbti.ENFP-ISFP.dynamic': "Dos tipos Fi-líderes — los valores se alinean rápido, y la relación tiene una honestidad emocional inusual.",
  'compatibility.mbti.ENFP-ISFP.friction': "El ENFP procesa verbalmente; el ISFP procesa en silencio. El ENFP se siente bloqueado; el ISFP se siente invadido.",
  'compatibility.mbti.ENFP-ISFP.together': "Una pareja suave, impulsada por valores — fuerte en sentido compartido, ligera en iniciativa.",
  'compatibility.mbti.ENFP-ISFP.practice': "El ENFP tiene que dar al ISFP silencio sin llenarlo. El ISFP tiene que poner palabras a lo que creía obvio.",

  'compatibility.mbti.ENFP-ISTJ.dynamic': "El ISTJ aporta la estabilidad que el ENFP secretamente necesita; el ENFP aporta la vida que el ISTJ secretamente disfruta. Complementariedad real.",
  'compatibility.mbti.ENFP-ISTJ.friction': "El ISTJ quiere el plan honrado; el ENFP quiere revisión bienvenida. El ISTJ lee caos; el ENFP lee rigidez.",
  'compatibility.mbti.ENFP-ISTJ.together': "Una pareja complementaria que funciona cuando ambos ajustan hacia el medio.",
  'compatibility.mbti.ENFP-ISTJ.practice': "El ISTJ tiene que flexibilizar sin verlo como traición. El ENFP tiene que entregar lo acordado.",

  'compatibility.mbti.ENFP-ISTP.dynamic': "El ISTP trae competencia tranquila; el ENFP trae entusiasmo cálido. Cada uno carga algo que el otro no puede generar solo.",
  'compatibility.mbti.ENFP-ISTP.friction': "El ENFP quiere implicación emocional; el ISTP quiere espacio tranquilo. El ENFP empuja; el ISTP se retira.",
  'compatibility.mbti.ENFP-ISTP.together': "Una pareja extraña — funciona cuando el ENFP sostiene el hilo relacional y el ISTP aparece de forma fiable para lo práctico.",
  'compatibility.mbti.ENFP-ISTP.practice': "El ISTP tiene que traducir el cuidado en palabras a veces. El ENFP tiene que leer las acciones del ISTP como la carta de amor que son.",

  'compatibility.mbti.ENTJ-ENTJ.dynamic': "Dos comandantes se reconocen al instante. Las decisiones se toman rápido; las ambiciones se alinean sin negociación.",
  'compatibility.mbti.ENTJ-ENTJ.friction': "Ambos pelean por el control; ninguno cede fácil. Las luchas de poder se vuelven personales rápido.",
  'compatibility.mbti.ENTJ-ENTJ.together': "Una pareja ejecutiva formidable — eficiente en el mundo, dependiente de misión compartida para mantenerse alineada.",
  'compatibility.mbti.ENTJ-ENTJ.practice': "Ambos tienen que turnarse en seguir. La fuerza no es el problema; ceder lo es.",

  'compatibility.mbti.ENTJ-ENTP.dynamic': "El ENTJ ejecuta; el ENTP innova. El ENTP suministra el ángulo inesperado; el ENTJ lo convierte en plan.",
  'compatibility.mbti.ENTJ-ENTP.friction': "El ENTJ quiere cierre; el ENTP quiere la puerta abierta. El ENTJ presiona por decisión; el ENTP sigue reabriendo.",
  'compatibility.mbti.ENTJ-ENTP.together': "Una pareja de alto rendimiento, rica en ideas — formidable cuando los roles son claros.",
  'compatibility.mbti.ENTJ-ENTP.practice': "El ENTJ tiene que dejar espacio para la siguiente iteración. El ENTP tiene que comprometerse cuando el compromiso es lo necesario.",

  'compatibility.mbti.ENTJ-ESFJ.dynamic': "El ENTJ lidera externamente; el ESFJ sostiene el tejido social. Juntos llevan una vida apretada y bien cuidada.",
  'compatibility.mbti.ENTJ-ESFJ.friction': "El ESFJ quiere reconocimiento emocional; el ENTJ por defecto va a la logística. El ESFJ se siente invisible; el ENTJ se siente regañado.",
  'compatibility.mbti.ENTJ-ESFJ.together': "Una pareja de alto rendimiento, externamente impresionante — fuerte en capacidad, vulnerable en calidez.",
  'compatibility.mbti.ENTJ-ESFJ.practice': "El ENTJ tiene que registrar el trabajo emocional del ESFJ explícitamente. El ESFJ tiene que pedir directamente, no insinuar.",

  'compatibility.mbti.ENTJ-ESFP.dynamic': "El ESFP afloja al ENTJ; el ENTJ orienta al ESFP. A ambos les gusta la acción decisiva y los resultados tangibles.",
  'compatibility.mbti.ENTJ-ESFP.friction': "El ENTJ planea para resultados; el ESFP planea para el momento. El ENTJ lee al ESFP como indisciplinado; el ESFP lee al ENTJ como sin alegría.",
  'compatibility.mbti.ENTJ-ESFP.together': "Una pareja viva, orientada a la acción — fuerte en impulso, a veces ligera en coherencia a largo plazo.",
  'compatibility.mbti.ENTJ-ESFP.practice': "El ENTJ tiene que considerar la necesidad del ESFP del ahora. El ESFP tiene que honrar los arcos más largos del ENTJ.",

  'compatibility.mbti.ENTJ-ESTJ.dynamic': "Dos Te-doms — eficiencia, resultados y jerarquías claras son lenguas maternas mutuas. Las decisiones se toman.",
  'compatibility.mbti.ENTJ-ESTJ.friction': "Ambos quieren ser la voz que decide. El poder se disputa directa y a menudo.",
  'compatibility.mbti.ENTJ-ESTJ.together': "Una pareja formidable, capaz, ligeramente jerárquica — fuerte en resultados, débil en ancho de banda emocional.",
  'compatibility.mbti.ENTJ-ESTJ.practice': "Ambos tienen que dar peso a los datos relacionales. Turnarse en ceder en las cosas en las que no ambos tienen interés.",

  'compatibility.mbti.ENTJ-ESTP.dynamic': "Ambos son audaces, orientados a la acción, impulsados por resultados. Los planes se ejecutan rápido y los tratos se cierran.",
  'compatibility.mbti.ENTJ-ESTP.friction': "El ENTJ corre estrategia; el ESTP corre tácticas. El ENTJ siente al ESTP improvisar el plan; el ESTP siente al ENTJ sobreingeniar el momento.",
  'compatibility.mbti.ENTJ-ESTP.together': "Una pareja de alta octanaje, comprometida con el mundo — formidable en movimiento, frágil en paciencia.",
  'compatibility.mbti.ENTJ-ESTP.practice': "El ENTJ tiene que dejar al ESTP leer la sala y ajustar. El ESTP tiene que honrar el juego más largo.",

  'compatibility.mbti.ENTJ-INFJ.dynamic': "Ambos son tipos que usan Ni — la visión se alinea en profundidad. El INFJ humaniza los planes del ENTJ; el ENTJ rigoriza las intuiciones del INFJ.",
  'compatibility.mbti.ENTJ-INFJ.friction': "El ENTJ presiona por acción; el INFJ resiste el cierre prematuro. El ENTJ lee al INFJ como evasivo; el INFJ lee al ENTJ como apisonadora.",
  'compatibility.mbti.ENTJ-INFJ.together': "Una pareja complementaria, a menudo silenciosamente poderosa — visionaria y capaz cuando ambos honran lo que aporta el otro.",
  'compatibility.mbti.ENTJ-INFJ.practice': "El ENTJ tiene que esperar la intuición completa del INFJ. El INFJ tiene que aterrizar una opinión sobre la que el ENTJ pueda actuar.",

  'compatibility.mbti.ENTJ-INFP.dynamic': "Famosamente polar — funciones opuestas en roles opuestos. Cuando esto funciona, es transformador; cuando no, es doloroso.",
  'compatibility.mbti.ENTJ-INFP.friction': "El ENTJ presiona por resultados; el INFP necesita sentir que los valores están intactos. Te-Fe vs Fi-Ne crea malas lecturas reales.",
  'compatibility.mbti.ENTJ-INFP.together': "Una pareja de alta amplitud — hermosa en estaciones largas y cálidas, brutal en tormentas.",
  'compatibility.mbti.ENTJ-INFP.practice': "El ENTJ tiene que frenar para el chequeo de valores del INFP. El INFP tiene que dejar de leer la franqueza como crueldad.",

  'compatibility.mbti.ENTJ-INTJ.dynamic': "Dos estrategas NT — visión y ejecución se alinean sin traducción. El plan existe antes de que empiece la reunión.",
  'compatibility.mbti.ENTJ-INTJ.friction': "El ENTJ quiere decisiones; el INTJ quiere más análisis. El ENTJ presiona; el INTJ se demora; ambos se sienten apurados y poco preparados.",
  'compatibility.mbti.ENTJ-INTJ.together': "Una pareja formidable, intelectualmente alineada — fuerte en sistemas, débil en vocabulario emocional.",
  'compatibility.mbti.ENTJ-INTJ.practice': "El ENTJ tiene que dejar al INTJ terminar de pensar. El INTJ tiene que comprometerse antes de que estén todos los datos.",

  'compatibility.mbti.ENTJ-INTP.dynamic': "El INTP suministra el modelo; el ENTJ lo prueba en el mundo. Juntos pueden construir cosas inusualmente rigurosas.",
  'compatibility.mbti.ENTJ-INTP.friction': "El ENTJ quiere el modelo desplegado; el INTP lo quiere perfeccionado. El ENTJ empuja la puerta abierta; el INTP la sigue manteniendo cerrada.",
  'compatibility.mbti.ENTJ-INTP.together': "Una pareja de experto y ejecutor — silenciosamente poderosa cuando ambos respetan lo que aporta el otro.",
  'compatibility.mbti.ENTJ-INTP.practice': "El ENTJ tiene que valorar el proceso del INTP, no solo el resultado. El INTP tiene que entregar la versión sin terminar.",

  'compatibility.mbti.ENTJ-ISFJ.dynamic': "El ENTJ se hace cargo del mundo; el ISFJ se hace cargo de la casa. Hay clara división de tareas y respeto mutuo.",
  'compatibility.mbti.ENTJ-ISFJ.friction': "El ENTJ quiere eficiencia; el ISFJ quiere tradición. El ENTJ pasa por encima del cuidado del ISFJ; el ISFJ resiente el atropello.",
  'compatibility.mbti.ENTJ-ISFJ.together': "Una pareja capaz, fiable, algo tradicional — fuerte en roles, débil en negociación.",
  'compatibility.mbti.ENTJ-ISFJ.practice': "El ENTJ tiene que consultar al ISFJ antes de decidir por ellos. El ISFJ tiene que afirmar preferencias en voz alta, no en silencio.",

  'compatibility.mbti.ENTJ-ISFP.dynamic': "El ENTJ aporta dirección; el ISFP aporta el aterrizaje en valores. El punto ciego del ENTJ es Fi; el del ISFP es Te — complementariedad natural.",
  'compatibility.mbti.ENTJ-ISFP.friction': "El ENTJ quiere planear el futuro; el ISFP quiere habitar el presente. El ENTJ pasa por encima; el ISFP se retira.",
  'compatibility.mbti.ENTJ-ISFP.together': "Una pareja extraña que, cuando funciona, equilibra motor y profundidad inusualmente bien.",
  'compatibility.mbti.ENTJ-ISFP.practice': "El ENTJ tiene que dejar de decidir por el ISFP. El ISFP tiene que vocear los valores antes de que sean apisonados.",

  'compatibility.mbti.ENTJ-ISTJ.dynamic': "Ambos tipos Te-líderes valoran la ejecución, fiabilidad y estándares claros. Las operaciones funcionan suavemente.",
  'compatibility.mbti.ENTJ-ISTJ.friction': "El ENTJ quiere cambio; el ISTJ quiere el método probado. El ENTJ empuja; el ISTJ se tensa; la iteración se atasca.",
  'compatibility.mbti.ENTJ-ISTJ.together': "Una pareja capaz, fiable, ligeramente conservadora — fuerte en seguimiento, débil en innovación.",
  'compatibility.mbti.ENTJ-ISTJ.practice': "El ENTJ tiene que argumentar el cambio antes de empujar. El ISTJ tiene que implicarse con nueva evidencia, no descartarla.",

  'compatibility.mbti.ENTJ-ISTP.dynamic': "El ENTJ comanda; el ISTP ejecuta — pero solo en sus propios términos. Hay respeto mutuo por la capacidad sin sentimentalismo.",
  'compatibility.mbti.ENTJ-ISTP.friction': "El ENTJ quiere cumplimiento; el ISTP quiere autonomía. El ENTJ empuja; el ISTP se desconecta; la relación se queda en silencio.",
  'compatibility.mbti.ENTJ-ISTP.together': "Una pareja capaz, de poca emoción — fuerte en hacer cosas, débil en conexión emocional.",
  'compatibility.mbti.ENTJ-ISTP.practice': "El ENTJ tiene que conceder autonomía al ISTP. El ISTP tiene que sacar a flote el desacuerdo antes de simplemente quedarse callado.",

  'compatibility.mbti.ENTP-ENTP.dynamic': "Dos debatidores chispean entre sí sin fin. Las conversaciones son ruidosas, generadoras y agotadoras para los de fuera.",
  'compatibility.mbti.ENTP-ENTP.friction': "Ninguno cede; ambos siguen pinchando. Sin un proyecto externo, la relación se vuelve puro debate sin resolución.",
  'compatibility.mbti.ENTP-ENTP.together': "Una pareja brillante, intelectualmente eléctrica — formidable en movimiento, frágil en quietud.",
  'compatibility.mbti.ENTP-ENTP.practice': "Ambos tienen que aterrizar. Toma una decisión y vive con ella; el debate no es intimidad.",

  'compatibility.mbti.ENTP-ESFJ.dynamic': "El ESFJ cuida el tejido relacional; el ENTP trae novedad y desafío. Hay alivio mutuo — el ENTP recibe cuidado, el ESFJ es estirado.",
  'compatibility.mbti.ENTP-ESFJ.friction': "El ENTP debate todo; el ESFJ toma el desacuerdo como amenaza relacional. El ENTP pincha; el ESFJ se hiere; el ciclo escala.",
  'compatibility.mbti.ENTP-ESFJ.together': "Una pareja cálida y estirada — funciona cuando ambos honran lo que aporta el otro.",
  'compatibility.mbti.ENTP-ESFJ.practice': "El ENTP tiene que registrar que algunas cosas no están a debate. El ESFJ tiene que dejar de leer el desafío como personal.",

  'compatibility.mbti.ENTP-ESFP.dynamic': "Ambos son tipos vivos, sociales, optimistas. La energía es alta; la agenda social está llena; las ideas y aventuras se multiplican.",
  'compatibility.mbti.ENTP-ESFP.friction': "El ENTP quiere juego intelectual; el ESFP quiere juego experiencial. Distintas formas de diversión empiezan a sentirse desajustadas.",
  'compatibility.mbti.ENTP-ESFP.together': "Una pareja brillante, expansiva — fuerte en movimiento, débil en profundidad.",
  'compatibility.mbti.ENTP-ESFP.practice': "El ENTP tiene que sumarse a la diversión cuerpo-implicada del ESFP. El ESFP tiene que seguir la diversión idea-implicada del ENTP.",

  'compatibility.mbti.ENTP-ESTJ.dynamic': "El ESTJ estructura; el ENTP innova. El ESTJ corre la organización que el ENTP sigue inventando.",
  'compatibility.mbti.ENTP-ESTJ.friction': "El ESTJ quiere el plan ejecutado; el ENTP quiere el plan cuestionado. El ESTJ siente el caos; el ENTP siente la jaula.",
  'compatibility.mbti.ENTP-ESTJ.together': "Una pareja capaz, productiva, a veces conflictiva — fuerte en capacidad, vulnerable en tempo.",
  'compatibility.mbti.ENTP-ESTJ.practice': "El ESTJ tiene que dejar al ENTP pinchar sin tomarlo como insubordinación. El ENTP tiene que honrar el plan ejecutado.",

  'compatibility.mbti.ENTP-ESTP.dynamic': "Ambos son rápidos, ingeniosos, orientados a acción y a ideas. Se meten en líos; salen; lo convierten en historia.",
  'compatibility.mbti.ENTP-ESTP.friction': "El ENTP debate; el ESTP actúa; ninguno pausa. Cuando algo sale mal, ambos desvían.",
  'compatibility.mbti.ENTP-ESTP.together': "Una pareja viva, ligeramente caótica — fuerte en aventura, débil en quietud.",
  'compatibility.mbti.ENTP-ESTP.practice': "Ambos tienen que parar y sentir antes de pivotar a lo siguiente.",

  'compatibility.mbti.ENTP-INFJ.dynamic': "Una pareja MBTI muy celebrada — la profundidad del INFJ encuentra el juego del ENTP; ambos hallan al raro compañero que puede ir profundo y subir.",
  'compatibility.mbti.ENTP-INFJ.friction': "El ENTP debate; el INFJ se toma las cosas personalmente. El ENTP pincha; el INFJ se retira; el juego se vuelve herida.",
  'compatibility.mbti.ENTP-INFJ.together': "Una pareja intensa, mutuamente intrigada — magnética cuando funciona, agotadora cuando no.",
  'compatibility.mbti.ENTP-INFJ.practice': "El ENTP tiene que registrar la profundidad del INFJ, no pincharla. El INFJ tiene que subir al tempo del ENTP.",

  'compatibility.mbti.ENTP-INFP.dynamic': "El ENTP saca al INFP; el INFP le da al ENTP un ancla emocional. Las conversaciones son amplias y cálidas.",
  'compatibility.mbti.ENTP-INFP.friction': "El ENTP debate todo; el INFP lee el desacuerdo como violación de valores. El ENTP pincha; el INFP se hiere.",
  'compatibility.mbti.ENTP-INFP.together': "Una pareja cálida, rica en ideas — fuerte en conversación, frágil en desacuerdo.",
  'compatibility.mbti.ENTP-INFP.practice': "El ENTP tiene que aprender qué cosas el INFP sostiene como sagradas. El INFP tiene que diferenciar deporte de ataque.",

  'compatibility.mbti.ENTP-INTJ.dynamic': "El ENTP suministra el ángulo sorprendente; el INTJ suministra el arco largo. Juntos pueden hacer un trabajo estratégico inusualmente inventivo.",
  'compatibility.mbti.ENTP-INTJ.friction': "El INTJ quiere cierre; el ENTP quiere opciones. El INTJ presiona por decisión; el ENTP sigue reabriendo.",
  'compatibility.mbti.ENTP-INTJ.together': "Una pareja famosamente generadora — afilada, productiva, a veces combativa.",
  'compatibility.mbti.ENTP-INTJ.practice': "El INTJ tiene que dejar al ENTP iterar más de lo que se siente cómodo. El ENTP tiene que comprometerse cuando el modelo es lo bastante bueno.",

  'compatibility.mbti.ENTP-INTP.dynamic': "Dos tipos NT, uno Ne extravertido / uno Ti introvertido — sus conversaciones cubren terreno al que otras personas no llegan.",
  'compatibility.mbti.ENTP-INTP.friction': "El ENTP presiona por acción; el INTP quiere modelar primero. El ENTP se impacienta; el INTP se siente apresurado.",
  'compatibility.mbti.ENTP-INTP.together': "Una pareja intelectualmente rica, de poca emoción — fuerte en sistemas, débil en cuidado relacional.",
  'compatibility.mbti.ENTP-INTP.practice': "El ENTP tiene que dar al INTP tiempo de proceso. El INTP tiene que sacar a flote una postura antes de que sea perfecta.",

  'compatibility.mbti.ENTP-ISFJ.dynamic': "El ISFJ aporta estabilidad; el ENTP aporta novedad. El ISFJ tiene una vida más interesante; el ENTP tiene una casa.",
  'compatibility.mbti.ENTP-ISFJ.friction': "El ENTP debate; el ISFJ quiere armonía. El ENTP pincha; el ISFJ se retira herido; el ENTP no lo ve.",
  'compatibility.mbti.ENTP-ISFJ.together': "Una pareja complementaria cuando el ENTP frena; difícil cuando no.",
  'compatibility.mbti.ENTP-ISFJ.practice': "El ENTP tiene que leer el dolor silencioso del ISFJ antes. El ISFJ tiene que sacar el dolor a flote en voz alta.",

  'compatibility.mbti.ENTP-ISFP.dynamic': "El ENTP trae energía; el ISFP trae profundidad silenciosa. Cada uno está intrigado por lo que carga el otro.",
  'compatibility.mbti.ENTP-ISFP.friction': "El ENTP debate; el ISFP no. El ENTP presiona por implicación; el ISFP se retira más.",
  'compatibility.mbti.ENTP-ISFP.together': "Una pareja extraña que es silenciosamente significativa cuando el ENTP modula y el ISFP aparece.",
  'compatibility.mbti.ENTP-ISFP.practice': "El ENTP tiene que dejar de probar si el ISFP se implicará. El ISFP tiene que implicarse sin ser perseguido.",

  'compatibility.mbti.ENTP-ISTJ.dynamic': "El ISTJ suministra ejecución; el ENTP suministra invención. Complementariedad real cuando ambos honran lo que hace el otro.",
  'compatibility.mbti.ENTP-ISTJ.friction': "El ENTP cambia de rumbo; el ISTJ quiere el plan acordado. El ENTP improvisa; el ISTJ se tensa.",
  'compatibility.mbti.ENTP-ISTJ.together': "Una pareja capaz — cuando los roles están acordados, entrega.",
  'compatibility.mbti.ENTP-ISTJ.practice': "El ENTP tiene que honrar el plan original más de lo que quiere. El ISTJ tiene que permitir más revisión de lo que se siente cómodo.",

  'compatibility.mbti.ENTP-ISTP.dynamic': "Ambos son tipos que usan Ti — los modelos lógicos y la competencia son lenguas maternas mutuas. Juguetones, capaces, sin pelusa.",
  'compatibility.mbti.ENTP-ISTP.friction': "El ENTP quiere implicación; el ISTP quiere soledad. El ENTP empuja; el ISTP se retira; el bucle corre.",
  'compatibility.mbti.ENTP-ISTP.together': "Una pareja capaz, intelectualmente alineada — fuerte en sistemas, débil en conexión emocional.",
  'compatibility.mbti.ENTP-ISTP.practice': "El ENTP tiene que dar al ISTP espacio. El ISTP tiene que volver de la cueva a tiempo.",

  'compatibility.mbti.ESFJ-ESFJ.dynamic': "Dos cónsules — calidez, hospitalidad y recordar los cumpleaños son lenguas maternas mutuas. La casa funciona.",
  'compatibility.mbti.ESFJ-ESFJ.friction': "Ambos gestionan el tejido relacional y silenciosamente puntúan quién da más. El marcador nunca se reinicia.",
  'compatibility.mbti.ESFJ-ESFJ.together': "Una pareja cálida, social, ligeramente convencional — fuerte en comunidad, débil en mecer el barco.",
  'compatibility.mbti.ESFJ-ESFJ.practice': "Ambos tienen que arriesgarse a pedir directamente lo que quieren, no insinuar y esperar.",

  'compatibility.mbti.ESFJ-ESFP.dynamic': "Dos tipos que usan sentir extravertido — la vida es social, expresiva y cálida. Planes, fiestas y personas llenan la agenda.",
  'compatibility.mbti.ESFJ-ESFP.friction': "El ESFJ quiere tradición; el ESFP quiere improvisación. El ESFJ se siente desestabilizado; el ESFP se siente constreñido.",
  'compatibility.mbti.ESFJ-ESFP.together': "Una pareja cálida, expresiva, viva — fuerte en conexión, ligera en arcos largos.",
  'compatibility.mbti.ESFJ-ESFP.practice': "El ESFJ tiene que flexibilizar con el ahora del ESFP. El ESFP tiene que honrar los rituales del ESFJ.",

  'compatibility.mbti.ESFJ-ESTJ.dynamic': "El ESFJ cuida personas; el ESTJ corre operaciones. Juntos cubren bases relacionales y logísticas con eficiencia.",
  'compatibility.mbti.ESFJ-ESTJ.friction': "El ESTJ quiere eficiencia; el ESFJ quiere reconocimiento emocional. El ESTJ pasa por encima; el ESFJ resiente.",
  'compatibility.mbti.ESFJ-ESTJ.together': "Una pareja capaz, tradicional, trabajadora — fuerte en roles, débil en flexibilidad.",
  'compatibility.mbti.ESFJ-ESTJ.practice': "El ESTJ tiene que considerar los datos relacionales del ESFJ explícitamente. El ESFJ tiene que pedir lo que quiere, no insinuar.",

  'compatibility.mbti.ESFJ-ESTP.dynamic': "El ESTP trae emoción; el ESFJ trae continuidad. El ESTP recibe una base; el ESFJ es estirado.",
  'compatibility.mbti.ESFJ-ESTP.friction': "El ESTP improvisa; el ESFJ rastrea compromisos. El ESFJ siente la tardanza del ESTP; el ESTP siente la contabilidad del ESFJ.",
  'compatibility.mbti.ESFJ-ESTP.together': "Una pareja cálida, viva, ligeramente desajustada — funciona cuando el ESTP aparece de forma fiable y el ESFJ flexibiliza en lo pequeño.",
  'compatibility.mbti.ESFJ-ESTP.practice': "El ESTP tiene que honrar los compromisos relacionales del ESFJ. El ESFJ tiene que dejar al ESTP improvisar sin puntuar.",

  'compatibility.mbti.ESFJ-INFJ.dynamic': "Dos tipos Fe, distintos ritmos — la calidez relacional fluye en ambas direcciones. El INFJ recibe cuidado; el ESFJ recibe profundidad.",
  'compatibility.mbti.ESFJ-INFJ.friction': "El ESFJ por defecto va a convenciones sociales; el INFJ por defecto va a la verdad interior. El ESFJ siente al INFJ alejarse del grupo; el INFJ siente al ESFJ imponer un tono.",
  'compatibility.mbti.ESFJ-INFJ.together': "Una pareja cálida, atenta — fuerte en cuidado, débil en acuerdo sobre lo que realmente importa.",
  'compatibility.mbti.ESFJ-INFJ.practice': "El ESFJ tiene que dar al INFJ espacio para disentir. El INFJ tiene que implicarse con la gramática social del ESFJ.",

  'compatibility.mbti.ESFJ-INFP.dynamic': "El ESFJ aporta cuidado logístico cálido; el INFP aporta profundidad de valores. Hay complementariedad si ambos honran lo que aporta el otro.",
  'compatibility.mbti.ESFJ-INFP.friction': "El ESFJ quiere implicación y tradición; el INFP quiere soledad y autenticidad. Ambos se sienten poco encontrados.",
  'compatibility.mbti.ESFJ-INFP.together': "Una pareja suave, cálida — funciona cuando el ESFJ permite el retiro y el INFP aprecia la estructura.",
  'compatibility.mbti.ESFJ-INFP.practice': "El ESFJ tiene que conceder soledad sin pánico. El INFP tiene que participar en los rituales que sostienen la relación.",

  'compatibility.mbti.ESFJ-INTJ.dynamic': "El ESFJ cuida el campo social; el INTJ cuida el plan a largo plazo. Juntos cubren ambos registros.",
  'compatibility.mbti.ESFJ-INTJ.friction': "El ESFJ quiere implicación relacional; el INTJ quiere eficiencia. El ESFJ se siente invisible; el INTJ se siente acosado.",
  'compatibility.mbti.ESFJ-INTJ.together': "Una pareja capaz pero emocionalmente desigual — fuerte en logística, vulnerable en calidez.",
  'compatibility.mbti.ESFJ-INTJ.practice': "El INTJ tiene que dar peso explícito a los datos relacionales del ESFJ. El ESFJ tiene que pedir directamente, no insinuar.",

  'compatibility.mbti.ESFJ-INTP.dynamic': "El ESFJ descongela al INTP; el INTP le da al ESFJ profundidad. Hay calidez real aquí cuando los ritmos coinciden.",
  'compatibility.mbti.ESFJ-INTP.friction': "El ESFJ quiere implicación emocional; el INTP quiere tiempo solo. El ESFJ persigue; el INTP se retira.",
  'compatibility.mbti.ESFJ-INTP.together': "Una pareja extraña que funciona cuando el ESFJ permite espacio y el INTP aparece de forma consistente.",
  'compatibility.mbti.ESFJ-INTP.practice': "El ESFJ tiene que dar al INTP soledad sin convertirla en referéndum. El INTP tiene que salir de la cueva a tiempo.",

  'compatibility.mbti.ESFJ-ISFJ.dynamic': "Dos SJ — tradición, familia, hospitalidad y fiabilidad son lenguas maternas compartidas. Pocas parejas son más cálidas.",
  'compatibility.mbti.ESFJ-ISFJ.friction': "Ambos prefieren la armonía a la honestidad; ambos dejan que el resentimiento crezca en silencio antes que arriesgar conflicto.",
  'compatibility.mbti.ESFJ-ISFJ.together': "Una pareja cálida, fiable, ligeramente convencional — fuerte en estabilidad, débil en conversaciones duras.",
  'compatibility.mbti.ESFJ-ISFJ.practice': "Ambos tienen que arriesgar la verdad incómoda. La supresión es más peligrosa que el desacuerdo.",

  'compatibility.mbti.ESFJ-ISFP.dynamic': "El ESFJ le da al ISFP un hogar emocional; el ISFP le da al ESFJ profundidad estética. Ambos son cálidos y orientados al presente.",
  'compatibility.mbti.ESFJ-ISFP.friction': "El ESFJ quiere implicación verbal; el ISFP muestra amor en silencio. El ESFJ lee silencio como distancia; el ISFP lee presión como intrusión.",
  'compatibility.mbti.ESFJ-ISFP.together': "Una pareja suave, cálida — funciona cuando el ESFJ aprende el lenguaje del amor del ISFP.",
  'compatibility.mbti.ESFJ-ISFP.practice': "El ESFJ tiene que leer presencia como cuidado. El ISFP tiene que usar palabras a veces.",

  'compatibility.mbti.ESFJ-ISTJ.dynamic': "Dos SJ — deber, tradición, fiabilidad y cuidado familiar son valores compartidos. La casa funciona.",
  'compatibility.mbti.ESFJ-ISTJ.friction': "El ESFJ quiere reconocimiento emocional; el ISTJ por defecto va a las acciones. El ESFJ se siente no visto; el ISTJ se siente gestionado.",
  'compatibility.mbti.ESFJ-ISTJ.together': "Una pareja fiable, tradicional, ligeramente delgada emocionalmente — fuerte en compromiso, débil en vocabulario.",
  'compatibility.mbti.ESFJ-ISTJ.practice': "El ISTJ tiene que verbalizar el cuidado, no solo demostrarlo. El ESFJ tiene que leer la acción como amor.",

  'compatibility.mbti.ESFJ-ISTP.dynamic': "El ESFJ aporta estructura relacional; el ISTP aporta competencia tranquila. Cada uno carga algo que el otro no genera fácil.",
  'compatibility.mbti.ESFJ-ISTP.friction': "El ESFJ quiere implicación; el ISTP quiere soledad. El ESFJ persigue; el ISTP se retira; el bucle corre.",
  'compatibility.mbti.ESFJ-ISTP.together': "Una pareja complementaria, a veces desigual — funciona cuando el ESFJ sostiene el hilo relacional y el ISTP aparece.",
  'compatibility.mbti.ESFJ-ISTP.practice': "El ISTP tiene que hacer pequeñas ofertas de conexión. El ESFJ tiene que dar al silencio su sentido, no interrumpirlo.",

  'compatibility.mbti.ESFP-ESFP.dynamic': "Dos animadores — la vida es brillante, social y física. Hay planes; la comida es buena; hay gente alrededor.",
  'compatibility.mbti.ESFP-ESFP.friction': "Ninguno planea para el bajón. Cuando llega algo duro, ambos buscan distracción; la relación pierde centro.",
  'compatibility.mbti.ESFP-ESFP.together': "Una pareja brillante, divertida, orientada al presente — envidiable por fuera, frágil por dentro.",
  'compatibility.mbti.ESFP-ESFP.practice': "Ambos tienen que quedarse en la parte difícil a propósito.",

  'compatibility.mbti.ESFP-ESTJ.dynamic': "El ESTJ estructura; el ESFP trae vida. Complementariedad real cuando ambos honran lo que aporta el otro.",
  'compatibility.mbti.ESFP-ESTJ.friction': "El ESTJ quiere compromiso; el ESFP quiere libertad para sentir el momento. ESTJ ve flojera; ESFP ve rigidez.",
  'compatibility.mbti.ESFP-ESTJ.together': "Una pareja capaz, viva cuando ambos flexibilizan; difícil cuando ambos se atrincheran.",
  'compatibility.mbti.ESFP-ESTJ.practice': "El ESTJ tiene que permitir improvisación. El ESFP tiene que honrar el acuerdo.",

  'compatibility.mbti.ESFP-ESTP.dynamic': "Dos Se-doms — ambos plenamente vivos en el momento, ambos orientados a la acción, ambos físicamente implicados. Pocas parejas igualan esta inmediatez.",
  'compatibility.mbti.ESFP-ESTP.friction': "Ninguno se sienta con sentimientos. Cuando algo duele, ambos pivotan a distracción.",
  'compatibility.mbti.ESFP-ESTP.together': "Una pareja brillante, viva, física — fuerte en diversión, débil en profundidad.",
  'compatibility.mbti.ESFP-ESTP.practice': "Ambos tienen que quedarse cuando quedarse no es divertido. La relación se profundiza solo allí.",

  'compatibility.mbti.ESFP-INFJ.dynamic': "Famosa pareja polar — funciones opuestas en roles opuestos. El INFJ aporta la profundidad; el ESFP aporta la inmediatez. La fascinación mutua es real.",
  'compatibility.mbti.ESFP-INFJ.friction': "El INFJ se retira a procesar; el ESFP quiere implicación ahora. INFJ lee al ESFP como superficial; ESFP lee al INFJ como retenedor.",
  'compatibility.mbti.ESFP-INFJ.together': "Una pareja de alta amplitud — hermosa en estaciones largas y cálidas, brutal en conflicto.",
  'compatibility.mbti.ESFP-INFJ.practice': "El INFJ tiene que subir al tempo del ESFP a veces. El ESFP tiene que honrar el procesamiento del INFJ.",

  'compatibility.mbti.ESFP-INFP.dynamic': "Ambos son tipos que usan Fi — los valores se alinean rápido. El ESFP trae el mundo al INFP; el INFP trae profundidad al ESFP.",
  'compatibility.mbti.ESFP-INFP.friction': "El ESFP quiere implicación; el INFP necesita soledad. El ESFP persigue; el INFP se retira.",
  'compatibility.mbti.ESFP-INFP.together': "Una pareja cálida, alineada en valores — fuerte en conexión, ligera en iniciativa.",
  'compatibility.mbti.ESFP-INFP.practice': "El ESFP tiene que conceder soledad. El INFP tiene que implicarse cuando se le invita.",

  'compatibility.mbti.ESFP-INTJ.dynamic': "Una pareja polar muy citada — la visión del INTJ encuentra la presencia del ESFP. Cada uno es el punto ciego del otro encarnado.",
  'compatibility.mbti.ESFP-INTJ.friction': "El INTJ planea; el ESFP improvisa. El INTJ lee caos; el ESFP lee jaula.",
  'compatibility.mbti.ESFP-INTJ.together': "Una pareja de alta amplitud — transformadora cuando funciona, dolorosa cuando no.",
  'compatibility.mbti.ESFP-INTJ.practice': "El INTJ tiene que entrar al momento presente. El ESFP tiene que honrar el plan más largo.",

  'compatibility.mbti.ESFP-INTP.dynamic': "El ESFP trae vida y el cuerpo; el INTP trae modelo y profundidad. Cada uno está intrigado por lo que genera el otro.",
  'compatibility.mbti.ESFP-INTP.friction': "El ESFP quiere el mundo; el INTP quiere la cabeza. Distintos metabolismos crean distancia real con el tiempo.",
  'compatibility.mbti.ESFP-INTP.together': "Una pareja extraña que funciona cuando ambos se inclinan hacia el medio.",
  'compatibility.mbti.ESFP-INTP.practice': "El ESFP tiene que implicarse con los modelos del INTP. El INTP tiene que salir y hacer la cosa.",

  'compatibility.mbti.ESFP-ISFJ.dynamic': "El ISFJ aporta estabilidad y cuidado; el ESFP aporta vida y alegría. Calidez real aquí.",
  'compatibility.mbti.ESFP-ISFJ.friction': "El ISFJ quiere tradición; el ESFP quiere lo siguiente. El ISFJ se siente desestabilizado; el ESFP se siente constreñido.",
  'compatibility.mbti.ESFP-ISFJ.together': "Una pareja cálida, algo desajustada — fuerte en cuidado, vulnerable en ritmo.",
  'compatibility.mbti.ESFP-ISFJ.practice': "El ISFJ tiene que permitir improvisación. El ESFP tiene que honrar lo que el ISFJ mantiene vivo.",

  'compatibility.mbti.ESFP-ISFP.dynamic': "Ambos son tipos Se-Fi — momento presente y autenticidad de valores. Las sensibilidades estéticas se alinean; la presencia es suficiente.",
  'compatibility.mbti.ESFP-ISFP.friction': "Ambos se retiran en lugar de confrontar. Los conflictos van bajo tierra y se quedan ahí.",
  'compatibility.mbti.ESFP-ISFP.together': "Una pareja suave, estética, cálida — fuerte en presencia, débil en conflicto.",
  'compatibility.mbti.ESFP-ISFP.practice': "Ambos tienen que sacar a flote el desacuerdo antes de que fermente.",

  'compatibility.mbti.ESFP-ISTJ.dynamic': "El ISTJ aporta fiabilidad; el ESFP aporta vida. Complementariedad real cuando cada uno respeta lo que aporta el otro.",
  'compatibility.mbti.ESFP-ISTJ.friction': "El ISTJ quiere el plan; el ESFP quiere el momento. El ISTJ ve caos; el ESFP ve falta de alegría.",
  'compatibility.mbti.ESFP-ISTJ.together': "Una pareja capaz, viva cuando ambos se estiran — abrasiva cuando ambos se atrincheran.",
  'compatibility.mbti.ESFP-ISTJ.practice': "El ISTJ tiene que permitir improvisación. El ESFP tiene que honrar la estructura acordada.",

  'compatibility.mbti.ESFP-ISTP.dynamic': "Dos tipos que usan Se — ambos vivos en el momento, ambos orientados a la acción. El ESFP calienta al ISTP; el ISTP aterriza al ESFP.",
  'compatibility.mbti.ESFP-ISTP.friction': "El ESFP quiere implicación; el ISTP quiere soledad. El ESFP persigue; el ISTP se retira.",
  'compatibility.mbti.ESFP-ISTP.together': "Una pareja capaz, orientada a la acción — fuerte en aventuras, débil en vocabulario emocional.",
  'compatibility.mbti.ESFP-ISTP.practice': "El ISTP tiene que verbalizar. El ESFP tiene que leer presencia como cuidado.",

  'compatibility.mbti.ESTJ-ESTJ.dynamic': "Dos ejecutivos — eficiencia, logística y estándares claros se alinean sin traducción.",
  'compatibility.mbti.ESTJ-ESTJ.friction': "Ambos quieren ser la voz que decide. El poder se disputa directa y a menudo.",
  'compatibility.mbti.ESTJ-ESTJ.together': "Una pareja capaz, jerárquica, tradicional — fuerte en resultados, débil en ancho de banda emocional.",
  'compatibility.mbti.ESTJ-ESTJ.practice': "Ambos tienen que turnarse en ceder. La fuerza no es el problema; la flexibilidad lo es.",

  'compatibility.mbti.ESTJ-ESTP.dynamic': "Ambos son prácticos, orientados a la acción, enfocados en resultados. Las cosas se hacen.",
  'compatibility.mbti.ESTJ-ESTP.friction': "El ESTJ quiere el plan ejecutado; el ESTP improvisa tácticamente. El ESTJ lee caos; el ESTP lee rigidez.",
  'compatibility.mbti.ESTJ-ESTP.together': "Una pareja capaz, impulsada por la acción — fuerte en movimiento, débil en arcos largos.",
  'compatibility.mbti.ESTJ-ESTP.practice': "El ESTJ tiene que permitir improvisación táctica. El ESTP tiene que honrar el plan estratégico.",

  'compatibility.mbti.ESTJ-INFJ.dynamic': "El ESTJ ejecuta; el INFJ visiona. Complementariedad real cuando ambos honran lo que aporta el otro.",
  'compatibility.mbti.ESTJ-INFJ.friction': "El ESTJ quiere acción; el INFJ quiere profundidad. El ESTJ pasa por encima; el INFJ se retira.",
  'compatibility.mbti.ESTJ-INFJ.together': "Una pareja capaz, a menudo emocionalmente desigual — fuerte en logística, débil en calidez.",
  'compatibility.mbti.ESTJ-INFJ.practice': "El ESTJ tiene que esperar la intuición completa del INFJ. El INFJ tiene que aterrizar una opinión sobre la que el ESTJ pueda actuar.",

  'compatibility.mbti.ESTJ-INFP.dynamic': "Una pareja polar — pilas cognitivas opuestas. El ESTJ aporta estructura; el INFP aporta valores. Cuando funciona, hay transformación.",
  'compatibility.mbti.ESTJ-INFP.friction': "El ESTJ quiere acción; el INFP necesita alineación con valores primero. ESTJ lee al INFP como evasivo; INFP lee al ESTJ como apisonadora.",
  'compatibility.mbti.ESTJ-INFP.together': "Una pareja de alta amplitud — abrasiva sin esfuerzo.",
  'compatibility.mbti.ESTJ-INFP.practice': "El ESTJ tiene que frenar para el chequeo de valores. El INFP tiene que entregar próximos pasos concretos.",

  'compatibility.mbti.ESTJ-INTJ.dynamic': "Ambos son tipos que usan Te — eficiencia y estándares claros se alinean. El INTJ suministra estrategia; el ESTJ suministra ejecución.",
  'compatibility.mbti.ESTJ-INTJ.friction': "El ESTJ quiere el método probado; el INTJ quiere el óptimo. El ESTJ resiste el cambio; el INTJ lo empuja.",
  'compatibility.mbti.ESTJ-INTJ.together': "Una pareja capaz, productiva — fuerte en sistemas, débil en calidez emocional.",
  'compatibility.mbti.ESTJ-INTJ.practice': "El ESTJ tiene que implicarse con la evidencia del INTJ para el cambio. El INTJ tiene que argumentar antes de empujar.",

  'compatibility.mbti.ESTJ-INTP.dynamic': "El INTP suministra el modelo; el ESTJ suministra el despliegue. Respeto mutuo por la capacidad.",
  'compatibility.mbti.ESTJ-INTP.friction': "El ESTJ quiere acción; el INTP quiere más análisis. El ESTJ empuja; el INTP se retira más al modelo.",
  'compatibility.mbti.ESTJ-INTP.together': "Una pareja capaz, de poca emoción — fuerte en sistemas, débil en cuidado relacional.",
  'compatibility.mbti.ESTJ-INTP.practice': "El ESTJ tiene que dar al INTP tiempo de proceso. El INTP tiene que entregar antes de que sea perfecto.",

  'compatibility.mbti.ESTJ-ISFJ.dynamic': "Dos SJ — deber, familia, tradición. Los roles se dividen naturalmente; la casa funciona.",
  'compatibility.mbti.ESTJ-ISFJ.friction': "El ESTJ por defecto va a la logística; el ISFJ por defecto va al cuidado. El ESTJ se siente regañado por sentimientos; el ISFJ se siente atropellado.",
  'compatibility.mbti.ESTJ-ISFJ.together': "Una pareja tradicional, fiable — fuerte en compromiso, débil en vocabulario emocional.",
  'compatibility.mbti.ESTJ-ISFJ.practice': "El ESTJ tiene que reconocer los sentimientos como datos. El ISFJ tiene que afirmar preferencias en voz alta.",

  'compatibility.mbti.ESTJ-ISFP.dynamic': "El ESTJ estructura lo externo; el ISFP sostiene el núcleo de valores. Complementariedad real cuando se honra.",
  'compatibility.mbti.ESTJ-ISFP.friction': "El ESTJ presiona por decisiones; el ISFP necesita sentir los valores. El ESTJ pasa por encima; el ISFP se retira.",
  'compatibility.mbti.ESTJ-ISFP.together': "Una pareja extraña cuando ambos flexibilizan; difícil cuando no.",
  'compatibility.mbti.ESTJ-ISFP.practice': "El ESTJ tiene que consultar al ISFP. El ISFP tiene que sacar a flote el chequeo de valores antes de ser apisonado.",

  'compatibility.mbti.ESTJ-ISTJ.dynamic': "Dos SJ con estándares compartidos — deber, fiabilidad, hacer las cosas de la forma correcta. Las operaciones funcionan.",
  'compatibility.mbti.ESTJ-ISTJ.friction': "Ambos creen saber el método correcto. Los desacuerdos sobre estándares se vuelven rígidos rápido.",
  'compatibility.mbti.ESTJ-ISTJ.together': "Una pareja capaz, tradicional, fiable — fuerte en seguimiento, débil en flexibilidad.",
  'compatibility.mbti.ESTJ-ISTJ.practice': "Ambos tienen que implicarse con nueva evidencia por sus méritos, no por familiaridad.",

  'compatibility.mbti.ESTJ-ISTP.dynamic': "El ESTJ comanda; el ISTP ejecuta — pero solo en sus términos. Hay respeto mutuo por la competencia.",
  'compatibility.mbti.ESTJ-ISTP.friction': "El ESTJ quiere cumplimiento; el ISTP quiere autonomía. El ESTJ empuja; el ISTP se desconecta.",
  'compatibility.mbti.ESTJ-ISTP.together': "Una pareja capaz, de poca emoción — fuerte en producción, débil en calidez.",
  'compatibility.mbti.ESTJ-ISTP.practice': "El ESTJ tiene que conceder autonomía al ISTP. El ISTP tiene que sacar a flote el desacuerdo en lugar de quedarse callado.",

  'compatibility.mbti.ESTP-ESTP.dynamic': "Dos emprendedores — la vida es rápida, viva y comprometida con el mundo. Las aventuras se multiplican.",
  'compatibility.mbti.ESTP-ESTP.friction': "Ninguno para. Cuando algo duele, ambos pivotan a la acción; la capa emocional nunca se cuida.",
  'compatibility.mbti.ESTP-ESTP.together': "Una pareja brillante, impulsada por la acción — fuerte en movimiento, débil en profundidad.",
  'compatibility.mbti.ESTP-ESTP.practice': "Ambos tienen que parar y sentir antes de pivotar.",

  'compatibility.mbti.ESTP-INFJ.dynamic': "Pareja polar — la profundidad del INFJ encuentra la inmediatez del ESTP. Cada uno es el punto ciego del otro. Magnética cuando funciona.",
  'compatibility.mbti.ESTP-INFJ.friction': "El INFJ quiere reflexión; el ESTP quiere acción. El INFJ se retira; el ESTP se aburre.",
  'compatibility.mbti.ESTP-INFJ.together': "Una pareja de alta amplitud — transformadora cuando funciona, frágil cuando no.",
  'compatibility.mbti.ESTP-INFJ.practice': "El INFJ tiene que subir. El ESTP tiene que frenar para la conversación de sentido.",

  'compatibility.mbti.ESTP-INFP.dynamic': "El ESTP trae el mundo al INFP; el INFP trae profundidad al ESTP. Complementariedad real cuando ambos lo honran.",
  'compatibility.mbti.ESTP-INFP.friction': "El ESTP actúa; el INFP siente primero. ESTP lee al INFP como pensar de más; INFP lee al ESTP como superficial.",
  'compatibility.mbti.ESTP-INFP.together': "Una pareja extraña — funciona cuando ambos se inclinan el uno hacia el otro.",
  'compatibility.mbti.ESTP-INFP.practice': "El ESTP tiene que frenar para el procesamiento del INFP. El INFP tiene que implicarse con el mundo al que el ESTP lo invita.",

  'compatibility.mbti.ESTP-INTJ.dynamic': "Ambos tienen Ni y Se en sus pilas pero en arreglos opuestos — el INTJ aporta el arco largo, el ESTP aporta la lectura en vivo. Puede desarrollarse respeto real.",
  'compatibility.mbti.ESTP-INTJ.friction': "El INTJ quiere el plan comprometido; el ESTP quiere libertad táctica. El INTJ apisona; el ESTP improvisa alrededor del plan.",
  'compatibility.mbti.ESTP-INTJ.together': "Una pareja formidable cuando se honra — estratégico y táctico fundidos.",
  'compatibility.mbti.ESTP-INTJ.practice': "El INTJ tiene que conceder autonomía táctica. El ESTP tiene que honrar el marco estratégico.",

  'compatibility.mbti.ESTP-INTP.dynamic': "Ambos son tipos que usan Ti — los modelos lógicos y la competencia son lenguas mutuas. Conversaciones afiladas; el vínculo es sin pelusa.",
  'compatibility.mbti.ESTP-INTP.friction': "El ESTP quiere acción; el INTP quiere análisis. El ESTP se impacienta; el INTP se siente apresurado.",
  'compatibility.mbti.ESTP-INTP.together': "Una pareja capaz, intelectualmente honesta — fuerte en sistemas, débil en cuidado emocional.",
  'compatibility.mbti.ESTP-INTP.practice': "El ESTP tiene que dar al INTP tiempo de proceso. El INTP tiene que entregar antes de que sea perfecto.",

  'compatibility.mbti.ESTP-ISFJ.dynamic': "El ISFJ aporta estabilidad y cuidado; el ESTP aporta vida y emoción. Calidez real cuando ambos lo honran.",
  'compatibility.mbti.ESTP-ISFJ.friction': "El ESTP quiere ahora; el ISFJ quiere fiable. El ESTP se siente constreñido; el ISFJ se siente desestabilizado.",
  'compatibility.mbti.ESTP-ISFJ.together': "Una pareja cálida, viva — fuerte cuando ambos flexibilizan, abrasiva cuando ambos se atrincheran.",
  'compatibility.mbti.ESTP-ISFJ.practice': "El ESTP tiene que honrar las necesidades de fiabilidad del ISFJ. El ISFJ tiene que permitir improvisación.",

  'compatibility.mbti.ESTP-ISFP.dynamic': "Dos tipos que usan Se — momento presente, conscientes del cuerpo, orientados a la acción. El ESTP calienta al ISFP; el ISFP aterriza al ESTP.",
  'compatibility.mbti.ESTP-ISFP.friction': "El ESTP quiere implicación; el ISFP quiere soledad. El ESTP persigue; el ISFP se retira.",
  'compatibility.mbti.ESTP-ISFP.together': "Una pareja capaz, orientada al presente — fuerte en experiencia compartida, débil en vocabulario emocional.",
  'compatibility.mbti.ESTP-ISFP.practice': "El ISFP tiene que verbalizar. El ESTP tiene que leer presencia como cuidado.",

  'compatibility.mbti.ESTP-ISTJ.dynamic': "El ISTJ aporta fiabilidad; el ESTP aporta emoción. Complementariedad real cuando ambos lo honran.",
  'compatibility.mbti.ESTP-ISTJ.friction': "El ISTJ quiere el plan; el ESTP quiere el momento. ISTJ lee caos; ESTP lee rigidez.",
  'compatibility.mbti.ESTP-ISTJ.together': "Una pareja capaz — funciona cuando ambos flexibilizan hacia el medio.",
  'compatibility.mbti.ESTP-ISTJ.practice': "El ISTJ tiene que permitir improvisación. El ESTP tiene que honrar la estructura acordada.",

  'compatibility.mbti.ESTP-ISTP.dynamic': "Dos tipos Se-Ti — ambos orientados a la acción e impulsados por competencia. El vínculo tiene una fluidez física e intelectual inusual.",
  'compatibility.mbti.ESTP-ISTP.friction': "Ninguno es bueno con la capa emocional. Cuando algo duele, ambos pivotan a acción o a soledad.",
  'compatibility.mbti.ESTP-ISTP.together': "Una pareja capaz, impulsada por la acción — fuerte en hacer, débil en hablar de ello.",
  'compatibility.mbti.ESTP-ISTP.practice': "Ambos tienen que verbalizar antes de retirarse.",

  'compatibility.mbti.INFJ-INFJ.dynamic': "Dos abogados se reconocen inmediatamente. Las conversaciones van profundas sin charla pequeña; el entendimiento mutuo es raro y rápido.",
  'compatibility.mbti.INFJ-INFJ.friction': "Ambos se retiran a procesar; ninguno inicia el regreso. Días de silencio se vuelven semanas.",
  'compatibility.mbti.INFJ-INFJ.together': "Una pareja profundamente sintonizada, a veces demasiado quieta — radiante en conexión, frágil en aislamiento.",
  'compatibility.mbti.INFJ-INFJ.practice': "Uno tiene que romper el silencio primero. Por defecto al regreso; el otro no está reteniendo, solo procesando.",

  'compatibility.mbti.INFJ-INFP.dynamic': "Dos tipos intuitivos sintientes — profundidad, sentido y autenticidad son lenguas mutuas. Entendimiento real.",
  'compatibility.mbti.INFJ-INFP.friction': "El INFJ actúa sobre la visión; el INFP rehúsa actuar hasta que los valores estén alineados. El INFJ se siente retenido; el INFP se siente apurado.",
  'compatibility.mbti.INFJ-INFP.together': "Una pareja tierna, idealista — fuerte en sentido compartido, débil en ejecución.",
  'compatibility.mbti.INFJ-INFP.practice': "El INFJ tiene que esperar el chequeo de valores del INFP. El INFP tiene que aterrizar una posición.",

  'compatibility.mbti.INFJ-INTJ.dynamic': "Ambos son Ni-doms — visión, abstracción y arcos largos son lenguas maternas mutuas. La relación tiene profundidad inusual desde el primer día.",
  'compatibility.mbti.INFJ-INTJ.friction': "El INFJ lidera con personas; el INTJ lidera con sistemas. INTJ lee al INFJ como blando; INFJ lee al INTJ como frío.",
  'compatibility.mbti.INFJ-INTJ.together': "Una pareja profundamente sintonizada, intelectualmente rigurosa — fuerte en profundidad y alcance.",
  'compatibility.mbti.INFJ-INTJ.practice': "El INTJ tiene que considerar datos relacionales. El INFJ tiene que argumentar lógicamente cuando se necesita.",

  'compatibility.mbti.INFJ-INTP.dynamic': "El INTP suministra el modelo; el INFJ suministra el sentido. Ambos son pensadores introvertidos en claves distintas.",
  'compatibility.mbti.INFJ-INTP.friction': "El INFJ quiere implicación emocional; el INTP quiere implicación de ideas. Distintas formas de intimidad pueden desajustarse.",
  'compatibility.mbti.INFJ-INTP.together': "Una pareja silenciosa, intelectualmente profunda — fuerte en conversación, débil en articulación emocional.",
  'compatibility.mbti.INFJ-INTP.practice': "El INTP tiene que sacar a flote sentimientos, no solo pensamientos. El INFJ tiene que implicarse con el desacuerdo lógico sin tomarlo personalmente.",

  'compatibility.mbti.INFJ-ISFJ.dynamic': "Dos tipos Fe auxiliar — el cuidado de personas es compartido. El ISFJ sostiene lo práctico; el INFJ sostiene el sentido.",
  'compatibility.mbti.INFJ-ISFJ.friction': "El INFJ presiona por visión; el ISFJ sostiene tradición. El INFJ desestabiliza; el ISFJ resiste.",
  'compatibility.mbti.INFJ-ISFJ.together': "Una pareja cálida, suave — fuerte en cuidado, a veces débil en dirección.",
  'compatibility.mbti.INFJ-ISFJ.practice': "El INFJ tiene que honrar lo que el ISFJ mantiene vivo. El ISFJ tiene que implicarse con la vista más larga del INFJ.",

  'compatibility.mbti.INFJ-ISFP.dynamic': "Ambos son silenciosos, profundos, impulsados por valores. El ISFP trae presencia sensual; el INFJ trae arquitectura interior.",
  'compatibility.mbti.INFJ-ISFP.friction': "El INFJ quiere profundidad verbal; el ISFP muestra profundidad a través del ser. El INFJ presiona por palabras; el ISFP se retira.",
  'compatibility.mbti.INFJ-ISFP.together': "Una pareja suave, íntima — fuerte en valores compartidos, débil en procesamiento verbal.",
  'compatibility.mbti.INFJ-ISFP.practice': "El INFJ tiene que leer presencia como profundidad. El ISFP tiene que usar palabras a veces.",

  'compatibility.mbti.INFJ-ISTJ.dynamic': "El ISTJ aporta estabilidad y fiabilidad; el INFJ aporta profundidad y dirección. Complementariedad real cuando se honra.",
  'compatibility.mbti.INFJ-ISTJ.friction': "El ISTJ quiere el método probado; el INFJ quiere la nueva visión. El ISTJ resiste; el INFJ se retira.",
  'compatibility.mbti.INFJ-ISTJ.together': "Una pareja fiable, de combustión lenta — fuerte en compromiso, débil en tempo.",
  'compatibility.mbti.INFJ-ISTJ.practice': "El ISTJ tiene que implicarse con la visión del INFJ. El INFJ tiene que honrar lo que el ISTJ mantiene funcionando.",

  'compatibility.mbti.INFJ-ISTP.dynamic': "Dos tipos introvertidos — la soledad se comparte sin tensión. El ISTP trae inmediatez práctica; el INFJ trae intuición profunda.",
  'compatibility.mbti.INFJ-ISTP.friction': "El INFJ quiere implicación emocional; el ISTP quiere implicación con problemas. Distintas intimidades no traducen.",
  'compatibility.mbti.INFJ-ISTP.together': "Una pareja silenciosa — funciona cuando el ISTP aparece de forma consistente y el INFJ no presiona por intimidad verbal.",
  'compatibility.mbti.INFJ-ISTP.practice': "El ISTP tiene que verbalizar sentimiento a veces. El INFJ tiene que leer la acción como amor.",

  'compatibility.mbti.INFP-INFP.dynamic': "Dos mediadores se reconocen al instante. Valores, profundidad y autenticidad son suposiciones compartidas.",
  'compatibility.mbti.INFP-INFP.friction': "Ambos se retiran en lugar de confrontar. Los resentimientos se acumulan dentro; nada sale a la superficie.",
  'compatibility.mbti.INFP-INFP.together': "Una pareja tierna, idealista, a veces demasiado quieta — fuerte en valores, débil en conflicto.",
  'compatibility.mbti.INFP-INFP.practice': "Ambos tienen que sacar a flote la cosa difícil antes de que fermente.",

  'compatibility.mbti.INFP-INTJ.dynamic': "El INTJ aporta estructura; el INFP aporta valores. Hay atracción real aquí — opuestos en formas distintas.",
  'compatibility.mbti.INFP-INTJ.friction': "El INTJ optimiza; el INFP necesita alineación. El INTJ pasa por encima; el INFP se retira.",
  'compatibility.mbti.INFP-INTJ.together': "Una pareja complementaria cuando ambos se inclinan — abrasiva cuando ambos no.",
  'compatibility.mbti.INFP-INTJ.practice': "El INTJ tiene que frenar para el chequeo de valores. El INFP tiene que entregar acciones concretas.",

  'compatibility.mbti.INFP-INTP.dynamic': "Ambos son tipos introvertidos, impulsados por ideas — la soledad se comparte sin tensión. Las conversaciones van profundas al espacio de posibilidades.",
  'compatibility.mbti.INFP-INTP.friction': "El INFP procesa a través de valores; el INTP procesa a través de lógica. Distintos metabolismos crean malas lecturas.",
  'compatibility.mbti.INFP-INTP.together': "Una pareja silenciosa, intelectualmente cálida — fuerte en interioridad compartida, débil en acción.",
  'compatibility.mbti.INFP-INTP.practice': "Ambos tienen que salir y ejecutar, no solo pensar y sentir.",

  'compatibility.mbti.INFP-ISFJ.dynamic': "Ambos son silenciosos, cuidadosos, impulsados por valores. El ISFJ aporta cuidado práctico; el INFP aporta sentido.",
  'compatibility.mbti.INFP-ISFJ.friction': "El ISFJ quiere tradición; el INFP quiere autenticidad. El ISFJ se siente desestabilizado; el INFP se siente constreñido.",
  'compatibility.mbti.INFP-ISFJ.together': "Una pareja suave, cálida — fuerte en cuidado compartido, débil en negociación.",
  'compatibility.mbti.INFP-ISFJ.practice': "El ISFJ tiene que permitir que los valores anulen la tradición a veces. El INFP tiene que honrar los rituales.",

  'compatibility.mbti.INFP-ISFP.dynamic': "Dos Fi-doms — los valores se alinean rápido y profundo. Ambos valoran la autenticidad; ambos odian la actuación.",
  'compatibility.mbti.INFP-ISFP.friction': "Ambos se retiran bajo estrés. Ninguno inicia la conversación dura.",
  'compatibility.mbti.INFP-ISFP.together': "Una pareja tierna, alineada en valores — fuerte en autenticidad, débil en iniciativa.",
  'compatibility.mbti.INFP-ISFP.practice': "Ambos tienen que sacar a flote el desacuerdo antes de que viva en silencio.",

  'compatibility.mbti.INFP-ISTJ.dynamic': "El ISTJ aporta estructura y fiabilidad; el INFP aporta profundidad de valores. Complementariedad real cuando se honra.",
  'compatibility.mbti.INFP-ISTJ.friction': "El ISTJ quiere lo probado; el INFP quiere lo significativo. El ISTJ se siente desestabilizado; el INFP se siente constreñido.",
  'compatibility.mbti.INFP-ISTJ.together': "Una pareja fiable, de combustión lenta — fuerte en compromiso, frágil en tempo.",
  'compatibility.mbti.INFP-ISTJ.practice': "El ISTJ tiene que implicarse con valores, no solo hechos. El INFP tiene que honrar la estructura, no solo sentir sobre ella.",

  'compatibility.mbti.INFP-ISTP.dynamic': "Ambos son introvertidos, sin pelusa, impulsados por valores en claves distintas. La compañía silenciosa es mutua.",
  'compatibility.mbti.INFP-ISTP.friction': "El INFP quiere implicación emocional; el ISTP quiere implicación con problemas. Distintas intimidades no traducen fácilmente.",
  'compatibility.mbti.INFP-ISTP.together': "Una pareja silenciosa, idiosincrásica — fuerte en soledad compartida, débil en intimidad verbal.",
  'compatibility.mbti.INFP-ISTP.practice': "El INFP tiene que leer la acción como amor. El ISTP tiene que verbalizar a veces.",

  'compatibility.mbti.INTJ-INTJ.dynamic': "Dos arquitectos — estrategia, abstracción y arcos largos se alinean sin traducción. El plan existe antes de la conversación.",
  'compatibility.mbti.INTJ-INTJ.friction': "Ambos creen tener razón; ambos pasan por encima. Los conflictos se enfrían rápido.",
  'compatibility.mbti.INTJ-INTJ.together': "Una pareja formidable, intelectualmente alineada — fuerte en sistemas, débil en vocabulario emocional.",
  'compatibility.mbti.INTJ-INTJ.practice': "Ambos tienen que implicarse con el razonamiento del otro sin desprecio. Estar equivocado a veces a propósito.",

  'compatibility.mbti.INTJ-INTP.dynamic': "Ambos NT, ambos introvertidos, ambos abstractos. Las conversaciones cubren terreno al que otros no llegan. Respeto mutuo por la capacidad.",
  'compatibility.mbti.INTJ-INTP.friction': "El INTJ quiere cierre; el INTP quiere el modelo perfeccionado. INTJ presiona; INTP rehúsa entregar.",
  'compatibility.mbti.INTJ-INTP.together': "Una pareja silenciosamente poderosa — fuerte en sistemas, débil en cuidado emocional.",
  'compatibility.mbti.INTJ-INTP.practice': "El INTJ tiene que dejar respirar al modelo. El INTP tiene que comprometerse con una versión.",

  'compatibility.mbti.INTJ-ISFJ.dynamic': "El ISFJ aporta estabilidad relacional y práctica; el INTJ aporta dirección. Complementariedad real cuando se honra.",
  'compatibility.mbti.INTJ-ISFJ.friction': "El INTJ pasa por encima; el ISFJ silenciosamente acepta el golpe. El INTJ no ve el coste; el ISFJ no lo saca a flote.",
  'compatibility.mbti.INTJ-ISFJ.together': "Una pareja capaz pero emocionalmente desigual — fuerte en roles, débil en negociación.",
  'compatibility.mbti.INTJ-ISFJ.practice': "El INTJ tiene que consultar antes de decidir por ambos. El ISFJ tiene que afirmar preferencias en voz alta.",

  'compatibility.mbti.INTJ-ISFP.dynamic': "El INTJ aporta arco largo; el ISFP aporta núcleo de valores. Cada uno es la función inferior del otro — atracción real aquí.",
  'compatibility.mbti.INTJ-ISFP.friction': "El INTJ planea; el ISFP siente. El INTJ pasa por encima; el ISFP se retira.",
  'compatibility.mbti.INTJ-ISFP.together': "Una pareja extraña cuando ambos flexibilizan — distante cuando no.",
  'compatibility.mbti.INTJ-ISFP.practice': "El INTJ tiene que frenar para los valores. El ISFP tiene que sacar a flote el chequeo de valores verbalmente.",

  'compatibility.mbti.INTJ-ISTJ.dynamic': "Ambos introvertidos, ambos estratégicos y fiables en formas distintas. Respeto mutuo por la capacidad.",
  'compatibility.mbti.INTJ-ISTJ.friction': "El INTJ quiere cambio; el ISTJ quiere lo probado. El INTJ empuja; el ISTJ se tensa.",
  'compatibility.mbti.INTJ-ISTJ.together': "Una pareja capaz, fiable — fuerte en seguimiento, débil en innovación.",
  'compatibility.mbti.INTJ-ISTJ.practice': "El INTJ tiene que argumentar el cambio. El ISTJ tiene que implicarse con nueva evidencia.",

  'compatibility.mbti.INTJ-ISTP.dynamic': "Ambos silenciosos, capaces, sin pelusa. Respeto mutuo por la competencia; poca necesidad de calidez verbal.",
  'compatibility.mbti.INTJ-ISTP.friction': "El INTJ quiere el plan comprometido; el ISTP quiere libertad táctica. El INTJ empuja; el ISTP se desconecta.",
  'compatibility.mbti.INTJ-ISTP.together': "Una pareja capaz, silenciosa — fuerte en hacer, débil en hablar de ello.",
  'compatibility.mbti.INTJ-ISTP.practice': "El INTJ tiene que conceder autonomía. El ISTP tiene que sacar a flote el desacuerdo antes de quedarse callado.",

  'compatibility.mbti.INTP-INTP.dynamic': "Dos lógicos — modelos internos, juego de ideas y pensamiento riguroso son lenguas maternas compartidas.",
  'compatibility.mbti.INTP-INTP.friction': "Ambos se retiran a pensar; ninguno inicia el regreso. Días se vuelven semanas.",
  'compatibility.mbti.INTP-INTP.together': "Una pareja silenciosa, intelectualmente rigurosa — fuerte en sistemas, débil en articulación emocional.",
  'compatibility.mbti.INTP-INTP.practice': "Uno de los dos tiene que romper el silencio primero. Por defecto al alcance; el otro no está reteniendo, solo pensando.",

  'compatibility.mbti.INTP-ISFJ.dynamic': "El ISFJ aporta cuidado y continuidad; el INTP aporta profundidad intelectual. Cada uno carga lo que el otro no.",
  'compatibility.mbti.INTP-ISFJ.friction': "El ISFJ quiere implicación; el INTP quiere soledad. El ISFJ persigue; el INTP se retira.",
  'compatibility.mbti.INTP-ISFJ.together': "Una pareja suave, complementaria cuando ambos flexibilizan.",
  'compatibility.mbti.INTP-ISFJ.practice': "El ISFJ tiene que conceder soledad sin pánico. El INTP tiene que volver de la cueva a tiempo.",

  'compatibility.mbti.INTP-ISFP.dynamic': "Ambos son tipos silenciosos, internos, sin pelusa. El ISFP trae valores; el INTP trae modelos.",
  'compatibility.mbti.INTP-ISFP.friction': "Ambos se retiran bajo estrés. Ninguno inicia el regreso.",
  'compatibility.mbti.INTP-ISFP.together': "Una pareja silenciosa — fuerte en interioridad compartida, débil en iniciativa.",
  'compatibility.mbti.INTP-ISFP.practice': "Uno de los dos tiene que hacer la pequeña oferta de conexión regularmente.",

  'compatibility.mbti.INTP-ISTJ.dynamic': "El ISTJ ejecuta; el INTP analiza. Complementariedad real cuando se honra.",
  'compatibility.mbti.INTP-ISTJ.friction': "El ISTJ quiere el método probado; el INTP quiere el mejor modelo. El ISTJ resiste; el INTP se retira.",
  'compatibility.mbti.INTP-ISTJ.together': "Una pareja capaz, de combustión lenta — fuerte en sistemas, débil en tempo.",
  'compatibility.mbti.INTP-ISTJ.practice': "El ISTJ tiene que implicarse con nueva evidencia. El INTP tiene que entregar antes de que sea perfecto.",

  'compatibility.mbti.INTP-ISTP.dynamic': "Dos Ti-doms — los modelos lógicos y la competencia son compartidos. Silenciosos, capaces, mutuamente respetuosos.",
  'compatibility.mbti.INTP-ISTP.friction': "Ambos se retiran a sus respectivos mundos. Ninguno inicia el regreso.",
  'compatibility.mbti.INTP-ISTP.together': "Una pareja silenciosa, capaz — fuerte en sistemas compartidos, débil en cuidado emocional.",
  'compatibility.mbti.INTP-ISTP.practice': "Uno tiene que romper el silencio primero. Por defecto al alcance.",

  'compatibility.mbti.ISFJ-ISFJ.dynamic': "Dos defensores — cuidado, tradición, fiabilidad y devoción silenciosa son compartidos. La casa es estable.",
  'compatibility.mbti.ISFJ-ISFJ.friction': "Ambos prefieren la armonía a la honestidad. Los resentimientos se acumulan en silencio durante años.",
  'compatibility.mbti.ISFJ-ISFJ.together': "Una pareja cálida, fiable, profundamente tradicional — fuerte en estabilidad, débil en conversaciones duras.",
  'compatibility.mbti.ISFJ-ISFJ.practice': "Ambos tienen que arriesgar la verdad incómoda. La supresión es más peligrosa que el desacuerdo.",

  'compatibility.mbti.ISFJ-ISFP.dynamic': "Ambos silenciosos, cuidadosos, orientados al presente. El ISFJ sostiene lo práctico; el ISFP sostiene lo estético.",
  'compatibility.mbti.ISFJ-ISFP.friction': "El ISFJ quiere implicación; el ISFP quiere soledad. Ambos pueden retirarse en silencio.",
  'compatibility.mbti.ISFJ-ISFP.together': "Una pareja suave, íntima — fuerte en cuidado, débil en iniciativa.",
  'compatibility.mbti.ISFJ-ISFP.practice': "Ambos tienen que sacar a flote necesidades antes de que se acumule resentimiento.",

  'compatibility.mbti.ISFJ-ISTJ.dynamic': "Dos SJ — deber, familia, fiabilidad y roles son compartidos. La casa funciona eficientemente.",
  'compatibility.mbti.ISFJ-ISTJ.friction': "Ambos prefieren la supresión a la confrontación. Ambos dejan que el resentimiento se cocine.",
  'compatibility.mbti.ISFJ-ISTJ.together': "Una pareja fiable, tradicional — fuerte en compromiso, débil en vocabulario emocional.",
  'compatibility.mbti.ISFJ-ISTJ.practice': "Ambos tienen que sacar a flote la cosa difícil antes de que se pudra.",

  'compatibility.mbti.ISFJ-ISTP.dynamic': "El ISFJ aporta cuidado; el ISTP aporta competencia tranquila. Los roles se dividen naturalmente.",
  'compatibility.mbti.ISFJ-ISTP.friction': "El ISFJ quiere implicación; el ISTP quiere soledad. El ISFJ persigue; el ISTP se retira.",
  'compatibility.mbti.ISFJ-ISTP.together': "Una pareja silenciosa, capaz — fuerte en roles, débil en vocabulario emocional.",
  'compatibility.mbti.ISFJ-ISTP.practice': "El ISTP tiene que verbalizar. El ISFJ tiene que conceder silencio.",

  'compatibility.mbti.ISFP-ISFP.dynamic': "Dos aventureros — la autenticidad de valores y la presencia estética son compartidas. La soledad juntos es el lenguaje del amor.",
  'compatibility.mbti.ISFP-ISFP.friction': "Ambos se retiran en lugar de confrontar. Los conflictos van bajo tierra y se quedan ahí.",
  'compatibility.mbti.ISFP-ISFP.together': "Una pareja suave, estética — fuerte en presencia compartida, débil en iniciativa.",
  'compatibility.mbti.ISFP-ISFP.practice': "Ambos tienen que sacar a flote el desacuerdo en voz alta, incluso cuando se siente grosero.",

  'compatibility.mbti.ISFP-ISTJ.dynamic': "El ISTJ aporta fiabilidad; el ISFP aporta valores y estética. Complementariedad real cuando se honra.",
  'compatibility.mbti.ISFP-ISTJ.friction': "El ISTJ quiere lo probado; el ISFP necesita que los valores se sientan bien. El ISTJ pasa por encima; el ISFP se retira.",
  'compatibility.mbti.ISFP-ISTJ.together': "Una pareja silenciosa, fiable — fuerte en compromiso, débil en negociación.",
  'compatibility.mbti.ISFP-ISTJ.practice': "El ISTJ tiene que implicarse con valores. El ISFP tiene que sacar a flote el chequeo de valores en voz alta.",

  'compatibility.mbti.ISFP-ISTP.dynamic': "Dos introvertidos que usan Se — momento presente, conscientes del cuerpo, sin pelusa. Respeto mutuo por poder simplemente ser.",
  'compatibility.mbti.ISFP-ISTP.friction': "Ambos se retiran bajo estrés. Ninguno inicia el regreso.",
  'compatibility.mbti.ISFP-ISTP.together': "Una pareja silenciosa, de acción y estética — fuerte en experiencia compartida, débil en vocabulario emocional.",
  'compatibility.mbti.ISFP-ISTP.practice': "Ambos tienen que hacer pequeñas ofertas de conexión antes de que se asiente el silencio.",

  'compatibility.mbti.ISTJ-ISTJ.dynamic': "Dos logísticos — deber, fiabilidad y estándares se alinean sin traducción. La casa funciona.",
  'compatibility.mbti.ISTJ-ISTJ.friction': "Ambos creen saber el método correcto. Los desacuerdos se vuelven rígidos rápido.",
  'compatibility.mbti.ISTJ-ISTJ.together': "Una pareja tradicional, fiable — fuerte en seguimiento, débil en flexibilidad.",
  'compatibility.mbti.ISTJ-ISTJ.practice': "Ambos tienen que implicarse con nueva evidencia por sus méritos.",

  'compatibility.mbti.ISTJ-ISTP.dynamic': "Ambos silenciosos, capaces, sin pelusa. Respeto mutuo por la competencia.",
  'compatibility.mbti.ISTJ-ISTP.friction': "El ISTJ quiere el plan probado; el ISTP quiere libertad táctica. El ISTJ empuja; el ISTP se desconecta.",
  'compatibility.mbti.ISTJ-ISTP.together': "Una pareja silenciosa, capaz — fuerte en acción, débil en vocabulario emocional.",
  'compatibility.mbti.ISTJ-ISTP.practice': "El ISTJ tiene que conceder autonomía. El ISTP tiene que sacar a flote el desacuerdo antes del silencio.",

  'compatibility.mbti.ISTP-ISTP.dynamic': "Dos virtuosos — la competencia, autonomía y presencia silenciosa se alinean. La soledad lado a lado es el lenguaje del amor.",
  'compatibility.mbti.ISTP-ISTP.friction': "Ambos se retiran en lugar de confrontar. Ninguno inicia la reparación verbal.",
  'compatibility.mbti.ISTP-ISTP.together': "Una pareja silenciosa, capaz, sin pelusa — fuerte en actividad compartida, débil en articulación emocional.",
  'compatibility.mbti.ISTP-ISTP.practice': "Ambos tienen que verbalizar antes de retirarse. La relación no se auto-repara.",
}
