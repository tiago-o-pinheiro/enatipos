import { translations as en } from './en'
import { type TranslationKey } from './translation.types'

// Spread EN as a fallback so untranslated keys (notably long-form
// compatibility content) display in English until explicitly translated,
// rather than failing the type check.
export const translations: Record<TranslationKey, string> = {
  ...en,
  // Meta
  'meta.title': 'Enatipos — Descobre o teu tipo do Eneagrama',
  'meta.description':
    '9 padrões. 1 mapa. Um teste de autoconhecimento baseado no eneagrama.',

  // Language names
  'language.en': 'Inglês',
  'language.es': 'Espanhol',
  'language.pt': 'Português',
  'language.ca': 'Catalão',
  'language.switcher.aria-label': 'Mudar idioma (atual: ${current})',

  // Intro
  'intro.eyebrow': 'Teste de autoconhecimento',
  'intro.title': 'Eneagrama',
  'intro.subtitle': '9 padrões. 1 mapa.',
  'intro.body.1.before':
    'O eneagrama descreve 9 estruturas de personalidade a partir da ',
  'intro.body.1.em': 'motivação inconsciente',
  'intro.body.1.after':
    ' que te move, não da tua conduta visível. Duas pessoas do mesmo tipo podem parecer muito diferentes por fora e vibrar igual por dentro.',
  'intro.body.2.before': 'São 30 perguntas. Responde a partir do que ',
  'intro.body.2.em': 'sentes',
  'intro.body.2.after':
    ' que te move, não a partir de quem gostarias de ser. Se tiveres dúvidas, escolhe a opção que te incomoda um pouco — é aí que costuma estar a verdade.',
  'intro.start.button': 'Começar',
  'intro.start.aria-label': 'Começar o teste do eneagrama',
  'intro.duration': '≈ 5 minutos',

  // Quiz chrome
  'quiz.back.button': '← Voltar',
  'quiz.back.aria-label': 'Voltar à pergunta anterior',
  'quiz.progress.aria-label': 'Progresso do teste',
  'quiz.option.aria-label': 'Opção ${letter}: ${text}',
  'quiz.diagram.aria-label': 'Diagrama do eneagrama com os nove tipos',

  // Questions
  'quiz.question.1.prompt':
    'A primeira coisa que fazes ao entrar num espaço novo é…',
  'quiz.question.1.option.1':
    'Notar o que poderia ser melhorado ou está fora do lugar.',
  'quiz.question.1.option.2':
    'Reparar em como estão as pessoas, quem precisa de algo.',
  'quiz.question.1.option.3':
    'Procurar oportunidades para ligar-te ou destacar-te.',
  'quiz.question.1.option.4':
    'Sentir se o ambiente ressoa contigo ou te incomoda.',

  'quiz.question.2.prompt': 'Numa situação incerta, costumas…',
  'quiz.question.2.option.1':
    'Retirar-te para observar e compreender antes de te envolveres.',
  'quiz.question.2.option.2': 'Antecipar o que pode correr mal e preparar-te.',
  'quiz.question.2.option.3': 'Procurar o lado divertido ou uma saída nova.',
  'quiz.question.2.option.4': 'Assumir o controlo rapidamente sem hesitar.',

  'quiz.question.3.prompt': 'O que mais te desgasta no dia a dia é…',
  'quiz.question.3.option.1': 'O conflito e a tensão no ambiente.',
  'quiz.question.3.option.2': 'As coisas estarem mal feitas ou serem injustas.',
  'quiz.question.3.option.3': 'Sentir que ninguém te vê nem te valoriza.',
  'quiz.question.3.option.4':
    'Não estar a avançar ou a destacar-te como querias.',

  'quiz.question.4.prompt': 'O teu medo mais profundo pode ser…',
  'quiz.question.4.option.1': 'Não ter identidade nem significado próprio.',
  'quiz.question.4.option.2':
    'Sentires-te vazio, inútil ou ser invadido por outros.',
  'quiz.question.4.option.3': 'Ficar sem apoio, sem segurança, perdido.',
  'quiz.question.4.option.4':
    'Ficar preso na dor, na limitação ou no tédio.',

  'quiz.question.5.prompt': 'Quando algo te incomoda muito, tu…',
  'quiz.question.5.option.1': 'Confrontas de frente sem filtro.',
  'quiz.question.5.option.2': 'Minimizas para manter a paz.',
  'quiz.question.5.option.3': 'Conténs com disciplina e autocontrolo.',
  'quiz.question.5.option.4': 'Acumulas até explodir emocionalmente.',

  'quiz.question.6.prompt':
    'A tua forma mais natural de demonstrar afeto é…',
  'quiz.question.6.option.1':
    'Conseguindo coisas que impressionem ou cuidem do outro.',
  'quiz.question.6.option.2':
    'Partilhando o teu mundo interior único e profundo.',
  'quiz.question.6.option.3':
    'Dando tempo de qualidade, atenção, espaço mental.',
  'quiz.question.6.option.4':
    'Sendo leal, estável, presente incondicionalmente.',

  'quiz.question.7.prompt': 'Quando ninguém te olha, costumas ser…',
  'quiz.question.7.option.1':
    'Muito irrequieto, a saltar entre ideias e planos.',
  'quiz.question.7.option.2': 'Igualmente firme e direto como em público.',
  'quiz.question.7.option.3': 'Mais calmo e ausente do que pareces.',
  'quiz.question.7.option.4': 'Ainda mais autocrítico contigo mesmo.',

  'quiz.question.8.prompt': 'A tua relação com as tuas emoções é que…',
  'quiz.question.8.option.1':
    'Sentes-las por ti e também pelos outros.',
  'quiz.question.8.option.2':
    'Geres-las para que não bloqueiem os teus objetivos.',
  'quiz.question.8.option.3': 'Exploras-las profundamente — vivem contigo.',
  'quiz.question.8.option.4':
    'Observas-las a partir de uma certa distância racional.',

  'quiz.question.9.prompt': 'Num grupo novo, tendes a…',
  'quiz.question.9.option.1': 'Procurar quem é de confiança e coerente.',
  'quiz.question.9.option.2': 'Animar o ambiente com a tua energia.',
  'quiz.question.9.option.3': 'Impor-te naturalmente, falar com força.',
  'quiz.question.9.option.4':
    'Fundires-te sem destacar, seguir a corrente.',

  'quiz.question.10.prompt': 'O que mais valorizas nos outros é…',
  'quiz.question.10.option.1':
    'A sua integridade, coerência entre o que dizem e fazem.',
  'quiz.question.10.option.2': 'O seu calor e disponibilidade para cuidar.',
  'quiz.question.10.option.3':
    'A sua ambição e capacidade de alcançar coisas.',
  'quiz.question.10.option.4': 'A sua profundidade e autenticidade.',

  'quiz.question.11.prompt': 'A tua forma de tomar decisões é…',
  'quiz.question.11.option.1':
    'Analisar toda a informação antes de te comprometeres.',
  'quiz.question.11.option.2': 'Consultar pessoas de confiança.',
  'quiz.question.11.option.3':
    'Explorar múltiplas opções e mantê-las abertas.',
  'quiz.question.11.option.4':
    'Decidir rápido a partir do instinto, sem duvidar.',

  'quiz.question.12.prompt':
    'O tipo de trabalho que mais te preenche é…',
  'quiz.question.12.option.1':
    'Um tranquilo, sem conflito, com bom ambiente.',
  'quiz.question.12.option.2':
    'Um com propósito claro e padrões elevados.',
  'quiz.question.12.option.3':
    'Um onde possas cuidar e ligar-te com pessoas.',
  'quiz.question.12.option.4':
    'Um onde possas destacar-te e crescer profissionalmente.',

  'quiz.question.13.prompt': 'O que mais te incomoda nos outros é…',
  'quiz.question.13.option.1':
    'Serem superficiais ou emocionalmente desajeitados.',
  'quiz.question.13.option.2':
    'Serem invasivos, exigentes ou drenarem a tua energia.',
  'quiz.question.13.option.3': 'Serem desleais ou pouco de confiança.',
  'quiz.question.13.option.4':
    'Serem desmancha-prazeres ou emocionalmente pesados.',

  'quiz.question.14.prompt': 'A tua relação com o dinheiro é que…',
  'quiz.question.14.option.1':
    'É uma fonte de liberdade, autonomia e poder.',
  'quiz.question.14.option.2': 'Não lhe dás demasiada atenção ativa.',
  'quiz.question.14.option.3':
    'Administras-lo com disciplina e responsabilidade.',
  'quiz.question.14.option.4':
    'Também o usas para cuidar das pessoas que amas.',

  'quiz.question.15.prompt': 'Quando algo te dói emocionalmente, tu…',
  'quiz.question.15.option.1':
    'Distrais-te com trabalho, produtividade e conquistas.',
  'quiz.question.15.option.2':
    'Mergulhas dentro do sentimento e habitas-lo.',
  'quiz.question.15.option.3': 'Isolas-te para processar em solidão.',
  'quiz.question.15.option.4':
    'Procuras orientação em alguém de confiança.',

  'quiz.question.16.prompt': 'Ao planear o futuro, tendes a…',
  'quiz.question.16.option.1':
    'Imaginar muitas possibilidades e manter opções.',
  'quiz.question.16.option.2':
    'Assumir o controlo e marcar o rumo com força.',
  'quiz.question.16.option.3':
    'Fluir e ver o que aparece sem forçar.',
  'quiz.question.16.option.4':
    'Planear com detalhe, critério e princípios.',

  'quiz.question.17.prompt':
    'O teu pior defeito, segundo outros, poderia ser…',
  'quiz.question.17.option.1':
    'Ser intrometido ou manipulador afetivamente.',
  'quiz.question.17.option.2': 'Ser vaidoso, competitivo ou impaciente.',
  'quiz.question.17.option.3':
    'Ser dramático ou auto-indulgente emocionalmente.',
  'quiz.question.17.option.4': 'Ser distante, frio ou desligado.',

  'quiz.question.18.prompt':
    'No fundo, mais do que qualquer outra coisa, queres…',
  'quiz.question.18.option.1':
    'Sentir-te seguro, apoiado, com um lugar estável.',
  'quiz.question.18.option.2':
    'Ser livre, estar contente, viver sem limitações.',
  'quiz.question.18.option.3':
    'Ser forte, autónomo, não depender de ninguém.',
  'quiz.question.18.option.4': 'Estar em paz contigo mesmo e com tudo.',

  'quiz.question.19.prompt':
    'Perante uma decisão difícil, guias-te por…',
  'quiz.question.19.option.1':
    'O que sentes que é o correto segundo os teus princípios.',
  'quiz.question.19.option.2':
    'Como afetará as pessoas que amas.',
  'quiz.question.19.option.3':
    'O que te aproxime mais do sucesso que procuras.',
  'quiz.question.19.option.4':
    'O que te pareça mais autêntico e fiel a ti.',

  'quiz.question.20.prompt':
    'Quando conheces alguém novo, notas primeiro…',
  'quiz.question.20.option.1': 'Se é inteligente e respeita o teu espaço.',
  'quiz.question.20.option.2': 'Se é confiável e coerente.',
  'quiz.question.20.option.3':
    'Se é divertido, interessante, com energia.',
  'quiz.question.20.option.4': 'Se é forte, direto, diz a verdade.',

  'quiz.question.21.prompt': 'A tua forma ideal de descansar é…',
  'quiz.question.21.option.1':
    'Não fazer nada, simplesmente ser, desligar.',
  'quiz.question.21.option.2':
    'Organizar o teu espaço, as tuas rotinas, pôr ordem.',
  'quiz.question.21.option.3':
    'Estar com as pessoas que amas, ligar-te.',
  'quiz.question.21.option.4':
    'Avançar num projeto pessoal que te importa.',

  'quiz.question.22.prompt':
    'Quando alguém te critica, a tua primeira reação é…',
  'quiz.question.22.option.1':
    'Sentir como um ataque à tua própria essência.',
  'quiz.question.22.option.2': 'Isolares-te para processar em privado.',
  'quiz.question.22.option.3': 'Duvidar de ti mesmo e consultar outros.',
  'quiz.question.22.option.4':
    'Minimizar, reenquadrar, seguir em frente.',

  'quiz.question.23.prompt': 'O que te faz sentir mais vivo é…',
  'quiz.question.23.option.1':
    'Sentir o teu próprio poder, a tua força plena.',
  'quiz.question.23.option.2': 'Um momento de harmonia total com tudo.',
  'quiz.question.23.option.3':
    'Ver algo bem feito, com qualidade e cuidado.',
  'quiz.question.23.option.4':
    'Sentir que alguém precisa mesmo de ti.',

  'quiz.question.24.prompt': 'No teu tempo livre, preferes…',
  'quiz.question.24.option.1':
    'Avançar em projetos pessoais, produtividade.',
  'quiz.question.24.option.2':
    'Arte, música, reflexão profunda, solidão criativa.',
  'quiz.question.24.option.3':
    'Ler, investigar, explorar ideias complexas.',
  'quiz.question.24.option.4':
    'Estar com o teu círculo próximo, pessoas de confiança.',

  'quiz.question.25.prompt':
    'Algo que os outros não sabem sobre ti é que…',
  'quiz.question.25.option.1':
    'Às vezes a tua alegria tapa um vazio que sentes.',
  'quiz.question.25.option.2':
    'Sentes-te mais vulnerável do que admites.',
  'quiz.question.25.option.3':
    'Tens opiniões e desejos mais fortes do que expressas.',
  'quiz.question.25.option.4':
    'És muito mais duro contigo do que com qualquer outro.',

  'quiz.question.26.prompt': 'A tua forma de comunicar tende a ser…',
  'quiz.question.26.option.1': 'Calorosa, próxima, empática.',
  'quiz.question.26.option.2': 'Clara, motivadora, eficiente.',
  'quiz.question.26.option.3': 'Metafórica, emocional, com nuances.',
  'quiz.question.26.option.4': 'Analítica, precisa, mais reservada.',

  'quiz.question.27.prompt':
    'Quando as coisas não saem como querias, tu…',
  'quiz.question.27.option.1':
    'Consultas outros antes de decidir o que fazer.',
  'quiz.question.27.option.2':
    'Mudas rápido para um plano B mais atrativo.',
  'quiz.question.27.option.3':
    'Empurras com mais força e determinação.',
  'quiz.question.27.option.4':
    'Adaptas-te ao novo cenário sem muito drama.',

  'quiz.question.28.prompt': 'Um lema inconsciente teu poderia ser…',
  'quiz.question.28.option.1':
    '"Há uma forma correta de fazer as coisas."',
  'quiz.question.28.option.2':
    '"Tenho valor quando ajudo e cuido dos outros."',
  'quiz.question.28.option.3':
    '"Tenho valor pelo que consigo e pelo que se vê."',
  'quiz.question.28.option.4':
    '"Sou especial, diferente dos outros."',

  'quiz.question.29.prompt':
    'Uma das tuas maiores lutas internas é…',
  'quiz.question.29.option.1':
    'Sair da tua cabeça e habitar o corpo, o mundo.',
  'quiz.question.29.option.2':
    'Confiar sem duvidar, sem antecipar o perigo.',
  'quiz.question.29.option.3':
    'Ficar com o difícil sem fugir para outra coisa.',
  'quiz.question.29.option.4':
    'Mostrar vulnerabilidade sem te sentires fraco.',

  'quiz.question.30.prompt':
    'O que te faria sentir mais pleno na vida é…',
  'quiz.question.30.option.1':
    'Paz interior real e ligação com tudo o que te rodeia.',
  'quiz.question.30.option.2':
    'Viver plenamente segundo os teus valores mais altos.',
  'quiz.question.30.option.3':
    'Dar amor sem te perderes nisso.',
  'quiz.question.30.option.4':
    'Sucesso real, não só aparente ou externo.',

  // Results chrome
  'results.top-type.eyebrow': 'O teu tipo principal',
  'results.wing.line': 'com asa ${wing} — ${essence}',
  'results.section.essence': 'Essência',
  'results.section.motivation': 'O que te move',
  'results.section.shadow': 'A tua sombra',
  'results.section.gift': 'O teu dom',
  'results.section.key-work': 'Trabalho-chave',
  'results.wing.eyebrow': 'A asa ${wing}',
  'results.wing.description':
    'A tua asa é o tipo adjacente que te matiza. O teu ${top} vive com as cores do ${wing} — ${essence}. Um ${top}w${wing} expressa-se diferente de um ${top}w${other}.',
  'results.top3.eyebrow': 'Os teus 3 tipos dominantes',
  'results.all-types.summary': 'Ver os 9 tipos',
  'results.type-bar.aria-label': 'Pontuação do tipo ${type}',
  'results.restart.button': 'Voltar a fazer o teste',
  'results.home.button': 'Voltar ao início',
  'results.home.aria-label': 'Voltar à página inicial',
  'results.restart.aria-label': 'Voltar a fazer o teste',
  'results.disclaimer.line-1':
    'Este teste é uma ferramenta de exploração, não um diagnóstico.',
  'results.disclaimer.line-2':
    'O teu tipo real confirma-se observando a tua motivação ao longo do tempo.',

  // Enneatype 1
  'enneatype.1.name': 'O Reformador',
  'enneatype.1.subtitle': 'O Perfeccionista',
  'enneatype.1.essence': 'Integridade, disciplina, propósito',
  'enneatype.1.motivation':
    'Viver corretamente, melhorar o que vês, ser bom e útil. A tua bússola interna é forte e exigente.',
  'enneatype.1.shadow':
    'Crítica constante (a ti e aos outros), rigidez, ressentimento quando o mundo não cumpre os teus padrões. Custa-te largar.',
  'enneatype.1.gift':
    'Tens uma clareza moral e uma capacidade de construir com padrões elevados que poucos têm. Quando integras o teu próprio erro, tornas-te sábio.',
  'enneatype.1.key-work':
    'Aprender a descansar. Permitir o imperfeito em ti e nos outros.',

  // Enneatype 2
  'enneatype.2.name': 'O Ajudador',
  'enneatype.2.subtitle': 'O Dador',
  'enneatype.2.essence': 'Empatia, calor, ligação',
  'enneatype.2.motivation':
    'Sentires-te amado, necessário, insubstituível para quem te rodeia. Sintonizas com as emoções alheias quase sem esforço.',
  'enneatype.2.shadow':
    'Esqueces as tuas próprias necessidades, dás para receber amor, cais em manipulação subtil ou no orgulho de "ser o que ajuda".',
  'enneatype.2.gift':
    'A tua capacidade de cuidar e de ler o outro é real e poderosa. Quando dás a partir da abundância e não da carência, transformas vidas.',
  'enneatype.2.key-work':
    'Perguntares-te do que precisas TU, sem olhar primeiro para o outro.',

  // Enneatype 3
  'enneatype.3.name': 'O Vencedor',
  'enneatype.3.subtitle': 'O Executor',
  'enneatype.3.essence': 'Conquista, eficiência, imagem',
  'enneatype.3.motivation':
    'Ser valioso, admirado, bem-sucedido. Adaptas a tua forma ao ambiente para te destacares. Vives orientado para resultados.',
  'enneatype.3.shadow':
    'Confundes quem és com o que alcanças. Pões máscaras. Evitas sentir porque sentir trava-te. Medo profundo do fracasso público.',
  'enneatype.3.gift':
    'Capacidade de adaptação, de execução e de inspirar. Quando te ligas à tua verdade interior, o teu sucesso deixa de ser oco.',
  'enneatype.3.key-work':
    'Sentir o que há por baixo da imagem. Parar sem sentir culpa.',

  // Enneatype 4
  'enneatype.4.name': 'O Individualista',
  'enneatype.4.subtitle': 'O Romântico',
  'enneatype.4.essence': 'Autenticidade, profundidade, beleza',
  'enneatype.4.motivation':
    'Encontrar e expressar a tua identidade única. Sentes intensamente e procuras significado em tudo. Identificas-te com o que te falta.',
  'enneatype.4.shadow':
    'Inveja (do que outros têm e tu não), melancolia como identidade, dramatização, auto-indulgência emocional, sensação crónica de estar "incompleto".',
  'enneatype.4.gift':
    'Profundidade emocional, criatividade, capacidade de estar com a dor própria e alheia sem fugir.',
  'enneatype.4.key-work':
    'Ver o que SIM tens. Sair do eu-especial e ligar-te ao ordinário.',

  // Enneatype 5
  'enneatype.5.name': 'O Investigador',
  'enneatype.5.subtitle': 'O Observador',
  'enneatype.5.essence': 'Conhecimento, perspicácia, autonomia',
  'enneatype.5.motivation':
    'Perceber como funcionam as coisas. Conservar a tua energia, o teu espaço e os teus recursos. Preferes observar antes de participar.',
  'enneatype.5.shadow':
    'Isolamento, desligação emocional, acumulação de informação sem ação, sensação de seres um estranho no mundo.',
  'enneatype.5.gift':
    'Clareza mental, capacidade de ver padrões que outros não veem, mestria técnica.',
  'enneatype.5.key-work':
    'Descer do pensamento ao corpo. Agir antes de sentires que tens informação "suficiente".',

  // Enneatype 6
  'enneatype.6.name': 'O Leal',
  'enneatype.6.subtitle': 'O Guardião',
  'enneatype.6.essence': 'Lealdade, coragem, confiança',
  'enneatype.6.motivation':
    'Sentires-te seguro, com apoio, com um sistema ou grupo ao qual pertencer. Antecipas perigos e cenários.',
  'enneatype.6.shadow':
    'Ansiedade crónica, desconfiança, dúvidas constantes, projeção de medos, oscilação entre obediência e rebeldia.',
  'enneatype.6.gift':
    'Lealdade real, coragem sob pressão, capacidade de prever problemas e proteger os teus.',
  'enneatype.6.key-work':
    'Confiar na tua própria autoridade interna. Distinguir medo real de medo imaginado.',

  // Enneatype 7
  'enneatype.7.name': 'O Entusiasta',
  'enneatype.7.subtitle': 'O Aventureiro',
  'enneatype.7.essence': 'Alegria, visão, variedade',
  'enneatype.7.motivation':
    'Manteres-te estimulado, em movimento, com opções abertas. Evitar a dor e o tédio. Vês possibilidades em tudo.',
  'enneatype.7.shadow':
    'Escapismo, dispersão, superficialidade, dificuldade em comprometer-te, tapar o vazio com experiências novas.',
  'enneatype.7.gift':
    'Visão otimista real, criatividade conectiva, capacidade de reenquadrar o difícil e mover os outros.',
  'enneatype.7.key-work':
    'Ficar com o difícil sem fugir. Aprofundar em vez de multiplicar.',

  // Enneatype 8
  'enneatype.8.name': 'O Desafiador',
  'enneatype.8.subtitle': 'O Protetor',
  'enneatype.8.essence': 'Força, autonomia, justiça',
  'enneatype.8.motivation':
    'Ser forte, autónomo, não estar sob o controlo de ninguém. Proteges os teus. Dizes a verdade mesmo que incomode.',
  'enneatype.8.shadow':
    'Intimidação, excesso (trabalho, comida, confronto), negar a tua própria vulnerabilidade, ver o mundo como campo de batalha.',
  'enneatype.8.gift':
    'Força real, liderança, capacidade de proteger os fracos e quebrar estruturas injustas.',
  'enneatype.8.key-work':
    'Mostrar a tua ternura. Aceitar que ser vulnerável não te tira força.',

  // Enneatype 9
  'enneatype.9.name': 'O Pacificador',
  'enneatype.9.subtitle': 'O Mediador',
  'enneatype.9.essence': 'Paz, aceitação, presença',
  'enneatype.9.motivation':
    'Manter a harmonia interior e com os demais. Evitar o conflito. Fundires-te com o que te rodeia.',
  'enneatype.9.shadow':
    'Auto-abandono, passividade, adiamento, esqueceres o teu próprio desejo, estar presente-ausente. Raiva reprimida que raramente explode.',
  'enneatype.9.gift':
    'Capacidade de ver todos os lados, de acalmar tensões, de estar presente com o que há sem forçar.',
  'enneatype.9.key-work':
    'Despertar o teu próprio desejo. Tomar posição. Existir visivelmente.',

  'enneatype.1.growth':
    'Em crescimento, soltas-te. O jogo e o apetite pela vida do tipo 7 tornam-se disponíveis — paras de te vigiar e começas a desfrutar do que construíste.',
  'enneatype.1.stress':
    'Sob pressão, entras no território do tipo 4 — melancolia, retirada, a sensação silenciosa de que ninguém vê o quanto te esforçaste.',
  'enneatype.2.growth':
    'Em crescimento, encontras o teu próprio interior — o autoconhecimento do tipo 4. Paras de ler a sala primeiro e começas a notar o que sentes.',
  'enneatype.2.stress':
    'Sob pressão, viras-te para o tipo 8 — direto, confrontativo, a castigar quem não te devolveu o que deste.',
  'enneatype.3.growth':
    'Em crescimento, tomas a lealdade e cooperação do tipo 6 — paras de competir com as pessoas que já te amam.',
  'enneatype.3.stress':
    'Sob pressão, desligas-te como o tipo 9 — fora do ar, tudo parece igual, nada se sente urgente o suficiente.',
  'enneatype.4.growth':
    'Em crescimento, ganhas a firmeza e os princípios do tipo 1 — fazes as coisas sem precisares que sejam significativas primeiro.',
  'enneatype.4.stress':
    'Sob pressão, moves-te para o tipo 2 — demasiado envolvido nos outros, usando a ajuda para evitar o vazio no teu centro.',
  'enneatype.5.growth':
    'Em crescimento, acedes à capacidade do tipo 8 de agir a partir do corpo — paras de observar e começas a envolver-te com peso.',
  'enneatype.5.stress':
    'Sob pressão, dispersas-te como o tipo 7 — saltando entre ideias, evitando o que importa ao ficar no seguinte.',
  'enneatype.6.growth':
    'Em crescimento, assentas na confiança do tipo 9 — podes descansar sem rastrear ameaças. Está tudo bem, a sério.',
  'enneatype.6.stress':
    'Sob pressão, vais ao tipo 3 — performando competência, a empurrar mais forte, esperando que a conquista acalme a ansiedade.',
  'enneatype.7.growth':
    'Em crescimento, tomas a profundidade do tipo 5 — consegues ficar com uma coisa só o tempo suficiente para a entenderes.',
  'enneatype.7.stress':
    'Sob pressão, vais em direção ao tipo 1 — crítico, ressentido, a mandar toda a gente como se isso travasse o desconforto.',
  'enneatype.8.growth':
    'Em crescimento, abres-te para a suavidade do tipo 2 — deixas que as pessoas te importem sem precisares que sejam úteis.',
  'enneatype.8.stress':
    'Sob pressão, recuas para o tipo 5 — a planear em segredo, a cortar com as pessoas, sem confiar em ninguém.',
  'enneatype.9.growth':
    'Em crescimento, encontras o movimento do tipo 3 — paras de adiar e começas a aparecer pelo que queres.',
  'enneatype.9.stress':
    'Sob pressão, colapsas para o tipo 6 — dúvida, paralisia, a rever todas as possibilidades sem te comprometeres com nenhuma.',

  'enneatype.center.head': 'Mente',
  'enneatype.center.heart': 'Coração',
  'enneatype.center.gut': 'Instinto',
  'results.tritype.eyebrow': 'O teu tritipo',
  'results.tritype.description':
    'O tipo dominante em cada um dos três centros — mente, coração, instinto. Molda como o teu tipo principal se expressa no dia-a-dia.',
  'results.arrows.eyebrow': 'Linhas de crescimento e stress',
  'results.arrows.growth.label': 'Em crescimento →',
  'results.arrows.stress.label': 'Sob pressão →',
  'results.triad.eyebrow': 'Os teus três centros',
  'results.triad.description':
    'O eneagrama lê a personalidade através de três inteligências — instinto, coração, mente. O teu perfil apoia-se em cada uma em proporções diferentes.',
  'results.triad.aria-label':
    'Instinto ${gut}%, coração ${heart}%, mente ${head}%.',

  // Hub
  'hub.title': 'Duas portas para dentro.',
  'hub.subtitle': 'Um olhar sobre quem já és.',
  'hub.body':
    'Dois mapas complementares. O Eneagrama revela a motivação inconsciente que te move. Jung / MBTI mostra como pensas, decides e ages. Começa por qualquer um — ou percorre os dois.',
  'hub.card.enneagram.eyebrow': '9 padrões · ≈ 5 min',
  'hub.card.enneagram.title': 'Eneagrama',
  'hub.card.enneagram.subtitle': 'Porque te moves.',
  'hub.card.enneagram.pitch':
    'Nove estruturas de personalidade baseadas na motivação inconsciente que te move — não no teu comportamento visível.',
  'hub.card.enneagram.cta': 'Começar →',
  'hub.card.enneagram.aria-label': 'Fazer o teste do eneagrama',
  'hub.card.mbti.eyebrow': '16 tipos · ≈ 4 min',
  'hub.card.mbti.title': 'Jung / MBTI',
  'hub.card.mbti.subtitle': 'Como pensas.',
  'hub.card.mbti.pitch':
    'Quatro dimensões da cognição — energia, percepção, decisão, estilo de vida. Dezasseis formas de estar no mundo.',
  'hub.card.mbti.cta': 'Começar →',
  'hub.card.mbti.aria-label': 'Fazer o teste Jung / MBTI',
  'hub.wiki.aria-label': 'Explorar a wiki dos tipos',
  'hub.wiki.eyebrow': 'Ou explora a wiki',
  'hub.wiki.enneagram': '9 tipos do Eneagrama',
  'hub.wiki.mbti': '16 tipos Jung / MBTI',
  'hub.footnote':
    'Cada teste é um espelho, não uma jaula. Toma-o como mapa, não como veredicto.',

  // MBTI intro
  'mbti.intro.eyebrow': 'Mapa cognitivo',
  'mbti.intro.title': 'Jung / MBTI',
  'mbti.intro.subtitle': '4 dimensões. 16 tipos.',
  'mbti.intro.body.1.before':
    'Carl Jung propôs que a mente funciona através de umas poucas ',
  'mbti.intro.body.1.em': 'funções cognitivas',
  'mbti.intro.body.1.after':
    ' fundamentais. O MBTI transforma essas funções em quatro dimensões: onde vive a tua energia, como percebes, como decides e como organizas a vida.',
  'mbti.intro.body.2.before': 'São 24 perguntas. Responde de forma ',
  'mbti.intro.body.2.em': 'espontânea',
  'mbti.intro.body.2.after':
    ', a partir de como és normalmente — não da versão que representas no trabalho ou online.',
  'mbti.intro.start.button': 'Começar',
  'mbti.intro.start.aria-label': 'Começar o teste MBTI',
  'mbti.intro.duration': '≈ 4 minutos',

  // MBTI quiz chrome
  'mbti.quiz.back.button': '← Voltar',
  'mbti.quiz.back.aria-label': 'Voltar à pergunta anterior',
  'mbti.quiz.progress.aria-label': 'Progresso do teste',
  'mbti.quiz.option.aria-label': 'Opção ${letter}: ${text}',
  'mbti.quiz.question.counter': 'Pergunta ${current} / ${total}',

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
  'mbti.axis.EI.word.a': 'Extroversão',
  'mbti.axis.EI.word.b': 'Introversão',

  'mbti.axis.SN.label': 'Percepção',
  'mbti.axis.SN.letter.a': 'S',
  'mbti.axis.SN.letter.b': 'N',
  'mbti.axis.SN.word.a': 'Sensação',
  'mbti.axis.SN.word.b': 'Intuição',

  'mbti.axis.TF.label': 'Decisão',
  'mbti.axis.TF.letter.a': 'T',
  'mbti.axis.TF.letter.b': 'F',
  'mbti.axis.TF.word.a': 'Pensamento',
  'mbti.axis.TF.word.b': 'Sentimento',

  'mbti.axis.JP.label': 'Estilo de vida',
  'mbti.axis.JP.letter.a': 'J',
  'mbti.axis.JP.letter.b': 'P',
  'mbti.axis.JP.word.a': 'Julgamento',
  'mbti.axis.JP.word.b': 'Percepção',

  // MBTI results chrome
  'mbti.results.eyebrow': 'O teu perfil',
  'mbti.results.axes.eyebrow': 'As tuas quatro dimensões',
  'mbti.results.restart.button': 'Repetir o teste',
  'mbti.results.restart.aria-label': 'Repetir o teste MBTI',
  'mbti.results.home.button': 'Voltar ao início',
  'mbti.results.home.aria-label': 'Voltar à página inicial',
  'mbti.results.disclaimer.line-1':
    'O MBTI é uma lente, não um rótulo. Descreve preferência, não capacidade.',
  'mbti.results.disclaimer.line-2':
    'Usa-o como mapa para te veres — não como caixa para viveres nela.',

  // MBTI types — short fields translated, long descriptions kept in English for now
  'mbti.type.INTJ.name': 'O Arquiteto',
  'mbti.type.INTJ.subtitle': 'O Estratega',
  'mbti.type.INTJ.essence': 'Visão, sistemas, horizontes longos',
  'mbti.type.INTJ.motivation':
    'To understand how things fundamentally work and to design the best possible path forward — then quietly execute it.',
  'mbti.type.INTJ.shadow':
    'Cold certainty, impatience with people who don\'t see it yet, a tendency to dismiss emotion as inefficient.',
  'mbti.type.INTJ.gift':
    'Strategic clarity that cuts through noise. You see the shape of things years before others notice.',
  'mbti.type.INTJ.key-work':
    'Staying with the human element. Not everything that resists you is wrong — sometimes it\'s alive.',

  'mbti.type.INTP.name': 'O Lógico',
  'mbti.type.INTP.subtitle': 'O Pensador',
  'mbti.type.INTP.essence': 'Curiosidade, análise, liberdade de pensamento',
  'mbti.type.INTP.motivation':
    'To understand. To take ideas apart, find the inconsistency, rebuild them better. You live in the space of questions.',
  'mbti.type.INTP.shadow':
    'Endless analysis that never ships. Emotional distance. Condescension toward people who think less rigorously.',
  'mbti.type.INTP.gift':
    'Original thinking. You notice assumptions everyone else takes for granted, and you dismantle them.',
  'mbti.type.INTP.key-work':
    'Committing to something before you feel it\'s perfectly thought through. Letting the world test your ideas.',

  'mbti.type.ENTJ.name': 'O Comandante',
  'mbti.type.ENTJ.subtitle': 'O Construtor',
  'mbti.type.ENTJ.essence': 'Estratégia, ação, escala',
  'mbti.type.ENTJ.motivation':
    'To see a vision and build it. You combine strategic thinking with the drive to execute at scale. You lead without asking permission.',
  'mbti.type.ENTJ.shadow':
    'Over-control, steamrolling people, confusing disagreement with weakness. Treating relationships like projects.',
  'mbti.type.ENTJ.gift':
    'Rare combination of vision and execution. You turn impossible plans into institutions.',
  'mbti.type.ENTJ.key-work':
    'Slowing down to hear people. Your plan is often right — but your pace is sometimes inhuman.',

  'mbti.type.ENTP.name': 'O Debatedor',
  'mbti.type.ENTP.subtitle': 'O Visionário',
  'mbti.type.ENTP.essence': 'Ideias, provocação, possibilidade',
  'mbti.type.ENTP.motivation':
    'To play with ideas, challenge received wisdom, open doors that others thought were walls. You think best in argument.',
  'mbti.type.ENTP.shadow':
    'Starting ten things and finishing none. Arguing for sport. Using your quickness as a shield against vulnerability.',
  'mbti.type.ENTP.gift':
    'Intellectual generativity. You see angles no one saw. You\'re a catalyst for people and projects.',
  'mbti.type.ENTP.key-work':
    'Finishing. Going deep enough on one thing that it actually changes something.',

  'mbti.type.INFJ.name': 'O Advogado',
  'mbti.type.INFJ.subtitle': 'O Vidente',
  'mbti.type.INFJ.essence': 'Visão, profundidade, sentido',
  'mbti.type.INFJ.motivation':
    'To understand people at depth and move the world in a more humane direction. You live with one foot in what is and one foot in what could be.',
  'mbti.type.INFJ.shadow':
    'Perfectionism about people. Burning out silently. Withdrawing completely when overwhelmed and calling it "protecting yourself."',
  'mbti.type.INFJ.gift':
    'Profound intuition about people and their patterns. You see someone\'s full humanity before they show it.',
  'mbti.type.INFJ.key-work':
    'Letting yourself be known, not just knowing. You see others clearly — let them see you.',

  'mbti.type.INFP.name': 'O Mediador',
  'mbti.type.INFP.subtitle': 'O Sonhador',
  'mbti.type.INFP.essence': 'Autenticidade, profundidade, vida interior',
  'mbti.type.INFP.motivation':
    'To live in alignment with your values. To protect your own inner world and the people who need protection.',
  'mbti.type.INFP.shadow':
    'Idealization that breaks into disappointment. Withdrawing into fantasy. Treating discomfort with reality as proof of your specialness.',
  'mbti.type.INFP.gift':
    'Moral imagination. You feel what others don\'t let themselves feel, and you can write / make / speak it for them.',
  'mbti.type.INFP.key-work':
    'Bringing your inner world into the outer one. The dream matters when you build it.',

  'mbti.type.ENFJ.name': 'O Protagonista',
  'mbti.type.ENFJ.subtitle': 'O Catalisador',
  'mbti.type.ENFJ.essence': 'Liderança do humano',
  'mbti.type.ENFJ.motivation':
    'To see people\'s potential and help them reach it. You lead by lifting others. You feel the room as data.',
  'mbti.type.ENFJ.shadow':
    'Over-identifying with others. Losing your own shape. Subtle manipulation dressed as "helping". Resentment when the care isn\'t returned.',
  'mbti.type.ENFJ.gift':
    'You can move groups. You make people feel seen, and around you they become more.',
  'mbti.type.ENFJ.key-work':
    'Coming home to yourself. Your own needs are not a distraction from the mission.',

  'mbti.type.ENFP.name': 'O Ativista',
  'mbti.type.ENFP.subtitle': 'A Faísca',
  'mbti.type.ENFP.essence': 'Possibilidade, calor, fogo',
  'mbti.type.ENFP.motivation':
    'To follow what\'s alive. To connect with people and ideas that feel true. You light up what you touch.',
  'mbti.type.ENFP.shadow':
    'Scattering across too many passions. Burning out when the newness fades. Difficulty with the slow, grinding phases of anything real.',
  'mbti.type.ENFP.gift':
    'Rare aliveness. You bring energy into rooms and meaning into relationships.',
  'mbti.type.ENFP.key-work':
    'Staying when it gets ordinary. Depth is where the second layer of meaning lives.',

  'mbti.type.ISTJ.name': 'O Logístico',
  'mbti.type.ISTJ.subtitle': 'A Âncora',
  'mbti.type.ISTJ.essence': 'Fiabilidade, ordem, dever',
  'mbti.type.ISTJ.motivation':
    'To do it right. To keep the systems that others depend on running. You are how things actually hold together.',
  'mbti.type.ISTJ.shadow':
    'Rigidity. Refusing new ways because the old way worked. Using "realism" to avoid imagination.',
  'mbti.type.ISTJ.gift':
    'Unglamorous excellence. You are the reason things function. People trust you for good reason.',
  'mbti.type.ISTJ.key-work':
    'Letting yourself change the recipe. Tradition is a tool, not the boss.',

  'mbti.type.ISFJ.name': 'O Defensor',
  'mbti.type.ISFJ.subtitle': 'O Guardião',
  'mbti.type.ISFJ.essence': 'Cuidado, memória, devoção',
  'mbti.type.ISFJ.motivation':
    'To take care of the people you love and the places you belong to. You remember what others forget.',
  'mbti.type.ISFJ.shadow':
    'Silent resentment. Over-giving and then feeling invisible. Fear of change dressed as loyalty.',
  'mbti.type.ISFJ.gift':
    'You are the quiet fabric that holds groups and families together. Without you, it shows immediately.',
  'mbti.type.ISFJ.key-work':
    'Asking for what you need, out loud. Your care counts more when it\'s a gift, not a debt.',

  'mbti.type.ESTJ.name': 'O Executivo',
  'mbti.type.ESTJ.subtitle': 'O Organizador',
  'mbti.type.ESTJ.essence': 'Estrutura, ação, padrões',
  'mbti.type.ESTJ.motivation':
    'To get things done, properly and on time. You organize reality into things that work. You take responsibility naturally.',
  'mbti.type.ESTJ.shadow':
    'Over-controlling. Dismissing emotions as soft. Confusing your standards for universal truth.',
  'mbti.type.ESTJ.gift':
    'You make large plans actually happen. You are civic infrastructure in human form.',
  'mbti.type.ESTJ.key-work':
    'Softening with people who don\'t move at your pace. Not everyone operates like a project.',

  'mbti.type.ESFJ.name': 'O Cônsul',
  'mbti.type.ESFJ.subtitle': 'O Anfitrião',
  'mbti.type.ESFJ.essence': 'Calor, ordem, pertença',
  'mbti.type.ESFJ.motivation':
    'To create spaces where people feel welcome and things run smoothly. You tend to the fabric of a group.',
  'mbti.type.ESFJ.shadow':
    'Needing to be liked. Taking disagreement personally. Gossiping to manage anxiety about belonging.',
  'mbti.type.ESFJ.gift':
    'You make community where there was none. People feel held around you.',
  'mbti.type.ESFJ.key-work':
    'Tolerating being disliked for being honest. Belonging that costs the truth is the wrong kind of belonging.',

  'mbti.type.ISTP.name': 'O Virtuoso',
  'mbti.type.ISTP.subtitle': 'O Artesão',
  'mbti.type.ISTP.essence': 'Destreza, autonomia, presença',
  'mbti.type.ISTP.motivation':
    'To understand how it works — by using it, taking it apart, doing it. You learn through your hands.',
  'mbti.type.ISTP.shadow':
    'Emotional avoidance. Going quiet and disappearing. Treating feelings as someone else\'s department.',
  'mbti.type.ISTP.gift':
    'Composed competence under pressure. In a crisis you don\'t perform — you act.',
  'mbti.type.ISTP.key-work':
    'Letting people in. Your independence is real; your need for connection is too.',

  'mbti.type.ISFP.name': 'O Aventureiro',
  'mbti.type.ISFP.subtitle': 'O Artista Silencioso',
  'mbti.type.ISFP.essence': 'Estética, presença, intensidade silenciosa',
  'mbti.type.ISFP.motivation':
    'To live in beauty and truth, your own way, without imposing or explaining. You feel deeply and show it through what you make.',
  'mbti.type.ISFP.shadow':
    'Withdrawing completely when pressured. Conflict avoidance that curdles into resentment. Under-valuing your own gifts.',
  'mbti.type.ISFP.gift':
    'Real artistic sensibility. You make the world around you more alive by how you inhabit it.',
  'mbti.type.ISFP.key-work':
    'Letting your work be seen. Your quiet isn\'t the same as your absence.',

  'mbti.type.ESTP.name': 'O Empreendedor',
  'mbti.type.ESTP.subtitle': 'O Realista',
  'mbti.type.ESTP.essence': 'Ação, risco, presença',
  'mbti.type.ESTP.motivation':
    'To act. To meet reality head-on and make something happen. You think in motion.',
  'mbti.type.ESTP.shadow':
    'Impulsiveness. Boredom with anything that can\'t be tried right now. Burning bridges you\'ll need later.',
  'mbti.type.ESTP.gift':
    'You get things unstuck. Where others deliberate, you move — and often you\'re right.',
  'mbti.type.ESTP.key-work':
    'Developing the long arc. Some things you want take years of unflashy work.',

  'mbti.type.ESFP.name': 'O Animador',
  'mbti.type.ESFP.subtitle': 'O Intérprete',
  'mbti.type.ESFP.essence': 'Alegria, presença, vida',
  'mbti.type.ESFP.motivation':
    'To be fully alive in the moment and bring others with you. You find the celebration in almost anything.',
  'mbti.type.ESFP.shadow':
    'Avoiding what\'s uncomfortable by staying in motion. Letting the party cover a deeper ache. Difficulty with planning and consequences.',
  'mbti.type.ESFP.gift':
    'You generate joy. You pull people out of their heads and back into their lives.',
  'mbti.type.ESFP.key-work':
    'Staying with the hard feeling long enough to learn from it. The morning-after is a teacher too.',

  // Share
  'share.button': 'Partilhar',
  'share.button.aria-label': 'Partilhar o teu resultado',
  'share.preparing': 'A preparar o teu cartão…',
  'share.copied': 'Copiado para a área de transferência',
  'share.downloaded': 'Imagem guardada',
  'share.failed': 'Não foi possível partilhar — tenta de novo',
  'share.wa.text':
    'Fiz o teste de ${quiz} na enatipos. O meu resultado: ${result}. Faz o teu →',
  'share.quiz.enneagram': 'Eneagrama',
  'share.quiz.mbti': 'Jung / MBTI',
  'share.card.footer': 'enatipos — conhece-te',

  'wiki.mbti.index.eyebrow': 'Os 16 tipos',
  'wiki.mbti.index.title': 'Jung / MBTI',
  'wiki.mbti.index.subtitle': 'Dezasseis formas de estar no mundo.',
  'wiki.enneagram.index.eyebrow': 'Os 9 tipos',
  'wiki.enneagram.index.title': 'Eneagrama',
  'wiki.enneagram.index.subtitle':
    'Nove estruturas de motivação inconsciente.',
  'wiki.detail.take-test.mbti': 'Fazer o teste Jung / MBTI →',
  'wiki.detail.take-test.enneagram': 'Fazer o teste do eneagrama →',
  'wiki.detail.back.mbti': '← Os 16 tipos',
  'wiki.detail.back.enneagram': '← Os 9 tipos',
  'wiki.detail.back-home': '← Início',
  'wiki.nav.types.mbti': 'Ver os 16 tipos',
  'wiki.nav.types.enneagram': 'Ver os 9 tipos',
  'results.wiki.cta': 'Mais sobre ${code}',
  'wiki.famous-people.eyebrow': 'Personagens notáveis',
  'compatibility.title': 'Compatibilidade',
  'compatibility.section.dynamic': 'Como acendem',
  'compatibility.section.friction': 'Onde roçam',
  'compatibility.section.together': 'Juntos',
  'compatibility.section.practice': 'O trabalho',
  'compatibility.placeholder': 'Ainda estamos a escrever esta análise. Volta em breve — ou faz o teste entretanto.',
  'compatibility.metadata.description': 'Como ${aName} (${a}) e ${bName} (${b}) se encaixam — sinergia, fricção e o trabalho conjunto.',
  'compatibility.cross-link.eyebrow': 'Compatibilidade com outros tipos',
  'compatibility.cross-link.intro.mbti': 'Como ${code} se relaciona com cada um dos 16 tipos.',
  'compatibility.cross-link.intro.enneagram': 'Como o Tipo ${type} se relaciona com cada um dos 9 tipos.',
  'compatibility.back.mbti': '← Voltar a ${code}',
  'compatibility.back.enneagram': '← Voltar ao Tipo ${type}',

  // Eneagrama: compatibilidade entre tipos — 45 pares × 4 secções.
  'compatibility.enneagram.1-1.dynamic': "Dois reformadores veem a mesma falha no mundo e sentem a mesma urgência em fechá-la. Os padrões alinham-se depressa, e um projeto moral partilhado dá centro à relação.",
  'compatibility.enneagram.1-1.friction': "Sem ninguém para suavizar a aresta, cada imperfeição vira-se um veredicto. A crítica mútua coalha rapidamente em desprezo mútuo.",
  'compatibility.enneagram.1-1.together': "Uma sociedade de cruzados — disciplinada, produtiva, justiceira. Constroem algo que funciona; discutem se é bom o suficiente.",
  'compatibility.enneagram.1-1.practice': "Larga a auditoria. Ambos têm de aprender que a falha do outro em cumprir um padrão não é uma traição pessoal — e que ter razão juntos não é o mesmo que estar próximo.",

  'compatibility.enneagram.1-2.dynamic': "O 1 traz estrutura e o 2 traz calor. O 2 humaniza a reforma do 1; o 1 impede que o cuidado do 2 desabe em agradar a todos.",
  'compatibility.enneagram.1-2.friction': "O 1 corrige; o 2 leva a correção como rejeição. O 2 dá a mais; o 1 nota que o dar está ligeiramente desviado e di-lo.",
  'compatibility.enneagram.1-2.together': "Um par de mestre e cuidadora. Coesos quando servem algo maior do que eles; frágeis quando viram a lente um para o outro.",
  'compatibility.enneagram.1-2.practice': "O 1 tem de receber cuidado sem auditá-lo. O 2 tem de parar de ler cada preferência como um referendo sobre o seu amor.",

  'compatibility.enneagram.1-3.dynamic': "Ambos são competentes, ambiciosos, orientados a resultados. Constroem com eficácia juntos — projetos, negócios, famílias — e de fora parecem um casal imparável.",
  'compatibility.enneagram.1-3.friction': "O 1 quer fazê-lo bem; o 3 quer fazê-lo já e que pareça bem. O 1 lê o 3 como quem corta atalhos; o 3 lê o 1 como travão do motor.",
  'compatibility.enneagram.1-3.together': "Realizadores em registos diferentes. Unidos por fora, a negociar por dentro entre princípio e desempenho.",
  'compatibility.enneagram.1-3.practice': "O 1 tem de confiar que 'bom o suficiente para entregar' não é falha moral. O 3 tem de abrandar o suficiente para reparar quando a vitória foi um atalho.",

  'compatibility.enneagram.1-4.dynamic': "A coluna do 1 e a profundidade do 4 complementam-se invulgarmente bem. O 1 ancora o clima emocional do 4; o 4 descongela a vida interior do 1.",
  'compatibility.enneagram.1-4.friction': "O 1 lê os estados do 4 como autoindulgência. O 4 lê a disciplina do 1 como evasão emocional — e sente-se sermoado por sentir.",
  'compatibility.enneagram.1-4.together': "Um par romântico-clássico. Belo em estações longas e suaves, brutal nas tempestades.",
  'compatibility.enneagram.1-4.practice': "O 1 tem de parar de tentar otimizar os sentimentos do 4. O 4 tem de parar de usar o estado de espírito como identidade, sobretudo em conflito.",

  'compatibility.enneagram.1-5.dynamic': "Ambos prezam precisão e competência. Partilham aversão ao desleixo e prazer em afinar o modelo; a conversa é de alto sinal.",
  'compatibility.enneagram.1-5.friction': "O 1 quer o modelo implementado; o 5 quere-o aperfeiçoado. O 1 sente-se sozinho com o fazer enquanto o 5 continua a investigar.",
  'compatibility.enneagram.1-5.together': "Um think-tank em forma doméstica. Calmo, ordenado, intelectualmente rico — e emocionalmente fino se ninguém cuidar.",
  'compatibility.enneagram.1-5.practice': "O 1 tem de libertar o 5 de ser coexecutor. O 5 tem de participar no mundo que o 1 sustenta, não apenas analisá-lo.",

  'compatibility.enneagram.1-6.dynamic': "Ambos são responsáveis, cumpridores, desconfiados da autoindulgência. Há reconhecimento mútuo imediato: levas as coisas a sério, eu também.",
  'compatibility.enneagram.1-6.friction': "A certeza do 1 sobre o que está certo encontra a dúvida crónica do 6 sobre o que é seguro. O 1 começa a puxar; o 6 começa a tensionar-se.",
  'compatibility.enneagram.1-6.together': "Um par construído sobre o dever. Fiável, leal, às vezes sem alegria se esquecerem de se dar permissão para a calma.",
  'compatibility.enneagram.1-6.practice': "O 1 tem de parar de tratar a ansiedade do 6 como problema a resolver. O 6 tem de parar de procurar a certeza do 1 como substituto do seu próprio chão.",

  'compatibility.enneagram.1-7.dynamic': "O 7 traz brincadeira, possibilidade e elevação; o 1 traz disciplina, estrutura e remate. Bem feito, este é um dos pares mais geradores do círculo.",
  'compatibility.enneagram.1-7.friction': "O 1 vê o 7 como leve e irresponsável. O 7 vê o 1 como desmancha-prazeres a racionar a alegria.",
  'compatibility.enneagram.1-7.together': "Opostos cujas setas de crescimento se cruzam — cada um sustenta o que o outro mais precisa de integrar.",
  'compatibility.enneagram.1-7.practice': "O 1 tem de deixar o prazer existir sem o ganhar. O 7 tem de ficar na sala quando algo é difícil, aborrecido ou inacabado.",

  'compatibility.enneagram.1-8.dynamic': "Dois tipos de vontade forte que não recuam. A honestidade é direta; a fraqueza não se usa como arma; a lealdade, uma vez dada, pesa.",
  'compatibility.enneagram.1-8.friction': "Ambos reprimem material de sombra parecido em torno da raiva e do controlo. Os conflitos escalam depressa e raramente aterram à altura certa.",
  'compatibility.enneagram.1-8.together': "Uma aliança formidável — clara, principista, e um pouco dura para com quem está à volta.",
  'compatibility.enneagram.1-8.practice': "O 1 tem de parar de moralizar a franqueza do 8. O 8 tem de parar de ler os padrões do 1 como tentativa de dominar.",

  'compatibility.enneagram.1-9.dynamic': "O 9 acalma o crítico interno do 1; o 1 ajuda o 9 a aparecer na sua própria vida. Mesmo centro instintivo, volume diferente — reconhecem-se ao instante.",
  'compatibility.enneagram.1-9.friction': "A pressão do 1 por melhorar bate no instinto do 9 de manter a paz, e o 9 desaparece num acordo que não resolve nada.",
  'compatibility.enneagram.1-9.together': "Um dos pares mais suaves entre os 1. Estável, lento, às vezes lento de mais.",
  'compatibility.enneagram.1-9.practice': "O 1 tem de parar de empurrar — o 9 retira-se mais a cada empurrão. O 9 tem de tomar realmente uma posição, sobretudo a inconveniente.",

  'compatibility.enneagram.2-2.dynamic': "Dois ajudadores sabem fazer uma sala sentir-se segurada. A generosidade flui em ambas as direções; as línguas do amor alinham-se sem esforço no início.",
  'compatibility.enneagram.2-2.friction': "Nenhum é bom a receber. Ambos estão calados a contar quem deu mais, e o marcador nunca se reinicia.",
  'compatibility.enneagram.2-2.together': "Uma parceria radiante por fora; por dentro, uma competição silenciosa por quem é o mais altruísta.",
  'compatibility.enneagram.2-2.practice': "Ambos têm de arriscar pedir o que querem, em palavras claras, e aceitar a resposta não.",

  'compatibility.enneagram.2-3.dynamic': "O 3 dá ao 2 um projeto para apoiar e o 2 dá ao 3 um lugar suave onde o desempenho não é exigido — quando isto funciona, funciona poderosamente.",
  'compatibility.enneagram.2-3.friction': "O 2 começa a sentir-se usado; o 3 começa a sentir-se gerido. O cuidado do 2 vira-se um pedido de atenção; o motor do 3 começa a parecer uma marca que o 2 ajuda a gerir.",
  'compatibility.enneagram.2-3.together': "O modelo clássico do casal de poder — admirado por fora, transacional por dentro se não houver cuidado.",
  'compatibility.enneagram.2-3.practice': "O 3 tem de ser amado por quem é, não pelo que produz — e deixar o 2 vê-lo cansado. O 2 tem de parar de ganhar a relação.",

  'compatibility.enneagram.2-4.dynamic': "Ambos vivem no centro do coração. O vocabulário emocional flui dos dois lados; profundidade, intimidade e sentido são a língua nativa.",
  'compatibility.enneagram.2-4.friction': "O 2 quer acalmar o que dói; o 4 quer ser encontrado dentro da dor, não resgatado dela. A ajuda do 2 vira-se prova para o 4 de não ser compreendido.",
  'compatibility.enneagram.2-4.together': "Um par emocionalmente intenso — belo e exaustivo em proporções semelhantes.",
  'compatibility.enneagram.2-4.practice': "O 2 tem de sentar-se com a dor do 4 sem tentar levantá-la. O 4 tem de parar de rejeitar amor que chega numa forma pouco sofisticada.",

  'compatibility.enneagram.2-5.dynamic': "O 2 descongela o 5; o 5 dá ao 2 uma presença firme e sem drama. Cada um recebe uma qualidade que o outro não gera facilmente sozinho.",
  'compatibility.enneagram.2-5.friction': "O 2 quer envolvimento; o 5 quer espaço. O 2 lê a retirada do 5 como rejeição. O 5 lê o alcance do 2 como intrusão.",
  'compatibility.enneagram.2-5.together': "Um estudo de necessidades opostas que pode tornar-se profundamente complementar ou passar fome em silêncio.",
  'compatibility.enneagram.2-5.practice': "O 2 tem de dar ao 5 a sua solidão sem fazer disso uma crise. O 5 tem de sair da gruta a tempo, não apenas quando lhe convém.",

  'compatibility.enneagram.2-6.dynamic': "Ambos são leais, devotos e voltados para as pessoas que amam. A fiabilidade é alta; a relação sente-se como refúgio para os dois.",
  'compatibility.enneagram.2-6.friction': "A dúvida do 6 encontra o orgulho do 2. O 2 sobre-tranquiliza; o 6 continua a testar. Os ciclos de ajuda ansiosa formam-se depressa.",
  'compatibility.enneagram.2-6.together': "Uma casa quente, fiável, ligeiramente ansiosa. Forte em cuidado, leve em independência.",
  'compatibility.enneagram.2-6.practice': "O 2 tem de parar de atuar uma certeza que não sente. O 6 tem de parar de exigir uma certeza que ninguém pode dar.",

  'compatibility.enneagram.2-7.dynamic': "A energia do 7 ilumina a vida do 2; o cuidado do 2 dá aos entusiasmos do 7 um porto de base. Os dias são brilhantes, os planos cheios, a agenda social vibra.",
  'compatibility.enneagram.2-7.friction': "O 2 quer ser a prioridade; o 7 quer a próxima coisa. A oferta de proximidade do 2 soa ao 7 como uma jaula.",
  'compatibility.enneagram.2-7.together': "Um par expansivo, social, caloroso — longo em movimento, às vezes curto em quietude.",
  'compatibility.enneagram.2-7.practice': "O 7 tem de receber realmente o amor do 2 em vez de o metabolizar como mais uma opção. O 2 tem de parar de segurar o 7 sendo indispensável.",

  'compatibility.enneagram.2-8.dynamic': "2 e 8 são parceiros na direção de crescimento — o 2 cresce em direção à franqueza do 8, o 8 cresce em direção à ternura do 2. A polaridade torna isto elétrico.",
  'compatibility.enneagram.2-8.friction': "A franqueza do 8 fere o 2; a pressão emocional do 2 ao 8 soa manipuladora. Poder e cuidado emaranham-se, e alguém se sente sempre em dívida.",
  'compatibility.enneagram.2-8.together': "Um par de protetor e cuidadora — feroz, leal e ocasionalmente explosivo.",
  'compatibility.enneagram.2-8.practice': "O 8 tem de aprender que a suavidade não é fraqueza. O 2 tem de parar de usar o cuidado como moeda e simplesmente dizer o que quer.",

  'compatibility.enneagram.2-9.dynamic': "Ambos são acomodadores, calorosos, voltados para a paz. A casa está calma, os amigos sentem-se bem-vindos, o conflito é raro.",
  'compatibility.enneagram.2-9.friction': "Ambos evitam declarar o que realmente precisam. O ressentimento cresce em silêncio; nada vem à tona até algo se partir.",
  'compatibility.enneagram.2-9.together': "Uma parceria suave, generosa, frequentemente invisível — o tipo de relação ao lado da qual toda a gente relaxa.",
  'compatibility.enneagram.2-9.practice': "Ambos têm de lutar contra o reflexo de desaparecer nas preferências do outro. O desejo honesto — mesmo pequeno e sem brilho — é o antídoto.",

  'compatibility.enneagram.3-3.dynamic': "Dois realizadores admiram o motor um do outro e não pedem desculpa pela ambição. As vitórias acumulam-se; a agenda enche; a equipa rende muito.",
  'compatibility.enneagram.3-3.friction': "Com ambos a render, ninguém está a ser visto — a relação vira-se mais uma arena para vencer.",
  'compatibility.enneagram.3-3.together': "Uma fusão mais do que um casamento. Brilhante por fora, transacional por dentro se nenhum sai do palco.",
  'compatibility.enneagram.3-3.practice': "Pelo menos um dos dois tem de se sentar primeiro. A vulnerabilidade tem de virar uma entrega, no prazo, até virar natural.",

  'compatibility.enneagram.3-4.dynamic': "O 3 admira a autenticidade do 4; o 4 admira os resultados do 3. Cada um representa o que o outro secretamente desejava ter — imagem versus essência.",
  'compatibility.enneagram.3-4.friction': "O 3 acha o 4 autoindulgente; o 4 acha o 3 oco. Cada um sente-se uma acusação à insegurança mais profunda do outro.",
  'compatibility.enneagram.3-4.together': "Um par criativo poderoso — a execução do 3 mais a visão do 4 pode produzir trabalho real — sustentado pela mesma tensão que os desgasta.",
  'compatibility.enneagram.3-4.practice': "O 3 tem de abrandar e dizer a verdade sobre o que sente. O 4 tem de entregar a coisa sem fazer dela um referendo sobre a sua alma.",

  'compatibility.enneagram.3-5.dynamic': "O 3 leva as ideias do 5 ao mundo; o 5 dá ao 3 profundidade que o motor sozinho não gera. Juntos podem fazer trabalho invulgarmente rigoroso.",
  'compatibility.enneagram.3-5.friction': "O 3 quer visibilidade; o 5 quer privacidade. O 3 lê a reticência do 5 como retenção; o 5 lê a exposição do 3 como superficial.",
  'compatibility.enneagram.3-5.together': "Um par de especialista e operador — silenciosamente poderoso, fácil de subestimar.",
  'compatibility.enneagram.3-5.practice': "O 3 tem de valorizar o processo do 5, não apenas o resultado. O 5 tem de sair e representar o trabalho, não apenas produzi-lo.",

  'compatibility.enneagram.3-6.dynamic': "O 6 dá ao 3 uma base de lealdade; o 3 dá ao 6 um modelo de ação confiante. Há alívio mútuo — o 6 deixa de prever desastres, o 3 deixa de precisar de convencer a sala.",
  'compatibility.enneagram.3-6.friction': "A preocupação do 6 bate na imagem do 3 — o 3 começa a sentir-se 'deixado nervoso.' O 6 começa a suspeitar que o 3 esconde algo por trás do polimento.",
  'compatibility.enneagram.3-6.together': "Uma parceria em modo equipa — funcional, leal, às vezes ansiosa por si própria.",
  'compatibility.enneagram.3-6.practice': "O 3 tem de parar de vender a relação e simplesmente estar nela. O 6 tem de parar de testar se o 3 é real, e confiar nas evidências.",

  'compatibility.enneagram.3-7.dynamic': "Ambos são otimistas, rápidos e alérgicos a ficar no estado baixo. A vida parece boa — e muitas vezes é mesmo, genuinamente — durante longos períodos.",
  'compatibility.enneagram.3-7.friction': "Nenhum é bom a parar. Quando algo doloroso chega, ambos pegam na distração, e a relação perde o centro emocional.",
  'compatibility.enneagram.3-7.together': "Um par brilhante, ocupado, frequentemente invejável — forte em impulso, frágil no escuro.",
  'compatibility.enneagram.3-7.practice': "Ambos têm de aprender a ficar quando ficar é desconfortável. A relação aprofunda-se exatamente nos momentos que querem saltar.",

  'compatibility.enneagram.3-8.dynamic': "Dois tipos assertivos, voltados para resultados, que não recuam. O poder é partilhado em vez de disputado; o que constroem, constroem grande.",
  'compatibility.enneagram.3-8.friction': "Ambos lutam por vencer e leem a concessão como fraqueza. O 3 gere em torno da raiva do 8; o 8 sente o gerir e ressente-se.",
  'compatibility.enneagram.3-8.together': "Um par de alta octanagem — formidável no mundo, dependente de honestidade crua em privado.",
  'compatibility.enneagram.3-8.practice': "O 3 tem de parar de atuar para o 8 e começar a ser visto por ele. O 8 tem de usar menos força; já está recebida.",

  'compatibility.enneagram.3-9.dynamic': "O 9 dá ao 3 um centro tranquilo para onde voltar; o 3 dá ao 9 uma razão para aparecer mesmo. As suas linhas de crescimento cruzam-se — cada um tem o que o outro mais precisa.",
  'compatibility.enneagram.3-9.friction': "O 3 confunde o ritmo do 9 com preguiça. O 9 confunde o motor do 3 com inquietação. O 3 puxa; o 9 desaparece em silêncio.",
  'compatibility.enneagram.3-9.together': "Um par complementar, frequentemente muito duradouro — quando ambos honram o ritmo um do outro.",
  'compatibility.enneagram.3-9.practice': "O 3 tem de parar de confundir velocidade com valor. O 9 tem de escolher, em voz alta, antes que o 3 escolha pelos dois.",

  'compatibility.enneagram.4-4.dynamic': "Dois 4 reconhecem-se ao instante — vocabulário emocional, sensibilidade estética e a suposição partilhada de que a profundidade é o ponto.",
  'compatibility.enneagram.4-4.friction': "Ambos competem, às vezes em silêncio, pelo papel do mais ferido. O estado de espírito espelha o estado de espírito; as espirais aprofundam-se em vez de resolver.",
  'compatibility.enneagram.4-4.together': "Um par romântico, intenso, frequentemente artístico — radiante em climas emocionais longos, perigoso numa tempestade sem âncora.",
  'compatibility.enneagram.4-4.practice': "Um dos dois tem de manter-se no chão quando o outro está no escuro. Trocar; não cair ao mesmo tempo.",

  'compatibility.enneagram.4-5.dynamic': "A profundidade emocional do 4 encontra a profundidade intelectual do 5. A solidão partilha-se sem tensão; a conversa vai a lugares onde outras pessoas não vão.",
  'compatibility.enneagram.4-5.friction': "O 4 quer ser sentido; o 5 quer ser deixado em paz. O 4 lê a retirada do 5 como rejeição; o 5 lê a intensidade do 4 como cerco.",
  'compatibility.enneagram.4-5.together': "Um par silencioso, voltado para dentro, às vezes hermético — o tipo de relação cujo interior a maior parte dos de fora nunca vê.",
  'compatibility.enneagram.4-5.practice': "O 4 tem de parar de dramatizar para conseguir envolvimento. O 5 tem de arriscar realmente a presença, não apenas a disponibilidade.",

  'compatibility.enneagram.4-6.dynamic': "Ambos sentem coisas que o resto do mundo perde. Há um vínculo real em torno da verdade emocional pouco contada.",
  'compatibility.enneagram.4-6.friction': "A intensidade do 4 ativa a ansiedade do 6; a preocupação do 6 desinfla o estado do 4. Podem amplificar as piores espirais um do outro se não tiverem cuidado.",
  'compatibility.enneagram.4-6.together': "Um par leal, percetivo, às vezes preocupado — forte quando são cotestemunhas, fraco quando são coespirais.",
  'compatibility.enneagram.4-6.practice': "O 4 tem de parar de testar se o 6 vai embora. O 6 tem de parar de digitalizar o estado do 4 e simplesmente estar ao lado.",

  'compatibility.enneagram.4-7.dynamic': "O 7 tira o 4 do poço; o 4 dá à vida do 7 profundidade e forma. Cada um carrega exatamente o que o outro mais resiste em si próprio.",
  'compatibility.enneagram.4-7.friction': "O 4 lê a fuga do 7 como traição ao sentir. O 7 lê a profundidade do 4 como armadilha. A evasão e a intensidade colidem em vez de equilibrar-se.",
  'compatibility.enneagram.4-7.together': "Um par claro-e-escuro — de alta amplitude, alta recompensa, só estável quando ambos se inclinam para o meio.",
  'compatibility.enneagram.4-7.practice': "O 7 tem de parar de fugir. O 4 tem de parar de puxar pela fuga.",

  'compatibility.enneagram.4-8.dynamic': "Ambos são intensos, sem fingimento, alérgicos à atuação. Há uma honestidade imediata que o 4 e o 8 raramente conseguem com mais alguém.",
  'compatibility.enneagram.4-8.friction': "A força do 8 sente-se invasiva para o 4; o estado do 4 sente-se caótico para o 8. Sentimentos grandes dos dois lados sem muita regulação.",
  'compatibility.enneagram.4-8.together': "Um par volátil, dedicado — quando confiam um no outro, não confiam assim em mais ninguém.",
  'compatibility.enneagram.4-8.practice': "O 8 tem de cuidar do seu poder; o 4 tem de parar de usar a emoção como contra-arma.",

  'compatibility.enneagram.4-9.dynamic': "A direção de crescimento do 4 é o território natal do 9 — paz, aceitação, presença. O 9 acalma o 4 só por estar na sala.",
  'compatibility.enneagram.4-9.friction': "O 9 anestesia-se ao clima emocional do 4; o 4 lê a anestesia como abandono. O 4 sobe o volume para ser sentido; o 9 afasta-se mais.",
  'compatibility.enneagram.4-9.together': "Um par suave, frequentemente profundo — o 9 segura o continente; o 4 enche-o de cor.",
  'compatibility.enneagram.4-9.practice': "O 9 tem de manter-se envolvido quando a temperatura sobe. O 4 tem de parar de testar se ao 9 lhe importa.",

  'compatibility.enneagram.5-5.dynamic': "Dois 5 dão um ao outro um presente raro: presença sem exigência. A solidão partilha-se; as buscas intelectuais acumulam-se.",
  'compatibility.enneagram.5-5.friction': "Ambos retiram-se sob pressão, e ninguém volta para reparar. Dias de silêncio comprimem-se em meses de distância.",
  'compatibility.enneagram.5-5.together': "Um vínculo silencioso, ponderado, frequentemente invisível — do tipo que sobrevive a separações que nenhuma outra relação suportaria.",
  'compatibility.enneagram.5-5.practice': "Um dos dois tem de quebrar o silêncio. Por defeito, fazer a chamada, mandar a mensagem, o pequeno regresso — sem esperar que peçam.",

  'compatibility.enneagram.5-6.dynamic': "Ambos são tipos de cabeça que pensam muito antes de agir. Há um respeito partilhado pela evidência, pela preparação e por não ser enganado.",
  'compatibility.enneagram.5-6.friction': "O 6 quer tranquilização; o 5 quer ser deixado a pensar. O 6 começa a puxar pelo envolvimento; o 5 retira-se; o 6 catastrofiza a retirada.",
  'compatibility.enneagram.5-6.together': "Um par cerebral, cuidadoso — forte em planear, fraco em calor espontâneo.",
  'compatibility.enneagram.5-6.practice': "O 5 tem de trazer à tona o seu pensamento — o silêncio lê-se como abandono para um 6. O 6 tem de tolerar não ser informado em tempo real.",

  'compatibility.enneagram.5-7.dynamic': "Ambos são tipos de cabeça — mas onde o 5 conserva, o 7 gasta. O 7 puxa o 5 para o mundo; o 5 dá ao 7 algo em que aprofundar de verdade.",
  'compatibility.enneagram.5-7.friction': "O ritmo do 7 esgota o 5; a retirada do 5 frustra o 7. Formas diferentes de evitar a mesma dor.",
  'compatibility.enneagram.5-7.together': "Um par complementar do centro de cabeça quando cada um respeita o metabolismo do outro.",
  'compatibility.enneagram.5-7.practice': "O 7 tem de aterrar. O 5 tem de sair. Ambos têm de parar de usar a atividade mental para esquivar o sentir.",

  'compatibility.enneagram.5-8.dynamic': "A seta de crescimento do 5 aponta para o 8 — há uma atração real neste par. O 8 traz o 5 ao seu corpo; o 5 traz ao 8 perspetiva.",
  'compatibility.enneagram.5-8.friction': "A intensidade do 8 sobrecarrega o 5; o desapego do 5 enfurece o 8. O 5 retira-se; o 8 escala; a espiral é rápida.",
  'compatibility.enneagram.5-8.together': "Um par estranho que, quando funciona, integra poder e inteligência de formas invulgares.",
  'compatibility.enneagram.5-8.practice': "O 8 tem de baixar o volume. O 5 tem de sair da sua cabeça e entrar no que está realmente em jogo na relação.",

  'compatibility.enneagram.5-9.dynamic': "Ambos são silenciosos, pouco exigentes e contentes em partilhar espaço sem o encher. A casa está em paz; as noites de leitura são reais.",
  'compatibility.enneagram.5-9.friction': "Ambos retiram-se sob stress, nenhum inicia o regresso, e pequenas distâncias tornam-se permanentes quase sem ninguém notar.",
  'compatibility.enneagram.5-9.together': "Um par suave, ponderado, às vezes silencioso de mais — forte em equanimidade, leve em calor.",
  'compatibility.enneagram.5-9.practice': "Ambos têm de sobre-corrigir-se em direção à iniciativa — mensagens, planos, pequenas ofertas de contacto — bem para lá do ponto em que cada um sente que precisa.",

  'compatibility.enneagram.6-6.dynamic': "Dois 6 ligam-se depressa em torno da lealdade partilhada, da vigilância partilhada e do raro alívio de não ter de explicar porque verificam as coisas duas vezes.",
  'compatibility.enneagram.6-6.friction': "A ansiedade amplifica-se. Ambos procuram no outro uma certeza que nenhum tem, e a preocupação escala sem âncora externa.",
  'compatibility.enneagram.6-6.together': "Uma casa leal, devotada, ligeiramente ansiosa — forte em compromisso, vulnerável a espirais.",
  'compatibility.enneagram.6-6.practice': "Pelo menos um tem de ser o calmo em cada momento. Trocar conscientemente; não entrar em pânico ao mesmo tempo.",

  'compatibility.enneagram.6-7.dynamic': "O otimismo do 7 levanta a preocupação do 6; a cautela do 6 ancora a perseguição do 7. Mesmo centro de cabeça, valor padrão oposto — uma complementaridade real.",
  'compatibility.enneagram.6-7.friction': "O 7 minimiza o que o 6 leva a sério; o 6 catastrofiza o que o 7 descarta. Cada um começa a sentir-se desamparado no clima emocional básico.",
  'compatibility.enneagram.6-7.together': "Um par expansivo-e-cauteloso — poderoso quando cada um respeita o que o outro perceciona.",
  'compatibility.enneagram.6-7.practice': "O 7 tem de parar de tratar a preocupação do 6 como desmancha-prazeres. O 6 tem de parar de tratar a leveza do 7 como negação.",

  'compatibility.enneagram.6-8.dynamic': "A franqueza do 8 dá ao 6 sentido de segurança; a lealdade do 6 dá ao 8 um parceiro que não recua. A confiança, uma vez ganha, corre fundo.",
  'compatibility.enneagram.6-8.friction': "A força do 8 ativa o radar de ameaças do 6; o 6 começa a testar o compromisso do 8, o que o 8 lê como deslealdade.",
  'compatibility.enneagram.6-8.together': "Um par leal-e-protetor — forte, devotado e rápido a fechar fileiras.",
  'compatibility.enneagram.6-8.practice': "O 8 tem de ser paciente com os testes do 6. O 6 tem de parar de testar uma vez estabelecida a confiança.",

  'compatibility.enneagram.6-9.dynamic': "Ambos são suaves, leais e lentos a abandonar as pessoas que amam. A relação é estável, sem drama e construída para durar.",
  'compatibility.enneagram.6-9.friction': "A preocupação do 6 pressiona a paz do 9; a evasão do 9 mata de fome a necessidade de envolvimento do 6. A pressão acumula em silêncio.",
  'compatibility.enneagram.6-9.together': "Um dos padrões de par mais duradouros do círculo — silencioso, leal, frequentemente longo.",
  'compatibility.enneagram.6-9.practice': "O 6 tem de parar de forçar o 9 a tomar uma posição. O 9 tem de tomar realmente uma, sobretudo as pequenas, todos os dias.",

  'compatibility.enneagram.7-7.dynamic': "Dois 7 sabem divertir-se. Os planos acumulam-se, as ideias multiplicam-se, a energia é brilhante e a agenda está cheia.",
  'compatibility.enneagram.7-7.friction': "Nenhum trava. Sentimentos grandes, conversas duras e dias lentos saltam-se juntos até algo ter de partir.",
  'compatibility.enneagram.7-7.together': "Um par brilhante, social, expansivo — invejável por fora, evasivo por dentro do que não brilha.",
  'compatibility.enneagram.7-7.practice': "Um dos dois tem de ficar quando o outro quer fugir. Sentar-se com a coisa difícil de propósito; a relação não pode aprofundar-se de outro modo.",

  'compatibility.enneagram.7-8.dynamic': "Ambos são de alta energia, voltados para o mundo, alérgicos à restrição. As aventuras multiplicam-se; o par mete-se em projetos grandes que outros não tentariam.",
  'compatibility.enneagram.7-8.friction': "A confrontação do 8 cai dura na evasão do 7; a deflexão do 7 enfurece o 8. Os conflitos passam de zero a briga sem meio-termo.",
  'compatibility.enneagram.7-8.together': "Um par audaz, expansivo — poderoso em movimento, frágil quando obrigado a parar.",
  'compatibility.enneagram.7-8.practice': "O 8 tem de baixar a força. O 7 tem de parar de desviar e deixar a conversa acontecer realmente.",

  'compatibility.enneagram.7-9.dynamic': "O 9 dá ao 7 uma base calma e aceitante; o 7 acorda o 9 para a sua própria vida. Há aqui uma complementaridade suave e geradora.",
  'compatibility.enneagram.7-9.friction': "O ritmo do 7 sobrecarrega o 9; a deriva do 9 frustra o 7. O 7 começa a ir sozinho; o 9 desliga-se em silêncio.",
  'compatibility.enneagram.7-9.together': "Um par expansivo-e-calmo — brilhante por fora, em paz por dentro, quando ambos se encontram a meio.",
  'compatibility.enneagram.7-9.practice': "O 7 tem de abrandar. O 9 tem de juntar-se ativamente, não apenas seguir a corrente.",

  'compatibility.enneagram.8-8.dynamic': "Dois 8 reconhecem-se ao contacto — a franqueza é mútua, a fraqueza não se usa como arma, a lealdade é inegociável.",
  'compatibility.enneagram.8-8.friction': "Ambos lutam pelo controlo; nenhum cede facilmente. Os conflitos escalam depressa e custam mais do que qualquer um pretendia.",
  'compatibility.enneagram.8-8.together': "Um par formidável, ferozmente leal — imponente por fora, terno por dentro se algum baixar a armadura.",
  'compatibility.enneagram.8-8.practice': "Ambos têm de se revezar em ser o suave. A força não é o problema; a vulnerabilidade é.",

  'compatibility.enneagram.8-9.dynamic': "Mesmo centro instintivo, expressão oposta. O 9 tempera a força do 8; o 8 traz o 9 à vida. As suas setas de crescimento cruzam-se — uma complementaridade profunda.",
  'compatibility.enneagram.8-9.friction': "O 8 empurra; o 9 desaparece num acordo que não resolve nada; o 8 empurra mais forte. O ciclo é o ciclo.",
  'compatibility.enneagram.8-9.together': "Um par de protetor e pacificador — devotado, durável, quando ambos superam a dança.",
  'compatibility.enneagram.8-9.practice': "O 8 tem de parar de empurrar — o 9 retira-se mais a cada empurrão. O 9 tem de manter-se presente e dizer não, em voz alta, quando não é a verdade.",

  'compatibility.enneagram.9-9.dynamic': "Dois 9 criam uma casa pacífica, de baixa fricção, quase por acidente. O conforto partilha-se, o conflito é raro, os dias são tranquilos.",
  'compatibility.enneagram.9-9.friction': "Nenhum inicia. Os ressentimentos acumulam-se em silêncio; a relação afasta-se devagar sem ninguém o nomear.",
  'compatibility.enneagram.9-9.together': "Um par suave, sem drama, às vezes parado de mais — radiante num bom dia, invisível num mau.",
  'compatibility.enneagram.9-9.practice': "Ambos têm de oferecer as suas preferências antes de serem perguntados. A fricção, em pequenas doses, não é inimiga — é a prova da presença.",

  // MBTI: compatibilidade entre tipos — 136 pares × 4 secções.
  'compatibility.mbti.ENFJ-ENFJ.dynamic': "Dois protagonistas sintonizam as mesmas frequências emocionais e leem as salas de forma idêntica. A relação tem uma fluidez social invulgar desde o primeiro dia.",
  'compatibility.mbti.ENFJ-ENFJ.friction': "Ambos gerem os sentimentos de todos enquanto suprimem os seus em silêncio. O ressentimento acumula-se na cave que nenhum reconhecerá.",
  'compatibility.mbti.ENFJ-ENFJ.together': "Um par de alto desempenho, generoso, externamente impressionante — grandes anfitriões, ligeiramente exaustos em privado.",
  'compatibility.mbti.ENFJ-ENFJ.practice': "Ambos têm de arriscar-se a ser inconvenientes. Para de ler a sala e diz o que realmente sentes.",

  'compatibility.mbti.ENFJ-ENFP.dynamic': "Ambos lideram com emoção e possibilidade. As conversas são quentes, expansivas e rapidamente íntimas.",
  'compatibility.mbti.ENFJ-ENFP.friction': "O ENFJ quer conexão ao serviço de algo; o ENFP quer conexão por si mesma. O ENFJ começa a sentir-se gerido; o ENFP começa a sentir-se dirigido.",
  'compatibility.mbti.ENFJ-ENFP.together': "Um par brilhante, social, idealista — forte em sentido partilhado, fraco em logística.",
  'compatibility.mbti.ENFJ-ENFP.practice': "O ENFJ tem de parar de otimizar a vida do ENFP. O ENFP tem de parar de ler a estrutura do ENFJ como controlo.",

  'compatibility.mbti.ENFJ-ENTJ.dynamic': "Dois líderes, um quente um frio, ambos avançando com convicção. Os planos fazem-se e executam-se com rapidez invulgar.",
  'compatibility.mbti.ENFJ-ENTJ.friction': "O ENTJ otimiza para resultados; o ENFJ otimiza para pessoas. O ENTJ lê o cuidado do ENFJ como ineficiência; o ENFJ lê o motor do ENTJ como frio.",
  'compatibility.mbti.ENFJ-ENTJ.together': "Um modelo de casal de poder — visível, produtivo, formidável em qualquer sala que partilham.",
  'compatibility.mbti.ENFJ-ENTJ.practice': "O ENTJ tem de considerar as pessoas antes, não no fim. O ENFJ tem de parar de suavizar verdades duras que o ENTJ verá de qualquer forma.",

  'compatibility.mbti.ENFJ-ENTP.dynamic': "O ENTP traz ideias provocadoras; o ENFJ dá-lhes um enquadramento relacional. O ENTP é testemunhado; o ENFJ é esticado.",
  'compatibility.mbti.ENFJ-ENTP.friction': "O ENTP debate por desporto; o ENFJ leva o desacordo pessoalmente. O ENFJ suaviza; o ENTP pica; o ciclo escala.",
  'compatibility.mbti.ENFJ-ENTP.together': "Um par vivo, intelectualmente caloroso — forte em conversa, fraco em resolução de conflitos.",
  'compatibility.mbti.ENFJ-ENTP.practice': "O ENTP tem de aprender que algumas coisas não se devem picar. O ENFJ tem de parar de ler cada desafio como ameaça relacional.",

  'compatibility.mbti.ENFJ-ESFJ.dynamic': "Dois Fe-dominantes criam calor relacional imediato. Receber, presentear, lembrar — músculos partilhados, mutuamente apreciados.",
  'compatibility.mbti.ENFJ-ESFJ.friction': "O ESFJ por defeito puxa para a tradição; o ENFJ por defeito puxa para a visão. O ENFJ empurra crescimento; o ESFJ quer estabilidade — ambos se sentem desapoiados.",
  'compatibility.mbti.ENFJ-ESFJ.together': "Um par caloroso, social, profundamente hospitaleiro — grandes pais, ligeiramente convencionais.",
  'compatibility.mbti.ENFJ-ESFJ.practice': "O ENFJ tem de parar de enquadrar as preferências do ESFJ como pequenas. O ESFJ tem de parar de ler a ambição do ENFJ como descontentamento.",

  'compatibility.mbti.ENFJ-ESFP.dynamic': "O ENFJ dá ao ESFP profundidade e direção; o ESFP dá ao ENFJ permissão para estar no momento. Ambos são pessoas de pessoas.",
  'compatibility.mbti.ENFJ-ESFP.friction': "O ENFJ planeia o sentido; o ESFP quer a experiência. O ENFJ sente-se sozinho com o futuro; o ESFP sente-se sermoado.",
  'compatibility.mbti.ENFJ-ESFP.together': "Um par brilhante, generoso, caloroso — forte em conexão, leve em estrutura.",
  'compatibility.mbti.ENFJ-ESFP.practice': "O ENFJ tem de libertar o ESFP de ser um projeto. O ESFP tem de valorizar a vista mais longa do ENFJ.",

  'compatibility.mbti.ENFJ-ESTJ.dynamic': "Ambos lideram, ambos organizam, ambos mantêm as coisas em marcha. Há respeito mútuo pela capacidade.",
  'compatibility.mbti.ENFJ-ESTJ.friction': "O ESTJ quer eficiência; o ENFJ quer harmonia. O ESTJ lê o ENFJ como politicamente brando; o ENFJ lê o ESTJ como relacionalmente brusco.",
  'compatibility.mbti.ENFJ-ESTJ.together': "Um par de alto desempenho, virado para o público — geniais em logística, propensos a suprimir a camada branda.",
  'compatibility.mbti.ENFJ-ESTJ.practice': "O ESTJ tem de reconhecer os sentimentos como dados, não como fricção. O ENFJ tem de parar de traduzir cada diretiva num gesto relacional.",

  'compatibility.mbti.ENFJ-ESTP.dynamic': "A imediatez do ESTP desbloqueia o ENFJ; o ENFJ dá ao ESTP um arco de vida. Há calor real entre estes dois.",
  'compatibility.mbti.ENFJ-ESTP.friction': "O ESTP vive agora; o ENFJ vive em direção a algo. O ESTP lê o ENFJ como pregador; o ENFJ lê o ESTP como superficial.",
  'compatibility.mbti.ENFJ-ESTP.together': "Um par vivo, carregado — emocionante e instável a partes iguais.",
  'compatibility.mbti.ENFJ-ESTP.practice': "O ESTP tem de abrandar para a conversa de sentido. O ENFJ tem de parar de fazer do ESTP um projeto de desenvolvimento.",

  'compatibility.mbti.ENFJ-INFJ.dynamic': "Dois tipos Ni-Fe partilham a rara experiência de serem encontrados. As conversas são profundas, rápidas e silenciosamente compreendidas.",
  'compatibility.mbti.ENFJ-INFJ.friction': "O ENFJ age sobre a visão; o INFJ refina-a para sempre. O ENFJ empurra; o INFJ retira-se; ambos se sentem traídos.",
  'compatibility.mbti.ENFJ-INFJ.together': "Um par profundamente sintonizado — excecionalmente próximo, ocasionalmente sufocante.",
  'compatibility.mbti.ENFJ-INFJ.practice': "O ENFJ tem de dar ao INFJ espaço para processar sem envolvimento. O INFJ tem de sair da profundidade e agir.",

  'compatibility.mbti.ENFJ-INFP.dynamic': "A energia do ENFJ encontra a profundidade do INFP. Ambos valorizam o sentido, a autenticidade e a seriedade moral.",
  'compatibility.mbti.ENFJ-INFP.friction': "O ENFJ quer ajudar; o INFP quer ser deixado sozinho com os seus sentimentos. A ajuda lê-se como intrusão; a retirada lê-se como rejeição.",
  'compatibility.mbti.ENFJ-INFP.together': "Um par terno, idealista — forte em valores partilhados, frágil no ritmo do dia a dia.",
  'compatibility.mbti.ENFJ-INFP.practice': "O ENFJ tem de parar de tentar consertar o INFP. O INFP tem de comunicar antes de se retirar, não depois.",

  'compatibility.mbti.ENFJ-INTJ.dynamic': "Ambos partilham Ni — a visão alinha-se a nível profundo. O ENFJ humaniza os planos do INTJ; o INTJ rigoriza o cuidado do ENFJ.",
  'compatibility.mbti.ENFJ-INTJ.friction': "O INTJ otimiza; o ENFJ harmoniza. O INTJ lê a emoção do ENFJ como ruído; o ENFJ lê a lógica do INTJ como fria.",
  'compatibility.mbti.ENFJ-INTJ.together': "Um par complementar, frequentemente silenciosamente poderoso — visionário e quente quando ambos honram o que o outro acrescenta.",
  'compatibility.mbti.ENFJ-INTJ.practice': "O INTJ tem de dar peso aos dados relacionais. O ENFJ tem de parar de traduzir o desacordo lógico como pessoal.",

  'compatibility.mbti.ENFJ-INTP.dynamic': "O INTP traz a estrutura; o ENFJ traz a aplicação. O INTP descongela-se; o ENFJ afia-se.",
  'compatibility.mbti.ENFJ-INTP.friction': "O INTP quer pensar sozinho; o ENFJ quer processar juntos. O INTP retira-se; o ENFJ pressiona; o ciclo intensifica-se.",
  'compatibility.mbti.ENFJ-INTP.together': "Um par estranho que, quando funciona, integra cabeça e coração invulgarmente bem.",
  'compatibility.mbti.ENFJ-INTP.practice': "O INTP tem de trazer à tona o seu pensamento antes de o terminar. O ENFJ tem de dar ao INTP solidão sem pânico.",

  'compatibility.mbti.ENFJ-ISFJ.dynamic': "Dois tipos Fe — ritmos diferentes, mesmo calor. O ISFJ cuida da casa; o ENFJ cuida do mundo; ambos asseguram que as pessoas se sintam seguras.",
  'compatibility.mbti.ENFJ-ISFJ.friction': "O ENFJ empurra para fora; o ISFJ mantém-se firme. O ENFJ lê o ISFJ como estático; o ISFJ lê o ENFJ como inquietante.",
  'compatibility.mbti.ENFJ-ISFJ.together': "Um par caloroso, duradouro, orientado à família — forte em cuidado, leve em novidade.",
  'compatibility.mbti.ENFJ-ISFJ.practice': "O ENFJ tem de abrandar ao tempo do ISFJ. O ISFJ tem de arriscar sair da zona de conforto à qual o ENFJ o convida.",

  'compatibility.mbti.ENFJ-ISFP.dynamic': "O calor do ENFJ encontra a profundidade silenciosa do ISFP. O ISFP é um dos poucos tipos que o ENFJ não consegue ler facilmente — o que se torna a atração.",
  'compatibility.mbti.ENFJ-ISFP.friction': "O ENFJ quer conexão verbal; o ISFP mostra amor através da presença. O ENFJ lê silêncio como distância; o ISFP lê pressão como intrusão.",
  'compatibility.mbti.ENFJ-ISFP.together': "Um par suave, artístico, silenciosamente próximo — bonito nos seus ritmos, difícil para os de fora ver por dentro.",
  'compatibility.mbti.ENFJ-ISFP.practice': "O ENFJ tem de aprender a linguagem do amor do ISFP. O ISFP tem de verbalizar o que pensa que o ENFJ já sabe.",

  'compatibility.mbti.ENFJ-ISTJ.dynamic': "Ritmos diferentes mas seriedade partilhada sobre o compromisso. O ENFJ traz calor; o ISTJ traz fiabilidade.",
  'compatibility.mbti.ENFJ-ISTJ.friction': "O ISTJ faz o que foi acordado; o ENFJ continua a ajustar segundo as pessoas. O ISTJ sente-se sacudido; o ENFJ sente-se rigidamente resistido.",
  'compatibility.mbti.ENFJ-ISTJ.together': "Um par estável, fiável, ligeiramente tradicional — forte em confiança, fraco em vocabulário emocional.",
  'compatibility.mbti.ENFJ-ISTJ.practice': "O ISTJ tem de ler os dados relacionais que o ENFJ continua a trazer. O ENFJ tem de honrar o acordo, não o último estado de espírito.",

  'compatibility.mbti.ENFJ-ISTP.dynamic': "O ENFJ quer saber o que sente o ISTP; o ISTP nem sempre sabe. O ENFJ torna-se o tradutor que o ISTP precisa mas não pedirá.",
  'compatibility.mbti.ENFJ-ISTP.friction': "O ISTP precisa de solidão; o ENFJ precisa de envolvimento. O ISTP retira-se; o ENFJ persegue; a perseguição torna-se a relação.",
  'compatibility.mbti.ENFJ-ISTP.together': "Um par complementar, algo desigual — funciona quando o ENFJ sustenta o fio relacional, falha quando o ENFJ se esgota.",
  'compatibility.mbti.ENFJ-ISTP.practice': "O ISTP tem de devolver o alcance, não apenas receber. O ENFJ tem de parar de substituir a sua leitura pelas palavras reais do ISTP.",

  'compatibility.mbti.ENFP-ENFP.dynamic': "Dois campeadores faíscam com os entusiasmos um do outro. As possibilidades multiplicam-se; as conversas saltam; tudo se sente vivo.",
  'compatibility.mbti.ENFP-ENFP.friction': "Nenhum termina. Dois Ne-doms juntos geram ideias mais depressa do que qualquer um pode aterrar. As promessas acumulam-se; o seguimento evapora.",
  'compatibility.mbti.ENFP-ENFP.together': "Um par brilhante, gerador, disperso — radiante em movimento, frágil quando há que comprometer-se.",
  'compatibility.mbti.ENFP-ENFP.practice': "Um dos dois tem de ser quem realmente cumpre. Trocar conscientemente; não deixar que o outro o faça.",

  'compatibility.mbti.ENFP-ENTJ.dynamic': "O ENFP fornece possibilidade; o ENTJ fornece execução. O ENFP sente que os planos do ENTJ ganham coração; o ENTJ sente que as ideias do ENFP ganham peso.",
  'compatibility.mbti.ENFP-ENTJ.friction': "O ENTJ quer decisões; o ENFP quer opções abertas. O ENTJ lê o ENFP como leve; o ENFP lê o ENTJ como rolo compressor.",
  'compatibility.mbti.ENFP-ENTJ.together': "Um par de poder e faísca — quando funciona, é difícil competir com ele.",
  'compatibility.mbti.ENFP-ENTJ.practice': "O ENTJ tem de abrandar o ciclo de decisão para que o ENFP se sinta escolhido, não atribuído. O ENFP tem de comprometer-se com uma coisa e levá-la até ao fim.",

  'compatibility.mbti.ENFP-ENTP.dynamic': "Dois Ne-doms em chaves diferentes (um Fi, outro Ti). As conversas são selvagens, geradoras e genuinamente divertidas.",
  'compatibility.mbti.ENFP-ENTP.friction': "O ENTP debate pela alegria; o ENFP toma posições pessoalmente. O ENTP pica; o ENFP magoa-se; o jogo torna-se luta.",
  'compatibility.mbti.ENFP-ENTP.together': "Um par vivo, rico em ideias — alta amperagem, curtos-circuitos ocasionais.",
  'compatibility.mbti.ENFP-ENTP.practice': "O ENTP tem de registar quando os valores do ENFP estão em jogo. O ENFP tem de diferenciar desporto de ataque.",

  'compatibility.mbti.ENFP-ESFJ.dynamic': "O ESFJ dá ao ENFP um lar emocional estável; o ENFP dá ao ESFJ permissão para vaguear. Há alívio mútuo.",
  'compatibility.mbti.ENFP-ESFJ.friction': "O ESFJ quer compromisso com como as coisas têm sido feitas; o ENFP quer permissão para fazê-las diferente. Tradição vs. exploração.",
  'compatibility.mbti.ENFP-ESFJ.together': "Um par caloroso, social, cuidado — forte em hospitalidade, por vezes desajustado em horizontes.",
  'compatibility.mbti.ENFP-ESFJ.practice': "O ESFJ tem de deixar o ENFP improvisar. O ENFP tem de honrar os rituais que o ESFJ mantém vivos.",

  'compatibility.mbti.ENFP-ESFP.dynamic': "Ambos são tipos calorosos, sociais, plenamente presentes — diferentes intuições, mesmo amor pelo momento. A energia é alta.",
  'compatibility.mbti.ENFP-ESFP.friction': "O ENFP vive em possibilidade; o ESFP vive no presente. O ENFP continua a gesticular para o depois; o ESFP não vê a urgência.",
  'compatibility.mbti.ENFP-ESFP.together': "Um par brilhante, alegre, algo pouco aterrado — diversão fácil, estrutura difícil.",
  'compatibility.mbti.ENFP-ESFP.practice': "O ENFP tem de parar de ler o foco-agora do ESFP como superficial. O ESFP tem de comprometer-se com o futuro para o qual o ENFP continua a apontar.",

  'compatibility.mbti.ENFP-ESTJ.dynamic': "O ESTJ fornece a estrutura que o ENFP secretamente anseia; o ENFP traz a possibilidade que o ESTJ secretamente sente falta. Os opostos atraem-se aqui, real.",
  'compatibility.mbti.ENFP-ESTJ.friction': "O ESTJ quer o plano acordado executado; o ENFP quer rever a meio voo. O ESTJ lê caos; o ENFP lê jaula.",
  'compatibility.mbti.ENFP-ESTJ.together': "Um par complementar quando ambos se inclinam um para o outro — abrasivo quando ambos se entrincheiram.",
  'compatibility.mbti.ENFP-ESTJ.practice': "O ESTJ tem de sustentar a estrutura sem agarrá-la. O ENFP tem de honrar o plano uma vez fixado.",

  'compatibility.mbti.ENFP-ESTP.dynamic': "Ambos são tipos vivos, energéticos, amantes da ação — diferentes funções, tempo similar. As aventuras acumulam-se.",
  'compatibility.mbti.ENFP-ESTP.friction': "O ESTP quer agora; o ENFP quer sentido. O ESTP lê o ENFP como pensar de mais; o ENFP lê o ESTP como sentir de menos.",
  'compatibility.mbti.ENFP-ESTP.together': "Um par de alta energia, social, ligeiramente impulsivo — forte em movimento, fraco em profundidade.",
  'compatibility.mbti.ENFP-ESTP.practice': "O ESTP tem de envolver-se com os valores do ENFP, não apenas com a ação. O ENFP tem de parar de tentar fazer o ESTP profundo.",

  'compatibility.mbti.ENFP-INFJ.dynamic': "Um par famosamente magnético — o INFJ reconhece a profundidade do ENFP; o ENFP saca o INFJ. Ambos se sentem vistos depressa.",
  'compatibility.mbti.ENFP-INFJ.friction': "O INFJ sustenta a profundidade quieta; o ENFP dispersa-a. O INFJ lê o ENFP como inquieto; o ENFP lê o INFJ como retentor.",
  'compatibility.mbti.ENFP-INFJ.together': "Um par intenso, frequentemente muito próximo — bonito, ocasionalmente exaustivo na sua intensidade emocional.",
  'compatibility.mbti.ENFP-INFJ.practice': "O INFJ tem de subir ao tempo do ENFP às vezes. O ENFP tem de aterrar o suficiente para que o INFJ realmente o encontre.",

  'compatibility.mbti.ENFP-INFP.dynamic': "Dois tipos que usam Fi em torno de valores partilhados. A autenticidade é a língua; ambos sentem uma rara permissão de serem eles mesmos.",
  'compatibility.mbti.ENFP-INFP.friction': "O ENFP processa para fora; o INFP processa para dentro. O ENFP quer envolvimento; o INFP precisa de retiro. Perseguir-retirar é real.",
  'compatibility.mbti.ENFP-INFP.together': "Um par terno, idealista, profundamente sentido — forte em valores, fraco em logística.",
  'compatibility.mbti.ENFP-INFP.practice': "O ENFP tem de dar ao INFP solidão sem fazer disso uma crise. O INFP tem de trazer à tona o que se passa antes de desvanecer.",

  'compatibility.mbti.ENFP-INTJ.dynamic': "Um par muito querido no imaginário MBTI — a estrutura do INTJ encontra a faísca do ENFP; ambos encontram o raro parceiro que os faz mais eles mesmos.",
  'compatibility.mbti.ENFP-INTJ.friction': "O INTJ quer o plano comprometido; o ENFP quer o plano aberto. O INTJ lê caos; o ENFP lê jaula.",
  'compatibility.mbti.ENFP-INTJ.together': "Um par complementar com profundidade e alcance invulgares — um casal de poder em disfarces diferentes.",
  'compatibility.mbti.ENFP-INTJ.practice': "O INTJ tem de considerar o clima emocional do ENFP. O ENFP tem de comprometer-se e executar, não apenas gerar.",

  'compatibility.mbti.ENFP-INTP.dynamic': "Ambos são tipos que usam Ne — as conversas percorrem o espaço de possibilidades sem esforço. O INTP aquece-se; o ENFP afia-se.",
  'compatibility.mbti.ENFP-INTP.friction': "O INTP quer pensar sozinho; o ENFP quer pensar juntos. O INTP retira-se a processar; o ENFP sente-se abandonado.",
  'compatibility.mbti.ENFP-INTP.together': "Um par brilhante, intelectualmente brincalhão — forte em conversa, fraco em ritmo emocional.",
  'compatibility.mbti.ENFP-INTP.practice': "O INTP tem de partilhar o pensamento meio formado, não o terminado. O ENFP tem de dar ao INTP espaço de processo sem pânico.",

  'compatibility.mbti.ENFP-ISFJ.dynamic': "O ISFJ cuida da casa e das rotinas; o ENFP traz vida e surpresa. Há complementaridade real aqui.",
  'compatibility.mbti.ENFP-ISFJ.friction': "O ISFJ quer estabilidade; o ENFP quer novidade. O ISFJ lê o ENFP como instável; o ENFP lê o ISFJ como restritivo.",
  'compatibility.mbti.ENFP-ISFJ.together': "Um par caloroso, algo doméstico, algo inquieto — funciona quando ambos honram o que o outro fornece.",
  'compatibility.mbti.ENFP-ISFJ.practice': "O ISFJ tem de flexibilizar as rotinas para os surtos do ENFP. O ENFP tem de valorizar o que o ISFJ mantém vivo.",

  'compatibility.mbti.ENFP-ISFP.dynamic': "Dois tipos Fi-líderes — os valores alinham-se depressa, e a relação tem uma honestidade emocional invulgar.",
  'compatibility.mbti.ENFP-ISFP.friction': "O ENFP processa verbalmente; o ISFP processa em silêncio. O ENFP sente-se bloqueado; o ISFP sente-se invadido.",
  'compatibility.mbti.ENFP-ISFP.together': "Um par suave, conduzido por valores — forte em sentido partilhado, leve em iniciativa.",
  'compatibility.mbti.ENFP-ISFP.practice': "O ENFP tem de dar ao ISFP silêncio sem o encher. O ISFP tem de pôr palavras no que pensava ser óbvio.",

  'compatibility.mbti.ENFP-ISTJ.dynamic': "O ISTJ fornece a estabilidade que o ENFP secretamente precisa; o ENFP fornece a vida que o ISTJ secretamente goza. Complementaridade real.",
  'compatibility.mbti.ENFP-ISTJ.friction': "O ISTJ quer o plano honrado; o ENFP quer revisão bem-vinda. O ISTJ lê caos; o ENFP lê rigidez.",
  'compatibility.mbti.ENFP-ISTJ.together': "Um par complementar que funciona quando ambos ajustam para o meio.",
  'compatibility.mbti.ENFP-ISTJ.practice': "O ISTJ tem de flexibilizar sem o ver como traição. O ENFP tem de entregar o que foi acordado.",

  'compatibility.mbti.ENFP-ISTP.dynamic': "O ISTP traz competência calma; o ENFP traz entusiasmo caloroso. Cada um carrega algo que o outro não consegue gerar sozinho.",
  'compatibility.mbti.ENFP-ISTP.friction': "O ENFP quer envolvimento emocional; o ISTP quer espaço calmo. O ENFP empurra; o ISTP retira-se.",
  'compatibility.mbti.ENFP-ISTP.together': "Um par estranho — funciona quando o ENFP sustenta o fio relacional e o ISTP aparece de forma fiável para o prático.",
  'compatibility.mbti.ENFP-ISTP.practice': "O ISTP tem de traduzir o cuidado em palavras às vezes. O ENFP tem de ler as ações do ISTP como a carta de amor que são.",

  'compatibility.mbti.ENTJ-ENTJ.dynamic': "Dois comandantes reconhecem-se ao instante. As decisões tomam-se depressa; as ambições alinham-se sem negociação.",
  'compatibility.mbti.ENTJ-ENTJ.friction': "Ambos lutam pelo controlo; nenhum cede facilmente. As lutas de poder tornam-se pessoais depressa.",
  'compatibility.mbti.ENTJ-ENTJ.together': "Um par executivo formidável — eficiente no mundo, dependente de missão partilhada para se manter alinhado.",
  'compatibility.mbti.ENTJ-ENTJ.practice': "Ambos têm de revezar-se em seguir. A força não é o problema; ceder é.",

  'compatibility.mbti.ENTJ-ENTP.dynamic': "O ENTJ executa; o ENTP inova. O ENTP fornece o ângulo inesperado; o ENTJ converte-o em plano.",
  'compatibility.mbti.ENTJ-ENTP.friction': "O ENTJ quer fecho; o ENTP quer a porta aberta. O ENTJ pressiona por decisão; o ENTP continua a reabrir.",
  'compatibility.mbti.ENTJ-ENTP.together': "Um par de alto desempenho, rico em ideias — formidável quando os papéis são claros.",
  'compatibility.mbti.ENTJ-ENTP.practice': "O ENTJ tem de deixar espaço para a próxima iteração. O ENTP tem de comprometer-se quando o compromisso é o necessário.",

  'compatibility.mbti.ENTJ-ESFJ.dynamic': "O ENTJ lidera externamente; o ESFJ sustenta o tecido social. Juntos levam uma vida apertada e bem cuidada.",
  'compatibility.mbti.ENTJ-ESFJ.friction': "O ESFJ quer reconhecimento emocional; o ENTJ por defeito vai à logística. O ESFJ sente-se invisível; o ENTJ sente-se ralhado.",
  'compatibility.mbti.ENTJ-ESFJ.together': "Um par de alto desempenho, externamente impressionante — forte em capacidade, vulnerável em calor.",
  'compatibility.mbti.ENTJ-ESFJ.practice': "O ENTJ tem de registar o trabalho emocional do ESFJ explicitamente. O ESFJ tem de pedir diretamente, não insinuar.",

  'compatibility.mbti.ENTJ-ESFP.dynamic': "O ESFP descontrai o ENTJ; o ENTJ orienta o ESFP. Ambos gostam de ação decisiva e resultados tangíveis.",
  'compatibility.mbti.ENTJ-ESFP.friction': "O ENTJ planeia para resultados; o ESFP planeia para o momento. O ENTJ lê o ESFP como indisciplinado; o ESFP lê o ENTJ como sem alegria.",
  'compatibility.mbti.ENTJ-ESFP.together': "Um par vivo, orientado à ação — forte em impulso, por vezes leve em coerência a longo prazo.",
  'compatibility.mbti.ENTJ-ESFP.practice': "O ENTJ tem de considerar a necessidade do ESFP do agora. O ESFP tem de honrar os arcos mais longos do ENTJ.",

  'compatibility.mbti.ENTJ-ESTJ.dynamic': "Dois Te-doms — eficiência, resultados e hierarquias claras são línguas maternas mútuas. As decisões tomam-se.",
  'compatibility.mbti.ENTJ-ESTJ.friction': "Ambos querem ser a voz que decide. O poder é disputado direta e frequentemente.",
  'compatibility.mbti.ENTJ-ESTJ.together': "Um par formidável, capaz, ligeiramente hierárquico — forte em resultados, fraco em largura de banda emocional.",
  'compatibility.mbti.ENTJ-ESTJ.practice': "Ambos têm de dar peso aos dados relacionais. Revezarem-se em ceder nas coisas em que ambos não têm interesse.",

  'compatibility.mbti.ENTJ-ESTP.dynamic': "Ambos são audazes, orientados à ação, impulsionados por resultados. Os planos executam-se depressa e os negócios fecham-se.",
  'compatibility.mbti.ENTJ-ESTP.friction': "O ENTJ corre estratégia; o ESTP corre tática. O ENTJ sente o ESTP improvisar o plano; o ESTP sente o ENTJ sobre-engenhar o momento.",
  'compatibility.mbti.ENTJ-ESTP.together': "Um par de alta octanagem, comprometido com o mundo — formidável em movimento, frágil em paciência.",
  'compatibility.mbti.ENTJ-ESTP.practice': "O ENTJ tem de deixar o ESTP ler a sala e ajustar. O ESTP tem de honrar o jogo mais longo.",

  'compatibility.mbti.ENTJ-INFJ.dynamic': "Ambos são tipos que usam Ni — a visão alinha-se em profundidade. O INFJ humaniza os planos do ENTJ; o ENTJ rigoriza as intuições do INFJ.",
  'compatibility.mbti.ENTJ-INFJ.friction': "O ENTJ pressiona por ação; o INFJ resiste ao fecho prematuro. O ENTJ lê o INFJ como evasivo; o INFJ lê o ENTJ como rolo compressor.",
  'compatibility.mbti.ENTJ-INFJ.together': "Um par complementar, frequentemente silenciosamente poderoso — visionário e capaz quando ambos honram o que o outro acrescenta.",
  'compatibility.mbti.ENTJ-INFJ.practice': "O ENTJ tem de esperar a intuição completa do INFJ. O INFJ tem de aterrar uma opinião sobre a qual o ENTJ possa agir.",

  'compatibility.mbti.ENTJ-INFP.dynamic': "Famosamente polar — funções opostas em papéis opostos. Quando isto funciona, é transformador; quando não, é doloroso.",
  'compatibility.mbti.ENTJ-INFP.friction': "O ENTJ pressiona por resultados; o INFP precisa de sentir que os valores estão intactos. Te-Fe vs Fi-Ne cria más leituras reais.",
  'compatibility.mbti.ENTJ-INFP.together': "Um par de alta amplitude — bonito em estações longas e quentes, brutal em tempestades.",
  'compatibility.mbti.ENTJ-INFP.practice': "O ENTJ tem de abrandar para o exame de valores do INFP. O INFP tem de parar de ler a franqueza como crueldade.",

  'compatibility.mbti.ENTJ-INTJ.dynamic': "Dois estrategas NT — visão e execução alinham-se sem tradução. O plano existe antes de a reunião começar.",
  'compatibility.mbti.ENTJ-INTJ.friction': "O ENTJ quer decisões; o INTJ quer mais análise. O ENTJ pressiona; o INTJ demora-se; ambos se sentem apressados e mal preparados.",
  'compatibility.mbti.ENTJ-INTJ.together': "Um par formidável, intelectualmente alinhado — forte em sistemas, fraco em vocabulário emocional.",
  'compatibility.mbti.ENTJ-INTJ.practice': "O ENTJ tem de deixar o INTJ acabar de pensar. O INTJ tem de comprometer-se antes de todos os dados estarem reunidos.",

  'compatibility.mbti.ENTJ-INTP.dynamic': "O INTP fornece o modelo; o ENTJ testa-o no mundo. Juntos podem construir coisas invulgarmente rigorosas.",
  'compatibility.mbti.ENTJ-INTP.friction': "O ENTJ quer o modelo implementado; o INTP quere-o aperfeiçoado. O ENTJ empurra a porta aberta; o INTP continua a mantê-la fechada.",
  'compatibility.mbti.ENTJ-INTP.together': "Um par de especialista e executor — silenciosamente poderoso quando ambos respeitam o que o outro fornece.",
  'compatibility.mbti.ENTJ-INTP.practice': "O ENTJ tem de valorizar o processo do INTP, não apenas o resultado. O INTP tem de entregar a versão por terminar.",

  'compatibility.mbti.ENTJ-ISFJ.dynamic': "O ENTJ encarrega-se do mundo; o ISFJ encarrega-se da casa. Há clara divisão de tarefas e respeito mútuo.",
  'compatibility.mbti.ENTJ-ISFJ.friction': "O ENTJ quer eficiência; o ISFJ quer tradição. O ENTJ passa por cima do cuidado do ISFJ; o ISFJ ressente o atropelo.",
  'compatibility.mbti.ENTJ-ISFJ.together': "Um par capaz, fiável, algo tradicional — forte em papéis, fraco em negociação.",
  'compatibility.mbti.ENTJ-ISFJ.practice': "O ENTJ tem de consultar o ISFJ antes de decidir por eles. O ISFJ tem de afirmar preferências em voz alta, não em silêncio.",

  'compatibility.mbti.ENTJ-ISFP.dynamic': "O ENTJ fornece direção; o ISFP fornece o aterrar em valores. O ponto cego do ENTJ é Fi; o do ISFP é Te — complementaridade natural.",
  'compatibility.mbti.ENTJ-ISFP.friction': "O ENTJ quer planear o futuro; o ISFP quer habitar o presente. O ENTJ passa por cima; o ISFP retira-se.",
  'compatibility.mbti.ENTJ-ISFP.together': "Um par estranho que, quando funciona, equilibra motor e profundidade invulgarmente bem.",
  'compatibility.mbti.ENTJ-ISFP.practice': "O ENTJ tem de parar de decidir pelo ISFP. O ISFP tem de pôr voz aos valores antes de serem atropelados.",

  'compatibility.mbti.ENTJ-ISTJ.dynamic': "Ambos os tipos Te-líderes valorizam a execução, fiabilidade e padrões claros. As operações funcionam suavemente.",
  'compatibility.mbti.ENTJ-ISTJ.friction': "O ENTJ quer mudança; o ISTJ quer o método provado. O ENTJ empurra; o ISTJ tensiona-se; a iteração emperra.",
  'compatibility.mbti.ENTJ-ISTJ.together': "Um par capaz, fiável, ligeiramente conservador — forte em seguimento, fraco em inovação.",
  'compatibility.mbti.ENTJ-ISTJ.practice': "O ENTJ tem de argumentar a mudança antes de empurrar. O ISTJ tem de envolver-se com nova evidência, não descartá-la.",

  'compatibility.mbti.ENTJ-ISTP.dynamic': "O ENTJ comanda; o ISTP executa — mas só nos seus próprios termos. Há respeito mútuo pela capacidade sem sentimentalismo.",
  'compatibility.mbti.ENTJ-ISTP.friction': "O ENTJ quer cumprimento; o ISTP quer autonomia. O ENTJ empurra; o ISTP desliga-se; a relação fica em silêncio.",
  'compatibility.mbti.ENTJ-ISTP.together': "Um par capaz, de pouca emoção — forte em fazer coisas, fraco em conexão emocional.",
  'compatibility.mbti.ENTJ-ISTP.practice': "O ENTJ tem de conceder autonomia ao ISTP. O ISTP tem de trazer à tona o desacordo antes de simplesmente ficar calado.",

  'compatibility.mbti.ENTP-ENTP.dynamic': "Dois debatedores faíscam um com o outro sem fim. As conversas são ruidosas, geradoras e exaustivas para os de fora.",
  'compatibility.mbti.ENTP-ENTP.friction': "Nenhum cede; ambos continuam a picar. Sem um projeto externo, a relação torna-se puro debate sem resolução.",
  'compatibility.mbti.ENTP-ENTP.together': "Um par brilhante, intelectualmente elétrico — formidável em movimento, frágil em quietude.",
  'compatibility.mbti.ENTP-ENTP.practice': "Ambos têm de aterrar. Toma uma decisão e vive com ela; o debate não é intimidade.",

  'compatibility.mbti.ENTP-ESFJ.dynamic': "O ESFJ cuida do tecido relacional; o ENTP traz novidade e desafio. Há alívio mútuo — o ENTP recebe cuidado, o ESFJ é esticado.",
  'compatibility.mbti.ENTP-ESFJ.friction': "O ENTP debate tudo; o ESFJ leva o desacordo como ameaça relacional. O ENTP pica; o ESFJ magoa-se; o ciclo escala.",
  'compatibility.mbti.ENTP-ESFJ.together': "Um par caloroso e esticado — funciona quando ambos honram o que o outro fornece.",
  'compatibility.mbti.ENTP-ESFJ.practice': "O ENTP tem de registar que algumas coisas não estão em debate. O ESFJ tem de parar de ler o desafio como pessoal.",

  'compatibility.mbti.ENTP-ESFP.dynamic': "Ambos são tipos vivos, sociais, otimistas. A energia é alta; a agenda social está cheia; ideias e aventuras multiplicam-se.",
  'compatibility.mbti.ENTP-ESFP.friction': "O ENTP quer brincadeira intelectual; o ESFP quer brincadeira experiencial. Diferentes formas de diversão começam a sentir-se desajustadas.",
  'compatibility.mbti.ENTP-ESFP.together': "Um par brilhante, expansivo — forte em movimento, fraco em profundidade.",
  'compatibility.mbti.ENTP-ESFP.practice': "O ENTP tem de juntar-se à diversão corpo-envolvida do ESFP. O ESFP tem de seguir a diversão ideia-envolvida do ENTP.",

  'compatibility.mbti.ENTP-ESTJ.dynamic': "O ESTJ estrutura; o ENTP inova. O ESTJ corre a organização que o ENTP continua a inventar.",
  'compatibility.mbti.ENTP-ESTJ.friction': "O ESTJ quer o plano executado; o ENTP quer o plano questionado. O ESTJ sente o caos; o ENTP sente a jaula.",
  'compatibility.mbti.ENTP-ESTJ.together': "Um par capaz, produtivo, por vezes conflituoso — forte em capacidade, vulnerável em tempo.",
  'compatibility.mbti.ENTP-ESTJ.practice': "O ESTJ tem de deixar o ENTP picar sem o tomar como insubordinação. O ENTP tem de honrar o plano executado.",

  'compatibility.mbti.ENTP-ESTP.dynamic': "Ambos são rápidos, espirituosos, orientados a ação e a ideias. Metem-se em sarilhos; saem; convertem-no em história.",
  'compatibility.mbti.ENTP-ESTP.friction': "O ENTP debate; o ESTP age; nenhum pausa. Quando algo corre mal, ambos desviam.",
  'compatibility.mbti.ENTP-ESTP.together': "Um par vivo, ligeiramente caótico — forte em aventura, fraco em quietude.",
  'compatibility.mbti.ENTP-ESTP.practice': "Ambos têm de parar e sentir antes de pivotar para a próxima coisa.",

  'compatibility.mbti.ENTP-INFJ.dynamic': "Um par MBTI muito celebrado — a profundidade do INFJ encontra a brincadeira do ENTP; ambos encontram o raro parceiro que pode ir fundo e subir.",
  'compatibility.mbti.ENTP-INFJ.friction': "O ENTP debate; o INFJ leva as coisas pessoalmente. O ENTP pica; o INFJ retira-se; a brincadeira torna-se ferida.",
  'compatibility.mbti.ENTP-INFJ.together': "Um par intenso, mutuamente intrigado — magnético quando funciona, exaustivo quando não.",
  'compatibility.mbti.ENTP-INFJ.practice': "O ENTP tem de registar a profundidade do INFJ, não picá-la. O INFJ tem de subir ao tempo do ENTP.",

  'compatibility.mbti.ENTP-INFP.dynamic': "O ENTP saca o INFP; o INFP dá ao ENTP uma âncora emocional. As conversas são amplas e quentes.",
  'compatibility.mbti.ENTP-INFP.friction': "O ENTP debate tudo; o INFP lê o desacordo como violação de valores. O ENTP pica; o INFP magoa-se.",
  'compatibility.mbti.ENTP-INFP.together': "Um par caloroso, rico em ideias — forte em conversa, frágil em desacordo.",
  'compatibility.mbti.ENTP-INFP.practice': "O ENTP tem de aprender que coisas o INFP sustenta como sagradas. O INFP tem de diferenciar desporto de ataque.",

  'compatibility.mbti.ENTP-INTJ.dynamic': "O ENTP fornece o ângulo surpreendente; o INTJ fornece o arco longo. Juntos podem fazer trabalho estratégico invulgarmente inventivo.",
  'compatibility.mbti.ENTP-INTJ.friction': "O INTJ quer fecho; o ENTP quer opções. O INTJ pressiona por decisão; o ENTP continua a reabrir.",
  'compatibility.mbti.ENTP-INTJ.together': "Um par famosamente gerador — afiado, produtivo, por vezes combativo.",
  'compatibility.mbti.ENTP-INTJ.practice': "O INTJ tem de deixar o ENTP iterar mais do que se sente confortável. O ENTP tem de comprometer-se quando o modelo é suficientemente bom.",

  'compatibility.mbti.ENTP-INTP.dynamic': "Dois tipos NT, um Ne extravertido / um Ti introvertido — as suas conversas cobrem terreno onde outras pessoas não chegam.",
  'compatibility.mbti.ENTP-INTP.friction': "O ENTP pressiona por ação; o INTP quer modelar primeiro. O ENTP impacienta-se; o INTP sente-se apressado.",
  'compatibility.mbti.ENTP-INTP.together': "Um par intelectualmente rico, de pouca emoção — forte em sistemas, fraco em cuidado relacional.",
  'compatibility.mbti.ENTP-INTP.practice': "O ENTP tem de dar ao INTP tempo de processo. O INTP tem de trazer à tona uma posição antes de estar perfeita.",

  'compatibility.mbti.ENTP-ISFJ.dynamic': "O ISFJ fornece estabilidade; o ENTP fornece novidade. O ISFJ tem uma vida mais interessante; o ENTP tem uma casa.",
  'compatibility.mbti.ENTP-ISFJ.friction': "O ENTP debate; o ISFJ quer harmonia. O ENTP pica; o ISFJ retira-se ferido; o ENTP não vê.",
  'compatibility.mbti.ENTP-ISFJ.together': "Um par complementar quando o ENTP abranda; difícil quando não.",
  'compatibility.mbti.ENTP-ISFJ.practice': "O ENTP tem de ler a dor silenciosa do ISFJ mais cedo. O ISFJ tem de trazer a dor à tona em voz alta.",

  'compatibility.mbti.ENTP-ISFP.dynamic': "O ENTP traz energia; o ISFP traz profundidade silenciosa. Cada um está intrigado pelo que o outro carrega.",
  'compatibility.mbti.ENTP-ISFP.friction': "O ENTP debate; o ISFP não. O ENTP pressiona por envolvimento; o ISFP retira-se mais.",
  'compatibility.mbti.ENTP-ISFP.together': "Um par estranho que é silenciosamente significativo quando o ENTP modula e o ISFP aparece.",
  'compatibility.mbti.ENTP-ISFP.practice': "O ENTP tem de parar de testar se o ISFP se vai envolver. O ISFP tem de envolver-se sem ser perseguido.",

  'compatibility.mbti.ENTP-ISTJ.dynamic': "O ISTJ fornece execução; o ENTP fornece invenção. Complementaridade real quando ambos honram o que o outro faz.",
  'compatibility.mbti.ENTP-ISTJ.friction': "O ENTP muda de rumo; o ISTJ quer o plano acordado. O ENTP improvisa; o ISTJ tensiona-se.",
  'compatibility.mbti.ENTP-ISTJ.together': "Um par capaz — quando os papéis estão acordados, entrega.",
  'compatibility.mbti.ENTP-ISTJ.practice': "O ENTP tem de honrar o plano original mais do que quer. O ISTJ tem de permitir mais revisão do que se sente confortável.",

  'compatibility.mbti.ENTP-ISTP.dynamic': "Ambos são tipos que usam Ti — modelos lógicos e competência são línguas maternas mútuas. Brincalhões, capazes, sem pelúcia.",
  'compatibility.mbti.ENTP-ISTP.friction': "O ENTP quer envolvimento; o ISTP quer solidão. O ENTP empurra; o ISTP retira-se; o ciclo corre.",
  'compatibility.mbti.ENTP-ISTP.together': "Um par capaz, intelectualmente alinhado — forte em sistemas, fraco em conexão emocional.",
  'compatibility.mbti.ENTP-ISTP.practice': "O ENTP tem de dar ao ISTP espaço. O ISTP tem de voltar da gruta a tempo.",

  'compatibility.mbti.ESFJ-ESFJ.dynamic': "Dois cônsules — calor, hospitalidade e lembrar os aniversários das pessoas são línguas maternas mútuas. A casa funciona.",
  'compatibility.mbti.ESFJ-ESFJ.friction': "Ambos gerem o tecido relacional e silenciosamente pontuam quem dá mais. O marcador nunca reinicia.",
  'compatibility.mbti.ESFJ-ESFJ.together': "Um par caloroso, social, ligeiramente convencional — forte em comunidade, fraco em balançar o barco.",
  'compatibility.mbti.ESFJ-ESFJ.practice': "Ambos têm de arriscar pedir diretamente o que querem, não insinuar e esperar.",

  'compatibility.mbti.ESFJ-ESFP.dynamic': "Dois tipos que usam sentir extravertido — a vida é social, expressiva e quente. Planos, festas e pessoas enchem a agenda.",
  'compatibility.mbti.ESFJ-ESFP.friction': "O ESFJ quer tradição; o ESFP quer improvisação. O ESFJ sente-se desestabilizado; o ESFP sente-se constrangido.",
  'compatibility.mbti.ESFJ-ESFP.together': "Um par caloroso, expressivo, vivo — forte em conexão, leve em arcos longos.",
  'compatibility.mbti.ESFJ-ESFP.practice': "O ESFJ tem de flexibilizar com o agora do ESFP. O ESFP tem de honrar os rituais do ESFJ.",

  'compatibility.mbti.ESFJ-ESTJ.dynamic': "O ESFJ cuida das pessoas; o ESTJ corre operações. Juntos cobrem bases relacionais e logísticas com eficiência.",
  'compatibility.mbti.ESFJ-ESTJ.friction': "O ESTJ quer eficiência; o ESFJ quer reconhecimento emocional. O ESTJ passa por cima; o ESFJ ressente.",
  'compatibility.mbti.ESFJ-ESTJ.together': "Um par capaz, tradicional, trabalhador — forte em papéis, fraco em flexibilidade.",
  'compatibility.mbti.ESFJ-ESTJ.practice': "O ESTJ tem de considerar os dados relacionais do ESFJ explicitamente. O ESFJ tem de pedir o que quer, não insinuar.",

  'compatibility.mbti.ESFJ-ESTP.dynamic': "O ESTP traz emoção; o ESFJ traz continuidade. O ESTP recebe uma base; o ESFJ é esticado.",
  'compatibility.mbti.ESFJ-ESTP.friction': "O ESTP improvisa; o ESFJ rastreia compromissos. O ESFJ sente o atraso do ESTP; o ESTP sente a contabilidade do ESFJ.",
  'compatibility.mbti.ESFJ-ESTP.together': "Um par caloroso, vivo, ligeiramente desajustado — funciona quando o ESTP aparece de forma fiável e o ESFJ flexibiliza no pequeno.",
  'compatibility.mbti.ESFJ-ESTP.practice': "O ESTP tem de honrar os compromissos relacionais do ESFJ. O ESFJ tem de deixar o ESTP improvisar sem pontuar.",

  'compatibility.mbti.ESFJ-INFJ.dynamic': "Dois tipos Fe, ritmos diferentes — o calor relacional flui em ambas as direções. O INFJ recebe cuidado; o ESFJ recebe profundidade.",
  'compatibility.mbti.ESFJ-INFJ.friction': "O ESFJ por defeito vai a convenções sociais; o INFJ por defeito vai à verdade interior. O ESFJ sente o INFJ afastar-se do grupo; o INFJ sente o ESFJ impor um tom.",
  'compatibility.mbti.ESFJ-INFJ.together': "Um par caloroso, atento — forte em cuidado, fraco em acordo sobre o que realmente importa.",
  'compatibility.mbti.ESFJ-INFJ.practice': "O ESFJ tem de dar ao INFJ espaço para discordar. O INFJ tem de envolver-se com a gramática social do ESFJ.",

  'compatibility.mbti.ESFJ-INFP.dynamic': "O ESFJ fornece cuidado logístico caloroso; o INFP fornece profundidade de valores. Há complementaridade se ambos honrarem o que o outro fornece.",
  'compatibility.mbti.ESFJ-INFP.friction': "O ESFJ quer envolvimento e tradição; o INFP quer solidão e autenticidade. Ambos se sentem pouco encontrados.",
  'compatibility.mbti.ESFJ-INFP.together': "Um par suave, caloroso — funciona quando o ESFJ permite o retiro e o INFP aprecia a estrutura.",
  'compatibility.mbti.ESFJ-INFP.practice': "O ESFJ tem de conceder solidão sem pânico. O INFP tem de participar nos rituais que sustentam a relação.",

  'compatibility.mbti.ESFJ-INTJ.dynamic': "O ESFJ cuida do campo social; o INTJ cuida do plano a longo prazo. Juntos cobrem ambos os registos.",
  'compatibility.mbti.ESFJ-INTJ.friction': "O ESFJ quer envolvimento relacional; o INTJ quer eficiência. O ESFJ sente-se invisível; o INTJ sente-se acossado.",
  'compatibility.mbti.ESFJ-INTJ.together': "Um par capaz mas emocionalmente desigual — forte em logística, vulnerável em calor.",
  'compatibility.mbti.ESFJ-INTJ.practice': "O INTJ tem de dar peso explícito aos dados relacionais do ESFJ. O ESFJ tem de pedir diretamente, não insinuar.",

  'compatibility.mbti.ESFJ-INTP.dynamic': "O ESFJ descongela o INTP; o INTP dá ao ESFJ profundidade. Há calor real aqui quando os ritmos coincidem.",
  'compatibility.mbti.ESFJ-INTP.friction': "O ESFJ quer envolvimento emocional; o INTP quer tempo sozinho. O ESFJ persegue; o INTP retira-se.",
  'compatibility.mbti.ESFJ-INTP.together': "Um par estranho que funciona quando o ESFJ permite espaço e o INTP aparece de forma consistente.",
  'compatibility.mbti.ESFJ-INTP.practice': "O ESFJ tem de dar ao INTP solidão sem fazer disso um referendo. O INTP tem de sair da gruta a tempo.",

  'compatibility.mbti.ESFJ-ISFJ.dynamic': "Dois SJ — tradição, família, hospitalidade e fiabilidade são línguas maternas partilhadas. Poucos pares são mais calorosos.",
  'compatibility.mbti.ESFJ-ISFJ.friction': "Ambos preferem a harmonia à honestidade; ambos deixam o ressentimento crescer em silêncio em vez de arriscar conflito.",
  'compatibility.mbti.ESFJ-ISFJ.together': "Um par caloroso, fiável, ligeiramente convencional — forte em estabilidade, fraco em conversas duras.",
  'compatibility.mbti.ESFJ-ISFJ.practice': "Ambos têm de arriscar a verdade indesejada. A supressão é mais perigosa que o desacordo.",

  'compatibility.mbti.ESFJ-ISFP.dynamic': "O ESFJ dá ao ISFP um lar emocional; o ISFP dá ao ESFJ profundidade estética. Ambos são calorosos e orientados ao presente.",
  'compatibility.mbti.ESFJ-ISFP.friction': "O ESFJ quer envolvimento verbal; o ISFP mostra amor em silêncio. O ESFJ lê silêncio como distância; o ISFP lê pressão como intrusão.",
  'compatibility.mbti.ESFJ-ISFP.together': "Um par suave, caloroso — funciona quando o ESFJ aprende a linguagem do amor do ISFP.",
  'compatibility.mbti.ESFJ-ISFP.practice': "O ESFJ tem de ler presença como cuidado. O ISFP tem de usar palavras às vezes.",

  'compatibility.mbti.ESFJ-ISTJ.dynamic': "Dois SJ — dever, tradição, fiabilidade e cuidado familiar são valores partilhados. A casa funciona.",
  'compatibility.mbti.ESFJ-ISTJ.friction': "O ESFJ quer reconhecimento emocional; o ISTJ por defeito vai às ações. O ESFJ sente-se não visto; o ISTJ sente-se gerido.",
  'compatibility.mbti.ESFJ-ISTJ.together': "Um par fiável, tradicional, ligeiramente delgado emocionalmente — forte em compromisso, fraco em vocabulário.",
  'compatibility.mbti.ESFJ-ISTJ.practice': "O ISTJ tem de verbalizar o cuidado, não apenas demonstrá-lo. O ESFJ tem de ler a ação como amor.",

  'compatibility.mbti.ESFJ-ISTP.dynamic': "O ESFJ fornece estrutura relacional; o ISTP fornece competência calma. Cada um carrega algo que o outro não gera fácil.",
  'compatibility.mbti.ESFJ-ISTP.friction': "O ESFJ quer envolvimento; o ISTP quer solidão. O ESFJ persegue; o ISTP retira-se; o ciclo corre.",
  'compatibility.mbti.ESFJ-ISTP.together': "Um par complementar, por vezes desigual — funciona quando o ESFJ sustenta o fio relacional e o ISTP aparece.",
  'compatibility.mbti.ESFJ-ISTP.practice': "O ISTP tem de fazer pequenas ofertas de conexão. O ESFJ tem de dar ao silêncio o seu sentido, não o interromper.",

  'compatibility.mbti.ESFP-ESFP.dynamic': "Dois animadores — a vida é brilhante, social e física. Há planos; a comida é boa; há gente à volta.",
  'compatibility.mbti.ESFP-ESFP.friction': "Nenhum planeia para o baixo. Quando algo difícil chega, ambos procuram distração; a relação perde centro.",
  'compatibility.mbti.ESFP-ESFP.together': "Um par brilhante, divertido, orientado ao presente — invejável por fora, frágil por dentro.",
  'compatibility.mbti.ESFP-ESFP.practice': "Ambos têm de ficar na parte difícil de propósito.",

  'compatibility.mbti.ESFP-ESTJ.dynamic': "O ESTJ estrutura; o ESFP traz vida. Complementaridade real quando ambos honram o que o outro fornece.",
  'compatibility.mbti.ESFP-ESTJ.friction': "O ESTJ quer compromisso; o ESFP quer liberdade para sentir o momento. ESTJ vê frouxidão; ESFP vê rigidez.",
  'compatibility.mbti.ESFP-ESTJ.together': "Um par capaz, vivo quando ambos flexibilizam; difícil quando ambos se entrincheiram.",
  'compatibility.mbti.ESFP-ESTJ.practice': "O ESTJ tem de permitir improvisação. O ESFP tem de honrar o acordo.",

  'compatibility.mbti.ESFP-ESTP.dynamic': "Dois Se-doms — ambos plenamente vivos no momento, ambos orientados à ação, ambos fisicamente envolvidos. Poucos pares igualam esta imediatez.",
  'compatibility.mbti.ESFP-ESTP.friction': "Nenhum se senta com sentimentos. Quando algo dói, ambos pivotam para distração.",
  'compatibility.mbti.ESFP-ESTP.together': "Um par brilhante, vivo, físico — forte em diversão, fraco em profundidade.",
  'compatibility.mbti.ESFP-ESTP.practice': "Ambos têm de ficar quando ficar não é divertido. A relação aprofunda-se só ali.",

  'compatibility.mbti.ESFP-INFJ.dynamic': "Famoso par polar — funções opostas em papéis opostos. O INFJ fornece a profundidade; o ESFP fornece a imediatez. A fascinação mútua é real.",
  'compatibility.mbti.ESFP-INFJ.friction': "O INFJ retira-se a processar; o ESFP quer envolvimento agora. INFJ lê o ESFP como superficial; ESFP lê o INFJ como retentor.",
  'compatibility.mbti.ESFP-INFJ.together': "Um par de alta amplitude — bonito em estações longas e quentes, brutal em conflito.",
  'compatibility.mbti.ESFP-INFJ.practice': "O INFJ tem de subir ao tempo do ESFP às vezes. O ESFP tem de honrar o processamento do INFJ.",

  'compatibility.mbti.ESFP-INFP.dynamic': "Ambos são tipos que usam Fi — os valores alinham-se depressa. O ESFP traz o mundo ao INFP; o INFP traz profundidade ao ESFP.",
  'compatibility.mbti.ESFP-INFP.friction': "O ESFP quer envolvimento; o INFP precisa de solidão. O ESFP persegue; o INFP retira-se.",
  'compatibility.mbti.ESFP-INFP.together': "Um par caloroso, alinhado em valores — forte em conexão, leve em iniciativa.",
  'compatibility.mbti.ESFP-INFP.practice': "O ESFP tem de conceder solidão. O INFP tem de envolver-se quando convidado.",

  'compatibility.mbti.ESFP-INTJ.dynamic': "Um par polar muito citado — a visão do INTJ encontra a presença do ESFP. Cada um é o ponto cego do outro encarnado.",
  'compatibility.mbti.ESFP-INTJ.friction': "O INTJ planeia; o ESFP improvisa. O INTJ lê caos; o ESFP lê jaula.",
  'compatibility.mbti.ESFP-INTJ.together': "Um par de alta amplitude — transformador quando funciona, doloroso quando não.",
  'compatibility.mbti.ESFP-INTJ.practice': "O INTJ tem de entrar no momento presente. O ESFP tem de honrar o plano mais longo.",

  'compatibility.mbti.ESFP-INTP.dynamic': "O ESFP traz vida e o corpo; o INTP traz modelo e profundidade. Cada um está intrigado pelo que o outro gera.",
  'compatibility.mbti.ESFP-INTP.friction': "O ESFP quer o mundo; o INTP quer a cabeça. Diferentes metabolismos criam distância real com o tempo.",
  'compatibility.mbti.ESFP-INTP.together': "Um par estranho que funciona quando ambos se inclinam para o meio.",
  'compatibility.mbti.ESFP-INTP.practice': "O ESFP tem de envolver-se com os modelos do INTP. O INTP tem de sair e fazer a coisa.",

  'compatibility.mbti.ESFP-ISFJ.dynamic': "O ISFJ fornece estabilidade e cuidado; o ESFP fornece vida e alegria. Calor real aqui.",
  'compatibility.mbti.ESFP-ISFJ.friction': "O ISFJ quer tradição; o ESFP quer a próxima coisa. O ISFJ sente-se desestabilizado; o ESFP sente-se constrangido.",
  'compatibility.mbti.ESFP-ISFJ.together': "Um par caloroso, algo desajustado — forte em cuidado, vulnerável em ritmo.",
  'compatibility.mbti.ESFP-ISFJ.practice': "O ISFJ tem de permitir improvisação. O ESFP tem de honrar o que o ISFJ mantém vivo.",

  'compatibility.mbti.ESFP-ISFP.dynamic': "Ambos são tipos Se-Fi — momento presente e autenticidade de valores. As sensibilidades estéticas alinham-se; a presença é suficiente.",
  'compatibility.mbti.ESFP-ISFP.friction': "Ambos retiram-se em vez de confrontar. Os conflitos vão para baixo da terra e ficam lá.",
  'compatibility.mbti.ESFP-ISFP.together': "Um par suave, estético, caloroso — forte em presença, fraco em conflito.",
  'compatibility.mbti.ESFP-ISFP.practice': "Ambos têm de trazer à tona o desacordo antes de fermentar.",

  'compatibility.mbti.ESFP-ISTJ.dynamic': "O ISTJ fornece fiabilidade; o ESFP fornece vida. Complementaridade real quando cada um respeita o que o outro fornece.",
  'compatibility.mbti.ESFP-ISTJ.friction': "O ISTJ quer o plano; o ESFP quer o momento. O ISTJ vê caos; o ESFP vê falta de alegria.",
  'compatibility.mbti.ESFP-ISTJ.together': "Um par capaz, vivo quando ambos se esticam — abrasivo quando ambos se entrincheiram.",
  'compatibility.mbti.ESFP-ISTJ.practice': "O ISTJ tem de permitir improvisação. O ESFP tem de honrar a estrutura acordada.",

  'compatibility.mbti.ESFP-ISTP.dynamic': "Dois tipos que usam Se — ambos vivos no momento, ambos orientados à ação. O ESFP aquece o ISTP; o ISTP aterra o ESFP.",
  'compatibility.mbti.ESFP-ISTP.friction': "O ESFP quer envolvimento; o ISTP quer solidão. O ESFP persegue; o ISTP retira-se.",
  'compatibility.mbti.ESFP-ISTP.together': "Um par capaz, orientado à ação — forte em aventuras, fraco em vocabulário emocional.",
  'compatibility.mbti.ESFP-ISTP.practice': "O ISTP tem de verbalizar. O ESFP tem de ler presença como cuidado.",

  'compatibility.mbti.ESTJ-ESTJ.dynamic': "Dois executivos — eficiência, logística e padrões claros alinham-se sem tradução.",
  'compatibility.mbti.ESTJ-ESTJ.friction': "Ambos querem ser a voz que decide. O poder é disputado direta e frequentemente.",
  'compatibility.mbti.ESTJ-ESTJ.together': "Um par capaz, hierárquico, tradicional — forte em resultados, fraco em largura de banda emocional.",
  'compatibility.mbti.ESTJ-ESTJ.practice': "Ambos têm de revezar-se em ceder. A força não é o problema; a flexibilidade é.",

  'compatibility.mbti.ESTJ-ESTP.dynamic': "Ambos são práticos, orientados à ação, focados em resultados. As coisas fazem-se.",
  'compatibility.mbti.ESTJ-ESTP.friction': "O ESTJ quer o plano executado; o ESTP improvisa taticamente. O ESTJ lê caos; o ESTP lê rigidez.",
  'compatibility.mbti.ESTJ-ESTP.together': "Um par capaz, impulsionado pela ação — forte em movimento, fraco em arcos longos.",
  'compatibility.mbti.ESTJ-ESTP.practice': "O ESTJ tem de permitir improvisação tática. O ESTP tem de honrar o plano estratégico.",

  'compatibility.mbti.ESTJ-INFJ.dynamic': "O ESTJ executa; o INFJ visiona. Complementaridade real quando ambos honram o que o outro acrescenta.",
  'compatibility.mbti.ESTJ-INFJ.friction': "O ESTJ quer ação; o INFJ quer profundidade. O ESTJ passa por cima; o INFJ retira-se.",
  'compatibility.mbti.ESTJ-INFJ.together': "Um par capaz, frequentemente emocionalmente desigual — forte em logística, fraco em calor.",
  'compatibility.mbti.ESTJ-INFJ.practice': "O ESTJ tem de esperar a intuição completa do INFJ. O INFJ tem de aterrar uma opinião sobre a qual o ESTJ possa agir.",

  'compatibility.mbti.ESTJ-INFP.dynamic': "Um par polar — pilhas cognitivas opostas. O ESTJ fornece estrutura; o INFP fornece valores. Quando funciona, há transformação.",
  'compatibility.mbti.ESTJ-INFP.friction': "O ESTJ quer ação; o INFP precisa de alinhamento com valores primeiro. ESTJ lê o INFP como evasivo; INFP lê o ESTJ como rolo compressor.",
  'compatibility.mbti.ESTJ-INFP.together': "Um par de alta amplitude — abrasivo sem esforço.",
  'compatibility.mbti.ESTJ-INFP.practice': "O ESTJ tem de abrandar para o exame de valores. O INFP tem de entregar próximos passos concretos.",

  'compatibility.mbti.ESTJ-INTJ.dynamic': "Ambos são tipos que usam Te — eficiência e padrões claros alinham-se. O INTJ fornece estratégia; o ESTJ fornece execução.",
  'compatibility.mbti.ESTJ-INTJ.friction': "O ESTJ quer o método provado; o INTJ quer o ótimo. O ESTJ resiste à mudança; o INTJ empurra-a.",
  'compatibility.mbti.ESTJ-INTJ.together': "Um par capaz, produtivo — forte em sistemas, fraco em calor emocional.",
  'compatibility.mbti.ESTJ-INTJ.practice': "O ESTJ tem de envolver-se com a evidência do INTJ para a mudança. O INTJ tem de argumentar antes de empurrar.",

  'compatibility.mbti.ESTJ-INTP.dynamic': "O INTP fornece o modelo; o ESTJ fornece a implementação. Respeito mútuo pela capacidade.",
  'compatibility.mbti.ESTJ-INTP.friction': "O ESTJ quer ação; o INTP quer mais análise. O ESTJ empurra; o INTP retira-se mais para o modelo.",
  'compatibility.mbti.ESTJ-INTP.together': "Um par capaz, de pouca emoção — forte em sistemas, fraco em cuidado relacional.",
  'compatibility.mbti.ESTJ-INTP.practice': "O ESTJ tem de dar ao INTP tempo de processo. O INTP tem de entregar antes de estar perfeito.",

  'compatibility.mbti.ESTJ-ISFJ.dynamic': "Dois SJ — dever, família, tradição. Os papéis dividem-se naturalmente; a casa funciona.",
  'compatibility.mbti.ESTJ-ISFJ.friction': "O ESTJ por defeito vai à logística; o ISFJ por defeito vai ao cuidado. O ESTJ sente-se ralhado por sentimentos; o ISFJ sente-se atropelado.",
  'compatibility.mbti.ESTJ-ISFJ.together': "Um par tradicional, fiável — forte em compromisso, fraco em vocabulário emocional.",
  'compatibility.mbti.ESTJ-ISFJ.practice': "O ESTJ tem de reconhecer os sentimentos como dados. O ISFJ tem de afirmar preferências em voz alta.",

  'compatibility.mbti.ESTJ-ISFP.dynamic': "O ESTJ estrutura o externo; o ISFP sustenta o núcleo de valores. Complementaridade real quando se honra.",
  'compatibility.mbti.ESTJ-ISFP.friction': "O ESTJ pressiona por decisões; o ISFP precisa de sentir os valores. O ESTJ passa por cima; o ISFP retira-se.",
  'compatibility.mbti.ESTJ-ISFP.together': "Um par estranho quando ambos flexibilizam; difícil quando não.",
  'compatibility.mbti.ESTJ-ISFP.practice': "O ESTJ tem de consultar o ISFP. O ISFP tem de trazer à tona o exame de valores antes de ser atropelado.",

  'compatibility.mbti.ESTJ-ISTJ.dynamic': "Dois SJ com padrões partilhados — dever, fiabilidade, fazer as coisas da forma certa. As operações funcionam.",
  'compatibility.mbti.ESTJ-ISTJ.friction': "Ambos creem saber o método correto. Os desacordos sobre padrões tornam-se rígidos depressa.",
  'compatibility.mbti.ESTJ-ISTJ.together': "Um par capaz, tradicional, fiável — forte em seguimento, fraco em flexibilidade.",
  'compatibility.mbti.ESTJ-ISTJ.practice': "Ambos têm de envolver-se com nova evidência pelos seus méritos, não pela familiaridade.",

  'compatibility.mbti.ESTJ-ISTP.dynamic': "O ESTJ comanda; o ISTP executa — mas só nos seus termos. Há respeito mútuo pela competência.",
  'compatibility.mbti.ESTJ-ISTP.friction': "O ESTJ quer cumprimento; o ISTP quer autonomia. O ESTJ empurra; o ISTP desliga-se.",
  'compatibility.mbti.ESTJ-ISTP.together': "Um par capaz, de pouca emoção — forte em produção, fraco em calor.",
  'compatibility.mbti.ESTJ-ISTP.practice': "O ESTJ tem de conceder autonomia ao ISTP. O ISTP tem de trazer à tona o desacordo em vez de ficar calado.",

  'compatibility.mbti.ESTP-ESTP.dynamic': "Dois empreendedores — a vida é rápida, viva e comprometida com o mundo. As aventuras multiplicam-se.",
  'compatibility.mbti.ESTP-ESTP.friction': "Nenhum para. Quando algo dói, ambos pivotam para a ação; a camada emocional nunca se cuida.",
  'compatibility.mbti.ESTP-ESTP.together': "Um par brilhante, impulsionado pela ação — forte em movimento, fraco em profundidade.",
  'compatibility.mbti.ESTP-ESTP.practice': "Ambos têm de parar e sentir antes de pivotar.",

  'compatibility.mbti.ESTP-INFJ.dynamic': "Par polar — a profundidade do INFJ encontra a imediatez do ESTP. Cada um é o ponto cego do outro. Magnético quando funciona.",
  'compatibility.mbti.ESTP-INFJ.friction': "O INFJ quer reflexão; o ESTP quer ação. O INFJ retira-se; o ESTP aborrece-se.",
  'compatibility.mbti.ESTP-INFJ.together': "Um par de alta amplitude — transformador quando funciona, frágil quando não.",
  'compatibility.mbti.ESTP-INFJ.practice': "O INFJ tem de subir. O ESTP tem de abrandar para a conversa de sentido.",

  'compatibility.mbti.ESTP-INFP.dynamic': "O ESTP traz o mundo ao INFP; o INFP traz profundidade ao ESTP. Complementaridade real quando ambos a honram.",
  'compatibility.mbti.ESTP-INFP.friction': "O ESTP age; o INFP sente primeiro. ESTP lê o INFP como pensar de mais; INFP lê o ESTP como superficial.",
  'compatibility.mbti.ESTP-INFP.together': "Um par estranho — funciona quando ambos se inclinam um para o outro.",
  'compatibility.mbti.ESTP-INFP.practice': "O ESTP tem de abrandar para o processamento do INFP. O INFP tem de envolver-se com o mundo para o qual o ESTP o convida.",

  'compatibility.mbti.ESTP-INTJ.dynamic': "Ambos têm Ni e Se nas suas pilhas mas em arranjos opostos — o INTJ fornece o arco longo, o ESTP fornece a leitura ao vivo. Pode desenvolver-se respeito real.",
  'compatibility.mbti.ESTP-INTJ.friction': "O INTJ quer o plano comprometido; o ESTP quer liberdade tática. O INTJ atropela; o ESTP improvisa à volta do plano.",
  'compatibility.mbti.ESTP-INTJ.together': "Um par formidável quando se honra — estratégico e tático fundidos.",
  'compatibility.mbti.ESTP-INTJ.practice': "O INTJ tem de conceder autonomia tática. O ESTP tem de honrar o enquadramento estratégico.",

  'compatibility.mbti.ESTP-INTP.dynamic': "Ambos são tipos que usam Ti — modelos lógicos e competência são línguas mútuas. Conversas afiadas; o vínculo é sem pelúcia.",
  'compatibility.mbti.ESTP-INTP.friction': "O ESTP quer ação; o INTP quer análise. O ESTP impacienta-se; o INTP sente-se apressado.",
  'compatibility.mbti.ESTP-INTP.together': "Um par capaz, intelectualmente honesto — forte em sistemas, fraco em cuidado emocional.",
  'compatibility.mbti.ESTP-INTP.practice': "O ESTP tem de dar ao INTP tempo de processo. O INTP tem de entregar antes de estar perfeito.",

  'compatibility.mbti.ESTP-ISFJ.dynamic': "O ISFJ fornece estabilidade e cuidado; o ESTP fornece vida e emoção. Calor real quando ambos o honram.",
  'compatibility.mbti.ESTP-ISFJ.friction': "O ESTP quer agora; o ISFJ quer fiável. O ESTP sente-se constrangido; o ISFJ sente-se desestabilizado.",
  'compatibility.mbti.ESTP-ISFJ.together': "Um par caloroso, vivo — forte quando ambos flexibilizam, abrasivo quando ambos se entrincheiram.",
  'compatibility.mbti.ESTP-ISFJ.practice': "O ESTP tem de honrar as necessidades de fiabilidade do ISFJ. O ISFJ tem de permitir improvisação.",

  'compatibility.mbti.ESTP-ISFP.dynamic': "Dois tipos que usam Se — momento presente, conscientes do corpo, orientados à ação. O ESTP aquece o ISFP; o ISFP aterra o ESTP.",
  'compatibility.mbti.ESTP-ISFP.friction': "O ESTP quer envolvimento; o ISFP quer solidão. O ESTP persegue; o ISFP retira-se.",
  'compatibility.mbti.ESTP-ISFP.together': "Um par capaz, orientado ao presente — forte em experiência partilhada, fraco em vocabulário emocional.",
  'compatibility.mbti.ESTP-ISFP.practice': "O ISFP tem de verbalizar. O ESTP tem de ler presença como cuidado.",

  'compatibility.mbti.ESTP-ISTJ.dynamic': "O ISTJ fornece fiabilidade; o ESTP fornece emoção. Complementaridade real quando ambos a honram.",
  'compatibility.mbti.ESTP-ISTJ.friction': "O ISTJ quer o plano; o ESTP quer o momento. ISTJ lê caos; ESTP lê rigidez.",
  'compatibility.mbti.ESTP-ISTJ.together': "Um par capaz — funciona quando ambos flexibilizam para o meio.",
  'compatibility.mbti.ESTP-ISTJ.practice': "O ISTJ tem de permitir improvisação. O ESTP tem de honrar a estrutura acordada.",

  'compatibility.mbti.ESTP-ISTP.dynamic': "Dois tipos Se-Ti — ambos orientados à ação e impulsionados por competência. O vínculo tem fluidez física e intelectual invulgar.",
  'compatibility.mbti.ESTP-ISTP.friction': "Nenhum é bom com a camada emocional. Quando algo dói, ambos pivotam para ação ou para solidão.",
  'compatibility.mbti.ESTP-ISTP.together': "Um par capaz, impulsionado pela ação — forte em fazer, fraco em falar disso.",
  'compatibility.mbti.ESTP-ISTP.practice': "Ambos têm de verbalizar antes de se retirarem.",

  'compatibility.mbti.INFJ-INFJ.dynamic': "Dois advogados reconhecem-se imediatamente. As conversas vão fundo sem conversa pequena; o entendimento mútuo é raro e rápido.",
  'compatibility.mbti.INFJ-INFJ.friction': "Ambos retiram-se a processar; nenhum inicia o regresso. Dias de silêncio tornam-se semanas.",
  'compatibility.mbti.INFJ-INFJ.together': "Um par profundamente sintonizado, por vezes demasiado quieto — radiante em conexão, frágil em isolamento.",
  'compatibility.mbti.INFJ-INFJ.practice': "Um tem de quebrar o silêncio primeiro. Por defeito ao regresso; o outro não está a reter, apenas a processar.",

  'compatibility.mbti.INFJ-INFP.dynamic': "Dois tipos intuitivos sentintes — profundidade, sentido e autenticidade são línguas mútuas. Entendimento real.",
  'compatibility.mbti.INFJ-INFP.friction': "O INFJ age sobre a visão; o INFP recusa agir até os valores estarem alinhados. O INFJ sente-se retido; o INFP sente-se apressado.",
  'compatibility.mbti.INFJ-INFP.together': "Um par terno, idealista — forte em sentido partilhado, fraco em execução.",
  'compatibility.mbti.INFJ-INFP.practice': "O INFJ tem de esperar o exame de valores do INFP. O INFP tem de aterrar uma posição.",

  'compatibility.mbti.INFJ-INTJ.dynamic': "Ambos são Ni-doms — visão, abstração e arcos longos são línguas maternas mútuas. A relação tem profundidade invulgar desde o primeiro dia.",
  'compatibility.mbti.INFJ-INTJ.friction': "O INFJ lidera com pessoas; o INTJ lidera com sistemas. INTJ lê o INFJ como brando; INFJ lê o INTJ como frio.",
  'compatibility.mbti.INFJ-INTJ.together': "Um par profundamente sintonizado, intelectualmente rigoroso — forte em profundidade e alcance.",
  'compatibility.mbti.INFJ-INTJ.practice': "O INTJ tem de considerar dados relacionais. O INFJ tem de argumentar logicamente quando necessário.",

  'compatibility.mbti.INFJ-INTP.dynamic': "O INTP fornece o modelo; o INFJ fornece o sentido. Ambos são pensadores introvertidos em chaves diferentes.",
  'compatibility.mbti.INFJ-INTP.friction': "O INFJ quer envolvimento emocional; o INTP quer envolvimento de ideias. Diferentes formas de intimidade podem desajustar-se.",
  'compatibility.mbti.INFJ-INTP.together': "Um par silencioso, intelectualmente profundo — forte em conversa, fraco em articulação emocional.",
  'compatibility.mbti.INFJ-INTP.practice': "O INTP tem de trazer à tona sentimentos, não só pensamentos. O INFJ tem de envolver-se com o desacordo lógico sem o levar pessoalmente.",

  'compatibility.mbti.INFJ-ISFJ.dynamic': "Dois tipos Fe auxiliares — o cuidado pelas pessoas é partilhado. O ISFJ sustenta o prático; o INFJ sustenta o sentido.",
  'compatibility.mbti.INFJ-ISFJ.friction': "O INFJ pressiona por visão; o ISFJ sustenta tradição. O INFJ desestabiliza; o ISFJ resiste.",
  'compatibility.mbti.INFJ-ISFJ.together': "Um par caloroso, suave — forte em cuidado, por vezes fraco em direção.",
  'compatibility.mbti.INFJ-ISFJ.practice': "O INFJ tem de honrar o que o ISFJ mantém vivo. O ISFJ tem de envolver-se com a vista mais longa do INFJ.",

  'compatibility.mbti.INFJ-ISFP.dynamic': "Ambos são silenciosos, profundos, impulsionados por valores. O ISFP traz presença sensual; o INFJ traz arquitetura interior.",
  'compatibility.mbti.INFJ-ISFP.friction': "O INFJ quer profundidade verbal; o ISFP mostra profundidade através do ser. O INFJ pressiona por palavras; o ISFP retira-se.",
  'compatibility.mbti.INFJ-ISFP.together': "Um par suave, íntimo — forte em valores partilhados, fraco em processamento verbal.",
  'compatibility.mbti.INFJ-ISFP.practice': "O INFJ tem de ler presença como profundidade. O ISFP tem de usar palavras às vezes.",

  'compatibility.mbti.INFJ-ISTJ.dynamic': "O ISTJ fornece estabilidade e fiabilidade; o INFJ fornece profundidade e direção. Complementaridade real quando se honra.",
  'compatibility.mbti.INFJ-ISTJ.friction': "O ISTJ quer o método provado; o INFJ quer a nova visão. O ISTJ resiste; o INFJ retira-se.",
  'compatibility.mbti.INFJ-ISTJ.together': "Um par fiável, de combustão lenta — forte em compromisso, fraco em tempo.",
  'compatibility.mbti.INFJ-ISTJ.practice': "O ISTJ tem de envolver-se com a visão do INFJ. O INFJ tem de honrar o que o ISTJ mantém a funcionar.",

  'compatibility.mbti.INFJ-ISTP.dynamic': "Dois tipos introvertidos — a solidão é partilhada sem tensão. O ISTP traz imediatez prática; o INFJ traz intuição profunda.",
  'compatibility.mbti.INFJ-ISTP.friction': "O INFJ quer envolvimento emocional; o ISTP quer envolvimento com problemas. Diferentes intimidades não traduzem.",
  'compatibility.mbti.INFJ-ISTP.together': "Um par silencioso — funciona quando o ISTP aparece de forma consistente e o INFJ não pressiona por intimidade verbal.",
  'compatibility.mbti.INFJ-ISTP.practice': "O ISTP tem de verbalizar sentimento às vezes. O INFJ tem de ler a ação como amor.",

  'compatibility.mbti.INFP-INFP.dynamic': "Dois mediadores reconhecem-se ao instante. Valores, profundidade e autenticidade são suposições partilhadas.",
  'compatibility.mbti.INFP-INFP.friction': "Ambos retiram-se em vez de confrontar. Os ressentimentos acumulam-se dentro; nada vem à superfície.",
  'compatibility.mbti.INFP-INFP.together': "Um par terno, idealista, por vezes demasiado quieto — forte em valores, fraco em conflito.",
  'compatibility.mbti.INFP-INFP.practice': "Ambos têm de trazer à tona a coisa difícil antes de fermentar.",

  'compatibility.mbti.INFP-INTJ.dynamic': "O INTJ fornece estrutura; o INFP fornece valores. Há atração real aqui — opostos em formas diferentes.",
  'compatibility.mbti.INFP-INTJ.friction': "O INTJ otimiza; o INFP precisa de alinhamento. O INTJ passa por cima; o INFP retira-se.",
  'compatibility.mbti.INFP-INTJ.together': "Um par complementar quando ambos se inclinam — abrasivo quando ambos não.",
  'compatibility.mbti.INFP-INTJ.practice': "O INTJ tem de abrandar para o exame de valores. O INFP tem de entregar ações concretas.",

  'compatibility.mbti.INFP-INTP.dynamic': "Ambos são tipos introvertidos, impulsionados por ideias — a solidão é partilhada sem tensão. As conversas vão fundo no espaço de possibilidades.",
  'compatibility.mbti.INFP-INTP.friction': "O INFP processa através de valores; o INTP processa através de lógica. Diferentes metabolismos criam más leituras.",
  'compatibility.mbti.INFP-INTP.together': "Um par silencioso, intelectualmente caloroso — forte em interioridade partilhada, fraco em ação.",
  'compatibility.mbti.INFP-INTP.practice': "Ambos têm de sair e executar, não apenas pensar e sentir.",

  'compatibility.mbti.INFP-ISFJ.dynamic': "Ambos são silenciosos, cuidadosos, impulsionados por valores. O ISFJ fornece cuidado prático; o INFP fornece sentido.",
  'compatibility.mbti.INFP-ISFJ.friction': "O ISFJ quer tradição; o INFP quer autenticidade. O ISFJ sente-se desestabilizado; o INFP sente-se constrangido.",
  'compatibility.mbti.INFP-ISFJ.together': "Um par suave, caloroso — forte em cuidado partilhado, fraco em negociação.",
  'compatibility.mbti.INFP-ISFJ.practice': "O ISFJ tem de permitir que os valores anulem a tradição às vezes. O INFP tem de honrar os rituais.",

  'compatibility.mbti.INFP-ISFP.dynamic': "Dois Fi-doms — os valores alinham-se depressa e fundo. Ambos valorizam a autenticidade; ambos odeiam a atuação.",
  'compatibility.mbti.INFP-ISFP.friction': "Ambos retiram-se sob stress. Nenhum inicia a conversa dura.",
  'compatibility.mbti.INFP-ISFP.together': "Um par terno, alinhado em valores — forte em autenticidade, fraco em iniciativa.",
  'compatibility.mbti.INFP-ISFP.practice': "Ambos têm de trazer à tona o desacordo antes de viver em silêncio.",

  'compatibility.mbti.INFP-ISTJ.dynamic': "O ISTJ fornece estrutura e fiabilidade; o INFP fornece profundidade de valores. Complementaridade real quando se honra.",
  'compatibility.mbti.INFP-ISTJ.friction': "O ISTJ quer o provado; o INFP quer o significativo. O ISTJ sente-se desestabilizado; o INFP sente-se constrangido.",
  'compatibility.mbti.INFP-ISTJ.together': "Um par fiável, de combustão lenta — forte em compromisso, frágil em tempo.",
  'compatibility.mbti.INFP-ISTJ.practice': "O ISTJ tem de envolver-se com valores, não só factos. O INFP tem de honrar a estrutura, não só sentir sobre ela.",

  'compatibility.mbti.INFP-ISTP.dynamic': "Ambos são introvertidos, sem pelúcia, impulsionados por valores em chaves diferentes. A companhia silenciosa é mútua.",
  'compatibility.mbti.INFP-ISTP.friction': "O INFP quer envolvimento emocional; o ISTP quer envolvimento com problemas. Diferentes intimidades não traduzem facilmente.",
  'compatibility.mbti.INFP-ISTP.together': "Um par silencioso, idiossincrático — forte em solidão partilhada, fraco em intimidade verbal.",
  'compatibility.mbti.INFP-ISTP.practice': "O INFP tem de ler a ação como amor. O ISTP tem de verbalizar às vezes.",

  'compatibility.mbti.INTJ-INTJ.dynamic': "Dois arquitetos — estratégia, abstração e arcos longos alinham-se sem tradução. O plano existe antes da conversa.",
  'compatibility.mbti.INTJ-INTJ.friction': "Ambos creem ter razão; ambos passam por cima. Os conflitos arrefecem depressa.",
  'compatibility.mbti.INTJ-INTJ.together': "Um par formidável, intelectualmente alinhado — forte em sistemas, fraco em vocabulário emocional.",
  'compatibility.mbti.INTJ-INTJ.practice': "Ambos têm de envolver-se com o raciocínio um do outro sem desprezo. Estar errado às vezes de propósito.",

  'compatibility.mbti.INTJ-INTP.dynamic': "Ambos NT, ambos introvertidos, ambos abstratos. As conversas cobrem terreno onde outros não chegam. Respeito mútuo pela capacidade.",
  'compatibility.mbti.INTJ-INTP.friction': "O INTJ quer fecho; o INTP quer o modelo aperfeiçoado. INTJ pressiona; INTP recusa entregar.",
  'compatibility.mbti.INTJ-INTP.together': "Um par silenciosamente poderoso — forte em sistemas, fraco em cuidado emocional.",
  'compatibility.mbti.INTJ-INTP.practice': "O INTJ tem de deixar respirar o modelo. O INTP tem de comprometer-se com uma versão.",

  'compatibility.mbti.INTJ-ISFJ.dynamic': "O ISFJ fornece estabilidade relacional e prática; o INTJ fornece direção. Complementaridade real quando se honra.",
  'compatibility.mbti.INTJ-ISFJ.friction': "O INTJ passa por cima; o ISFJ silenciosamente aceita o golpe. O INTJ não vê o custo; o ISFJ não o traz à tona.",
  'compatibility.mbti.INTJ-ISFJ.together': "Um par capaz mas emocionalmente desigual — forte em papéis, fraco em negociação.",
  'compatibility.mbti.INTJ-ISFJ.practice': "O INTJ tem de consultar antes de decidir por ambos. O ISFJ tem de afirmar preferências em voz alta.",

  'compatibility.mbti.INTJ-ISFP.dynamic': "O INTJ fornece arco longo; o ISFP fornece núcleo de valores. Cada um é a função inferior do outro — atração real aqui.",
  'compatibility.mbti.INTJ-ISFP.friction': "O INTJ planeia; o ISFP sente. O INTJ passa por cima; o ISFP retira-se.",
  'compatibility.mbti.INTJ-ISFP.together': "Um par estranho quando ambos flexibilizam — distante quando não.",
  'compatibility.mbti.INTJ-ISFP.practice': "O INTJ tem de abrandar para os valores. O ISFP tem de trazer à tona o exame de valores verbalmente.",

  'compatibility.mbti.INTJ-ISTJ.dynamic': "Ambos introvertidos, ambos estratégicos e fiáveis em formas diferentes. Respeito mútuo pela capacidade.",
  'compatibility.mbti.INTJ-ISTJ.friction': "O INTJ quer mudança; o ISTJ quer o provado. O INTJ empurra; o ISTJ tensiona-se.",
  'compatibility.mbti.INTJ-ISTJ.together': "Um par capaz, fiável — forte em seguimento, fraco em inovação.",
  'compatibility.mbti.INTJ-ISTJ.practice': "O INTJ tem de argumentar a mudança. O ISTJ tem de envolver-se com nova evidência.",

  'compatibility.mbti.INTJ-ISTP.dynamic': "Ambos silenciosos, capazes, sem pelúcia. Respeito mútuo pela competência; pouca necessidade de calor verbal.",
  'compatibility.mbti.INTJ-ISTP.friction': "O INTJ quer o plano comprometido; o ISTP quer liberdade tática. O INTJ empurra; o ISTP desliga-se.",
  'compatibility.mbti.INTJ-ISTP.together': "Um par capaz, silencioso — forte em fazer, fraco em falar disso.",
  'compatibility.mbti.INTJ-ISTP.practice': "O INTJ tem de conceder autonomia. O ISTP tem de trazer à tona o desacordo antes de ficar calado.",

  'compatibility.mbti.INTP-INTP.dynamic': "Dois lógicos — modelos internos, jogo de ideias e pensamento rigoroso são línguas maternas partilhadas.",
  'compatibility.mbti.INTP-INTP.friction': "Ambos retiram-se a pensar; nenhum inicia o regresso. Dias tornam-se semanas.",
  'compatibility.mbti.INTP-INTP.together': "Um par silencioso, intelectualmente rigoroso — forte em sistemas, fraco em articulação emocional.",
  'compatibility.mbti.INTP-INTP.practice': "Um dos dois tem de quebrar o silêncio primeiro. Por defeito ao alcance; o outro não está a reter, apenas a pensar.",

  'compatibility.mbti.INTP-ISFJ.dynamic': "O ISFJ fornece cuidado e continuidade; o INTP fornece profundidade intelectual. Cada um carrega o que o outro não.",
  'compatibility.mbti.INTP-ISFJ.friction': "O ISFJ quer envolvimento; o INTP quer solidão. O ISFJ persegue; o INTP retira-se.",
  'compatibility.mbti.INTP-ISFJ.together': "Um par suave, complementar quando ambos flexibilizam.",
  'compatibility.mbti.INTP-ISFJ.practice': "O ISFJ tem de conceder solidão sem pânico. O INTP tem de voltar da gruta a tempo.",

  'compatibility.mbti.INTP-ISFP.dynamic': "Ambos são tipos silenciosos, internos, sem pelúcia. O ISFP traz valores; o INTP traz modelos.",
  'compatibility.mbti.INTP-ISFP.friction': "Ambos retiram-se sob stress. Nenhum inicia o regresso.",
  'compatibility.mbti.INTP-ISFP.together': "Um par silencioso — forte em interioridade partilhada, fraco em iniciativa.",
  'compatibility.mbti.INTP-ISFP.practice': "Um dos dois tem de fazer a pequena oferta de conexão regularmente.",

  'compatibility.mbti.INTP-ISTJ.dynamic': "O ISTJ executa; o INTP analisa. Complementaridade real quando se honra.",
  'compatibility.mbti.INTP-ISTJ.friction': "O ISTJ quer o método provado; o INTP quer o melhor modelo. O ISTJ resiste; o INTP retira-se.",
  'compatibility.mbti.INTP-ISTJ.together': "Um par capaz, de combustão lenta — forte em sistemas, fraco em tempo.",
  'compatibility.mbti.INTP-ISTJ.practice': "O ISTJ tem de envolver-se com nova evidência. O INTP tem de entregar antes de estar perfeito.",

  'compatibility.mbti.INTP-ISTP.dynamic': "Dois Ti-doms — modelos lógicos e competência são partilhados. Silenciosos, capazes, mutuamente respeitosos.",
  'compatibility.mbti.INTP-ISTP.friction': "Ambos retiram-se aos seus respetivos mundos. Nenhum inicia o regresso.",
  'compatibility.mbti.INTP-ISTP.together': "Um par silencioso, capaz — forte em sistemas partilhados, fraco em cuidado emocional.",
  'compatibility.mbti.INTP-ISTP.practice': "Um tem de quebrar o silêncio primeiro. Por defeito ao alcance.",

  'compatibility.mbti.ISFJ-ISFJ.dynamic': "Dois defensores — cuidado, tradição, fiabilidade e devoção silenciosa são partilhados. A casa é estável.",
  'compatibility.mbti.ISFJ-ISFJ.friction': "Ambos preferem a harmonia à honestidade. Os ressentimentos acumulam-se em silêncio durante anos.",
  'compatibility.mbti.ISFJ-ISFJ.together': "Um par caloroso, fiável, profundamente tradicional — forte em estabilidade, fraco em conversas duras.",
  'compatibility.mbti.ISFJ-ISFJ.practice': "Ambos têm de arriscar a verdade indesejada. A supressão é mais perigosa que o desacordo.",

  'compatibility.mbti.ISFJ-ISFP.dynamic': "Ambos silenciosos, cuidadosos, orientados ao presente. O ISFJ sustenta o prático; o ISFP sustenta o estético.",
  'compatibility.mbti.ISFJ-ISFP.friction': "O ISFJ quer envolvimento; o ISFP quer solidão. Ambos podem retirar-se em silêncio.",
  'compatibility.mbti.ISFJ-ISFP.together': "Um par suave, íntimo — forte em cuidado, fraco em iniciativa.",
  'compatibility.mbti.ISFJ-ISFP.practice': "Ambos têm de trazer à tona necessidades antes do ressentimento se acumular.",

  'compatibility.mbti.ISFJ-ISTJ.dynamic': "Dois SJ — dever, família, fiabilidade e papéis são partilhados. A casa funciona eficientemente.",
  'compatibility.mbti.ISFJ-ISTJ.friction': "Ambos preferem a supressão à confrontação. Ambos deixam o ressentimento cozer.",
  'compatibility.mbti.ISFJ-ISTJ.together': "Um par fiável, tradicional — forte em compromisso, fraco em vocabulário emocional.",
  'compatibility.mbti.ISFJ-ISTJ.practice': "Ambos têm de trazer à tona a coisa difícil antes de apodrecer.",

  'compatibility.mbti.ISFJ-ISTP.dynamic': "O ISFJ fornece cuidado; o ISTP fornece competência calma. Os papéis dividem-se naturalmente.",
  'compatibility.mbti.ISFJ-ISTP.friction': "O ISFJ quer envolvimento; o ISTP quer solidão. O ISFJ persegue; o ISTP retira-se.",
  'compatibility.mbti.ISFJ-ISTP.together': "Um par silencioso, capaz — forte em papéis, fraco em vocabulário emocional.",
  'compatibility.mbti.ISFJ-ISTP.practice': "O ISTP tem de verbalizar. O ISFJ tem de conceder silêncio.",

  'compatibility.mbti.ISFP-ISFP.dynamic': "Dois aventureiros — autenticidade de valores e presença estética são partilhadas. A solidão juntos é a linguagem do amor.",
  'compatibility.mbti.ISFP-ISFP.friction': "Ambos retiram-se em vez de confrontar. Os conflitos vão para baixo da terra e ficam lá.",
  'compatibility.mbti.ISFP-ISFP.together': "Um par suave, estético — forte em presença partilhada, fraco em iniciativa.",
  'compatibility.mbti.ISFP-ISFP.practice': "Ambos têm de trazer à tona o desacordo em voz alta, mesmo quando se sente rude.",

  'compatibility.mbti.ISFP-ISTJ.dynamic': "O ISTJ fornece fiabilidade; o ISFP fornece valores e estética. Complementaridade real quando se honra.",
  'compatibility.mbti.ISFP-ISTJ.friction': "O ISTJ quer o provado; o ISFP precisa que os valores se sintam bem. O ISTJ passa por cima; o ISFP retira-se.",
  'compatibility.mbti.ISFP-ISTJ.together': "Um par silencioso, fiável — forte em compromisso, fraco em negociação.",
  'compatibility.mbti.ISFP-ISTJ.practice': "O ISTJ tem de envolver-se com valores. O ISFP tem de trazer à tona o exame de valores em voz alta.",

  'compatibility.mbti.ISFP-ISTP.dynamic': "Dois introvertidos que usam Se — momento presente, conscientes do corpo, sem pelúcia. Respeito mútuo por poder simplesmente ser.",
  'compatibility.mbti.ISFP-ISTP.friction': "Ambos retiram-se sob stress. Nenhum inicia o regresso.",
  'compatibility.mbti.ISFP-ISTP.together': "Um par silencioso, de ação e estética — forte em experiência partilhada, fraco em vocabulário emocional.",
  'compatibility.mbti.ISFP-ISTP.practice': "Ambos têm de fazer pequenas ofertas de conexão antes do silêncio se assentar.",

  'compatibility.mbti.ISTJ-ISTJ.dynamic': "Dois logísticos — dever, fiabilidade e padrões alinham-se sem tradução. A casa funciona.",
  'compatibility.mbti.ISTJ-ISTJ.friction': "Ambos creem saber o método correto. Os desacordos tornam-se rígidos depressa.",
  'compatibility.mbti.ISTJ-ISTJ.together': "Um par tradicional, fiável — forte em seguimento, fraco em flexibilidade.",
  'compatibility.mbti.ISTJ-ISTJ.practice': "Ambos têm de envolver-se com nova evidência pelos seus méritos.",

  'compatibility.mbti.ISTJ-ISTP.dynamic': "Ambos silenciosos, capazes, sem pelúcia. Respeito mútuo pela competência.",
  'compatibility.mbti.ISTJ-ISTP.friction': "O ISTJ quer o plano provado; o ISTP quer liberdade tática. O ISTJ empurra; o ISTP desliga-se.",
  'compatibility.mbti.ISTJ-ISTP.together': "Um par silencioso, capaz — forte em ação, fraco em vocabulário emocional.",
  'compatibility.mbti.ISTJ-ISTP.practice': "O ISTJ tem de conceder autonomia. O ISTP tem de trazer à tona o desacordo antes do silêncio.",

  'compatibility.mbti.ISTP-ISTP.dynamic': "Dois virtuosos — competência, autonomia e presença silenciosa alinham-se. A solidão lado a lado é a linguagem do amor.",
  'compatibility.mbti.ISTP-ISTP.friction': "Ambos retiram-se em vez de confrontar. Nenhum inicia a reparação verbal.",
  'compatibility.mbti.ISTP-ISTP.together': "Um par silencioso, capaz, sem pelúcia — forte em atividade partilhada, fraco em articulação emocional.",
  'compatibility.mbti.ISTP-ISTP.practice': "Ambos têm de verbalizar antes de se retirarem. A relação não se auto-repara.",
}
