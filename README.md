# Projekt: e-Kantor

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## 📌 Opis projektu

e-Kantor to responsywna aplikacja webowa do przeglądania aktualnych kursów walut, pobieranych w czasie rzeczywistym z oficjalnego API Narodowego Banku Polskiego (NBP).

Projekt kładzie nacisk na czytelny interfejs, dobrą strukturę kodu TypeScript oraz pracę z zewnętrznym REST API.

## 🌐 Demo

🔗 [Zobacz na żywo](https://e-kantor.vercel.app/)

## 🚀 Uruchamianie projektu

### 1️⃣ Klonowanie repozytorium

```bash
git clone https://github.com/michalpawlowski-mp/e-Kantor
cd e-Kantor
```

### 2️⃣ Instalacja zależności

```bash
npm install  # lub yarn install
```

### 3️⃣ Uruchomienie projektu

```bash
npm run dev  # lub yarn dev
```

Aplikacja powinna być dostępna pod adresem `http://localhost:3000/`

## 🌐 API

Aplikacja korzysta z publicznego API NBP (tabela A — kursy średnie):

```
GET https://api.nbp.pl/api/exchangerates/tables/A/?format=json
```

📖 Dokumentacja: [api.nbp.pl](https://api.nbp.pl/)

## 🛠 Technologie

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)

---

💡 Stworzony przez [Michał Pawłowski (LinkedIn)](https://www.linkedin.com/in/michalpawlowski-mp/)
