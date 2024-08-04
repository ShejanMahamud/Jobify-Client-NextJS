"use client"
import { SessionProvider } from 'next-auth/react'
import React, { ReactNode } from 'react'

interface AuthProviderProp {
    children: ReactNode
}

const AuthProvider: React.FC<AuthProviderProp> = ({children}) => {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default AuthProvider