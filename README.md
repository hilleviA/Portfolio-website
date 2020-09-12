# Automatisering

## Mall för kommande projekt
Detta är en mall som är tänkt att kunna klonas ner och användas som start på nya projekt. 
I mappen src ligger mappar med arbetsfiler för HTML, CSS, JavaScript och bilder. Med hjälp utav Gulp kopieras dessa sedan över till publiceringsmappen "Pub". Denna mapp tillsammans med node_modules är de enda mapparna som inte sparas med Git då dessa lätt återskapas. 

## För att komma igång
För att köra igång automatiseringen startar man helt enkelt Gulp genom att bara skriva gulp i terminalen. Då startas en serie av händelser där det första innebär att den kopierar och minifierar de redan exiseterande filerna till "pub"-mappen, (som även skapas här) med funktionerna copyHTML, cssTasks och jsTasks. 

Efter det startas en watch funktion som har till uppgift att se om det sker några förändringar i filerna i src-katalogen. Om så är fallet sparas även dessa ändringar till Pubkatalogen. 

## De paket som används är: 

- **Gulp** - Gör det möjligt att automatisera arbetet och därmed spara tid och jobb.  
- **Gulp-concat** - Slår samman alla filer av samma sort till en och tar därmed mindre plats på servern. 
- **Gulp-clean-css** - Minimerar all CSS för att få ner storleken på filerna. 
- **Gulp-ulgify-es** - Gör JavaScriptkoden så ful och oläsbar som möjligt, bl.a. genom att ta bort alla mellannslag och radbrytningar. Detta gör att filstorleken minskar men inneär även att det är svårt för utomstående att dra nytta av den kod som jag skapat då den blir svår att tyda. 
- **Gulp-htmlmin** - Minimerar all HTML vilket gör att man får ner storleken på filerna.
- **Gulp-imagemin** - Tanken var att den skulle minimera bilder men det det verkar som att den inte inte hittar själva modulen gulp-imagemin , även fast den är installerad. Har tagit bort den mesta koden gällande detta så att det övriga ska fungera tills jag löst problemet med bild minifieraren. 

## Fördelar med automatisering

Genom att använda sig av automatisering sparar man tid då detta nu sker automatiskt istället för att manuellt behöva behöva spara, köra eller uppdatera. 


### Skrivet av **Hillevi Annfält** 2020-09-12