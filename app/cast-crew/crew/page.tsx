'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Search, 
  Filter, 
  MapPin, 
  Star, 
  Award, 
  Camera, 
  Mic, 
  Scissors, 
  Music, 
  Palette, 
  Wrench,
  Users,
  Briefcase,
  Zap,
  Shield,
  Truck,
  Utensils,
  Globe,
  Film,
  Headphones,
  Brush,
  Hammer,
  Car,
  Building
} from 'lucide-react';

// Crew-specific user interface
interface CrewUser {
  id: string;
  name: string;
  username: string;
  role: string;
  department: string;
  subRole?: string;
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
  equipment?: string[];
  certifications?: string[];
  union?: string;
}

// Mock crew data
const mockCrew: CrewUser[] = [
  {
    id: 'cr1',
    name: 'Anil Sharma',
    username: 'anilsharma',
    role: 'Chief Gaffer',
    department: 'Lighting Department',
    subRole: 'Head of Lighting',
    location: 'Mumbai, India',
    profilePictureUrl: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    isVerified: true,
    bio: 'Chief gaffer with 20+ years of experience in Bollywood and Telugu films. Expert in ARRI and RED camera setups with extensive knowledge of lighting techniques.',
    skills: ['ARRI Lighting', 'RED Camera', 'LED Panels', 'Grip Work', 'Team Management', 'Safety Protocols'],
    experience: '20+ years',
    languages: ['Hindi', 'Telugu', 'English'],
    rating: 4.9,
    projects: 120,
    awards: ['Guild Recognition', 'Technical Excellence Award'],
    availability: 'Available',
    equipment: ['ARRI SkyPanel', 'Kino Flo', 'HMI Lights', 'Grip Equipment'],
    certifications: ['Electrical Safety', 'Advanced Lighting Techniques'],
    union: 'Film Workers Union'
  },
  {
    id: 'cr2',
    name: 'Suresh Iyer',
    username: 'sureshiyer',
    role: 'Best Boy Electric',
    department: 'Lighting Department',
    subRole: 'Assistant Gaffer',
    location: 'Bangalore, India',
    profilePictureUrl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    isVerified: false,
    bio: 'Experienced best boy electric with expertise in handling complex lighting setups for action sequences and large-scale productions.',
    skills: ['Electrical Work', 'ARRI Setup', 'Safety Protocols', 'Equipment Maintenance', 'Cable Management'],
    experience: '8+ years',
    languages: ['Kannada', 'Hindi', 'English'],
    rating: 4.6,
    projects: 67,
    availability: 'Available',
    equipment: ['Electrical Tools', 'Cable Management', 'Safety Equipment'],
    certifications: ['Electrical Safety', 'Equipment Handling'],
    union: 'Karnataka Film Workers Union'
  },
  {
    id: 'cr3',
    name: 'Meera Joshi',
    username: 'meerajoshi',
    role: 'Lighting Assistant',
    department: 'Lighting Department',
    subRole: 'Junior Lighting Technician',
    location: 'Pune, India',
    profilePictureUrl: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
    isVerified: false,
    bio: 'Emerging lighting assistant with 5 projects under her belt. Quick learner and dedicated team player with a passion for cinematography.',
    skills: ['Basic Lighting', 'Equipment Setup', 'Cable Management', 'Learning', 'Team Work'],
    experience: '2+ years',
    languages: ['Marathi', 'Hindi', 'English'],
    rating: 4.2,
    projects: 5,
    availability: 'Available',
    equipment: ['Basic Lighting Kit', 'Cables', 'Grip Equipment'],
    union: 'Maharashtra Film Workers Union'
  },
  {
    id: 'cr4',
    name: 'Vikram Patel',
    username: 'vikrampatel',
    role: 'Cinematographer',
    department: 'Cinematography',
    subRole: 'Director of Photography',
    location: 'Chennai, India',
    profilePictureUrl: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
    isVerified: true,
    bio: 'Award-winning cinematographer specializing in visual storytelling and innovative camera work. Expert in both digital and film formats.',
    skills: ['Cinematography', 'ARRI Alexa', 'DaVinci Resolve', 'Low-light shooting', 'Drone Operation', 'Color Grading'],
    experience: '8+ years',
    languages: ['Tamil', 'Hindi', 'English'],
    rating: 4.9,
    projects: 67,
    awards: ['National Award for Cinematography', 'Filmfare Award'],
    availability: 'Busy',
    equipment: ['ARRI Alexa Mini', 'RED Camera', 'Drone', 'Lenses'],
    certifications: ['Advanced Cinematography', 'Drone Operation License'],
    union: 'South Indian Cinematographers Association'
  },
  {
    id: 'cr5',
    name: 'Priya Nair',
    username: 'priyanair',
    role: 'Casting Director',
    department: 'Production Management',
    subRole: 'Head of Casting',
    location: 'Bangalore, India',
    profilePictureUrl: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    isVerified: true,
    bio: 'Experienced casting director with an eye for fresh talent and perfect character fits. Specialized in finding authentic performers for diverse roles.',
    skills: ['Talent Scouting', 'Character Analysis', 'Network Building', 'Audition Management', 'Negotiation'],
    experience: '12+ years',
    languages: ['Kannada', 'Hindi', 'English', 'Tamil'],
    rating: 4.7,
    projects: 89,
    awards: ['Best Casting Director Award'],
    availability: 'Available',
    certifications: ['Casting Techniques', 'Talent Management'],
    union: 'Indian Casting Directors Association'
  },
  {
    id: 'cr6',
    name: 'Arjun Reddy',
    username: 'arjunreddy',
    role: 'Producer',
    department: 'Production Management',
    subRole: 'Executive Producer',
    location: 'Hyderabad, India',
    profilePictureUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    isVerified: true,
    bio: 'Independent film producer with a track record of successful commercial and art films. Passionate about supporting emerging talent.',
    skills: ['Film Production', 'Budget Management', 'Distribution', 'Script Development', 'Team Leadership', 'Marketing'],
    experience: '15+ years',
    languages: ['Telugu', 'Hindi', 'English'],
    rating: 4.8,
    projects: 112,
    awards: ['Best Producer Award', 'Box Office Success Award'],
    availability: 'On Project',
    certifications: ['Film Production Management', 'Business Development'],
    union: 'Telugu Film Producers Council'
  }
];

