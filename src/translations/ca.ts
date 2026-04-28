import { translations as en } from './en'
import { type TranslationKey } from './translation.types'

// Spread EN as a fallback so untranslated keys (notably long-form
// compatibility content) display in English until explicitly translated,
// rather than failing the type check.
export const translations: Record<TranslationKey, string> = {
  ...en,
  // Meta
  'meta.title': 'Enatipos — Descobreix el teu tipus de l\'Eneagrama',
  'meta.description':
    '9 patrons. 1 mapa. Un test d\'autoconeixement basat en l\'eneagrama.',

  // Language names
  'language.en': 'Anglès',
  'language.es': 'Espanyol',
  'language.pt': 'Portuguès',
  'language.ca': 'Català',
  'language.switcher.aria-label': 'Canviar idioma (actual: ${current})',

  // Intro
  'intro.eyebrow': 'Test d\'autoconeixement',
  'intro.title': 'Eneagrama',
  'intro.subtitle': '9 patrons. 1 mapa.',
  'intro.body.1.before':
    'L\'eneagrama descriu 9 estructures de personalitat a partir de la ',
  'intro.body.1.em': 'motivació inconscient',
  'intro.body.1.after':
    ' que et mou, no de la teva conducta visible. Dues persones del mateix tipus poden veure\'s molt diferents per fora i vibrar igual per dins.',
  'intro.body.2.before': 'Són 30 preguntes. Respon des del que ',
  'intro.body.2.em': 'sents',
  'intro.body.2.after':
    ' que et mou, no des de qui voldries ser. Si dubtes, tria l\'opció que t\'incomodi una mica — allà sol ser-hi la veritat.',
  'intro.start.button': 'Començar',
  'intro.start.aria-label': 'Començar el test de l\'eneagrama',
  'intro.duration': '≈ 5 minuts',

  // Quiz chrome
  'quiz.back.button': '← Enrere',
  'quiz.back.aria-label': 'Tornar a la pregunta anterior',
  'quiz.progress.aria-label': 'Progrés del test',
  'quiz.option.aria-label': 'Opció ${letter}: ${text}',
  'quiz.diagram.aria-label': 'Diagrama de l\'eneagrama amb els nou tipus',

  // Questions
  'quiz.question.1.prompt':
    'El primer que fas en entrar en un espai nou és…',
  'quiz.question.1.option.1':
    'Notar el que es podria millorar o està fora de lloc.',
  'quiz.question.1.option.2':
    'Fixar-te en com està la gent, qui necessita alguna cosa.',
  'quiz.question.1.option.3':
    'Escanejar oportunitats per connectar o destacar.',
  'quiz.question.1.option.4':
    'Sentir si l\'ambient ressona amb tu o t\'incomoda.',

  'quiz.question.2.prompt': 'En una situació incerta, sols…',
  'quiz.question.2.option.1':
    'Retirar-te a observar i entendre abans d\'implicar-te.',
  'quiz.question.2.option.2': 'Anticipar què pot sortir malament i preparar-te.',
  'quiz.question.2.option.3': 'Buscar el costat divertit o una sortida nova.',
  'quiz.question.2.option.4': 'Prendre el control ràpidament sense titubejar.',

  'quiz.question.3.prompt': 'El que més et desgasta al dia a dia és…',
  'quiz.question.3.option.1': 'El conflicte i la tensió a l\'ambient.',
  'quiz.question.3.option.2':
    'Que les coses estiguin mal fetes o siguin injustes.',
  'quiz.question.3.option.3': 'Sentir que ningú no et veu ni et valora.',
  'quiz.question.3.option.4':
    'No estar avançant o destacant com voldries.',

  'quiz.question.4.prompt': 'La teva por més profunda podria ser…',
  'quiz.question.4.option.1': 'No tenir identitat ni significat propi.',
  'quiz.question.4.option.2':
    'Sentir-te buit, inútil o ser envaït pels altres.',
  'quiz.question.4.option.3': 'Quedar-te sense suport, sense seguretat, perdut.',
  'quiz.question.4.option.4':
    'Quedar atrapat en el dolor, la limitació o l\'avorriment.',

  'quiz.question.5.prompt': 'Quan una cosa et molesta molt, tu…',
  'quiz.question.5.option.1': 'La confrontes de cara sense filtre.',
  'quiz.question.5.option.2': 'La minimitzes per mantenir la pau.',
  'quiz.question.5.option.3': 'La contens amb disciplina i autocontrol.',
  'quiz.question.5.option.4': 'L\'acumules fins que explota emocionalment.',

  'quiz.question.6.prompt': 'La teva manera més natural de demostrar afecte és…',
  'quiz.question.6.option.1':
    'Aconseguint coses que impressionin o cuidin l\'altre.',
  'quiz.question.6.option.2':
    'Compartint el teu món interior únic i profund.',
  'quiz.question.6.option.3':
    'Donant temps de qualitat, atenció, espai mental.',
  'quiz.question.6.option.4':
    'Sent lleial, estable, present incondicionalment.',

  'quiz.question.7.prompt': 'Quan ningú no et mira, sols ser…',
  'quiz.question.7.option.1':
    'Molt inquiet, saltant entre idees i plans.',
  'quiz.question.7.option.2': 'Igual de ferm i directe que en públic.',
  'quiz.question.7.option.3': 'Més tranquil i absent del que sembles.',
  'quiz.question.7.option.4': 'Encara més autocrític amb tu mateix.',

  'quiz.question.8.prompt': 'La teva relació amb les teves emocions és que…',
  'quiz.question.8.option.1': 'Les sents per tu i també pels altres.',
  'quiz.question.8.option.2':
    'Les gestiones perquè no bloquegin els teus objectius.',
  'quiz.question.8.option.3': 'Les explores profundament — viuen amb tu.',
  'quiz.question.8.option.4':
    'Les observes des d\'una certa distància racional.',

  'quiz.question.9.prompt': 'En un grup nou, tendeixes a…',
  'quiz.question.9.option.1': 'Buscar qui és de confiança i coherent.',
  'quiz.question.9.option.2': 'Alegrar l\'ambient amb la teva energia.',
  'quiz.question.9.option.3': 'Imposar-te naturalment, parlar amb força.',
  'quiz.question.9.option.4':
    'Fondre\'t sense destacar, seguir el corrent.',

  'quiz.question.10.prompt': 'El que més valores en els altres és…',
  'quiz.question.10.option.1':
    'La seva integritat, coherència entre el que diuen i fan.',
  'quiz.question.10.option.2':
    'La seva escalfor i disposició a cuidar.',
  'quiz.question.10.option.3':
    'La seva ambició i capacitat d\'assolir coses.',
  'quiz.question.10.option.4': 'La seva profunditat i autenticitat.',

  'quiz.question.11.prompt': 'La teva manera de prendre decisions és…',
  'quiz.question.11.option.1':
    'Analitzar tota la informació abans de comprometre\'t.',
  'quiz.question.11.option.2': 'Consultar amb persones de confiança.',
  'quiz.question.11.option.3':
    'Explorar múltiples opcions i mantenir-les obertes.',
  'quiz.question.11.option.4':
    'Decidir ràpid des de l\'instint, sense dubtar.',

  'quiz.question.12.prompt': 'El tipus de feina que més t\'omple és…',
  'quiz.question.12.option.1':
    'Una de tranquil·la, sense conflicte, amb bon ambient.',
  'quiz.question.12.option.2':
    'Una amb propòsit clar i estàndards alts.',
  'quiz.question.12.option.3':
    'Una on puguis cuidar i connectar amb persones.',
  'quiz.question.12.option.4':
    'Una on puguis destacar i créixer professionalment.',

  'quiz.question.13.prompt': 'El que més et molesta en els altres és…',
  'quiz.question.13.option.1':
    'Que siguin superficials o emocionalment maldestres.',
  'quiz.question.13.option.2':
    'Que siguin invasius, exigents o et drenin l\'energia.',
  'quiz.question.13.option.3': 'Que siguin deslleials o poc de fiar.',
  'quiz.question.13.option.4':
    'Que siguin esgarriacries o emocionalment pesats.',

  'quiz.question.14.prompt': 'La teva relació amb els diners és que…',
  'quiz.question.14.option.1':
    'Són una font de llibertat, autonomia i poder.',
  'quiz.question.14.option.2': 'No els hi dones massa atenció activa.',
  'quiz.question.14.option.3':
    'Els administres amb disciplina i responsabilitat.',
  'quiz.question.14.option.4':
    'També els uses per cuidar els que estimes.',

  'quiz.question.15.prompt': 'Quan una cosa et fa mal emocionalment, tu…',
  'quiz.question.15.option.1':
    'Et distreus amb feina, productivitat i assoliments.',
  'quiz.question.15.option.2':
    'T\'endinses dins del sentiment i l\'habites.',
  'quiz.question.15.option.3': 'T\'aïlles per processar-ho en solitud.',
  'quiz.question.15.option.4':
    'Busques orientació en algú de confiança.',

  'quiz.question.16.prompt': 'Al planejar el futur, tendeixes a…',
  'quiz.question.16.option.1':
    'Imaginar moltes possibilitats i mantenir opcions.',
  'quiz.question.16.option.2':
    'Prendre el control i marcar el rumb amb força.',
  'quiz.question.16.option.3': 'Fluir i veure què es presenta sense forçar.',
  'quiz.question.16.option.4':
    'Planejar-ho amb detall, criteri i principis.',

  'quiz.question.17.prompt':
    'El teu pitjor defecte, segons els altres, podria ser…',
  'quiz.question.17.option.1':
    'Ser tafaner o manipulador afectivament.',
  'quiz.question.17.option.2': 'Ser vanitós, competitiu o impacient.',
  'quiz.question.17.option.3':
    'Ser dramàtic o autocondescendent emocionalment.',
  'quiz.question.17.option.4': 'Ser distant, fred o desconnectat.',

  'quiz.question.18.prompt':
    'En el fons, més que cap altra cosa, vols…',
  'quiz.question.18.option.1':
    'Sentir-te segur, amb suport, amb un lloc estable.',
  'quiz.question.18.option.2':
    'Ser lliure, estar content, viure sense limitacions.',
  'quiz.question.18.option.3':
    'Ser fort, autònom, no dependre de ningú.',
  'quiz.question.18.option.4': 'Estar en pau amb tu mateix i amb tot.',

  'quiz.question.19.prompt':
    'Davant d\'una decisió difícil, et guies per…',
  'quiz.question.19.option.1':
    'El que sents que és correcte segons els teus principis.',
  'quiz.question.19.option.2':
    'Com afectarà les persones que estimes.',
  'quiz.question.19.option.3':
    'El que t\'apropi més a l\'èxit que busques.',
  'quiz.question.19.option.4':
    'El que sentis més autèntic i fidel a tu.',

  'quiz.question.20.prompt':
    'Quan coneixes algú nou, notes primer…',
  'quiz.question.20.option.1': 'Si és intel·ligent i respecta el teu espai.',
  'quiz.question.20.option.2': 'Si és de fiar i coherent.',
  'quiz.question.20.option.3':
    'Si és divertit, interessant, amb energia.',
  'quiz.question.20.option.4': 'Si és fort, directe, diu la veritat.',

  'quiz.question.21.prompt': 'La teva manera ideal de descansar és…',
  'quiz.question.21.option.1':
    'No fer res, simplement ser, desconnectar.',
  'quiz.question.21.option.2':
    'Organitzar el teu espai, les teves rutines, posar ordre.',
  'quiz.question.21.option.3':
    'Estar amb la gent que estimes, connectar.',
  'quiz.question.21.option.4':
    'Avançar en algun projecte personal que t\'importa.',

  'quiz.question.22.prompt':
    'Quan algú et critica, la teva primera reacció és…',
  'quiz.question.22.option.1':
    'Sentir-ho com un atac a la teva essència mateixa.',
  'quiz.question.22.option.2': 'Aïllar-te per processar-ho en privat.',
  'quiz.question.22.option.3':
    'Dubtar de tu mateix i consultar amb altres.',
  'quiz.question.22.option.4':
    'Minimitzar-ho, reemmarcar-ho, seguir endavant.',

  'quiz.question.23.prompt': 'El que et fa sentir més viu és…',
  'quiz.question.23.option.1':
    'Sentir el teu propi poder, la teva força plena.',
  'quiz.question.23.option.2': 'Un moment d\'harmonia total amb tot.',
  'quiz.question.23.option.3':
    'Veure una cosa ben feta, amb qualitat i cura.',
  'quiz.question.23.option.4':
    'Sentir que algú et necessita de debò.',

  'quiz.question.24.prompt': 'En el teu temps lliure, prefereixes…',
  'quiz.question.24.option.1':
    'Avançar en projectes personals, productivitat.',
  'quiz.question.24.option.2':
    'Art, música, reflexió profunda, solitud creativa.',
  'quiz.question.24.option.3':
    'Llegir, investigar, explorar idees complexes.',
  'quiz.question.24.option.4':
    'Estar amb el teu cercle proper, gent de confiança.',

  'quiz.question.25.prompt':
    'Una cosa que els altres no saben de tu és que…',
  'quiz.question.25.option.1':
    'De vegades la teva alegria tapa un buit que sents.',
  'quiz.question.25.option.2':
    'Et sents més vulnerable del que admets.',
  'quiz.question.25.option.3':
    'Tens opinions i desitjos més forts dels que expresses.',
  'quiz.question.25.option.4':
    'Ets molt més dur amb tu que amb cap altre.',

  'quiz.question.26.prompt': 'La teva manera de comunicar tendeix a ser…',
  'quiz.question.26.option.1': 'Càlida, propera, empàtica.',
  'quiz.question.26.option.2': 'Clara, motivadora, eficient.',
  'quiz.question.26.option.3': 'Metafòrica, emocional, amb matisos.',
  'quiz.question.26.option.4': 'Analítica, precisa, més aviat reservada.',

  'quiz.question.27.prompt':
    'Quan les coses no surten com volies, tu…',
  'quiz.question.27.option.1':
    'Consultes altres abans de decidir què fer.',
  'quiz.question.27.option.2':
    'Canvies ràpid a un pla B més atractiu.',
  'quiz.question.27.option.3':
    'Empenys amb més força i determinació.',
  'quiz.question.27.option.4':
    'T\'adaptes al nou escenari sense gaire drama.',

  'quiz.question.28.prompt': 'Un lema inconscient teu podria ser…',
  'quiz.question.28.option.1':
    '"Hi ha una manera correcta de fer les coses."',
  'quiz.question.28.option.2':
    '"Valc quan ajudo i cuido els altres."',
  'quiz.question.28.option.3':
    '"Valc pel que aconsegueixo i pel que es veu."',
  'quiz.question.28.option.4':
    '"Sóc especial, diferent de la resta."',

  'quiz.question.29.prompt':
    'Una de les teves lluites internes més grans és…',
  'quiz.question.29.option.1':
    'Sortir del teu cap i habitar el cos, el món.',
  'quiz.question.29.option.2':
    'Confiar sense dubtar, sense anticipar el perill.',
  'quiz.question.29.option.3':
    'Quedar-te amb el difícil sense fugir cap a una altra cosa.',
  'quiz.question.29.option.4':
    'Mostrar vulnerabilitat sense sentir-te feble.',

  'quiz.question.30.prompt':
    'El que et faria sentir més ple a la vida és…',
  'quiz.question.30.option.1':
    'Pau interior real i connexió amb tot el que t\'envolta.',
  'quiz.question.30.option.2':
    'Viure plenament segons els teus valors més alts.',
  'quiz.question.30.option.3':
    'Donar amor sense perdre\'t a tu mateix en això.',
  'quiz.question.30.option.4':
    'Èxit real, no només aparent ni extern.',

  // Results chrome
  'results.top-type.eyebrow': 'El teu tipus principal',
  'results.wing.line': 'amb ala ${wing} — ${essence}',
  'results.section.essence': 'Essència',
  'results.section.motivation': 'El que et mou',
  'results.section.shadow': 'La teva ombra',
  'results.section.gift': 'El teu do',
  'results.section.key-work': 'Treball clau',
  'results.wing.eyebrow': 'L\'ala ${wing}',
  'results.wing.description':
    'La teva ala és el tipus adjacent que et matisa. El teu ${top} viu amb els colors del ${wing} — ${essence}. Un ${top}w${wing} s\'expressa diferent d\'un ${top}w${other}.',
  'results.top3.eyebrow': 'Els teus 3 tipus dominants',
  'results.all-types.summary': 'Veure els 9 tipus',
  'results.type-bar.aria-label': 'Puntuació del tipus ${type}',
  'results.restart.button': 'Tornar a fer el test',
  'results.home.button': 'Tornar a l\'inici',
  'results.home.aria-label': 'Tornar a la pàgina d\'inici',
  'results.restart.aria-label': 'Tornar a fer el test',
  'results.disclaimer.line-1':
    'Aquest test és una eina d\'exploració, no un diagnòstic.',
  'results.disclaimer.line-2':
    'El teu tipus real es confirma observant la teva motivació al llarg del temps.',

  // Enneatype 1
  'enneatype.1.name': 'El Reformador',
  'enneatype.1.subtitle': 'El Perfeccionista',
  'enneatype.1.essence': 'Integritat, disciplina, propòsit',
  'enneatype.1.motivation':
    'Viure correctament, millorar el que veus, ser bo i útil. La teva brúixola interna és forta i exigent.',
  'enneatype.1.shadow':
    'Crítica constant (a tu i als altres), rigidesa, ressentiment quan el món no compleix els teus estàndards. Et costa deixar anar.',
  'enneatype.1.gift':
    'Tens una claredat moral i una capacitat de construir amb estàndards alts que pocs tenen. Quan integres el teu propi error, et tornes savi.',
  'enneatype.1.key-work':
    'Aprendre a descansar. Permetre l\'imperfecte en tu i en els altres.',

  // Enneatype 2
  'enneatype.2.name': 'L\'Ajudador',
  'enneatype.2.subtitle': 'El Donant',
  'enneatype.2.essence': 'Empatia, escalfor, connexió',
  'enneatype.2.motivation':
    'Sentir-te estimat, necessari, irreemplaçable per als qui t\'envolten. Sintonitzes amb les emocions alienes gairebé sense esforç.',
  'enneatype.2.shadow':
    'T\'oblides de les teves pròpies necessitats, dones per rebre amor, caus en manipulació subtil o en orgull de "ser el que ajuda".',
  'enneatype.2.gift':
    'La teva capacitat de cuidar i de llegir l\'altre és real i poderosa. Quan dones des de l\'abundància i no des de la carència, transformes vides.',
  'enneatype.2.key-work':
    'Preguntar-te què necessites TU, sense mirar primer l\'altre.',

  // Enneatype 3
  'enneatype.3.name': 'El Triomfador',
  'enneatype.3.subtitle': 'L\'Executor',
  'enneatype.3.essence': 'Assoliment, eficiència, imatge',
  'enneatype.3.motivation':
    'Ser valuós, admirat, reeixit. Adaptes la teva forma a l\'entorn per destacar. Vius orientat a resultats.',
  'enneatype.3.shadow':
    'Confons qui ets amb el que aconsegueixes. Et poses màscares. Evites sentir perquè sentir et frena. Por profunda al fracàs públic.',
  'enneatype.3.gift':
    'Capacitat d\'adaptació, d\'execució i d\'inspirar. Quan et connectes amb la teva veritat interior, el teu èxit deixa de ser buit.',
  'enneatype.3.key-work':
    'Sentir el que hi ha sota la imatge. Parar sense sentir culpa.',

  // Enneatype 4
  'enneatype.4.name': 'L\'Individualista',
  'enneatype.4.subtitle': 'El Romàntic',
  'enneatype.4.essence': 'Autenticitat, profunditat, bellesa',
  'enneatype.4.motivation':
    'Trobar i expressar la teva identitat única. Sents intensament i busques significat en tot. T\'identifiques amb el que et falta.',
  'enneatype.4.shadow':
    'Enveja (del que els altres tenen i tu no), melangia com a identitat, dramatització, autocondescendència emocional, sensació crònica d\'estar "incomplet".',
  'enneatype.4.gift':
    'Profunditat emocional, creativitat, capacitat d\'estar amb el dolor propi i aliè sense fugir.',
  'enneatype.4.key-work':
    'Veure el que SÍ tens. Sortir del jo-especial i connectar-te amb l\'ordinari.',

  // Enneatype 5
  'enneatype.5.name': 'L\'Investigador',
  'enneatype.5.subtitle': 'L\'Observador',
  'enneatype.5.essence': 'Coneixement, perspicàcia, autonomia',
  'enneatype.5.motivation':
    'Entendre com funcionen les coses. Conservar la teva energia, el teu espai i els teus recursos. Prefereixes observar abans de participar.',
  'enneatype.5.shadow':
    'Aïllament, desconnexió emocional, acumulació d\'informació sense acció, sensació de ser un estrany al món.',
  'enneatype.5.gift':
    'Claredat mental, capacitat de veure patrons que els altres no veuen, mestria tècnica.',
  'enneatype.5.key-work':
    'Baixar del pensament al cos. Actuar abans de sentir que tens "prou" informació.',

  // Enneatype 6
  'enneatype.6.name': 'El Lleial',
  'enneatype.6.subtitle': 'El Guardià',
  'enneatype.6.essence': 'Lleialtat, coratge, confiança',
  'enneatype.6.motivation':
    'Sentir-te segur, amb suport, amb un sistema o grup al qual pertànyer. Anticipes perills i escenaris.',
  'enneatype.6.shadow':
    'Ansietat crònica, desconfiança, dubtes constants, projecció de pors, oscil·lació entre obediència i rebel·lia.',
  'enneatype.6.gift':
    'Lleialtat real, coratge sota pressió, capacitat de preveure problemes i protegir els teus.',
  'enneatype.6.key-work':
    'Confiar en la teva pròpia autoritat interna. Distingir por real de por imaginada.',

  // Enneatype 7
  'enneatype.7.name': 'L\'Entusiasta',
  'enneatype.7.subtitle': 'L\'Aventurer',
  'enneatype.7.essence': 'Alegria, visió, varietat',
  'enneatype.7.motivation':
    'Mantenir-te estimulat, en moviment, amb opcions obertes. Evitar el dolor i l\'avorriment. Veus possibilitats en tot.',
  'enneatype.7.shadow':
    'Escapisme, dispersió, superficialitat, dificultat per comprometre\'t, tapar el buit amb experiències noves.',
  'enneatype.7.gift':
    'Visió optimista real, creativitat connectiva, capacitat de reemmarcar el difícil i moure els altres.',
  'enneatype.7.key-work':
    'Quedar-te amb el difícil sense fugir. Aprofundir en lloc de multiplicar.',

  // Enneatype 8
  'enneatype.8.name': 'El Desafiador',
  'enneatype.8.subtitle': 'El Protector',
  'enneatype.8.essence': 'Força, autonomia, justícia',
  'enneatype.8.motivation':
    'Ser fort, autònom, no estar sota el control de ningú. Protegeixes els teus. Dius la veritat encara que incomodi.',
  'enneatype.8.shadow':
    'Intimidació, excés (feina, menjar, confrontació), negar la teva pròpia vulnerabilitat, veure el món com a camp de batalla.',
  'enneatype.8.gift':
    'Força real, lideratge, capacitat de protegir els febles i trencar estructures injustes.',
  'enneatype.8.key-work':
    'Mostrar la teva tendresa. Acceptar que ser vulnerable no et treu força.',

  // Enneatype 9
  'enneatype.9.name': 'El Pacificador',
  'enneatype.9.subtitle': 'El Mediador',
  'enneatype.9.essence': 'Pau, acceptació, presència',
  'enneatype.9.motivation':
    'Mantenir l\'harmonia interior i amb els altres. Evitar el conflicte. Fondre\'t amb el que t\'envolta.',
  'enneatype.9.shadow':
    'Autoabandonament, passivitat, ajornament, oblidar-te del teu propi desig, estar present-absent. Ràbia reprimida que explota rarament.',
  'enneatype.9.gift':
    'Capacitat de veure tots els costats, de calmar tensions, de ser present amb el que hi ha sense forçar.',
  'enneatype.9.key-work':
    'Despertar el teu propi desig. Prendre posició. Existir visiblement.',

  'enneatype.1.growth':
    'En creixement, t\'afluixes. El joc i la gana per la vida del tipus 7 es fan disponibles — deixes de vigilar-te i comences a gaudir d\'allò que has construït.',
  'enneatype.1.stress':
    'Sota pressió, entres al territori del tipus 4 — malenconia, retirada, la sensació silenciosa que ningú no veu com t\'has esforçat.',
  'enneatype.2.growth':
    'En creixement, trobes el teu propi interior — l\'autoconeixement del tipus 4. Deixes de llegir la sala primer i comences a notar el que sents.',
  'enneatype.2.stress':
    'Sota pressió, et gires cap al tipus 8 — directe, confrontatiu, castigant qui no t\'ha tornat el que vas donar.',
  'enneatype.3.growth':
    'En creixement, prens la lleialtat i cooperació del tipus 6 — deixes de competir amb la gent que ja t\'estima.',
  'enneatype.3.stress':
    'Sota pressió, t\'apagues com el tipus 9 — desconnectat, tot sembla igual, res no se sent prou urgent.',
  'enneatype.4.growth':
    'En creixement, guanyes la fermesa i els principis del tipus 1 — fas les coses sense necessitar que se sentin significatives primer.',
  'enneatype.4.stress':
    'Sota pressió, vas cap al tipus 2 — massa implicat en els altres, fent servir l\'ajuda per evitar el buit del teu centre.',
  'enneatype.5.growth':
    'En creixement, accedeixes a la capacitat del tipus 8 d\'actuar des del cos — deixes d\'observar i comences a implicar-te amb pes.',
  'enneatype.5.stress':
    'Sota pressió, et dispersses com el tipus 7 — saltant entre idees, evitant allò que importa quedant-te en el següent.',
  'enneatype.6.growth':
    'En creixement, t\'instal·les en la confiança del tipus 9 — pots descansar sense escanejar amenaces. Les coses estan bé de debò.',
  'enneatype.6.stress':
    'Sota pressió, recorres al tipus 3 — actuant competència, empenyent més fort, esperant que l\'èxit calmi l\'ansietat.',
  'enneatype.7.growth':
    'En creixement, prens la profunditat del tipus 5 — pots quedar-te amb una sola cosa el temps suficient per entendre-la.',
  'enneatype.7.stress':
    'Sota pressió, vas cap al tipus 1 — crític, ressentit, manant a tothom com si això parés el malestar.',
  'enneatype.8.growth':
    'En creixement, t\'obres a la suavitat del tipus 2 — deixes que la gent t\'importi sense necessitar que siguin útils.',
  'enneatype.8.stress':
    'Sota pressió, et retires al tipus 5 — planificant en secret, tallant amb la gent, sense confiar en ningú.',
  'enneatype.9.growth':
    'En creixement, trobes el moviment del tipus 3 — deixes d\'ajornar i et presentes pel que vols.',
  'enneatype.9.stress':
    'Sota pressió, col·lapses cap al tipus 6 — dubte, paràlisi, revisant totes les possibilitats sense comprometre\'t amb cap.',

  'enneatype.center.head': 'Ment',
  'enneatype.center.heart': 'Cor',
  'enneatype.center.gut': 'Instint',
  'results.tritype.eyebrow': 'El teu tritipus',
  'results.tritype.description':
    'El tipus dominant en cadascun dels tres centres — ment, cor, instint. Modela com el teu tipus principal s\'expressa al dia a dia.',
  'results.arrows.eyebrow': 'Línies de creixement i estrès',
  'results.arrows.growth.label': 'En creixement →',
  'results.arrows.stress.label': 'Sota pressió →',
  'results.triad.eyebrow': 'Els teus tres centres',
  'results.triad.description':
    'L\'enneagrama llegeix la personalitat a través de tres intel·ligències — instint, cor, ment. El teu perfil es recolza en cadascuna en proporcions diferents.',
  'results.triad.aria-label':
    'Instint ${gut}%, cor ${heart}%, ment ${head}%.',

  // Hub
  'hub.title': 'Dues portes endins.',
  'hub.subtitle': 'Una mirada a qui ja ets.',
  'hub.body':
    'Dos mapes complementaris. L\'Eneagrama revela la motivació inconscient que et mou. Jung / MBTI mostra com penses, decideixes i actues. Comença per qualsevol — o recorre tots dos.',
  'hub.card.enneagram.eyebrow': '9 patrons · ≈ 5 min',
  'hub.card.enneagram.title': 'Eneagrama',
  'hub.card.enneagram.subtitle': 'Per què et mous.',
  'hub.card.enneagram.pitch':
    'Nou estructures de personalitat basades en la motivació inconscient que et mou — no en la teva conducta visible.',
  'hub.card.enneagram.cta': 'Començar →',
  'hub.card.enneagram.aria-label': 'Fer el test de l\'eneagrama',
  'hub.card.mbti.eyebrow': '16 tipus · ≈ 4 min',
  'hub.card.mbti.title': 'Jung / MBTI',
  'hub.card.mbti.subtitle': 'Com penses.',
  'hub.card.mbti.pitch':
    'Quatre dimensions de la cognició — energia, percepció, decisió, estil de vida. Setze formes d\'estar al món.',
  'hub.card.mbti.cta': 'Començar →',
  'hub.card.mbti.aria-label': 'Fer el test Jung / MBTI',
  'hub.wiki.aria-label': 'Explorar la wiki dels tipus',
  'hub.wiki.eyebrow': 'O explora la wiki',
  'hub.wiki.enneagram': '9 tipus de l\'Eneagrama',
  'hub.wiki.mbti': '16 tipus Jung / MBTI',
  'hub.footnote':
    'Cada test és un mirall, no una gàbia. Pren-lo com a mapa, no com a veredicte.',

  // MBTI intro
  'mbti.intro.eyebrow': 'Mapa cognitiu',
  'mbti.intro.title': 'Jung / MBTI',
  'mbti.intro.subtitle': '4 dimensions. 16 tipus.',
  'mbti.intro.body.1.before':
    'Carl Jung va proposar que la ment funciona a través d\'unes poques ',
  'mbti.intro.body.1.em': 'funcions cognitives',
  'mbti.intro.body.1.after':
    ' fonamentals. L\'MBTI transforma aquestes funcions en quatre dimensions: on viu la teva energia, com percebs, com decideixes i com organitzes la vida.',
  'mbti.intro.body.2.before': 'Són 24 preguntes. Respon de forma ',
  'mbti.intro.body.2.em': 'espontània',
  'mbti.intro.body.2.after':
    ', des de com ets normalment — no des de la versió que representes a la feina o a les xarxes.',
  'mbti.intro.start.button': 'Començar',
  'mbti.intro.start.aria-label': 'Començar el test MBTI',
  'mbti.intro.duration': '≈ 4 minuts',

  // MBTI quiz chrome
  'mbti.quiz.back.button': '← Enrere',
  'mbti.quiz.back.aria-label': 'Tornar a la pregunta anterior',
  'mbti.quiz.progress.aria-label': 'Progrés del test',
  'mbti.quiz.option.aria-label': 'Opció ${letter}: ${text}',
  'mbti.quiz.question.counter': 'Pregunta ${current} / ${total}',

  // MBTI questions — English placeholder, translate later
  'mbti.quiz.question.1.prompt': 'On a long weekend, you recharge by…',
  'mbti.quiz.question.1.option.a': 'Being with people — dinners, plans, movement.',
  'mbti.quiz.question.1.option.b': 'Alone at home — silence, books, your own rhythm.',
  'mbti.quiz.question.2.prompt': 'When reading about something new, you remember better…',
  'mbti.quiz.question.2.option.a': 'The concrete examples and facts.',
  'mbti.quiz.question.2.option.b': 'The underlying idea or pattern.',
  'mbti.quiz.question.3.prompt': 'A friend vents about a problem. Your first instinct is to…',
  'mbti.quiz.question.3.option.a': 'Diagnose the situation and offer a solution.',
  'mbti.quiz.question.3.option.b': 'Sit with them in how they feel.',
  'mbti.quiz.question.4.prompt': 'Your ideal Saturday looks like…',
  'mbti.quiz.question.4.option.a': 'A clear plan from morning to evening.',
  'mbti.quiz.question.4.option.b': 'Keeping it open and seeing what happens.',
  'mbti.quiz.question.5.prompt': 'At a party of mostly strangers, after two hours you are…',
  'mbti.quiz.question.5.option.a': 'Lit up — you want more of it.',
  'mbti.quiz.question.5.option.b': 'Ready to leave or find one calm conversation.',
  'mbti.quiz.question.6.prompt': 'You trust someone more when they…',
  'mbti.quiz.question.6.option.a': 'Speak from real, lived experience.',
  'mbti.quiz.question.6.option.b': 'See connections others miss.',
  'mbti.quiz.question.7.prompt': 'When giving feedback on someone\'s work, you lead with…',
  'mbti.quiz.question.7.option.a': 'What\'s objectively wrong or could be better.',
  'mbti.quiz.question.7.option.b': 'What went right and how they might feel.',
  'mbti.quiz.question.8.prompt': 'You feel uneasy when…',
  'mbti.quiz.question.8.option.a': 'Plans are vague or keep shifting.',
  'mbti.quiz.question.8.option.b': 'Things get locked in too early.',
  'mbti.quiz.question.9.prompt': 'In meetings or group chats, you…',
  'mbti.quiz.question.9.option.a': 'Think out loud, speak quickly, feed off the room.',
  'mbti.quiz.question.9.option.b': 'Listen, process internally, speak when it\'s ready.',
  'mbti.quiz.question.10.prompt': 'When planning a trip, what pulls you more…',
  'mbti.quiz.question.10.option.a': 'The food, the places, the itinerary in detail.',
  'mbti.quiz.question.10.option.b': 'The atmosphere, the story, the feeling of it.',
  'mbti.quiz.question.11.prompt': 'A hard decision is hard because…',
  'mbti.quiz.question.11.option.a': 'You need to weigh it and find the most logical path.',
  'mbti.quiz.question.11.option.b': 'You don\'t want to hurt anyone or betray what matters.',
  'mbti.quiz.question.12.prompt': 'Your desk / room / inbox tends to be…',
  'mbti.quiz.question.12.option.a': 'Ordered — everything has a place.',
  'mbti.quiz.question.12.option.b': 'Alive — a working chaos you know your way around.',
  'mbti.quiz.question.13.prompt': 'You notice your energy drop when…',
  'mbti.quiz.question.13.option.a': 'You\'ve been alone for too long.',
  'mbti.quiz.question.13.option.b': 'You\'ve been around people for too long.',
  'mbti.quiz.question.14.prompt': 'You are more drawn to…',
  'mbti.quiz.question.14.option.a': 'What is, right now — textures, taste, the tangible.',
  'mbti.quiz.question.14.option.b': 'What could be — possibilities, meanings, the not-yet.',
  'mbti.quiz.question.15.prompt': 'When a friend makes a mistake that affects you, you…',
  'mbti.quiz.question.15.option.a': 'Tell them straight, even if it\'s uncomfortable.',
  'mbti.quiz.question.15.option.b': 'Wait, feel it, and find a way that preserves the bond.',
  'mbti.quiz.question.16.prompt': 'Deadlines make you…',
  'mbti.quiz.question.16.option.a': 'Finish early — you hate the last-minute rush.',
  'mbti.quiz.question.16.option.b': 'Work best in the final sprint — pressure focuses you.',
  'mbti.quiz.question.17.prompt': 'In a new environment you…',
  'mbti.quiz.question.17.option.a': 'Jump in and introduce yourself.',
  'mbti.quiz.question.17.option.b': 'Observe the room first, enter slowly.',
  'mbti.quiz.question.18.prompt': 'Which compliment lands deeper…',
  'mbti.quiz.question.18.option.a': '"You\'re really reliable. I can count on you."',
  'mbti.quiz.question.18.option.b': '"You see things no one else does."',
  'mbti.quiz.question.19.prompt': 'Your way of resolving conflict is…',
  'mbti.quiz.question.19.option.a': 'Lay out the facts and decide what\'s fair.',
  'mbti.quiz.question.19.option.b': 'Repair the relationship, then discuss the rest.',
  'mbti.quiz.question.20.prompt': 'Faced with an open-ended project, you…',
  'mbti.quiz.question.20.option.a': 'Break it into phases with milestones.',
  'mbti.quiz.question.20.option.b': 'Explore broadly and let the shape emerge.',
  'mbti.quiz.question.21.prompt': 'When you are really tired, you want…',
  'mbti.quiz.question.21.option.a': 'Company — dinner, a call, human warmth.',
  'mbti.quiz.question.21.option.b': 'Silence — your own room, no one asking anything.',
  'mbti.quiz.question.22.prompt': 'You get irritated by conversations that are too…',
  'mbti.quiz.question.22.option.a': 'Abstract and disconnected from real life.',
  'mbti.quiz.question.22.option.b': 'Literal and missing the bigger picture.',
  'mbti.quiz.question.23.prompt': 'In tension with someone, what wins for you is…',
  'mbti.quiz.question.23.option.a': 'Being honest, even if it costs.',
  'mbti.quiz.question.23.option.b': 'Being kind, even if something stays unsaid.',
  'mbti.quiz.question.24.prompt': 'Travel itineraries: you…',
  'mbti.quiz.question.24.option.a': 'Like them booked in advance.',
  'mbti.quiz.question.24.option.b': 'Like to decide things on the ground.',

  // MBTI axis labels
  'mbti.axis.EI.label': 'Energia',
  'mbti.axis.EI.letter.a': 'E',
  'mbti.axis.EI.letter.b': 'I',
  'mbti.axis.EI.word.a': 'Extraversió',
  'mbti.axis.EI.word.b': 'Introversió',

  'mbti.axis.SN.label': 'Percepció',
  'mbti.axis.SN.letter.a': 'S',
  'mbti.axis.SN.letter.b': 'N',
  'mbti.axis.SN.word.a': 'Sensació',
  'mbti.axis.SN.word.b': 'Intuïció',

  'mbti.axis.TF.label': 'Decisió',
  'mbti.axis.TF.letter.a': 'T',
  'mbti.axis.TF.letter.b': 'F',
  'mbti.axis.TF.word.a': 'Pensament',
  'mbti.axis.TF.word.b': 'Sentiment',

  'mbti.axis.JP.label': 'Estil de vida',
  'mbti.axis.JP.letter.a': 'J',
  'mbti.axis.JP.letter.b': 'P',
  'mbti.axis.JP.word.a': 'Judici',
  'mbti.axis.JP.word.b': 'Percepció',

  // MBTI results chrome
  'mbti.results.eyebrow': 'El teu perfil',
  'mbti.results.axes.eyebrow': 'Les teves quatre dimensions',
  'mbti.results.restart.button': 'Repetir el test',
  'mbti.results.restart.aria-label': 'Repetir el test MBTI',
  'mbti.results.home.button': 'Tornar a l\'inici',
  'mbti.results.home.aria-label': 'Tornar a la pàgina d\'inici',
  'mbti.results.disclaimer.line-1':
    'L\'MBTI és una lent, no una etiqueta. Descriu preferència, no capacitat.',
  'mbti.results.disclaimer.line-2':
    'Fes-lo servir com a mapa per veure\'t — no com a caixa per viure-hi.',

  // MBTI types — short fields translated, long descriptions kept in English for now
  'mbti.type.INTJ.name': 'L\'Arquitecte',
  'mbti.type.INTJ.subtitle': 'L\'Estratega',
  'mbti.type.INTJ.essence': 'Visió, sistemes, horitzons llargs',
  'mbti.type.INTJ.motivation':
    'To understand how things fundamentally work and to design the best possible path forward — then quietly execute it.',
  'mbti.type.INTJ.shadow':
    'Cold certainty, impatience with people who don\'t see it yet, a tendency to dismiss emotion as inefficient.',
  'mbti.type.INTJ.gift':
    'Strategic clarity that cuts through noise. You see the shape of things years before others notice.',
  'mbti.type.INTJ.key-work':
    'Staying with the human element. Not everything that resists you is wrong — sometimes it\'s alive.',

  'mbti.type.INTP.name': 'El Lògic',
  'mbti.type.INTP.subtitle': 'El Pensador',
  'mbti.type.INTP.essence': 'Curiositat, anàlisi, llibertat de pensament',
  'mbti.type.INTP.motivation':
    'To understand. To take ideas apart, find the inconsistency, rebuild them better. You live in the space of questions.',
  'mbti.type.INTP.shadow':
    'Endless analysis that never ships. Emotional distance. Condescension toward people who think less rigorously.',
  'mbti.type.INTP.gift':
    'Original thinking. You notice assumptions everyone else takes for granted, and you dismantle them.',
  'mbti.type.INTP.key-work':
    'Committing to something before you feel it\'s perfectly thought through. Letting the world test your ideas.',

  'mbti.type.ENTJ.name': 'El Comandant',
  'mbti.type.ENTJ.subtitle': 'El Constructor',
  'mbti.type.ENTJ.essence': 'Estratègia, acció, escala',
  'mbti.type.ENTJ.motivation':
    'To see a vision and build it. You combine strategic thinking with the drive to execute at scale. You lead without asking permission.',
  'mbti.type.ENTJ.shadow':
    'Over-control, steamrolling people, confusing disagreement with weakness. Treating relationships like projects.',
  'mbti.type.ENTJ.gift':
    'Rare combination of vision and execution. You turn impossible plans into institutions.',
  'mbti.type.ENTJ.key-work':
    'Slowing down to hear people. Your plan is often right — but your pace is sometimes inhuman.',

  'mbti.type.ENTP.name': 'El Debatedor',
  'mbti.type.ENTP.subtitle': 'El Visionari',
  'mbti.type.ENTP.essence': 'Idees, provocació, possibilitat',
  'mbti.type.ENTP.motivation':
    'To play with ideas, challenge received wisdom, open doors that others thought were walls. You think best in argument.',
  'mbti.type.ENTP.shadow':
    'Starting ten things and finishing none. Arguing for sport. Using your quickness as a shield against vulnerability.',
  'mbti.type.ENTP.gift':
    'Intellectual generativity. You see angles no one saw. You\'re a catalyst for people and projects.',
  'mbti.type.ENTP.key-work':
    'Finishing. Going deep enough on one thing that it actually changes something.',

  'mbti.type.INFJ.name': 'El Defensor',
  'mbti.type.INFJ.subtitle': 'El Vident',
  'mbti.type.INFJ.essence': 'Visió, profunditat, sentit',
  'mbti.type.INFJ.motivation':
    'To understand people at depth and move the world in a more humane direction. You live with one foot in what is and one foot in what could be.',
  'mbti.type.INFJ.shadow':
    'Perfectionism about people. Burning out silently. Withdrawing completely when overwhelmed and calling it "protecting yourself."',
  'mbti.type.INFJ.gift':
    'Profound intuition about people and their patterns. You see someone\'s full humanity before they show it.',
  'mbti.type.INFJ.key-work':
    'Letting yourself be known, not just knowing. You see others clearly — let them see you.',

  'mbti.type.INFP.name': 'El Mediador',
  'mbti.type.INFP.subtitle': 'El Somniador',
  'mbti.type.INFP.essence': 'Autenticitat, profunditat, vida interior',
  'mbti.type.INFP.motivation':
    'To live in alignment with your values. To protect your own inner world and the people who need protection.',
  'mbti.type.INFP.shadow':
    'Idealization that breaks into disappointment. Withdrawing into fantasy. Treating discomfort with reality as proof of your specialness.',
  'mbti.type.INFP.gift':
    'Moral imagination. You feel what others don\'t let themselves feel, and you can write / make / speak it for them.',
  'mbti.type.INFP.key-work':
    'Bringing your inner world into the outer one. The dream matters when you build it.',

  'mbti.type.ENFJ.name': 'El Protagonista',
  'mbti.type.ENFJ.subtitle': 'El Catalitzador',
  'mbti.type.ENFJ.essence': 'Lideratge de l\'humà',
  'mbti.type.ENFJ.motivation':
    'To see people\'s potential and help them reach it. You lead by lifting others. You feel the room as data.',
  'mbti.type.ENFJ.shadow':
    'Over-identifying with others. Losing your own shape. Subtle manipulation dressed as "helping". Resentment when the care isn\'t returned.',
  'mbti.type.ENFJ.gift':
    'You can move groups. You make people feel seen, and around you they become more.',
  'mbti.type.ENFJ.key-work':
    'Coming home to yourself. Your own needs are not a distraction from the mission.',

  'mbti.type.ENFP.name': 'L\'Activista',
  'mbti.type.ENFP.subtitle': 'L\'Espurna',
  'mbti.type.ENFP.essence': 'Possibilitat, calor, foc',
  'mbti.type.ENFP.motivation':
    'To follow what\'s alive. To connect with people and ideas that feel true. You light up what you touch.',
  'mbti.type.ENFP.shadow':
    'Scattering across too many passions. Burning out when the newness fades. Difficulty with the slow, grinding phases of anything real.',
  'mbti.type.ENFP.gift':
    'Rare aliveness. You bring energy into rooms and meaning into relationships.',
  'mbti.type.ENFP.key-work':
    'Staying when it gets ordinary. Depth is where the second layer of meaning lives.',

  'mbti.type.ISTJ.name': 'El Logista',
  'mbti.type.ISTJ.subtitle': 'L\'Àncora',
  'mbti.type.ISTJ.essence': 'Fiabilitat, ordre, deure',
  'mbti.type.ISTJ.motivation':
    'To do it right. To keep the systems that others depend on running. You are how things actually hold together.',
  'mbti.type.ISTJ.shadow':
    'Rigidity. Refusing new ways because the old way worked. Using "realism" to avoid imagination.',
  'mbti.type.ISTJ.gift':
    'Unglamorous excellence. You are the reason things function. People trust you for good reason.',
  'mbti.type.ISTJ.key-work':
    'Letting yourself change the recipe. Tradition is a tool, not the boss.',

  'mbti.type.ISFJ.name': 'El Protector',
  'mbti.type.ISFJ.subtitle': 'El Guardià',
  'mbti.type.ISFJ.essence': 'Cura, memòria, devoció',
  'mbti.type.ISFJ.motivation':
    'To take care of the people you love and the places you belong to. You remember what others forget.',
  'mbti.type.ISFJ.shadow':
    'Silent resentment. Over-giving and then feeling invisible. Fear of change dressed as loyalty.',
  'mbti.type.ISFJ.gift':
    'You are the quiet fabric that holds groups and families together. Without you, it shows immediately.',
  'mbti.type.ISFJ.key-work':
    'Asking for what you need, out loud. Your care counts more when it\'s a gift, not a debt.',

  'mbti.type.ESTJ.name': 'L\'Executiu',
  'mbti.type.ESTJ.subtitle': 'L\'Organitzador',
  'mbti.type.ESTJ.essence': 'Estructura, acció, estàndards',
  'mbti.type.ESTJ.motivation':
    'To get things done, properly and on time. You organize reality into things that work. You take responsibility naturally.',
  'mbti.type.ESTJ.shadow':
    'Over-controlling. Dismissing emotions as soft. Confusing your standards for universal truth.',
  'mbti.type.ESTJ.gift':
    'You make large plans actually happen. You are civic infrastructure in human form.',
  'mbti.type.ESTJ.key-work':
    'Softening with people who don\'t move at your pace. Not everyone operates like a project.',

  'mbti.type.ESFJ.name': 'El Cònsol',
  'mbti.type.ESFJ.subtitle': 'L\'Amfitrió',
  'mbti.type.ESFJ.essence': 'Calor, ordre, pertinença',
  'mbti.type.ESFJ.motivation':
    'To create spaces where people feel welcome and things run smoothly. You tend to the fabric of a group.',
  'mbti.type.ESFJ.shadow':
    'Needing to be liked. Taking disagreement personally. Gossiping to manage anxiety about belonging.',
  'mbti.type.ESFJ.gift':
    'You make community where there was none. People feel held around you.',
  'mbti.type.ESFJ.key-work':
    'Tolerating being disliked for being honest. Belonging that costs the truth is the wrong kind of belonging.',

  'mbti.type.ISTP.name': 'El Virtuós',
  'mbti.type.ISTP.subtitle': 'L\'Artesà',
  'mbti.type.ISTP.essence': 'Destresa, autonomia, presència',
  'mbti.type.ISTP.motivation':
    'To understand how it works — by using it, taking it apart, doing it. You learn through your hands.',
  'mbti.type.ISTP.shadow':
    'Emotional avoidance. Going quiet and disappearing. Treating feelings as someone else\'s department.',
  'mbti.type.ISTP.gift':
    'Composed competence under pressure. In a crisis you don\'t perform — you act.',
  'mbti.type.ISTP.key-work':
    'Letting people in. Your independence is real; your need for connection is too.',

  'mbti.type.ISFP.name': 'L\'Aventurer',
  'mbti.type.ISFP.subtitle': 'L\'Artista Silenciós',
  'mbti.type.ISFP.essence': 'Estètica, presència, intensitat silenciosa',
  'mbti.type.ISFP.motivation':
    'To live in beauty and truth, your own way, without imposing or explaining. You feel deeply and show it through what you make.',
  'mbti.type.ISFP.shadow':
    'Withdrawing completely when pressured. Conflict avoidance that curdles into resentment. Under-valuing your own gifts.',
  'mbti.type.ISFP.gift':
    'Real artistic sensibility. You make the world around you more alive by how you inhabit it.',
  'mbti.type.ISFP.key-work':
    'Letting your work be seen. Your quiet isn\'t the same as your absence.',

  'mbti.type.ESTP.name': 'L\'Emprenedor',
  'mbti.type.ESTP.subtitle': 'El Realista',
  'mbti.type.ESTP.essence': 'Acció, risc, presència',
  'mbti.type.ESTP.motivation':
    'To act. To meet reality head-on and make something happen. You think in motion.',
  'mbti.type.ESTP.shadow':
    'Impulsiveness. Boredom with anything that can\'t be tried right now. Burning bridges you\'ll need later.',
  'mbti.type.ESTP.gift':
    'You get things unstuck. Where others deliberate, you move — and often you\'re right.',
  'mbti.type.ESTP.key-work':
    'Developing the long arc. Some things you want take years of unflashy work.',

  'mbti.type.ESFP.name': 'L\'Animador',
  'mbti.type.ESFP.subtitle': 'L\'Intèrpret',
  'mbti.type.ESFP.essence': 'Alegria, presència, vida',
  'mbti.type.ESFP.motivation':
    'To be fully alive in the moment and bring others with you. You find the celebration in almost anything.',
  'mbti.type.ESFP.shadow':
    'Avoiding what\'s uncomfortable by staying in motion. Letting the party cover a deeper ache. Difficulty with planning and consequences.',
  'mbti.type.ESFP.gift':
    'You generate joy. You pull people out of their heads and back into their lives.',
  'mbti.type.ESFP.key-work':
    'Staying with the hard feeling long enough to learn from it. The morning-after is a teacher too.',

  // Share
  'share.button': 'Compartir',
  'share.button.aria-label': 'Compartir el teu resultat',
  'share.preparing': 'Preparant la teva targeta…',
  'share.copied': 'Copiat al porta-retalls',
  'share.downloaded': 'Imatge desada',
  'share.failed': 'No s\'ha pogut compartir — torna-ho a provar',
  'share.wa.text':
    'He fet el test de ${quiz} a enatipos. El meu resultat: ${result}. Fes el teu →',
  'share.quiz.enneagram': 'Eneagrama',
  'share.quiz.mbti': 'Jung / MBTI',
  'share.card.footer': 'enatipos — coneix-te',

  'wiki.mbti.index.eyebrow': 'Els 16 tipus',
  'wiki.mbti.index.title': 'Jung / MBTI',
  'wiki.mbti.index.subtitle': 'Setze maneres d\'estar al món.',
  'wiki.enneagram.index.eyebrow': 'Els 9 tipus',
  'wiki.enneagram.index.title': 'Enneagrama',
  'wiki.enneagram.index.subtitle':
    'Nou estructures de motivació inconscient.',
  'wiki.detail.take-test.mbti': 'Fes el test de Jung / MBTI →',
  'wiki.detail.take-test.enneagram': 'Fes el test de l\'enneagrama →',
  'wiki.detail.back.mbti': '← Els 16 tipus',
  'wiki.detail.back.enneagram': '← Els 9 tipus',
  'wiki.detail.back-home': '← Inici',
  'wiki.nav.types.mbti': 'Veure els 16 tipus',
  'wiki.nav.types.enneagram': 'Veure els 9 tipus',
  'results.wiki.cta': 'Més sobre ${code}',
  'wiki.famous-people.eyebrow': 'Personatges notables',
  'compatibility.title': 'Compatibilitat',
  'compatibility.section.dynamic': 'Com encenen',
  'compatibility.section.friction': 'On freguen',
  'compatibility.section.together': 'Junts',
  'compatibility.section.practice': 'La feina',
  'compatibility.placeholder': 'Encara estem escrivint aquesta anàlisi. Torna aviat — o fes el test mentrestant.',
  'compatibility.metadata.description': 'Com encaixen ${aName} (${a}) i ${bName} (${b}) — sinergia, fricció i la feina conjunta.',
  'compatibility.cross-link.eyebrow': 'Compatibilitat amb altres tipus',
  'compatibility.cross-link.intro.mbti': 'Com es relaciona ${code} amb cadascun dels 16 tipus.',
  'compatibility.cross-link.intro.enneagram': 'Com es relaciona el Tipus ${type} amb cadascun dels 9 tipus.',
  'compatibility.back.mbti': '← Tornar a ${code}',
  'compatibility.back.enneagram': '← Tornar al Tipus ${type}',

  // Eneagrama: compatibilitat entre tipus — 45 parelles × 4 seccions.
  'compatibility.enneagram.1-1.dynamic': "Dos reformadors veuen el mateix esvoranc al món i senten la mateixa urgència de tancar-lo. Els estàndards s'alineen ràpid, i un projecte moral compartit dóna centre a la relació.",
  'compatibility.enneagram.1-1.friction': "Sense ningú que suavitzi l'aresta, cada imperfecció esdevé un veredicte. La crítica mútua quallarà ràpidament en menyspreu mutu.",
  'compatibility.enneagram.1-1.together': "Una societat de croats — disciplinada, productiva, justiciera. Construeixen alguna cosa que funciona; discuteixen si és prou bona.",
  'compatibility.enneagram.1-1.practice': "Deixa l'auditoria. Tots dos han d'aprendre que el fracàs de l'altre en complir un estàndard no és una traïció personal — i que tenir raó junts no és el mateix que estar a prop.",

  'compatibility.enneagram.1-2.dynamic': "L'1 aporta estructura i el 2 escalfor. El 2 humanitza la reforma de l'1; l'1 evita que la cura del 2 s'enfonsi en agradar a tothom.",
  'compatibility.enneagram.1-2.friction': "L'1 corregeix; el 2 pren la correcció com a rebuig. El 2 dóna massa; l'1 nota que el donar està lleugerament desviat i ho diu.",
  'compatibility.enneagram.1-2.together': "Una parella de mestre i cuidadora. Cohesionats quan serveixen alguna cosa més gran que ells; fràgils quan giren la lupa l'un cap a l'altre.",
  'compatibility.enneagram.1-2.practice': "L'1 ha de rebre cura sense auditar-la. El 2 ha de deixar de llegir cada preferència com un referèndum sobre el seu amor.",

  'compatibility.enneagram.1-3.dynamic': "Tots dos són competents, ambiciosos, orientats a resultats. Construeixen amb eficàcia junts — projectes, negocis, famílies — i des de fora semblen una parella imparable.",
  'compatibility.enneagram.1-3.friction': "L'1 ho vol fer bé; el 3 ho vol fer ja i que faci goig. L'1 llegeix el 3 com algú que retalla; el 3 llegeix l'1 com un fre del motor.",
  'compatibility.enneagram.1-3.together': "Triomfadors en clau diferent. Units per fora, negociant per dins entre principi i rendiment.",
  'compatibility.enneagram.1-3.practice': "L'1 ha de confiar que 'prou bo per entregar' no és fracàs moral. El 3 ha de frenar prou per adonar-se de quan la victòria va ser una drecera.",

  'compatibility.enneagram.1-4.dynamic': "La columna de l'1 i la profunditat del 4 es complementen inusualment bé. L'1 ancora el clima emocional del 4; el 4 descongela la vida interior de l'1.",
  'compatibility.enneagram.1-4.friction': "L'1 llegeix els estats del 4 com a autoindulgència. El 4 llegeix la disciplina de l'1 com a evasió emocional — i se sent sermonejat per sentir.",
  'compatibility.enneagram.1-4.together': "Una parella romàntic-clàssica. Bonica en estacions llargues i suaus, brutal en les tempestes.",
  'compatibility.enneagram.1-4.practice': "L'1 ha de deixar d'optimitzar els sentiments del 4. El 4 ha de deixar d'utilitzar l'estat d'ànim com a identitat, sobretot en conflicte.",

  'compatibility.enneagram.1-5.dynamic': "Tots dos valoren la precisió i la competència. Comparteixen una aversió al desordre i un plaer a afinar el model; la conversa és d'alt senyal.",
  'compatibility.enneagram.1-5.friction': "L'1 vol el model implementat; el 5 el vol perfeccionat. L'1 se sent sol amb el fer mentre el 5 segueix investigant.",
  'compatibility.enneagram.1-5.together': "Un think-tank en forma domèstica. Tranquil, ordenat, intel·lectualment ric — i emocionalment prim si ningú el cuida.",
  'compatibility.enneagram.1-5.practice': "L'1 ha d'alliberar el 5 de ser coexecutor. El 5 ha de participar en el món que l'1 sosté, no només analitzar-lo.",

  'compatibility.enneagram.1-6.dynamic': "Tots dos són responsables, complidors, recelosos de l'autoindulgència. Hi ha reconeixement mutu immediat: et prens les coses seriosament, jo també.",
  'compatibility.enneagram.1-6.friction': "La certesa de l'1 sobre el que és correcte topa amb el dubte crònic del 6 sobre el que és segur. L'1 comença a estirar; el 6 comença a tibar-se.",
  'compatibility.enneagram.1-6.together': "Una parella construïda sobre el deure. Fiable, lleial, a vegades sense alegria si obliden donar-se permís per a la calma.",
  'compatibility.enneagram.1-6.practice': "L'1 ha de deixar de tractar l'ansietat del 6 com un problema a resoldre. El 6 ha de deixar de buscar la certesa de l'1 com a substitut del seu propi suport.",

  'compatibility.enneagram.1-7.dynamic': "El 7 porta joc, possibilitat i elevació; l'1 porta disciplina, estructura i acabat. Ben fet, aquesta és una de les parelles més generadores del cercle.",
  'compatibility.enneagram.1-7.friction': "L'1 veu el 7 com a lleuger i irresponsable. El 7 veu l'1 com un esgarriacries que raciona l'alegria.",
  'compatibility.enneagram.1-7.together': "Oposats les fletxes de creixement dels quals es creuen — cadascú sosté el que l'altre més necessita integrar.",
  'compatibility.enneagram.1-7.practice': "L'1 ha de deixar que el plaer existeixi sense guanyar-lo. El 7 ha de quedar-se a l'habitació quan alguna cosa és dura, avorrida o inacabada.",

  'compatibility.enneagram.1-8.dynamic': "Dos tipus de voluntat forta que no s'arronsen. L'honestedat és directa; la feblesa no s'arma; la lleialtat, un cop donada, pesa.",
  'compatibility.enneagram.1-8.friction': "Tots dos reprimeixen material d'ombra similar al voltant de la ira i el control. Els conflictes escalen ràpid i rarament aterren a l'altitud correcta.",
  'compatibility.enneagram.1-8.together': "Una aliança formidable — clara, principista, i una mica dura amb la gent al seu voltant.",
  'compatibility.enneagram.1-8.practice': "L'1 ha de deixar de moralitzar la franquesa del 8. El 8 ha de deixar de llegir els estàndards de l'1 com un intent de dominació.",

  'compatibility.enneagram.1-9.dynamic': "El 9 calma el crític intern de l'1; l'1 ajuda el 9 a aparèixer a la seva pròpia vida. Mateix centre instintiu, volum diferent — es reconeixen a l'instant.",
  'compatibility.enneagram.1-9.friction': "La pressió de l'1 per millorar topa amb l'instint del 9 de mantenir la pau, i el 9 desapareix en un acord que no resol res.",
  'compatibility.enneagram.1-9.together': "Una de les parelles més suaus entre els 1. Estable, lenta, a vegades massa lenta.",
  'compatibility.enneagram.1-9.practice': "L'1 ha de deixar d'empènyer — el 9 es retira més a cada empenta. El 9 ha de prendre realment una posició, especialment la incòmoda.",

  'compatibility.enneagram.2-2.dynamic': "Dos ajudadors saben fer que una sala se senti sostinguda. La generositat flueix en ambdues direccions; els llenguatges de l'amor s'alineen sense esforç al començament.",
  'compatibility.enneagram.2-2.friction': "Cap dels dos és bo rebent. Tots dos porten en silenci el compte de qui ha donat més, i el marcador no es reinicia mai.",
  'compatibility.enneagram.2-2.together': "Una parella radiant cap enfora; cap endins, una competició silenciosa per qui és el més altruista.",
  'compatibility.enneagram.2-2.practice': "Tots dos han d'arriscar-se a demanar el que volen, en paraules clares, i acceptar la resposta no.",

  'compatibility.enneagram.2-3.dynamic': "El 3 dóna al 2 un projecte per donar suport i el 2 dóna al 3 un lloc suau on el rendiment no és exigit — quan això funciona, funciona poderosament.",
  'compatibility.enneagram.2-3.friction': "El 2 comença a sentir-se utilitzat; el 3 comença a sentir-se gestionat. La cura del 2 esdevé una petició d'atenció; el motor del 3 comença a semblar una marca que el 2 ajuda a portar.",
  'compatibility.enneagram.2-3.together': "La plantilla clàssica de la parella de poder — admirada per fora, transaccional per dins si no s'hi mira.",
  'compatibility.enneagram.2-3.practice': "El 3 ha de deixar-se estimar per qui és, no per allò que produeix — i deixar que el 2 el vegi cansat. El 2 ha de deixar de guanyar-se la relació.",

  'compatibility.enneagram.2-4.dynamic': "Tots dos viuen al centre del cor. El vocabulari emocional flueix d'ambdues bandes; profunditat, intimitat i sentit són la llengua materna.",
  'compatibility.enneagram.2-4.friction': "El 2 vol calmar el que fa mal; el 4 vol ser trobat dins del dolor, no rescatat d'ell. L'ajuda del 2 esdevé la prova per al 4 de no ser comprès.",
  'compatibility.enneagram.2-4.together': "Una parella emocionalment intensa — bonica i esgotadora en proporcions semblants.",
  'compatibility.enneagram.2-4.practice': "El 2 ha de seure amb el dolor del 4 sense intentar aixecar-lo. El 4 ha de deixar de rebutjar amor que arriba en una forma poc sofisticada.",

  'compatibility.enneagram.2-5.dynamic': "El 2 descongela el 5; el 5 dóna al 2 una presència ferma i sense drama. Cadascú rep una qualitat que l'altre no genera fàcilment sol.",
  'compatibility.enneagram.2-5.friction': "El 2 vol implicació; el 5 vol espai. El 2 llegeix la retirada del 5 com a rebuig. El 5 llegeix l'abast del 2 com a intrusió.",
  'compatibility.enneagram.2-5.together': "Un estudi de necessitats oposades que pot esdevenir profundament complementari o passar gana en silenci.",
  'compatibility.enneagram.2-5.practice': "El 2 ha de donar al 5 la seva soledat sense convertir-la en crisi. El 5 ha de sortir de la cova a temps, no només quan li convé.",

  'compatibility.enneagram.2-6.dynamic': "Tots dos són lleials, devots i orientats a les persones que estimen. La fiabilitat és alta; la relació se sent com un refugi per a tots dos.",
  'compatibility.enneagram.2-6.friction': "El dubte del 6 topa amb l'orgull del 2. El 2 sobre-tranquil·litza; el 6 segueix posant a prova. Els bucles d'ajuda ansiosa es formen ràpid.",
  'compatibility.enneagram.2-6.together': "Una llar càlida, fiable, lleugerament ansiosa. Forta en cura, lleugera en independència.",
  'compatibility.enneagram.2-6.practice': "El 2 ha de deixar d'actuar una certesa que no sent. El 6 ha de deixar d'exigir una certesa que ningú pot donar.",

  'compatibility.enneagram.2-7.dynamic': "L'energia del 7 il·lumina la vida del 2; la cura del 2 dóna als entusiasmes del 7 un port base. Els dies són brillants, els plans plens, l'agenda social vibra.",
  'compatibility.enneagram.2-7.friction': "El 2 vol ser la prioritat; el 7 vol la cosa següent. La proposta de proximitat del 2 sona al 7 com una gàbia.",
  'compatibility.enneagram.2-7.together': "Una parella expansiva, social, càlida — llarga en moviment, a vegades curta en quietud.",
  'compatibility.enneagram.2-7.practice': "El 7 ha de rebre realment l'amor del 2 en lloc de metabolitzar-lo com una opció més. El 2 ha de deixar de retenir el 7 sent indispensable.",

  'compatibility.enneagram.2-8.dynamic': "2 i 8 són socis en direcció de creixement — el 2 creix cap a la franquesa del 8, el 8 creix cap a la tendresa del 2. La polaritat ho fa elèctric.",
  'compatibility.enneagram.2-8.friction': "La franquesa del 8 fereix el 2; la pressió emocional del 2 al 8 li sona manipuladora. Poder i cura s'enreden, i algú sempre se sent en deute.",
  'compatibility.enneagram.2-8.together': "Una parella de protector i cuidadora — ferotge, lleial i ocasionalment explosiva.",
  'compatibility.enneagram.2-8.practice': "El 8 ha d'aprendre que la suavitat no és feblesa. El 2 ha de deixar d'utilitzar la cura com a moneda i simplement dir el que vol.",

  'compatibility.enneagram.2-9.dynamic': "Tots dos són acomodadors, càlids, orientats a la pau. La casa està calmada, els amics se senten benvinguts, el conflicte és rar.",
  'compatibility.enneagram.2-9.friction': "Tots dos eviten declarar el que realment necessiten. El ressentiment creix en silenci; res no surt a la llum fins que alguna cosa es trenca.",
  'compatibility.enneagram.2-9.together': "Una parella suau, generosa, sovint invisible — el tipus de relació al costat de la qual tothom es relaxa.",
  'compatibility.enneagram.2-9.practice': "Tots dos han de lluitar contra el reflex de desaparèixer en les preferències de l'altre. El desig honest — fins i tot petit i sense glamour — és l'antídot.",

  'compatibility.enneagram.3-3.dynamic': "Dos triomfadors admiren el motor de l'altre i no demanen disculpes per l'ambició. Les victòries s'acumulen; l'agenda s'omple; l'equip rendeix molt.",
  'compatibility.enneagram.3-3.friction': "Amb tots dos rendint, ningú està sent vist — la relació esdevé una altra arena per guanyar.",
  'compatibility.enneagram.3-3.together': "Una fusió més que un matrimoni. Brillant per fora, transaccional per dins si cap dels dos baixa de l'escenari.",
  'compatibility.enneagram.3-3.practice': "Almenys un dels dos ha de seure primer. La vulnerabilitat ha d'esdevenir una entrega, dins de termini, fins que esdevingui natural.",

  'compatibility.enneagram.3-4.dynamic': "El 3 admira l'autenticitat del 4; el 4 admira els resultats del 3. Cadascú representa el que l'altre secretament desitja — imatge contra essència.",
  'compatibility.enneagram.3-4.friction': "El 3 troba el 4 autoindulgent; el 4 troba el 3 buit. Cadascú se sent una acusació de la inseguretat més profunda de l'altre.",
  'compatibility.enneagram.3-4.together': "Una parella creativa potent — l'execució del 3 més la visió del 4 pot produir feina real — sostinguda per la mateixa tensió que la desgasta.",
  'compatibility.enneagram.3-4.practice': "El 3 ha de frenar i dir la veritat sobre el que realment sent. El 4 ha d'entregar la cosa sense convertir-la en un referèndum sobre la seva ànima.",

  'compatibility.enneagram.3-5.dynamic': "El 3 porta les idees del 5 al món; el 5 dóna al 3 profunditat que el motor sol no genera. Junts poden fer una feina inusualment rigorosa.",
  'compatibility.enneagram.3-5.friction': "El 3 vol visibilitat; el 5 vol privacitat. El 3 llegeix la reticència del 5 com a retenció; el 5 llegeix l'exposició del 3 com a superficial.",
  'compatibility.enneagram.3-5.together': "Una parella d'expert i operador — silenciosament poderosa, fàcil de subestimar.",
  'compatibility.enneagram.3-5.practice': "El 3 ha de valorar el procés del 5, no només el seu resultat. El 5 ha de sortir i representar la feina, no només produir-la.",

  'compatibility.enneagram.3-6.dynamic': "El 6 dóna al 3 una base de lleialtat; el 3 dóna al 6 un model d'acció confiada. Hi ha alleugeriment mutu — el 6 deixa de pronosticar desastres, el 3 deixa de necessitar convèncer la sala.",
  'compatibility.enneagram.3-6.friction': "La preocupació del 6 topa amb la imatge del 3 — el 3 comença a sentir-se 'posat nerviós.' El 6 comença a sospitar que el 3 amaga alguna cosa rere el polit.",
  'compatibility.enneagram.3-6.together': "Una parella en mode equip — funcional, lleial, a vegades ansiosa de si mateixa.",
  'compatibility.enneagram.3-6.practice': "El 3 ha de deixar de vendre la relació i simplement estar-hi. El 6 ha de deixar de posar a prova si el 3 és real, i confiar en l'evidència.",

  'compatibility.enneagram.3-7.dynamic': "Tots dos són optimistes, ràpids i al·lèrgics a quedar-se en l'estat d'ànim baix. La vida es veu bé — i sovint ho és genuïnament — durant llargs trams.",
  'compatibility.enneagram.3-7.friction': "A cap dels dos se li dóna bé parar. Quan arriba alguna cosa dolorosa, tots dos s'agafen a la distracció, i la relació perd el seu centre emocional.",
  'compatibility.enneagram.3-7.together': "Una parella brillant, ocupada, sovint envejable — forta en impuls, fràgil en la foscor.",
  'compatibility.enneagram.3-7.practice': "Tots dos han d'aprendre a quedar-se quan quedar-se incomoda. La relació s'aprofundeix exactament en els moments que volen saltar-se.",

  'compatibility.enneagram.3-8.dynamic': "Dos tipus assertius, orientats a resultats, que no s'arronsen. El poder es comparteix en lloc de disputar-se; el que construeixen, ho construeixen gran.",
  'compatibility.enneagram.3-8.friction': "Tots dos lluiten per guanyar i llegeixen la concessió com a feblesa. El 3 maneja al voltant de la ira del 8; el 8 detecta el manejar i li molesta.",
  'compatibility.enneagram.3-8.together': "Una parella d'alta octanatge — formidable al món, dependent d'honestedat crua en privat.",
  'compatibility.enneagram.3-8.practice': "El 3 ha de deixar d'actuar per al 8 i començar a ser vist per ell. El 8 ha d'utilitzar menys força; ja està rebuda.",

  'compatibility.enneagram.3-9.dynamic': "El 9 dóna al 3 un centre tranquil al qual tornar; el 3 dóna al 9 una raó per aparèixer de debò. Les seves línies de creixement es creuen — cadascú té el que l'altre més necessita.",
  'compatibility.enneagram.3-9.friction': "El 3 confon el ritme del 9 amb mandra. El 9 confon el motor del 3 amb inquietud. El 3 estira; el 9 desapareix en silenci.",
  'compatibility.enneagram.3-9.together': "Una parella complementària, sovint molt duradora — quan tots dos honren el ritme de l'altre.",
  'compatibility.enneagram.3-9.practice': "El 3 ha de deixar de confondre velocitat amb valor. El 9 ha de triar, en veu alta, abans que el 3 triï pels dos.",

  'compatibility.enneagram.4-4.dynamic': "Dos 4 es reconeixen a l'instant — vocabulari emocional, sensibilitat estètica i la suposició compartida que la profunditat és el punt.",
  'compatibility.enneagram.4-4.friction': "Tots dos competeixen, a vegades en silenci, pel paper del més ferit. L'estat d'ànim reflecteix l'estat d'ànim; els espirals s'aprofundeixen en lloc de resoldre's.",
  'compatibility.enneagram.4-4.together': "Una parella romàntica, intensa, sovint artística — radiant en climes emocionals llargs, perillosa en una tempesta sense àncora.",
  'compatibility.enneagram.4-4.practice': "Un dels dos ha de mantenir-se a terra quan l'altre està en la foscor. Torns; no caure tots dos alhora.",

  'compatibility.enneagram.4-5.dynamic': "La profunditat emocional del 4 troba la profunditat intel·lectual del 5. La soledat es comparteix sense tensió; la conversa va a llocs on altres persones no van.",
  'compatibility.enneagram.4-5.friction': "El 4 vol ser sentit; el 5 vol ser deixat en pau. El 4 llegeix la retirada del 5 com a rebuig; el 5 llegeix la intensitat del 4 com a setge.",
  'compatibility.enneagram.4-5.together': "Una parella silenciosa, cap endins, a vegades hermètica — el tipus de relació l'interior de la qual la majoria dels de fora mai no veuen.",
  'compatibility.enneagram.4-5.practice': "El 4 ha de deixar de dramatitzar per aconseguir implicació. El 5 ha d'arriscar realment la presència, no només la disponibilitat.",

  'compatibility.enneagram.4-6.dynamic': "Tots dos senten coses que la resta del món es perd. Hi ha un vincle real al voltant de la veritat emocional poc explicada.",
  'compatibility.enneagram.4-6.friction': "La intensitat del 4 activa l'ansietat del 6; la preocupació del 6 desinfla l'ànim del 4. Poden amplificar els pitjors espirals de l'altre si no van amb compte.",
  'compatibility.enneagram.4-6.together': "Una parella lleial, perceptiva, a vegades preocupada — forta quan són cotestimonis, feble quan són coespirals.",
  'compatibility.enneagram.4-6.practice': "El 4 ha de deixar de posar a prova si el 6 marxarà. El 6 ha de deixar d'escanejar l'ànim del 4 i simplement estar al costat.",

  'compatibility.enneagram.4-7.dynamic': "El 7 treu el 4 del pou; el 4 dóna a la vida del 7 profunditat i forma. Cadascú porta exactament el que l'altre més resisteix en si mateix.",
  'compatibility.enneagram.4-7.friction': "El 4 llegeix la fugida del 7 com a traïció al sentiment. El 7 llegeix la profunditat del 4 com una trampa. L'evasió i la intensitat xoquen en lloc d'equilibrar-se.",
  'compatibility.enneagram.4-7.together': "Una parella clar-i-fosc — d'alta amplitud, alta recompensa, només estable quan tots dos s'inclinen cap al mig.",
  'compatibility.enneagram.4-7.practice': "El 7 ha de deixar de fugir. El 4 ha de deixar d'estirar per la fugida.",

  'compatibility.enneagram.4-8.dynamic': "Tots dos són intensos, sense pretensió, al·lèrgics a l'actuació. Hi ha una honestedat immediata que el 4 i el 8 rarament aconsegueixen amb ningú més.",
  'compatibility.enneagram.4-8.friction': "La força del 8 se sent invasiva per al 4; l'estat d'ànim del 4 se sent caòtic per al 8. Sentiments grans en ambdós costats sense gaire regulació.",
  'compatibility.enneagram.4-8.together': "Una parella volàtil, devota — quan es confien, no es confien així amb ningú més.",
  'compatibility.enneagram.4-8.practice': "El 8 ha de cuidar el seu poder; el 4 ha de deixar d'utilitzar l'emoció com a contraarma.",

  'compatibility.enneagram.4-9.dynamic': "La direcció de creixement del 4 és el territori natal del 9 — pau, acceptació, presència. El 9 calma el 4 només per estar a la sala.",
  'compatibility.enneagram.4-9.friction': "El 9 s'anestesia davant el clima emocional del 4; el 4 llegeix l'anestèsia com a abandonament. El 4 puja el volum per ser sentit; el 9 s'allunya més.",
  'compatibility.enneagram.4-9.together': "Una parella suau, sovint profunda — el 9 sosté el continent; el 4 l'omple de color.",
  'compatibility.enneagram.4-9.practice': "El 9 ha de mantenir-se implicat quan puja la temperatura. El 4 ha de deixar de posar a prova si al 9 li importa.",

  'compatibility.enneagram.5-5.dynamic': "Dos 5 es donen un regal estrany: presència sense exigència. La soledat es comparteix; les recerques intel·lectuals s'acumulen.",
  'compatibility.enneagram.5-5.friction': "Tots dos es retiren sota pressió, i ningú torna a reparar. Dies de silenci es comprimeixen en mesos de distància.",
  'compatibility.enneagram.5-5.together': "Un vincle silenciós, ponderat, sovint invisible — del tipus que sobreviu separacions que cap altra relació no suportaria.",
  'compatibility.enneagram.5-5.practice': "Un dels dos ha de trencar el silenci. Per defecte, fer la trucada, enviar el missatge, el petit retorn — sense esperar que l'hi demanin.",

  'compatibility.enneagram.5-6.dynamic': "Tots dos són tipus de cap que pensen molt abans d'actuar. Hi ha un respecte compartit per l'evidència, la preparació i no deixar-se enganyar.",
  'compatibility.enneagram.5-6.friction': "El 6 vol tranquil·litat; el 5 vol ser deixat a pensar. El 6 comença a estirar per la implicació; el 5 es retira; el 6 catastrofitza la retirada.",
  'compatibility.enneagram.5-6.together': "Una parella cerebral, prudent — forta en planificar, feble en escalfor espontània.",
  'compatibility.enneagram.5-6.practice': "El 5 ha de treure a la llum el seu pensament — el silenci es llegeix com a abandonament per a un 6. El 6 ha de tolerar no ser informat en temps real.",

  'compatibility.enneagram.5-7.dynamic': "Tots dos són tipus de cap — però on el 5 conserva, el 7 gasta. El 7 treu el 5 al món; el 5 dóna al 7 alguna cosa en què aprofundir de debò.",
  'compatibility.enneagram.5-7.friction': "El ritme del 7 esgota el 5; la retirada del 5 frustra el 7. Maneres diferents d'evitar el mateix dolor.",
  'compatibility.enneagram.5-7.together': "Una parella complementària del centre de cap quan cadascú respecta el metabolisme de l'altre.",
  'compatibility.enneagram.5-7.practice': "El 7 ha d'aterrar. El 5 ha de sortir. Tots dos han de deixar d'utilitzar l'activitat mental per esquivar el sentir.",

  'compatibility.enneagram.5-8.dynamic': "La fletxa de creixement del 5 apunta al 8 — hi ha una atracció real en aquesta parella. El 8 porta el 5 al seu cos; el 5 aporta al 8 perspectiva.",
  'compatibility.enneagram.5-8.friction': "La intensitat del 8 abassega el 5; el desapegament del 5 enfureix el 8. El 5 es retira; el 8 escala; l'espiral és ràpida.",
  'compatibility.enneagram.5-8.together': "Una parella estranya que, quan funciona, integra poder i intel·ligència de maneres inusuals.",
  'compatibility.enneagram.5-8.practice': "El 8 ha de baixar el volum. El 5 ha de sortir del seu cap i entrar en allò que la relació realment es juga.",

  'compatibility.enneagram.5-9.dynamic': "Tots dos són silenciosos, poc exigents i contents de compartir espai sense omplir-lo. La casa està en pau; les nits de lectura són reals.",
  'compatibility.enneagram.5-9.friction': "Tots dos es retiren sota estrès, cap inicia el retorn, i petites distàncies esdevenen permanents gairebé sense que ningú ho noti.",
  'compatibility.enneagram.5-9.together': "Una parella suau, ponderada, a vegades massa silenciosa — forta en equanimitat, lleugera en escalfor.",
  'compatibility.enneagram.5-9.practice': "Tots dos han de sobre-corregir-se cap a la iniciativa — missatges, plans, petites ofertes de contacte — força més enllà del punt en què cap dels dos sent que cal.",

  'compatibility.enneagram.6-6.dynamic': "Dos 6 es vinculen ràpid al voltant de la lleialtat compartida, la vigilància compartida i el rar alleugeriment de no haver d'explicar per què revisen dues vegades les coses.",
  'compatibility.enneagram.6-6.friction': "L'ansietat s'amplifica. Tots dos busquen en l'altre una certesa que cap té, i la preocupació escala sense àncora externa.",
  'compatibility.enneagram.6-6.together': "Una llar lleial, devota, lleugerament ansiosa — forta en compromís, vulnerable als espirals.",
  'compatibility.enneagram.6-6.practice': "Almenys un ha de ser el calmat en cada moment. Torns conscientment; no entrar en pànic alhora.",

  'compatibility.enneagram.6-7.dynamic': "L'optimisme del 7 aixeca la preocupació del 6; la cautela del 6 ancora la persecució del 7. Mateix centre de cap, valor per defecte oposat — una complementarietat real.",
  'compatibility.enneagram.6-7.friction': "El 7 minimitza el que el 6 es pren seriosament; el 6 catastrofitza el que el 7 descarta. Cadascú comença a sentir-se desemparat en el clima emocional bàsic.",
  'compatibility.enneagram.6-7.together': "Una parella expansiva-i-cauta — poderosa quan cadascú respecta el que l'altre percep.",
  'compatibility.enneagram.6-7.practice': "El 7 ha de deixar de tractar la preocupació del 6 com un esgarriacries. El 6 ha de deixar de tractar la lleugeresa del 7 com a negació.",

  'compatibility.enneagram.6-8.dynamic': "La franquesa del 8 dóna al 6 sensació de seguretat; la lleialtat del 6 dóna al 8 una parella que no s'arronsa. La confiança, un cop guanyada, corre profund.",
  'compatibility.enneagram.6-8.friction': "La força del 8 activa l'escaneig d'amenaces del 6; el 6 comença a posar a prova el compromís del 8, cosa que el 8 llegeix com a deslleialtat.",
  'compatibility.enneagram.6-8.together': "Una parella lleial-i-protectora — forta, devota i ràpida a tancar files.",
  'compatibility.enneagram.6-8.practice': "El 8 ha de ser pacient amb les proves del 6. El 6 ha de deixar de provar un cop establerta la confiança.",

  'compatibility.enneagram.6-9.dynamic': "Tots dos són suaus, lleials i lents a abandonar les persones que estimen. La relació és estable, sense drama i construïda per durar.",
  'compatibility.enneagram.6-9.friction': "La preocupació del 6 pressiona la pau del 9; l'evasió del 9 mata de gana la necessitat d'implicació del 6. La pressió s'acumula en silenci.",
  'compatibility.enneagram.6-9.together': "Un dels patrons de parella més duradors del cercle — silenciós, lleial, sovint llarg.",
  'compatibility.enneagram.6-9.practice': "El 6 ha de deixar de forçar el 9 a prendre una posició. El 9 ha de prendre realment una, especialment les petites, cada dia.",

  'compatibility.enneagram.7-7.dynamic': "Dos 7 saben divertir-se. Els plans s'acumulen, les idees es multipliquen, l'energia és brillant i l'agenda està plena.",
  'compatibility.enneagram.7-7.friction': "Cap frena. Sentiments grans, converses dures i dies lents se salten junts fins que alguna cosa s'ha de trencar.",
  'compatibility.enneagram.7-7.together': "Una parella brillant, social, expansiva — envejable per fora, evasiva per dins de tot el que no brilla.",
  'compatibility.enneagram.7-7.practice': "Un dels dos ha de quedar-se quan l'altre vol fugir. Seure amb la cosa difícil expressament; la relació no pot aprofundir-se d'una altra manera.",

  'compatibility.enneagram.7-8.dynamic': "Tots dos són d'alta energia, compromesos amb el món, al·lèrgics a la restricció. Les aventures es multipliquen; la parella es fica en projectes grans que altres no provarien.",
  'compatibility.enneagram.7-8.friction': "La confrontació del 8 cau dura sobre l'evasió del 7; la deflexió del 7 enfureix el 8. Els conflictes passen de zero a baralla sense punt mitjà.",
  'compatibility.enneagram.7-8.together': "Una parella audaç, expansiva — poderosa en moviment, fràgil quan la forcen a parar.",
  'compatibility.enneagram.7-8.practice': "El 8 ha de baixar la força. El 7 ha de deixar de desviar i deixar que la conversa realment passi.",

  'compatibility.enneagram.7-9.dynamic': "El 9 dóna al 7 una base calmada i acceptant; el 7 desperta el 9 a la seva pròpia vida. Hi ha aquí una complementarietat suau i generadora.",
  'compatibility.enneagram.7-9.friction': "El ritme del 7 abassega el 9; la deriva del 9 frustra el 7. El 7 comença a anar sol; el 9 es desconnecta en silenci.",
  'compatibility.enneagram.7-9.together': "Una parella expansiva-i-calmada — brillant per fora, en pau per dins, quan tots dos es troben a mig camí.",
  'compatibility.enneagram.7-9.practice': "El 7 ha de frenar. El 9 ha d'unir-se activament, no només seguir el corrent.",

  'compatibility.enneagram.8-8.dynamic': "Dos 8 es reconeixen al contacte — la franquesa és mútua, la feblesa no s'arma, la lleialtat no és negociable.",
  'compatibility.enneagram.8-8.friction': "Tots dos lluiten pel control; cap cedeix fàcilment. Els conflictes escalen ràpid i costen més del que cap pretenia.",
  'compatibility.enneagram.8-8.together': "Una parella formidable, ferotgement lleial — imponent per fora, tendra per dins si algun baixa l'armadura.",
  'compatibility.enneagram.8-8.practice': "Tots dos han de fer torns en ser el suau. La força no és el problema; la vulnerabilitat ho és.",

  'compatibility.enneagram.8-9.dynamic': "Mateix centre instintiu, expressió oposada. El 9 tempera la força del 8; el 8 porta el 9 a la vida. Les seves fletxes de creixement es creuen — una complementarietat profunda.",
  'compatibility.enneagram.8-9.friction': "El 8 empeny; el 9 desapareix en un acord que no resol res; el 8 empeny més fort. El cicle és el cicle.",
  'compatibility.enneagram.8-9.together': "Una parella de protector i pacificador — devota, durable, quan tots dos superen la dansa.",
  'compatibility.enneagram.8-9.practice': "El 8 ha de deixar d'empènyer — el 9 es retira més a cada empenta. El 9 ha de mantenir-se present i dir no, en veu alta, quan no és la veritat.",

  'compatibility.enneagram.9-9.dynamic': "Dos 9 creen una llar pacífica, de baixa fricció, gairebé per accident. El confort es comparteix, el conflicte és rar, els dies són tranquils.",
  'compatibility.enneagram.9-9.friction': "Cap inicia. Els ressentiments s'acumulen en silenci; la relació s'allunya a poc a poc sense que ningú ho anomeni.",
  'compatibility.enneagram.9-9.together': "Una parella suau, sense drama, a vegades massa quieta — radiant en un bon dia, invisible en un de dolent.",
  'compatibility.enneagram.9-9.practice': "Tots dos han d'oferir les seves preferències abans que els les preguntin. La fricció, en petites dosis, no és enemiga — és la prova de la presència.",

  // MBTI: compatibilitat entre tipus — 136 parelles × 4 seccions.
  'compatibility.mbti.ENFJ-ENFJ.dynamic': "Dos protagonistes sintonitzen amb les mateixes freqüències emocionals i llegeixen les sales de forma idèntica. La relació té una fluïdesa social inusual des del primer dia.",
  'compatibility.mbti.ENFJ-ENFJ.friction': "Tots dos gestionen els sentiments de tothom mentre suprimeixen els seus en silenci. El ressentiment s'acumula al soterrani que cap dels dos reconeixerà.",
  'compatibility.mbti.ENFJ-ENFJ.together': "Una parella d'alt rendiment, generosa, externament impressionant — grans amfitrions, lleugerament esgotats en privat.",
  'compatibility.mbti.ENFJ-ENFJ.practice': "Tots dos han d'arriscar-se a ser inconvenients. Deixa de llegir la sala i digues el que realment sents.",

  'compatibility.mbti.ENFJ-ENFP.dynamic': "Tots dos lideren amb emoció i possibilitat. Les converses són càlides, expansives i ràpidament íntimes.",
  'compatibility.mbti.ENFJ-ENFP.friction': "L'ENFJ vol connexió al servei d'alguna cosa; l'ENFP vol connexió per si mateixa. L'ENFJ comença a sentir-se gestionat; l'ENFP comença a sentir-se dirigit.",
  'compatibility.mbti.ENFJ-ENFP.together': "Una parella brillant, social, idealista — forta en sentit compartit, feble en logística.",
  'compatibility.mbti.ENFJ-ENFP.practice': "L'ENFJ ha de deixar d'optimitzar la vida de l'ENFP. L'ENFP ha de deixar de llegir l'estructura de l'ENFJ com a control.",

  'compatibility.mbti.ENFJ-ENTJ.dynamic': "Dos líders, un càlid un fred, tots dos avançant amb convicció. Els plans es fan i s'executen amb rapidesa inusual.",
  'compatibility.mbti.ENFJ-ENTJ.friction': "L'ENTJ optimitza per resultats; l'ENFJ optimitza per persones. L'ENTJ llegeix la cura de l'ENFJ com a ineficiència; l'ENFJ llegeix el motor de l'ENTJ com a fred.",
  'compatibility.mbti.ENFJ-ENTJ.together': "Una plantilla de parella de poder — visible, productiva, formidable a qualsevol sala que comparteixen.",
  'compatibility.mbti.ENFJ-ENTJ.practice': "L'ENTJ ha de considerar les persones abans, no al final. L'ENFJ ha de deixar de suavitzar veritats dures que l'ENTJ veurà de totes maneres.",

  'compatibility.mbti.ENFJ-ENTP.dynamic': "L'ENTP porta idees provocadores; l'ENFJ els dóna un marc relacional. L'ENTP és testimoniat; l'ENFJ és estirat.",
  'compatibility.mbti.ENFJ-ENTP.friction': "L'ENTP debat per esport; l'ENFJ es pren el desacord personalment. L'ENFJ suavitza; l'ENTP punxa; el cicle escala.",
  'compatibility.mbti.ENFJ-ENTP.together': "Una parella viva, intel·lectualment càlida — forta en conversa, feble en resolució de conflictes.",
  'compatibility.mbti.ENFJ-ENTP.practice': "L'ENTP ha d'aprendre que algunes coses no s'han de punxar. L'ENFJ ha de deixar de llegir cada desafiament com a amenaça relacional.",

  'compatibility.mbti.ENFJ-ESFJ.dynamic': "Dos Fe-dominants creen calor relacional immediat. Acollir, regalar, recordar — músculs compartits, mútuament apreciats.",
  'compatibility.mbti.ENFJ-ESFJ.friction': "L'ESFJ per defecte tira cap a la tradició; l'ENFJ per defecte tira cap a la visió. L'ENFJ empeny creixement; l'ESFJ vol estabilitat — tots dos se senten no recolzats.",
  'compatibility.mbti.ENFJ-ESFJ.together': "Una parella càlida, social, profundament hospitalària — grans pares, lleugerament convencionals.",
  'compatibility.mbti.ENFJ-ESFJ.practice': "L'ENFJ ha de deixar d'emmarcar les preferències de l'ESFJ com a petites. L'ESFJ ha de deixar de llegir l'ambició de l'ENFJ com a descontentament.",

  'compatibility.mbti.ENFJ-ESFP.dynamic': "L'ENFJ dóna a l'ESFP profunditat i direcció; l'ESFP dóna a l'ENFJ permís per estar al moment. Tots dos són persones de persones.",
  'compatibility.mbti.ENFJ-ESFP.friction': "L'ENFJ planeja el sentit; l'ESFP vol l'experiència. L'ENFJ se sent sol amb el futur; l'ESFP se sent sermonejat.",
  'compatibility.mbti.ENFJ-ESFP.together': "Una parella brillant, generosa, càlida — forta en connexió, lleugera en estructura.",
  'compatibility.mbti.ENFJ-ESFP.practice': "L'ENFJ ha d'alliberar l'ESFP de ser un projecte. L'ESFP ha de valorar la vista més llarga de l'ENFJ.",

  'compatibility.mbti.ENFJ-ESTJ.dynamic': "Tots dos lideren, tots dos organitzen, tots dos mantenen les coses en marxa. Hi ha respecte mutu per la capacitat.",
  'compatibility.mbti.ENFJ-ESTJ.friction': "L'ESTJ vol eficiència; l'ENFJ vol harmonia. L'ESTJ llegeix l'ENFJ com a políticament tou; l'ENFJ llegeix l'ESTJ com a relacionalment brusc.",
  'compatibility.mbti.ENFJ-ESTJ.together': "Una parella d'alt rendiment, de cara al públic — genials en logística, propensos a suprimir la capa tova.",
  'compatibility.mbti.ENFJ-ESTJ.practice': "L'ESTJ ha de reconèixer els sentiments com a dades, no com a fricció. L'ENFJ ha de deixar de traduir cada directiva en un gest relacional.",

  'compatibility.mbti.ENFJ-ESTP.dynamic': "La immediatesa de l'ESTP desbloqueja l'ENFJ; l'ENFJ dóna a l'ESTP un arc vital. Hi ha calor real entre aquests dos.",
  'compatibility.mbti.ENFJ-ESTP.friction': "L'ESTP viu ara; l'ENFJ viu cap a alguna cosa. L'ESTP llegeix l'ENFJ com a predicador; l'ENFJ llegeix l'ESTP com a superficial.",
  'compatibility.mbti.ENFJ-ESTP.together': "Una parella viva, carregada — emocionant i inestable a parts iguals.",
  'compatibility.mbti.ENFJ-ESTP.practice': "L'ESTP ha de frenar per a la conversa de sentit. L'ENFJ ha de deixar de fer de l'ESTP un projecte de desenvolupament.",

  'compatibility.mbti.ENFJ-INFJ.dynamic': "Dos tipus Ni-Fe comparteixen la rara experiència de ser trobats. Les converses són profundes, ràpides i silenciosament compreses.",
  'compatibility.mbti.ENFJ-INFJ.friction': "L'ENFJ actua sobre la visió; l'INFJ la refina per sempre. L'ENFJ empeny; l'INFJ es retira; tots dos se senten traïts.",
  'compatibility.mbti.ENFJ-INFJ.together': "Una parella profundament sintonitzada — excepcionalment propera, ocasionalment sufocant.",
  'compatibility.mbti.ENFJ-INFJ.practice': "L'ENFJ ha de donar a l'INFJ espai per processar sense implicació. L'INFJ ha de sortir de la profunditat i actuar.",

  'compatibility.mbti.ENFJ-INFP.dynamic': "L'energia de l'ENFJ troba la profunditat de l'INFP. Tots dos valoren el sentit, l'autenticitat i la seriositat moral.",
  'compatibility.mbti.ENFJ-INFP.friction': "L'ENFJ vol ajudar; l'INFP vol ser deixat sol amb els seus sentiments. L'ajuda es llegeix com a intrusió; la retirada es llegeix com a rebuig.",
  'compatibility.mbti.ENFJ-INFP.together': "Una parella tendra, idealista — forta en valors compartits, fràgil en el ritme del dia a dia.",
  'compatibility.mbti.ENFJ-INFP.practice': "L'ENFJ ha de deixar d'intentar arreglar l'INFP. L'INFP ha de comunicar abans de retirar-se, no després.",

  'compatibility.mbti.ENFJ-INTJ.dynamic': "Tots dos comparteixen Ni — la visió s'alinea a nivell profund. L'ENFJ humanitza els plans de l'INTJ; l'INTJ rigorifica la cura de l'ENFJ.",
  'compatibility.mbti.ENFJ-INTJ.friction': "L'INTJ optimitza; l'ENFJ harmonitza. L'INTJ llegeix l'emoció de l'ENFJ com a soroll; l'ENFJ llegeix la lògica de l'INTJ com a freda.",
  'compatibility.mbti.ENFJ-INTJ.together': "Una parella complementària, sovint silenciosament poderosa — visionària i càlida quan tots dos honren el que aporta l'altre.",
  'compatibility.mbti.ENFJ-INTJ.practice': "L'INTJ ha de donar pes a les dades relacionals. L'ENFJ ha de deixar de traduir el desacord lògic com a personal.",

  'compatibility.mbti.ENFJ-INTP.dynamic': "L'INTP porta el marc; l'ENFJ porta l'aplicació. L'INTP es descongela; l'ENFJ s'afina.",
  'compatibility.mbti.ENFJ-INTP.friction': "L'INTP vol pensar sol; l'ENFJ vol processar junts. L'INTP es retira; l'ENFJ pressiona; el bucle s'intensifica.",
  'compatibility.mbti.ENFJ-INTP.together': "Una parella estranya que, quan funciona, integra cap i cor inusualment bé.",
  'compatibility.mbti.ENFJ-INTP.practice': "L'INTP ha de treure a la llum el seu pensament abans de terminar-lo. L'ENFJ ha de donar a l'INTP soledat sense pànic.",

  'compatibility.mbti.ENFJ-ISFJ.dynamic': "Dos tipus Fe — diferents ritmes, mateix calor. L'ISFJ cuida la casa; l'ENFJ cuida el món; tots dos asseguren que les persones se sentin sostingudes.",
  'compatibility.mbti.ENFJ-ISFJ.friction': "L'ENFJ empeny cap a fora; l'ISFJ es manté ferm. L'ENFJ llegeix l'ISFJ com a estàtic; l'ISFJ llegeix l'ENFJ com a inquietant.",
  'compatibility.mbti.ENFJ-ISFJ.together': "Una parella càlida, duradora, orientada a la família — forta en cura, lleugera en novetat.",
  'compatibility.mbti.ENFJ-ISFJ.practice': "L'ENFJ ha de frenar al tempo de l'ISFJ. L'ISFJ ha d'arriscar-se a sortir de la zona de confort a la qual l'ENFJ el convida.",

  'compatibility.mbti.ENFJ-ISFP.dynamic': "El calor de l'ENFJ troba la profunditat silenciosa de l'ISFP. L'ISFP és un dels pocs tipus que l'ENFJ no pot llegir fàcilment — el que es converteix en l'atracció.",
  'compatibility.mbti.ENFJ-ISFP.friction': "L'ENFJ vol connexió verbal; l'ISFP mostra amor a través de la presència. L'ENFJ llegeix silenci com a distància; l'ISFP llegeix pressió com a intrusió.",
  'compatibility.mbti.ENFJ-ISFP.together': "Una parella suau, artística, silenciosament propera — bonica en els seus ritmes, difícil per als de fora veure-hi a dins.",
  'compatibility.mbti.ENFJ-ISFP.practice': "L'ENFJ ha d'aprendre el llenguatge de l'amor de l'ISFP. L'ISFP ha de verbalitzar el que creu que l'ENFJ ja sap.",

  'compatibility.mbti.ENFJ-ISTJ.dynamic': "Ritmes diferents però seriositat compartida sobre el compromís. L'ENFJ porta calor; l'ISTJ porta fiabilitat.",
  'compatibility.mbti.ENFJ-ISTJ.friction': "L'ISTJ fa el que es va acordar; l'ENFJ segueix ajustant segons les persones. L'ISTJ se sent sacsejat; l'ENFJ se sent rígidament resistit.",
  'compatibility.mbti.ENFJ-ISTJ.together': "Una parella estable, fiable, lleugerament tradicional — forta en confiança, feble en vocabulari emocional.",
  'compatibility.mbti.ENFJ-ISTJ.practice': "L'ISTJ ha de llegir les dades relacionals que l'ENFJ continua traient. L'ENFJ ha d'honrar l'acord, no l'últim estat d'ànim.",

  'compatibility.mbti.ENFJ-ISTP.dynamic': "L'ENFJ vol saber què sent l'ISTP; l'ISTP no sempre ho sap. L'ENFJ esdevé el traductor que l'ISTP necessita però no demanarà.",
  'compatibility.mbti.ENFJ-ISTP.friction': "L'ISTP necessita soledat; l'ENFJ necessita implicació. L'ISTP es retira; l'ENFJ persegueix; la persecució esdevé la relació.",
  'compatibility.mbti.ENFJ-ISTP.together': "Una parella complementària, una mica desigual — funciona quan l'ENFJ sosté el fil relacional, falla quan l'ENFJ s'esgota.",
  'compatibility.mbti.ENFJ-ISTP.practice': "L'ISTP ha de tornar l'abast, no només rebre. L'ENFJ ha de deixar de substituir la seva lectura per les paraules reals de l'ISTP.",

  'compatibility.mbti.ENFP-ENFP.dynamic': "Dos campanyaires espurnejen amb els entusiasmes de l'altre. Les possibilitats es multipliquen; les converses salten; tot se sent viu.",
  'compatibility.mbti.ENFP-ENFP.friction': "Cap acaba. Dos Ne-doms junts generen idees més ràpid del que cap pot aterrar. Les promeses s'acumulen; el seguiment s'evapora.",
  'compatibility.mbti.ENFP-ENFP.together': "Una parella brillant, generadora, dispersa — radiant en moviment, fràgil quan cal comprometre's.",
  'compatibility.mbti.ENFP-ENFP.practice': "Un dels dos ha de ser qui realment compleix. Torns conscientment; no deixar que l'altre ho faci.",

  'compatibility.mbti.ENFP-ENTJ.dynamic': "L'ENFP subministra possibilitat; l'ENTJ subministra execució. L'ENFP sent que els plans de l'ENTJ guanyen cor; l'ENTJ sent que les idees de l'ENFP guanyen pes.",
  'compatibility.mbti.ENFP-ENTJ.friction': "L'ENTJ vol decisions; l'ENFP vol opcions obertes. L'ENTJ llegeix l'ENFP com a lleuger; l'ENFP llegeix l'ENTJ com a corró compressor.",
  'compatibility.mbti.ENFP-ENTJ.together': "Una parella de poder i espurna — quan funciona, és difícil competir-hi.",
  'compatibility.mbti.ENFP-ENTJ.practice': "L'ENTJ ha de frenar el cicle de decisió perquè l'ENFP se senti escollit, no assignat. L'ENFP ha de comprometre's amb una cosa i portar-la fins al final.",

  'compatibility.mbti.ENFP-ENTP.dynamic': "Dos Ne-doms en claus diferents (un Fi, l'altre Ti). Les converses són salvatges, generadores i genuïnament divertides.",
  'compatibility.mbti.ENFP-ENTP.friction': "L'ENTP debat per l'alegria; l'ENFP es pren les posicions personalment. L'ENTP punxa; l'ENFP es fereix; el joc esdevé baralla.",
  'compatibility.mbti.ENFP-ENTP.together': "Una parella viva, rica en idees — alta amperatge, curtcircuits ocasionals.",
  'compatibility.mbti.ENFP-ENTP.practice': "L'ENTP ha de registrar quan els valors de l'ENFP estan en joc. L'ENFP ha de diferenciar esport d'atac.",

  'compatibility.mbti.ENFP-ESFJ.dynamic': "L'ESFJ dóna a l'ENFP una llar emocional estable; l'ENFP dóna a l'ESFJ permís per vagar. Hi ha alleugeriment mutu.",
  'compatibility.mbti.ENFP-ESFJ.friction': "L'ESFJ vol compromís amb com s'han fet les coses; l'ENFP vol permís per fer-les diferent. Tradició vs. exploració.",
  'compatibility.mbti.ENFP-ESFJ.together': "Una parella càlida, social, cuidada — forta en hospitalitat, a vegades desajustada en horitzons.",
  'compatibility.mbti.ENFP-ESFJ.practice': "L'ESFJ ha de deixar l'ENFP improvisar. L'ENFP ha d'honrar els rituals que l'ESFJ manté vius.",

  'compatibility.mbti.ENFP-ESFP.dynamic': "Tots dos són tipus càlids, socials, plenament presents — diferents intuïcions, mateix amor pel moment. L'energia és alta.",
  'compatibility.mbti.ENFP-ESFP.friction': "L'ENFP viu en possibilitat; l'ESFP viu en el present. L'ENFP segueix gesticulant cap al després; l'ESFP no veu la urgència.",
  'compatibility.mbti.ENFP-ESFP.together': "Una parella brillant, alegre, una mica poc aterrada — diversió fàcil, estructura difícil.",
  'compatibility.mbti.ENFP-ESFP.practice': "L'ENFP ha de deixar de llegir el focus-ara de l'ESFP com a superficial. L'ESFP ha de comprometre's amb el futur al qual l'ENFP segueix assenyalant.",

  'compatibility.mbti.ENFP-ESTJ.dynamic': "L'ESTJ aporta l'estructura que l'ENFP secretament anhela; l'ENFP porta la possibilitat que l'ESTJ secretament troba a faltar. Els oposats s'atrauen aquí, real.",
  'compatibility.mbti.ENFP-ESTJ.friction': "L'ESTJ vol el pla acordat executat; l'ENFP vol revisar a mig vol. L'ESTJ llegeix caos; l'ENFP llegeix gàbia.",
  'compatibility.mbti.ENFP-ESTJ.together': "Una parella complementària quan tots dos s'inclinen l'un cap a l'altre — abrasiva quan tots dos s'atrinxeren.",
  'compatibility.mbti.ENFP-ESTJ.practice': "L'ESTJ ha de sostenir l'estructura sense agafar-la. L'ENFP ha d'honrar el pla un cop fixat.",

  'compatibility.mbti.ENFP-ESTP.dynamic': "Tots dos són tipus vius, energètics, amants de l'acció — diferents funcions, tempo similar. Les aventures s'acumulen.",
  'compatibility.mbti.ENFP-ESTP.friction': "L'ESTP vol ara; l'ENFP vol sentit. L'ESTP llegeix l'ENFP com a pensar de més; l'ENFP llegeix l'ESTP com a sentir de menys.",
  'compatibility.mbti.ENFP-ESTP.together': "Una parella d'alta energia, social, lleugerament impulsiva — forta en moviment, feble en profunditat.",
  'compatibility.mbti.ENFP-ESTP.practice': "L'ESTP ha d'implicar-se amb els valors de l'ENFP, no només amb l'acció. L'ENFP ha de deixar d'intentar fer profund l'ESTP.",

  'compatibility.mbti.ENFP-INFJ.dynamic': "Una parella famosament magnètica — l'INFJ reconeix la profunditat de l'ENFP; l'ENFP treu l'INFJ. Tots dos se senten vistos ràpid.",
  'compatibility.mbti.ENFP-INFJ.friction': "L'INFJ sosté la profunditat quieta; l'ENFP la dispersa. L'INFJ llegeix l'ENFP com a inquiet; l'ENFP llegeix l'INFJ com a retentor.",
  'compatibility.mbti.ENFP-INFJ.together': "Una parella intensa, sovint molt propera — bonica, ocasionalment esgotadora en la seva intensitat emocional.",
  'compatibility.mbti.ENFP-INFJ.practice': "L'INFJ ha de pujar al tempo de l'ENFP a vegades. L'ENFP ha d'aterrar prou perquè l'INFJ realment el trobi.",

  'compatibility.mbti.ENFP-INFP.dynamic': "Dos tipus que usen Fi al voltant de valors compartits. L'autenticitat és la llengua; tots dos senten un permís rar de ser ells mateixos.",
  'compatibility.mbti.ENFP-INFP.friction': "L'ENFP processa cap a fora; l'INFP processa cap a dins. L'ENFP vol implicació; l'INFP necessita retir. Perseguir-retirar-se és real.",
  'compatibility.mbti.ENFP-INFP.together': "Una parella tendra, idealista, profundament sentida — forta en valors, feble en logística.",
  'compatibility.mbti.ENFP-INFP.practice': "L'ENFP ha de donar a l'INFP soledat sense convertir-ho en crisi. L'INFP ha de treure a la llum el que passa abans d'esvair-se.",

  'compatibility.mbti.ENFP-INTJ.dynamic': "Una parella molt estimada en l'imaginari MBTI — l'estructura de l'INTJ troba l'espurna de l'ENFP; tots dos troben el rar company que els fa més ells mateixos.",
  'compatibility.mbti.ENFP-INTJ.friction': "L'INTJ vol el pla compromès; l'ENFP vol el pla obert. L'INTJ llegeix caos; l'ENFP llegeix gàbia.",
  'compatibility.mbti.ENFP-INTJ.together': "Una parella complementària amb profunditat i abast inusuals — una parella de poder amb disfresses diferents.",
  'compatibility.mbti.ENFP-INTJ.practice': "L'INTJ ha de considerar el clima emocional de l'ENFP. L'ENFP ha de comprometre's i executar, no només generar.",

  'compatibility.mbti.ENFP-INTP.dynamic': "Tots dos són tipus que usen Ne — les converses recorren l'espai de possibilitats sense esforç. L'INTP s'escalfa; l'ENFP s'afina.",
  'compatibility.mbti.ENFP-INTP.friction': "L'INTP vol pensar sol; l'ENFP vol pensar junts. L'INTP es retira a processar; l'ENFP se sent abandonat.",
  'compatibility.mbti.ENFP-INTP.together': "Una parella brillant, intel·lectualment juganera — forta en conversa, feble en ritme emocional.",
  'compatibility.mbti.ENFP-INTP.practice': "L'INTP ha de compartir el pensament mig format, no l'acabat. L'ENFP ha de donar a l'INTP espai de procés sense pànic.",

  'compatibility.mbti.ENFP-ISFJ.dynamic': "L'ISFJ cuida la casa i les rutines; l'ENFP porta vida i sorpresa. Hi ha complementarietat real aquí.",
  'compatibility.mbti.ENFP-ISFJ.friction': "L'ISFJ vol estabilitat; l'ENFP vol novetat. L'ISFJ llegeix l'ENFP com a inestable; l'ENFP llegeix l'ISFJ com a restrictiu.",
  'compatibility.mbti.ENFP-ISFJ.together': "Una parella càlida, una mica domèstica, una mica inquieta — funciona quan tots dos honren el que aporta l'altre.",
  'compatibility.mbti.ENFP-ISFJ.practice': "L'ISFJ ha de flexibilitzar les rutines per als esclats de l'ENFP. L'ENFP ha de valorar el que l'ISFJ manté viu.",

  'compatibility.mbti.ENFP-ISFP.dynamic': "Dos tipus Fi-líders — els valors s'alineen ràpid, i la relació té una honestedat emocional inusual.",
  'compatibility.mbti.ENFP-ISFP.friction': "L'ENFP processa verbalment; l'ISFP processa en silenci. L'ENFP se sent bloquejat; l'ISFP se sent envaït.",
  'compatibility.mbti.ENFP-ISFP.together': "Una parella suau, conduïda per valors — forta en sentit compartit, lleugera en iniciativa.",
  'compatibility.mbti.ENFP-ISFP.practice': "L'ENFP ha de donar a l'ISFP silenci sense omplir-lo. L'ISFP ha de posar paraules al que creia obvi.",

  'compatibility.mbti.ENFP-ISTJ.dynamic': "L'ISTJ aporta l'estabilitat que l'ENFP secretament necessita; l'ENFP aporta la vida que l'ISTJ secretament gaudeix. Complementarietat real.",
  'compatibility.mbti.ENFP-ISTJ.friction': "L'ISTJ vol el pla honrat; l'ENFP vol revisió benvinguda. L'ISTJ llegeix caos; l'ENFP llegeix rigidesa.",
  'compatibility.mbti.ENFP-ISTJ.together': "Una parella complementària que funciona quan tots dos ajusten cap al mig.",
  'compatibility.mbti.ENFP-ISTJ.practice': "L'ISTJ ha de flexibilitzar sense veure-ho com a traïció. L'ENFP ha de lliurar el que es va acordar.",

  'compatibility.mbti.ENFP-ISTP.dynamic': "L'ISTP porta competència tranquil·la; l'ENFP porta entusiasme càlid. Cadascú porta alguna cosa que l'altre no pot generar sol.",
  'compatibility.mbti.ENFP-ISTP.friction': "L'ENFP vol implicació emocional; l'ISTP vol espai tranquil. L'ENFP empeny; l'ISTP es retira.",
  'compatibility.mbti.ENFP-ISTP.together': "Una parella estranya — funciona quan l'ENFP sosté el fil relacional i l'ISTP apareix de forma fiable per al pràctic.",
  'compatibility.mbti.ENFP-ISTP.practice': "L'ISTP ha de traduir la cura en paraules a vegades. L'ENFP ha de llegir les accions de l'ISTP com la carta d'amor que són.",

  'compatibility.mbti.ENTJ-ENTJ.dynamic': "Dos comandants es reconeixen a l'instant. Les decisions es prenen ràpid; les ambicions s'alineen sense negociació.",
  'compatibility.mbti.ENTJ-ENTJ.friction': "Tots dos lluiten pel control; cap cedeix fàcilment. Les lluites de poder esdevenen personals ràpid.",
  'compatibility.mbti.ENTJ-ENTJ.together': "Una parella executiva formidable — eficient al món, dependent de missió compartida per mantenir-se alineada.",
  'compatibility.mbti.ENTJ-ENTJ.practice': "Tots dos han de fer torns en seguir. La força no és el problema; cedir ho és.",

  'compatibility.mbti.ENTJ-ENTP.dynamic': "L'ENTJ executa; l'ENTP innova. L'ENTP subministra l'angle inesperat; l'ENTJ el converteix en pla.",
  'compatibility.mbti.ENTJ-ENTP.friction': "L'ENTJ vol tancament; l'ENTP vol la porta oberta. L'ENTJ pressiona per decisió; l'ENTP segueix reobrint.",
  'compatibility.mbti.ENTJ-ENTP.together': "Una parella d'alt rendiment, rica en idees — formidable quan els rols són clars.",
  'compatibility.mbti.ENTJ-ENTP.practice': "L'ENTJ ha de deixar espai per a la següent iteració. L'ENTP ha de comprometre's quan el compromís és el necessari.",

  'compatibility.mbti.ENTJ-ESFJ.dynamic': "L'ENTJ lidera externament; l'ESFJ sosté el teixit social. Junts porten una vida apretada i ben cuidada.",
  'compatibility.mbti.ENTJ-ESFJ.friction': "L'ESFJ vol reconeixement emocional; l'ENTJ per defecte va a la logística. L'ESFJ se sent invisible; l'ENTJ se sent renyat.",
  'compatibility.mbti.ENTJ-ESFJ.together': "Una parella d'alt rendiment, externament impressionant — forta en capacitat, vulnerable en calor.",
  'compatibility.mbti.ENTJ-ESFJ.practice': "L'ENTJ ha de registrar el treball emocional de l'ESFJ explícitament. L'ESFJ ha de demanar directament, no insinuar.",

  'compatibility.mbti.ENTJ-ESFP.dynamic': "L'ESFP afluixa l'ENTJ; l'ENTJ orienta l'ESFP. A tots dos els agrada l'acció decisiva i els resultats tangibles.",
  'compatibility.mbti.ENTJ-ESFP.friction': "L'ENTJ planeja per resultats; l'ESFP planeja per al moment. L'ENTJ llegeix l'ESFP com a indisciplinat; l'ESFP llegeix l'ENTJ com a sense alegria.",
  'compatibility.mbti.ENTJ-ESFP.together': "Una parella viva, orientada a l'acció — forta en impuls, a vegades lleugera en coherència a llarg termini.",
  'compatibility.mbti.ENTJ-ESFP.practice': "L'ENTJ ha de considerar la necessitat de l'ESFP de l'ara. L'ESFP ha d'honrar els arcs més llargs de l'ENTJ.",

  'compatibility.mbti.ENTJ-ESTJ.dynamic': "Dos Te-doms — eficiència, resultats i jerarquies clares són llengües maternes mútues. Les decisions es prenen.",
  'compatibility.mbti.ENTJ-ESTJ.friction': "Tots dos volen ser la veu que decideix. El poder es disputa directament i sovint.",
  'compatibility.mbti.ENTJ-ESTJ.together': "Una parella formidable, capaç, lleugerament jeràrquica — forta en resultats, feble en amplada de banda emocional.",
  'compatibility.mbti.ENTJ-ESTJ.practice': "Tots dos han de donar pes a les dades relacionals. Fer torns en cedir en les coses en què cap dels dos no té interès.",

  'compatibility.mbti.ENTJ-ESTP.dynamic': "Tots dos són audaços, orientats a l'acció, impulsats per resultats. Els plans s'executen ràpid i els tractes es tanquen.",
  'compatibility.mbti.ENTJ-ESTP.friction': "L'ENTJ corre estratègia; l'ESTP corre tàctiques. L'ENTJ sent l'ESTP improvisar el pla; l'ESTP sent l'ENTJ sobreengegar el moment.",
  'compatibility.mbti.ENTJ-ESTP.together': "Una parella d'alta octanatge, compromesa amb el món — formidable en moviment, fràgil en paciència.",
  'compatibility.mbti.ENTJ-ESTP.practice': "L'ENTJ ha de deixar l'ESTP llegir la sala i ajustar. L'ESTP ha d'honrar el joc més llarg.",

  'compatibility.mbti.ENTJ-INFJ.dynamic': "Tots dos són tipus que usen Ni — la visió s'alinea en profunditat. L'INFJ humanitza els plans de l'ENTJ; l'ENTJ rigorifica les intuïcions de l'INFJ.",
  'compatibility.mbti.ENTJ-INFJ.friction': "L'ENTJ pressiona per acció; l'INFJ resisteix el tancament prematur. L'ENTJ llegeix l'INFJ com a evasiu; l'INFJ llegeix l'ENTJ com a corró compressor.",
  'compatibility.mbti.ENTJ-INFJ.together': "Una parella complementària, sovint silenciosament poderosa — visionària i capaç quan tots dos honren el que aporta l'altre.",
  'compatibility.mbti.ENTJ-INFJ.practice': "L'ENTJ ha d'esperar la intuïció completa de l'INFJ. L'INFJ ha d'aterrar una opinió sobre la qual l'ENTJ pugui actuar.",

  'compatibility.mbti.ENTJ-INFP.dynamic': "Famosament polar — funcions oposades en rols oposats. Quan això funciona, és transformador; quan no, és dolorós.",
  'compatibility.mbti.ENTJ-INFP.friction': "L'ENTJ pressiona per resultats; l'INFP necessita sentir que els valors estan intactes. Te-Fe vs Fi-Ne crea males lectures reals.",
  'compatibility.mbti.ENTJ-INFP.together': "Una parella d'alta amplitud — bonica en estacions llargues i càlides, brutal en tempestes.",
  'compatibility.mbti.ENTJ-INFP.practice': "L'ENTJ ha de frenar per a l'examen de valors de l'INFP. L'INFP ha de deixar de llegir la franquesa com a crueltat.",

  'compatibility.mbti.ENTJ-INTJ.dynamic': "Dos estrategs NT — visió i execució s'alineen sense traducció. El pla existeix abans que comenci la reunió.",
  'compatibility.mbti.ENTJ-INTJ.friction': "L'ENTJ vol decisions; l'INTJ vol més anàlisi. L'ENTJ pressiona; l'INTJ es demora; tots dos se senten apressats i mal preparats.",
  'compatibility.mbti.ENTJ-INTJ.together': "Una parella formidable, intel·lectualment alineada — forta en sistemes, feble en vocabulari emocional.",
  'compatibility.mbti.ENTJ-INTJ.practice': "L'ENTJ ha de deixar l'INTJ acabar de pensar. L'INTJ ha de comprometre's abans que totes les dades hi siguin.",

  'compatibility.mbti.ENTJ-INTP.dynamic': "L'INTP subministra el model; l'ENTJ el prova al món. Junts poden construir coses inusualment rigoroses.",
  'compatibility.mbti.ENTJ-INTP.friction': "L'ENTJ vol el model desplegat; l'INTP el vol perfeccionat. L'ENTJ empeny la porta oberta; l'INTP la segueix mantenint tancada.",
  'compatibility.mbti.ENTJ-INTP.together': "Una parella d'expert i executor — silenciosament poderosa quan tots dos respecten el que aporta l'altre.",
  'compatibility.mbti.ENTJ-INTP.practice': "L'ENTJ ha de valorar el procés de l'INTP, no només el resultat. L'INTP ha de lliurar la versió sense acabar.",

  'compatibility.mbti.ENTJ-ISFJ.dynamic': "L'ENTJ s'encarrega del món; l'ISFJ s'encarrega de la casa. Hi ha clara divisió de tasques i respecte mutu.",
  'compatibility.mbti.ENTJ-ISFJ.friction': "L'ENTJ vol eficiència; l'ISFJ vol tradició. L'ENTJ passa per damunt de la cura de l'ISFJ; l'ISFJ ressenteix l'atropellament.",
  'compatibility.mbti.ENTJ-ISFJ.together': "Una parella capaç, fiable, una mica tradicional — forta en rols, feble en negociació.",
  'compatibility.mbti.ENTJ-ISFJ.practice': "L'ENTJ ha de consultar l'ISFJ abans de decidir per ells. L'ISFJ ha d'afirmar preferències en veu alta, no en silenci.",

  'compatibility.mbti.ENTJ-ISFP.dynamic': "L'ENTJ aporta direcció; l'ISFP aporta l'aterratge en valors. El punt cec de l'ENTJ és Fi; el de l'ISFP és Te — complementarietat natural.",
  'compatibility.mbti.ENTJ-ISFP.friction': "L'ENTJ vol planejar el futur; l'ISFP vol habitar el present. L'ENTJ passa per damunt; l'ISFP es retira.",
  'compatibility.mbti.ENTJ-ISFP.together': "Una parella estranya que, quan funciona, equilibra motor i profunditat inusualment bé.",
  'compatibility.mbti.ENTJ-ISFP.practice': "L'ENTJ ha de deixar de decidir per l'ISFP. L'ISFP ha de posar veu als valors abans de ser atropellat.",

  'compatibility.mbti.ENTJ-ISTJ.dynamic': "Tots dos tipus Te-líders valoren l'execució, la fiabilitat i els estàndards clars. Les operacions funcionen suaument.",
  'compatibility.mbti.ENTJ-ISTJ.friction': "L'ENTJ vol canvi; l'ISTJ vol el mètode provat. L'ENTJ empeny; l'ISTJ es tiba; la iteració s'encalla.",
  'compatibility.mbti.ENTJ-ISTJ.together': "Una parella capaç, fiable, lleugerament conservadora — forta en seguiment, feble en innovació.",
  'compatibility.mbti.ENTJ-ISTJ.practice': "L'ENTJ ha d'argumentar el canvi abans d'empènyer. L'ISTJ ha d'implicar-se amb noves evidències, no descartar-les.",

  'compatibility.mbti.ENTJ-ISTP.dynamic': "L'ENTJ comanda; l'ISTP executa — però només en els seus propis termes. Hi ha respecte mutu per la capacitat sense sentimentalisme.",
  'compatibility.mbti.ENTJ-ISTP.friction': "L'ENTJ vol compliment; l'ISTP vol autonomia. L'ENTJ empeny; l'ISTP es desconnecta; la relació queda en silenci.",
  'compatibility.mbti.ENTJ-ISTP.together': "Una parella capaç, de poca emoció — forta en fer coses, feble en connexió emocional.",
  'compatibility.mbti.ENTJ-ISTP.practice': "L'ENTJ ha de concedir autonomia a l'ISTP. L'ISTP ha de treure a la llum el desacord abans de simplement quedar-se callat.",

  'compatibility.mbti.ENTP-ENTP.dynamic': "Dos debatedors espurnejen l'un amb l'altre sense fi. Les converses són sorolloses, generadores i esgotadores per als de fora.",
  'compatibility.mbti.ENTP-ENTP.friction': "Cap cedeix; tots dos segueixen punxant. Sense un projecte extern, la relació esdevé pur debat sense resolució.",
  'compatibility.mbti.ENTP-ENTP.together': "Una parella brillant, intel·lectualment elèctrica — formidable en moviment, fràgil en quietud.",
  'compatibility.mbti.ENTP-ENTP.practice': "Tots dos han d'aterrar. Pren una decisió i viu amb ella; el debat no és intimitat.",

  'compatibility.mbti.ENTP-ESFJ.dynamic': "L'ESFJ cuida el teixit relacional; l'ENTP porta novetat i desafiament. Hi ha alleugeriment mutu — l'ENTP rep cura, l'ESFJ és estirat.",
  'compatibility.mbti.ENTP-ESFJ.friction': "L'ENTP debat tot; l'ESFJ pren el desacord com a amenaça relacional. L'ENTP punxa; l'ESFJ es fereix; el cicle escala.",
  'compatibility.mbti.ENTP-ESFJ.together': "Una parella càlida i estirada — funciona quan tots dos honren el que aporta l'altre.",
  'compatibility.mbti.ENTP-ESFJ.practice': "L'ENTP ha de registrar que algunes coses no estan a debat. L'ESFJ ha de deixar de llegir el desafiament com a personal.",

  'compatibility.mbti.ENTP-ESFP.dynamic': "Tots dos són tipus vius, socials, optimistes. L'energia és alta; l'agenda social està plena; idees i aventures es multipliquen.",
  'compatibility.mbti.ENTP-ESFP.friction': "L'ENTP vol joc intel·lectual; l'ESFP vol joc experiencial. Diferents formes de diversió comencen a sentir-se desajustades.",
  'compatibility.mbti.ENTP-ESFP.together': "Una parella brillant, expansiva — forta en moviment, feble en profunditat.",
  'compatibility.mbti.ENTP-ESFP.practice': "L'ENTP ha de sumar-se a la diversió cos-implicada de l'ESFP. L'ESFP ha de seguir la diversió idea-implicada de l'ENTP.",

  'compatibility.mbti.ENTP-ESTJ.dynamic': "L'ESTJ estructura; l'ENTP innova. L'ESTJ corre l'organització que l'ENTP segueix inventant.",
  'compatibility.mbti.ENTP-ESTJ.friction': "L'ESTJ vol el pla executat; l'ENTP vol el pla qüestionat. L'ESTJ sent el caos; l'ENTP sent la gàbia.",
  'compatibility.mbti.ENTP-ESTJ.together': "Una parella capaç, productiva, a vegades conflictiva — forta en capacitat, vulnerable en tempo.",
  'compatibility.mbti.ENTP-ESTJ.practice': "L'ESTJ ha de deixar l'ENTP punxar sense prendre-ho com a insubordinació. L'ENTP ha d'honrar el pla executat.",

  'compatibility.mbti.ENTP-ESTP.dynamic': "Tots dos són ràpids, enginyosos, orientats a acció i a idees. Es fiquen en embolics; en surten; ho converteixen en història.",
  'compatibility.mbti.ENTP-ESTP.friction': "L'ENTP debat; l'ESTP actua; cap pausa. Quan alguna cosa surt malament, tots dos desvien.",
  'compatibility.mbti.ENTP-ESTP.together': "Una parella viva, lleugerament caòtica — forta en aventura, feble en quietud.",
  'compatibility.mbti.ENTP-ESTP.practice': "Tots dos han de parar i sentir abans de pivotar a la següent cosa.",

  'compatibility.mbti.ENTP-INFJ.dynamic': "Una parella MBTI molt celebrada — la profunditat de l'INFJ troba el joc de l'ENTP; tots dos troben el rar company que pot anar profund i pujar.",
  'compatibility.mbti.ENTP-INFJ.friction': "L'ENTP debat; l'INFJ es pren les coses personalment. L'ENTP punxa; l'INFJ es retira; el joc esdevé ferida.",
  'compatibility.mbti.ENTP-INFJ.together': "Una parella intensa, mútuament intrigada — magnètica quan funciona, esgotadora quan no.",
  'compatibility.mbti.ENTP-INFJ.practice': "L'ENTP ha de registrar la profunditat de l'INFJ, no punxar-la. L'INFJ ha de pujar al tempo de l'ENTP.",

  'compatibility.mbti.ENTP-INFP.dynamic': "L'ENTP treu l'INFP; l'INFP dóna a l'ENTP una àncora emocional. Les converses són àmplies i càlides.",
  'compatibility.mbti.ENTP-INFP.friction': "L'ENTP debat tot; l'INFP llegeix el desacord com a violació de valors. L'ENTP punxa; l'INFP es fereix.",
  'compatibility.mbti.ENTP-INFP.together': "Una parella càlida, rica en idees — forta en conversa, fràgil en desacord.",
  'compatibility.mbti.ENTP-INFP.practice': "L'ENTP ha d'aprendre quines coses l'INFP sosté com a sagrades. L'INFP ha de diferenciar esport d'atac.",

  'compatibility.mbti.ENTP-INTJ.dynamic': "L'ENTP subministra l'angle sorprenent; l'INTJ subministra l'arc llarg. Junts poden fer feina estratègica inusualment inventiva.",
  'compatibility.mbti.ENTP-INTJ.friction': "L'INTJ vol tancament; l'ENTP vol opcions. L'INTJ pressiona per decisió; l'ENTP segueix reobrint.",
  'compatibility.mbti.ENTP-INTJ.together': "Una parella famosament generadora — afilada, productiva, a vegades combativa.",
  'compatibility.mbti.ENTP-INTJ.practice': "L'INTJ ha de deixar l'ENTP iterar més del que es sent còmode. L'ENTP ha de comprometre's quan el model és prou bo.",

  'compatibility.mbti.ENTP-INTP.dynamic': "Dos tipus NT, un Ne extravertit / un Ti introvertit — les seves converses cobreixen terreny on altres persones no arriben.",
  'compatibility.mbti.ENTP-INTP.friction': "L'ENTP pressiona per acció; l'INTP vol modelar primer. L'ENTP s'impacienta; l'INTP se sent apressat.",
  'compatibility.mbti.ENTP-INTP.together': "Una parella intel·lectualment rica, de poca emoció — forta en sistemes, feble en cura relacional.",
  'compatibility.mbti.ENTP-INTP.practice': "L'ENTP ha de donar a l'INTP temps de procés. L'INTP ha de treure a la llum una postura abans que sigui perfecta.",

  'compatibility.mbti.ENTP-ISFJ.dynamic': "L'ISFJ aporta estabilitat; l'ENTP aporta novetat. L'ISFJ té una vida més interessant; l'ENTP té una casa.",
  'compatibility.mbti.ENTP-ISFJ.friction': "L'ENTP debat; l'ISFJ vol harmonia. L'ENTP punxa; l'ISFJ es retira ferit; l'ENTP no ho veu.",
  'compatibility.mbti.ENTP-ISFJ.together': "Una parella complementària quan l'ENTP frena; difícil quan no.",
  'compatibility.mbti.ENTP-ISFJ.practice': "L'ENTP ha de llegir el dolor silenciós de l'ISFJ abans. L'ISFJ ha de treure el dolor a la llum en veu alta.",

  'compatibility.mbti.ENTP-ISFP.dynamic': "L'ENTP porta energia; l'ISFP porta profunditat silenciosa. Cadascú està intrigat pel que carrega l'altre.",
  'compatibility.mbti.ENTP-ISFP.friction': "L'ENTP debat; l'ISFP no. L'ENTP pressiona per implicació; l'ISFP es retira més.",
  'compatibility.mbti.ENTP-ISFP.together': "Una parella estranya que és silenciosament significativa quan l'ENTP modula i l'ISFP apareix.",
  'compatibility.mbti.ENTP-ISFP.practice': "L'ENTP ha de deixar de provar si l'ISFP s'implicarà. L'ISFP ha d'implicar-se sense ser perseguit.",

  'compatibility.mbti.ENTP-ISTJ.dynamic': "L'ISTJ subministra execució; l'ENTP subministra invenció. Complementarietat real quan tots dos honren el que fa l'altre.",
  'compatibility.mbti.ENTP-ISTJ.friction': "L'ENTP canvia de rumb; l'ISTJ vol el pla acordat. L'ENTP improvisa; l'ISTJ es tiba.",
  'compatibility.mbti.ENTP-ISTJ.together': "Una parella capaç — quan els rols són acordats, lliura.",
  'compatibility.mbti.ENTP-ISTJ.practice': "L'ENTP ha d'honrar el pla original més del que vol. L'ISTJ ha de permetre més revisió de la que es sent còmode.",

  'compatibility.mbti.ENTP-ISTP.dynamic': "Tots dos són tipus que usen Ti — els models lògics i la competència són llengües maternes mútues. Juganers, capaços, sense pelussa.",
  'compatibility.mbti.ENTP-ISTP.friction': "L'ENTP vol implicació; l'ISTP vol soledat. L'ENTP empeny; l'ISTP es retira; el bucle corre.",
  'compatibility.mbti.ENTP-ISTP.together': "Una parella capaç, intel·lectualment alineada — forta en sistemes, feble en connexió emocional.",
  'compatibility.mbti.ENTP-ISTP.practice': "L'ENTP ha de donar a l'ISTP espai. L'ISTP ha de tornar de la cova a temps.",

  'compatibility.mbti.ESFJ-ESFJ.dynamic': "Dos cònsols — calor, hospitalitat i recordar els aniversaris de les persones són llengües maternes mútues. La casa funciona.",
  'compatibility.mbti.ESFJ-ESFJ.friction': "Tots dos gestionen el teixit relacional i silenciosament puntuen qui dóna més. El marcador no es reinicia mai.",
  'compatibility.mbti.ESFJ-ESFJ.together': "Una parella càlida, social, lleugerament convencional — forta en comunitat, feble a moure el barco.",
  'compatibility.mbti.ESFJ-ESFJ.practice': "Tots dos han d'arriscar demanar directament el que volen, no insinuar i esperar.",

  'compatibility.mbti.ESFJ-ESFP.dynamic': "Dos tipus que usen sentir extravertit — la vida és social, expressiva i càlida. Plans, festes i persones omplen l'agenda.",
  'compatibility.mbti.ESFJ-ESFP.friction': "L'ESFJ vol tradició; l'ESFP vol improvisació. L'ESFJ se sent desestabilitzat; l'ESFP se sent constret.",
  'compatibility.mbti.ESFJ-ESFP.together': "Una parella càlida, expressiva, viva — forta en connexió, lleugera en arcs llargs.",
  'compatibility.mbti.ESFJ-ESFP.practice': "L'ESFJ ha de flexibilitzar amb l'ara de l'ESFP. L'ESFP ha d'honrar els rituals de l'ESFJ.",

  'compatibility.mbti.ESFJ-ESTJ.dynamic': "L'ESFJ cuida persones; l'ESTJ corre operacions. Junts cobreixen bases relacionals i logístiques amb eficiència.",
  'compatibility.mbti.ESFJ-ESTJ.friction': "L'ESTJ vol eficiència; l'ESFJ vol reconeixement emocional. L'ESTJ passa per damunt; l'ESFJ ressenteix.",
  'compatibility.mbti.ESFJ-ESTJ.together': "Una parella capaç, tradicional, treballadora — forta en rols, feble en flexibilitat.",
  'compatibility.mbti.ESFJ-ESTJ.practice': "L'ESTJ ha de considerar les dades relacionals de l'ESFJ explícitament. L'ESFJ ha de demanar el que vol, no insinuar.",

  'compatibility.mbti.ESFJ-ESTP.dynamic': "L'ESTP porta emoció; l'ESFJ porta continuïtat. L'ESTP rep una base; l'ESFJ és estirat.",
  'compatibility.mbti.ESFJ-ESTP.friction': "L'ESTP improvisa; l'ESFJ rastreja compromisos. L'ESFJ sent el retard de l'ESTP; l'ESTP sent la comptabilitat de l'ESFJ.",
  'compatibility.mbti.ESFJ-ESTP.together': "Una parella càlida, viva, lleugerament desajustada — funciona quan l'ESTP apareix de forma fiable i l'ESFJ flexibilitza en el petit.",
  'compatibility.mbti.ESFJ-ESTP.practice': "L'ESTP ha d'honrar els compromisos relacionals de l'ESFJ. L'ESFJ ha de deixar l'ESTP improvisar sense puntuar.",

  'compatibility.mbti.ESFJ-INFJ.dynamic': "Dos tipus Fe, ritmes diferents — el calor relacional flueix en ambdues direccions. L'INFJ rep cura; l'ESFJ rep profunditat.",
  'compatibility.mbti.ESFJ-INFJ.friction': "L'ESFJ per defecte va a convencions socials; l'INFJ per defecte va a la veritat interior. L'ESFJ sent l'INFJ allunyar-se del grup; l'INFJ sent l'ESFJ imposar un to.",
  'compatibility.mbti.ESFJ-INFJ.together': "Una parella càlida, atenta — forta en cura, feble en acord sobre el que realment importa.",
  'compatibility.mbti.ESFJ-INFJ.practice': "L'ESFJ ha de donar a l'INFJ espai per discrepar. L'INFJ ha d'implicar-se amb la gramàtica social de l'ESFJ.",

  'compatibility.mbti.ESFJ-INFP.dynamic': "L'ESFJ aporta cura logística càlida; l'INFP aporta profunditat de valors. Hi ha complementarietat si tots dos honren el que aporta l'altre.",
  'compatibility.mbti.ESFJ-INFP.friction': "L'ESFJ vol implicació i tradició; l'INFP vol soledat i autenticitat. Tots dos se senten poc trobats.",
  'compatibility.mbti.ESFJ-INFP.together': "Una parella suau, càlida — funciona quan l'ESFJ permet el retir i l'INFP aprecia l'estructura.",
  'compatibility.mbti.ESFJ-INFP.practice': "L'ESFJ ha de concedir soledat sense pànic. L'INFP ha de participar als rituals que sostenen la relació.",

  'compatibility.mbti.ESFJ-INTJ.dynamic': "L'ESFJ cuida el camp social; l'INTJ cuida el pla a llarg termini. Junts cobreixen ambdós registres.",
  'compatibility.mbti.ESFJ-INTJ.friction': "L'ESFJ vol implicació relacional; l'INTJ vol eficiència. L'ESFJ se sent invisible; l'INTJ se sent assetjat.",
  'compatibility.mbti.ESFJ-INTJ.together': "Una parella capaç però emocionalment desigual — forta en logística, vulnerable en calor.",
  'compatibility.mbti.ESFJ-INTJ.practice': "L'INTJ ha de donar pes explícit a les dades relacionals de l'ESFJ. L'ESFJ ha de demanar directament, no insinuar.",

  'compatibility.mbti.ESFJ-INTP.dynamic': "L'ESFJ descongela l'INTP; l'INTP dóna a l'ESFJ profunditat. Hi ha calor real aquí quan els ritmes coincideixen.",
  'compatibility.mbti.ESFJ-INTP.friction': "L'ESFJ vol implicació emocional; l'INTP vol temps sol. L'ESFJ persegueix; l'INTP es retira.",
  'compatibility.mbti.ESFJ-INTP.together': "Una parella estranya que funciona quan l'ESFJ permet espai i l'INTP apareix de forma consistent.",
  'compatibility.mbti.ESFJ-INTP.practice': "L'ESFJ ha de donar a l'INTP soledat sense convertir-la en referèndum. L'INTP ha de sortir de la cova a temps.",

  'compatibility.mbti.ESFJ-ISFJ.dynamic': "Dos SJ — tradició, família, hospitalitat i fiabilitat són llengües maternes compartides. Pocs parells són més càlids.",
  'compatibility.mbti.ESFJ-ISFJ.friction': "Tots dos prefereixen l'harmonia a l'honestedat; tots dos deixen que el ressentiment creixi en silenci en lloc d'arriscar conflicte.",
  'compatibility.mbti.ESFJ-ISFJ.together': "Una parella càlida, fiable, lleugerament convencional — forta en estabilitat, feble en converses dures.",
  'compatibility.mbti.ESFJ-ISFJ.practice': "Tots dos han d'arriscar la veritat indesitjada. La supressió és més perillosa que el desacord.",

  'compatibility.mbti.ESFJ-ISFP.dynamic': "L'ESFJ dóna a l'ISFP una llar emocional; l'ISFP dóna a l'ESFJ profunditat estètica. Tots dos són càlids i orientats al present.",
  'compatibility.mbti.ESFJ-ISFP.friction': "L'ESFJ vol implicació verbal; l'ISFP mostra amor en silenci. L'ESFJ llegeix silenci com a distància; l'ISFP llegeix pressió com a intrusió.",
  'compatibility.mbti.ESFJ-ISFP.together': "Una parella suau, càlida — funciona quan l'ESFJ aprèn el llenguatge de l'amor de l'ISFP.",
  'compatibility.mbti.ESFJ-ISFP.practice': "L'ESFJ ha de llegir presència com a cura. L'ISFP ha d'usar paraules a vegades.",

  'compatibility.mbti.ESFJ-ISTJ.dynamic': "Dos SJ — deure, tradició, fiabilitat i cura familiar són valors compartits. La casa funciona.",
  'compatibility.mbti.ESFJ-ISTJ.friction': "L'ESFJ vol reconeixement emocional; l'ISTJ per defecte va a les accions. L'ESFJ se sent no vist; l'ISTJ se sent gestionat.",
  'compatibility.mbti.ESFJ-ISTJ.together': "Una parella fiable, tradicional, lleugerament prima emocionalment — forta en compromís, feble en vocabulari.",
  'compatibility.mbti.ESFJ-ISTJ.practice': "L'ISTJ ha de verbalitzar la cura, no només demostrar-la. L'ESFJ ha de llegir l'acció com a amor.",

  'compatibility.mbti.ESFJ-ISTP.dynamic': "L'ESFJ aporta estructura relacional; l'ISTP aporta competència tranquil·la. Cadascú porta alguna cosa que l'altre no genera fàcilment.",
  'compatibility.mbti.ESFJ-ISTP.friction': "L'ESFJ vol implicació; l'ISTP vol soledat. L'ESFJ persegueix; l'ISTP es retira; el bucle corre.",
  'compatibility.mbti.ESFJ-ISTP.together': "Una parella complementària, a vegades desigual — funciona quan l'ESFJ sosté el fil relacional i l'ISTP apareix.",
  'compatibility.mbti.ESFJ-ISTP.practice': "L'ISTP ha de fer petites ofertes de connexió. L'ESFJ ha de donar al silenci el seu sentit, no interrompre'l.",

  'compatibility.mbti.ESFP-ESFP.dynamic': "Dos animadors — la vida és brillant, social i física. Hi ha plans; el menjar és bo; hi ha gent al voltant.",
  'compatibility.mbti.ESFP-ESFP.friction': "Cap planeja per al baix. Quan arriba alguna cosa difícil, tots dos busquen distracció; la relació perd centre.",
  'compatibility.mbti.ESFP-ESFP.together': "Una parella brillant, divertida, orientada al present — envejable per fora, fràgil per dins.",
  'compatibility.mbti.ESFP-ESFP.practice': "Tots dos han de quedar-se a la part difícil expressament.",

  'compatibility.mbti.ESFP-ESTJ.dynamic': "L'ESTJ estructura; l'ESFP porta vida. Complementarietat real quan tots dos honren el que aporta l'altre.",
  'compatibility.mbti.ESFP-ESTJ.friction': "L'ESTJ vol compromís; l'ESFP vol llibertat per sentir el moment. ESTJ veu fluixor; ESFP veu rigidesa.",
  'compatibility.mbti.ESFP-ESTJ.together': "Una parella capaç, viva quan tots dos flexibilitzen; difícil quan tots dos s'atrinxeren.",
  'compatibility.mbti.ESFP-ESTJ.practice': "L'ESTJ ha de permetre improvisació. L'ESFP ha d'honrar l'acord.",

  'compatibility.mbti.ESFP-ESTP.dynamic': "Dos Se-doms — tots dos plenament vius al moment, tots dos orientats a l'acció, tots dos físicament implicats. Pocs parells igualen aquesta immediatesa.",
  'compatibility.mbti.ESFP-ESTP.friction': "Cap se senta amb sentiments. Quan alguna cosa fa mal, tots dos pivoten cap a distracció.",
  'compatibility.mbti.ESFP-ESTP.together': "Una parella brillant, viva, física — forta en diversió, feble en profunditat.",
  'compatibility.mbti.ESFP-ESTP.practice': "Tots dos han de quedar-se quan quedar-se no és divertit. La relació s'aprofundeix només allà.",

  'compatibility.mbti.ESFP-INFJ.dynamic': "Famosa parella polar — funcions oposades en rols oposats. L'INFJ aporta la profunditat; l'ESFP aporta la immediatesa. La fascinació mútua és real.",
  'compatibility.mbti.ESFP-INFJ.friction': "L'INFJ es retira a processar; l'ESFP vol implicació ara. INFJ llegeix l'ESFP com a superficial; ESFP llegeix l'INFJ com a retentor.",
  'compatibility.mbti.ESFP-INFJ.together': "Una parella d'alta amplitud — bonica en estacions llargues i càlides, brutal en conflicte.",
  'compatibility.mbti.ESFP-INFJ.practice': "L'INFJ ha de pujar al tempo de l'ESFP a vegades. L'ESFP ha d'honrar el processament de l'INFJ.",

  'compatibility.mbti.ESFP-INFP.dynamic': "Tots dos són tipus que usen Fi — els valors s'alineen ràpid. L'ESFP porta el món a l'INFP; l'INFP porta profunditat a l'ESFP.",
  'compatibility.mbti.ESFP-INFP.friction': "L'ESFP vol implicació; l'INFP necessita soledat. L'ESFP persegueix; l'INFP es retira.",
  'compatibility.mbti.ESFP-INFP.together': "Una parella càlida, alineada en valors — forta en connexió, lleugera en iniciativa.",
  'compatibility.mbti.ESFP-INFP.practice': "L'ESFP ha de concedir soledat. L'INFP ha d'implicar-se quan és convidat.",

  'compatibility.mbti.ESFP-INTJ.dynamic': "Una parella polar molt citada — la visió de l'INTJ troba la presència de l'ESFP. Cadascú és el punt cec de l'altre encarnat.",
  'compatibility.mbti.ESFP-INTJ.friction': "L'INTJ planeja; l'ESFP improvisa. L'INTJ llegeix caos; l'ESFP llegeix gàbia.",
  'compatibility.mbti.ESFP-INTJ.together': "Una parella d'alta amplitud — transformadora quan funciona, dolorosa quan no.",
  'compatibility.mbti.ESFP-INTJ.practice': "L'INTJ ha d'entrar al moment present. L'ESFP ha d'honrar el pla més llarg.",

  'compatibility.mbti.ESFP-INTP.dynamic': "L'ESFP porta vida i el cos; l'INTP porta model i profunditat. Cadascú està intrigat pel que genera l'altre.",
  'compatibility.mbti.ESFP-INTP.friction': "L'ESFP vol el món; l'INTP vol el cap. Diferents metabolismes creen distància real amb el temps.",
  'compatibility.mbti.ESFP-INTP.together': "Una parella estranya que funciona quan tots dos s'inclinen cap al mig.",
  'compatibility.mbti.ESFP-INTP.practice': "L'ESFP ha d'implicar-se amb els models de l'INTP. L'INTP ha de sortir i fer la cosa.",

  'compatibility.mbti.ESFP-ISFJ.dynamic': "L'ISFJ aporta estabilitat i cura; l'ESFP aporta vida i alegria. Calor real aquí.",
  'compatibility.mbti.ESFP-ISFJ.friction': "L'ISFJ vol tradició; l'ESFP vol la següent cosa. L'ISFJ se sent desestabilitzat; l'ESFP se sent constret.",
  'compatibility.mbti.ESFP-ISFJ.together': "Una parella càlida, una mica desajustada — forta en cura, vulnerable en ritme.",
  'compatibility.mbti.ESFP-ISFJ.practice': "L'ISFJ ha de permetre improvisació. L'ESFP ha d'honrar el que l'ISFJ manté viu.",

  'compatibility.mbti.ESFP-ISFP.dynamic': "Tots dos són tipus Se-Fi — moment present i autenticitat de valors. Les sensibilitats estètiques s'alineen; la presència és suficient.",
  'compatibility.mbti.ESFP-ISFP.friction': "Tots dos es retiren en lloc de confrontar. Els conflictes van sota terra i hi queden.",
  'compatibility.mbti.ESFP-ISFP.together': "Una parella suau, estètica, càlida — forta en presència, feble en conflicte.",
  'compatibility.mbti.ESFP-ISFP.practice': "Tots dos han de treure a la llum el desacord abans que fermenti.",

  'compatibility.mbti.ESFP-ISTJ.dynamic': "L'ISTJ aporta fiabilitat; l'ESFP aporta vida. Complementarietat real quan cadascú respecta el que aporta l'altre.",
  'compatibility.mbti.ESFP-ISTJ.friction': "L'ISTJ vol el pla; l'ESFP vol el moment. L'ISTJ veu caos; l'ESFP veu manca d'alegria.",
  'compatibility.mbti.ESFP-ISTJ.together': "Una parella capaç, viva quan tots dos s'estiren — abrasiva quan tots dos s'atrinxeren.",
  'compatibility.mbti.ESFP-ISTJ.practice': "L'ISTJ ha de permetre improvisació. L'ESFP ha d'honrar l'estructura acordada.",

  'compatibility.mbti.ESFP-ISTP.dynamic': "Dos tipus que usen Se — tots dos vius al moment, tots dos orientats a l'acció. L'ESFP escalfa l'ISTP; l'ISTP aterra l'ESFP.",
  'compatibility.mbti.ESFP-ISTP.friction': "L'ESFP vol implicació; l'ISTP vol soledat. L'ESFP persegueix; l'ISTP es retira.",
  'compatibility.mbti.ESFP-ISTP.together': "Una parella capaç, orientada a l'acció — forta en aventures, feble en vocabulari emocional.",
  'compatibility.mbti.ESFP-ISTP.practice': "L'ISTP ha de verbalitzar. L'ESFP ha de llegir presència com a cura.",

  'compatibility.mbti.ESTJ-ESTJ.dynamic': "Dos executius — eficiència, logística i estàndards clars s'alineen sense traducció.",
  'compatibility.mbti.ESTJ-ESTJ.friction': "Tots dos volen ser la veu que decideix. El poder es disputa directament i sovint.",
  'compatibility.mbti.ESTJ-ESTJ.together': "Una parella capaç, jeràrquica, tradicional — forta en resultats, feble en amplada de banda emocional.",
  'compatibility.mbti.ESTJ-ESTJ.practice': "Tots dos han de fer torns en cedir. La força no és el problema; la flexibilitat ho és.",

  'compatibility.mbti.ESTJ-ESTP.dynamic': "Tots dos són pràctics, orientats a l'acció, enfocats a resultats. Les coses es fan.",
  'compatibility.mbti.ESTJ-ESTP.friction': "L'ESTJ vol el pla executat; l'ESTP improvisa tàcticament. L'ESTJ llegeix caos; l'ESTP llegeix rigidesa.",
  'compatibility.mbti.ESTJ-ESTP.together': "Una parella capaç, impulsada per l'acció — forta en moviment, feble en arcs llargs.",
  'compatibility.mbti.ESTJ-ESTP.practice': "L'ESTJ ha de permetre improvisació tàctica. L'ESTP ha d'honrar el pla estratègic.",

  'compatibility.mbti.ESTJ-INFJ.dynamic': "L'ESTJ executa; l'INFJ visiona. Complementarietat real quan tots dos honren el que aporta l'altre.",
  'compatibility.mbti.ESTJ-INFJ.friction': "L'ESTJ vol acció; l'INFJ vol profunditat. L'ESTJ passa per damunt; l'INFJ es retira.",
  'compatibility.mbti.ESTJ-INFJ.together': "Una parella capaç, sovint emocionalment desigual — forta en logística, feble en calor.",
  'compatibility.mbti.ESTJ-INFJ.practice': "L'ESTJ ha d'esperar la intuïció completa de l'INFJ. L'INFJ ha d'aterrar una opinió sobre la qual l'ESTJ pugui actuar.",

  'compatibility.mbti.ESTJ-INFP.dynamic': "Una parella polar — piles cognitives oposades. L'ESTJ aporta estructura; l'INFP aporta valors. Quan funciona, hi ha transformació.",
  'compatibility.mbti.ESTJ-INFP.friction': "L'ESTJ vol acció; l'INFP necessita alineació amb valors primer. ESTJ llegeix l'INFP com a evasiu; INFP llegeix l'ESTJ com a corró compressor.",
  'compatibility.mbti.ESTJ-INFP.together': "Una parella d'alta amplitud — abrasiva sense esforç.",
  'compatibility.mbti.ESTJ-INFP.practice': "L'ESTJ ha de frenar per a l'examen de valors. L'INFP ha de lliurar propers passos concrets.",

  'compatibility.mbti.ESTJ-INTJ.dynamic': "Tots dos són tipus que usen Te — eficiència i estàndards clars s'alineen. L'INTJ subministra estratègia; l'ESTJ subministra execució.",
  'compatibility.mbti.ESTJ-INTJ.friction': "L'ESTJ vol el mètode provat; l'INTJ vol l'òptim. L'ESTJ resisteix el canvi; l'INTJ l'empeny.",
  'compatibility.mbti.ESTJ-INTJ.together': "Una parella capaç, productiva — forta en sistemes, feble en calor emocional.",
  'compatibility.mbti.ESTJ-INTJ.practice': "L'ESTJ ha d'implicar-se amb l'evidència de l'INTJ per al canvi. L'INTJ ha d'argumentar abans d'empènyer.",

  'compatibility.mbti.ESTJ-INTP.dynamic': "L'INTP subministra el model; l'ESTJ subministra el desplegament. Respecte mutu per la capacitat.",
  'compatibility.mbti.ESTJ-INTP.friction': "L'ESTJ vol acció; l'INTP vol més anàlisi. L'ESTJ empeny; l'INTP es retira més al model.",
  'compatibility.mbti.ESTJ-INTP.together': "Una parella capaç, de poca emoció — forta en sistemes, feble en cura relacional.",
  'compatibility.mbti.ESTJ-INTP.practice': "L'ESTJ ha de donar a l'INTP temps de procés. L'INTP ha de lliurar abans que sigui perfecte.",

  'compatibility.mbti.ESTJ-ISFJ.dynamic': "Dos SJ — deure, família, tradició. Els rols es divideixen naturalment; la casa funciona.",
  'compatibility.mbti.ESTJ-ISFJ.friction': "L'ESTJ per defecte va a la logística; l'ISFJ per defecte va a la cura. L'ESTJ se sent renyat per sentiments; l'ISFJ se sent atropellat.",
  'compatibility.mbti.ESTJ-ISFJ.together': "Una parella tradicional, fiable — forta en compromís, feble en vocabulari emocional.",
  'compatibility.mbti.ESTJ-ISFJ.practice': "L'ESTJ ha de reconèixer els sentiments com a dades. L'ISFJ ha d'afirmar preferències en veu alta.",

  'compatibility.mbti.ESTJ-ISFP.dynamic': "L'ESTJ estructura l'extern; l'ISFP sosté el nucli de valors. Complementarietat real quan s'honra.",
  'compatibility.mbti.ESTJ-ISFP.friction': "L'ESTJ pressiona per decisions; l'ISFP necessita sentir els valors. L'ESTJ passa per damunt; l'ISFP es retira.",
  'compatibility.mbti.ESTJ-ISFP.together': "Una parella estranya quan tots dos flexibilitzen; difícil quan no.",
  'compatibility.mbti.ESTJ-ISFP.practice': "L'ESTJ ha de consultar l'ISFP. L'ISFP ha de treure a la llum l'examen de valors abans de ser atropellat.",

  'compatibility.mbti.ESTJ-ISTJ.dynamic': "Dos SJ amb estàndards compartits — deure, fiabilitat, fer les coses de la manera correcta. Les operacions funcionen.",
  'compatibility.mbti.ESTJ-ISTJ.friction': "Tots dos creuen saber el mètode correcte. Els desacords sobre estàndards es tornen rígids ràpid.",
  'compatibility.mbti.ESTJ-ISTJ.together': "Una parella capaç, tradicional, fiable — forta en seguiment, feble en flexibilitat.",
  'compatibility.mbti.ESTJ-ISTJ.practice': "Tots dos han d'implicar-se amb noves evidències pels seus mèrits, no per familiaritat.",

  'compatibility.mbti.ESTJ-ISTP.dynamic': "L'ESTJ comanda; l'ISTP executa — però només en els seus termes. Hi ha respecte mutu per la competència.",
  'compatibility.mbti.ESTJ-ISTP.friction': "L'ESTJ vol compliment; l'ISTP vol autonomia. L'ESTJ empeny; l'ISTP es desconnecta.",
  'compatibility.mbti.ESTJ-ISTP.together': "Una parella capaç, de poca emoció — forta en producció, feble en calor.",
  'compatibility.mbti.ESTJ-ISTP.practice': "L'ESTJ ha de concedir autonomia a l'ISTP. L'ISTP ha de treure a la llum el desacord en lloc de quedar-se callat.",

  'compatibility.mbti.ESTP-ESTP.dynamic': "Dos emprenedors — la vida és ràpida, viva i compromesa amb el món. Les aventures es multipliquen.",
  'compatibility.mbti.ESTP-ESTP.friction': "Cap para. Quan alguna cosa fa mal, tots dos pivoten cap a l'acció; la capa emocional mai no es cuida.",
  'compatibility.mbti.ESTP-ESTP.together': "Una parella brillant, impulsada per l'acció — forta en moviment, feble en profunditat.",
  'compatibility.mbti.ESTP-ESTP.practice': "Tots dos han de parar i sentir abans de pivotar.",

  'compatibility.mbti.ESTP-INFJ.dynamic': "Parella polar — la profunditat de l'INFJ troba la immediatesa de l'ESTP. Cadascú és el punt cec de l'altre. Magnètica quan funciona.",
  'compatibility.mbti.ESTP-INFJ.friction': "L'INFJ vol reflexió; l'ESTP vol acció. L'INFJ es retira; l'ESTP s'avorreix.",
  'compatibility.mbti.ESTP-INFJ.together': "Una parella d'alta amplitud — transformadora quan funciona, fràgil quan no.",
  'compatibility.mbti.ESTP-INFJ.practice': "L'INFJ ha de pujar. L'ESTP ha de frenar per a la conversa de sentit.",

  'compatibility.mbti.ESTP-INFP.dynamic': "L'ESTP porta el món a l'INFP; l'INFP porta profunditat a l'ESTP. Complementarietat real quan tots dos l'honren.",
  'compatibility.mbti.ESTP-INFP.friction': "L'ESTP actua; l'INFP sent primer. ESTP llegeix l'INFP com a pensar de més; INFP llegeix l'ESTP com a superficial.",
  'compatibility.mbti.ESTP-INFP.together': "Una parella estranya — funciona quan tots dos s'inclinen l'un cap a l'altre.",
  'compatibility.mbti.ESTP-INFP.practice': "L'ESTP ha de frenar per al processament de l'INFP. L'INFP ha d'implicar-se amb el món al qual l'ESTP el convida.",

  'compatibility.mbti.ESTP-INTJ.dynamic': "Tots dos tenen Ni i Se a les seves piles però en arranjaments oposats — l'INTJ aporta l'arc llarg, l'ESTP aporta la lectura en directe. Pot desenvolupar-se respecte real.",
  'compatibility.mbti.ESTP-INTJ.friction': "L'INTJ vol el pla compromès; l'ESTP vol llibertat tàctica. L'INTJ atropella; l'ESTP improvisa al voltant del pla.",
  'compatibility.mbti.ESTP-INTJ.together': "Una parella formidable quan s'honra — estratègic i tàctic fusionats.",
  'compatibility.mbti.ESTP-INTJ.practice': "L'INTJ ha de concedir autonomia tàctica. L'ESTP ha d'honrar el marc estratègic.",

  'compatibility.mbti.ESTP-INTP.dynamic': "Tots dos són tipus que usen Ti — els models lògics i la competència són llengües mútues. Converses afilades; el vincle és sense pelussa.",
  'compatibility.mbti.ESTP-INTP.friction': "L'ESTP vol acció; l'INTP vol anàlisi. L'ESTP s'impacienta; l'INTP se sent apressat.",
  'compatibility.mbti.ESTP-INTP.together': "Una parella capaç, intel·lectualment honesta — forta en sistemes, feble en cura emocional.",
  'compatibility.mbti.ESTP-INTP.practice': "L'ESTP ha de donar a l'INTP temps de procés. L'INTP ha de lliurar abans que sigui perfecte.",

  'compatibility.mbti.ESTP-ISFJ.dynamic': "L'ISFJ aporta estabilitat i cura; l'ESTP aporta vida i emoció. Calor real quan tots dos l'honren.",
  'compatibility.mbti.ESTP-ISFJ.friction': "L'ESTP vol ara; l'ISFJ vol fiable. L'ESTP se sent constret; l'ISFJ se sent desestabilitzat.",
  'compatibility.mbti.ESTP-ISFJ.together': "Una parella càlida, viva — forta quan tots dos flexibilitzen, abrasiva quan tots dos s'atrinxeren.",
  'compatibility.mbti.ESTP-ISFJ.practice': "L'ESTP ha d'honrar les necessitats de fiabilitat de l'ISFJ. L'ISFJ ha de permetre improvisació.",

  'compatibility.mbti.ESTP-ISFP.dynamic': "Dos tipus que usen Se — moment present, conscients del cos, orientats a l'acció. L'ESTP escalfa l'ISFP; l'ISFP aterra l'ESTP.",
  'compatibility.mbti.ESTP-ISFP.friction': "L'ESTP vol implicació; l'ISFP vol soledat. L'ESTP persegueix; l'ISFP es retira.",
  'compatibility.mbti.ESTP-ISFP.together': "Una parella capaç, orientada al present — forta en experiència compartida, feble en vocabulari emocional.",
  'compatibility.mbti.ESTP-ISFP.practice': "L'ISFP ha de verbalitzar. L'ESTP ha de llegir presència com a cura.",

  'compatibility.mbti.ESTP-ISTJ.dynamic': "L'ISTJ aporta fiabilitat; l'ESTP aporta emoció. Complementarietat real quan tots dos l'honren.",
  'compatibility.mbti.ESTP-ISTJ.friction': "L'ISTJ vol el pla; l'ESTP vol el moment. ISTJ llegeix caos; ESTP llegeix rigidesa.",
  'compatibility.mbti.ESTP-ISTJ.together': "Una parella capaç — funciona quan tots dos flexibilitzen cap al mig.",
  'compatibility.mbti.ESTP-ISTJ.practice': "L'ISTJ ha de permetre improvisació. L'ESTP ha d'honrar l'estructura acordada.",

  'compatibility.mbti.ESTP-ISTP.dynamic': "Dos tipus Se-Ti — tots dos orientats a l'acció i impulsats per competència. El vincle té fluïdesa física i intel·lectual inusual.",
  'compatibility.mbti.ESTP-ISTP.friction': "Cap és bo amb la capa emocional. Quan alguna cosa fa mal, tots dos pivoten cap a acció o cap a soledat.",
  'compatibility.mbti.ESTP-ISTP.together': "Una parella capaç, impulsada per l'acció — forta en fer, feble en parlar-ne.",
  'compatibility.mbti.ESTP-ISTP.practice': "Tots dos han de verbalitzar abans de retirar-se.",

  'compatibility.mbti.INFJ-INFJ.dynamic': "Dos advocats es reconeixen immediatament. Les converses van profundes sense xerrameca; l'enteniment mutu és rar i ràpid.",
  'compatibility.mbti.INFJ-INFJ.friction': "Tots dos es retiren a processar; cap inicia el retorn. Dies de silenci es tornen setmanes.",
  'compatibility.mbti.INFJ-INFJ.together': "Una parella profundament sintonitzada, a vegades massa quieta — radiant en connexió, fràgil en aïllament.",
  'compatibility.mbti.INFJ-INFJ.practice': "Un ha de trencar el silenci primer. Per defecte al retorn; l'altre no està retenint, només processant.",

  'compatibility.mbti.INFJ-INFP.dynamic': "Dos tipus intuïtius sentintes — profunditat, sentit i autenticitat són llengües mútues. Enteniment real.",
  'compatibility.mbti.INFJ-INFP.friction': "L'INFJ actua sobre la visió; l'INFP refusa actuar fins que els valors estiguin alineats. L'INFJ se sent retingut; l'INFP se sent apressat.",
  'compatibility.mbti.INFJ-INFP.together': "Una parella tendra, idealista — forta en sentit compartit, feble en execució.",
  'compatibility.mbti.INFJ-INFP.practice': "L'INFJ ha d'esperar l'examen de valors de l'INFP. L'INFP ha d'aterrar una posició.",

  'compatibility.mbti.INFJ-INTJ.dynamic': "Tots dos són Ni-doms — visió, abstracció i arcs llargs són llengües maternes mútues. La relació té profunditat inusual des del primer dia.",
  'compatibility.mbti.INFJ-INTJ.friction': "L'INFJ lidera amb persones; l'INTJ lidera amb sistemes. INTJ llegeix l'INFJ com a tou; INFJ llegeix l'INTJ com a fred.",
  'compatibility.mbti.INFJ-INTJ.together': "Una parella profundament sintonitzada, intel·lectualment rigorosa — forta en profunditat i abast.",
  'compatibility.mbti.INFJ-INTJ.practice': "L'INTJ ha de considerar dades relacionals. L'INFJ ha d'argumentar lògicament quan cal.",

  'compatibility.mbti.INFJ-INTP.dynamic': "L'INTP subministra el model; l'INFJ subministra el sentit. Tots dos són pensadors introvertits en claus diferents.",
  'compatibility.mbti.INFJ-INTP.friction': "L'INFJ vol implicació emocional; l'INTP vol implicació d'idees. Diferents formes d'intimitat poden desajustar-se.",
  'compatibility.mbti.INFJ-INTP.together': "Una parella silenciosa, intel·lectualment profunda — forta en conversa, feble en articulació emocional.",
  'compatibility.mbti.INFJ-INTP.practice': "L'INTP ha de treure a la llum sentiments, no només pensaments. L'INFJ ha d'implicar-se amb el desacord lògic sense prendre-ho personalment.",

  'compatibility.mbti.INFJ-ISFJ.dynamic': "Dos tipus Fe auxiliars — la cura per les persones és compartida. L'ISFJ sosté el pràctic; l'INFJ sosté el sentit.",
  'compatibility.mbti.INFJ-ISFJ.friction': "L'INFJ pressiona per visió; l'ISFJ sosté tradició. L'INFJ desestabilitza; l'ISFJ resisteix.",
  'compatibility.mbti.INFJ-ISFJ.together': "Una parella càlida, suau — forta en cura, a vegades feble en direcció.",
  'compatibility.mbti.INFJ-ISFJ.practice': "L'INFJ ha d'honrar el que l'ISFJ manté viu. L'ISFJ ha d'implicar-se amb la vista més llarga de l'INFJ.",

  'compatibility.mbti.INFJ-ISFP.dynamic': "Tots dos són silenciosos, profunds, impulsats per valors. L'ISFP porta presència sensual; l'INFJ porta arquitectura interior.",
  'compatibility.mbti.INFJ-ISFP.friction': "L'INFJ vol profunditat verbal; l'ISFP mostra profunditat a través del ser. L'INFJ pressiona per paraules; l'ISFP es retira.",
  'compatibility.mbti.INFJ-ISFP.together': "Una parella suau, íntima — forta en valors compartits, feble en processament verbal.",
  'compatibility.mbti.INFJ-ISFP.practice': "L'INFJ ha de llegir presència com a profunditat. L'ISFP ha d'usar paraules a vegades.",

  'compatibility.mbti.INFJ-ISTJ.dynamic': "L'ISTJ aporta estabilitat i fiabilitat; l'INFJ aporta profunditat i direcció. Complementarietat real quan s'honra.",
  'compatibility.mbti.INFJ-ISTJ.friction': "L'ISTJ vol el mètode provat; l'INFJ vol la nova visió. L'ISTJ resisteix; l'INFJ es retira.",
  'compatibility.mbti.INFJ-ISTJ.together': "Una parella fiable, de combustió lenta — forta en compromís, feble en tempo.",
  'compatibility.mbti.INFJ-ISTJ.practice': "L'ISTJ ha d'implicar-se amb la visió de l'INFJ. L'INFJ ha d'honrar el que l'ISTJ manté funcionant.",

  'compatibility.mbti.INFJ-ISTP.dynamic': "Dos tipus introvertits — la soledat es comparteix sense tensió. L'ISTP porta immediatesa pràctica; l'INFJ porta intuïció profunda.",
  'compatibility.mbti.INFJ-ISTP.friction': "L'INFJ vol implicació emocional; l'ISTP vol implicació amb problemes. Diferents intimitats no tradueixen.",
  'compatibility.mbti.INFJ-ISTP.together': "Una parella silenciosa — funciona quan l'ISTP apareix de forma consistent i l'INFJ no pressiona per intimitat verbal.",
  'compatibility.mbti.INFJ-ISTP.practice': "L'ISTP ha de verbalitzar sentiment a vegades. L'INFJ ha de llegir l'acció com a amor.",

  'compatibility.mbti.INFP-INFP.dynamic': "Dos mediadors es reconeixen a l'instant. Valors, profunditat i autenticitat són suposicions compartides.",
  'compatibility.mbti.INFP-INFP.friction': "Tots dos es retiren en lloc de confrontar. Els ressentiments s'acumulen dins; res no surt a la superfície.",
  'compatibility.mbti.INFP-INFP.together': "Una parella tendra, idealista, a vegades massa quieta — forta en valors, feble en conflicte.",
  'compatibility.mbti.INFP-INFP.practice': "Tots dos han de treure a la llum la cosa difícil abans que fermenti.",

  'compatibility.mbti.INFP-INTJ.dynamic': "L'INTJ aporta estructura; l'INFP aporta valors. Hi ha atracció real aquí — oposats en formes diferents.",
  'compatibility.mbti.INFP-INTJ.friction': "L'INTJ optimitza; l'INFP necessita alineació. L'INTJ passa per damunt; l'INFP es retira.",
  'compatibility.mbti.INFP-INTJ.together': "Una parella complementària quan tots dos s'inclinen — abrasiva quan tots dos no.",
  'compatibility.mbti.INFP-INTJ.practice': "L'INTJ ha de frenar per a l'examen de valors. L'INFP ha de lliurar accions concretes.",

  'compatibility.mbti.INFP-INTP.dynamic': "Tots dos són tipus introvertits, impulsats per idees — la soledat es comparteix sense tensió. Les converses van profundes a l'espai de possibilitats.",
  'compatibility.mbti.INFP-INTP.friction': "L'INFP processa a través de valors; l'INTP processa a través de lògica. Diferents metabolismes creen males lectures.",
  'compatibility.mbti.INFP-INTP.together': "Una parella silenciosa, intel·lectualment càlida — forta en interioritat compartida, feble en acció.",
  'compatibility.mbti.INFP-INTP.practice': "Tots dos han de sortir i executar, no només pensar i sentir.",

  'compatibility.mbti.INFP-ISFJ.dynamic': "Tots dos són silenciosos, cuidadors, impulsats per valors. L'ISFJ aporta cura pràctica; l'INFP aporta sentit.",
  'compatibility.mbti.INFP-ISFJ.friction': "L'ISFJ vol tradició; l'INFP vol autenticitat. L'ISFJ se sent desestabilitzat; l'INFP se sent constret.",
  'compatibility.mbti.INFP-ISFJ.together': "Una parella suau, càlida — forta en cura compartida, feble en negociació.",
  'compatibility.mbti.INFP-ISFJ.practice': "L'ISFJ ha de permetre que els valors anul·lin la tradició a vegades. L'INFP ha d'honrar els rituals.",

  'compatibility.mbti.INFP-ISFP.dynamic': "Dos Fi-doms — els valors s'alineen ràpid i profund. Tots dos valoren l'autenticitat; tots dos odien l'actuació.",
  'compatibility.mbti.INFP-ISFP.friction': "Tots dos es retiren sota estrès. Cap inicia la conversa dura.",
  'compatibility.mbti.INFP-ISFP.together': "Una parella tendra, alineada en valors — forta en autenticitat, feble en iniciativa.",
  'compatibility.mbti.INFP-ISFP.practice': "Tots dos han de treure a la llum el desacord abans que visqui en silenci.",

  'compatibility.mbti.INFP-ISTJ.dynamic': "L'ISTJ aporta estructura i fiabilitat; l'INFP aporta profunditat de valors. Complementarietat real quan s'honra.",
  'compatibility.mbti.INFP-ISTJ.friction': "L'ISTJ vol el provat; l'INFP vol el significatiu. L'ISTJ se sent desestabilitzat; l'INFP se sent constret.",
  'compatibility.mbti.INFP-ISTJ.together': "Una parella fiable, de combustió lenta — forta en compromís, fràgil en tempo.",
  'compatibility.mbti.INFP-ISTJ.practice': "L'ISTJ ha d'implicar-se amb valors, no només fets. L'INFP ha d'honrar l'estructura, no només sentir-hi sobre.",

  'compatibility.mbti.INFP-ISTP.dynamic': "Tots dos són introvertits, sense pelussa, impulsats per valors en claus diferents. La companyia silenciosa és mútua.",
  'compatibility.mbti.INFP-ISTP.friction': "L'INFP vol implicació emocional; l'ISTP vol implicació amb problemes. Diferents intimitats no tradueixen fàcilment.",
  'compatibility.mbti.INFP-ISTP.together': "Una parella silenciosa, idiosincràtica — forta en soledat compartida, feble en intimitat verbal.",
  'compatibility.mbti.INFP-ISTP.practice': "L'INFP ha de llegir l'acció com a amor. L'ISTP ha de verbalitzar a vegades.",

  'compatibility.mbti.INTJ-INTJ.dynamic': "Dos arquitectes — estratègia, abstracció i arcs llargs s'alineen sense traducció. El pla existeix abans de la conversa.",
  'compatibility.mbti.INTJ-INTJ.friction': "Tots dos creuen tenir raó; tots dos passen per damunt. Els conflictes es refreden ràpid.",
  'compatibility.mbti.INTJ-INTJ.together': "Una parella formidable, intel·lectualment alineada — forta en sistemes, feble en vocabulari emocional.",
  'compatibility.mbti.INTJ-INTJ.practice': "Tots dos han d'implicar-se amb el raonament de l'altre sense menyspreu. Estar equivocat a vegades expressament.",

  'compatibility.mbti.INTJ-INTP.dynamic': "Tots dos NT, tots dos introvertits, tots dos abstractes. Les converses cobreixen terreny on altres no arriben. Respecte mutu per la capacitat.",
  'compatibility.mbti.INTJ-INTP.friction': "L'INTJ vol tancament; l'INTP vol el model perfeccionat. INTJ pressiona; INTP refusa lliurar.",
  'compatibility.mbti.INTJ-INTP.together': "Una parella silenciosament poderosa — forta en sistemes, feble en cura emocional.",
  'compatibility.mbti.INTJ-INTP.practice': "L'INTJ ha de deixar respirar el model. L'INTP ha de comprometre's amb una versió.",

  'compatibility.mbti.INTJ-ISFJ.dynamic': "L'ISFJ aporta estabilitat relacional i pràctica; l'INTJ aporta direcció. Complementarietat real quan s'honra.",
  'compatibility.mbti.INTJ-ISFJ.friction': "L'INTJ passa per damunt; l'ISFJ silenciosament accepta el cop. L'INTJ no veu el cost; l'ISFJ no el treu a la llum.",
  'compatibility.mbti.INTJ-ISFJ.together': "Una parella capaç però emocionalment desigual — forta en rols, feble en negociació.",
  'compatibility.mbti.INTJ-ISFJ.practice': "L'INTJ ha de consultar abans de decidir per tots dos. L'ISFJ ha d'afirmar preferències en veu alta.",

  'compatibility.mbti.INTJ-ISFP.dynamic': "L'INTJ aporta arc llarg; l'ISFP aporta nucli de valors. Cadascú és la funció inferior de l'altre — atracció real aquí.",
  'compatibility.mbti.INTJ-ISFP.friction': "L'INTJ planeja; l'ISFP sent. L'INTJ passa per damunt; l'ISFP es retira.",
  'compatibility.mbti.INTJ-ISFP.together': "Una parella estranya quan tots dos flexibilitzen — distant quan no.",
  'compatibility.mbti.INTJ-ISFP.practice': "L'INTJ ha de frenar per als valors. L'ISFP ha de treure a la llum l'examen de valors verbalment.",

  'compatibility.mbti.INTJ-ISTJ.dynamic': "Tots dos introvertits, tots dos estratègics i fiables en formes diferents. Respecte mutu per la capacitat.",
  'compatibility.mbti.INTJ-ISTJ.friction': "L'INTJ vol canvi; l'ISTJ vol el provat. L'INTJ empeny; l'ISTJ es tiba.",
  'compatibility.mbti.INTJ-ISTJ.together': "Una parella capaç, fiable — forta en seguiment, feble en innovació.",
  'compatibility.mbti.INTJ-ISTJ.practice': "L'INTJ ha d'argumentar el canvi. L'ISTJ ha d'implicar-se amb noves evidències.",

  'compatibility.mbti.INTJ-ISTP.dynamic': "Tots dos silenciosos, capaços, sense pelussa. Respecte mutu per la competència; poca necessitat de calor verbal.",
  'compatibility.mbti.INTJ-ISTP.friction': "L'INTJ vol el pla compromès; l'ISTP vol llibertat tàctica. L'INTJ empeny; l'ISTP es desconnecta.",
  'compatibility.mbti.INTJ-ISTP.together': "Una parella capaç, silenciosa — forta en fer, feble en parlar-ne.",
  'compatibility.mbti.INTJ-ISTP.practice': "L'INTJ ha de concedir autonomia. L'ISTP ha de treure a la llum el desacord abans de quedar-se callat.",

  'compatibility.mbti.INTP-INTP.dynamic': "Dos lògics — models interns, joc d'idees i pensament rigorós són llengües maternes compartides.",
  'compatibility.mbti.INTP-INTP.friction': "Tots dos es retiren a pensar; cap inicia el retorn. Dies es tornen setmanes.",
  'compatibility.mbti.INTP-INTP.together': "Una parella silenciosa, intel·lectualment rigorosa — forta en sistemes, feble en articulació emocional.",
  'compatibility.mbti.INTP-INTP.practice': "Un dels dos ha de trencar el silenci primer. Per defecte a l'abast; l'altre no està retenint, només pensant.",

  'compatibility.mbti.INTP-ISFJ.dynamic': "L'ISFJ aporta cura i continuïtat; l'INTP aporta profunditat intel·lectual. Cadascú porta el que l'altre no.",
  'compatibility.mbti.INTP-ISFJ.friction': "L'ISFJ vol implicació; l'INTP vol soledat. L'ISFJ persegueix; l'INTP es retira.",
  'compatibility.mbti.INTP-ISFJ.together': "Una parella suau, complementària quan tots dos flexibilitzen.",
  'compatibility.mbti.INTP-ISFJ.practice': "L'ISFJ ha de concedir soledat sense pànic. L'INTP ha de tornar de la cova a temps.",

  'compatibility.mbti.INTP-ISFP.dynamic': "Tots dos són tipus silenciosos, interns, sense pelussa. L'ISFP porta valors; l'INTP porta models.",
  'compatibility.mbti.INTP-ISFP.friction': "Tots dos es retiren sota estrès. Cap inicia el retorn.",
  'compatibility.mbti.INTP-ISFP.together': "Una parella silenciosa — forta en interioritat compartida, feble en iniciativa.",
  'compatibility.mbti.INTP-ISFP.practice': "Un dels dos ha de fer la petita oferta de connexió regularment.",

  'compatibility.mbti.INTP-ISTJ.dynamic': "L'ISTJ executa; l'INTP analitza. Complementarietat real quan s'honra.",
  'compatibility.mbti.INTP-ISTJ.friction': "L'ISTJ vol el mètode provat; l'INTP vol el millor model. L'ISTJ resisteix; l'INTP es retira.",
  'compatibility.mbti.INTP-ISTJ.together': "Una parella capaç, de combustió lenta — forta en sistemes, feble en tempo.",
  'compatibility.mbti.INTP-ISTJ.practice': "L'ISTJ ha d'implicar-se amb noves evidències. L'INTP ha de lliurar abans que sigui perfecte.",

  'compatibility.mbti.INTP-ISTP.dynamic': "Dos Ti-doms — els models lògics i la competència són compartits. Silenciosos, capaços, mútuament respectuosos.",
  'compatibility.mbti.INTP-ISTP.friction': "Tots dos es retiren als seus respectius móns. Cap inicia el retorn.",
  'compatibility.mbti.INTP-ISTP.together': "Una parella silenciosa, capaç — forta en sistemes compartits, feble en cura emocional.",
  'compatibility.mbti.INTP-ISTP.practice': "Un ha de trencar el silenci primer. Per defecte a l'abast.",

  'compatibility.mbti.ISFJ-ISFJ.dynamic': "Dos defensors — cura, tradició, fiabilitat i devoció silenciosa són compartides. La casa és estable.",
  'compatibility.mbti.ISFJ-ISFJ.friction': "Tots dos prefereixen l'harmonia a l'honestedat. Els ressentiments s'acumulen en silenci durant anys.",
  'compatibility.mbti.ISFJ-ISFJ.together': "Una parella càlida, fiable, profundament tradicional — forta en estabilitat, feble en converses dures.",
  'compatibility.mbti.ISFJ-ISFJ.practice': "Tots dos han d'arriscar la veritat indesitjada. La supressió és més perillosa que el desacord.",

  'compatibility.mbti.ISFJ-ISFP.dynamic': "Tots dos silenciosos, cuidadors, orientats al present. L'ISFJ sosté el pràctic; l'ISFP sosté l'estètic.",
  'compatibility.mbti.ISFJ-ISFP.friction': "L'ISFJ vol implicació; l'ISFP vol soledat. Tots dos poden retirar-se en silenci.",
  'compatibility.mbti.ISFJ-ISFP.together': "Una parella suau, íntima — forta en cura, feble en iniciativa.",
  'compatibility.mbti.ISFJ-ISFP.practice': "Tots dos han de treure a la llum necessitats abans que el ressentiment s'acumuli.",

  'compatibility.mbti.ISFJ-ISTJ.dynamic': "Dos SJ — deure, família, fiabilitat i rols són compartits. La casa funciona eficientment.",
  'compatibility.mbti.ISFJ-ISTJ.friction': "Tots dos prefereixen la supressió a la confrontació. Tots dos deixen el ressentiment coure.",
  'compatibility.mbti.ISFJ-ISTJ.together': "Una parella fiable, tradicional — forta en compromís, feble en vocabulari emocional.",
  'compatibility.mbti.ISFJ-ISTJ.practice': "Tots dos han de treure a la llum la cosa difícil abans que es podreixi.",

  'compatibility.mbti.ISFJ-ISTP.dynamic': "L'ISFJ aporta cura; l'ISTP aporta competència tranquil·la. Els rols es divideixen naturalment.",
  'compatibility.mbti.ISFJ-ISTP.friction': "L'ISFJ vol implicació; l'ISTP vol soledat. L'ISFJ persegueix; l'ISTP es retira.",
  'compatibility.mbti.ISFJ-ISTP.together': "Una parella silenciosa, capaç — forta en rols, feble en vocabulari emocional.",
  'compatibility.mbti.ISFJ-ISTP.practice': "L'ISTP ha de verbalitzar. L'ISFJ ha de concedir silenci.",

  'compatibility.mbti.ISFP-ISFP.dynamic': "Dos aventurers — autenticitat de valors i presència estètica són compartides. La soledat junts és el llenguatge de l'amor.",
  'compatibility.mbti.ISFP-ISFP.friction': "Tots dos es retiren en lloc de confrontar. Els conflictes van sota terra i hi queden.",
  'compatibility.mbti.ISFP-ISFP.together': "Una parella suau, estètica — forta en presència compartida, feble en iniciativa.",
  'compatibility.mbti.ISFP-ISFP.practice': "Tots dos han de treure a la llum el desacord en veu alta, fins i tot quan se sent groller.",

  'compatibility.mbti.ISFP-ISTJ.dynamic': "L'ISTJ aporta fiabilitat; l'ISFP aporta valors i estètica. Complementarietat real quan s'honra.",
  'compatibility.mbti.ISFP-ISTJ.friction': "L'ISTJ vol el provat; l'ISFP necessita que els valors se sentin bé. L'ISTJ passa per damunt; l'ISFP es retira.",
  'compatibility.mbti.ISFP-ISTJ.together': "Una parella silenciosa, fiable — forta en compromís, feble en negociació.",
  'compatibility.mbti.ISFP-ISTJ.practice': "L'ISTJ ha d'implicar-se amb valors. L'ISFP ha de treure a la llum l'examen de valors en veu alta.",

  'compatibility.mbti.ISFP-ISTP.dynamic': "Dos introvertits que usen Se — moment present, conscients del cos, sense pelussa. Respecte mutu per poder simplement ser.",
  'compatibility.mbti.ISFP-ISTP.friction': "Tots dos es retiren sota estrès. Cap inicia el retorn.",
  'compatibility.mbti.ISFP-ISTP.together': "Una parella silenciosa, d'acció i estètica — forta en experiència compartida, feble en vocabulari emocional.",
  'compatibility.mbti.ISFP-ISTP.practice': "Tots dos han de fer petites ofertes de connexió abans que s'assenti el silenci.",

  'compatibility.mbti.ISTJ-ISTJ.dynamic': "Dos logístics — deure, fiabilitat i estàndards s'alineen sense traducció. La casa funciona.",
  'compatibility.mbti.ISTJ-ISTJ.friction': "Tots dos creuen saber el mètode correcte. Els desacords es tornen rígids ràpid.",
  'compatibility.mbti.ISTJ-ISTJ.together': "Una parella tradicional, fiable — forta en seguiment, feble en flexibilitat.",
  'compatibility.mbti.ISTJ-ISTJ.practice': "Tots dos han d'implicar-se amb noves evidències pels seus mèrits.",

  'compatibility.mbti.ISTJ-ISTP.dynamic': "Tots dos silenciosos, capaços, sense pelussa. Respecte mutu per la competència.",
  'compatibility.mbti.ISTJ-ISTP.friction': "L'ISTJ vol el pla provat; l'ISTP vol llibertat tàctica. L'ISTJ empeny; l'ISTP es desconnecta.",
  'compatibility.mbti.ISTJ-ISTP.together': "Una parella silenciosa, capaç — forta en acció, feble en vocabulari emocional.",
  'compatibility.mbti.ISTJ-ISTP.practice': "L'ISTJ ha de concedir autonomia. L'ISTP ha de treure a la llum el desacord abans del silenci.",

  'compatibility.mbti.ISTP-ISTP.dynamic': "Dos virtuosos — competència, autonomia i presència silenciosa s'alineen. La soledat costat a costat és el llenguatge de l'amor.",
  'compatibility.mbti.ISTP-ISTP.friction': "Tots dos es retiren en lloc de confrontar. Cap inicia la reparació verbal.",
  'compatibility.mbti.ISTP-ISTP.together': "Una parella silenciosa, capaç, sense pelussa — forta en activitat compartida, feble en articulació emocional.",
  'compatibility.mbti.ISTP-ISTP.practice': "Tots dos han de verbalitzar abans de retirar-se. La relació no s'autorepara.",
}
