# Mein Energie-Akku 🔋

**Kurzbeschreibung**  
„Mein Energie-Akku“ ist eine barrierearme Single-Page-Web-App, die auf der **Löffel-Methode** (Spoon Theory) basiert. Sie hilft Menschen – besonders mit ADHS oder Autismus – den Tag mit einer begrenzten Energieanzahl (12 Löffel) zu planen, ohne sich zu überlasten.

---

## 📑 Inhalt
1. [Features](#features)  
2. [Technologien](#technologien)  
3. [Installation / Start](#installation--start)  
4. [Bedienungsanleitung](#bedienungsanleitung)  
5. [Datenschutz](#datenschutz)  
6. [Mitwirken](#mitwirken)  

---

## 🚀 Features

| Feature | Beschreibung |
|---------|--------------|
| **Energie-Akku** | Visuelle Darstellung der verbleibenden Löffel (🥄). |
| **Aufgabenverwaltung** | Hinzufügen, Erledigen, Löschen von Aufgaben mit Energiekosten 1-5. |
| **Auflade-Aktionen** | Schnell wieder Energie dazu buchen (z. B. Pause +2). |
| **Neuer Tag** | Ein-Klick-Reset: alle Aufgaben unerledigt, Akku wieder 12 Löffel. |
| **Light / Dark Mode** | Umschaltbar per ☀️ / 🌙-Button, wird gespeichert. |
| **Responsive Design** | Optimiert für Smartphones (inkl. kleinere Löffel bei ≤ 360 px). |
| **Offline-fähig** | Läuft ohne Internet, speichert Daten im **localStorage**. |
| **Barrierearm** | Hoher Kontrast, klare Typografie, sanfte Farben, keine bewegten Inhalte. |

---

## 🛠 Technologien

- **HTML5** – Semantische Struktur
- **CSS3** – Custom Properties, Flexbox, Media Queries
- **Vanilla JavaScript (ES6)** – Keine externen Abhängigkeiten
- **localStorage API** – Persistenz der Aufgaben & des Designs
- **SVG-Icons (Emoji)** – Keine Bilddateien nötig

---

## ⚙️ Installation & Start

1. Repository klonen oder ZIP herunterladen.  
2. Datei `index.html` **direkt im Browser öffnen** – keine Server-Installation nötig.  
3. Optional: Als **Progressive Web App** (PWA) zum Startbildschirm hinzufügen (funktioniert auf Android & iOS).

---

## 📘 Bedienungsanleitung

| Schritt | Aktion |
|---|---|
| **1. Start** | Seite laden – du hast 12 Löffel. |
| **2. Aufgabe anlegen** | Name eingeben, Löffel-Kosten wählen → „Aufgabe hinzufügen“. |
| **3. Erledigen** | Checkbox anklicken → Löffel werden abgezogen. |
| **4. Energie aufladen** | Unter „Auflade-Aktivitäten“ Button klicken (z. B. +2 Löffel). |
| **5. Fehler korrigieren** | Häkchen entfernen oder Aufgabe löschen → Löffel werden zurückgegeben. |
| **6. Neuer Tag** | „Neuen Tag starten 🔄“ drücken → alles wird zurückgesetzt. |
| **7. Design umschalten** | ☀️ / 🌙 oben rechts für Light/Dark-Mode. |

**Tipp:** Die App speichert automatisch – beim Neuladen ist alles so wie beim Verlassen.

---

## 🔐 Datenschutz

- **Keine Cloud**, keine Cookies, keine Tracker.  
- Alle Daten liegen nur **lokal im Browser**.

---

## 🤝 Mitwirken

Verbesserungsvorschläge, Übersetzungen oder Bugfixes gerne via Pull-Request oder Issue!

---

**Lizenz** – [MIT](LICENSE)  
**Autor** – Open-Source-Community für neurodiverse Menschen
