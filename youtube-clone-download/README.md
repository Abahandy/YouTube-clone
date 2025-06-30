# 🎥 YouTube Clone - Complete Frontend Application

A pixel-perfect YouTube clone built with React, TailwindCSS, and modern web technologies.

## ✨ Features

- 🎯 **Authentic YouTube Design** - Exact replica of YouTube's 2025 interface
- 🌙 **Dark/Light Mode** - Toggle between themes with smooth transitions
- 📱 **Responsive Design** - Perfect on all screen sizes
- 🔍 **Search Functionality** - Real-time video search and filtering
- 🎬 **Video Player** - Embedded YouTube video playback
- 💬 **Comments System** - Interactive comments with likes and replies
- 📊 **Sidebar Navigation** - Collapsible sidebar with subscriptions
- ⚡ **Fast Performance** - Optimized React components and CSS

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start Development Server:**
   ```bash
   npm start
   ```

3. **Open in Browser:**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
youtube-clone/
├── src/
│   ├── App.js           # Main app component with routing
│   ├── components.js    # All YouTube components
│   ├── index.css        # Global styles and Tailwind imports
│   ├── index.js         # React entry point
│   └── App.css          # Component-specific styles
├── public/
│   └── index.html       # HTML template
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── craco.config.js      # CRACO build configuration
```

## 🎨 Key Components

- **Header** - YouTube logo, search bar, user menu
- **Sidebar** - Navigation menu with Home, Trending, Subscriptions
- **VideoGrid** - Homepage video thumbnails layout
- **VideoPlayer** - Full video player with controls and metadata
- **SearchResults** - Search results page with filtering

## 🛠️ Built With

- **React 19** - Latest React with hooks
- **React Router DOM** - Client-side routing
- **TailwindCSS** - Utility-first CSS framework
- **CRACO** - Create React App configuration override
- **Axios** - HTTP client for API calls

## 🎯 Key Features Implemented

### Design Excellence
- Exact YouTube color palette (#FF0000 red, #0f0f0f dark mode)
- Roboto font family matching YouTube
- Material You design principles
- Smooth hover effects and transitions

### Functionality
- Video grid with realistic thumbnails
- Working video player with YouTube embeds
- Search functionality with real-time filtering
- Dark/light mode toggle
- Responsive sidebar navigation
- Interactive like/dislike buttons
- Comments system with user avatars

### Mock Data
- 8+ realistic video entries with proper metadata
- Authentic channel information and avatars
- Realistic view counts and upload times
- Comment threads with user interactions

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🎬 Video Integration

Videos are embedded using YouTube's iframe API. Real YouTube video IDs are used for authentic playback experience.

## 🌟 Customization

### Adding New Videos
Edit the `mockVideos` array in `components.js` to add new video entries with thumbnails, titles, and metadata.

### Styling Changes
Modify `tailwind.config.js` for theme customization or `index.css` for global style overrides.

### New Components
Add new components to `components.js` following the existing pattern.

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized build in the `build/` folder ready for deployment.

## 🚀 Deployment

The app can be deployed to:
- Vercel
- Netlify  
- GitHub Pages
- Firebase Hosting
- Any static hosting service

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📞 Support

For support and questions, please open an issue in the GitHub repository.

---

**Built with ❤️ using React and TailwindCSS**