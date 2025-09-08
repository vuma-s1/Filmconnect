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
  ArrowLeft,
  Users,
  Briefcase,
  Calendar,
  MessageCircle,
  Heart,
  Share2
} from 'lucide-react';
import Link from 'next/link';

// Department-specific user interface
interface DepartmentUser {
  id: string;
  name: string;
  username: string;
  role: string;
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
  hourlyRate?: string;
  dailyRate?: string;
  specialties?: string[];
}

// Department information
interface DepartmentInfo {
  name: string;
  description: string;
  icon: string;
  totalProfessionals: number;
  avgExperience: string;
  topSkills: string[];
  commonEquipment: string[];
  typicalRoles: string[];
  industryStandards: string[];
  careerPath: string[];
}

// Mock department data
const departmentInfo: Record<string, DepartmentInfo> = {
  'lighting': {
    name: 'Lighting Department',
    description: 'The lighting department is responsible for creating the visual mood and atmosphere of a film through strategic lighting design. They work closely with the cinematographer to achieve the desired look and feel.',
    icon: '⚡',
    totalProfessionals: 123,
    avgExperience: '9+ years',
    topSkills: ['Lighting Design', 'Equipment Setup', 'Safety Protocols', 'Color Temperature', 'Power Management'],
    commonEquipment: ['ARRI SkyPanel', 'Kino Flo', 'HMI Lights', 'LED Panels', 'Grip Equipment', 'Cables'],
    typicalRoles: ['Chief Gaffer', 'Best Boy Electric', 'Lighting Assistant', 'Generator Operator', 'Cable Puller'],
    industryStandards: ['Electrical Safety', 'Equipment Maintenance', 'Power Distribution', 'Lighting Techniques'],
    careerPath: ['Cable Puller → Lighting Assistant → Best Boy Electric → Chief Gaffer → Director of Photography']
  },
  'cinematography': {
    name: 'Cinematography Department',
    description: 'The cinematography department captures the visual story of the film. They are responsible for camera work, shot composition, and working with the director to achieve the visual vision.',
    icon: '🎥',
    totalProfessionals: 89,
    avgExperience: '12+ years',
    topSkills: ['Camera Operation', 'Shot Composition', 'Visual Storytelling', 'Color Grading', 'Lens Selection'],
    commonEquipment: ['ARRI Alexa', 'RED Camera', 'Sony FX', 'Various Lenses', 'Tripods', 'Gimbals'],
    typicalRoles: ['Director of Photography', 'Camera Operator', 'Focus Puller', 'Camera Assistant', 'Digital Imaging Technician'],
    industryStandards: ['Camera Techniques', 'Shot Composition', 'Color Theory', 'Equipment Operation'],
    careerPath: ['Camera Assistant → Focus Puller → Camera Operator → Director of Photography']
  },
  'sound': {
    name: 'Sound Department',
    description: 'The sound department is responsible for recording clean, high-quality audio during production and creating the final sound mix in post-production.',
    icon: '🎤',
    totalProfessionals: 78,
    avgExperience: '8+ years',
    topSkills: ['Sound Recording', 'Audio Mixing', 'Equipment Operation', 'Noise Reduction', 'Synchronization'],
    commonEquipment: ['Boom Microphones', 'Wireless Systems', 'Mixers', 'Recorders', 'Headphones', 'Cables'],
    typicalRoles: ['Sound Mixer', 'Boom Operator', 'Sound Assistant', 'Playback Operator', 'Utility Sound'],
    industryStandards: ['Audio Quality', 'Equipment Maintenance', 'Synchronization', 'Noise Management'],
    careerPath: ['Sound Assistant → Boom Operator → Sound Mixer → Sound Designer']
  }
};

// Mock users for lighting department
const mockLightingUsers: DepartmentUser[] = [
  {
    id: 'l1',
    name: 'Anil Sharma',
    username: 'anilsharma',
    role: 'Chief Gaffer',
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
    union: 'Film Workers Union',
    hourlyRate: '₹2,500',
    dailyRate: '₹15,000',
    specialties: ['Action Sequences', 'Period Films', 'Low Light Shooting']
  },
  {
    id: 'l2',
    name: 'Suresh Iyer',
    username: 'sureshiyer',
    role: 'Best Boy Electric',
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
    union: 'Karnataka Film Workers Union',
    hourlyRate: '₹1,800',
    dailyRate: '₹12,000',
    specialties: ['Large Scale Productions', 'Action Sequences', 'Equipment Maintenance']
  },
  {
    id: 'l3',
    name: 'Meera Joshi',
    username: 'meerajoshi',
    role: 'Lighting Assistant',
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
    union: 'Maharashtra Film Workers Union',
    hourlyRate: '₹800',
    dailyRate: '₹5,000',
    specialties: ['Indie Films', 'Documentaries', 'Learning New Techniques']
  }
];

