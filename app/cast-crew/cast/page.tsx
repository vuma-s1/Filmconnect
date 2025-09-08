'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search, Filter, MapPin, Star, Award, Users, Mic, Music } from 'lucide-react';

// Cast-specific user interface
interface CastUser {
  id: string;
  name: string;
  username: string;
  role: string;
  category: 'Lead Actor' | 'Lead Actress' | 'Supporting Actor' | 'Comedian' | 'Villain' | 'Child Artist' | 'Playback Singer' | 'Dancer';
  location: string;
  profilePictureUrl: string;
  isVerified: boolean;
  bio: string;
  skills: string[];
  experience: string;
  languages: string[];
  rating?: number;
  projects?: number;
  awards?: string[];
  availability: 'Available' | 'Busy' | 'On Project';
  ageRange?: string;
  height?: string;
  specialSkills?: string[];
}

// Mock cast data
const mockCast: CastUser[] = [
  {
    id: 'c1',
    name: 'Rajesh Kumar',
    username: 'rajeshkumar',
    role: 'Lead Actor',
    category: 'Lead Actor',
    location: 'Hyderabad, India',
    profilePictureUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    isVerified: true,
    bio: 'Versatile lead actor with 15+ years of experience in Telugu and Hindi cinema. Known for action-comedy films and method acting.',
    skills: ['Action', 'Comedy', 'Method Acting', 'Telugu', 'Hindi', 'Dance'],
    experience: '15+ years',
    languages: ['Telugu', 'Hindi', 'English'],
    rating: 4.8,
    projects: 45,
    awards: ['Filmfare Award', 'SIIMA Award'],
    availability: 'Available',
    ageRange: '35-40',
    height: '5\'10"',
    specialSkills: ['Martial Arts', 'Stunt Driving', 'Horse Riding']
  },
  {
    id: 'c2',
    name: 'Priya Menon',
    username: 'priyamenon',
    role: 'Actress',
    category: 'Lead Actress',
    location: 'Chennai, India',
    profilePictureUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    isVerified: true,
    bio: 'Award-winning actress specializing in Tamil and Malayalam cinema. Known for powerful character portrayals.',
    skills: ['Drama', 'Character Acting', 'Tamil', 'Malayalam', 'Dance'],
    experience: '12+ years',
    languages: ['Tamil', 'Malayalam', 'English'],
    rating: 4.7,
    projects: 38,
    awards: ['National Award', 'State Award'],
    availability: 'Busy',
    ageRange: '28-32',
    height: '5\'6"',
    specialSkills: ['Classical Dance', 'Singing', 'Accent Training']
  },
  {
    id: 'c3',
    name: 'Arun Varma',
    username: 'arunvarma',
    role: 'Comedian',
    category: 'Comedian',
    location: 'Mumbai, India',
    profilePictureUrl: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
    isVerified: true,
    bio: 'Popular comedian known for his impeccable timing and versatile performances in Hindi and Kannada cinema.',
    skills: ['Comedy', 'Timing', 'Hindi', 'Kannada', 'Improv'],
    experience: '10+ years',
    languages: ['Hindi', 'Kannada', 'English'],
    rating: 4.5,
    projects: 52,
    awards: ['Comedy Award'],
    availability: 'On Project',
    ageRange: '40-45',
    height: '5\'8"',
    specialSkills: ['Stand-up Comedy', 'Improv', 'Voice Modulation']
  },
  {
    id: 'c4',
    name: 'Sneha Patel',
    username: 'snehapatel',
    role: 'Playback Singer',
    category: 'Playback Singer',
    location: 'Ahmedabad, India',
    profilePictureUrl: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    isVerified: true,
    bio: 'Versatile playback singer with a melodious voice. Specializes in Gujarati, Hindi, and English songs.',
    skills: ['Singing', 'Gujarati', 'Hindi', 'English', 'Classical Music'],
    experience: '8+ years',
    languages: ['Gujarati', 'Hindi', 'English'],
    rating: 4.7,
    projects: 89,
    awards: ['Music Award'],
    availability: 'Available',
    ageRange: '25-30',
    height: '5\'4"',
    specialSkills: ['Classical Singing', 'Folk Music', 'Live Performance']
  },
  {
    id: 'c5',
    name: 'Ravi Shankar',
    username: 'ravishankar',
    role: 'Villain',
    category: 'Villain',
    location: 'Bangalore, India',
    profilePictureUrl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    isVerified: false,
    bio: 'Character artist specializing in negative roles. Known for intense performances and screen presence.',
    skills: ['Character Acting', 'Intense Roles', 'Kannada', 'Telugu', 'Hindi'],
    experience: '8+ years',
    languages: ['Kannada', 'Telugu', 'Hindi', 'English'],
    rating: 4.3,
    projects: 34,
    availability: 'Available',
    ageRange: '35-40',
    height: '6\'0"',
    specialSkills: ['Martial Arts', 'Intimidation', 'Voice Acting']
  },
  {
    id: 'c6',
    name: 'Kavya Reddy',
    username: 'kavyareddy',
    role: 'Child Artist',
    category: 'Child Artist',
    location: 'Hyderabad, India',
    profilePictureUrl: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
    isVerified: false,
    bio: 'Young talented actress with natural acting abilities. Has worked in several Telugu films and web series.',
    skills: ['Natural Acting', 'Telugu', 'English', 'Dance'],
    experience: '3+ years',
    languages: ['Telugu', 'English'],
    rating: 4.6,
    projects: 12,
    availability: 'Available',
    ageRange: '12-15',
    height: '5\'2"',
    specialSkills: ['Dancing', 'Singing', 'Emotional Acting']
  }
];

