class Word {
  constructor(german, english, example) {
    this.german = german;
    this.english = english;
    this.example = example;
  }
}

const wordsA1 = [
  new Word("die Familie", "family", "Meine Familie ist sehr groß."),
  new Word("der Mann", "man", "Der Mann liest die Zeitung."),
  new Word("die Frau", "woman", "Die Frau kocht das Abendessen."),
  new Word("das Kind", "child", "Das Kind spielt im Garten."),
  new Word("der Sohn", "son", "Der Sohn geht zur Schule."),
  new Word("die Tochter", "daughter", "Die Tochter malt ein Bild."),
  new Word("der Bruder", "brother", "Mein Bruder ist jünger als ich."),
  new Word("die Schwester", "sister", "Meine Schwester ist älter als ich."),
  new Word("die Eltern", "parents", "Die Eltern gehen spazieren."),
  new Word("der Vater", "father", "Der Vater liest ein Buch."),
  new Word("die Mutter", "mother", "Die Mutter kocht das Mittagessen."),
  new Word("die Großeltern", "grandparents", "Meine Großeltern leben auf dem Land."),
  new Word("der Großvater", "grandfather", "Mein Großvater ist 80 Jahre alt."),
  new Word("die Großmutter", "grandmother", "Meine Großmutter backt gerne Kuchen."),
  new Word("der Enkel", "grandson", "Der Enkel spielt mit seinem Opa."),
  new Word("die Enkelin", "granddaughter", "Die Enkelin liest ein Buch."),
  new Word("der Onkel", "uncle", "Mein Onkel wohnt in Berlin."),
  new Word("die Tante", "aunt", "Meine Tante hat eine Katze."),
  new Word("der Cousin", "cousin (male)", "Mein Cousin ist mein bester Freund."),
  new Word("die Cousine", "cousin (female)", "Meine Cousine ist meine beste Freundin."),
  new Word("der Neffe", "nephew", "Der Neffe besucht seine Tante."),
  new Word("die Nichte", "niece", "Die Nichte spielt mit ihrer Tante."),
  new Word("der Freund", "friend (male)", "Mein Freund kommt aus Frankreich."),
  new Word("die Freundin", "friend (female)", "Meine Freundin ist sehr nett."),
  new Word("das Baby", "baby", "Das Baby schläft."),
  new Word("der Junge", "boy", "Der Junge spielt Fußball."),
  new Word("das Mädchen", "girl", "Das Mädchen liest ein Buch."),
  new Word("der Hund", "dog", "Der Hund bellt."),
  new Word("die Katze", "cat", "Die Katze schläft."),
  new Word("das Haustier", "pet", "Das Haustier frisst."),
  new Word("das Haus", "house", "Das Haus ist groß."),
  new Word("das Zimmer", "room", "Das Zimmer ist sauber."),
  new Word("die Küche", "kitchen", "Die Küche ist neu."),
  new Word("das Wohnzimmer", "living room", "Das Wohnzimmer ist gemütlich."),
  new Word("das Schlafzimmer", "bedroom", "Das Schlafzimmer ist dunkel."),
  new Word("das Bad", "bathroom", "Das Bad ist sauber."),
  new Word("die Toilette", "toilet", "Die Toilette ist verstopft."),
  new Word("das Badezimmer", "bathroom", "Das Badezimmer ist groß."),
  new Word("das Sofa", "sofa", "Das Sofa ist bequem."),
  new Word("der Stuhl", "chair", "Der Stuhl ist kaputt."),
  new Word("der Tisch", "table", "Der Tisch ist aus Holz."),
  new Word("der Schrank", "cupboard", "Der Schrank ist voll."),
  new Word("das Bett", "bed", "Das Bett ist gemütlich."),
  new Word("die Lampe", "lamp", "Die Lampe ist hell."),
  new Word("das Bild", "picture", "Das Bild hängt an der Wand."),
  new Word("der Teppich", "carpet", "Der Teppich ist weich."),
  new Word("das Fenster", "window", "Das Fenster ist offen."),
  new Word("die Tür", "door", "Die Tür ist geschlossen."),
  new Word("die Wand", "wall", "Die Wand ist weiß."),
  new Word("die Decke", "ceiling", "Die Decke ist hoch."),
  new Word("der Boden", "floor", "Der Boden ist aus Holz."),
  new Word("das Dach", "roof", "Das Dach ist rot."),
  new Word("das Auto", "car", "Das Auto fährt schnell."),
  new Word("das Fahrrad", "bicycle", "Das Fahrrad ist kaputt."),
  new Word("der Bus", "bus", "Der Bus kommt gleich."),
  new Word("die Straßenbahn", "tram", "Die Straßenbahn fährt durch die Stadt."),
  new Word("der Zug", "train", "Der Zug fährt pünktlich."),
  new Word("das Flugzeug", "airplane", "Das Flugzeug fliegt hoch."),
  new Word("das Schiff", "ship", "Das Schiff fährt auf dem Meer."),
  new Word("das Motorrad", "motorcycle", "Das Motorrad ist schnell."),
  new Word("der Hubschrauber", "helicopter", "Der Hubschrauber fliegt tief."),
  new Word("die U-Bahn", "subway", "Die U-Bahn fährt unter der Erde."),
  new Word("die Haltestelle", "bus stop", "Die Haltestelle ist hier."),
  new Word("das Ticket", "ticket", "Das Ticket ist teuer."),
  new Word("die Fahrkarte", "ticket", "Die Fahrkarte ist gültig."),
  new Word("der Fahrplan", "timetable", "Der Fahrplan zeigt die Abfahrtszeiten."),
  new Word("die Abfahrt", "departure", "Die Abfahrt ist um 15 Uhr."),
  new Word("die Ankunft", "arrival", "Die Ankunft ist um 18 Uhr."),
  new Word("der Flughafen", "airport", "Der Flughafen ist groß."),
  new Word("der Bahnhof", "train station", "Der Bahnhof ist alt."),
  new Word("die Bushaltestelle", "bus stop", "Die Bushaltestelle ist hier."),
  new Word("der Koffer", "suitcase", "Der Koffer ist schwer."),
  new Word("die Tasche", "bag", "Die Tasche ist klein."),
  new Word("der Rucksack", "backpack", "Der Rucksack ist praktisch."),
  new Word("der Pass", "passport", "Der Pass ist wichtig."),
  new Word("das Visum", "visa", "Das Visum ist gültig."),
  new Word("das Geld", "money", "Das Geld ist weg."),
  new Word("die Währung", "currency", "Die Währung ist Euro."),
  new Word("der Euro", "euro", "Ein Euro ist gleich 100 Cent."),
  new Word("der Cent", "cent", "Ein Cent ist wenig."),
  new Word("der Dollar", "dollar", "Ein Dollar ist viel."),
  new Word("das Pfund", "pound", "Ein Pfund ist schwer."),
  new Word("die Bank", "bank", "Die Bank ist geschlossen."),
  new Word("der Automat", "ATM", "Der Automat gibt Geld."),
  new Word("der Wechselkurs", "exchange rate", "Der Wechselkurs ist gut."),
  new Word("die Rechnung", "bill", "Die Rechnung ist teuer."),
  new Word("die Quittung", "receipt", "Die Quittung ist hier."),
  new Word("die Kreditkarte", "credit card", "Die Kreditkarte ist gültig."),
  new Word("das Bargeld", "cash", "Das Bargeld ist weg."),
  new Word("der Bankautomat", "ATM machine", "Der Bankautomat ist hier."),
  new Word("die Bankkarte", "bank card", "Die Bankkarte ist gesperrt."),
  new Word("die EC-Karte", "debit card", "Die EC-Karte ist gültig."),
  new Word("das Konto", "account", "Das Konto ist leer."),
  new Word("die Überweisung", "bank transfer", "Die Überweisung ist gemacht."),
  new Word("die Unterschrift", "signature", "Die Unterschrift ist wichtig."),
  new Word("die PIN-Nummer", "PIN number", "Die PIN-Nummer ist geheim."),
  new Word("sein", "to be", "Ich bin müde."),
  new Word("haben", "to have", "Ich habe einen Hund."),
  new Word("gehen", "to go", "Wir gehen spazieren."),
  new Word("kommen", "to come", "Sie kommt aus Deutschland."),
  new Word("machen", "to do/make", "Er macht Hausaufgaben."),
  new Word("sehen", "to see", "Ich sehe einen Film."),
  new Word("hören", "to hear", "Wir hören Musik."),
  new Word("sprechen", "to speak", "Sie spricht Deutsch."),
  new Word("essen", "to eat", "Ich esse einen Apfel."),
  new Word("trinken", "to drink", "Wir trinken Wasser."),
  new Word("lesen", "to read", "Er liest ein Buch."),
  new Word("schreiben", "to write", "Sie schreibt einen Brief."),
  new Word("arbeiten", "to work", "Ich arbeite in einem Büro."),
  new Word("lernen", "to learn", "Wir lernen Deutsch."),
  new Word("verstehen", "to understand", "Sie versteht die Aufgabe."),
  new Word("wissen", "to know", "Ich weiß die Antwort."),
  new Word("wollen", "to want", "Wir wollen nach Hause."),
  new Word("können", "to be able to", "Er kann schwimmen."),
  new Word("dürfen", "to be allowed to", "Du darfst nicht rauchen."),
  new Word("müssen", "to have to", "Sie muss arbeiten."),
  new Word("helfen", "to help", "Kann ich Ihnen helfen?"),
  new Word("nehmen", "to take", "Er nimmt den Bus."),
  new Word("geben", "to give", "Ich gebe dir mein Buch."),
  new Word("kaufen", "to buy", "Sie kauft eine Karte."),
  new Word("verkaufen", "to sell", "Er verkauft sein Auto."),
  new Word("suchen", "to search/look for", "Wir suchen einen Parkplatz."),
  new Word("finden", "to find", "Sie findet ihren Schlüssel."),
  new Word("lieben", "to love", "Ich liebe meine Familie."),
  new Word("mögen", "to like", "Er mag keine Tomaten."),
  new Word("brauchen", "to need", "Sie braucht Hilfe."),
  new Word("denken", "to think", "Ich denke, dass es regnen wird."),
  new Word("glauben", "to believe", "Sie glaubt an Gott."),
  new Word("sagen", "to say", "Er sagt, dass er müde ist."),
  new Word("fragen", "to ask", "Sie fragt nach dem Weg."),
  new Word("antworten", "to answer", "Ich antworte später."),
  new Word("kennen", "to know (be acquainted with)", "Er kennt meinen Bruder."),
  new Word("treffen", "to meet", "Wir treffen uns um 8 Uhr."),
  new Word("wohnen", "to live/reside", "Sie wohnt in Berlin."),
  new Word("anrufen", "to call (on the phone)", "Kannst du mich anrufen?"),
  new Word("öffnen", "to open", "Er öffnet die Tür."),
  new Word("schließen", "to close", "Sie schließt das Fenster."),
  new Word("spielen", "to play", "Wir spielen Fußball."),
  new Word("zeigen", "to show", "Kannst du mir das zeigen?"),
  new Word("bekommen", "to receive/get", "Er bekommt ein Geschenk."),
  new Word("gehen", "to go", "Wir gehen spazieren."),
  new Word("suchen", "to search/look for", "Wir suchen einen Parkplatz."),
  new Word("finden", "to find", "Sie findet ihren Schlüssel."),
  new Word("verstehen", "to understand", "Sie versteht die Aufgabe."),
  new Word("machen", "to do/make", "Er macht Hausaufgaben."),
  new Word("essen", "to eat", "Ich esse einen Apfel."),
  new Word("trinken", "to drink", "Wir trinken Wasser."),
  new Word("schlafen", "to sleep", "Er schläft im Bett."),
  new Word("warten", "to wait", "Wir warten auf den Bus."),
  new Word("stehen", "to stand", "Sie steht vor dem Haus."),
  new Word("sitzen", "to sit", "Er sitzt auf dem Stuhl."),
  new Word("liegen", "to lie", "Das Buch liegt auf dem Tisch."),
  new Word("öffnen", "to open", "Er öffnet die Tür."),
  new Word("schließen", "to close", "Sie schließt das Fenster."),
  new Word("lernen", "to learn", "Wir lernen Deutsch."),
  new Word("kennen", "to know (be acquainted with)", "Er kennt meinen Bruder."),
  new Word("können", "to be able to", "Er kann schwimmen."),
  new Word("müssen", "to have to", "Sie muss arbeiten."),
  new Word("wollen", "to want", "Wir wollen nach Hause."),
  new Word("dürfen", "to be allowed to", "Du darfst nicht rauchen.")
];

