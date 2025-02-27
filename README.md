NODE 22.12.0

install dependencies

`npm i`

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

# TMDB API

You've got to use TMDB.

- [login](https://www.themoviedb.org/login), if you don have an account [signup](https://www.themoviedb.org/signup)

- go to settings and click [API](https://www.themoviedb.org/settings/api) so that you can copy the API Read Acces Token

## env

on the project go to .env and If you don't have you can create a new one in the root directory

```
NEXT_PUBLIC_BASE_URL_TMDB=https://api.themoviedb.org/3
NEXT_PUBLIC_ACCESS_TOKEN_TMDB=[your API Read Acces Token]
```
