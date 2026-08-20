# Lucky Hideout - Premium Cafe Website

A modern, responsive Single Page Application (SPA) for a premium cafe called "LUCKY HIDEOUT". Built with React.js and Tailwind CSS for a premium, modern user experience.

## 🎯 Features

✅ **Responsive Design** - Mobile-first approach, fully responsive on all devices  
✅ **Modern UI/UX** - Premium cafe-inspired design with warm colors  
✅ **Smooth Animations** - Elegant transitions and hover effects  
✅ **Sticky Header** - Navigation header that stays visible while scrolling  
✅ **Hero Section** - Eye-catching banner with call-to-action buttons  
✅ **Owner Profile** - Professional owner information card  
✅ **Interactive Menu** - Filterable menu with 16+ items and categories  
✅ **WhatsApp Integration** - Direct ordering through WhatsApp with pre-filled messages  
✅ **Contact Section** - Complete contact information and opening hours  
✅ **Professional Footer** - Modern footer with social media links  
✅ **SEO Friendly** - Structured HTML with semantic elements  
✅ **Performance Optimized** - Fast load times and smooth interactions

## 🛠️ Tech Stack

- **React.js 18** - Functional components with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Next-generation frontend build tool
- **JavaScript (ES6+)** - Modern JavaScript syntax

## 📁 Project Structure

```
cafe-demo/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Sticky navigation header
│   │   ├── Hero.jsx            # Hero section with CTAs
│   │   ├── Owner.jsx           # Owner profile card
│   │   ├── Menu.jsx            # Interactive menu with filters
│   │   ├── About.jsx           # About section
│   │   ├── Contact.jsx         # Contact information
│   │   └── Footer.jsx          # Professional footer
│   ├── data/
│   │   └── menuData.js         # Menu items data (16+ items)
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── package.json                # Dependencies
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS config
├── postcss.config.js           # PostCSS config
└── .gitignore                  # Git ignore rules
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

1. **Clone or download the project**

   ```bash
   cd cafe-demo
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

   The website will open automatically at `http://localhost:5173`

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎨 Design Theme

### Color Palette

- **Coffee Brown**: #8b6f4d (primary)
- **Cream**: #f5f1e8 (background)
- **Beige**: #e8dcc7 (accent)
- **Gold**: #d4a373 (highlights)

### Typography

- **Serif Font**: Georgia (for headers)
- **Sans Font**: Segoe UI (for body)

## 📱 Mobile Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization

### Change Owner Details

Edit `src/components/Owner.jsx` and `src/components/Contact.jsx`:

```javascript
const ownerName = "Your Name";
const contactNumber = "+91 XXXXXXXXXX";
const ownerEmail = "your.email@example.com";
```

### Change WhatsApp Number

Update the phone number in all components:

- `Hero.jsx`
- `Owner.jsx`
- `Menu.jsx`
- `Contact.jsx`
- `Footer.jsx`

Format: `https://wa.me/919876543210` (without +91, just 919876543210)

### Add/Edit Menu Items

Edit `src/data/menuData.js`:

```javascript
{
  id: 17,
  name: "Item Name",
  description: "Item description",
  price: 150,
  category: "Coffee",
  emoji: "☕"
}
```

### Customize Colors

Edit `tailwind.config.js` in the `colors` section to change the color scheme.

## 🎯 Key Sections

### 1. **Header/Navigation**

- Sticky navigation with smooth scrolling
- Mobile hamburger menu
- Logo and cafe name
- Responsive design

### 2. **Hero Section**

- Large background with gradient
- Welcome headline
- Two CTA buttons (View Menu, Order on WhatsApp)
- Animated scroll indicator

### 3. **Owner Section**

- Professional owner card
- Owner photo placeholder
- Contact buttons (Call, WhatsApp)
- Owner description

### 4. **Menu Section**

- Category filter buttons
- 16+ menu items in card grid
- Hover animations
- WhatsApp order buttons for each item
- Responsive grid layout

### 5. **About Section**

- About cafe introduction
- Key highlights
- Statistics (5K+ customers, 12+ years, etc.)
- Professional layout

### 6. **Contact Section**

- Owner information
- Phone and WhatsApp buttons
- Email contact
- Location with map link
- Opening hours table
- Action buttons

### 7. **Footer**

- Cafe branding
- Quick links
- Contact information
- Social media links
- Copyright information
- Newsletter signup

## 📲 WhatsApp Integration

Every menu item has an order button that opens WhatsApp with pre-filled message:

```
Hello, I would like to order:
Item Name: [Item Name]
Price: ₹[Price]
```

The owner's phone number is automatically filled in the WhatsApp chat.

## 🎬 Animations

- **Fade In**: Hero content appearance
- **Slide Up**: Content entrance animation
- **Scale**: Hover effects on buttons and cards
- **Bounce**: Scroll indicator animation
- **Blur**: Background decorative elements

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📈 Performance Tips

1. Images are emoji-based for better performance
2. CSS is optimized with Tailwind
3. React components are functional with hooks
4. Smooth scroll behavior is native CSS
5. No external image files needed

## 🔐 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Upload 'dist' folder to Netlify
```

### Deploy to any static host

```bash
npm run build
# Upload contents of 'dist' folder
```

## 📝 Future Enhancements

- Online payment integration
- Reservation system
- Customer reviews section
- Blog for cafe updates
- Live ordering dashboard
- Email newsletter subscription
- Multi-language support
- Dark mode toggle

## 📧 Contact

For customization or support, contact the cafe:

- **Phone**: +91 9876543210
- **Email**: rahul.sharma@luckyhideout.com
- **WhatsApp**: +91 9876543210

## 📄 License

This project is created for LUCKY HIDEOUT cafe. All rights reserved.

---

**Created with ❤️ for coffee lovers everywhere** ☕
