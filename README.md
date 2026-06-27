# Shopify Announcement App

## Overview

Shopify Announcement App is a custom Shopify Embedded Application built using React Router, Node.js, MongoDB, Shopify Admin API, and Theme App Extensions.

The application allows store administrators to create announcements from the Shopify Admin Dashboard, save them in MongoDB for audit history, sync them to Shopify Metafields, and display them dynamically on the storefront.

---

## Features

* Create announcements from Shopify Admin Dashboard
* Store announcement history in MongoDB
* Save announcement data to Shopify Metafields
* Display announcements dynamically on storefront
* Shopify Theme App Extension integration
* Embedded Shopify App
* GraphQL Admin API integration

---

## Tech Stack

* React Router
* Node.js
* MongoDB Atlas
* Mongoose
* Shopify Admin GraphQL API
* Shopify Theme App Extensions
* Prisma Session Storage

---

## Project Flow

Admin Dashboard
→ MongoDB
→ Shopify Metafield
→ Theme Extension
→ Storefront Banner

---

## Installation

Clone the repository:

```bash
git clone <https://github.com/ritasahaa/shopify-announcement-app.git>
cd announcement-app
```

Install dependencies:

```bash
npm install
```

Run the application:

```bash
npm run dev
```

---

## Environment Variables

Create a `.env` file and add:

```env
SHOPIFY_API_KEY=your_api_key
SHOPIFY_API_SECRET=your_api_secret
SHOPIFY_APP_URL=your_app_url
SCOPES=write_metaobjects,write_products
MONGODB_URI=your_mongodb_connection_string
```

---

## Deployment

The application can be deployed using Shopify CLI:

```bash
npm run deploy
```

---

## Demo

1. Enter announcement text from Admin Dashboard.
2. Save announcement.
3. Data is stored in MongoDB.
4. Data is synced to Shopify Metafield.
5. Announcement appears on the storefront banner.

---

## Author

Rita Kumari Sah
