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

```
next-podatki
├─ .eslintrc.json
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  └─ master
│  │     └─ remotes
│  │        └─ origin
│  │           └─ master
│  ├─ objects
│  │  ├─ 00
│  │  │  └─ 4145cddf3f9db91b57b9cb596683c8eb420862
│  │  ├─ 1a
│  │  │  └─ 69fd2a450afc3bf47e08b22c149190df0ffdb4
│  │  ├─ 1b
│  │  │  └─ 62daacff96dad6584e71cd962051b82957c313
│  │  ├─ 29
│  │  │  └─ 9effeed5d421b58642a580a5bf9a18ed5fc4bf
│  │  ├─ 2a
│  │  │  └─ 2e4b3bf8ba1c86d96fc2f5786597ad77a0e5e9
│  │  ├─ 2d
│  │  │  └─ 5de00cac3d54188457ff36017fdf6b93da90f8
│  │  ├─ 32
│  │  │  └─ 0076cdf00c807c18b5e714058648a40a883f92
│  │  ├─ 34
│  │  │  └─ f636d4113a76bd67cd516fb8ea000c2b32d284
│  │  ├─ 41
│  │  │  └─ a5955a9654edd66023e555fb00cbaafbb9f9ef
│  │  ├─ 44
│  │  │  └─ db25de1bf0e0c4807d58f6b2314b2b98c178c2
│  │  ├─ 46
│  │  │  └─ 78774e6d606704bce1897a5dab960cd798bf66
│  │  ├─ 4c
│  │  │  └─ 7ad64a9ccf5a23430dcbdb3c33c711ed4fcbe7
│  │  ├─ 51
│  │  │  └─ 74b28c565c285e3e312ec5178be64fbeca8398
│  │  ├─ 56
│  │  │  └─ 7f17b0d7c7fb662c16d4357dd74830caf2dccb
│  │  ├─ 58
│  │  │  └─ 93098232034512ef1a765748f952437fdfc0e9
│  │  ├─ 62
│  │  │  └─ 6a05b3a59b89dd0de9a7997e94ffde9d565e8d
│  │  ├─ 6a
│  │  │  └─ 883f25994d2f9311f75c4ac1cafaa01c3cf6ec
│  │  ├─ 6b
│  │  │  └─ 717ad346d3dff8914e9545038c799226d59c89
│  │  ├─ 71
│  │  │  ├─ 8d6fea4835ec2d246af9800eddb7ffb276240c
│  │  │  └─ a1f5962b2bfabfee60ae954f55ea0ba30ff5cb
│  │  ├─ 75
│  │  │  └─ dc0203205d4dd0546f9031ebee59679bb59d26
│  │  ├─ 77
│  │  │  └─ 053960334e2e34dc584dea8019925c3b4ccca9
│  │  ├─ 8e
│  │  │  └─ 46300a212238ed09bd6dbf80989c524e248db5
│  │  ├─ 92
│  │  │  └─ 5cec7f29c4586912b2d5e501884631065453ae
│  │  ├─ 98
│  │  │  └─ 00bf8dde1c4ef9a17a143eb622b4d56a089226
│  │  ├─ a4
│  │  │  └─ c0cacaf9d121fe727621104d5dcf31efed9eb2
│  │  ├─ af
│  │  │  └─ 99692719e72e11241f0e9c9fe8838b86867098
│  │  ├─ b2
│  │  │  └─ b2a44f6ebc70c450043c05a002e7a93ba5d651
│  │  ├─ bf
│  │  │  └─ fb357a7122523ec94045523758c4b825b448ef
│  │  ├─ c8
│  │  │  └─ 8f389de09f418da376598c42e8788d4fb6d172
│  │  ├─ ce
│  │  │  └─ 9c86c9e04ec4139c233f4d9d99c2e476605632
│  │  ├─ d3
│  │  │  └─ 2cc78b89fc9af2b1caf304864e10f041df05e6
│  │  ├─ e3
│  │  │  └─ 7a010f787095e3b0536374b6ac1e88ecb7e6d9
│  │  ├─ e6
│  │  │  └─ 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
│  │  ├─ ee
│  │  │  └─ 5b5a0333bda92dea4b6f655011cb32766d4c25
│  │  ├─ f1
│  │  │  └─ 01aa9a798bd4ea9bca2be539e677fbabd16dbe
│  │  ├─ f2
│  │  │  └─ ae185cbfd16946a534d819e9eb03924abbcc49
│  │  ├─ fc
│  │  │  └─ b741a341df889205f9868e01cdef51cc530ae9
│  │  ├─ info
│  │  └─ pack
│  ├─ ORIG_HEAD
│  └─ refs
│     ├─ heads
│     │  └─ master
│     ├─ remotes
│     │  └─ origin
│     │     └─ master
│     └─ tags
├─ .gitignore
├─ app
│  ├─ components
│  │  ├─ CalcContext.jsx
│  │  ├─ EmployeeSalaryInput.jsx
│  │  └─ TaxCalculator.jsx
│  ├─ favicon.ico
│  ├─ fonts
│  │  ├─ GeistMonoVF.woff
│  │  └─ GeistVF.woff
│  ├─ globals.css
│  ├─ layout.js
│  ├─ page.js
│  ├─ SalaryContext.js
│  └─ salaryData.js
├─ jsconfig.json
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
└─ tailwind.config.js

```