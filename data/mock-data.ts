import { User, Credit, JobPosting, Post, Conversation, Message, ProjectReel, Notification, ConnectionRequest, Comment } from '@/lib/types';

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

export const mockJobs: JobPosting[] = [
  {
    id: 'j1',
    title: 'Cinematographer for Feature Film',
    productionHouse: 'Mythri Movie Makers',
    location: 'Hyderabad, India',
    roleRequired: 'Cinematographer',
    description: 'Seeking an experienced DOP for a major upcoming feature film with a budget of 50 crores. The film is a period drama set in the 1940s requiring expertise in vintage aesthetics and modern technology.',
    responsibilities: [
      'Manage camera crew of 15+ members',
      'Define film lighting and visual aesthetics',
      'Collaborate with director on shot composition',
      'Ensure continuity across 60-day shooting schedule',
      'Supervise post-production color grading'
    ],
    requiredSkills: ['ARRI Alexa', 'DaVinci Resolve', 'Low-light shooting', 'Period films', 'Team Leadership'],
    jobType: 'Full-time',
    salary: '₹25-35 Lakhs',
    postedDate: '2024-01-15',
    applications: 47,
    deadline: '2024-02-15',
    contactEmail: 'casting@mythrimoviemakers.com',
    experienceLevel: 'Senior',
    isUrgent: true,
    benefits: ['Health Insurance', 'Travel Allowance', 'Equipment Provided', 'Profit Sharing']
  },
  {
    id: 'j2',
    title: 'Female Lead for Web Series',
    productionHouse: 'Annapurna Studios',
    location: 'Hyderabad, India',
    roleRequired: 'Actor',
    description: 'Looking for a female lead, age 20-25, for a Telugu romantic comedy web series. Must be fluent in Telugu and have dance skills. This is a breakthrough role for the right candidate.',
    responsibilities: [
      'Attend script reading sessions',
      'Perform lead role with emotional range',
      'Collaborate with co-actors and director',
      'Participate in promotional activities',
      'Maintain character consistency across episodes'
    ],
    requiredSkills: ['Acting', 'Dancing', 'Telugu', 'Comedy timing', 'Screen presence'],
    jobType: 'Freelance',
    salary: '₹8-12 Lakhs',
    postedDate: '2024-01-18',
    applications: 156,
    deadline: '2024-02-10',
    contactEmail: 'casting@annapurnastudios.com',
    experienceLevel: 'Entry',
    isUrgent: false,
    benefits: ['Portfolio Development', 'Industry Exposure', 'Mentorship']
  },
  {
    id: 'j3',
    title: 'VFX Supervisor - Superhero Film',
    productionHouse: 'Excel Entertainment',
    location: 'Mumbai, India',
    roleRequired: 'VFX Supervisor',
    description: 'Major superhero film needs experienced VFX supervisor to handle complex action sequences and supernatural elements. This is a high-profile project with international standards.',
    responsibilities: [
      'Oversee VFX team of 200+ artists',
      'Coordinate with international VFX vendors',
      'Ensure quality and timeline adherence',
      'Work closely with director and producers',
      'Manage VFX budget of ₹100+ crores'
    ],
    requiredSkills: ['Nuke', 'Maya', 'Houdini', 'Team Management', 'Action VFX', 'Compositing'],
    jobType: 'Full-time',
    salary: '₹40-60 Lakhs',
    postedDate: '2024-01-10',
    applications: 23,
    deadline: '2024-02-05',
    contactEmail: 'vfx@excelentertainment.com',
    experienceLevel: 'Senior',
    isUrgent: true,
    benefits: ['International Exposure', 'Cutting-edge Technology', 'Career Growth']
  },
  {
    id: 'j4',
    title: 'Script Writer - Horror Thriller',
    productionHouse: 'Blumhouse India',
    location: 'Mumbai, India',
    roleRequired: 'Writer',
    description: 'Seeking a talented scriptwriter for a horror thriller series. Must have experience in genre writing and character development. This is part of our expansion into Indian content.',
    responsibilities: [
      'Write episode scripts for 8-part series',
      'Collaborate with story consultants',
      'Attend writers room meetings',
      'Revise scripts based on feedback',
      'Maintain series bible and character arcs'
    ],
    requiredSkills: ['Horror writing', 'Character development', 'Dialogue writing', 'Series format', 'Research'],
    jobType: 'Freelance',
    salary: '₹15-25 Lakhs',
    postedDate: '2024-01-20',
    applications: 89,
    deadline: '2024-02-20',
    contactEmail: 'writers@blumhouseindia.com',
    experienceLevel: 'Mid',
    isUrgent: false,
    benefits: ['Creative Freedom', 'International Platform', 'Residuals']
  },
  {
    id: 'j5',
    title: 'Music Director - Romantic Drama',
    productionHouse: 'T-Series',
    location: 'Mumbai, India',
    roleRequired: 'Music Director',
    description: 'Established production house seeking music director for upcoming romantic drama. Looking for fresh sound that appeals to both traditional and modern audiences.',
    responsibilities: [
      'Compose background score and songs',
      'Collaborate with lyricists and singers',
      'Supervise recording sessions',
      'Work with sound design team',
      'Deliver final mix for theatrical release'
    ],
    requiredSkills: ['Music Composition', 'Orchestration', 'Digital Audio Workstation', 'Hindi Music', 'Collaboration'],
    jobType: 'Freelance',
    salary: '₹20-30 Lakhs',
    postedDate: '2024-01-12',
    applications: 67,
    deadline: '2024-02-12',
    contactEmail: 'music@tseries.com',
    experienceLevel: 'Mid',
    isUrgent: false,
    benefits: ['Royalties', 'Music Rights', 'Industry Recognition']
  },
  {
    id: 'j6',
    title: 'Assistant Director - Action Film',
    productionHouse: 'Dharma Productions',
    location: 'Mumbai, India',
    roleRequired: 'Assistant Director',
    description: 'Seeking dedicated assistant director for high-budget action film. Great opportunity to work with A-list talent and learn from industry veterans.',
    responsibilities: [
      'Assist director in pre-production planning',
      'Coordinate with various departments',
      'Manage shooting schedules',
      'Handle crowd control and extras',
      'Maintain continuity notes'
    ],
    requiredSkills: ['Film Production', 'Organization', 'Communication', 'Problem Solving', 'Leadership'],
    jobType: 'Full-time',
    salary: '₹8-12 Lakhs',
    postedDate: '2024-01-16',
    applications: 234,
    deadline: '2024-02-08',
    contactEmail: 'ad@dharmaproductions.com',
    experienceLevel: 'Entry',
    isUrgent: false,
    benefits: ['Industry Learning', 'Networking', 'Career Advancement']
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