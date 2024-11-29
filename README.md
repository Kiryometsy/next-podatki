```
wykonaj aplikacje w nextjs
a) opis projektu z technologią oraz zasadą działania
b) wykonanie aplikacji

dane wejściowe: pensje pracowników w 1 rok
A)
1) Obliczy podatki(obciążenia) dla firmy
2) Podatki dla pracownika
3) Na rok 2023 -> podatek roczny pracowników zgodnie z progiem podatkowym

B) opis
1) Jak liczyć(z aktualnie panującym prawem podatkowym)
2) Co i jak chcemy zrobić (user stories itp)
3) "wymagania" (must, should, could, won't)
```
1. kwota brutto - 1000
2. odliczanie składek: 
-emerytalna 9,76% =97,6
- rentowa 1,5% = 15
chorobowa 2,45% = 24,5


[OBLICZENIA OD KWOTY BRUTTO] 
[SUMA] = 137.1

3.Podstawa składki na ubezpieczenie:
KWOTA BRUTTO - ODLICZONE SKLADKI = PODSTAWA SKLADKI
1000 - 137.1 = 862,90

4.SKŁADKA ZDROWOTNA
 PODSTAWA SKLADKI -9% = SKLADKA ZDROWOTNA

862,9 - 9% = 77,66

KOSZTY UZYSKANIA PRZYCHODU:
862,9 * 20% = 172,58

DOCHÓD DO OPODATKOWANIA:
[BRUTTO] - [SKLADKI SPOLECZNE] - [KOSZT UZYSKANIA PRZYCHODU(ZAOKRAGLIC DO PELNEJ LICZBY)] = 
1000 - 862,9 -
DOCHOD DO OPDATKOWANIA * 12% = [ZALICZKA NA PODATEK DOCHODOWY]

BRUTOO - [SKLADKI SPOLECZNE] - [SKLADKA ZDROWOTNA] -[ZALICZKA NA PODATEK]



https://pomoc.ifirma.pl/pomoc-artykul/jak-wyliczyc-wynagrodzenie-netto/#2.1.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