// Cast categories with detailed info
const castCategories = [
  { 
    name: 'Lead Actors', 
    icon: Users, 
    count: 45,
    description: 'Male lead actors for films and series',
    avgExperience: '12+ years',
    topSkills: ['Action', 'Drama', 'Romance', 'Comedy']
  },
  { 
    name: 'Lead Actresses', 
    icon: Users, 
    count: 38,
    description: 'Female lead actresses for films and series',
    avgExperience: '10+ years',
    topSkills: ['Drama', 'Romance', 'Dance', 'Character Acting']
  },
  { 
    name: 'Supporting Actors', 
    icon: Users, 
    count: 67,
    description: 'Supporting male actors for various roles',
    avgExperience: '8+ years',
    topSkills: ['Character Acting', 'Comedy', 'Drama', 'Action']
  },
  { 
    name: 'Comedians', 
    icon: Users, 
    count: 23,
    description: 'Specialized comedy actors and performers',
    avgExperience: '10+ years',
    topSkills: ['Comedy', 'Timing', 'Improv', 'Stand-up']
  },
  { 
    name: 'Villains', 
    icon: Users, 
    count: 19,
    description: 'Character artists specializing in negative roles',
    avgExperience: '9+ years',
    topSkills: ['Intense Acting', 'Character Roles', 'Screen Presence']
  },
  { 
    name: 'Child Artists', 
    icon: Users, 
    count: 12,
    description: 'Young actors for child and teenage roles',
    avgExperience: '3+ years',
    topSkills: ['Natural Acting', 'Dance', 'Singing', 'Emotional Acting']
  },
  { 
    name: 'Playback Singers', 
    icon: Mic, 
    count: 34,
    description: 'Professional singers for film soundtracks',
    avgExperience: '8+ years',
    topSkills: ['Singing', 'Classical Music', 'Live Performance']
  },
  { 
    name: 'Dancers', 
    icon: Music, 
    count: 28,
    description: 'Professional dancers and choreographers',
    avgExperience: '7+ years',
    topSkills: ['Classical Dance', 'Contemporary', 'Choreography']
  }
];

