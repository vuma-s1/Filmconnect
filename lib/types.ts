export interface User {
  id: string;
  name: string;
  username: string;
  role: 'Actor' | 'Director' | 'Cinematographer' | 'Writer' | 'Casting Director' | 'Producer' | 'Editor';
  location: string;
  profilePictureUrl: string;
  isVerified: boolean;
  bio: string;
  skills: string[];
  experience: string;
  connections: number;
  profileStrength: number;
  joinedDate: string;
  website?: string;
  phone?: string;
  email: string;
  isOnline: boolean;
  lastSeen: string;
  rating?: number;
  reviews?: number;
  profileViews?: number;
  projects?: number;
}

export interface Credit {
  id: string;
  title: string;
  year: number;
  rolePlayed: string;
  isVerifiedByProduction: boolean;
  posterUrl?: string;
  genre: string;
  director: string;
  productionHouse: string;
  budget?: string;
  boxOffice?: string;
  awards?: string[];
}

export interface JobPosting {
  id: string;
  title: string;
  productionHouse: string;
  location: string;
  roleRequired: string;
  description: string;
  responsibilities: string[];
  requiredSkills: string[];
  jobType: 'Full-time' | 'Freelance' | 'Short Film';
  salary?: string;
  postedDate: string;
  applications: number;
  deadline: string;
  contactEmail: string;
  experienceLevel: 'Entry' | 'Mid' | 'Senior';
  isUrgent: boolean;
  benefits?: string[];
}

export interface Post {
  id: string;
  author: User;
  content: string;
  imageUrl?: string;
  videoUrl?: string;
  timestamp: string;
  likes: number;
  comments: Comment[];
  shares: number;
  isLiked: boolean;
  type: 'text' | 'image' | 'video' | 'job_share' | 'achievement';
  tags?: string[];
}

export interface Comment {
  id: string;
  author: User;
  content: string;
  timestamp: string;
  likes: number;
  isLiked: boolean;
  replies?: Comment[];
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  isRead: boolean;
  type: 'text' | 'image' | 'file';
  attachmentUrl?: string;
}

export interface Conversation {
  id: string;
  participants: User[];
  lastMessage: Message;
  unreadCount: number;
  isGroup: boolean;
  groupName?: string;
}

export interface ProjectReel {
  id: string;
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
  description: string;
  role: string;
  year: number;
  duration: string;
  views: number;
  likes: number;
  category: 'Acting' | 'Directing' | 'Cinematography' | 'Editing' | 'Other';
}

export interface Notification {
  id: string;
  type: 'connection_request' | 'job_application' | 'message' | 'like' | 'comment' | 'job_match';
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
  actionUrl?: string;
  fromUser?: User;
}

export interface ConnectionRequest {
  id: string;
  fromUser: User;
  toUser: User;
  message?: string;
  timestamp: string;
  status: 'pending' | 'accepted' | 'rejected';
}

export interface JobApplication {
  id: string;
  jobId: string;
  applicant: User;
  coverLetter: string;
  resumeUrl?: string;
  portfolioUrl?: string;
  timestamp: string;
  status: 'pending' | 'reviewed' | 'shortlisted' | 'rejected' | 'hired';
}