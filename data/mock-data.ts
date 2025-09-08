import { User, Credit, CastCrewProfile, Post, Conversation, Message, ProjectReel, Notification, ConnectionRequest, Comment } from '@/lib/types';

export const mockUsers: User[] = [
  {
    id: 'u1',
    name: 'Ravi Teja',
    username: 'raviteja',
    role: 'Actor',
    location: 'Hyderabad, India',
    profilePictureUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    isVerified: true,
    bio: 'Versatile actor with 10+ years of experience in Tollywood. Known for action-comedy films and method acting. Passionate about bringing authentic characters to life.',
    skills: ['Action', 'Comedy', 'Method Acting', 'Telugu', 'Dance', 'Martial Arts'],
    experience: '10+ years',
    connections: 2847,
    profileStrength: 95,
    joinedDate: '2020-03-15',
    website: 'https://raviteja.com',
    phone: '+91 98765 43210',
    email: 'ravi@24crafts.com',
    isOnline: true,
    lastSeen: new Date().toISOString(),
    rating: 4.8,
    reviews: 156,
    profileViews: 12450,
    projects: 45
  },
  {
    id: 'u2',
    name: 'Ananya Sharma',
    username: 'ananya',
    role: 'Director',
    location: 'Mumbai, India',
    profilePictureUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    isVerified: false,
    bio: 'Indie director focused on character-driven stories. Award-winning filmmaker with a passion for authentic storytelling and social narratives.',
    skills: ['Directing', 'Screenwriting', 'Editing', 'Cinematography', 'Story Development'],
    experience: '5+ years',
    connections: 1204,
    profileStrength: 78,
    joinedDate: '2021-07-22',
    email: 'ananya@24crafts.com',
    isOnline: false,
    lastSeen: '2024-01-20T14:30:00Z',
    rating: 4.6,
    reviews: 89,
    profileViews: 8760,
    projects: 23
  },
  {
    id: 'u3',
    name: 'Vikram Patel',
    username: 'vikrampatel',
    role: 'Cinematographer',
    location: 'Chennai, India',
    profilePictureUrl: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    isVerified: true,
    bio: 'Award-winning cinematographer specializing in visual storytelling and innovative camera work. Expert in both digital and film formats.',
    skills: ['Cinematography', 'ARRI Alexa', 'DaVinci Resolve', 'Low-light shooting', 'Drone Operation'],
    experience: '8+ years',
    connections: 1876,
    profileStrength: 92,
    joinedDate: '2019-11-08',
    email: 'vikram@24crafts.com',
    isOnline: true,
    lastSeen: new Date().toISOString(),
    rating: 4.9,
    reviews: 203,
    profileViews: 15680,
    projects: 67
  },
  {
    id: 'u4',
    name: 'Priya Nair',
    username: 'priyanair',
    role: 'Casting Director',
    location: 'Bangalore, India',
    profilePictureUrl: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
    isVerified: true,
    bio: 'Experienced casting director with an eye for fresh talent and perfect character fits. Specialized in finding authentic performers for diverse roles.',
    skills: ['Talent Scouting', 'Character Analysis', 'Network Building', 'Audition Management'],
    experience: '12+ years',
    connections: 3421,
    profileStrength: 88,
    joinedDate: '2018-05-14',
    email: 'priya@24crafts.com',
    isOnline: false,
    lastSeen: '2024-01-19T18:45:00Z',
    rating: 4.7,
    reviews: 167,
    profileViews: 18920,
    projects: 89
  },
  {
    id: 'u5',
    name: 'Arjun Reddy',
    username: 'arjunreddy',
    role: 'Producer',
    location: 'Hyderabad, India',
    profilePictureUrl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    isVerified: true,
    bio: 'Independent film producer with a track record of successful commercial and art films. Passionate about supporting emerging talent.',
    skills: ['Film Production', 'Budget Management', 'Distribution', 'Script Development', 'Team Leadership'],
    experience: '15+ years',
    connections: 4567,
    profileStrength: 96,
    joinedDate: '2017-02-28',
    email: 'arjun@24crafts.com',
    isOnline: true,
    lastSeen: new Date().toISOString(),
    rating: 4.8,
    reviews: 234,
    profileViews: 22340,
    projects: 112
  },
  {
    id: 'u6',
    name: 'Meera Krishnan',
    username: 'meerak',
    role: 'Writer',
    location: 'Kochi, India',
    profilePictureUrl: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    isVerified: false,
    bio: 'Screenwriter and novelist specializing in psychological thrillers and family dramas. Published author with multiple film adaptations.',
    skills: ['Screenwriting', 'Story Development', 'Character Creation', 'Dialogue Writing', 'Novel Writing'],
    experience: '7+ years',
    connections: 892,
    profileStrength: 82,
    joinedDate: '2020-09-12',
    email: 'meera@24crafts.com',
    isOnline: false,
    lastSeen: '2024-01-20T14:30:00Z',
    rating: 4.5,
    reviews: 78,
    profileViews: 6540,
    projects: 34
  },
  {
    id: 'u7',
    name: 'Rohit Shetty',
    username: 'rohitshetty',
    role: 'Director',
    location: 'Mumbai, India',
    profilePictureUrl: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
    isVerified: true,
    bio: 'Commercial film director known for high-octane action sequences and entertaining blockbusters. Master of visual spectacle.',
    skills: ['Action Direction', 'Commercial Films', 'VFX Supervision', 'Stunt Coordination', 'Mass Entertainment'],
    experience: '18+ years',
    connections: 5234,
    profileStrength: 98,
    joinedDate: '2016-01-10',
    email: 'rohit@24crafts.com',
    isOnline: true,
    lastSeen: new Date().toISOString(),
    rating: 4.9,
    reviews: 312,
    profileViews: 28760,
    projects: 156
  },
  {
    id: 'u8',
    name: 'Kavya Menon',
    username: 'kavyamenon',
    role: 'Editor',
    location: 'Thiruvananthapuram, India',
    profilePictureUrl: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
    isVerified: false,
    bio: 'Film editor with expertise in narrative structure and pacing. Specialized in both commercial and independent cinema.',
    skills: ['Film Editing', 'Avid Media Composer', 'Final Cut Pro', 'Color Correction', 'Sound Design'],
    experience: '6+ years',
    connections: 1156,
    profileStrength: 75,
    joinedDate: '2021-04-18',
    email: 'kavya@24crafts.com',
    isOnline: false,
    lastSeen: '2024-01-20T12:30:00Z',
    rating: 4.4,
    reviews: 65,
    profileViews: 5430,
    projects: 28
  }
];

export const mockComments: Comment[] = [
  {
    id: 'cm1',
    author: mockUsers[1],
    content: 'Incredible work! The cinematography in this sequence is absolutely stunning.',
    timestamp: '2024-01-20T11:00:00Z',
    likes: 12,
    isLiked: false
  },
  {
    id: 'cm2',
    author: mockUsers[2],
    content: 'Thank you! It was a challenging shoot but the team made it possible.',
    timestamp: '2024-01-20T11:15:00Z',
    likes: 8,
    isLiked: true
  },
  {
    id: 'cm3',
    author: mockUsers[3],
    content: 'Looking forward to seeing the final cut. This looks promising!',
    timestamp: '2024-01-20T11:30:00Z',
    likes: 5,
    isLiked: false
  }
];

export const mockCredits: Credit[] = [
  {
    id: 'c1',
    title: 'Vikram',
    year: 2022,
    rolePlayed: 'Lead Actor',
    isVerifiedByProduction: true,
    posterUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    genre: 'Action Thriller',
    director: 'Lokesh Kanagaraj',
    productionHouse: 'Raaj Kamal Films International',
    budget: '₹150 Crores',
    boxOffice: '₹434 Crores',
    awards: ['Filmfare Award for Best Actor', 'SIIMA Award for Best Performance']
  },
  {
    id: 'c2',
    title: 'RRR',
    year: 2022,
    rolePlayed: 'Cinematographer',
    isVerifiedByProduction: true,
    posterUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    genre: 'Period Action Drama',
    director: 'S. S. Rajamouli',
    productionHouse: 'DVV Entertainment',
    budget: '₹550 Crores',
    boxOffice: '₹1200+ Crores',
    awards: ['Academy Award for Best Original Song', 'Golden Globe Award']
  },
  {
    id: 'c3',
    title: 'Agent',
    year: 2023,
    rolePlayed: 'Stunt Coordinator',
    isVerifiedByProduction: false,
    posterUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    genre: 'Action Spy Thriller',
    director: 'Surender Reddy',
    productionHouse: 'AK Entertainments',
    budget: '₹120 Crores'
  },
  {
    id: 'c4',
    title: 'The Kashmir Files',
    year: 2022,
    rolePlayed: 'Director',
    isVerifiedByProduction: true,
    posterUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    genre: 'Drama',
    director: 'Vivek Agnihotri',
    productionHouse: 'Zee Studios',
    budget: '₹15 Crores',
    boxOffice: '₹340 Crores',
    awards: ['National Film Award for Best Feature Film']
  },
  {
    id: 'c5',
    title: 'Pushpa: The Rise',
    year: 2021,
    rolePlayed: 'Producer',
    isVerifiedByProduction: true,
    posterUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    genre: 'Action Drama',
    director: 'Sukumar',
    productionHouse: 'Mythri Movie Makers',
    budget: '₹250 Crores',
    boxOffice: '₹365 Crores'
  },
  {
    id: 'c6',
    title: 'Arjun Reddy',
    year: 2017,
    rolePlayed: 'Editor',
    isVerifiedByProduction: true,
    posterUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    genre: 'Romantic Drama',
    director: 'Sandeep Reddy Vanga',
    productionHouse: 'Bhadrakali Pictures',
    budget: '₹5 Crores',
    boxOffice: '₹51 Crores'
  }
];

// Cast & Crew Directory Data
export const castCategories = [
  'Lead Actors/Actresses',
  'Supporting Actors',
  'Comedians',
  'Villains/Character Artists',
  'Child Artists',
  'Playback Singers',
  'Dancers & Performers'
];

export const crewDepartments = [
  'Directors & ADs',
  'Writers (Script, Dialogue, Lyrics)',
  'Cinematographers',
  'Lighting Department',
  'Sound Department',
  'Editing & Post Production',
  'VFX & CGI',
  'Music Composers & Mix Engineers',
  'Costume Designers',
  'Makeup & Prosthetics',
  'Stunts & Action Team',
  'Choreographers',
  'Production Management',
  'Art Department',
  'Set Construction Crew',
  'Grips & Riggers',
  'Transport Crew',
  'Catering & Hospitality',
  'Security & Crowd Control',
  'Publicity & PR',
  'Distribution & Marketing',
  'Exhibition & Theatre Managers',
  'Animation Teams',
  'Daily-Wage Support Crew'
];

export const languages = [
  'Telugu', 'Tamil', 'Hindi', 'Malayalam', 'Kannada', 'English'
];

export const experienceLevels = [
  'Entry (0-2 years)',
  'Mid (3-7 years)', 
  'Senior (8-15 years)',
  'Veteran (15+ years)'
];

