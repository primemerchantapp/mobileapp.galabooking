# Gala Booking PWA

A Progressive Web Application for booking accommodations including hotels, apartments, resorts and more.

## Features

- PWA with offline support
- Real-time booking system
- Interactive property search
- User authentication
- Wishlists and favorites
- Messaging system
- Push notifications
- Responsive design

## Tech Stack

- TypeScript
- Tailwind CSS
- Firebase (Auth, Firestore, Storage)
- Vite
- Service Workers for offline functionality

## Prerequisites

- Node.js 16+
- npm or pnpm

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd gala-booking
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Create environment files:
```bash
cp .env.example .env
```

4. Update the .env file with your Firebase configuration

5. Start development server:
```bash
npm run dev
# or
pnpm dev
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code
- `npm run format` - Format code

### Project Structure

```
gala-booking/
├── src/
│   ├── config/         # Configuration files
│   ├── utils/          # Utility functions
│   ├── types/          # TypeScript types
│   └── service-worker.js
├── assets/
│   ├── css/
│   └── images/
├── public/            # Static files
└── *.html            # Page templates
```

## Building for Production

1. Build the project:
```bash
npm run build
```

2. Preview the build:
```bash
npm run preview
```

## Deployment

1. Make sure all environment variables are set correctly
2. Build the project
3. Deploy the `dist` directory to your hosting provider

## Contributing

1. Follow the existing code style
2. Write descriptive commit messages
3. Update documentation as needed
4. Run tests before submitting PRs

## Performance Optimizations

- Service worker for offline functionality
- Image optimization and lazy loading
- Route-based code splitting
- Cache strategies for API requests
- Optimized Tailwind CSS production build

## Security Considerations

- Environment variables for sensitive data
- Firebase security rules
- Content Security Policy headers
- Input validation and sanitization
- Protected API routes

## TODO

- [ ] Implement additional profile sub-pages
- [ ] Add more form validation
- [ ] Enhance error handling
- [ ] Add unit tests
- [ ] Implement E2E tests
- [ ] Add proper documentation for components
- [ ] Optimize image loading
- [ ] Add proper TypeScript types for all components
- [ ] Implement proper error boundaries
- [ ] Add loading states for all async operations
- [ ] Implement proper form validation
- [ ] Add proper SEO meta tags
- [ ] Implement proper analytics
- [ ] Add proper logging
- [ ] Implement proper monitoring
- [ ] Add proper CI/CD pipeline
- [ ] Add proper security headers
- [ ] Implement proper backup strategy
- [ ] Add proper monitoring for errors
- [ ] Implement proper rate limiting
- [ ] Add proper documentation for API endpoints

## License

MIT
