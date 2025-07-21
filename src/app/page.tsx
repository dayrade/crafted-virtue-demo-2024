"use client";

import React from "react";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { useAuth } from "../hooks/use-auth";
import { 
  Bot, 
  Zap, 
  Share2, 
  BarChart3, 
  Users, 
  Sparkles, 
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";

export default function HomePage() {
  const { user } = useAuth();

  const features = [
    {
      icon: Bot,
      title: "AI-Powered Content Generation",
      description: "Create engaging posts, articles, and threads with advanced AI assistance tailored to your brand voice."
    },
    {
      icon: Share2,
      title: "Multi-Platform Publishing",
      description: "Publish content across LinkedIn, Twitter, Facebook, and Instagram from a single dashboard."
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Track engagement, reach, and performance metrics to optimize your content strategy."
    },
    {
      icon: Sparkles,
      title: "Smart Optimization",
      description: "Get AI-powered suggestions to improve your content for better engagement and reach."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together with your team to create, review, and publish content efficiently."
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Set up automated posting schedules and content workflows to save time."
    }
  ];

  const benefits = [
    "Save 10+ hours per week on content creation",
    "Increase engagement rates by up to 300%",
    "Maintain consistent brand voice across platforms",
    "Generate unlimited content ideas",
    "Track and optimize performance in real-time",
    "Scale your content marketing effortlessly"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bot className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">ContentCraft</span>
          </div>
          
          <div className="flex items-center gap-4">
            {user ? (
              <Button asChild>
                <Link href="/dashboard">
                  Go to Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link href="/auth/login">Sign In</Link>
                </Button>
                <Button asChild>
                  <Link href="/auth/register">Get Started</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Badge variant="secondary" className="mb-4">
          <Sparkles className="h-3 w-3 mr-1" />
          Powered by Advanced AI
        </Badge>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Create Amazing Content with
          <span className="text-primary block">AI Assistance</span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Transform your social media presence with AI-powered content generation, 
          multi-platform publishing, and intelligent analytics.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          {user ? (
            <Button size="lg" asChild>
              <Link href="/dashboard">
                Go to Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          ) : (
            <>
              <Button size="lg" asChild>
                <Link href="/auth/register">
                  Start Creating for Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/auth/login">Sign In</Link>
              </Button>
            </>
          )}
        </div>
        
        {/* Social Proof */}
        <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">4.9/5</span>
            <span>rating</span>
          </div>
          <div>
            <span className="font-medium">10,000+</span>
            <span> creators trust us</span>
          </div>
          <div>
            <span className="font-medium">1M+</span>
            <span> posts generated</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to streamline your content creation workflow
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-2 hover:border-primary/20 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why creators choose ContentCraft
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of content creators, marketers, and businesses who have 
                transformed their social media presence with our AI-powered platform.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="p-8">
              <div className="text-center">
                <Bot className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Meet Leo, Your AI Assistant</h3>
                <p className="text-muted-foreground mb-6">
                  Leo understands your brand, audience, and goals to create personalized 
                  content that resonates with your followers.
                </p>
                
                {user ? (
                  <Button asChild className="w-full">
                    <Link href="/chat">
                      Chat with Leo Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                ) : (
                  <Button asChild className="w-full">
                    <Link href="/auth/register">
                      Try Leo for Free
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to transform your content?
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of creators who are already using ContentCraft to grow their audience 
          and engagement.
        </p>
        
        {user ? (
          <Button size="lg" asChild>
            <Link href="/dashboard">
              Go to Dashboard
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        ) : (
          <Button size="lg" asChild>
            <Link href="/auth/register">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Bot className="h-6 w-6 text-primary" />
              <span className="font-semibold">ContentCraft</span>
            </div>
            
            <div className="text-sm text-muted-foreground">
              © 2024 ContentCraft. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}