// 24 Crafts - Crew departments with detailed info
const crewDepartments = [
  { 
    name: 'Directors & ADs', 
    icon: Camera, 
    count: 45,
    description: 'Film directors and assistant directors',
    avgExperience: '10+ years',
    topSkills: ['Direction', 'Script Analysis', 'Team Management']
  },
  { 
    name: 'Writers', 
    icon: Users, 
    count: 67,
    description: 'Script writers, dialogue writers, and lyricists',
    avgExperience: '8+ years',
    topSkills: ['Script Writing', 'Dialogue', 'Story Development']
  },
  { 
    name: 'Cinematographers', 
    icon: Camera, 
    count: 89,
    description: 'Directors of photography and camera operators',
    avgExperience: '12+ years',
    topSkills: ['Cinematography', 'Camera Operation', 'Visual Storytelling']
  },
  { 
    name: 'Lighting Department', 
    icon: Zap, 
    count: 123,
    description: 'Gaffers, best boys, and lighting technicians',
    avgExperience: '9+ years',
    topSkills: ['Lighting Design', 'Equipment Setup', 'Safety Protocols']
  },
  { 
    name: 'Sound Department', 
    icon: Mic, 
    count: 78,
    description: 'Sound engineers, boom operators, and mixers',
    avgExperience: '8+ years',
    topSkills: ['Sound Recording', 'Audio Mixing', 'Equipment Operation']
  },
  { 
    name: 'Editing & Post', 
    icon: Scissors, 
    count: 56,
    description: 'Film editors and post-production specialists',
    avgExperience: '10+ years',
    topSkills: ['Video Editing', 'Color Grading', 'Post Production']
  },
  { 
    name: 'VFX & CGI', 
    icon: Film, 
    count: 34,
    description: 'Visual effects artists and CGI specialists',
    avgExperience: '7+ years',
    topSkills: ['VFX', '3D Animation', 'Compositing']
  },
  { 
    name: 'Music Composers', 
    icon: Music, 
    count: 45,
    description: 'Music directors and composers',
    avgExperience: '11+ years',
    topSkills: ['Music Composition', 'Orchestration', 'Sound Design']
  },
  { 
    name: 'Costume Designers', 
    icon: Palette, 
    count: 23,
    description: 'Costume designers and wardrobe specialists',
    avgExperience: '8+ years',
    topSkills: ['Costume Design', 'Fashion', 'Period Costumes']
  },
  { 
    name: 'Makeup & Prosthetics', 
    icon: Brush, 
    count: 34,
    description: 'Makeup artists and prosthetic specialists',
    avgExperience: '6+ years',
    topSkills: ['Makeup Artistry', 'Prosthetics', 'Special Effects']
  },
  { 
    name: 'Stunts & Action', 
    icon: Shield, 
    count: 56,
    description: 'Stunt coordinators and action specialists',
    avgExperience: '12+ years',
    topSkills: ['Stunt Coordination', 'Safety', 'Action Choreography']
  },
  { 
    name: 'Choreographers', 
    icon: Users, 
    count: 28,
    description: 'Dance choreographers and movement directors',
    avgExperience: '9+ years',
    topSkills: ['Dance Choreography', 'Movement Direction', 'Performance']
  },
  { 
    name: 'Production Management', 
    icon: Briefcase, 
    count: 45,
    description: 'Producers, line producers, and production managers',
    avgExperience: '13+ years',
    topSkills: ['Production Management', 'Budget Control', 'Team Leadership']
  },
  { 
    name: 'Art Department', 
    icon: Palette, 
    count: 67,
    description: 'Production designers and art directors',
    avgExperience: '10+ years',
    topSkills: ['Production Design', 'Set Design', 'Art Direction']
  },
  { 
    name: 'Set Construction', 
    icon: Hammer, 
    count: 89,
    description: 'Carpenters, painters, and construction crew',
    avgExperience: '8+ years',
    topSkills: ['Carpentry', 'Painting', 'Construction']
  },
  { 
    name: 'Grips & Riggers', 
    icon: Wrench, 
    count: 78,
    description: 'Grip equipment specialists and riggers',
    avgExperience: '7+ years',
    topSkills: ['Grip Work', 'Rigging', 'Equipment Setup']
  },
  { 
    name: 'Transport Crew', 
    icon: Truck, 
    count: 34,
    description: 'Transport coordinators and drivers',
    avgExperience: '5+ years',
    topSkills: ['Logistics', 'Vehicle Management', 'Route Planning']
  },
  { 
    name: 'Catering & Hospitality', 
    icon: Utensils, 
    count: 23,
    description: 'Catering services and hospitality management',
    avgExperience: '6+ years',
    topSkills: ['Catering', 'Hospitality', 'Event Management']
  },
  { 
    name: 'Security & Crowd Control', 
    icon: Shield, 
    count: 45,
    description: 'Security personnel and crowd management',
    avgExperience: '8+ years',
    topSkills: ['Security', 'Crowd Control', 'Safety Management']
  },
  { 
    name: 'Publicity & PR', 
    icon: Globe, 
    count: 34,
    description: 'Public relations and marketing specialists',
    avgExperience: '7+ years',
    topSkills: ['Public Relations', 'Marketing', 'Media Management']
  },
  { 
    name: 'Distribution & Marketing', 
    icon: Users, 
    count: 28,
    description: 'Distribution and marketing professionals',
    avgExperience: '9+ years',
    topSkills: ['Distribution', 'Marketing Strategy', 'Sales']
  },
  { 
    name: 'Exhibition & Theatre', 
    icon: Building, 
    count: 19,
    description: 'Theatre managers and exhibition specialists',
    avgExperience: '10+ years',
    topSkills: ['Theatre Management', 'Exhibition', 'Customer Service']
  },
  { 
    name: 'Animation Teams', 
    icon: Film, 
    count: 56,
    description: '2D and 3D animation specialists',
    avgExperience: '6+ years',
    topSkills: ['2D Animation', '3D Animation', 'Character Design']
  },
  { 
    name: 'Daily-Wage Support', 
    icon: Users, 
    count: 123,
    description: 'Daily wage workers and support staff',
    avgExperience: '3+ years',
    topSkills: ['General Support', 'Manual Work', 'Team Assistance']
  }
];

