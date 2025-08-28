"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { 
  Camera, 
  Plus, 
  X, 
  Save, 
  User, 
  MapPin, 
  Briefcase, 
  GraduationCap,
  Award,
  Globe,
  Phone,
  Mail,
  Star,
  CheckCircle
} from 'lucide-react';
import { mockUsers } from '@/data/mock-data';

export default function EditProfilePage() {
  const [activeTab, setActiveTab] = useState('basic');
  const [isLoading, setIsLoading] = useState(false);
  const [profileData, setProfileData] = useState({
    ...mockUsers[0],
    education: [
      { id: '1', institution: 'Film Institute', degree: 'Bachelor in Film Studies', year: '2015-2019' }
    ],
    certifications: [
      { id: '1', name: 'Advanced Cinematography', issuer: 'Film Academy', year: '2020' }
    ],
    languages: [
      { id: '1', language: 'English', proficiency: 'Native' },
      { id: '2', language: 'Hindi', proficiency: 'Fluent' }
    ]
  });

  const [newSkill, setNewSkill] = useState('');
  const [newEducation, setNewEducation] = useState({ institution: '', degree: '', year: '' });
  const [newCertification, setNewCertification] = useState({ name: '', issuer: '', year: '' });
  const [newLanguage, setNewLanguage] = useState({ language: '', proficiency: '' });

  const handleSave = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Handle save logic here
    }, 2000);
  };

  const addSkill = () => {
    if (newSkill.trim() && !profileData.skills.includes(newSkill)) {
      setProfileData({
        ...profileData,
        skills: [...profileData.skills, newSkill.trim()]
      });
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setProfileData({
      ...profileData,
      skills: profileData.skills.filter(skill => skill !== skillToRemove)
    });
  };

  const addEducation = () => {
    if (newEducation.institution && newEducation.degree && newEducation.year) {
      setProfileData({
        ...profileData,
        education: [...profileData.education, { ...newEducation, id: Date.now().toString() }]
      });
      setNewEducation({ institution: '', degree: '', year: '' });
    }
  };

  const removeEducation = (id: string) => {
    setProfileData({
      ...profileData,
      education: profileData.education.filter(edu => edu.id !== id)
    });
  };

  const addCertification = () => {
    if (newCertification.name && newCertification.issuer && newCertification.year) {
      setProfileData({
        ...profileData,
        certifications: [...profileData.certifications, { ...newCertification, id: Date.now().toString() }]
      });
      setNewCertification({ name: '', issuer: '', year: '' });
    }
  };

  const removeCertification = (id: string) => {
    setProfileData({
      ...profileData,
      certifications: profileData.certifications.filter(cert => cert.id !== id)
    });
  };

  const addLanguage = () => {
    if (newLanguage.language && newLanguage.proficiency) {
      setProfileData({
        ...profileData,
        languages: [...profileData.languages, { ...newLanguage, id: Date.now().toString() }]
      });
      setNewLanguage({ language: '', proficiency: '' });
    }
  };

  const removeLanguage = (id: string) => {
    setProfileData({
      ...profileData,
      languages: profileData.languages.filter(lang => lang.id !== id)
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Edit Profile</h1>
          <p className="text-muted-foreground">
            Update your professional information and showcase your expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="basic">Basic Info</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="contact">Contact</TabsTrigger>
              </TabsList>

              <TabsContent value="basic" className="space-y-6">
                {/* Profile Picture */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Camera className="h-5 w-5" />
                      <span>Profile Picture</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-20 w-20">
                        <AvatarImage src={profileData.profilePictureUrl} />
                        <AvatarFallback className="text-lg">
                          {profileData.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <Button variant="outline">
                          <Camera className="h-4 w-4 mr-2" />
                          Change Photo
                        </Button>
                        <p className="text-sm text-muted-foreground mt-2">
                          JPG, PNG or GIF. Max size 2MB.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Basic Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <User className="h-5 w-5" />
                      <span>Basic Information</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={profileData.name.split(' ')[0]}
                          onChange={(e) => {
                            const names = profileData.name.split(' ');
                            names[0] = e.target.value;
                            setProfileData({ ...profileData, name: names.join(' ') });
                          }}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={profileData.name.split(' ').slice(1).join(' ')}
                          onChange={(e) => {
                            const names = profileData.name.split(' ');
                            const firstName = names[0];
                            setProfileData({ ...profileData, name: `${firstName} ${e.target.value}` });
                          }}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="role">Professional Role</Label>
                      <Select value={profileData.role} onValueChange={(value) => setProfileData({ ...profileData, role: value as any })}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Actor">Actor</SelectItem>
                          <SelectItem value="Director">Director</SelectItem>
                          <SelectItem value="Cinematographer">Cinematographer</SelectItem>
                          <SelectItem value="Writer">Writer</SelectItem>
                          <SelectItem value="Producer">Producer</SelectItem>
                          <SelectItem value="Editor">Editor</SelectItem>
                          <SelectItem value="Casting Director">Casting Director</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="location"
                          value={profileData.location}
                          onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Professional Summary</Label>
                      <Textarea
                        id="bio"
                        value={profileData.bio}
                        onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                        rows={4}
                        placeholder="Tell us about your professional background and expertise..."
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Skills */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Award className="h-5 w-5" />
                      <span>Skills & Expertise</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {profileData.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="flex items-center space-x-1">
                          <span>{skill}</span>
                          <button
                            onClick={() => removeSkill(skill)}
                            className="ml-1 hover:text-destructive"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <Input
                        placeholder="Add a skill"
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                      />
                      <Button onClick={addSkill} disabled={!newSkill.trim()}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="experience" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Briefcase className="h-5 w-5" />
                      <span>Work Experience</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-medium">Lead Actor</h4>
                        <p className="text-sm text-muted-foreground">Mythri Movie Makers</p>
                        <p className="text-sm text-muted-foreground">2020 - Present</p>
                        <p className="text-sm mt-2">
                          Leading roles in major Telugu films including action and comedy genres.
                        </p>
                      </div>
                      <Button variant="outline" className="w-full">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Experience
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="education" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <GraduationCap className="h-5 w-5" />
                      <span>Education</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {profileData.education.map((edu) => (
                      <div key={edu.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h4 className="font-medium">{edu.institution}</h4>
                          <p className="text-sm text-muted-foreground">{edu.degree}</p>
                          <p className="text-sm text-muted-foreground">{edu.year}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeEducation(edu.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    
                    <Separator />
                    
                    <div className="space-y-4">
                      <h4 className="font-medium">Add Education</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Input
                          placeholder="Institution"
                          value={newEducation.institution}
                          onChange={(e) => setNewEducation({ ...newEducation, institution: e.target.value })}
                        />
                        <Input
                          placeholder="Degree"
                          value={newEducation.degree}
                          onChange={(e) => setNewEducation({ ...newEducation, degree: e.target.value })}
                        />
                        <Input
                          placeholder="Year"
                          value={newEducation.year}
                          onChange={(e) => setNewEducation({ ...newEducation, year: e.target.value })}
                        />
                      </div>
                      <Button onClick={addEducation} disabled={!newEducation.institution || !newEducation.degree || !newEducation.year}>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Education
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Star className="h-5 w-5" />
                      <span>Certifications</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {profileData.certifications.map((cert) => (
                      <div key={cert.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h4 className="font-medium">{cert.name}</h4>
                          <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                          <p className="text-sm text-muted-foreground">{cert.year}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeCertification(cert.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    
                    <Separator />
                    
                    <div className="space-y-4">
                      <h4 className="font-medium">Add Certification</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Input
                          placeholder="Certification Name"
                          value={newCertification.name}
                          onChange={(e) => setNewCertification({ ...newCertification, name: e.target.value })}
                        />
                        <Input
                          placeholder="Issuing Organization"
                          value={newCertification.issuer}
                          onChange={(e) => setNewCertification({ ...newCertification, issuer: e.target.value })}
                        />
                        <Input
                          placeholder="Year"
                          value={newCertification.year}
                          onChange={(e) => setNewCertification({ ...newCertification, year: e.target.value })}
                        />
                      </div>
                      <Button onClick={addCertification} disabled={!newCertification.name || !newCertification.issuer || !newCertification.year}>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Certification
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="contact" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Mail className="h-5 w-5" />
                      <span>Contact Information</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          value={profileData.email}
                          onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="phone"
                          value={profileData.phone || ''}
                          onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="website">Website</Label>
                      <div className="relative">
                        <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="website"
                          value={profileData.website || ''}
                          onChange={(e) => setProfileData({ ...profileData, website: e.target.value })}
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Globe className="h-5 w-5" />
                      <span>Languages</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {profileData.languages.map((lang) => (
                      <div key={lang.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h4 className="font-medium">{lang.language}</h4>
                          <p className="text-sm text-muted-foreground">{lang.proficiency}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeLanguage(lang.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    
                    <Separator />
                    
                    <div className="space-y-4">
                      <h4 className="font-medium">Add Language</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                          placeholder="Language"
                          value={newLanguage.language}
                          onChange={(e) => setNewLanguage({ ...newLanguage, language: e.target.value })}
                        />
                        <Select value={newLanguage.proficiency} onValueChange={(value) => setNewLanguage({ ...newLanguage, proficiency: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Proficiency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Native">Native</SelectItem>
                            <SelectItem value="Fluent">Fluent</SelectItem>
                            <SelectItem value="Advanced">Advanced</SelectItem>
                            <SelectItem value="Intermediate">Intermediate</SelectItem>
                            <SelectItem value="Basic">Basic</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Button onClick={addLanguage} disabled={!newLanguage.language || !newLanguage.proficiency}>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Language
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <Avatar className="h-16 w-16 mx-auto mb-4">
                    <AvatarImage src={profileData.profilePictureUrl} />
                    <AvatarFallback className="text-lg">
                      {profileData.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold">{profileData.name}</h3>
                  <p className="text-sm text-muted-foreground">{profileData.role}</p>
                  <p className="text-sm text-muted-foreground">{profileData.location}</p>
                  
                  <div className="mt-4">
                    <div className="flex items-center justify-between text-sm">
                      <span>Profile Strength</span>
                      <span className="font-medium">{profileData.profileStrength}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2 mt-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all" 
                        style={{ width: `${profileData.profileStrength}%` }}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button onClick={handleSave} disabled={isLoading} className="w-full">
                  <Save className="h-4 w-4 mr-2" />
                  {isLoading ? "Saving..." : "Save Changes"}
                </Button>
                <Button variant="outline" className="w-full">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Request Verification
                </Button>
                <Button variant="outline" className="w-full">
                  <Globe className="h-4 w-4 mr-2" />
                  View Public Profile
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
