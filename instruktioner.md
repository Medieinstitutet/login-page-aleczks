2 delmoment, funktionskrav samt kodgranskning.

Funktionskrav (max 100 poäng, minst 60p krävs för G, 40p extra för att nå VG).

Kodgranskning utav 2 kamrater. Moment 1 (med minst 60p) och 2 (kodgranskning) måste genomföras för ett godkänt betyg i uppgiften. 

Är det något du är osäker på så ställ frågor!

Utveckla en inloggningssida till ett företag.
Sidan skall fungera som en proof-of-concept och har inte krav på säkerhet. Arbeta med användarnamn och lösenord i klartext.
Hantera inloggningsuppgifter som statiska variabler Eller i en array.

Minst 1 användare skall ha användarnamn “janne” och lösenord “test”.
En lyckad inloggning skall sparas i localStorage.
Sidan ska komma ihåg och visa rätt vyer under tiden besökaren är inloggad.

Sidan skall innehålla en meny, en del för innehåll samt en footer.

Menyn skall alltid visas och ändras dynamiskt för att visa rätt innehåll:

En valfri logotyp eller en h1'a. ✅

Om besökaren ej är inloggad så skall ett inloggningsformulär visas. ✅

Är besökaren inloggad så skall istället en logga-ut knapp visas.

Innehålls -vyn skall dynamiskt växla mellan tre olika lägen:

Välkomstsida för ej inloggade. ✅
Felmeddelande vid felaktig inlogging. ✅
Välkomstsida för inloggad besökare. ✅

Ditt projekt får enbart innehålla 1 st html sida, index.html alla vyer skall hanteras i denna. ✅

Funktionskrav (60p för G och 100p för VG)

Ditt projekt skall kunna testas online via tex github pages. (10p)
Sidan visar dynamiskt rätt innehåll hela tiden. (10p)
Det går att logga in. (10p) ✅

Inloggning sparas i localStorage, dvs det skall gå att ladda om webbläsaren och sidan kommer ihåg rätt inloggad användare och visar rätt vy. (10p)

Välkomstsidan skall dynamiskt visa rätt användarnamn beroende på vem som är inloggad. (10p)

Det går att logga ut. (10p)

VG KRAV (40p)
Det skall finnas fler användare (i tex en object array), dokumentera de andra användarna inför test i readme.md (20p)

Det skall gå att skapa och logga in med en ny användare (Då skall ett nytt formulär för detta visas på innehålls-sidan) Du skall då använda localStorage som databas för användare. (20p)

Efter deadline kommer du att tilldelas slumpmässigt två andra lösningar som du skall kodgranska. Läs mer om hur en kodgranskning går till under kapitlet kodgranskning. Båda kodgranskningarna måste vara inlämnade för att få G på uppgiften.


Inlämning
Du lämnar in en länk till repot som skapas av länken ovan, samt sedan en länk till projektet live via github pages.

Håll repot “private” tills du är klar i slutet av veckan, först då ändrar du synlighet till “public” och sedan publicerar till github pages.