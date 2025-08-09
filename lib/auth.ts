import { auth as clerkAuth, currentUser } from '@clerk/nextjs/server'

export const auth = {
  api: {
    getSession: async ({ headers }: { headers: Headers }) => {
      try {
        // Get the current user session using Clerk
        const { userId } = await clerkAuth()
        
        if (!userId) {
          return null
        }

        // Get full user details
        const user = await currentUser()
        
        if (!user) {
          return null
        }

        return {
          user: {
            id: user.id,
            email: user.emailAddresses[0]?.emailAddress || '',
            name: user.firstName && user.lastName 
              ? `${user.firstName} ${user.lastName}` 
              : user.firstName || user.lastName || 'User'
          }
        }
      } catch (error) {
        console.error('Session verification failed:', error)
        return null
      }
    }
  }
}