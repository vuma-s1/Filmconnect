"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { BreadcrumbNav } from '@/components/ui/breadcrumb-nav';
import { 
  Search, 
  HelpCircle, 
  MessageCircle, 
  Mail, 
  Phone,
  FileText,
  Video,
  BookOpen,
  Users,
  Settings,
  Shield,
  Globe
} from 'lucide-react';

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const faqCategories = [
    {
      title: "Getting Started",
      icon: BookOpen,
      items: [
        { question: "How do I create an account?", answer: "Click the Sign Up button and fill in your details." },
        { question: "How do I complete my profile?", answer: "Go to your profile and click Edit Profile to add information." },
        { question: "How do I connect with others?", answer: "Visit profiles and click the Connect button." }
      ]
    },
    {
      title: "Profile & Settings",
      icon: Settings,
      items: [
        { question: "How do I change my profile picture?", answer: "Go to Edit Profile and click on your profile picture." },
        { question: "How do I update my contact information?", answer: "Go to Settings > Profile Information." },
        { question: "How do I change my password?", answer: "Go to Settings > Password section." }
      ]
    },
    {
      title: "Privacy & Security",
      icon: Shield,
      items: [
        { question: "How do I control who sees my profile?", answer: "Go to Settings > Privacy to adjust visibility." },
        { question: "How do I block someone?", answer: "Go to their profile and use the block option." },
        { question: "How do I report inappropriate content?", answer: "Use the report button on any post or profile." }
      ]
    }
  ];

  const contactMethods = [
    {
      title: "Email Support",
      description: "Get help via email",
      icon: Mail,
      action: "Send Email",
      href: "mailto:support@filmlinked.com"
    },
    {
      title: "Live Chat",
      description: "Chat with our support team",
      icon: MessageCircle,
      action: "Start Chat",
      href: "#"
    },
    {
      title: "Phone Support",
      description: "Call us directly",
      icon: Phone,
      action: "Call Now",
      href: "tel:+1-800-FILMLINKED"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <BreadcrumbNav className="mb-6" />

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Help & Support</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Find answers to your questions and get the support you need
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for help articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <Card key={method.title} className="hover:bg-card/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{method.title}</h3>
                  <p className="text-muted-foreground mb-4">{method.description}</p>
                  <Button variant="outline" className="w-full">
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          
          {faqCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.title}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon className="h-5 w-5" />
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.items.map((item, index) => (
                      <div key={index}>
                        <details className="group">
                          <summary className="flex items-center justify-between cursor-pointer list-none">
                            <h4 className="font-medium text-white group-open:text-primary transition-colors">
                              {item.question}
                            </h4>
                            <Badge variant="outline" className="ml-2">
                              FAQ
                            </Badge>
                          </summary>
                          <p className="text-muted-foreground mt-2 pl-4 border-l-2 border-primary/20">
                            {item.answer}
                          </p>
                        </details>
                        {index < category.items.length - 1 && <Separator className="mt-4" />}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Resources */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:bg-card/50 transition-colors">
              <CardContent className="p-6">
                <FileText className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Documentation</h3>
                <p className="text-muted-foreground mb-4">
                  Detailed guides and tutorials
                </p>
                <Button variant="outline" size="sm">
                  View Docs
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:bg-card/50 transition-colors">
              <CardContent className="p-6">
                <Video className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Video Tutorials</h3>
                <p className="text-muted-foreground mb-4">
                  Step-by-step video guides
                </p>
                <Button variant="outline" size="sm">
                  Watch Videos
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:bg-card/50 transition-colors">
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Community</h3>
                <p className="text-muted-foreground mb-4">
                  Connect with other users
                </p>
                <Button variant="outline" size="sm">
                  Join Community
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <Separator className="mb-8" />
          <p className="text-muted-foreground">
            Still need help? Contact our support team at{' '}
            <a href="mailto:support@filmlinked.com" className="text-primary hover:underline">
              support@filmlinked.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