export default function CastPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [selectedExperience, setSelectedExperience] = useState('all');
  const [selectedAvailability, setSelectedAvailability] = useState('all');

  const languages = ['All', 'Telugu', 'Tamil', 'Hindi', 'Malayalam', 'Kannada', 'English', 'Gujarati'];
  const experienceLevels = ['All', 'Entry Level (1-3 years)', 'Mid Level (4-8 years)', 'Senior Level (9-15 years)', 'Expert (15+ years)'];
  const availabilityOptions = ['All', 'Available', 'Busy', 'On Project'];

  const filteredCast = mockCast.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         user.bio.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || user.category === selectedCategory;
    const matchesLanguage = selectedLanguage === 'all' || user.languages.includes(selectedLanguage);
    const matchesExperience = selectedExperience === 'all' || 
                             (selectedExperience === 'Entry Level (1-3 years)' && user.experience.includes('3+')) ||
                             (selectedExperience === 'Mid Level (4-8 years)' && user.experience.includes('8+')) ||
                             (selectedExperience === 'Senior Level (9-15 years)' && user.experience.includes('12+')) ||
                             (selectedExperience === 'Expert (15+ years)' && user.experience.includes('15+'));
    const matchesAvailability = selectedAvailability === 'all' || user.availability === selectedAvailability;

    return matchesSearch && matchesCategory && matchesLanguage && matchesExperience && matchesAvailability;
  });

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'Available': return 'text-green-600 bg-green-100';
      case 'Busy': return 'text-red-600 bg-red-100';
      case 'On Project': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Cast Directory</h1>
            <p className="text-muted-foreground text-lg">
              Discover talented actors, singers, and performers for your next project
            </p>
          </div>

          {/* Search and Filters */}
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search by name, skills, or specializations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Advanced Filters
              </Button>
            </div>

            <div className="flex flex-wrap gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {castCategories.map(category => (
                    <SelectItem key={category.name} value={category.name}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                  {languages.map(lang => (
                    <SelectItem key={lang} value={lang.toLowerCase()}>
                      {lang}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedExperience} onValueChange={setSelectedExperience}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Experience" />
                </SelectTrigger>
                <SelectContent>
                  {experienceLevels.map(level => (
                    <SelectItem key={level} value={level}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedAvailability} onValueChange={setSelectedAvailability}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Availability" />
                </SelectTrigger>
                <SelectContent>
                  {availabilityOptions.map(option => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Cast Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Cast Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {castCategories.map((category, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <category.icon className="h-8 w-8 text-primary" />
                    <div>
                      <CardTitle className="text-lg">{category.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{category.count} professionals</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Avg. Experience:</span>
                      <span className="font-medium">{category.avgExperience}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {category.topSkills.slice(0, 2).map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Cast Professionals */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Cast Professionals ({filteredCast.length})</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Sort by Rating</Button>
              <Button variant="outline" size="sm">Sort by Experience</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCast.map((user) => (
              <Card key={user.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src={user.profilePictureUrl} alt={user.name} />
                      <AvatarFallback className="text-lg">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-lg">{user.name}</h3>
                        {user.isVerified && <Badge variant="secondary" className="text-xs">Verified</Badge>}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{user.role}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {user.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          {user.rating}
                        </div>
                      </div>
                      {user.ageRange && (
                        <div className="text-xs text-muted-foreground">
                          Age: {user.ageRange} • Height: {user.height}
                        </div>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{user.bio}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {user.languages.slice(0, 3).map((lang, index) => (
                      <Badge key={index} variant="outline" className="text-xs">{lang}</Badge>
                    ))}
                  </div>

                  {user.specialSkills && (
                    <div className="mb-3">
                      <p className="text-xs text-muted-foreground mb-1">Special Skills:</p>
                      <div className="flex flex-wrap gap-1">
                        {user.specialSkills.slice(0, 2).map((skill, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <Badge 
                      className={`${getAvailabilityColor(user.availability)} border-0 text-xs`}
                    >
                      {user.availability}
                    </Badge>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>{user.projects} projects</span>
                      {user.awards && user.awards.length > 0 && (
                        <div className="flex items-center gap-1">
                          <Award className="h-3 w-3" />
                          {user.awards.length}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCast.length === 0 && (
            <div className="text-center py-12">
              <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No cast members found</h3>
              <p className="text-muted-foreground">Try adjusting your search criteria or filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
