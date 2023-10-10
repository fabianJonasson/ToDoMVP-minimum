# Minimalistisk MVP - Enbart GET routes

Det här ska bli ett program som ska kunna skriva ut förbestämda 
uppgifter på en sida. Det ska även gå att hämta och skriva ut individuella uppgifter
baserat på ett id (?)

Programmet kommer behöva:
- nodejs och express
- jest, supertest, nodemon för tester
- olika routes - GET /, /todo/, /todo/id (?)

PDCA
plan/
börja med att skriva tester:
test: kolla så att man får svar från GET /
test: kolla att tasks-arrayen kommer med till body
test: kolla så att arrayen är en array

hårdkoda en array med tasks i JSON-format för att testa med

Vad behövs för att kunna skriva ut "tasks" på index sidan:
- En knapp med onclick
- Att ha länkat en js-fil i html
js (på klienten)
- js: göra en GET request i kod för att hämta tasksen
- js: gå igenom alla tasks och skapa ett nytt li-element för varje (DOM manipulation)


### Log
- fick några fel vid npm install, behövde uppdatera pug och express med "npm audit fix --force" (fungerade inte utan --force)
- hur kollar man content type med jest ?? res.json skickar html för mig enligt webkonsolen??? (det var inget, kollade på fel ställe)
- Att länka client.js till index.pug går inte så bra, måste kolla upp hur man inkluderar en js-fil som ska ligga client side !!
- button onclick ger referenceError när den försöker köra funktionen som ska komma från client.js