export default function CrewPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [selectedExperience, setSelectedExperience] = useState('all');
  const [selectedAvailability, setSelectedAvailability] = useState('all');

  const languages = ['All', 'Telugu', 'Tamil', 'Hindi', 'Malayalam', 'Kannada', 'English', 'Marathi', 'Gujarati'];
  const experienceLevels = ['All', 'Entry Level (1-3 years)', 'Mid Level (4-8 years)', 'Senior Level (9-15 years)', 'Expert (15+ years)'];
  const availabilityOptions = ['All', 'Available', 'Busy', 'On Project'];

  const filteredCrew = mockCrew.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         user.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.department.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDepartment = selectedDepartment === 'all' || user.department === selectedDepartment;
    const matchesLanguage = selectedLanguage === 'all' || user.languages.includes(selectedLanguage);
    const matchesExperience = selectedExperience === 'all' || 
                             (selectedExperience === 'Entry Level (1-3 years)' && user.experience.includes('2+')) ||
                             (selectedExperience === 'Mid Level (4-8 years)' && user.experience.includes('8+')) ||
                             (selectedExperience === 'Senior Level (9-15 years)' && user.experience.includes('12+')) ||
                             (selectedExperience === 'Expert (15+ years)' && user.experience.includes('20+'));
    const matchesAvailability = selectedAvailability === 'all' || user.availability === selectedAvailability;

    return matchesSearch && matchesDepartment && matchesLanguage && matchesExperience && matchesAvailability;
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
            <h1 className="text-4xl font-bold mb-4">Crew Directory</h1>
            <p className="text-muted-foreground text-lg">
              Discover skilled professionals across all 24 crafts of filmmaking
            </p>
          </div>

          {/* Search and Filters */}
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search by name, department, skills, or equipment..."
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
              <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                <SelectTrigger className="w-[220px]">
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  {crewDepartments.map(department => (
                    <SelectItem key={department.name} value={department.name}>
                      {department.name}
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
        {/* 24 Crafts - Crew Departments */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">24 Crafts - Crew Departments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {crewDepartments.map((department, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <department.icon className="h-6 w-6 text-primary" />
                    <div>
                      <CardTitle className="text-sm">{department.name}</CardTitle>
                      <p className="text-xs text-muted-foreground">{department.count} professionals</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs text-muted-foreground mb-2">{department.description}</p>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Avg. Experience:</span>
                      <span className="font-medium">{department.avgExperience}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {department.topSkills.slice(0, 2).map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Crew Professionals */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Crew Professionals ({filteredCrew.length})</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Sort by Rating</Button>
              <Button variant="outline" size="sm">Sort by Experience</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCrew.map((user) => (
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
                      <p className="text-sm text-muted-foreground mb-1">{user.role}</p>
                      <p className="text-xs text-muted-foreground mb-2">{user.department}</p>
                      {user.subRole && (
                        <p className="text-xs text-muted-foreground mb-2">{user.subRole}</p>
                      )}
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {user.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          {user.rating}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{user.bio}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {user.skills.slice(0, 3).map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs">{skill}</Badge>
                    ))}
                  </div>

                  {user.equipment && user.equipment.length > 0 && (
                    <div className="mb-3">
                      <p className="text-xs text-muted-foreground mb-1">Equipment:</p>
                      <div className="flex flex-wrap gap-1">
                        {user.equipment.slice(0, 2).map((equipment, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">{equipment}</Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {user.union && (
                    <div className="mb-3">
                      <p className="text-xs text-muted-foreground">Union: {user.union}</p>
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

          {filteredCrew.length === 0 && (
            <div className="text-center py-12">
              <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No crew members found</h3>
              <p className="text-muted-foreground">Try adjusting your search criteria or filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
