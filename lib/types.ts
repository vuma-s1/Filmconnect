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

// Cast & Crew Profile Types
export interface CastCrewProfile {
  id: string;
  name: string;
  username: string;
  profilePictureUrl: string;
  role: 'Actor' | 'Director' | 'Cinematographer' | 'Writer' | 'Producer' | 'Editor' | 'Sound Designer' | 'VFX Artist' | 'Costume Designer' | 'Makeup Artist' | 'Stunt Coordinator' | 'Music Director' | 'Lighting Technician' | 'Grip' | 'Production Manager' | 'Casting Director' | 'Script Supervisor' | 'Art Director' | 'Set Designer' | 'Catering Manager' | 'Transport Coordinator' | 'Security Head' | 'Publicity Manager' | 'Distribution Manager' | 'Theatre Manager' | 'Animator' | 'Daily Wage Worker';
  craft: string; // Specific craft within role
  category: 'Cast' | 'Crew';
  subcategory: string; // Lead Actor, Supporting, Comedian, etc. for Cast | Department for Crew
  languages: string[]; // Telugu, Tamil, Hindi, Malayalam, Kannada, English
  experience: string; // 5+ years, 10+ years, etc.
  experienceLevel: 'Entry' | 'Mid' | 'Senior' | 'Veteran';
  location: string;
  bio: string;
  isVerified: boolean;
  isAvailable: boolean;
  availabilityStatus: 'Available' | 'Busy' | 'On Project' | 'Not Available';
  rating: number;
  reviews: number;
  profileViews: number;
  connections: number;
  joinedDate: string;
  website?: string;
  phone?: string;
  email: string;
  isOnline: boolean;
  lastSeen: string;
  skills: string[];
  tools: string[]; // Software, equipment
  awards: Award[];
  filmography: FilmCredit[];
  portfolio: PortfolioItem[];
  showreel?: string;
  manager?: string;
  agency?: string;
  union?: string;
  contactInfo: ContactInfo;
  socialMedia: SocialMedia;
  aiStudioBadges: AIStudioBadge[];
  endorsements: Endorsement[];
}

export interface Award {
  id: string;
  name: string;
  category: string;
  year: number;
  film?: string;
  organization: string;
  level: 'National' | 'State' | 'Guild' | 'Festival' | 'Industry';
}

export interface FilmCredit {
  id: string;
  title: string;
  year: number;
  role: string;
  genre: string;
  director: string;
  productionHouse: string;
  budget?: string;
  boxOffice?: string;
  posterUrl?: string;
  isVerified: boolean;
  awards?: string[];
}

export interface PortfolioItem {
  id: string;
  type: 'image' | 'video' | 'audio' | 'document';
  title: string;
  description: string;
  url: string;
  thumbnailUrl?: string;
  category: string;
  year?: number;
}

export interface ContactInfo {
  preferredMethod: 'email' | 'phone' | 'whatsapp' | 'platform';
  responseTime: string;
  workingHours: string;
  timezone: string;
}

export interface SocialMedia {
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  youtube?: string;
  imdb?: string;
}

export interface AIStudioBadge {
  id: string;
  name: string;
  level: 'Bronze' | 'Silver' | 'Gold';
  category: string;
  earnedDate: string;
}

export interface Endorsement {
  id: string;
  endorser: User;
  message: string;
  skill: string;
  timestamp: string;
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
  type: 'connection_request' | 'message' | 'like' | 'comment' | 'profile_view' | 'endorsement';
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

// Removed JobApplication interface - no longer needed