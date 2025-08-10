# Prime Bank - Modern Banking Platform

A comprehensive banking web application built with Next.js, featuring user authentication, account management, and admin controls for UK and Kenya markets.

## Features

### User Features
- **Account Dashboard**: View account balance, account number, and transaction history
- **Real-world Account Numbers**: 
  - UK: PB + 8 digits (e.g., PB12345678)
  - Kenya: KB + 2-digit bank code + 10 digits (e.g., KB0112345678901)
- **Multi-currency Support**: GBP for UK users, KES for Kenya users
- **Transaction History**: View recent account activity
- **Secure Authentication**: Powered by Clerk

### Admin Features
- **User Management**: View, edit, and delete user accounts
- **Balance Management**: Add or subtract funds from user accounts
- **Admin Logs**: Complete audit trail of all administrative actions
- **Security Monitoring**: Track IP addresses and user agents for admin actions
- **Dashboard Analytics**: Overview of total users, balances, and recent activity

### Security Features
- **Role-based Access Control**: Separate dashboards for users and admins
- **Route Protection**: Middleware-based authentication and authorization
- **Audit Logging**: All admin actions are logged with timestamps and details
- **Real-world Account Numbers**: Memorable and realistic account number formats

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Authentication**: Clerk
- **Database**: PostgreSQL (Neon)
- **ORM**: Prisma
- **UI Components**: Shadcn/ui, Tailwind CSS
- **Icons**: Tabler Icons
- **Notifications**: Sonner

## Setup Instructions

### 1. Environment Variables

Create a `.env.local` file with the following variables:

```env
# Database
DATABASE_URL="your-neon-database-url"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-clerk-publishable-key"
CLERK_SECRET_KEY="your-clerk-secret-key"
CLERK_WEBHOOK_SECRET="your-clerk-webhook-secret"

# Optional: Analytics
NEXT_PUBLIC_VERCEL_ANALYTICS_ID="your-analytics-id"
```

### 2. Database Setup

```bash
# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push
```

### 3. Clerk Configuration

1. Create a Clerk application at [clerk.com](https://clerk.com)
2. Configure webhook endpoint: `https://yourdomain.com/api/webhooks/clerk`
3. Enable webhook events: `user.created`, `user.updated`, `user.deleted`
4. Copy your keys to `.env.local`

### 4. Create Admin User

1. Sign up through your application first
2. Get your Clerk user ID from the Clerk dashboard
3. Update `scripts/create-admin.ts` with your details
4. Run: `npx tsx scripts/create-admin.ts`

### 5. Development

```bash
# Start development server
npm run dev

# Open http://localhost:3000
```

## Account Number Formats

The system generates realistic account numbers based on the user's location:

### UK Format
- **Pattern**: PB + 8 digits
- **Example**: PB12345678
- **Sort Code**: 20-14-53 (Prime Bank UK)
- **Currency**: GBP

### Kenya Format
- **Pattern**: KB + 01 (bank code) + 10 digits
- **Example**: KB0112345678901
- **Currency**: KES

## API Endpoints

### User Endpoints
- `GET /api/user/account` - Get user account details

### Admin Endpoints
- `GET /api/admin/users` - List all users
- `DELETE /api/admin/users?userId=xxx` - Delete user
- `POST /api/admin/balance` - Update user balance
- `GET /api/admin/logs` - Get admin activity logs

### Webhooks
- `POST /api/webhooks/clerk` - Clerk user events

## Deployment

1. Deploy to Vercel or your preferred platform
2. Set up environment variables
3. Configure Clerk webhook URL
4. Run database migrations
5. Create your first admin user

## Security Considerations

- All admin actions are logged with IP addresses and timestamps
- Route protection prevents unauthorized access
- Real-world account number formats for better UX
- Secure webhook validation for Clerk events
- Role-based access control throughout the application

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for educational and demonstration purposes.