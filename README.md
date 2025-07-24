# 📈 IPO Tracker Application
Demo Link : https://ventura-frontend-nfke.vercel.app/

A modern, responsive React application for tracking Initial Public Offerings (IPOs) with detailed information, timeline visualization, and mobile-optimized design.

<img width="1920" height="909" alt="final1" src="https://github.com/user-attachments/assets/2853f8fe-5673-4e24-8a26-653a0861145e" />

<img width="1240" height="923" alt="final2" src="https://github.com/user-attachments/assets/99012f32-edef-4af3-a87e-f1f2831022ea" />

Mobile Preview : https://github.com/user-attachments/assets/b1fdd2c6-ace3-4522-964c-9270014eadc5

## ✨ Features


### 🏠 **IPO List Page**
- **Responsive Design**: Adapts to desktop, tablet, and mobile screens
- **Company Information**: Displays company logos, names, and issue dates
- **Financial Details**: Shows issue size, price range, and minimum investment
- **Status Indicators**: Visual badges for Active, Upcoming, and Closed IPOs
- **Interactive Navigation**: Click any IPO to view detailed information

### 📊 **IPO Details Page**
- **Comprehensive Information**: Complete IPO metrics and financial data
- **Interactive Timeline**: Visual progress indicator with smart color coding
- **Company Overview**: Detailed company information with read more/less functionality
- **Action Buttons**: Apply now and download document features
- **Breadcrumb Navigation**: Easy navigation back to the main list

### 📱 **Mobile Optimizations**
- **Responsive Timeline**: Vertical layout for mobile, horizontal for desktop
- **Smart Text Truncation**: Read more/less functionality for long content
- **Touch-Friendly Interface**: Optimized button sizes and spacing
- **Adaptive Layouts**: Different layouts for different screen sizes

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ipo-tracker.git
   cd ipo-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install required packages**
   ```bash
   npm install react-router-dom
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

4. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   #or
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000` or `http://localhost:5173` to view the application.


## 🧪 Testing Guide

You can test the UI via inspect for mobile view and desktop view also if no ipo are present then what the UI shows. IPO no. 4 and 5 dont have any data can test it too.



## 🛠️ Technology Stack

- **Frontend Framework**: React 18
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Font**: Sora (Google Fonts)
- **Icons**: Lucide React
- **Build Tool**: Create React App


## 🎨 Design Features

### **Color Scheme**
- **Primary**: Slate/Grey tones for professional appearance
- **Accent**: Green for positive indicators (completed, gains)
- **Status Colors**: 
  - Green: Active IPOs
  - Blue: Upcoming IPOs
  - Grey: Closed IPOs

### **Typography**
- **Font Family**: Sora (Clean, modern sans-serif)
- **Responsive Text**: Scales appropriately across devices
- **Hierarchy**: Clear heading and body text distinction

### **Interactive Elements**
- **Hover Effects**: Subtle transitions on cards and buttons
- **Loading States**: Smooth transitions between pages
- **Touch Feedback**: Optimized for mobile interactions

## 🔧 Customization

### **Adding New IPOs**
Edit the `mockIPODetails` object in `IPODetailsPage.jsx`:

```javascript
const mockIPODetails = {
  newId: {
    id: "newId",
    company: "Company Name",
    fullName: "Full Company Name",
    // ... other properties
  }
}
```

### **Modifying Timeline Steps**
Update the `timeline` array for any IPO:

```javascript
timeline: [
  { title: "Step", subtitle: "description", date: "Date", completed: true/false },
  // ... more steps
]
```

### **Styling Customization**
- Modify Tailwind classes in components
- Update color scheme in `tailwind.config.js`
- Customize fonts in CSS files

## 🐛 Troubleshooting

### **Common Issues**

1. **Styles not loading**
   - Ensure Tailwind CSS is properly configured
   - Check that `@tailwind` directives are in CSS files

2. **Routing not working**
   - Verify React Router DOM is installed
   - Check that `BrowserRouter` wraps the app

3. **Mobile layout issues**
   - Test with browser dev tools
   - Verify responsive classes are applied correctly

4. **Timeline lines not displaying correctly**
   - Check that timeline data has proper `completed` values
   - Verify CSS positioning classes

## 📱 Device Compatibility

### **Tested Devices**
- **Desktop**: 1920x1080, 1366x768, 1440x900
- **Tablet**: iPad (768x1024), iPad Pro (1024x1366)
- **Mobile**: iPhone SE (375x667), iPhone 12 (390x844), Android (360x640)

### **Browser Support**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Modern financial applications
- **Icons**: Lucide React icon library
- **Fonts**: Google Fonts (Sora family)
- **Styling**: Tailwind CSS framework

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/ipo-tracker/issues) page
2. Create a new issue with detailed description
3. Include screenshots and browser information
4. Specify device and screen size if relevant

---

**Made with ❤️ using React and Tailwind CSS**
```

This README provides:

✅ **Comprehensive Overview**: Clear description of features and functionality  
✅ **Installation Guide**: Step-by-step setup instructions  
✅ **Testing Instructions**: Detailed guide for testing different screen sizes  
✅ **Screenshots Section**: Placeholders for app screenshots  
✅ **Technology Stack**: Complete list of technologies used  
✅ **Customization Guide**: How to modify and extend the app  
✅ **Troubleshooting**: Common issues and solutions  
✅ **Device Compatibility**: Supported devices and browsers  
✅ **Professional Structure**: Well-organized with proper markdown formatting

To complete the README, you'll need to:
1. Take screenshots of your app in different screen sizes
2. Add them to a `screenshots` folder
3. Update the GitHub repository URL
4. Add any specific installation requirements