export const mockCastCrewProfiles: CastCrewProfile[] = [
  // Lead Actor - Rajesh Kumar
  {
    id: 'cc1',
    name: 'Rajesh Kumar',
    username: 'rajeshkumar',
    profilePictureUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Actor',
    craft: 'Lead Actor',
    category: 'Cast',
    subcategory: 'Lead Actors/Actresses',
    languages: ['Hindi', 'Telugu', 'Tamil'],
    experience: '15+ years',
    experienceLevel: 'Veteran',
    location: 'Mumbai, India',
    bio: 'Rajesh Kumar is a versatile actor with 15 years of experience in Indian cinema. Known for his intense screen presence and action roles, he has worked in more than 25 feature films across Bollywood and South Indian industries.',
    isVerified: true,
    isAvailable: true,
    availabilityStatus: 'Available',
    rating: 4.8,
    reviews: 156,
    profileViews: 12450,
    connections: 2847,
    joinedDate: '2020-03-15',
    website: 'https://rajeshkumar.com',
    phone: '+91 98765 43210',
    email: 'rajesh@24crafts.com',
    isOnline: true,
    lastSeen: new Date().toISOString(),
    skills: ['Method Acting', 'Fight Choreography', 'Multilingual Dialogue Delivery', 'Action Sequences', 'Dance'],
    tools: ['Acting Techniques', 'Voice Modulation', 'Physical Training', 'Stunt Coordination'],
    awards: [
      {
        id: 'a1',
        name: 'Filmfare Award - Best Debut',
        category: 'Best Debut',
        year: 2008,
        film: 'First Film',
        organization: 'Filmfare',
        level: 'National'
      },
      {
        id: 'a2',
        name: 'SIIMA Best Actor',
        category: 'Best Actor',
        year: 2020,
        film: 'Warrior\'s Path',
        organization: 'SIIMA',
        level: 'State'
      }
    ],
    filmography: [
      {
        id: 'f1',
        title: 'Warrior\'s Path',
        year: 2021,
        role: 'Lead Role',
        genre: 'Action Drama',
        director: 'Rajesh Kumar',
        productionHouse: 'Action Films',
        budget: '₹50 Crores',
        boxOffice: '₹120 Crores',
        posterUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        isVerified: true
      },
      {
        id: 'f2',
        title: 'Dil Ka Safar',
        year: 2019,
        role: 'Romantic Lead',
        genre: 'Romance',
        director: 'Priya Sharma',
        productionHouse: 'Romance Productions',
        budget: '₹25 Crores',
        boxOffice: '₹60 Crores',
        posterUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        isVerified: true
      },
      {
        id: 'f3',
        title: 'Thalaivam',
        year: 2020,
        role: 'Villain Role',
        genre: 'Action Thriller',
        director: 'Vikram Raj',
        productionHouse: 'Tamil Cinema',
        budget: '₹40 Crores',
        boxOffice: '₹80 Crores',
        posterUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        isVerified: true
      }
    ],
    portfolio: [
      {
        id: 'p1',
        type: 'video',
        title: 'Action Showreel',
        description: 'High-octane action sequences from recent films',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnailUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Acting',
        year: 2023
      },
      {
        id: 'p2',
        type: 'image',
        title: 'High-Resolution Stills',
        description: 'Professional portfolio stills',
        url: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        thumbnailUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Portfolio',
        year: 2023
      }
    ],
    showreel: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    manager: 'Horizon Talent Agency',
    agency: 'Horizon Talent Agency',
    union: 'Film Artists Association',
    contactInfo: {
      preferredMethod: 'phone',
      responseTime: 'Within 24 hours',
      workingHours: '9 AM - 6 PM IST',
      timezone: 'IST'
    },
    socialMedia: {
      instagram: '@rajeshkumar',
      twitter: '@rajeshkumar',
      youtube: 'Rajesh Kumar Official'
    },
    aiStudioBadges: [
      {
        id: 'b1',
        name: 'Method Acting Mastery',
        level: 'Gold',
        category: 'Acting',
        earnedDate: '2023-12-15'
      }
    ],
    endorsements: []
  },
  // Cinematographer
  {
    id: 'cc2',
    name: 'Anil Sharma',
    username: 'anilsharma',
    profilePictureUrl: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Cinematographer',
    craft: 'Chief Gaffer',
    category: 'Crew',
    subcategory: 'Lighting Department',
    languages: ['Hindi', 'English'],
    experience: '20+ years',
    experienceLevel: 'Veteran',
    location: 'Mumbai, India',
    bio: 'Award-winning cinematographer and lighting expert with 20+ years of experience in Bollywood and Telugu films. Specialized in visual storytelling and innovative lighting techniques.',
    isVerified: true,
    isAvailable: true,
    availabilityStatus: 'Available',
    rating: 4.9,
    reviews: 203,
    profileViews: 15680,
    connections: 1876,
    joinedDate: '2019-11-08',
    website: 'https://anilsharma.com',
    phone: '+91 98765 43211',
    email: 'anil@24crafts.com',
    isOnline: true,
    lastSeen: new Date().toISOString(),
    skills: ['Cinematography', 'Lighting Design', 'ARRI Alexa', 'DaVinci Resolve', 'Low-light shooting', 'Drone Operation'],
    tools: ['ARRI Alexa Mini LF', 'RED Camera', 'DaVinci Resolve', 'Lighting Equipment'],
    awards: [
      {
        id: 'a2',
        name: 'National Film Award for Best Cinematography',
        category: 'Best Cinematography',
        year: 2021,
        film: 'RRR',
        organization: 'National Film Awards',
        level: 'National'
      }
    ],
    filmography: [
      {
        id: 'f2',
        title: 'RRR',
        year: 2022,
        role: 'Cinematographer',
        genre: 'Period Action Drama',
        director: 'S. S. Rajamouli',
        productionHouse: 'DVV Entertainment',
        budget: '₹550 Crores',
        boxOffice: '₹1200+ Crores',
        posterUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        isVerified: true,
        awards: ['Academy Award for Best Original Song', 'Golden Globe Award']
      }
    ],
    portfolio: [
      {
        id: 'p2',
        type: 'video',
        title: 'Cinematography Reel',
        description: 'Compilation of cinematographic work across multiple projects',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnailUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Cinematography',
        year: 2023
      }
    ],
    showreel: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    manager: 'Priya Nair',
    agency: 'Creative Talent Agency',
    union: 'Cinematographers Guild',
    contactInfo: {
      preferredMethod: 'email',
      responseTime: 'Within 12 hours',
      workingHours: '8 AM - 8 PM IST',
      timezone: 'IST'
    },
    socialMedia: {
      instagram: '@anilsharma_dop',
      linkedin: 'anil-sharma-cinematographer'
    },
    aiStudioBadges: [
      {
        id: 'b2',
        name: 'Lighting Mastery',
        level: 'Gold',
        category: 'Cinematography',
        earnedDate: '2023-11-20'
      }
    ],
    endorsements: []
  },
  // Actress/Playback Singer - Priya Menon
  {
    id: 'cc3',
    name: 'Priya Menon',
    username: 'priyamenon',
    profilePictureUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Actor',
    craft: 'Actress / Playback Singer',
    category: 'Cast',
    subcategory: 'Lead Actors/Actresses',
    languages: ['Malayalam', 'Tamil', 'English'],
    experience: '8+ years',
    experienceLevel: 'Mid',
    location: 'Kochi, India',
    bio: 'Priya Menon is a rising star known for her powerful performances in Malayalam cinema and her soulful playback singing.',
    isVerified: true,
    isAvailable: true,
    availabilityStatus: 'Available',
    rating: 4.6,
    reviews: 89,
    profileViews: 8760,
    connections: 1204,
    joinedDate: '2021-07-22',
    website: 'https://priyamenon.com',
    phone: '+91 98765 43212',
    email: 'priya@24crafts.com',
    isOnline: false,
    lastSeen: '2024-01-20T14:30:00Z',
    skills: ['Acting', 'Singing (Classical & Contemporary)', 'Stage Performance', 'Malayalam', 'Tamil'],
    tools: ['Acting Techniques', 'Voice Training', 'Classical Music', 'Contemporary Singing'],
    awards: [
      {
        id: 'a3',
        name: 'Kerala State Award - Best Singer',
        category: 'Best Singer',
        year: 2022,
        film: 'Oru Swapnam',
        organization: 'Kerala State Awards',
        level: 'State'
      }
    ],
    filmography: [
      {
        id: 'f3',
        title: 'Oru Swapnam',
        year: 2022,
        role: 'Female Lead',
        genre: 'Drama',
        director: 'Rajesh Kumar',
        productionHouse: 'Malayalam Cinema',
        budget: '₹15 Crores',
        boxOffice: '₹35 Crores',
        posterUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        isVerified: true
      },
      {
        id: 'f4',
        title: 'Kaatru Nilavu',
        year: 2021,
        role: 'Supporting Actress',
        genre: 'Romance',
        director: 'Tamil Director',
        productionHouse: 'Tamil Productions',
        budget: '₹20 Crores',
        boxOffice: '₹45 Crores',
        posterUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        isVerified: true
      }
    ],
    portfolio: [
      {
        id: 'p3',
        type: 'video',
        title: 'Acting Showreel',
        description: 'Best acting performances',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnailUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Acting',
        year: 2023
      },
      {
        id: 'p4',
        type: 'audio',
        title: '3 Playback Tracks',
        description: 'Soulful playback singing samples',
        url: 'https://soundcloud.com/priyamenon',
        thumbnailUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Music',
        year: 2023
      }
    ],
    showreel: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    manager: 'Independent',
    agency: 'Independent',
    union: 'South Indian Film Artists Association',
    contactInfo: {
      preferredMethod: 'email',
      responseTime: 'Within 48 hours',
      workingHours: '10 AM - 6 PM IST',
      timezone: 'IST'
    },
    socialMedia: {
      instagram: '@priyamenon_actor',
      twitter: '@priyamenon'
    },
    aiStudioBadges: [
      {
        id: 'b3',
        name: 'Character Acting Excellence',
        level: 'Silver',
        category: 'Acting',
        earnedDate: '2023-10-15'
      }
    ],
    endorsements: []
  },
  // Comedian
  {
    id: 'cc4',
    name: 'Arun Varma',
    username: 'arunvarma',
    profilePictureUrl: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Actor',
    craft: 'Comedian',
    category: 'Cast',
    subcategory: 'Comedians',
    languages: ['Hindi', 'Kannada'],
    experience: '15+ years',
    experienceLevel: 'Veteran',
    location: 'Bangalore, India',
    bio: 'Renowned comedian with 15+ years of experience in Hindi and Kannada cinema. Known for impeccable timing and natural humor.',
    isVerified: true,
    isAvailable: true,
    availabilityStatus: 'Available',
    rating: 4.7,
    reviews: 167,
    profileViews: 18920,
    connections: 3421,
    joinedDate: '2018-05-14',
    website: 'https://arunvarma.com',
    phone: '+91 98765 43213',
    email: 'arun@24crafts.com',
    isOnline: true,
    lastSeen: new Date().toISOString(),
    skills: ['Comedy Timing', 'Improv', 'Hindi', 'Kannada', 'Stand-up Comedy'],
    tools: ['Comedy Techniques', 'Audience Engagement', 'Script Writing'],
    awards: [
      {
        id: 'a4',
        name: 'Filmfare Award for Best Comedian',
        category: 'Best Comedian',
        year: 2022,
        film: 'Ludo',
        organization: 'Filmfare',
        level: 'National'
      }
    ],
    filmography: [
      {
        id: 'f4',
        title: 'Ludo',
        year: 2020,
        role: 'Comedian',
        genre: 'Comedy Drama',
        director: 'Anurag Basu',
        productionHouse: 'T-Series',
        budget: '₹25 Crores',
        boxOffice: '₹45 Crores',
        posterUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        isVerified: true
      }
    ],
    portfolio: [],
    showreel: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    manager: 'Rohit Shetty',
    agency: 'Comedy Talent Management',
    union: 'Film Artists Association',
    contactInfo: {
      preferredMethod: 'phone',
      responseTime: 'Within 24 hours',
      workingHours: '9 AM - 7 PM IST',
      timezone: 'IST'
    },
    socialMedia: {
      instagram: '@arunvarma_comedy',
      youtube: 'Arun Varma Comedy'
    },
    aiStudioBadges: [
      {
        id: 'b4',
        name: 'Comedy Mastery',
        level: 'Gold',
        category: 'Comedy',
        earnedDate: '2023-09-10'
      }
    ],
    endorsements: []
  },
  // Sound Designer
  {
    id: 'cc5',
    name: 'Suresh Iyer',
    username: 'sureshiyer',
    profilePictureUrl: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Sound Designer',
    craft: 'Best Boy Electric',
    category: 'Crew',
    subcategory: 'Lighting Department',
    languages: ['English', 'Hindi'],
    experience: '12+ years',
    experienceLevel: 'Senior',
    location: 'Mumbai, India',
    bio: 'Experienced lighting technician specializing in ARRI and RED camera setups. Expert in complex lighting scenarios and equipment management.',
    isVerified: true,
    isAvailable: true,
    availabilityStatus: 'Available',
    rating: 4.8,
    reviews: 134,
    profileViews: 11200,
    connections: 1567,
    joinedDate: '2019-03-20',
    website: 'https://sureshiyer.com',
    phone: '+91 98765 43214',
    email: 'suresh@24crafts.com',
    isOnline: true,
    lastSeen: new Date().toISOString(),
    skills: ['Lighting Design', 'ARRI Setup', 'RED Camera', 'Equipment Management', 'Team Leadership'],
    tools: ['ARRI Alexa', 'RED Camera', 'Lighting Equipment', 'Power Distribution'],
    awards: [
      {
        id: 'a5',
        name: 'Technical Excellence Award',
        category: 'Lighting',
        year: 2023,
        organization: 'Film Technicians Guild',
        level: 'Guild'
      }
    ],
    filmography: [
      {
        id: 'f5',
        title: 'Gangubai Kathiawadi',
        year: 2022,
        role: 'Best Boy Electric',
        genre: 'Biographical Drama',
        director: 'Sanjay Leela Bhansali',
        productionHouse: 'Bhansali Productions',
        budget: '₹100 Crores',
        boxOffice: '₹200 Crores',
        posterUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        isVerified: true
      }
    ],
    portfolio: [],
    showreel: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    manager: 'Meera Joshi',
    agency: 'Technical Talent Agency',
    union: 'Film Technicians Guild',
    contactInfo: {
      preferredMethod: 'phone',
      responseTime: 'Within 12 hours',
      workingHours: '7 AM - 9 PM IST',
      timezone: 'IST'
    },
    socialMedia: {
      linkedin: 'suresh-iyer-lighting'
    },
    aiStudioBadges: [
      {
        id: 'b5',
        name: 'Lighting Technology Expert',
        level: 'Gold',
        category: 'Technical',
        earnedDate: '2023-08-25'
      }
    ],
    endorsements: []
  },
  // Director - Meera Deshpande
  {
    id: 'cc6',
    name: 'Meera Deshpande',
    username: 'meeradeshpande',
    profilePictureUrl: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Director',
    craft: 'Film Director / Screenwriter',
    category: 'Crew',
    subcategory: 'Directors & ADs',
    languages: ['Hindi', 'Marathi', 'English'],
    experience: '12+ years',
    experienceLevel: 'Senior',
    location: 'Mumbai, India',
    bio: 'Critically acclaimed director blending realism with strong storytelling. Known for women-centric narratives.',
    isVerified: true,
    isAvailable: true,
    availabilityStatus: 'Available',
    rating: 4.9,
    reviews: 89,
    profileViews: 15680,
    connections: 2341,
    joinedDate: '2019-05-10',
    website: 'https://meeradeshpande.com',
    phone: '+91 98765 43215',
    email: 'meera@24crafts.com',
    isOnline: true,
    lastSeen: new Date().toISOString(),
    skills: ['Script Development', 'Casting', 'Visual Storytelling', 'Women-Centric Narratives', 'Realism'],
    tools: ['Final Draft', 'Storyboarding', 'Casting Software', 'Production Planning'],
    awards: [
      {
        id: 'a6',
        name: 'National Award - Best Director',
        category: 'Best Director',
        year: 2019,
        film: 'The Last Letter',
        organization: 'National Film Awards',
        level: 'National'
      }
    ],
    filmography: [
      {
        id: 'f6',
        title: 'The Last Letter',
        year: 2019,
        role: 'Director & Writer',
        genre: 'Drama',
        director: 'Meera Deshpande',
        productionHouse: 'Independent Films',
        budget: '₹8 Crores',
        boxOffice: '₹25 Crores',
        posterUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        isVerified: true
      },
      {
        id: 'f7',
        title: 'Beyond the River',
        year: 2021,
        role: 'Director',
        genre: 'Drama',
        director: 'Meera Deshpande',
        productionHouse: 'Netflix Original',
        budget: '₹15 Crores',
        posterUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        isVerified: true
      }
    ],
    portfolio: [
      {
        id: 'p6',
        type: 'video',
        title: 'Directing Showreel',
        description: 'Best directing moments and behind-the-scenes',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnailUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Directing',
        year: 2023
      }
    ],
    showreel: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    manager: 'Director\'s Guild of India',
    agency: 'Director\'s Guild of India',
    union: 'Director\'s Guild of India',
    contactInfo: {
      preferredMethod: 'email',
      responseTime: 'Within 48 hours',
      workingHours: '10 AM - 6 PM IST',
      timezone: 'IST'
    },
    socialMedia: {
      instagram: '@meeradeshpande_director',
      linkedin: 'meera-deshpande-director'
    },
    aiStudioBadges: [
      {
        id: 'b6',
        name: 'Directing Excellence',
        level: 'Gold',
        category: 'Directing',
        earnedDate: '2023-09-20'
      }
    ],
    endorsements: []
  },
  // Music Director - Ravi Shankar
  {
    id: 'cc7',
    name: 'Ravi Shankar',
    username: 'ravishankar',
    profilePictureUrl: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Music Director',
    craft: 'Music Director / Composer',
    category: 'Crew',
    subcategory: 'Music Department',
    languages: ['Hindi', 'Tamil', 'Telugu', 'English'],
    experience: '20+ years',
    experienceLevel: 'Veteran',
    location: 'Chennai, India',
    bio: 'Award-winning music director with 20+ years of experience. Known for fusion of classical and contemporary music.',
    isVerified: true,
    isAvailable: true,
    availabilityStatus: 'Available',
    rating: 4.9,
    reviews: 234,
    profileViews: 18900,
    connections: 3456,
    joinedDate: '2018-01-15',
    website: 'https://ravishankar.com',
    phone: '+91 98765 43216',
    email: 'ravi@24crafts.com',
    isOnline: true,
    lastSeen: new Date().toISOString(),
    skills: ['Music Composition', 'Orchestration', 'Classical Music', 'Contemporary Fusion', 'Sound Design'],
    tools: ['Logic Pro', 'Pro Tools', 'Cubase', 'MIDI Controllers', 'Audio Interfaces'],
    awards: [
      {
        id: 'a7',
        name: 'Filmfare Award - Best Music Director',
        category: 'Best Music Director',
        year: 2020,
        film: 'Melodies of Life',
        organization: 'Filmfare',
        level: 'National'
      }
    ],
    filmography: [
      {
        id: 'f8',
        title: 'Melodies of Life',
        year: 2020,
        role: 'Music Director',
        genre: 'Musical Drama',
        director: 'Music Director',
        productionHouse: 'Musical Films',
        budget: '₹30 Crores',
        boxOffice: '₹75 Crores',
        posterUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        isVerified: true
      }
    ],
    portfolio: [
      {
        id: 'p7',
        type: 'audio',
        title: 'Music Portfolio',
        description: 'Best musical compositions and soundtracks',
        url: 'https://soundcloud.com/ravishankar',
        thumbnailUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Music',
        year: 2023
      }
    ],
    showreel: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    manager: 'Music Management Co.',
    agency: 'Music Management Co.',
    union: 'Music Directors Association',
    contactInfo: {
      preferredMethod: 'phone',
      responseTime: 'Within 24 hours',
      workingHours: '10 AM - 8 PM IST',
      timezone: 'IST'
    },
    socialMedia: {
      instagram: '@ravishankar_music',
      youtube: 'Ravi Shankar Music'
    },
    aiStudioBadges: [
      {
        id: 'b7',
        name: 'Music Composition Mastery',
        level: 'Gold',
        category: 'Music',
        earnedDate: '2023-07-15'
      }
    ],
    endorsements: []
  },
  // Editor - Sunita Patel
  {
    id: 'cc8',
    name: 'Sunita Patel',
    username: 'sunitapatel',
    profilePictureUrl: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Editor',
    craft: 'Film Editor / Post-Production',
    category: 'Crew',
    subcategory: 'Post-Production',
    languages: ['Hindi', 'Gujarati', 'English'],
    experience: '10+ years',
    experienceLevel: 'Senior',
    location: 'Mumbai, India',
    bio: 'Expert film editor specializing in narrative pacing and visual storytelling. Proficient in all major editing software.',
    isVerified: true,
    isAvailable: true,
    availabilityStatus: 'Available',
    rating: 4.7,
    reviews: 156,
    profileViews: 12300,
    connections: 2100,
    joinedDate: '2020-08-20',
    website: 'https://sunitapatel.com',
    phone: '+91 98765 43217',
    email: 'sunita@24crafts.com',
    isOnline: false,
    lastSeen: '2024-01-20T16:45:00Z',
    skills: ['Film Editing', 'Color Grading', 'Sound Editing', 'Visual Effects', 'Post-Production'],
    tools: ['Adobe Premiere Pro', 'Avid Media Composer', 'DaVinci Resolve', 'After Effects', 'Pro Tools'],
    awards: [
      {
        id: 'a8',
        name: 'Filmfare Award - Best Editor',
        category: 'Best Editor',
        year: 2021,
        film: 'The Cut',
        organization: 'Filmfare',
        level: 'National'
      }
    ],
    filmography: [
      {
        id: 'f9',
        title: 'The Cut',
        year: 2021,
        role: 'Editor',
        genre: 'Thriller',
        director: 'Thriller Director',
        productionHouse: 'Thriller Films',
        budget: '₹25 Crores',
        boxOffice: '₹60 Crores',
        posterUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        isVerified: true
      }
    ],
    portfolio: [
      {
        id: 'p8',
        type: 'video',
        title: 'Editing Showreel',
        description: 'Best editing sequences and transitions',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnailUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Editing',
        year: 2023
      }
    ],
    showreel: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    manager: 'Post-Production Guild',
    agency: 'Post-Production Guild',
    union: 'Film Editors Guild',
    contactInfo: {
      preferredMethod: 'email',
      responseTime: 'Within 48 hours',
      workingHours: '9 AM - 7 PM IST',
      timezone: 'IST'
    },
    socialMedia: {
      instagram: '@sunitapatel_editor',
      linkedin: 'sunita-patel-editor'
    },
    aiStudioBadges: [
      {
        id: 'b8',
        name: 'Film Editing Excellence',
        level: 'Gold',
        category: 'Post-Production',
        earnedDate: '2023-06-10'
      }
    ],
    endorsements: []
  },
  // Stunt Coordinator - Vikram Singh
  {
    id: 'cc9',
    name: 'Vikram Singh',
    username: 'vikramsingh',
    profilePictureUrl: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Stunt Coordinator',
    craft: 'Stunt Coordinator / Action Director',
    category: 'Crew',
    subcategory: 'Stunts & Action',
    languages: ['Hindi', 'Punjabi', 'English'],
    experience: '18+ years',
    experienceLevel: 'Veteran',
    location: 'Mumbai, India',
    bio: 'Award-winning stunt coordinator with 18+ years of experience in Bollywood action films. Specializes in high-octane action sequences and safety protocols.',
    isVerified: true,
    isAvailable: true,
    availabilityStatus: 'Available',
    rating: 4.8,
    reviews: 189,
    profileViews: 15600,
    connections: 2890,
    joinedDate: '2019-02-10',
    website: 'https://vikramsinghstunts.com',
    phone: '+91 98765 43218',
    email: 'vikram@24crafts.com',
    isOnline: true,
    lastSeen: new Date().toISOString(),
    skills: ['Stunt Coordination', 'Action Direction', 'Safety Protocols', 'Fight Choreography', 'Vehicle Stunts'],
    tools: ['Safety Equipment', 'Stunt Rigging', 'Action Planning', 'Risk Assessment'],
    awards: [
      {
        id: 'a9',
        name: 'Filmfare Award - Best Action',
        category: 'Best Action',
        year: 2021,
        film: 'Action Hero',
        organization: 'Filmfare',
        level: 'National'
      }
    ],
    filmography: [
      {
        id: 'f10',
        title: 'Action Hero',
        year: 2021,
        role: 'Stunt Coordinator',
        genre: 'Action',
        director: 'Action Director',
        productionHouse: 'Action Films',
        budget: '₹80 Crores',
        boxOffice: '₹180 Crores',
        posterUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        isVerified: true
      }
    ],
    portfolio: [
      {
        id: 'p9',
        type: 'video',
        title: 'Stunt Showreel',
        description: 'Best action sequences and stunts',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnailUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Stunts',
        year: 2023
      }
    ],
    showreel: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    manager: 'Action Management Co.',
    agency: 'Action Management Co.',
    union: 'Stunt Artists Association',
    contactInfo: {
      preferredMethod: 'phone',
      responseTime: 'Within 24 hours',
      workingHours: '8 AM - 8 PM IST',
      timezone: 'IST'
    },
    socialMedia: {
      instagram: '@vikramsinghstunts',
      youtube: 'Vikram Singh Stunts'
    },
    aiStudioBadges: [
      {
        id: 'b9',
        name: 'Stunt Coordination Mastery',
        level: 'Gold',
        category: 'Stunts',
        earnedDate: '2023-05-20'
      }
    ],
    endorsements: []
  },
  // Costume Designer - Anjali Mehta
  {
    id: 'cc10',
    name: 'Anjali Mehta',
    username: 'anjalimehta',
    profilePictureUrl: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Costume Designer',
    craft: 'Costume Designer / Fashion Stylist',
    category: 'Crew',
    subcategory: 'Art Department',
    languages: ['Hindi', 'Gujarati', 'English'],
    experience: '12+ years',
    experienceLevel: 'Senior',
    location: 'Mumbai, India',
    bio: 'Creative costume designer known for period dramas and contemporary fashion. Expert in character development through wardrobe.',
    isVerified: true,
    isAvailable: true,
    availabilityStatus: 'Available',
    rating: 4.7,
    reviews: 134,
    profileViews: 11200,
    connections: 1980,
    joinedDate: '2020-06-15',
    website: 'https://anjalimehta.com',
    phone: '+91 98765 43219',
    email: 'anjali@24crafts.com',
    isOnline: false,
    lastSeen: '2024-01-20T18:30:00Z',
    skills: ['Costume Design', 'Period Costumes', 'Fashion Styling', 'Character Development', 'Fabric Selection'],
    tools: ['Design Software', 'Fabric Sourcing', 'Pattern Making', 'Costume Fitting'],
    awards: [
      {
        id: 'a10',
        name: 'National Award - Best Costume Design',
        category: 'Best Costume Design',
        year: 2022,
        film: 'Royal Heritage',
        organization: 'National Film Awards',
        level: 'National'
      }
    ],
    filmography: [
      {
        id: 'f11',
        title: 'Royal Heritage',
        year: 2022,
        role: 'Costume Designer',
        genre: 'Period Drama',
        director: 'Period Director',
        productionHouse: 'Heritage Films',
        budget: '₹60 Crores',
        boxOffice: '₹140 Crores',
        posterUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        isVerified: true
      }
    ],
    portfolio: [
      {
        id: 'p10',
        type: 'image',
        title: 'Costume Portfolio',
        description: 'Best costume designs and character wardrobes',
        url: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        thumbnailUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Costume Design',
        year: 2023
      }
    ],
    showreel: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    manager: 'Creative Management',
    agency: 'Creative Management',
    union: 'Costume Designers Guild',
    contactInfo: {
      preferredMethod: 'email',
      responseTime: 'Within 48 hours',
      workingHours: '10 AM - 6 PM IST',
      timezone: 'IST'
    },
    socialMedia: {
      instagram: '@anjalimehta_designs',
      linkedin: 'anjali-mehta-costume-designer'
    },
    aiStudioBadges: [
      {
        id: 'b10',
        name: 'Costume Design Excellence',
        level: 'Gold',
        category: 'Art Department',
        earnedDate: '2023-04-15'
      }
    ],
    endorsements: []
  },
  // Supporting Actor - Ramesh Iyer
  {
    id: 'cc11',
    name: 'Ramesh Iyer',
    username: 'rameshier',
    profilePictureUrl: 'https://images.pexels.com/photos/1040882/pexels-photo-1040882.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Actor',
    craft: 'Supporting Actor / Character Artist',
    category: 'Cast',
    subcategory: 'Supporting Actors',
    languages: ['Tamil', 'Malayalam', 'English'],
    experience: '14+ years',
    experienceLevel: 'Senior',
    location: 'Chennai, India',
    bio: 'Versatile supporting actor known for powerful character roles in Tamil and Malayalam cinema. Specializes in emotional depth and authentic performances.',
    isVerified: true,
    isAvailable: true,
    availabilityStatus: 'Available',
    rating: 4.6,
    reviews: 98,
    profileViews: 8900,
    connections: 1450,
    joinedDate: '2021-03-20',
    website: 'https://rameshier.com',
    phone: '+91 98765 43220',
    email: 'ramesh@24crafts.com',
    isOnline: true,
    lastSeen: new Date().toISOString(),
    skills: ['Character Acting', 'Emotional Range', 'Tamil', 'Malayalam', 'Dance'],
    tools: ['Acting Techniques', 'Voice Training', 'Physical Expression'],
    awards: [
      {
        id: 'a11',
        name: 'SIIMA Award - Best Supporting Actor',
        category: 'Best Supporting Actor',
        year: 2023,
        film: 'Family Bonds',
        organization: 'SIIMA',
        level: 'State'
      }
    ],
    filmography: [
      {
        id: 'f12',
        title: 'Family Bonds',
        year: 2023,
        role: 'Supporting Actor',
        genre: 'Drama',
        director: 'Family Director',
        productionHouse: 'Family Films',
        budget: '₹20 Crores',
        boxOffice: '₹50 Crores',
        posterUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        isVerified: true
      }
    ],
    portfolio: [
      {
        id: 'p11',
        type: 'video',
        title: 'Character Acting Showreel',
        description: 'Best supporting character performances',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnailUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Acting',
        year: 2023
      }
    ],
    showreel: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    manager: 'South Talent Agency',
    agency: 'South Talent Agency',
    union: 'South Indian Film Artists Association',
    contactInfo: {
      preferredMethod: 'phone',
      responseTime: 'Within 24 hours',
      workingHours: '9 AM - 6 PM IST',
      timezone: 'IST'
    },
    socialMedia: {
      instagram: '@rameshier_actor',
      twitter: '@rameshier'
    },
    aiStudioBadges: [
      {
        id: 'b11',
        name: 'Character Acting Excellence',
        level: 'Silver',
        category: 'Acting',
        earnedDate: '2023-03-10'
      }
    ],
    endorsements: []
  },
  // Sound Designer - Deepak Kumar
  {
    id: 'cc12',
    name: 'Deepak Kumar',
    username: 'deepakkumar',
    profilePictureUrl: 'https://images.pexels.com/photos/1040883/pexels-photo-1040883.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Sound Designer',
    craft: 'Sound Designer / Audio Engineer',
    category: 'Crew',
    subcategory: 'Sound Department',
    languages: ['Hindi', 'English'],
    experience: '16+ years',
    experienceLevel: 'Senior',
    location: 'Mumbai, India',
    bio: 'Expert sound designer specializing in immersive audio experiences. Known for innovative soundscapes and technical excellence.',
    isVerified: true,
    isAvailable: true,
    availabilityStatus: 'Available',
    rating: 4.8,
    reviews: 167,
    profileViews: 13400,
    connections: 2230,
    joinedDate: '2019-09-12',
    website: 'https://deepakkumar.com',
    phone: '+91 98765 43221',
    email: 'deepak@24crafts.com',
    isOnline: true,
    lastSeen: new Date().toISOString(),
    skills: ['Sound Design', 'Audio Engineering', 'Foley Art', 'Sound Mixing', 'Spatial Audio'],
    tools: ['Pro Tools', 'Logic Pro', 'Reaper', 'Audio Interfaces', 'Microphones'],
    awards: [
      {
        id: 'a12',
        name: 'Filmfare Award - Best Sound Design',
        category: 'Best Sound Design',
        year: 2022,
        film: 'Soundscape',
        organization: 'Filmfare',
        level: 'National'
      }
    ],
    filmography: [
      {
        id: 'f13',
        title: 'Soundscape',
        year: 2022,
        role: 'Sound Designer',
        genre: 'Thriller',
        director: 'Sound Director',
        productionHouse: 'Audio Films',
        budget: '₹35 Crores',
        boxOffice: '₹85 Crores',
        posterUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        isVerified: true
      }
    ],
    portfolio: [
      {
        id: 'p12',
        type: 'audio',
        title: 'Sound Design Portfolio',
        description: 'Best sound design and audio engineering work',
        url: 'https://soundcloud.com/deepakkumar',
        thumbnailUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Sound Design',
        year: 2023
      }
    ],
    showreel: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    manager: 'Audio Management Co.',
    agency: 'Audio Management Co.',
    union: 'Sound Engineers Association',
    contactInfo: {
      preferredMethod: 'email',
      responseTime: 'Within 48 hours',
      workingHours: '10 AM - 8 PM IST',
      timezone: 'IST'
    },
    socialMedia: {
      instagram: '@deepakkumar_sound',
      linkedin: 'deepak-kumar-sound-designer'
    },
    aiStudioBadges: [
      {
        id: 'b12',
        name: 'Sound Design Mastery',
        level: 'Gold',
        category: 'Sound',
        earnedDate: '2023-02-28'
      }
    ],
    endorsements: []
  },
  
  // Additional Indian Cast & Crew Profiles
  
  // Lead Actress - Kavya Reddy
  {
    id: 'cc13',
    name: 'Kavya Reddy',
    username: 'kavyareddy',
    profilePictureUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Actress',
    craft: 'Lead Actress',
    category: 'Cast',
    subcategory: 'Lead Actors/Actresses',
    languages: ['Telugu', 'Tamil', 'Hindi', 'English'],
    experience: '8+ years',
    experienceLevel: 'Mid',
    location: 'Hyderabad, India',
    bio: 'Kavya Reddy is a talented actress known for her versatility and natural acting style. She has worked in Telugu, Tamil, and Hindi films, bringing authenticity to every character she portrays.',
    isVerified: true,
    isAvailable: true,
    availabilityStatus: 'Available',
    rating: 4.7,
    reviews: 98,
    profileViews: 8750,
    connections: 1650,
    joinedDate: '2021-05-20',
    website: 'https://kavyareddy.com',
    phone: '+91 98765 43231',
    email: 'kavya@24crafts.com',
    isOnline: true,
    lastSeen: new Date().toISOString(),
    skills: ['Method Acting', 'Dance', 'Singing', 'Multilingual', 'Emotional Range'],
    tools: ['Acting Techniques', 'Voice Training', 'Dance Forms', 'Language Skills'],
    awards: [
      {
        id: 'a13',
        name: 'Nandi Award - Best Actress',
        category: 'Best Actress',
        year: 2023,
        film: 'Heartstrings',
        organization: 'Nandi Awards',
        level: 'State'
      }
    ],
    filmography: [
      {
        id: 'f14',
        title: 'Heartstrings',
        year: 2023,
        role: 'Lead Role',
        genre: 'Romantic Drama',
        director: 'Romantic Director',
        productionHouse: 'Love Films',
        budget: '₹25 Crores',
        boxOffice: '₹65 Crores',
        posterUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        isVerified: true
      }
    ],
    portfolio: [
      {
        id: 'p13',
        type: 'video',
        title: 'Acting Showreel',
        description: 'Best acting performances and emotional scenes',
        url: 'https://youtube.com/kavyareddy',
        thumbnailUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Acting',
        year: 2023
      }
    ],
    showreel: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    manager: 'South Star Management',
    agency: 'South Star Management',
    union: 'South Indian Film Artists Association',
    contactInfo: {
      preferredMethod: 'phone',
      responseTime: 'Within 12 hours',
      workingHours: '9 AM - 7 PM IST',
      timezone: 'IST'
    },
    socialMedia: {
      instagram: '@kavyareddy_official',
      twitter: '@kavyareddy'
    },
    aiStudioBadges: [
      {
        id: 'b13',
        name: 'Emotional Acting Excellence',
        level: 'Gold',
        category: 'Acting',
        earnedDate: '2023-04-15'
      }
    ],
    endorsements: []
  },

  // Director - Suresh Menon
  {
    id: 'cc14',
    name: 'Suresh Menon',
    username: 'sureshmenon',
    profilePictureUrl: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Director',
    craft: 'Film Director',
    category: 'Crew',
    subcategory: 'Directors & ADs',
    languages: ['Malayalam', 'Tamil', 'Hindi', 'English'],
    experience: '12+ years',
    experienceLevel: 'Senior',
    location: 'Kochi, India',
    bio: 'Suresh Menon is an acclaimed director known for his unique storytelling and visual style. He specializes in character-driven narratives and has won several awards for his work.',
    isVerified: true,
    isAvailable: true,
    availabilityStatus: 'Available',
    rating: 4.9,
    reviews: 145,
    profileViews: 15600,
    connections: 3200,
    joinedDate: '2018-03-10',
    website: 'https://sureshmenon.com',
    phone: '+91 98765 43241',
    email: 'suresh@24crafts.com',
    isOnline: false,
    lastSeen: '2024-01-20T16:30:00Z',
    skills: ['Direction', 'Screenwriting', 'Visual Storytelling', 'Character Development', 'Cinematography'],
    tools: ['Script Writing', 'Storyboarding', 'Camera Work', 'Editing Software'],
    awards: [
      {
        id: 'a14',
        name: 'National Film Award - Best Director',
        category: 'Best Director',
        year: 2022,
        film: 'Silent Echoes',
        organization: 'National Film Awards',
        level: 'National'
      }
    ],
    filmography: [
      {
        id: 'f15',
        title: 'Silent Echoes',
        year: 2022,
        role: 'Director',
        genre: 'Drama',
        director: 'Suresh Menon',
        productionHouse: 'Art House Films',
        budget: '₹15 Crores',
        boxOffice: '₹45 Crores',
        posterUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        isVerified: true
      }
    ],
    portfolio: [
      {
        id: 'p14',
        type: 'video',
        title: 'Directing Portfolio',
        description: 'Best directed films and behind-the-scenes work',
        url: 'https://vimeo.com/sureshmenon',
        thumbnailUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Direction',
        year: 2023
      }
    ],
    showreel: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    manager: 'Creative Directors Agency',
    agency: 'Creative Directors Agency',
    union: 'Film Directors Association',
    contactInfo: {
      preferredMethod: 'email',
      responseTime: 'Within 24 hours',
      workingHours: '10 AM - 6 PM IST',
      timezone: 'IST'
    },
    socialMedia: {
      instagram: '@sureshmenon_director',
      linkedin: 'suresh-menon-director'
    },
    aiStudioBadges: [
      {
        id: 'b14',
        name: 'Directing Excellence',
        level: 'Platinum',
        category: 'Direction',
        earnedDate: '2023-01-20'
      }
    ],
    endorsements: []
  },

  // Cinematographer - Arjun Nair
  {
    id: 'cc15',
    name: 'Arjun Nair',
    username: 'arjunnair',
    profilePictureUrl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Cinematographer',
    craft: 'Director of Photography',
    category: 'Crew',
    subcategory: 'Cinematographers',
    languages: ['Hindi', 'English', 'Tamil'],
    experience: '10+ years',
    experienceLevel: 'Senior',
    location: 'Mumbai, India',
    bio: 'Arjun Nair is a skilled cinematographer with expertise in both digital and film formats. Known for his innovative lighting techniques and creative camera work.',
    isVerified: true,
    isAvailable: true,
    availabilityStatus: 'Available',
    rating: 4.8,
    reviews: 112,
    profileViews: 12300,
    connections: 2100,
    joinedDate: '2019-08-15',
    website: 'https://arjunnair.com',
    phone: '+91 98765 43251',
    email: 'arjun@24crafts.com',
    isOnline: true,
    lastSeen: new Date().toISOString(),
    skills: ['Cinematography', 'Lighting Design', 'Camera Operation', 'Color Grading', 'Visual Effects'],
    tools: ['ARRI Alexa', 'RED Camera', 'DaVinci Resolve', 'Adobe Premiere', 'Lighting Equipment'],
    awards: [
      {
        id: 'a15',
        name: 'Filmfare Award - Best Cinematography',
        category: 'Best Cinematography',
        year: 2023,
        film: 'Visual Poetry',
        organization: 'Filmfare',
        level: 'National'
      }
    ],
    filmography: [
      {
        id: 'f16',
        title: 'Visual Poetry',
        year: 2023,
        role: 'Cinematographer',
        genre: 'Art House',
        director: 'Art Director',
        productionHouse: 'Visual Films',
        budget: '₹20 Crores',
        boxOffice: '₹35 Crores',
        posterUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        isVerified: true
      }
    ],
    portfolio: [
      {
        id: 'p15',
        type: 'image',
        title: 'Cinematography Portfolio',
        description: 'Best cinematography work and lighting setups',
        url: 'https://arjunnair.com/portfolio',
        thumbnailUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Cinematography',
        year: 2023
      }
    ],
    showreel: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    manager: 'Visual Arts Management',
    agency: 'Visual Arts Management',
    union: 'Cinematographers Guild',
    contactInfo: {
      preferredMethod: 'phone',
      responseTime: 'Within 6 hours',
      workingHours: '8 AM - 8 PM IST',
      timezone: 'IST'
    },
    socialMedia: {
      instagram: '@arjunnair_dop',
      linkedin: 'arjun-nair-cinematographer'
    },
    aiStudioBadges: [
      {
        id: 'b15',
        name: 'Visual Excellence',
        level: 'Gold',
        category: 'Cinematography',
        earnedDate: '2023-05-10'
      }
    ],
    endorsements: []
  },

  // Supporting Actor - Ravi Patel
  {
    id: 'cc16',
    name: 'Ravi Patel',
    username: 'ravipatel',
    profilePictureUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Actor',
    craft: 'Supporting Actor',
    category: 'Cast',
    subcategory: 'Supporting Actors',
    languages: ['Hindi', 'Gujarati', 'English'],
    experience: '6+ years',
    experienceLevel: 'Mid',
    location: 'Ahmedabad, India',
    bio: 'Ravi Patel is a versatile supporting actor known for his natural performances and ability to bring depth to any character. He has worked in both mainstream and independent films.',
    isVerified: false,
    isAvailable: true,
    availabilityStatus: 'Available',
    rating: 4.5,
    reviews: 67,
    profileViews: 5400,
    connections: 890,
    joinedDate: '2022-01-15',
    website: 'https://ravipatel.com',
    phone: '+91 98765 43261',
    email: 'ravi@24crafts.com',
    isOnline: false,
    lastSeen: '2024-01-20T12:00:00Z',
    skills: ['Character Acting', 'Comedy', 'Drama', 'Voice Acting', 'Improvisation'],
    tools: ['Acting Techniques', 'Voice Training', 'Character Development'],
    awards: [],
    filmography: [
      {
        id: 'f17',
        title: 'City Stories',
        year: 2023,
        role: 'Supporting Role',
        genre: 'Drama',
        director: 'Urban Director',
        productionHouse: 'City Films',
        budget: '₹12 Crores',
        boxOffice: '₹28 Crores',
        posterUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        isVerified: true
      }
    ],
    portfolio: [
      {
        id: 'p16',
        type: 'video',
        title: 'Supporting Actor Reel',
        description: 'Best supporting roles and character performances',
        url: 'https://youtube.com/ravipatel',
        thumbnailUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Acting',
        year: 2023
      }
    ],
    showreel: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    manager: 'Independent Talent',
    agency: 'Independent Talent',
    union: 'Film Artists Association',
    contactInfo: {
      preferredMethod: 'email',
      responseTime: 'Within 48 hours',
      workingHours: '10 AM - 6 PM IST',
      timezone: 'IST'
    },
    socialMedia: {
      instagram: '@ravipatel_actor',
      twitter: '@ravipatel'
    },
    aiStudioBadges: [
      {
        id: 'b16',
        name: 'Character Acting',
        level: 'Silver',
        category: 'Acting',
        earnedDate: '2023-06-20'
      }
    ],
    endorsements: []
  },

  // Music Composer - Priya Sharma
  {
    id: 'cc17',
    name: 'Priya Sharma',
    username: 'priyasharma',
    profilePictureUrl: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Music Composer',
    craft: 'Music Composer & Singer',
    category: 'Crew',
    subcategory: 'Music Composers & Mix Engineers',
    languages: ['Hindi', 'English', 'Punjabi'],
    experience: '9+ years',
    experienceLevel: 'Mid',
    location: 'Delhi, India',
    bio: 'Priya Sharma is a talented music composer and singer known for her melodious compositions and versatile musical style. She has composed music for films, web series, and commercials.',
    isVerified: true,
    isAvailable: true,
    availabilityStatus: 'Available',
    rating: 4.7,
    reviews: 89,
    profileViews: 9800,
    connections: 1450,
    joinedDate: '2020-11-08',
    website: 'https://priyasharma.com',
    phone: '+91 98765 43271',
    email: 'priya@24crafts.com',
    isOnline: true,
    lastSeen: new Date().toISOString(),
    skills: ['Music Composition', 'Singing', 'Lyrics Writing', 'Sound Design', 'Music Production'],
    tools: ['Logic Pro', 'Pro Tools', 'Ableton Live', 'MIDI Controllers', 'Audio Interfaces'],
    awards: [
      {
        id: 'a17',
        name: 'Filmfare Award - Best Music',
        category: 'Best Music',
        year: 2023,
        film: 'Melody Lane',
        organization: 'Filmfare',
        level: 'National'
      }
    ],
    filmography: [
      {
        id: 'f18',
        title: 'Melody Lane',
        year: 2023,
        role: 'Music Composer',
        genre: 'Musical Drama',
        director: 'Music Director',
        productionHouse: 'Melody Films',
        budget: '₹18 Crores',
        boxOffice: '₹42 Crores',
        posterUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        isVerified: true
      }
    ],
    portfolio: [
      {
        id: 'p17',
        type: 'audio',
        title: 'Music Portfolio',
        description: 'Best musical compositions and songs',
        url: 'https://soundcloud.com/priyasharma',
        thumbnailUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Music',
        year: 2023
      }
    ],
    showreel: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    manager: 'Music Management Co.',
    agency: 'Music Management Co.',
    union: 'Music Composers Association',
    contactInfo: {
      preferredMethod: 'phone',
      responseTime: 'Within 24 hours',
      workingHours: '11 AM - 7 PM IST',
      timezone: 'IST'
    },
    socialMedia: {
      instagram: '@priyasharma_music',
      youtube: 'PriyaSharmaMusic'
    },
    aiStudioBadges: [
      {
        id: 'b17',
        name: 'Musical Excellence',
        level: 'Gold',
        category: 'Music',
        earnedDate: '2023-07-15'
      }
    ],
    endorsements: []
  },

  // Editor - Vikram Singh
  {
    id: 'cc18',
    name: 'Vikram Singh',
    username: 'vikramsingh',
    profilePictureUrl: 'https://images.pexels.com/photos/1040883/pexels-photo-1040883.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Editor',
    craft: 'Film Editor',
    category: 'Crew',
    subcategory: 'Editing & Post Production',
    languages: ['Hindi', 'English', 'Punjabi'],
    experience: '11+ years',
    experienceLevel: 'Senior',
    location: 'Chandigarh, India',
    bio: 'Vikram Singh is an experienced film editor known for his precise editing skills and creative storytelling through cuts. He has worked on various genres and formats.',
    isVerified: true,
    isAvailable: true,
    availabilityStatus: 'Available',
    rating: 4.6,
    reviews: 78,
    profileViews: 7600,
    connections: 1200,
    joinedDate: '2019-04-22',
    website: 'https://vikramsingh.com',
    phone: '+91 98765 43281',
    email: 'vikram@24crafts.com',
    isOnline: false,
    lastSeen: '2024-01-20T14:15:00Z',
    skills: ['Film Editing', 'Color Grading', 'Sound Editing', 'Visual Effects', 'Post Production'],
    tools: ['Adobe Premiere', 'Final Cut Pro', 'DaVinci Resolve', 'After Effects', 'Avid Media Composer'],
    awards: [
      {
        id: 'a18',
        name: 'National Film Award - Best Editing',
        category: 'Best Editing',
        year: 2022,
        film: 'Cut to Perfection',
        organization: 'National Film Awards',
        level: 'National'
      }
    ],
    filmography: [
      {
        id: 'f19',
        title: 'Cut to Perfection',
        year: 2022,
        role: 'Editor',
        genre: 'Thriller',
        director: 'Thriller Director',
        productionHouse: 'Cut Films',
        budget: '₹22 Crores',
        boxOffice: '₹55 Crores',
        posterUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        isVerified: true
      }
    ],
    portfolio: [
      {
        id: 'p18',
        type: 'video',
        title: 'Editing Portfolio',
        description: 'Best editing work and post-production projects',
        url: 'https://vimeo.com/vikramsingh',
        thumbnailUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Editing',
        year: 2023
      }
    ],
    showreel: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    manager: 'Post Production Management',
    agency: 'Post Production Management',
    union: 'Film Editors Guild',
    contactInfo: {
      preferredMethod: 'email',
      responseTime: 'Within 36 hours',
      workingHours: '9 AM - 7 PM IST',
      timezone: 'IST'
    },
    socialMedia: {
      instagram: '@vikramsingh_editor',
      linkedin: 'vikram-singh-editor'
    },
    aiStudioBadges: [
      {
        id: 'b18',
        name: 'Editing Mastery',
        level: 'Gold',
        category: 'Editing',
        earnedDate: '2023-08-05'
      }
    ],
    endorsements: []
  },

  // Comedian - Rajesh Gupta
  {
    id: 'cc19',
    name: 'Rajesh Gupta',
    username: 'rajeshgupta',
    profilePictureUrl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Comedian',
    craft: 'Stand-up Comedian & Actor',
    category: 'Cast',
    subcategory: 'Comedians',
    languages: ['Hindi', 'English', 'Haryanvi'],
    experience: '7+ years',
    experienceLevel: 'Mid',
    location: 'Gurgaon, India',
    bio: 'Rajesh Gupta is a popular stand-up comedian and actor known for his witty humor and relatable content. He has performed across India and appeared in several comedy shows and films.',
    isVerified: true,
    isAvailable: true,
    availabilityStatus: 'Available',
    rating: 4.8,
    reviews: 156,
    profileViews: 18900,
    connections: 3200,
    joinedDate: '2021-02-14',
    website: 'https://rajeshgupta.com',
    phone: '+91 98765 43291',
    email: 'rajesh@24crafts.com',
    isOnline: true,
    lastSeen: new Date().toISOString(),
    skills: ['Stand-up Comedy', 'Comedy Acting', 'Script Writing', 'Improv', 'Public Speaking'],
    tools: ['Comedy Writing', 'Performance Skills', 'Audience Engagement'],
    awards: [
      {
        id: 'a19',
        name: 'Comedy Central Award - Best Comedian',
        category: 'Best Comedian',
        year: 2023,
        film: 'Laugh Riot',
        organization: 'Comedy Central',
        level: 'National'
      }
    ],
    filmography: [
      {
        id: 'f20',
        title: 'Laugh Riot',
        year: 2023,
        role: 'Lead Comedian',
        genre: 'Comedy',
        director: 'Comedy Director',
        productionHouse: 'Laugh Films',
        budget: '₹8 Crores',
        boxOffice: '₹25 Crores',
        posterUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        isVerified: true
      }
    ],
    portfolio: [
      {
        id: 'p19',
        type: 'video',
        title: 'Comedy Reel',
        description: 'Best stand-up performances and comedy acts',
        url: 'https://youtube.com/rajeshgupta',
        thumbnailUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Comedy',
        year: 2023
      }
    ],
    showreel: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    manager: 'Comedy Management',
    agency: 'Comedy Management',
    union: 'Comedians Association',
    contactInfo: {
      preferredMethod: 'phone',
      responseTime: 'Within 4 hours',
      workingHours: '12 PM - 10 PM IST',
      timezone: 'IST'
    },
    socialMedia: {
      instagram: '@rajeshgupta_comedy',
      youtube: 'RajeshGuptaComedy'
    },
    aiStudioBadges: [
      {
        id: 'b19',
        name: 'Comedy Excellence',
        level: 'Platinum',
        category: 'Comedy',
        earnedDate: '2023-09-12'
      }
    ],
    endorsements: []
  },

  // Costume Designer - Meera Joshi
  {
    id: 'cc20',
    name: 'Meera Joshi',
    username: 'meerajoshi',
    profilePictureUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Costume Designer',
    craft: 'Costume Designer & Stylist',
    category: 'Crew',
    subcategory: 'Costume Designers',
    languages: ['Hindi', 'English', 'Marathi'],
    experience: '13+ years',
    experienceLevel: 'Senior',
    location: 'Pune, India',
    bio: 'Meera Joshi is a creative costume designer known for her attention to detail and ability to create authentic period costumes. She has worked on historical dramas, contemporary films, and web series.',
    isVerified: true,
    isAvailable: true,
    availabilityStatus: 'Available',
    rating: 4.7,
    reviews: 94,
    profileViews: 11200,
    connections: 1800,
    joinedDate: '2018-07-30',
    website: 'https://meerajoshi.com',
    phone: '+91 98765 43301',
    email: 'meera@24crafts.com',
    isOnline: false,
    lastSeen: '2024-01-20T11:45:00Z',
    skills: ['Costume Design', 'Fashion Styling', 'Period Costumes', 'Fabric Selection', 'Character Styling'],
    tools: ['Design Software', 'Fabric Knowledge', 'Sewing Skills', 'Color Theory'],
    awards: [
      {
        id: 'a20',
        name: 'Filmfare Award - Best Costume Design',
        category: 'Best Costume Design',
        year: 2023,
        film: 'Royal Chronicles',
        organization: 'Filmfare',
        level: 'National'
      }
    ],
    filmography: [
      {
        id: 'f21',
        title: 'Royal Chronicles',
        year: 2023,
        role: 'Costume Designer',
        genre: 'Historical Drama',
        director: 'Historical Director',
        productionHouse: 'Royal Films',
        budget: '₹45 Crores',
        boxOffice: '₹120 Crores',
        posterUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        isVerified: true
      }
    ],
    portfolio: [
      {
        id: 'p20',
        type: 'image',
        title: 'Costume Design Portfolio',
        description: 'Best costume designs and styling work',
        url: 'https://meerajoshi.com/portfolio',
        thumbnailUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Costume Design',
        year: 2023
      }
    ],
    showreel: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    manager: 'Fashion Management',
    agency: 'Fashion Management',
    union: 'Costume Designers Guild',
    contactInfo: {
      preferredMethod: 'email',
      responseTime: 'Within 24 hours',
      workingHours: '10 AM - 6 PM IST',
      timezone: 'IST'
    },
    socialMedia: {
      instagram: '@meerajoshi_costumes',
      linkedin: 'meera-joshi-costume-designer'
    },
    aiStudioBadges: [
      {
        id: 'b20',
        name: 'Design Excellence',
        level: 'Gold',
        category: 'Design',
        earnedDate: '2023-10-08'
      }
    ],
    endorsements: []
  },

  // Choreographer - Anil Kumar
  {
    id: 'cc21',
    name: 'Anil Kumar',
    username: 'anilkumar',
    profilePictureUrl: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Choreographer',
    craft: 'Dance Choreographer',
    category: 'Crew',
    subcategory: 'Choreographers',
    languages: ['Hindi', 'English', 'Telugu'],
    experience: '14+ years',
    experienceLevel: 'Senior',
    location: 'Bangalore, India',
    bio: 'Anil Kumar is a renowned dance choreographer known for his innovative dance sequences and ability to work with diverse dance styles. He has choreographed for films, music videos, and stage shows.',
    isVerified: true,
    isAvailable: true,
    availabilityStatus: 'Available',
    rating: 4.9,
    reviews: 178,
    profileViews: 16700,
    connections: 2800,
    joinedDate: '2017-12-05',
    website: 'https://anilkumar.com',
    phone: '+91 98765 43311',
    email: 'anil@24crafts.com',
    isOnline: true,
    lastSeen: new Date().toISOString(),
    skills: ['Dance Choreography', 'Classical Dance', 'Contemporary Dance', 'Bollywood Dance', 'Stage Direction'],
    tools: ['Dance Techniques', 'Music Knowledge', 'Stage Design', 'Lighting Coordination'],
    awards: [
      {
        id: 'a21',
        name: 'National Film Award - Best Choreography',
        category: 'Best Choreography',
        year: 2023,
        film: 'Dance of Dreams',
        organization: 'National Film Awards',
        level: 'National'
      }
    ],
    filmography: [
      {
        id: 'f22',
        title: 'Dance of Dreams',
        year: 2023,
        role: 'Choreographer',
        genre: 'Musical Drama',
        director: 'Musical Director',
        productionHouse: 'Dance Films',
        budget: '₹30 Crores',
        boxOffice: '₹75 Crores',
        posterUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        isVerified: true
      }
    ],
    portfolio: [
      {
        id: 'p21',
        type: 'video',
        title: 'Choreography Portfolio',
        description: 'Best dance sequences and choreography work',
        url: 'https://youtube.com/anilkumar',
        thumbnailUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Choreography',
        year: 2023
      }
    ],
    showreel: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    manager: 'Dance Management',
    agency: 'Dance Management',
    union: 'Choreographers Association',
    contactInfo: {
      preferredMethod: 'phone',
      responseTime: 'Within 12 hours',
      workingHours: '9 AM - 8 PM IST',
      timezone: 'IST'
    },
    socialMedia: {
      instagram: '@anilkumar_choreographer',
      youtube: 'AnilKumarChoreography'
    },
    aiStudioBadges: [
      {
        id: 'b21',
        name: 'Choreography Mastery',
        level: 'Platinum',
        category: 'Choreography',
        earnedDate: '2023-11-20'
      }
    ],
    endorsements: []
  },

  // VFX Artist - Suresh Reddy
  {
    id: 'cc22',
    name: 'Suresh Reddy',
    username: 'sureshreddy',
    profilePictureUrl: 'https://images.pexels.com/photos/1040883/pexels-photo-1040883.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'VFX Artist',
    craft: 'Visual Effects Supervisor',
    category: 'Crew',
    subcategory: 'VFX & CGI',
    languages: ['English', 'Telugu', 'Hindi'],
    experience: '16+ years',
    experienceLevel: 'Senior',
    location: 'Hyderabad, India',
    bio: 'Suresh Reddy is a skilled VFX artist and supervisor known for his expertise in creating stunning visual effects for films. He specializes in compositing, 3D modeling, and animation.',
    isVerified: true,
    isAvailable: true,
    availabilityStatus: 'Available',
    rating: 4.8,
    reviews: 134,
    profileViews: 14500,
    connections: 2200,
    joinedDate: '2016-09-18',
    website: 'https://sureshreddy.com',
    phone: '+91 98765 43321',
    email: 'suresh@24crafts.com',
    isOnline: false,
    lastSeen: '2024-01-20T15:20:00Z',
    skills: ['Visual Effects', '3D Modeling', 'Compositing', 'Animation', 'Motion Graphics'],
    tools: ['Maya', 'Nuke', 'After Effects', 'Houdini', 'Cinema 4D'],
    awards: [
      {
        id: 'a22',
        name: 'VFX Society Award - Best VFX',
        category: 'Best VFX',
        year: 2023,
        film: 'Digital Dreams',
        organization: 'VFX Society',
        level: 'International'
      }
    ],
    filmography: [
      {
        id: 'f23',
        title: 'Digital Dreams',
        year: 2023,
        role: 'VFX Supervisor',
        genre: 'Sci-Fi',
        director: 'Sci-Fi Director',
        productionHouse: 'Digital Films',
        budget: '₹80 Crores',
        boxOffice: '₹200 Crores',
        posterUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        isVerified: true
      }
    ],
    portfolio: [
      {
        id: 'p22',
        type: 'video',
        title: 'VFX Portfolio',
        description: 'Best visual effects and CGI work',
        url: 'https://vimeo.com/sureshreddy',
        thumbnailUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'VFX',
        year: 2023
      }
    ],
    showreel: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    manager: 'VFX Management',
    agency: 'VFX Management',
    union: 'VFX Artists Guild',
    contactInfo: {
      preferredMethod: 'email',
      responseTime: 'Within 48 hours',
      workingHours: '10 AM - 8 PM IST',
      timezone: 'IST'
    },
    socialMedia: {
      instagram: '@sureshreddy_vfx',
      linkedin: 'suresh-reddy-vfx'
    },
    aiStudioBadges: [
      {
        id: 'b22',
        name: 'VFX Excellence',
        level: 'Platinum',
        category: 'VFX',
        earnedDate: '2023-12-15'
      }
    ],
    endorsements: []
  }
];

