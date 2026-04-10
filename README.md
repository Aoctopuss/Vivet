# Vivet 

Een moderne webshop voor kleding, gebouwd als eindproject van het developer-traject. Vivet biedt gebruikers een overzichtelijke winkelervaring en geeft admins volledige controle over het productaanbod en bestellingen.

---

## Features

**Voor de klant:**
- Overzicht van alle beschikbare kledingproducten
- Producten toevoegen aan de winkelwagen
- Winkelwagen bekijken en leegmaken
- Bestelling plaatsen met bestelbevestiging

**Voor de admin:**
- Alle bestellingen bekijken
- Producten toevoegen, bewerken en verwijderen
- Producten resetten naar de originele staat via de API

---

## Vereisten

Om dit project lokaal te draaien heb je het volgende nodig:

- Een moderne webbrowser (Chrome, Firefox, Edge, Safari)
- [Visual Studio Code](https://code.visualstudio.com/) of een andere code-editor
- De **Live Server** extensie voor VS Code (aanbevolen)
- Internetverbinding (voor het ophalen van producten via de externe API)

> Geen installatie van Node.js, PHP of een database nodig. Het project draait volledig in de browser NOG!.

---

## Installatie

Volg de onderstaande stappen om het project lokaal op te starten:

### 1. Repository klonen

Open je terminal en voer het volgende commando uit:

```bash
git clone https://github.com/jouw-gebruikersnaam/vivet.git
```

### 2. Naar de projectmap navigeren

```bash
cd vivet
```

### 3. Project openen in VS Code

```bash
code .
```

### 4. Project starten met Live Server

1. Installeer de **Live Server** extensie in VS Code (als je dat nog niet hebt gedaan)
2. Rechtsklik op `index.html` in de bestandsverkenner
3. Kies **"Open with Live Server"**
4. De webshop opent automatisch in je browser op `http://127.0.0.1:5500`

---

<<<<<<< HEAD
### 5. Json server installeren

in terminal 
```
npm install -g json-server
```

---

### 5. Json server runnen op localhost:3000 

in terminal
```
json-server --watch db.json
```

=======
## Admin-omgeving

Het admin-gedeelte is bereikbaar via:

```
http://127.0.0.1:5500/admin.html
```

Hier kun je producten beheren en alle geplaatste bestellingen inzien.
>>>>>>> eb7a14461c972736f24aa1fee63d28e2c2191be3

---

## Technologieën

| Technologie | Gebruik |
|---|---|
| HTML | Structuur van de pagina's |
| CSS | Styling en layout |
| JavaScript | Logica, DOM-manipulatie |
| LocalStorage | Opslaan van producten, winkelwagen en bestellingen |
<<<<<<< HEAD
| JSON | Ophalen van kledingproducten |
=======
| Externe API | Ophalen van kledingproducten |
>>>>>>> eb7a14461c972736f24aa1fee63d28e2c2191be3

---

## Projectstructuur

```
vivet/
├── index.html          # Hoofdpagina (webshop)
├── admin.html          # Admin-omgeving
<<<<<<< HEAD
├── db.json             # producten worden hier in een object opgeslagen
=======
>>>>>>> eb7a14461c972736f24aa1fee63d28e2c2191be3
├── css/
│   └── style.css       # Stylesheet
├── js/
│   ├── main.js         # Startpunt van de applicatie
<<<<<<< HEAD
=======
│   ├── products.js     # Productlogica en API-aanroepen
>>>>>>> eb7a14461c972736f24aa1fee63d28e2c2191be3
│   ├── cart.js         # Winkelwagenlogica
│   ├── orders.js       # Bestellingenlogica
│   └── admin.js        # Admin-functionaliteit
└── README.md
```

---


## Auteur

<<<<<<< HEAD
Gemaakt door **Ahmed** als eindproject van het developer-traject bij Bit Academy.
=======
Gemaakt door **Ahmed Moalin** als eindproject van het developer-traject bij Bit Academy.
>>>>>>> eb7a14461c972736f24aa1fee63d28e2c2191be3
