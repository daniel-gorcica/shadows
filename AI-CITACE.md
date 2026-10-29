# AI-citace

## Použitý prompt

> Chtěl bych udělat webovku na téma Assassin’s Creed Shadows. Nechám to komplet na tobě, hlavně ať to vypadá pěkně. Přidej dolů validátory HTML a CSS + AI-citaci, kde napíšeš všechno, co jsi dělal, a jaké jsi dostal prompty.

## Další požadavky během tvorby

- Přidat logo `logo.png` do levé části hlavičky.
- Udělat design realističtější a doplnit lokace ze hry.
- Použít skutečné obrázky ze hry místo abstraktních CSS ilustrací.
- Přidat obrázky také ke kartám lokací.
- Výrazně zmenšit patičku.
- Přesunout AI-citaci do souboru Markdown.
- Modernizovat celý vzhled a odstranit původní dekorativní ilustrace.
- Přidat fixní menu, scroll animace, parallax efekt a zvýraznění aktivní sekce.
- Vyzkoušet vzhled podobný webu Assassin’s Creed Origins, následně se vrátit k původnímu rozložení Shadows.
- Přidat do stránky pohyblivý pás s japonskými znaky.
- Změnit barevnou paletu na tmavé modročerné pozadí s modrozelenými plochami a karmínovými akcenty.
- Zachovat současné rozložení a přidat pouze vybrané vizuální prvky inspirované Origins.
- Odstranit názvy z pohyblivého pásu a ponechat pouze japonské znaky.
- Udělat pohyblivý pás jako plynule opakující se nekonečný ticker.
- Přidat klikací karty lokací s podrobnějšími popisy pro Igu, Ósaku, Kjóto a Azuči.
- Rozmístit obrázky detailů lokací střídavě vlevo a vpravo a zvětšit mezery mezi nimi.
- Odstranit japonský znak z CTA panelu, následně odstranit celý CTA panel.
- **Přidat do určitých částí stránky rozmazané nápisy a lotosové květy, které budou vypadat jako namalované štětcem.**
- **Rozmazat samotné normální nadpisy tak, aby vypadaly, jako by byly napsané mokrým štětcem.**
- **Přidat lotosové květy a katany do pozadí po celé stránce (globálně).**
- **Zvýšit viditelnost těchto rozmazaných prvků v pozadí, aby nebyly neviditelné.**
- **Rozmazat japonský geometrický vzor (asanoha) na pozadí sekcí, aby nepůsobil tak ostře a technicky.**

## Co vytvořila AI

- Navrhla vizuální směr inspirovaný feudálním Japonskem, japonským minimalismem a barevností hry.
- Vytvořila responzivní strukturu v HTML.
- Vytvořila styly v CSS pro desktop i mobilní zařízení.
- Přidala mobilní navigaci pomocí JavaScriptu.
- Přidala sekce o příběhu, postavách, světě a lokacích.
- Doplnila lokace Iga, Ósaka, Kjóto a Azuči.
- Přidala HTML a CSS validátory.
- Zapojila logo `logo.png` do hlavičky.
- Přidala skutečné screenshoty a oficiální obrázky Assassin’s Creed Shadows.
- Doplnila alternativní texty k obrázkům kvůli přístupnosti.
- Zkrátila patičku a přesunula podrobnou citaci do tohoto souboru.
- Obnovila původní Shadows layout po nevyhovujícím Origins redesignu a odstranila konfliktní tickerové styly.
- Přidala čistý japonský ticker se znaky `影`, `忍`, `刀`, `道`, `力`, `月`, `風`, `火`, `心` a `鷹`.
- Nastavila ticker jako nekonečnou CSS animaci se dvěma navazujícími běhy znaků a podporou `prefers-reduced-motion`.
- Doplnila filmový popisek hero obrázku `01 / IGA / KYOTO`.
- Vytvořila čtyři detailní bloky lokací s obrázkem, nadpisem, popisem a odkazem zpět.
- Udělala lokační karty přístupné jako odkazy s podporou klávesnice.
- Přidala střídání pořadí obrázku a textu u detailů lokací; na mobilu se layout skládá do jednoho sloupce.
- Přepnula světlé sekce do tmavé barevné palety a odstranila červený CTA panel.
- Odstranila celý závěrečný CTA panel podle zpětné vazby.
- **Vytvořila vlastní SVG filtr (`feTurbulence`, `feDisplacementMap`), který aplikovala na nadpisy (`h1`, `h2`) pro dosažení autentického efektu rozpití tuše/štětce.**
- **Vytvořila globální fixní kontejner (`position: fixed`), který obsahuje vektorové obrázky katan a lotosových květů. Tyto prvky mají vysoký `filter: blur` a nízkou průhlednost, takže vytvářejí atmosférické pozadí přes celou stránku.**
- **Vytvořila a do pozadí sekcí umístila obří, silně rozmazané japonské znaky (影, 忍, 侍, 桜, 夢), které dotvářejí dojem japonské malby.**
- **Přesunula původní CSS vzor `asanoha` do pseudoelementů (`::before`) a aplikovala na něj rozostření. Tím se vzor stal jemnou texturou na pozadí, aniž by jakkoliv narušil čitelnost textu nebo karet.**

## Použité technologie

- HTML5
- CSS3 (včetně pokročilých SVG filtrů a pseudo-elementů)
- JavaScript
- Markdown
- Google Fonts

## Zdroje obrázků

- Oficiální materiály Ubisoftu pro Assassin’s Creed Shadows.
- Herní screenshoty publikované v galerii Insider Gaming.
- Lokální obrázky dodané v projektu, například `logo.png` a `udoli.png`.

Web je neoficiální školní fanouškovská prezentace a není spojena se společností Ubisoft.