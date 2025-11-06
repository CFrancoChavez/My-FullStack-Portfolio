# Full Stack Portfolio

A modern, bilingual (English/Spanish) full-stack portfolio website showcasing projects, technologies, and professional experience. Built with Next.js 15, React 19, and Express.js.

## Features

- **Bilingual Support**: Complete internationalization with English and Spanish translations
- **Interactive Chatbot**: Menu-driven virtual assistant to help visitors navigate the portfolio and explore projects
- **Project Showcase**: Detailed project cards with live demos and GitHub links
- **Technology Stack Display**: Visual representation of mastered technologies
- **Contact Form**: Integrated contact form with email notifications via Brevo
- **WhatsApp Integration**: Direct WhatsApp contact option
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Dark Mode Ready**: Modern UI with semantic design tokens

## Tech Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4
- **Internationalization**: i18next, react-i18next
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **HTTP Client**: Axios

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Email Service**: Brevo (formerly Sendinblue)
- **CORS**: Enabled for cross-origin requests

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- MongoDB instance (local or cloud)
- Brevo account for email functionality

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/CFrancoChavez/My-FullStack-Portfolio.git
   cd My-FullStack-Portfolio
   \`\`\`

2. **Install frontend dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Install backend dependencies**
   \`\`\`bash
   cd backend
   npm install
   \`\`\`

### Environment Variables

#### Frontend (.env.local)
Create a `.env.local` file in the root directory:

\`\`\`env
NEXT_PUBLIC_API_URL=http://localhost:5000
\`\`\`

#### Backend (.env)
Create a `.env` file in the `backend` directory:

\`\`\`env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
BREVO_API_KEY=your_brevo_api_key
SENDER_EMAIL=your_verified_sender_email
SENDER_NAME=Your Name
RECIPIENT_EMAIL=your_email_to_receive_messages
FRONTEND_URL=http://localhost:3000
\`\`\`

### Running Locally

1. **Start the backend server**
   \`\`\`bash
   cd backend
   npm run dev
   \`\`\`
   Backend will run on `http://localhost:5000`

2. **Start the frontend development server**
   \`\`\`bash
   npm run dev
   \`\`\`
   Frontend will run on `http://localhost:3000`

3. **Open your browser**
   Navigate to `http://localhost:3000`

## Deployment

### Frontend (Vercel)
The frontend is optimized for deployment on Vercel:

\`\`\`bash
vercel deploy
\`\`\`

**Custom Domain**: [https://francochavez.dev](https://francochavez.dev)

The portfolio is also accessible via the default Vercel URL, which automatically redirects to the custom domain.

### Backend (Railway/Render/Heroku)
The backend can be deployed to any Node.js hosting platform:

1. Set environment variables in your hosting platform
2. Deploy the `backend` directory
3. Update `NEXT_PUBLIC_API_URL` in frontend to point to your deployed backend

## Features in Detail

### Chatbot
- Interactive menu-driven assistant
- Project exploration with detailed information
- Technology/skills categorized information
- Direct contact options (WhatsApp, LinkedIn, GitHub)
- Bilingual responses (English/Spanish)
- Smooth navigation between sections

### Contact Form
- Real-time validation
- Email notifications via Brevo
- MongoDB storage for message history
- Spam protection

### Projects Section
- Featured projects with descriptions
- Technology tags
- Live demo and GitHub links
- Responsive card layout

## Contact

- **Email**: cfrancochavezdev@gmail.com
- **LinkedIn**: [Franco Chavez](https://www.linkedin.com/in/franco-chavez-548b0a56/)
- **GitHub**: [CFrancoChavez](https://github.com/CFrancoChavez)
- **WhatsApp**: +54 9 351 627-3976
- **Location**: Córdoba, Argentina

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Franco Chavez
