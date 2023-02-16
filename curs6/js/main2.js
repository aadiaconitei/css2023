import Carte, {citeste} from './book2.js';
// ceea ce se exporta ca default poate fi importat cu orice nume
// un modul exporta in mod default doar o singura functionalitate




let carte = new Carte('Poezii','Mihai Eminescu', 250);
 console.log(carte.toString());
 console.log(citeste());