export const mockProjectReels: ProjectReel[] = [
  {
    id: 'r1',
    title: 'Action Sequence - Agent',
    thumbnailUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'High-octane action sequence choreographed for the film Agent. Features complex stunts and practical effects.',
    role: 'Lead Actor',
    year: 2023,
    duration: '3:45',
    views: 125000,
    likes: 8900,
    category: 'Acting'
  },
  {
    id: 'r2',
    title: 'Emotional Scene - Vikram',
    thumbnailUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Powerful emotional performance in the climax of Vikram. Showcases range and depth of character portrayal.',
    role: 'Lead Actor',
    year: 2022,
    duration: '2:30',
    views: 89000,
    likes: 12400,
    category: 'Acting'
  },
  {
    id: 'r3',
    title: 'Cinematography Reel',
    thumbnailUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Compilation of cinematographic work across multiple projects showcasing visual storytelling techniques.',
    role: 'Cinematographer',
    year: 2023,
    duration: '4:20',
    views: 67000,
    likes: 5600,
    category: 'Cinematography'
  },
  {
    id: 'r4',
    title: 'Direction Showcase',
    thumbnailUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Behind-the-scenes look at directing style and approach to filmmaking across various genres.',
    role: 'Director',
    year: 2023,
    duration: '5:15',
    views: 45000,
    likes: 3200,
    category: 'Directing'
  },
  {
    id: 'r5',
    title: 'Editing Mastery',
    thumbnailUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Demonstration of editing techniques and narrative pacing across different film genres.',
    role: 'Editor',
    year: 2023,
    duration: '3:00',
    views: 34000,
    likes: 2800,
    category: 'Editing'
  }
];

