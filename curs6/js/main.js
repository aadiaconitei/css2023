import Book1, { citeste} from './book.js';


//  import * from " demo.js"
//  import { func1, obj2 } from "demo.js"


let carte = new Book1(
        'Poezii',
        'Mihai Eminescu', 
        250
    );
 console.log(carte.toString());
 console.log(citeste());