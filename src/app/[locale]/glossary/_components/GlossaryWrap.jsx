import React from "react";
import { useLocale } from "next-intl";

const GlossaryWrap = () => {
  const locale = useLocale();

  let glossaryTerms;

  const glossaryTermsEn = [
    {
      id: "A",
      title: "Applicant Tracking System (ATS)",
      content:
        "A software application used by organisations to manage and automate the recruitment process. ATS screens the resume, ranks candidates based on predefined criteria, and tracks applicants throughout the hiring cycle.",
    },
    {
      id: "B",
      title: "Behavioral Interview",
      content:
        "An interview technique in which candidates are asked to provide specific examples of past behaviour related to the skills or experiences required for the job. Questions are designed to assess how candidates have handled situations in the past as a predictor of future performance.",
    },
    {
      id: "C",
      title: "Competency-Based Interviewing",
      content:
        "A structured form of interviewing that evaluates a candidate’s competence in critical areas, such as leadership, problem-solving, or communication. Competency-based interviews focus on how well candidates meet the core competencies required for a job.",
    },
    {
      id: "D",
      title: "Disparate Impact",
      content:
        "A legal term refers to policies or practices in employment that are neutral on the surface but disproportionately negatively affect a protected group. Disparate impact can lead to claims of discrimination under equal employment laws.",
    },
    {
      id: "E",
      title: "Employment Verification",
      content:
        "Employment verification is the process by which an employer confirms the job history, qualifications, and identity of a potential hire by contacting previous employers or educational institutions. It helps ensure the accuracy of information provided by the candidate.",
    },
    {
      id: "F",
      title: "Fixed-Term Contract",
      content:
        "A type of employment agreement in which an employee is hired for a specific period, with a predefined start and end date. Fixed-term contracts are often used for project-based work or seasonal roles and may or may not be renewed upon expiration.",
    },
    {
      id: "G",
      title: "Gap Analysis (HR)",
      content:
        "An assessment method determines the difference between current workforce capabilities and the desired capabilities needed to achieve business goals. Gap analysis helps organisations identify areas for improvement in training, hiring, or development.",
    },
    {
      id: "H",
      title: "Human Resource Information System (HRIS)",
      content:
        "A digital platform that manages employee data, payroll, benefits, and compliance tasks. HRIS systems automate many HR functions, allowing departments to streamline operations and improve efficiency.",
    },
    {
      id: "I",
      title: "Implied Contract",
      content:
        "A legal concept where terms of employment are not explicitly stated but are inferred from actions, policies, or statements. For example, long-term employment expectations based on company policies or verbal assurances can create an implied contract between employer and employee.",
    },
    {
      id: "J",
      title: "Job Benchmarking",
      content:
        "A systematic process of evaluating and comparing a job role to industry standards, market conditions, and internal expectations to establish appropriate salary, benefits, and job requirements. Job benchmarking ensures consistency in job descriptions and compensation.",
    },
    {
      id: "K",
      title: "Key Person Insurance",
      content:
        "A type of business insurance that compensates a company in the event of the death or incapacity of a key employee whose skills or knowledge are critical to the organisation. This insurance helps mitigate financial losses during the hiring or retraining process.",
    },
    {
      id: "L",
      title: "Labor Market Testing (LMT)",
      content:
        "Some countries require this process during recruitment, particularly when hiring foreign workers. LMT involves demonstrating that no suitable local workers are available to fill the position before offering it to a non-national.",
    },
    {
      id: "M",
      title: "Management by Objectives (MBO)",
      content:
        "A performance management approach where employees and managers jointly set measurable goals for a specific period. Progress is monitored, and achieving objectives influences compensation, promotions, or further development.",
    },
    {
      id: "N",
      title: "Non-Disclosure Agreement (NDA)",
      content:
        "A legally binding contract in which an employee agrees not to disclose or share confidential company information, trade secrets, or sensitive data with outside parties. NDAs are often used to protect intellectual property.",
    },
    {
      id: "O",
      title: "Organisational Development (OD)",
      content:
        "A deliberate effort to improve an organisation’s efficiency and effectiveness through interventions in its processes, structures, and culture. OD strategies often align the workforce with the company’s goals to enhance performance.",
    },
    {
      id: "P",
      title: "Psychometric Testing",
      content:
        "Psychometric tests are an assessment method used in recruitment to measure candidates’ cognitive abilities, personality traits, and behavioural tendencies. By providing objective data, they help employers predict a candidate’s suitability for a specific role.",
    },
    {
      id: "Q",
      title: "Quiet Quitting",
      content:
        "A workplace trend where employees perform only the minimum required tasks of their job, without going above and beyond, often due to disengagement or dissatisfaction. Quiet quitting can negatively impact productivity and morale within an organisation.",
    },
    {
      id: "R",
      title: "Redundancy Pay",
      content:
        "Financial compensation is provided to employees laid off because their roles became redundant. Redundancy pay is typically calculated based on the length of service and the employee’s salary and is intended to support the employee while they find new employment.",
    },
    {
      id: "S",
      title: "Sabbatical Leave",
      content:
        "Sabbatical leave is an extended period of paid or unpaid leave that allows employees to take time off for personal or professional development, such as education, travel, or research. It is often offered to long-term employees as a reward for service.",
    },
    {
      id: "T",
      title: "Total Rewards",
      content:
        "A holistic view of the complete benefits package, compensation, and non-monetary employee rewards. Total rewards include salary, bonuses, benefits, work-life balance initiatives, and opportunities for personal development.",
    },
    {
      id: "U",
      title: "Union Shop Agreement",
      content:
        "A labour agreement requires all employees within a specific job classification or department to become union members after being hired. Union shop agreements are common in industries with solid labour representation.",
    },
    {
      id: "V",
      title: "Voluntary Redundancy",
      content:
        "Employers offer the option of voluntarily letting employees accept a redundancy package and leave the company during downsizing. This approach helps organisations reduce workforce numbers without resorting to forced layoffs.",
    },
    {
      id: "W",
      title: "Whistleblower Protection",
      content:
        "Laws or policies protect employees who report illegal or unethical practices within an organisation from retaliation, such as demotion or dismissal. Whistleblower protection encourages employees to come forward with concerns without fear of retribution.",
    },
    {
      id: "X",
      title: "X-Generation Leadership",
      content:
        "A term describes leadership styles influenced by Generation X’s values, including independence, adaptability, and a preference for informal communication. X-Generation leaders often emphasise work-life balance and employee autonomy.",
    },
    {
      id: "Y",
      title: "Yellow-Dog Contract",
      content:
        "An agreement between an employer and employee is one in which the employee agrees not to join a labour union as a condition of employment. These contracts were more common in the early 20th century but are now illegal in many countries.",
    },
    {
      id: "Z",
      title: "Zero-Based Budgeting (ZBB)",
      content:
        "An approach to budgeting in which all expenses must be justified from scratch for each new period, rather than using previous budgets as a starting point. ZBB is used in workforce planning to evaluate whether each role and expense is necessary to meet business goals.",
    },
  ];

  const glossaryTermsDe = [
    {
      id: "A",
      title: "Bewerber-Tracking-System (ATS)",
      content:
        "Eine Softwareanwendung, die von Organisationen verwendet wird, um den Rekrutierungsprozess zu verwalten und zu automatisieren. ATS überprüft den Lebenslauf, rangiert Kandidaten basierend auf vordefinierten Kriterien und verfolgt Bewerber während des gesamten Einstellungszyklus.",
    },
    {
      id: "B",
      title: "Verhaltensbasiertes Interview",
      content:
        "Eine Interviewtechnik, bei der die Kandidaten gebeten werden, spezifische Beispiele aus ihrer Vergangenheit zu geben, die sich auf die für die Stelle erforderlichen Fähigkeiten oder Erfahrungen beziehen. Die Fragen sollen bewerten, wie die Kandidaten vergangene Situationen gemeistert haben, um deren zukünftige Leistung vorherzusagen.",
    },
    {
      id: "C",
      title: "Kompetenzbasiertes Interview",
      content:
        "Eine strukturierte Interviewform, die die Kompetenzen eines Kandidaten in kritischen Bereichen wie Führung, Problemlösung oder Kommunikation bewertet. Kompetenzbasierte Interviews konzentrieren sich darauf, wie gut Kandidaten die für die Stelle erforderlichen Kernkompetenzen erfüllen.",
    },
    {
      id: "D",
      title: "Indirekte Diskriminierung",
      content:
        "Ein juristischer Begriff für Richtlinien oder Praktiken im Arbeitsbereich, die oberflächlich neutral erscheinen, aber eine geschützte Gruppe überproportional negativ betreffen. Indirekte Diskriminierung kann zu Diskriminierungsklagen nach Gleichstellungsgesetzen führen.",
    },
    {
      id: "E",
      title: "Beschäftigungsüberprüfung",
      content:
        "Der Prozess, bei dem ein Arbeitgeber den beruflichen Werdegang, die Qualifikationen und die Identität eines potenziellen Mitarbeiters durch Kontaktaufnahme mit früheren Arbeitgebern oder Bildungseinrichtungen bestätigt. Es hilft sicherzustellen, dass die vom Kandidaten bereitgestellten Informationen korrekt sind.",
    },
    {
      id: "F",
      title: "Befristeter Vertrag",
      content:
        "Eine Art Arbeitsvertrag, bei dem ein Mitarbeiter für einen bestimmten Zeitraum mit festgelegtem Anfangs- und Enddatum eingestellt wird. Befristete Verträge werden oft für projektbasierte Arbeiten oder saisonale Tätigkeiten genutzt und können nach Ablauf verlängert werden oder auch nicht.",
    },
    {
      id: "G",
      title: "Lückenanalyse (HR)",
      content:
        "Eine Bewertungsmethode, die die Differenz zwischen den aktuellen und den gewünschten Fähigkeiten der Belegschaft zur Erreichung der Unternehmensziele bestimmt. Die Lückenanalyse hilft Organisationen, Verbesserungsbereiche in Schulung, Einstellung oder Entwicklung zu identifizieren.",
    },
    {
      id: "H",
      title: "Personalinformationssystem (HRIS)",
      content:
        "Eine digitale Plattform, die Mitarbeiterdaten, Gehaltsabrechnungen, Sozialleistungen und Compliance-Aufgaben verwaltet. HRIS-Systeme automatisieren viele HR-Funktionen und ermöglichen es Abteilungen, Abläufe zu optimieren und die Effizienz zu steigern.",
    },
    {
      id: "I",
      title: "Impliziter Vertrag",
      content:
        "Ein rechtliches Konzept, bei dem die Arbeitsbedingungen nicht explizit festgelegt sind, sondern sich aus Handlungen, Richtlinien oder Aussagen ableiten. Beispielsweise können langfristige Beschäftigungserwartungen, die auf Unternehmensrichtlinien oder mündlichen Zusicherungen beruhen, einen impliziten Vertrag zwischen Arbeitgeber und Arbeitnehmer schaffen.",
    },
    {
      id: "J",
      title: "Job-Benchmarking",
      content:
        "Ein systematischer Prozess zur Bewertung und zum Vergleich einer Jobrolle mit Branchenstandards, Marktbedingungen und internen Erwartungen, um ein angemessenes Gehalt, Sozialleistungen und Jobanforderungen festzulegen. Job-Benchmarking sorgt für Konsistenz in Stellenbeschreibungen und Vergütungen.",
    },
    {
      id: "K",
      title: "Schlüsselpersonenversicherung",
      content:
        "Eine Art Unternehmensversicherung, die ein Unternehmen im Todes- oder Arbeitsunfähigkeitsfall eines wichtigen Mitarbeiters, dessen Fähigkeiten oder Wissen entscheidend für die Organisation sind, entschädigt. Diese Versicherung hilft, finanzielle Verluste während des Einstellungs- oder Umschulungsprozesses abzufedern.",
    },
    {
      id: "L",
      title: "Arbeitsmarkttest (LMT)",
      content:
        "Einige Länder verlangen diesen Prozess während der Rekrutierung, insbesondere bei der Einstellung ausländischer Arbeitnehmer. Der LMT beinhaltet den Nachweis, dass keine geeigneten lokalen Arbeitskräfte zur Besetzung der Position verfügbar sind, bevor diese einem Nicht-Staatsangehörigen angeboten wird.",
    },
    {
      id: "M",
      title: "Management by Objectives (MBO)",
      content:
        "Ein Ansatz im Leistungsmanagement, bei dem Mitarbeiter und Manager gemeinsam messbare Ziele für einen bestimmten Zeitraum festlegen. Der Fortschritt wird überwacht, und das Erreichen der Ziele beeinflusst Vergütung, Beförderungen oder Weiterentwicklung.",
    },
    {
      id: "N",
      title: "Geheimhaltungsvereinbarung (NDA)",
      content:
        "Ein rechtsverbindlicher Vertrag, in dem sich ein Mitarbeiter verpflichtet, vertrauliche Unternehmensinformationen, Geschäftsgeheimnisse oder sensible Daten nicht an externe Parteien weiterzugeben. NDAs werden häufig zum Schutz von geistigem Eigentum eingesetzt.",
    },
    {
      id: "O",
      title: "Organisationsentwicklung (OD)",
      content:
        "Ein bewusster Versuch, die Effizienz und Effektivität einer Organisation durch Interventionen in ihren Prozessen, Strukturen und ihrer Kultur zu verbessern. OD-Strategien zielen oft darauf ab, die Belegschaft mit den Unternehmenszielen in Einklang zu bringen, um die Leistung zu steigern.",
    },
    {
      id: "P",
      title: "Psychometrische Tests",
      content:
        "Psychometrische Tests sind eine Bewertungsmethode im Recruiting, um die kognitiven Fähigkeiten, Persönlichkeitsmerkmale und Verhaltensweisen der Kandidaten zu messen. Sie liefern objektive Daten, die Arbeitgebern helfen, die Eignung eines Kandidaten für eine bestimmte Rolle vorherzusagen.",
    },
    {
      id: "Q",
      title: "Stilles Kündigen",
      content:
        "Ein Arbeitsplatztrend, bei dem Mitarbeiter nur die minimal erforderlichen Aufgaben ihrer Arbeit erfüllen, ohne darüber hinauszugehen, oft aufgrund von Desinteresse oder Unzufriedenheit. Stilles Kündigen kann die Produktivität und Moral innerhalb einer Organisation negativ beeinflussen.",
    },
    {
      id: "R",
      title: "Abfindungszahlung",
      content:
        "Eine finanzielle Entschädigung, die an Mitarbeiter gezahlt wird, die entlassen werden, weil ihre Rolle redundant geworden ist. Die Abfindungszahlung wird in der Regel basierend auf der Dienstzeit und dem Gehalt des Mitarbeiters berechnet und soll den Mitarbeiter bei der Suche nach einer neuen Beschäftigung unterstützen.",
    },
    {
      id: "S",
      title: "Sabbatical",
      content:
        "Ein längerer Zeitraum von bezahltem oder unbezahltem Urlaub, der Mitarbeitern die Möglichkeit gibt, sich persönlich oder beruflich weiterzuentwickeln, z. B. durch Bildung, Reisen oder Forschung. Es wird oft langjährigen Mitarbeitern als Belohnung für ihre Dienste angeboten.",
    },
    {
      id: "T",
      title: "Gesamtvergütung",
      content:
        "Ein ganzheitlicher Blick auf das gesamte Leistungspaket, das Vergütung und nicht-monetäre Mitarbeiterbelohnungen umfasst. Gesamtvergütung beinhaltet Gehalt, Boni, Sozialleistungen, Work-Life-Balance-Initiativen und persönliche Entwicklungsmöglichkeiten.",
    },
    {
      id: "U",
      title: "Tarifvertrag mit Zwangsmitgliedschaft",
      content:
        "Ein Arbeitsvertrag, der verlangt, dass alle Mitarbeiter innerhalb einer bestimmten Jobklassifikation oder Abteilung nach der Einstellung Mitglied der Gewerkschaft werden. Tarifverträge mit Zwangsmitgliedschaft sind in Branchen mit starker Arbeitnehmervertretung üblich.",
    },
    {
      id: "V",
      title: "Freiwillige Entlassung",
      content:
        "Arbeitgeber bieten Mitarbeitern die Möglichkeit, freiwillig ein Abfindungspaket anzunehmen und das Unternehmen im Rahmen von Personalabbau zu verlassen. Dieser Ansatz hilft Organisationen, die Mitarbeiterzahl zu reduzieren, ohne zu Zwangsentlassungen greifen zu müssen.",
    },
    {
      id: "W",
      title: "Whistleblower-Schutz",
      content:
        "Gesetze oder Richtlinien, die Mitarbeiter schützen, die illegale oder unethische Praktiken innerhalb einer Organisation melden, vor Vergeltungsmaßnahmen wie Degradierung oder Entlassung. Whistleblower-Schutz ermutigt Mitarbeiter, sich ohne Angst vor Vergeltung zu äußern.",
    },
    {
      id: "X",
      title: "X-Generation Führung",
      content:
        "Ein Begriff, der Führungsstile beschreibt, die von den Werten der Generation X beeinflusst sind, darunter Unabhängigkeit, Anpassungsfähigkeit und eine Vorliebe für informelle Kommunikation. X-Generationsführer betonen oft Work-Life-Balance und Mitarbeiterautonomie.",
    },
    {
      id: "Y",
      title: "Yellow-Dog-Vertrag",
      content:
        "Eine Vereinbarung zwischen Arbeitgeber und Arbeitnehmer, in der der Arbeitnehmer zustimmt, keiner Gewerkschaft beizutreten, als Bedingung für die Beschäftigung. Solche Verträge waren im frühen 20. Jahrhundert gängiger, sind jedoch in vielen Ländern inzwischen illegal.",
    },
    {
      id: "Z",
      title: "Zero-Based Budgeting (ZBB)",
      content:
        "Ein Ansatz zur Budgetierung, bei dem alle Ausgaben für jede neue Periode von Grund auf neu begründet werden müssen, anstatt vorherige Budgets als Ausgangspunkt zu verwenden. ZBB wird in der Personalplanung verwendet, um zu beurteilen, ob jede Rolle und Ausgabe erforderlich ist, um die Unternehmensziele zu erreichen.",
    },
  ];

  const glossaryTermsIt = [
    {
      id: "A",
      title: "Sistema di Tracciamento dei Candidati (ATS)",
      content:
        "Un'applicazione software utilizzata dalle organizzazioni per gestire e automatizzare il processo di reclutamento. L'ATS esamina il curriculum, classifica i candidati in base a criteri predefiniti e monitora i candidati durante tutto il ciclo di assunzione.",
    },
    {
      id: "B",
      title: "Colloquio Comportamentale",
      content:
        "Una tecnica di colloquio in cui ai candidati viene chiesto di fornire esempi specifici di comportamenti passati relativi alle competenze o esperienze richieste per il lavoro. Le domande sono progettate per valutare come i candidati hanno gestito situazioni in passato come predittore delle loro prestazioni future.",
    },
    {
      id: "C",
      title: "Colloquio Basato sulle Competenze",
      content:
        "Una forma strutturata di colloquio che valuta la competenza del candidato in aree critiche, come leadership, problem-solving o comunicazione. I colloqui basati sulle competenze si concentrano su quanto bene i candidati soddisfano le competenze chiave richieste per una posizione.",
    },
    {
      id: "D",
      title: "Impatto Disparato",
      content:
        "Un termine legale che si riferisce a politiche o pratiche nel lavoro che sono apparentemente neutrali ma che influenzano negativamente in modo sproporzionato un gruppo protetto. L'impatto disparato può portare a reclami di discriminazione secondo le leggi sull'occupazione.",
    },
    {
      id: "E",
      title: "Verifica dell'Occupazione",
      content:
        "La verifica dell'occupazione è il processo mediante il quale un datore di lavoro conferma la storia lavorativa, le qualifiche e l'identità di un potenziale assunto contattando precedenti datori di lavoro o istituzioni educative. Aiuta a garantire l'accuratezza delle informazioni fornite dal candidato.",
    },
    {
      id: "F",
      title: "Contratto a Termine",
      content:
        "Un tipo di accordo di lavoro in cui un dipendente viene assunto per un periodo specifico, con una data di inizio e fine predefinite. I contratti a termine sono spesso utilizzati per lavori basati su progetti o stagionali e possono o meno essere rinnovati alla scadenza.",
    },
    {
      id: "G",
      title: "Analisi del Gap (HR)",
      content:
        "Un metodo di valutazione che determina la differenza tra le capacità attuali della forza lavoro e quelle desiderate per raggiungere gli obiettivi aziendali. L'analisi del gap aiuta le organizzazioni a identificare le aree di miglioramento nella formazione, assunzione o sviluppo.",
    },
    {
      id: "H",
      title: "Sistema Informativo delle Risorse Umane (HRIS)",
      content:
        "Una piattaforma digitale che gestisce dati dei dipendenti, stipendi, benefici e compiti di conformità. I sistemi HRIS automatizzano molte funzioni HR, consentendo ai dipartimenti di ottimizzare le operazioni e migliorare l'efficienza.",
    },
    {
      id: "I",
      title: "Contratto Implicito",
      content:
        "Un concetto legale in cui i termini dell'impiego non sono esplicitamente dichiarati ma sono dedotti da azioni, politiche o dichiarazioni. Ad esempio, aspettative di impiego a lungo termine basate su politiche aziendali o assicurazioni verbali possono creare un contratto implicito tra datore di lavoro e dipendente.",
    },
    {
      id: "J",
      title: "Benchmarking del Lavoro",
      content:
        "Un processo sistematico di valutazione e confronto di un ruolo lavorativo rispetto agli standard di settore, alle condizioni di mercato e alle aspettative interne per stabilire stipendi, benefici e requisiti di lavoro adeguati. Il benchmarking del lavoro garantisce coerenza nelle descrizioni e compensi dei ruoli.",
    },
    {
      id: "K",
      title: "Assicurazione per Persone Chiave",
      content:
        "Un tipo di assicurazione aziendale che compensa un'azienda in caso di morte o incapacità di un dipendente chiave le cui competenze o conoscenze sono critiche per l'organizzazione. Questa assicurazione aiuta a mitigare le perdite finanziarie durante il processo di assunzione o riqualificazione.",
    },
    {
      id: "L",
      title: "Test del Mercato del Lavoro (LMT)",
      content:
        "Alcuni paesi richiedono questo processo durante il reclutamento, in particolare quando si assumono lavoratori stranieri. L'LMT comporta la dimostrazione che non ci sono lavoratori locali idonei disponibili per ricoprire la posizione prima di offrirla a un cittadino non nazionale.",
    },
    {
      id: "M",
      title: "Management by Objectives (MBO)",
      content:
        "Un approccio alla gestione delle prestazioni in cui i dipendenti e i manager stabiliscono congiuntamente obiettivi misurabili per un periodo specifico. I progressi vengono monitorati e il raggiungimento degli obiettivi influenza la retribuzione, le promozioni o lo sviluppo.",
    },
    {
      id: "N",
      title: "Accordo di Non Divulgazione (NDA)",
      content:
        "Un contratto legalmente vincolante in cui un dipendente si impegna a non divulgare o condividere informazioni aziendali riservate, segreti commerciali o dati sensibili con parti esterne. Gli NDA sono spesso utilizzati per proteggere la proprietà intellettuale.",
    },
    {
      id: "O",
      title: "Sviluppo Organizzativo (OD)",
      content:
        "Un impegno deliberato per migliorare l'efficienza e l'efficacia di un'organizzazione attraverso interventi nei suoi processi, strutture e cultura. Le strategie di OD spesso allineano la forza lavoro con gli obiettivi aziendali per migliorare le prestazioni.",
    },
    {
      id: "P",
      title: "Test Psicometrico",
      content:
        "I test psicometrici sono un metodo di valutazione utilizzato nel reclutamento per misurare le capacità cognitive, i tratti della personalità e le tendenze comportamentali dei candidati. Forniscono dati oggettivi che aiutano i datori di lavoro a prevedere l'idoneità di un candidato per un ruolo specifico.",
    },
    {
      id: "Q",
      title: "Quiet Quitting",
      content:
        "Una tendenza sul posto di lavoro in cui i dipendenti svolgono solo le mansioni minime richieste, senza andare oltre, spesso a causa di disimpegno o insoddisfazione. Il quiet quitting può avere un impatto negativo sulla produttività e sul morale all'interno dell'organizzazione.",
    },
    {
      id: "R",
      title: "Indennità di Ridondanza",
      content:
        "Compenso finanziario fornito ai dipendenti licenziati perché il loro ruolo è diventato ridondante. L'indennità di ridondanza è in genere calcolata in base alla durata del servizio e allo stipendio del dipendente ed è destinata a supportarlo mentre cerca un nuovo lavoro.",
    },
    {
      id: "S",
      title: "Aspettativa Sabbatica",
      content:
        "Un periodo prolungato di congedo pagato o non pagato che consente ai dipendenti di prendersi del tempo per lo sviluppo personale o professionale, come l'istruzione, il viaggio o la ricerca. Viene spesso offerto ai dipendenti di lungo corso come premio per il servizio.",
    },
    {
      id: "T",
      title: "Ricompense Totali",
      content:
        "Una visione olistica del pacchetto completo di benefici, compensi e ricompense non monetarie per i dipendenti. Le ricompense totali includono stipendio, bonus, benefici, iniziative per l'equilibrio tra vita lavorativa e vita privata e opportunità di sviluppo personale.",
    },
    {
      id: "U",
      title: "Accordo di Associazione Obbligatoria",
      content:
        "Un accordo di lavoro che richiede che tutti i dipendenti all'interno di una specifica classificazione o dipartimento diventino membri di un sindacato dopo essere stati assunti. Gli accordi di associazione obbligatoria sono comuni in settori con una forte rappresentanza sindacale.",
    },
    {
      id: "V",
      title: "Redundancy Volontaria",
      content:
        "I datori di lavoro offrono ai dipendenti l'opzione di accettare volontariamente un pacchetto di ridondanza e lasciare l'azienda durante i ridimensionamenti. Questo approccio aiuta le organizzazioni a ridurre il numero di dipendenti senza dover ricorrere a licenziamenti forzati.",
    },
    {
      id: "W",
      title: "Protezione del Whistleblower",
      content:
        "Leggi o politiche che proteggono i dipendenti che segnalano pratiche illegali o non etiche all'interno di un'organizzazione dalle ritorsioni, come la retrocessione o il licenziamento. La protezione del whistleblower incoraggia i dipendenti a segnalare problemi senza paura di ritorsioni.",
    },
    {
      id: "X",
      title: "Leadership della Generazione X",
      content:
        "Un termine che descrive gli stili di leadership influenzati dai valori della Generazione X, inclusi indipendenza, adattabilità e una preferenza per la comunicazione informale. I leader della Generazione X enfatizzano spesso l'equilibrio tra lavoro e vita privata e l'autonomia dei dipendenti.",
    },
    {
      id: "Y",
      title: "Contratto Yellow-Dog",
      content:
        "Un accordo tra un datore di lavoro e un dipendente in cui il dipendente accetta di non aderire a un sindacato come condizione per l'assunzione. Questi contratti erano più comuni all'inizio del XX secolo ma ora sono illegali in molti paesi.",
    },
    {
      id: "Z",
      title: "Zero-Based Budgeting (ZBB)",
      content:
        "Un approccio al budgeting in cui tutte le spese devono essere giustificate da zero per ogni nuovo periodo, invece di utilizzare i budget precedenti come punto di partenza. Lo ZBB viene utilizzato nella pianificazione della forza lavoro per valutare se ogni ruolo e spesa sia necessaria per raggiungere gli obiettivi aziendali.",
    },
  ];

  if(locale == "en"){
    glossaryTerms = glossaryTermsEn;
  } else if(locale == "de"){
    glossaryTerms = glossaryTermsDe;
  } else if(locale == "it"){
    glossaryTerms = glossaryTermsIt;
  }

  

  return (
    <section className="glossary-wrap">
      <div className="_container">
        <div className="glossary-wrap__body">
          {glossaryTerms.map((item, index) => (
            <div className="item fadeInUp" key={index}>
              <div className="letter">{item.id}</div>
              <div className="details">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlossaryWrap;