export const mockPosts: Post[] = [
  {
    id: 'p1',
    author: mockUsers[0],
    content: 'Just wrapped up an incredible 45-day shoot for my upcoming action thriller! The dedication and passion of the entire crew was phenomenal. Special thanks to our amazing director @ananya and the fantastic cinematographer @vikrampatel. \n\nThis project pushed me to my limits both physically and emotionally. From intense action sequences to deeply emotional scenes, every day on set was a learning experience. The stunt coordinators, the lighting crew, the sound team - everyone brought their A-game.\n\nCan\'t wait to share this story with you all. This film is going to be something special! 🎬✨ #FilmMaking #Tollywood #Grateful #TeamWork #ActionThriller',
    imageUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=600',
    timestamp: '2024-01-20T10:30:00Z',
    likes: 234,
    comments: mockComments,
    shares: 12,
    isLiked: true,
    type: 'image',
    tags: ['FilmMaking', 'Tollywood', 'Grateful', 'TeamWork']
  },
  {
    id: 'p2',
    author: mockUsers[1],
    content: 'Excited to announce that my latest short film "Reflections" has been selected for the Cannes Short Film Corner! 🏆\n\nThis 15-minute psychological drama explores themes of identity and memory through the lens of a young woman confronting her past. Shot entirely in natural light over 5 days, it was a true labor of love.\n\nThis wouldn\'t have been possible without my amazing team - every single person who believed in this story when it was just words on paper. From our incredible lead actress to our sound designer who worked magic in post-production.\n\nDreams do come true when you have the right people by your side. Thank you to everyone who supported this journey! Next stop: Cannes! 🎬✨ #Cannes2024 #IndieFilm #Dreams #Grateful #ShortFilm',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    timestamp: '2024-01-19T15:45:00Z',
    likes: 567,
    comments: [
      {
        id: 'cm4',
        author: mockUsers[0],
        content: 'Congratulations! Well deserved recognition for your incredible work.',
        timestamp: '2024-01-19T16:00:00Z',
        likes: 23,
        isLiked: true
      },
      {
        id: 'cm5',
        author: mockUsers[2],
        content: 'So proud of you! Can\'t wait to see it on the big screen.',
        timestamp: '2024-01-19T16:15:00Z',
        likes: 18,
        isLiked: false
      }
    ],
    shares: 34,
    isLiked: false,
    type: 'video',
    tags: ['Cannes2024', 'IndieFilm', 'Dreams', 'Grateful']
  },
  {
    id: 'p3',
    author: mockUsers[2],
    content: 'Behind the scenes from our latest ad campaign shoot for a luxury watch brand. The ARRI Alexa Mini LF paired with vintage Cooke lenses created some absolutely magical visuals. 📸\n\nWe were going for a timeless, elegant feel - something that would make each frame feel like a painting. The vintage glass gave us that beautiful, dreamy quality while the Alexa captured every subtle detail.\n\nSometimes the best shots come from experimenting with different techniques. We used practical lighting - just candles and a single LED panel - to create this intimate, warm atmosphere. The client was blown away by the results!\n\nTechnology + artistry = cinema magic! What\'s your favorite camera setup? Always looking to learn from fellow cinematographers. #Cinematography #ARRI #VintageLenses #BehindTheScenes #CommercialWork',
    imageUrl: 'https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=600',
    timestamp: '2024-01-18T09:15:00Z',
    likes: 189,
    comments: [
      {
        id: 'cm6',
        author: mockUsers[3],
        content: 'Beautiful work! The lighting in this shot is absolutely perfect.',
        timestamp: '2024-01-18T10:00:00Z',
        likes: 15,
        isLiked: false
      }
    ],
    shares: 8,
    isLiked: true,
    type: 'image',
    tags: ['Cinematography', 'ARRI', 'VintageLenses', 'BehindTheScenes']
  },
  {
    id: 'p4',
    author: mockUsers[4],
    content: 'Thrilled to share that our latest production "Midnight Stories" has been greenlit for a second season! 🎭\n\nThe response from audiences has been overwhelming - we\'ve had over 10 million views in just 3 months, and the critical reception has been beyond our wildest dreams. The show has sparked conversations about mental health, relationships, and the human condition.\n\nSeason 2 will dive deeper into the psychological aspects that made Season 1 so compelling. We\'re bringing back the entire cast and adding some incredible new talent. Pre-production starts next month!\n\nThank you to everyone who made this possible - from our incredible cast who brought these complex characters to life, to our dedicated crew who worked 16-hour days to capture every nuance. Here\'s to more stories that matter! 🎭 #MidnightStories #Season2 #Production #Storytelling #WebSeries',
    timestamp: '2024-01-17T14:20:00Z',
    likes: 445,
    comments: [
      {
        id: 'cm7',
        author: mockUsers[1],
        content: 'Amazing news! Can\'t wait to see what stories you tell next.',
        timestamp: '2024-01-17T15:00:00Z',
        likes: 28,
        isLiked: true
      }
    ],
    shares: 67,
    isLiked: false,
    type: 'text',
    tags: ['MidnightStories', 'Season2', 'Production', 'Storytelling']
  },
  {
    id: 'p5',
    author: mockUsers[5],
    content: 'Just finished the final draft of my new screenplay "Echoes of Tomorrow" - a psychological thriller that explores the nature of memory and identity. 📝\n\nThis 120-page script has been a year-long journey of research, writing, and rewriting. I interviewed neuroscientists, psychologists, and people with memory disorders to ensure authenticity. The story follows a woman who begins to question her own memories after a car accident.\n\nThe themes are deeply personal to me - how do we know who we are if we can\'t trust our own memories? What makes us human? It\'s a character-driven thriller that I believe will resonate with audiences.\n\nNow looking for the right director to bring this vision to life. Someone who understands psychological complexity and can handle both intimate character moments and suspenseful sequences. Any recommendations? 📝 #Screenwriting #PsychologicalThriller #NewScript #LookingForDirector #IndependentFilm',
    timestamp: '2024-01-16T11:30:00Z',
    likes: 156,
    comments: [
      {
        id: 'cm8',
        author: mockUsers[6],
        content: 'Sounds intriguing! I\'d love to read the script if you\'re open to it.',
        timestamp: '2024-01-16T12:00:00Z',
        likes: 12,
        isLiked: false
      }
    ],
    shares: 23,
    isLiked: true,
    type: 'text',
    tags: ['Screenwriting', 'PsychologicalThriller', 'NewScript', 'LookingForDirector']
  },
  {
    id: 'p6',
    author: mockUsers[6],
    content: 'Just wrapped the most challenging action sequence of my career! 💥\n\nThis 8-minute single-take fight scene required 3 months of preparation, 47 takes, and an incredible team of stunt coordinators. We used practical effects wherever possible - real explosions, real crashes, real adrenaline.\n\nThe sequence involves a chase through a collapsing building, hand-to-hand combat, and ends with a motorcycle jump. No green screen, no digital doubles - just pure filmmaking craftsmanship.\n\nShoutout to the stunt team who made this possible and kept everyone safe. This is why I love making movies - pushing boundaries and creating something that\'s never been done before! 🎬 #ActionCinema #StuntWork #PracticalEffects #Filmmaking #BehindTheScenes',
    imageUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=600',
    timestamp: '2024-01-15T16:45:00Z',
    likes: 892,
    comments: [
      {
        id: 'cm9',
        author: mockUsers[0],
        content: 'This looks absolutely insane! Can\'t wait to see the final result.',
        timestamp: '2024-01-15T17:00:00Z',
        likes: 45,
        isLiked: false
      }
    ],
    shares: 156,
    isLiked: false,
    type: 'image',
    tags: ['ActionCinema', 'StuntWork', 'PracticalEffects', 'Filmmaking', 'BehindTheScenes']
  },
  {
    id: 'p7',
    author: mockUsers[7],
    content: 'Excited to share that I\'ve been selected as the editor for an upcoming Netflix original series! 🎬\n\nThis project is a 6-episode limited series that blends drama with supernatural elements. The storytelling is non-linear, which means every cut needs to serve both the emotional arc and the mystery.\n\nI\'ll be working with footage from 4 different time periods, each with its own visual language. The challenge is maintaining continuity while keeping the audience engaged and guessing.\n\nPost-production starts next week. Can\'t reveal too much yet, but I can say this: it\'s going to be unlike anything you\'ve seen before. Stay tuned! 📺 #Netflix #PostProduction #Editing #LimitedSeries #ComingSoon',
    timestamp: '2024-01-14T13:20:00Z',
    likes: 324,
    comments: [
      {
        id: 'cm10',
        author: mockUsers[1],
        content: 'Congratulations! Your editing work is always so precise and emotional.',
        timestamp: '2024-01-14T14:00:00Z',
        likes: 18,
        isLiked: true
      }
    ],
    shares: 67,
    isLiked: true,
    type: 'text',
    tags: ['Netflix', 'PostProduction', 'Editing', 'LimitedSeries', 'ComingSoon']
  }
];

