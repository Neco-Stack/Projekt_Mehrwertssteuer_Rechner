const nettoBrutto = document.querySelector("#nettoBrutto") as HTMLInputElement;
const bruttoNetto = document.querySelector("#bruttoNetto") as HTMLInputElement;
const mwstNeunzehn = document.querySelector("#mwstNeunzehn") as HTMLInputElement;
const mwstSieben = document.querySelector("#mwstSieben") as HTMLInputElement;
const inputNettoBrutto = document.querySelector("#inputNettoBrutto") as HTMLInputElement;
const btnBerechnen = document.querySelector ("#btnBerechnen") as HTMLInputElement;
const mwstBetrag = document.querySelector ("#mwstBetrag") as HTMLInputElement;
const outputLabel = document.querySelector ("#outputLabel") as HTMLParagraphElement;
const inputLabel = document.querySelector("#inputLabel") as HTMLLabelElement;
// above we declare all variables which will be used in the function to calculate the MwSt
// now we add a event listener to the first choice of user 
// the user interface changes now after the first choice
nettoBrutto.addEventListener("click", () => {
    console.log("Mehrwerststeuer aufschlagen wurde ausgewählt");
    if (inputLabel){
        inputLabel.textContent = "Nettobetrag (Preis ohne Mehrwertssteuer) in Euro";
    }
    if (outputLabel){
        outputLabel.textContent = "Bruttobetrag";
    }
})
bruttoNetto.addEventListener("click", ()=>{
    console.log("Mehrwerststeuer abziehen wurde ausgewählt");
    if (inputLabel){
        inputLabel.textContent = "Bruttobetrag (Preis mit Mehrwerststeuer) in Euro";
    } 
    if (outputLabel){
        outputLabel.textContent = "Nettobetrag";
    }
    
})
// the second choise has impact on result of outputLabel
// now we program the calculation logic for this step 
// we declare a new variable mwstSatz whoch we will used for the calculation
// now we declare a new variable for the second radio section
// this variable will be used to calculate the outputLabel 
// we use change bc the value of the element change
// we use click before bc the element change
let mwstSatz = 0.19; 
mwstNeunzehn.addEventListener("change", () => {
    console.log("19% Mehrwertsteuer ausgewählt");
    mwstSatz = 0.19;
});
mwstSieben.addEventListener("change", () => {
    console.log("7% Mehrwertsteuer ausgewählt");
    mwstSatz = 0.07;
});
btnBerechnen.addEventListener("click", function mwstRechner(){
    console.log("Der Button wurde geklickt");
    // the btn works
    //now we want to get the user input number 
    const betrag= Number(inputNettoBrutto.value);
    console.log("User hat folgenden Betrag eingegeben:", betrag);
    // we can see value in console
    // now we add the choice of user into the function nettoBrutto, bruttoNetto
    const mwstAuf = nettoBrutto.checked;
    const mwstAb = bruttoNetto.checked; 
    console.log("Der User möchte die Steuer aufschlagen", mwstAuf);
    console.log("Der User möchte die Steuer abziehen:", mwstAb);
    let endErgebnis : number;
    let errechneterMwstBetrag : number;
    if (mwstAuf){
        errechneterMwstBetrag = betrag * mwstSatz;
        endErgebnis = betrag + errechneterMwstBetrag;
        console.log("Berechnung Netto zu Brutto");
        console.log("Errechneter Betrag:", errechneterMwstBetrag.toFixed(2));
        console.log("End Ergebnis:", endErgebnis.toFixed(2));
        if (mwstBetrag){
            mwstBetrag.textContent = errechneterMwstBetrag.toFixed(2) + " €";
        }
        if (outputLabel){
            outputLabel.textContent = endErgebnis.toFixed(2) + " €";
        }
        // the calculation for mwstAuf works and you can see the results in console
    } else {
        endErgebnis = betrag / (1+ mwstSatz);
        errechneterMwstBetrag = betrag - endErgebnis;
        console.log("End Ergebnis", endErgebnis.toFixed(2));
        console.log("Errechneter MwSt Betrag:", errechneterMwstBetrag.toFixed(2));
        if (mwstBetrag){
            mwstBetrag.textContent = errechneterMwstBetrag.toFixed(2) + " €";
        }
        if (outputLabel){
            outputLabel.textContent = endErgebnis.toFixed(2) + " €";
        }
    }

});





































