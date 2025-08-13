# NextN

A modern Next.js application built with TypeScript, Tailwind CSS, and comprehensive UI components.

## 🚀 Features

- **Next.js 15** with App Router and Turbopack
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Radix UI** components for accessible UI
- **Contact Form** with email functionality using Nodemailer
- **Firebase** integration ready
- **Responsive Design** with mobile-first approach
- **Modern Tooling** with ESLint and TypeScript checking

## 📦 Tech Stack

- **Framework:** Next.js 15.3.3
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Email:** Nodemailer
- **Icons:** Lucide React
- **Forms:** React Hook Form with Zod validation
- **Charts:** Recharts
- **Database:** Firebase (configured)

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd nextn
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
```

4. Configure your environment variables in `.env.local`:
```env
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
CONTACT_EMAIL=contact@yourcompany.com
```

### Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) in your browser.

## 📧 Email Setup

The contact form uses Nodemailer with Gmail. To set it up:

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password:**
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
3. **Add credentials to `.env.local`:**
   - `EMAIL_USER`: Your Gmail address
   - `EMAIL_PASS`: The generated app password (not your regular password)
   - `CONTACT_EMAIL`: Where contact form messages should be sent

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── send-message/  # Contact form endpoint
│   ├── contact/           # Contact page
│   └── ...
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   └── landing/          # Landing page components
├── hooks/                # Custom React hooks
└── lib/                  # Utility functions
```

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript compiler check

## 🎨 UI Components

This project includes a comprehensive set of UI components built with Radix UI:

- Buttons, Inputs, Textareas
- Cards, Dialogs, Dropdowns
- Navigation, Tabs, Accordions
- Charts, Progress bars
- Toast notifications
- And much more...

## 📱 Contact Form

The contact form is fully functional and includes:

- Form validation
- Loading states
- Success/error notifications
- Email delivery via Nodemailer
- Responsive design

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

This is a standard Next.js app and can be deployed to any platform that supports Node.js.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is private and proprietary.

## 🆘 Support

For support, email your-support-email@domain.com or create an issue in the repository.
