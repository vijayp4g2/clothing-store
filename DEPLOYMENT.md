# Clothing Store - Vercel Deployment Guide

## 🚀 Quick Deploy

### Option 1: Deploy to Vercel (Recommended)

1. **Install Vercel CLI** (if not already installed):
```bash
npm install -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Deploy**:
```bash
# For preview deployment
vercel

# For production deployment
vercel --prod
```

### Option 2: Deploy via GitHub

1. Push your code to GitHub (already done ✓)
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository: `vijayp4g2/clothing-store`
5. Vercel will auto-detect settings and deploy

---

## 📋 Important Notes

### Data Persistence

⚠️ **Current Setup**: Product data is stored in `data/products.json` as a **read-only** file.

- ✅ **Works for**: Viewing products on the shop/home pages
- ❌ **Limitation**: Admin panel changes (add/edit/delete) **won't persist** between deployments

### To Enable Full Admin Functionality

You need to  integrate a database or Vercel KV. Here are your options:

#### Option A: Vercel KV (Recommended)
```bash
# 1. Install Vercel KV
npm install @vercel/kv

# 2. Enable Vercel KV in your project dashboard
# Visit: https://vercel.com/dashboard → Your Project → Storage → Create KV Database

# 3. Update API functions to use KV instead of JSON file
```

#### Option B: External Database
- **MongoDB Atlas** (NoSQL)
- **Supabase** (PostgreSQL)
- **PlanetScale** (MySQL)
- **Neon** (PostgreSQL)

---

## 🧪 Local Testing

Test the serverless environment locally before deploying:

```bash
# Start Vercel development server
npm run dev

# Or
vercel dev
```

This will start a local server at `http://localhost:3000` that simulates Vercel's production environment.

### Test Checklist:
- [ ] Homepage loads
- [ ] Shop page displays products
- [ ] Cart functionality works
- [ ] Admin login works (username: `admin`, password: `admin123`)
- [ ] Admin panel displays products
- [ ] All navigation works

---

## 📁 Project Structure

```
clothing-store/
├── api/                    # Serverless functions
│   ├── admin.js           # Admin authentication
│   ├── duplicate.js       # Product duplication
│   ├── products.js        # Product CRUD operations
│   └── upload.js          # File upload (needs cloud storage)
├── data/
│   └── products.json      # Product data (read-only in production)
├── src/                   # Frontend JavaScript
│   ├── components/        # Reusable components
│   ├── views/             # Page views
│   └── main.js           # App entry point
├── index.html            # Main HTML file
├── vercel.json           # Vercel configuration
└── package.json          # Dependencies & scripts
```

---

## 🔧 Environment Variables

If you integrate a database, add environment variables in Vercel:

1. Go to: Project Settings → Environment Variables
2. Add your connection strings:
   - `DATABASE_URL`
   - `KV_REST_API_URL` (for Vercel KV)
   - `KV_REST_API_TOKEN` (for Vercel KV)

---

## 📸 File Uploads

The current `/api/upload` endpoint is a placeholder. To enable image uploads:

1. Install Vercel Blob:
```bash
npm install @vercel/blob
```

2. Enable Blob storage in Vercel Dashboard

3. Update `api/upload.js` to use Vercel Blob

Example code is commented in the file.

---

## 🐛 Troubleshooting

### "FUNCTION_INVOCATION_FAILED" Error
- **Fixed**: You're now using serverless functions instead of `server.js`
- **Old server.js**: Kept for reference, not used in deployment

### Products Not Showing
- Check Vercel function logs
- Ensure `data/products.json` is included in deployment
- Verify API endpoints in browser Network tab

### Admin Changes Not Persisting
- Expected behavior with current setup
- Integrate Vercel KV or database for persistence

---

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel KV Documentation](https://vercel.com/docs/storage/vercel-kv)
- [Vercel Blob Documentation](https://vercel.com/docs/storage/vercel-blob)
- [Serverless Functions Guide](https://vercel.com/docs/functions)

---

## 🎯 Next Steps

1. Deploy to Vercel
2. Test all functionality
3. (Optional) Integrate Vercel KV for admin persistence
4. (Optional) Integrate Vercel Blob for image uploads
5. (Optional) Add custom domain

---

**Default Admin Credentials:**
- Username: `admin`
- Password: `admin123`

⚠️ **Change these in production!** Update `api/admin.js`
