# Cloud-Based Flight Operations Dashboard

A real-time flight operations monitoring and analytics dashboard built with Next.js, React, and TypeScript. This dashboard provides airline operators with comprehensive insights into flight performance, SLA compliance, and ETL pipeline status.

![Flight Operations Dashboard](public/placeholder-logo.svg)

## 🚀 Features

### Real-Time Flight Monitoring
- **Live Flight Tracking**: Monitor up to 50 active flights with real-time status updates
- **Flight Details**: Track flight numbers, routes, departure/arrival times, aircraft types, and gate assignments
- **Delay Tracking**: Instant visibility into flight delays with minute-by-minute accuracy
- **Status Indicators**: Visual status badges for on-time, delayed, departed, arrived, and cancelled flights

### Performance Analytics
- **Key Performance Metrics**: 
  - Total flights count
  - On-time performance percentage
  - Delayed flights tracking
  - Average delay calculation
  - ETL pipeline health status
- **24-Hour Performance Trends**: Interactive line charts showing:
  - On-time percentage trends
  - Average delay patterns
  - Flight volume over time
- **Historical Data Analysis**: Track performance metrics over configurable time periods

### SLA Compliance Monitoring
- **Multi-Metric Dashboard**: Monitor critical SLA metrics including:
  - On-time departure rate
  - On-time arrival rate
  - Baggage handling efficiency
  - Customer satisfaction scores
  - Turnaround time performance
  - Gate utilization
- **Status Indicators**: Color-coded alerts (Good/Warning/Critical) for quick assessment
- **Trend Analysis**: Track metric trends (up/down/stable) over time

### ETL Pipeline Status
- **Pipeline Monitoring**: Real-time status of data processing jobs
- **Job Tracking**: Monitor running, completed, and failed ETL jobs
- **Performance Metrics**: Track records processed and job duration
- **Failure Alerts**: Immediate visibility into pipeline issues

## 🛠️ Technology Stack

### Frontend Framework
- **Next.js 15.2.4**: React framework with server-side rendering
- **React 19**: Latest React features and performance improvements
- **TypeScript 5**: Type-safe development experience

### UI Components
- **Radix UI**: Accessible, unstyled component primitives
- **Tailwind CSS 4**: Utility-first CSS framework
- **Lucide React**: Beautiful icon library
- **Recharts**: Composable charting library for data visualization

### Form & Data Management
- **React Hook Form**: Performant form validation
- **Zod**: TypeScript-first schema validation
- **date-fns**: Modern date utility library

### Styling & Theming
- **next-themes**: Dark/light mode support
- **class-variance-authority**: Type-safe component variants
- **tailwind-merge**: Efficient Tailwind class merging
- **tailwindcss-animate**: Animation utilities

### Development Tools
- **ESLint**: Code linting and quality checks
- **PostCSS**: CSS transformations
- **pnpm**: Fast, disk space efficient package manager

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.0 or higher
- **pnpm**: Version 8.0 or higher (recommended) or npm/yarn
- **Git**: For version control

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/johaankjis/Cloud-Based-Flight-Operations-Dashboard.git
   cd Cloud-Based-Flight-Operations-Dashboard
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the dashboard

## 📁 Project Structure

```
Cloud-Based-Flight-Operations-Dashboard/
├── app/                          # Next.js app directory
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout component
│   └── page.tsx                 # Main dashboard page
├── components/                   # React components
│   ├── dashboard/               # Dashboard-specific components
│   │   ├── etl-status.tsx      # ETL pipeline status component
│   │   ├── flight-table.tsx    # Flight data table
│   │   ├── performance-chart.tsx # Performance visualization
│   │   ├── sla-grid.tsx        # SLA metrics grid
│   │   └── stats-card.tsx      # Statistics card component
│   ├── ui/                      # Reusable UI components (Radix UI based)
│   └── theme-provider.tsx      # Theme management
├── lib/                         # Utility functions and data
│   ├── simulated-data.ts       # Data generation utilities
│   └── utils.ts                # Helper functions
├── public/                      # Static assets
├── styles/                      # Additional stylesheets
├── hooks/                       # Custom React hooks
├── components.json              # Shadcn UI configuration
├── next.config.mjs             # Next.js configuration
├── package.json                # Project dependencies
├── pnpm-lock.yaml             # Lock file for pnpm
├── postcss.config.mjs         # PostCSS configuration
└── tsconfig.json              # TypeScript configuration
```

## 🎯 Usage

### Development Mode

Start the development server with hot-reload:

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

### Production Build

Create an optimized production build:

```bash
pnpm build
```

### Start Production Server

Run the production build:

```bash
pnpm start
```

### Linting

Run ESLint to check code quality:

```bash
pnpm lint
```

## 📊 Data Simulation

The dashboard uses simulated data for demonstration purposes. The data generation logic is located in `/lib/simulated-data.ts` and includes:

- **Flight Data**: Generates 50 simulated flights with randomized:
  - Flight numbers and airlines (AA, UA, DL, SW, B6)
  - Origin/destination airports (major US hubs)
  - Aircraft types (B737, A320, B777, A321, B787)
  - Flight statuses and delays
  - Departure/arrival times

- **SLA Metrics**: Generates performance metrics for:
  - On-time performance
  - Baggage handling
  - Customer satisfaction
  - Gate utilization

- **ETL Jobs**: Simulates data pipeline jobs with various statuses

## 🎨 Customization

### Theming

The application supports dark and light themes. Theme configuration can be modified in:
- `app/globals.css` - CSS custom properties
- `components/theme-provider.tsx` - Theme provider setup

### Component Styling

Components use Tailwind CSS for styling. Modify styles by:
- Editing utility classes in component files
- Updating Tailwind configuration in `tailwind.config.js` (if present)
- Customizing CSS variables in `app/globals.css`

### Adding New Features

1. Create new components in `/components/dashboard/`
2. Add data types and generators in `/lib/simulated-data.ts`
3. Import and use in `/app/page.tsx`

## 🔐 Configuration

### Next.js Configuration

The `next.config.mjs` file includes:
- TypeScript build error bypass (for development)
- Image optimization settings

### TypeScript Configuration

TypeScript is configured with strict mode and Next.js-specific settings in `tsconfig.json`.

## 🌐 Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Deploy with one click

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- **Netlify**: Use the Next.js build plugin
- **AWS Amplify**: Configure for Next.js SSR
- **Docker**: Create a Dockerfile for containerized deployment
- **Traditional Hosting**: Build and serve the `.next` directory

## 📈 Performance

The dashboard is optimized for performance with:
- Server-side rendering (SSR) for initial page load
- Component lazy loading
- Optimized bundle size
- Efficient re-rendering with React hooks
- Responsive design for all screen sizes

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code:
- Follows the existing code style
- Includes appropriate TypeScript types
- Passes ESLint checks
- Is properly documented

## 📝 License

This project is licensed under the terms specified in the repository. Please check the LICENSE file for details.

## 👥 Authors

- **johaankjis** - Initial work

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Icons from [Lucide](https://lucide.dev/)
- Charts powered by [Recharts](https://recharts.org/)
- Generated with [v0.app](https://v0.dev/)

## 📞 Support

For issues, questions, or contributions, please:
- Open an issue on GitHub
- Check existing issues for solutions
- Review the documentation

## 🗺️ Roadmap

Future enhancements may include:
- Real-time data integration with airline systems
- Advanced filtering and search capabilities
- Export functionality for reports
- Email/SMS alert notifications
- Multi-airport support
- Historical data analysis
- Mobile application
- API integration for third-party systems

---

**Built with ❤️ using Next.js and React**