const wordsA2 = [
    new Word("die Arbeit", "work", "Ich habe viel Arbeit."),
    new Word("der Arm", "arm", "Mein Arm tut weh."),
    new Word("der Arzt", "doctor", "Ich gehe zum Arzt."),
    new Word("das Auto", "car", "Das Auto ist schnell."),
    new Word("der Ball", "ball", "Wir spielen mit dem Ball."),
    new Word("die Bank", "bank", "Wir sitzen auf der Bank."),
    new Word("der Baum", "tree", "Der Baum ist groß."),
    new Word("die Blume", "flower", "Die Blume ist schön."),
    new Word("das Buch", "book", "Ich lese ein Buch."),
    new Word("der Bus", "bus", "Ich fahre mit dem Bus."),
    new Word("die Butter", "butter", "Butter schmeckt gut."),
    new Word("das Ei", "egg", "Ich esse ein Ei."),
    new Word("das Ende", "end", "Das ist das Ende."),
    new Word("das Essen", "food", "Ich esse gerne chinesisches Essen."),
    new Word("das Fahrrad", "bicycle", "Ich fahre mit dem Fahrrad."),
    new Word("die Familie", "family", "Meine Familie ist groß."),
    new Word("der Fehler", "mistake", "Das war ein Fehler."),
    new Word("der Finger", "finger", "Ich zeige mit dem Finger."),
    new Word("der Fisch", "fish", "Der Fisch schwimmt."),
    new Word("die Frage", "question", "Ich habe eine Frage."),
    new Word("der Freund", "friend", "Er ist mein Freund."),
    new Word("die Freundin", "friend (female)", "Sie ist meine Freundin."),
    new Word("der Fuß", "foot", "Mein Fuß tut weh."),
    new Word("das Geld", "money", "Geld macht nicht glücklich."),
    new Word("die Geschichte", "story", "Das ist eine interessante Geschichte."),
    new Word("das Gesicht", "face", "Sie hat ein hübsches Gesicht."),
    new Word("das Glas", "glass", "Ich trinke aus dem Glas."),
    new Word("die Großmutter", "grandmother", "Meine Großmutter ist alt."),
    new Word("der Großvater", "grandfather", "Mein Großvater ist lustig."),
    new Word("das Haar", "hair", "Sie hat blonde Haare."),
    new Word("der Hals", "neck", "Mein Hals tut weh."),
    new Word("die Hand", "hand", "Ich wasche mir die Hände."),
    new Word("der Himmel", "sky", "Der Himmel ist blau."),
    new Word("das Haus", "house", "Mein Haus ist groß."),
    new Word("das Heft", "exercise book", "Ich schreibe in mein Heft."),
    new Word("das Hemd", "shirt", "Ich trage ein blaues Hemd."),
    new Word("die Hilfe", "help", "Kannst du mir bitte helfen?"),
    new Word("der Hund", "dog", "Der Hund bellt laut."),
    new Word("der Hunger", "hunger", "Ich habe Hunger."),
    new Word("der Kaffee", "coffee", "Möchtest du einen Kaffee trinken?"),
    new Word("der Käse", "cheese", "Ich mag keinen Käse."),
    new Word("der Kuchen", "cake", "Apfelkuchen schmeckt lecker."),
    new Word("der Lehrer", "teacher", "Mein Lehrer ist nett."),
    new Word("die Lehrerin", "teacher (female)", "Meine Lehrerin ist streng."),
    new Word("das Leben", "life", "Das Leben ist schön."),
    new Word("das Licht", "light", "Das Licht ist aus."),
    new Word("die Luft", "air", "Die Luft ist frisch."),
    new Word("die Milch", "milk", "Ich trinke morgens immer Milch."),
    new Word("das Mittagessen", "lunch", "Zum Mittagessen esse ich einen Salat."),
    new Word("der Mond", "moon", "Der Mond leuchtet."),
    new Word("die Mutter", "mother", "Die Mutter liest ein Buch."),
    new Word("die Nacht", "night", "Gute Nacht!"),
    new Word("die Nase", "nose", "Meine Nase läuft."),
    new Word("die Natur", "nature", "Die Natur ist schön."),
    new Word("der Opa", "grandpa", "Der Opa liest eine Zeitung."),
    new Word("die Oma", "grandma", "Die Oma strickt einen Schal."),
    new Word("der Onkel", "uncle", "Der Onkel fährt Auto."),
    new Word("die Orange", "orange", "Orangen sind saftig."),
    new Word("die Party", "party", "Die Party ist lustig."),
    new Word("die Pflanze", "plant", "Die Pflanze braucht Wasser."),
    new Word("das Pferd", "horse", "Das Pferd läuft schnell."),
    new Word("das Problem", "problem", "Das ist ein großes Problem."),
    new Word("der Pullover", "sweater", "Der Pullover ist warm."),
    new Word("der Regen", "rain", "Es regnet."),
    new Word("der Rock", "skirt", "Der Rock ist blau."),
    new Word("das Salz", "salt", "Das Essen braucht mehr Salz."),
    new Word("der Schuh", "shoe", "Mein Schuh ist kaputt."),
    new Word("der Schüler", "student", "Der Schüler lernt Deutsch."),
    new Word("die Schülerin", "student (female)", "Die Schülerin lernt Englisch."),
    new Word("der Sohn", "son", "Der Sohn macht seine Hausaufgaben."),
    new Word("die Sonne", "sun", "Die Sonne scheint."),
    new Word("der Spaß", "fun", "Das macht Spaß!"),
    new Word("der Sport", "sport", "Ich treibe gerne Sport."),
    new Word("der Stuhl", "chair", "Ich sitze auf dem Stuhl."),
    new Word("die Suppe", "soup", "Die Suppe ist heiß."),
    new Word("der Tag", "day", "Heute ist ein schöner Tag."),
    new Word("der Tee", "tea", "Ich trinke gerne grünen Tee."),
    new Word("der Tisch", "table", "Das Essen steht auf dem Tisch."),
    new Word("der Tisch", "table", "Wir essen am Tisch."),
    new Word("der Topf", "pot", "Die Suppe ist im Topf."),
    new Word("das Tier", "animal", "Das Tier ist süß."),
    new Word("die Tür", "door", "Die Tür ist geschlossen."),
    new Word("die Uhr", "clock", "Es ist sieben Uhr."),
    new Word("die Universität", "university", "Ich studiere an der Universität."),
    new Word("der Vater", "father", "Der Vater kocht das Abendessen."),
    new Word("das Verkehrsmittel", "means of transport", "Welches Verkehrsmittel nehmen wir?"),
    new Word("die Woche", "week", "Die Woche hat sieben Tage."),
    new Word("das Wochenende", "weekend", "Am Wochenende habe ich frei."),
    new Word("die Wohnung", "apartment", "Meine Wohnung ist klein."),
    new Word("das Wörterbuch", "dictionary", "Das Wörterbuch ist wichtig."),
    new Word("das Zimmer", "room", "Mein Zimmer ist groß."),
 ];


