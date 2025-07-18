# Next.js Airbnb Clone Project

A comprehensive Next.js project that teaches modern web development fundamentals by building an Airbnb-inspired interface with React, TypeScript, and Tailwind CSS.

## 🎯 Learning Objectives

By completing this project, you will master:
- **Next.js Setup**: Scaffold projects with TypeScript and modern tooling
- **Project Structure**: Organize code following Next.js best practices
- **Component Development**: Build reusable React components with TypeScript
- **Props & Interfaces**: Implement type-safe component communication
- **Routing**: Navigate between pages using Next.js Pages Router
- **Styling**: Create responsive designs with Tailwind CSS
- **Code Quality**: Maintain standards with ESLint and TypeScript

## 🛠️ Tech Stack

- **Framework**: Next.js 13+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Code Quality**: ESLint
- **Asset Handling**: Next.js Image Optimization

## 📋 Prerequisites

- Node.js (v16 or later)
- npm or yarn
- Visual Studio Code (recommended)
- Basic knowledge of React and TypeScript

## 🚀 Getting Started

### Initial Setup
```bash
# Create project with TypeScript
npx create-next-app@latest alx-project-0x00 --typescript

# Navigate to project
cd alx-project-0x00

# Start development server
npm run dev -- -p 3000
```

### Project Configuration
- ✅ TypeScript
- ✅ ESLint  
- ✅ Tailwind CSS
- ✅ Import alias (@/)
- ❌ /src directory
- ❌ App Router

## 📁 Project Structure

```
alx-project-0x00/
├── components/           # Reusable React components
│   ├── Card.tsx         # Property listing card
│   ├── Pill.tsx         # Feature tags
│   └── Button.tsx       # Reusable button component
├── interfaces/          # TypeScript type definitions
│   └── index.ts         # Centralized interface exports
├── pages/              # Next.js pages (routing)
│   ├── index.tsx       # Homepage
│   ├── landing.tsx     # Landing page
│   ├── about.tsx       # About page
│   └── _app.tsx        # App wrapper
├── public/             # Static assets
│   └── assets/
│       └── images/     # Image assets
├── styles/             # Global styles
└── README.md
```

## 🎨 Component Architecture

### Reusable Components
- **Card**: Property listing with image, ratings, and details
- **Pill**: Feature tags (e.g., "Top Villa", "Self Check-in")
- **Button**: Multi-variant button component

### TypeScript Interfaces
- Type-safe props for all components
- Centralized interface definitions
- Enhanced development experience with IntelliSense

## 🔗 Routing Structure

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero section |
| `/landing` | Property listings showcase |
| `/about` | About page information |

## 💻 Development Workflow

### 1. Component Development
```typescript
// Create component with TypeScript interface
interface ComponentProps {
  title: string;
  // other props
}

const Component: React.FC<ComponentProps> = ({ title }) => {
  return <div>{title}</div>;
};
```

### 2. Styling with Tailwind
```typescript
// Responsive, utility-first styling
<div className="flex flex-col h-screen justify-center items-center">
  <h1 className="text-4xl font-semibold">Title</h1>
</div>
```

### 3. Asset Management
```typescript
// Optimized image loading
import Image from "next/image";
import HOUSE_IMAGE from "@/public/assets/house.png";

<Image src={HOUSE_IMAGE} width={378} height={299} alt="Property" />
```

## 🎯 Task Breakdown

### Task 0: Project Scaffolding
- Initialize Next.js project with TypeScript
- Configure ESLint and Tailwind CSS
- Set up development environment

### Task 1: Directory Structure
- Create `components/` and `interfaces/` directories
- Implement homepage with hero section
- Set up basic file structure

### Task 2: Basic Routing
- Create landing and about pages
- Implement Pages Router navigation
- Test route accessibility

### Task 3: Component Creation
- Build Card component with property details
- Create Pill component for feature tags
- Implement component composition

### Task 4: Component Integration
- Import and use components in pages
- Demonstrate component reusability
- Test component rendering

### Task 5: TypeScript Props
- Define TypeScript interfaces
- Implement prop-based component customization
- Add type safety to components

### Task 6: Advanced Components
- Create flexible Button component
- Implement multiple variant support
- Demonstrate advanced prop patterns

## 🎨 Design Features

### Property Card Component
- **Image Display**: Optimized property photos
- **Feature Tags**: Highlighted amenities
- **Rating System**: Star ratings with scores
- **Pricing Info**: Clear cost display
- **Property Details**: Beds, baths, guest capacity

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Responsive typography
- Touch-friendly interactions

## 🔧 Best Practices Implemented

### Code Organization
- **Separation of Concerns**: Components, interfaces, and pages
- **Reusability**: Modular component design
- **Type Safety**: Comprehensive TypeScript usage
- **Consistency**: Standardized naming conventions

### Performance Optimization
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic by Next.js
- **Bundle Optimization**: Only necessary dependencies
- **Lazy Loading**: Built-in Next.js features

### Development Experience
- **TypeScript**: Enhanced IDE support and error catching
- **ESLint**: Code quality and consistency
- **Hot Reload**: Instant development feedback
- **Import Aliases**: Clean import statements

## 📚 Learning Resources

### Next.js Documentation
- [Next.js Official Docs](https://nextjs.org/docs)
- [Pages Router Guide](https://nextjs.org/docs/pages)
- [TypeScript with Next.js](https://nextjs.org/docs/basic-features/typescript)

### React & TypeScript
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Styling
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Responsive Design Guide](https://tailwindcss.com/docs/responsive-design)

## 🧪 Testing Your Implementation

### Development Checklist
- [ ] Project starts without errors
- [ ] All routes are accessible
- [ ] Components render correctly
- [ ] TypeScript compiles without errors
- [ ] ESLint passes without warnings
- [ ] Images load optimally
- [ ] Responsive design works on mobile

### Browser Testing
```bash
# Start development server
npm run dev -- -p 3000

# Test routes:
http://localhost:3000          # Homepage
http://localhost:3000/landing  # Landing page
http://localhost:3000/about    # About page
```

## 🚨 Common Issues & Solutions

### TypeScript Errors
- Ensure all interfaces are properly exported from `interfaces/index.ts`
- Check that component props match interface definitions
- Verify import paths use the `@/` alias correctly

### Image Loading Issues
- Place images in `public/assets/images/` directory
- Use Next.js Image component for optimization
- Provide proper width, height, and alt attributes

### Styling Problems
- Ensure Tailwind CSS is properly configured
- Check for proper class name syntax
- Use browser developer tools for debugging

## 🔮 Next Steps

After completing this project, consider:
- **State Management**: Add Redux or Zustand for complex state
- **API Integration**: Connect to real property data
- **Authentication**: Implement user login/registration
- **Database**: Add data persistence with Prisma/MongoDB
- **Deployment**: Deploy to Vercel or Netlify
- **Testing**: Add unit and integration tests

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is for educational purposes. Feel free to use it as a learning resource.

---

**Happy Coding!** 🎉 Build something amazing with Next.js and TypeScript!