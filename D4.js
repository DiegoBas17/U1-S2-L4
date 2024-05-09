/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1 = "inserire valore 1", l2 = "inserire valore ") {
  const rettangolo = l1 * l2;
  return rettangolo;
}
console.log(area(5, 6));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(numero1, numero2) {
  if (numero1 === numero2) {
    somma = (numero1 + numero2) * 3;
  } else {
    somma = numero1 + numero2;
  }
  return somma;
}
console.log(
  "Questo è il caso in cui sono diversi: valori 5 e 6 = ",
  crazySum(5, 6)
);
console.log(
  "Questo è il caso in cui sono uguali: valori 5 e 5 = ",
  crazySum(5, 5)
);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(numero) {
  if (numero <= 19) {
    somma = 19 - numero;
  } else if (numero > 19) {
    somma = numero - 19;
  }
  return somma;
}
console.log("Questo è in caso il numero sia minore di 19. = ", crazyDiff(5));
console.log("Questo è in caso il numero sia maggiore di 19. = ", crazyDiff(25));
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(numeroIntero) {
  x = Number.isInteger(numeroIntero);
  if (x === true) {
    if (20 <= numeroIntero <= 100) {
      return "true";
    } else if ((numeroIntero = 400)) {
      return "true";
    } else {
      return "false";
    }
  } else {
    return "numero non valido!";
  }
}
console.log(boundary(99));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
/* intestazione = ;intestazione === true */
/* SCRIVI QUI LA TUA RISPOSTA */
function epify(stringa) {
  x = stringa.startsWith("EPICODE");
  if (x === true) {
    return stringa;
  } else {
    return "EPICODE" + stringa;
  }
}

console.log(epify("ciao come va il corso"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(number) {
  const x = number % 3;
  const y = number % 7;
  if (number < 0) {
    return "numero non valido";
  } else if (x === 0) {
    return "numero multiplo di 3";
  } else if (y === 0) {
    return "numero multiplo di 7";
  } else {
    return "il numero non è multiplo di 3 o di 7";
  }
}
console.log(check3and7(14));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(stringa) {
  const stringaSplit = stringa.split("");
  const arrayCapovolto = stringaSplit.reverse();
  const stringaCapovolta = arrayCapovolto.join("");
  return stringaCapovolta;
}

console.log(reverseString("ciao epicode"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function upperFirst(stringa) {
  const arrayFirst = stringa.split("");
  for (let x = 0; x < arrayFirst.length; x++) {
    if (arrayFirst[x] === " ") {
      y = x + 1;
      z = arrayFirst[y].toUpperCase();
      arrayFirst.spile(y, 2, z);
    }
  }
  w = arrayFirst.join("");
  return w;
}
console.log(upperFirst("ciao epicode un po ti odio")); */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function cutString(stringa) {
  x = stringa.length - 1;
  let slice1 = cutString.slice(0, 1);
  let slice2 = cutString.slice(x, 1);
  console.log(cutString);
}
console.log(cutString("ciao Epicode"));
 */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n) {
  x = Number.isInteger(n);
  if (x === true) {
    arrayRandom = Math.floor(Math.random() * 11);
    return arrayRandom;
  } else {
    return "numero non valido!";
  }
}
console.log(giveMeRandom(5));
