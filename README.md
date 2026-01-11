# Promo App

自己PRを目的とした Web アプリケーションです。  
React / TypeScript / Vite を用いて構築し、Docker 上で開発できる構成になっています。

---

## 技術スタック

- Frontend
  - React
  - TypeScript
  - Vite
- Lint / Tooling
  - ESLint
- Infrastructure
  - Docker
  - Docker Compose

---

## ディレクトリ構成

```text
.
├── docker-compose.yml
├── Dockerfile
├── package.json
├── package-lock.json
├── vite.config.ts
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   └── assets/
└── public/

```

## 開発環境の起動方法（ローカル）

### 前提条件

- Docker Desktop がインストールされていること

### 起動手順

```bash
docker compose up
```

#### ブラウザで以下にアクセスしてください。

```arduino
http://localhost:5173
```

## よく使うコマンド
### コンテナ起動
```bash
docker compose up
```

### コンテナ停止
```bash
docker compose down
```

## 本番用ビルドと公開方法
### ビルド
```bash
npm run build
```

`dist/` ディレクトリが生成されます。

### 公開

- `dist/` 配下のファイル一式をサーバの公開ディレクトリにアップロードしてください。

※ SPA のため、`.htaccess` でリライトルールが必要になる場合があります。

## 補足
- Docker は開発環境専用です
- 本番環境では Node.js や Docker は不要です