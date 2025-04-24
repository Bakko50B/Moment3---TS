# Moment3

Ett repo för min första angular webbplats

## server

Efter kloning körs  
* npm install  
  
I package.json finns några skript.  
  
För att starta servern som renderar webbplatsen kör  
* npm run start  

## Komponenter

Det finns tre sidor i webbplatsen som alla är komponenter.  
Header och footer är också komponenter.  
  
Utöver de synliga och länkade komponenterna finns även en komponent som hanterar 404 resurser.   
En not-found komponent  

## Bild(er)  
      
I aboutkomponenten finns en metod som slumpar fram en url genom att ge ett tal mellan 0 och antalet-1 i en array.  
Arrayen har på varje plats en url till en bild (olika urler för varje position i arrayen)
Det framslumpade talet blir den "position" i arrayen vars url ska sättas till bildurlens variabel.  

## kommentar  
  
 Utvecklat i VSC med node.js och standarskommando för att skapa en nytt projekt.   
 * ng new projektnamn  