export default function DepartmentPage({ params }: { params: { department: string } }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');
  const [selectedExperience, setSelectedExperience] = useState('all');
  const [selectedAvailability, setSelectedAvailability] = useState('all');
  const [selectedRate, setSelectedRate] = useState('all');

  const department = params.department;
  const deptInfo = departmentInfo[department] || departmentInfo['lighting'];
  const users = mockLightingUsers; // In real app, fetch based on department

  const experienceLevels = ['All', 'Entry Level (1-3 years)', 'Mid Level (4-8 years)', 'Senior Level (9-15 years)', 'Expert (15+ years)'];
  const availabilityOptions = ['All', 'Available', 'Busy', 'On Project'];
  const rateOptions = ['All', 'Under ₹1,000/hr', '₹1,000-2,000/hr', '₹2,000-3,000/hr', 'Above ₹3,000/hr'];

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         user.bio.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesRole = selectedRole === 'all' || user.role === selectedRole;
    const matchesExperience = selectedExperience === 'all' || 
                             (selectedExperience === 'Entry Level (1-3 years)' && user.experience.includes('2+')) ||
                             (selectedExperience === 'Mid Level (4-8 years)' && user.experience.includes('8+')) ||
                             (selectedExperience === 'Senior Level (9-15 years)' && user.experience.includes('12+')) ||
                             (selectedExperience === 'Expert (15+ years)' && user.experience.includes('20+'));
    const matchesAvailability = selectedAvailability === 'all' || user.availability === selectedAvailability;
    const matchesRate = selectedRate === 'all' || 
                       (selectedRate === 'Under ₹1,000/hr' && user.hourlyRate && parseInt(user.hourlyRate.replace('₹', '').replace(',', '')) < 1000) ||
                       (selectedRate === '₹1,000-2,000/hr' && user.hourlyRate && parseInt(user.hourlyRate.replace('₹', '').replace(',', '')) >= 1000 && parseInt(user.hourlyRate.replace('₹', '').replace(',', '')) <= 2000) ||
                       (selectedRate === '₹2,000-3,000/hr' && user.hourlyRate && parseInt(user.hourlyRate.replace('₹', '').replace(',', '')) > 2000 && parseInt(user.hourlyRate.replace('₹', '').replace(',', '')) <= 3000) ||
                       (selectedRate === 'Above ₹3,000/hr' && user.hourlyRate && parseInt(user.hourlyRate.replace('₹', '').replace(',', '')) > 3000);

    return matchesSearch && matchesRole && matchesExperience && matchesAvailability && matchesRate;
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
          <div className="flex items-center gap-4 mb-6">
            <Link href="/cast-crew">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Directory
              </Button>
            </Link>
          </div>

          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{deptInfo.icon}</div>
            <h1 className="text-4xl font-bold mb-4">{deptInfo.name}</h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              {deptInfo.description}
            </p>
          </div>

          {/* Department Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-4 text-center">
                <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
                <h3 className="font-semibold">{deptInfo.totalProfessionals}</h3>
                <p className="text-sm text-muted-foreground">Professionals</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Briefcase className="h-8 w-8 mx-auto mb-2 text-primary" />
                <h3 className="font-semibold">{deptInfo.avgExperience}</h3>
                <p className="text-sm text-muted-foreground">Avg. Experience</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Award className="h-8 w-8 mx-auto mb-2 text-primary" />
                <h3 className="font-semibold">{deptInfo.typicalRoles.length}</h3>
                <p className="text-sm text-muted-foreground">Roles</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Calendar className="h-8 w-8 mx-auto mb-2 text-primary" />
                <h3 className="font-semibold">24/7</h3>
                <p className="text-sm text-muted-foreground">Availability</p>
              </CardContent>
            </Card>
          </div>

          {/* Search and Filters */}
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder={`Search ${deptInfo.name.toLowerCase()} professionals...`}
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
              <Select value={selectedRole} onValueChange={setSelectedRole}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Roles</SelectItem>
                  {deptInfo.typicalRoles.map(role => (
                    <SelectItem key={role} value={role}>
                      {role}
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

              <Select value={selectedRate} onValueChange={setSelectedRate}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Rate Range" />
                </SelectTrigger>
                <SelectContent>
                  {rateOptions.map(option => (
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
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Department Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Department Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Top Skills</h4>
                  <div className="flex flex-wrap gap-1">
                    {deptInfo.topSkills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs">{skill}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Common Equipment</h4>
                  <div className="flex flex-wrap gap-1">
                    {deptInfo.commonEquipment.map((equipment, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">{equipment}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Typical Roles</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {deptInfo.typicalRoles.map((role, index) => (
                      <li key={index}>• {role}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Career Path</h4>
                  <p className="text-sm text-muted-foreground">{deptInfo.careerPath[0]}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Industry Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  {deptInfo.industryStandards.map((standard, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      {standard}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Right Content - Professionals */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">{deptInfo.name} Professionals ({filteredUsers.length})</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Sort by Rating</Button>
                <Button variant="outline" size="sm">Sort by Rate</Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredUsers.map((user) => (
                <Card key={user.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={user.profilePictureUrl} alt={user.name} />
                        <AvatarFallback>
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold">{user.name}</h3>
                          {user.isVerified && <Badge variant="secondary" className="text-xs">Verified</Badge>}
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">{user.role}</p>
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

                    {user.specialties && (
                      <div className="mb-3">
                        <p className="text-xs text-muted-foreground mb-1">Specialties:</p>
                        <div className="flex flex-wrap gap-1">
                          {user.specialties.slice(0, 2).map((specialty, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">{specialty}</Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between mb-3">
                      <Badge 
                        className={`${getAvailabilityColor(user.availability)} border-0 text-xs`}
                      >
                        {user.availability}
                      </Badge>
                      <div className="text-right">
                        {user.hourlyRate && (
                          <p className="text-sm font-medium">{user.hourlyRate}/hr</p>
                        )}
                        {user.dailyRate && (
                          <p className="text-xs text-muted-foreground">{user.dailyRate}/day</p>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Contact
                      </Button>
                      <Button variant="outline" size="sm">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredUsers.length === 0 && (
              <div className="text-center py-12">
                <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">No professionals found</h3>
                <p className="text-muted-foreground">Try adjusting your search criteria or filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