const cards = document.querySelectorAll('.card');
const germanWord = document.querySelector('.word');
const exampleSentance = document.querySelector('.example');
const translation = document.querySelector('.translation');
const nextWordButton = document.querySelector('.next-word-button');
const showAnswerButton = document.querySelector('.js-show-answer-button');
const clickedButton = localStorage.getItem('clickedButton');
const answerContainer = document.querySelector('.german-answer-hidden');

// function to get a random number to pick a random word out of an array of words
function getRandomIndex(wordsArray) {
  const randomWordIndex = Math.floor(Math.random() * wordsArray.length);
  return randomWordIndex;
}

if (clickedButton === 'a1Btn') {
  renderWord(wordsA1);
} else if(clickedButton === 'a2Btn') {
  renderWord(wordsA2);
} else {

}

function renderWord(wordsArray) {
  const randomIndex = getRandomIndex(wordsArray);
  germanWord.textContent = wordsArray[randomIndex].german;
  translation.textContent = wordsArray[randomIndex].english;
  exampleSentance.textContent = wordsArray[randomIndex].example;
}



function renderAnswer(wordsArray) {
  const randomIndex = getRandomIndex(wordsArray);
  germanWord.textContent = wordsArray[randomIndex].german;
  exampleSentance.textContent = wordsArray[randomIndex].example;
}

nextWordButton.addEventListener('click', () => {
  if (clickedButton === 'a1Btn') {
    renderWord(wordsA1);
  } else if(clickedButton === 'a2Btn') {
    renderWord(wordsA2);
  }
  answerContainer.classList.add('german-answer-hidden');
})

showAnswerButton.addEventListener('click', function () {
  answerContainer.classList.remove('german-answer-hidden');
})
