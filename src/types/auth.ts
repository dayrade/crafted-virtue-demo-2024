export interface User {
  id: string;
  email: string;
  name: string;
  image?: string | null;
  emailVerified?: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface SocialAccount {
  id: string;
  userId: string;
  platform: string;
  platformUserId: string;
  username: string;
  accessToken: string;
  refreshToken?: string | null;
  tokenExpiresAt?: Date | null;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Content {
  id: string;
  userId: string;
  title: string;
  content: string;
  platform: string;
  contentType: string;
  status: string;
  publishedAt?: Date | null;
  scheduledFor?: Date | null;
  platformPostId?: string | null;
  metadata?: any;
  createdAt: Date;
  updatedAt: Date;
}

export interface AIConversation {
  id: string;
  userId: string;
  agentName: string;
  messages: any[];
  context?: any;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Session {
  id: string;
  sessionToken: string;
  userId: string;
  expires: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Account {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token?: string | null;
  access_token?: string | null;
  expires_at?: Date | null;
  token_type?: string | null;
  scope?: string | null;
  id_token?: string | null;
  session_state?: string | null;
  createdAt: Date;
  updatedAt: Date;
}