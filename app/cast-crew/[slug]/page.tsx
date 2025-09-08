'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { mockCastCrewProfiles } from '@/data/mock-data';
import { CastCrewProfile } from '@/lib/types';
import { ArrowLeft, Star, MapPin, Calendar, Globe, Phone, Mail, MessageCircle, Heart, Share2, Download, Play, Award, Film, Users, Clock, CheckCircle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function CastCrewProfilePage() {
  const params = useParams();
  const [profile, setProfile] = useState<CastCrewProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundProfile = mockCastCrewProfiles.find(p => p.username === params.slug);
    setProfile(foundProfile || null);
    setLoading(false);
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Profile Not Found</h1>
          <p className="text-slate-600 mb-6">The profile you're looking for doesn't exist.</p>
          <Button onClick={() => window.history.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => window.history.back()}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">{profile.name}</h1>
                <p className="text-slate-600">@{profile.username}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Heart className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button size="sm">
                <MessageCircle className="w-4 h-4 mr-2" />
                Connect
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="relative inline-block">
                    <img
                      src={profile.profilePictureUrl}
                      alt={profile.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-white shadow-lg"
                    />
                    {profile.isOnline && (
                      <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mt-4">{profile.name}</h2>
                  <p className="text-slate-600">{profile.craft}</p>
                  {profile.isVerified && (
                    <Badge variant="secondary" className="mt-2">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="flex items-center text-sm text-slate-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {profile.location}
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {profile.experience}
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Clock className="w-4 h-4 mr-2" />
                    {profile.availabilityStatus}
                  </div>
                  {profile.website && (
                    <div className="flex items-center text-sm text-slate-600">
                      <Globe className="w-4 h-4 mr-2" />
                      <a href={profile.website} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                        Website
                      </a>
                    </div>
                  )}
                </div>

                <Separator className="my-6" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">Rating</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                      <span className="text-sm font-medium">{profile.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">Reviews</span>
                    <span className="text-sm">{profile.reviews}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">Profile Views</span>
                    <span className="text-sm">{profile.profileViews.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">Connections</span>
                    <span className="text-sm">{profile.connections.toLocaleString()}</span>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="space-y-3">
                  <h3 className="font-semibold text-slate-900">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {profile.languages.map((lang, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <h3 className="font-semibold text-slate-900">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {profile.skills.slice(0, 6).map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {profile.skills.length > 6 && (
                      <Badge variant="outline" className="text-xs">
                        +{profile.skills.length - 6} more
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Bio */}
            <Card>
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed">{profile.bio}</p>
              </CardContent>
            </Card>

            {/* Filmography */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Film className="w-5 h-5 mr-2" />
                  Filmography
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {profile.filmography.map((film) => (
                    <div key={film.id} className="flex items-start space-x-4 p-4 border border-slate-200 rounded-lg">
                      <img
                        src={film.posterUrl}
                        alt={film.title}
                        className="w-16 h-20 object-cover rounded"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-slate-900">{film.title}</h3>
                            <p className="text-sm text-slate-600">{film.year} • {film.role}</p>
                            <p className="text-sm text-slate-600">{film.genre} • {film.director}</p>
                            <p className="text-sm text-slate-600">{film.productionHouse}</p>
                          </div>
                          {film.isVerified && (
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          )}
                        </div>
                        <div className="flex items-center space-x-4 mt-2 text-xs text-slate-500">
                          <span>Budget: {film.budget}</span>
                          {film.boxOffice && <span>Box Office: {film.boxOffice}</span>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Awards */}
            {profile.awards.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="w-5 h-5 mr-2" />
                    Awards & Recognition
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {profile.awards.map((award) => (
                      <div key={award.id} className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
                        <div>
                          <h4 className="font-semibold text-slate-900">{award.name}</h4>
                          <p className="text-sm text-slate-600">{award.category} • {award.year}</p>
                          <p className="text-sm text-slate-600">{award.film} • {award.organization}</p>
                        </div>
                        <Badge variant={award.level === 'National' ? 'default' : 'secondary'}>
                          {award.level}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Portfolio */}
            {profile.portfolio.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Portfolio</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {profile.portfolio.map((item) => (
                      <div key={item.id} className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="aspect-video bg-slate-100 relative">
                          {item.type === 'video' ? (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Play className="w-8 h-8 text-white bg-black bg-opacity-50 rounded-full p-2" />
                            </div>
                          ) : (
                            <img
                              src={item.thumbnailUrl}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>
                        <div className="p-3">
                          <h4 className="font-semibold text-slate-900">{item.title}</h4>
                          <p className="text-sm text-slate-600">{item.description}</p>
                          <div className="flex items-center justify-between mt-2">
                            <Badge variant="outline" className="text-xs">{item.category}</Badge>
                            <span className="text-xs text-slate-500">{item.year}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">Preferred Contact</span>
                    <span className="text-sm capitalize">{profile.contactInfo.preferredMethod}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">Response Time</span>
                    <span className="text-sm">{profile.contactInfo.responseTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">Working Hours</span>
                    <span className="text-sm">{profile.contactInfo.workingHours}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">Timezone</span>
                    <span className="text-sm">{profile.contactInfo.timezone}</span>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="flex space-x-3">
                  {profile.phone && (
                    <Button variant="outline" size="sm" className="flex-1">
                      <Phone className="w-4 h-4 mr-2" />
                      Call
                    </Button>
                  )}
                  {profile.email && (
                    <Button variant="outline" size="sm" className="flex-1">
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