export const mockMessages: Message[] = [
  {
    id: 'm1',
    senderId: 'u2',
    receiverId: 'u1',
    content: 'Hey Ravi! I have an exciting project that would be perfect for you. Are you available for a call this week?',
    timestamp: '2024-01-20T14:30:00Z',
    isRead: true,
    type: 'text'
  },
  {
    id: 'm2',
    senderId: 'u1',
    receiverId: 'u2',
    content: 'Absolutely! I\'m always interested in new opportunities. Let\'s schedule something for Thursday afternoon?',
    timestamp: '2024-01-20T16:45:00Z',
    isRead: true,
    type: 'text'
  },
  {
    id: 'm3',
    senderId: 'u2',
    receiverId: 'u1',
    content: 'Perfect! Thursday 3 PM works great. I\'ll send you the script and we can discuss the character in detail.',
    timestamp: '2024-01-20T17:00:00Z',
    isRead: false,
    type: 'text'
  },
  {
    id: 'm4',
    senderId: 'u3',
    receiverId: 'u1',
    content: 'The rushes look fantastic! Great work on those emotional scenes.',
    timestamp: '2024-01-19T20:15:00Z',
    isRead: true,
    type: 'text'
  },
  {
    id: 'm5',
    senderId: 'u1',
    receiverId: 'u3',
    content: 'Thanks! Your cinematography really elevated those moments. The lighting was perfect.',
    timestamp: '2024-01-19T20:30:00Z',
    isRead: true,
    type: 'text'
  },
  {
    id: 'm6',
    senderId: 'u4',
    receiverId: 'u1',
    content: 'I have a casting opportunity that might interest you. It\'s for a leading role in an upcoming thriller.',
    timestamp: '2024-01-18T10:00:00Z',
    isRead: true,
    type: 'text'
  }
];

export const mockConversations: Conversation[] = [
  {
    id: 'c1',
    participants: [mockUsers[1], mockUsers[0]],
    lastMessage: mockMessages[2],
    unreadCount: 1,
    isGroup: false
  },
  {
    id: 'c2',
    participants: [mockUsers[2], mockUsers[0]],
    lastMessage: mockMessages[4],
    unreadCount: 0,
    isGroup: false
  },
  {
    id: 'c3',
    participants: [mockUsers[3], mockUsers[0]],
    lastMessage: mockMessages[5],
    unreadCount: 0,
    isGroup: false
  }
];

export const mockNotifications: Notification[] = [
  {
    id: 'n1',
    type: 'connection_request',
    title: 'New Connection Request',
    message: 'Meera Krishnan wants to connect with you',
    timestamp: '2024-01-20T15:30:00Z',
    isRead: false,
    actionUrl: '/network',
    fromUser: mockUsers[5]
  },
  {
    id: 'n2',
    type: 'job_match',
    title: 'New Job Match',
    message: 'A new cinematographer position matches your profile',
    timestamp: '2024-01-20T12:00:00Z',
    isRead: false,
    actionUrl: '/jobs'
  },
  {
    id: 'n3',
    type: 'like',
    title: 'Post Liked',
    message: 'Vikram Patel liked your recent post',
    timestamp: '2024-01-20T09:15:00Z',
    isRead: true,
    fromUser: mockUsers[2]
  },
  {
    id: 'n4',
    type: 'message',
    title: 'New Message',
    message: 'You have a new message from Ananya Sharma',
    timestamp: '2024-01-20T17:00:00Z',
    isRead: false,
    actionUrl: '/messaging',
    fromUser: mockUsers[1]
  }
];

export const mockConnectionRequests: ConnectionRequest[] = [
  {
    id: 'cr1',
    fromUser: mockUsers[5],
    toUser: mockUsers[0],
    message: 'Hi Ravi, I\'m a big fan of your work. Would love to connect and explore potential collaborations.',
    timestamp: '2024-01-20T15:30:00Z',
    status: 'pending'
  },
  {
    id: 'cr2',
    fromUser: mockUsers[7],
    toUser: mockUsers[0],
    message: 'Hello! I\'m working on a new project and think you\'d be perfect for it. Let\'s connect!',
    timestamp: '2024-01-19T11:20:00Z',
    status: 'pending'
  }
];