import React from 'react';
import { MapPin, Camera, Users, Shield, Clock, DollarSign, Globe, ChartBar, Rocket, Calendar } from 'lucide-react';
import Head from 'next/head';

export default function RecceePage() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Head>
      <div className="min-h-screen bg-background touch-pan-y">
      {/* Mobile Navigation Indicator */}
      <div className="lg:hidden fixed top-16 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border/50 shadow-sm">
        <div className="px-4 py-3">
          <div className="flex items-center justify-center">
            <MapPin className="w-5 h-5 text-primary mr-2" />
            <span className="text-sm font-medium text-white">Recce & Studio Maps</span>
          </div>
        </div>
      </div>
                    {/* Hero Section */}
       <section className="relative overflow-hidden text-white">
         {/* Background Image */}
         <div className="absolute inset-0">
           <img 
             src="/00.png" 
             alt="Professional studio floor texture" 
             className="w-full h-full object-cover opacity-40"
           />
         </div>
         {/* Dark Overlay for Text Readability */}
         <div className="absolute inset-0 bg-black/40"></div>
         
         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-16 sm:py-20 lg:py-32 pb-8 sm:pb-0">
           <div className="text-center">
             <div className="inline-flex items-center px-2 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary text-black backdrop-blur-sm border border-primary mb-4 sm:mb-8">
               <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-black" />
               <span className="text-xs sm:text-sm font-medium text-black">AI-Powered Studio Intelligence</span>
             </div>
             <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-6 leading-tight text-white">
               Recce & Studio Maps
             </h1>
             <p className="text-sm sm:text-xl md:text-2xl mb-4 sm:mb-8 text-muted-foreground max-w-3xl mx-auto px-4">
               Plan shoots smarter with AI-powered reconnaissance and studio mapping. 
               Walk the set before you step on it.
             </p>
             <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center px-4">
               <button className="bg-primary text-black px-3 sm:px-8 py-2.5 sm:py-4 rounded-lg font-semibold text-xs sm:text-lg hover:bg-primary/90 active:bg-primary/80 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg min-h-[36px] sm:min-h-[56px]">
                 <Rocket className="w-2.5 h-2.5 sm:w-5 sm:h-5 mr-1 sm:mr-2 inline" />
                 Start Virtual Recce
               </button>
               <button className="border-2 border-primary text-primary px-3 sm:px-8 py-2.5 sm:py-4 rounded-lg font-semibold text-xs sm:text-lg hover:bg-primary hover:text-black active:bg-primary/90 active:text-black transition-all duration-300 transform hover:scale-105 active:scale-95 min-h-[36px] sm:min-h-[56px]">
                 <Calendar className="w-2.5 h-2.5 sm:w-5 sm:h-5 mr-1 sm:mr-2 inline" />
                 View Demo
               </button>
             </div>
           </div>
         </div>
       </section>

                         {/* What is Recce Section */}
       <section className="py-16 sm:py-20 bg-muted/50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-8 sm:mb-16">
                <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-6">
                  What is Recce?
                </h2>
                <p className="text-sm sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                  Recce (short for Reconnaissance) is the essential process of surveying and analyzing 
                  shooting locations or studios before production begins.
                </p>
              </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 md:gap-12 items-center">
             <div className="space-y-3 sm:space-y-6">
                              <div className="flex items-start space-x-2 sm:space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4 sm:w-6 sm:h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-xl font-semibold text-white mb-1 sm:mb-2">Digital Scout</h3>
                    <p className="text-xs sm:text-base text-muted-foreground">Think of it as your digital scout that goes ahead of your crew to ensure everything is ready for the perfect shot.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2 sm:space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center">
                    <ChartBar className="w-4 h-4 sm:w-6 sm:h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-xl font-semibold text-white mb-1 sm:mb-2">AI-Powered Analysis</h3>
                    <p className="text-xs sm:text-base text-muted-foreground">AI Studio transforms traditional recce into a smart, digital process with intelligent insights and recommendations.</p>
                  </div>
                </div>
             </div>
             
                          <div className="relative">
                <div className="bg-muted rounded-2xl p-4 sm:p-8 shadow-xl">
                  <div className="grid grid-cols-3 gap-2 sm:gap-4">
                    <div className="bg-primary rounded-lg p-2 sm:p-4 text-center shadow-md">
                      <MapPin className="w-5 h-5 sm:w-8 sm:h-8 text-black mx-auto mb-1 sm:mb-2" />
                      <p className="text-xs sm:text-sm font-medium text-black">Studio Layouts</p>
                    </div>
                    <div className="bg-primary rounded-lg p-2 sm:p-4 text-center shadow-md">
                      <ChartBar className="w-5 h-5 sm:w-8 sm:h-8 text-black mx-auto mb-1 sm:mb-2" />
                      <p className="text-xs sm:text-sm font-medium text-black">Location Data</p>
                    </div>
                    <div className="bg-primary rounded-lg p-2 sm:p-4 text-center shadow-md">
                      <Rocket className="w-5 h-5 sm:w-8 sm:h-8 text-black mx-auto mb-1 sm:mb-2" />
                      <p className="text-xs sm:text-sm font-medium text-black">AI Analysis</p>
                    </div>
                  </div>
                </div>
              </div>
           </div>
         </div>
       </section>

             {/* Core Features Section */}
       <section className="py-20 sm:py-20 bg-background">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12 sm:mb-16">
             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
               Core Features
             </h2>
             <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
               Everything you need for comprehensive pre-production planning in one powerful platform
             </p>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
             {/* Digital Studio Maps */}
             <div className="bg-muted/50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-border">
               <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                 <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
               </div>
               <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Digital Studio Maps</h3>
               <ul className="space-y-2 sm:space-y-3 text-muted-foreground text-sm sm:text-base">
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>2D & 3D maps of major Indian studios</span>
                 </li>
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Interactive floor layouts for all set types</span>
                 </li>
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Crew navigation with facility mapping</span>
                 </li>
               </ul>
             </div>

             {/* Virtual Recce Tools */}
             <div className="bg-muted/50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-border">
               <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                 <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
               </div>
               <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Virtual Recce Tools</h3>
               <ul className="space-y-2 sm:space-y-3 text-muted-foreground text-sm sm:text-base">
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>AI 3D Simulations with lighting setups</span>
                 </li>
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>AR/VR walkthroughs for remote recce</span>
                 </li>
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Historical data from previous shoots</span>
                 </li>
               </ul>
             </div>

             {/* AI-Powered Planning */}
             <div className="bg-muted/50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-border">
               <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                 <Rocket className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
               </div>
               <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">AI-Powered Planning</h3>
               <ul className="space-y-2 sm:space-y-3 text-muted-foreground text-sm sm:text-base">
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Cinematography recommendations</span>
                 </li>
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Lighting and sound optimization</span>
                 </li>
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Production logistics planning</span>
                 </li>
               </ul>
             </div>
           </div>
         </div>
       </section>

       {/* Equipment Database Section */}
       <section className="py-20 sm:py-20 bg-muted/50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12 sm:mb-16">
             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
               Professional Equipment Database
             </h2>
             <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
               Comprehensive database of cinema equipment with AI-powered recommendations for your shoot
             </p>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
             {/* Camera Equipment */}
             <div className="bg-background rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-border">
               <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                 <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
               </div>
               <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Camera Equipment</h3>
               <ul className="space-y-2 sm:space-y-3 text-muted-foreground text-sm sm:text-base">
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Lens recommendations & positioning</span>
                 </li>
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Camera movement planning</span>
                 </li>
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Equipment specifications</span>
                 </li>
               </ul>
             </div>

             {/* Lighting Equipment */}
             <div className="bg-background rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-border">
               <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                 <div className="w-6 h-6 sm:w-8 sm:h-8 bg-black rounded-full"></div>
               </div>
               <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Lighting Setup</h3>
               <ul className="space-y-2 sm:space-y-3 text-muted-foreground text-sm sm:text-base">
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Studio lighting configurations</span>
                 </li>
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Power requirements & calculations</span>
                 </li>
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Fixture specifications</span>
                 </li>
               </ul>
             </div>

             {/* Sound Equipment */}
             <div className="bg-background rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-border">
               <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                 <div className="w-6 h-6 sm:w-8 sm:h-8 bg-black rounded-full"></div>
               </div>
               <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Sound Equipment</h3>
               <ul className="space-y-2 sm:space-y-3 text-muted-foreground text-sm sm:text-base">
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Microphone positioning</span>
                 </li>
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Acoustic analysis</span>
                 </li>
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Sound equipment specs</span>
                 </li>
               </ul>
             </div>

             {/* Grip & Rigging */}
             <div className="bg-background rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-border">
               <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                 <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
               </div>
               <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Grip & Rigging</h3>
               <ul className="space-y-2 sm:space-y-3 text-muted-foreground text-sm sm:text-base">
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Equipment mounting solutions</span>
                 </li>
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Safety considerations</span>
                 </li>
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Load calculations</span>
                 </li>
               </ul>
             </div>
           </div>
         </div>
       </section>

            {/* How It Works Section */}
      <section className="py-24 sm:py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                       <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                 How It Works
               </h2>
               <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                 Simple 5-step process to transform your pre-production planning
               </p>
             </div>
          
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-black transform -translate-y-1/2"></div>
            
            <div className="grid lg:grid-cols-5 gap-8">
                             {/* Step 1 */}
               <div className="relative text-center">
                 <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                   <span className="text-black text-xl font-bold">1</span>
                 </div>
                 <h3 className="text-lg font-semibold text-white mb-3">Search Studio</h3>
                 <p className="text-muted-foreground text-sm">Choose from major studios or upload custom sites</p>
               </div>
              
              {/* Step 2 */}
              <div className="relative text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-black text-xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Explore Map</h3>
                <p className="text-muted-foreground text-sm">Navigate 2D/3D layouts with AR/VR walkthroughs</p>
              </div>
              
              {/* Step 3 */}
              <div className="relative text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-black text-xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">AI Simulation</h3>
                <p className="text-muted-foreground text-sm">Preview lighting, sound, and camera setups</p>
              </div>
              
              {/* Step 4 */}
              <div className="relative text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-black text-xl font-bold">4</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Team Collaboration</h3>
                <p className="text-muted-foreground text-sm">Crew adds notes, photos, and approvals</p>
              </div>
              
              {/* Step 5 */}
              <div className="relative text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-black text-xl font-bold">5</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Generate Report</h3>
                <p className="text-muted-foreground text-sm">Download and share comprehensive documentation</p>
              </div>
            </div>
                     </div>
         </div>
       </section>

       {/* Technical Specifications Section */}
       <section className="py-20 sm:py-20 bg-background">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12 sm:mb-16">
             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
               Technical Specifications
             </h2>
             <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
               Detailed technical data and infrastructure specifications for professional planning
             </p>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-12">
             {/* Studio Dimensions */}
             <div className="bg-muted/50 rounded-2xl p-6 sm:p-8 shadow-lg border border-border">
               <h3 className="text-xl font-bold text-white mb-4">Studio Dimensions & Layout</h3>
               <ul className="space-y-3 text-muted-foreground">
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Exact measurements and floor plans</span>
                 </li>
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Ceiling heights and clearance</span>
                 </li>
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Wall configurations and materials</span>
                 </li>
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Access points and loading areas</span>
                 </li>
               </ul>
             </div>

             {/* Power & Infrastructure */}
             <div className="bg-muted/50 rounded-2xl p-6 sm:p-8 shadow-lg border border-border">
               <h3 className="text-xl font-bold text-white mb-4">Power & Infrastructure</h3>
               <ul className="space-y-3 text-muted-foreground">
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Electrical load capacity</span>
                 </li>
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Generator requirements</span>
                 </li>
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Outlet locations and types</span>
                 </li>
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Circuit breaker information</span>
                 </li>
               </ul>
             </div>

             {/* Climate Control */}
             <div className="bg-muted/50 rounded-2xl p-6 sm:p-8 shadow-lg border border-border">
               <h3 className="text-xl font-bold text-white mb-4">Climate & Environment</h3>
               <ul className="space-y-3 text-muted-foreground">
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>HVAC systems and controls</span>
                 </li>
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Temperature and humidity control</span>
                 </li>
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Air circulation and filtration</span>
                 </li>
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Noise level specifications</span>
                 </li>
               </ul>
             </div>

             {/* Safety Features */}
             <div className="bg-muted/50 rounded-2xl p-6 sm:p-8 shadow-lg border border-border">
               <h3 className="text-xl font-bold text-white mb-4">Safety & Security</h3>
               <ul className="space-y-3 text-muted-foreground">
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Fire exits and emergency routes</span>
                 </li>
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>First aid and medical facilities</span>
                 </li>
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Security systems and access control</span>
                 </li>
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Insurance and liability information</span>
                 </li>
               </ul>
             </div>
           </div>
         </div>
       </section>

      {/* Benefits Section */}
      <section className="py-24 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose AI Studio Recce?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your pre-production process with intelligent insights and comprehensive planning
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                         <div className="bg-muted/50 rounded-2xl p-8 shadow-lg border border-border">
               <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                 <Clock className="w-8 h-8 text-black" />
               </div>
               <h3 className="text-xl font-bold text-white mb-4">Time & Cost Savings</h3>
               <p className="text-muted-foreground">Fewer physical recces, better pre-planning, and optimized resource allocation.</p>
             </div>
             
                           <div className="bg-muted/50 rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                  <ChartBar className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Standardization</h3>
                <p className="text-muted-foreground">AI ensures no checklist item is missed, maintaining consistent quality across projects.</p>
              </div>
              
              <div className="bg-muted/50 rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Safety First</h3>
                <p className="text-muted-foreground">SOP-linked recce reduces accidents & downtime, ensuring crew safety.</p>
              </div>
              
              <div className="bg-muted/50 rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Language Inclusivity</h3>
                <p className="text-muted-foreground">Reports accessible to every crew member in their preferred language.</p>
              </div>
              
              <div className="bg-muted/50 rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                  <DollarSign className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Producer Confidence</h3>
                <p className="text-muted-foreground">AI-verified recce plans improve budgeting & approvals with data-driven insights.</p>
              </div>
              
              <div className="bg-muted/50 rounded-2xl p-8 shadow-lg border border-border">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Team Collaboration</h3>
                <p className="text-muted-foreground">Real-time collaboration tools for seamless communication across departments.</p>
              </div>
                     </div>
         </div>
       </section>

       {/* Industry-Specific Guides Section */}
       <section className="py-20 sm:py-20 bg-muted/50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12 sm:mb-16">
             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
               Industry-Specific Recce Guides
             </h2>
             <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
               Specialized approaches for different film genres and production types
             </p>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
             {/* Action Films */}
             <div className="bg-background rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-border">
               <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                 <Rocket className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
               </div>
               <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Action Films</h3>
               <ul className="space-y-2 sm:space-y-3 text-muted-foreground text-sm sm:text-base">
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Stunt coordination areas</span>
                 </li>
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Safety equipment placement</span>
                 </li>
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Camera rigging points</span>
                 </li>
               </ul>
             </div>

             {/* Drama Films */}
             <div className="bg-background rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-border">
               <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                 <Users className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
               </div>
               <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Drama Films</h3>
               <ul className="space-y-2 sm:space-y-3 text-muted-foreground text-sm sm:text-base">
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Intimate lighting setups</span>
                 </li>
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Sound isolation areas</span>
                 </li>
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Character blocking spaces</span>
                 </li>
               </ul>
             </div>

             {/* Horror Films */}
             <div className="bg-background rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-border">
               <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                 <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
               </div>
               <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Horror Films</h3>
               <ul className="space-y-2 sm:space-y-3 text-muted-foreground text-sm sm:text-base">
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Dark lighting configurations</span>
                 </li>
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Special effects areas</span>
                 </li>
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Atmospheric controls</span>
                 </li>
               </ul>
             </div>

             {/* Commercials */}
             <div className="bg-background rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-border">
               <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                 <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
               </div>
               <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Commercials</h3>
               <ul className="space-y-2 sm:space-y-3 text-muted-foreground text-sm sm:text-base">
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Product placement areas</span>
                 </li>
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Brand integration spaces</span>
                 </li>
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Quick setup configurations</span>
                 </li>
               </ul>
             </div>
           </div>
         </div>
       </section>

                         {/* Studio Showcase Section */}
       <section className="py-24 sm:py-20 bg-muted/50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                 Featured Studios
               </h2>
               <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                 Access comprehensive maps and data for India's premier film studios
               </p>
             </div>
          
                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {/* Ramoji Film City */}
             <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
               <div className="aspect-video bg-muted overflow-hidden">
                 <img 
                   src="/Hyderabad.jpeg" 
                   alt="Ramoji Film City - Grand entrance with Egyptian-themed architecture" 
                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                 />
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-muted/80 via-transparent to-transparent"></div>
               <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                 <h3 className="text-xl font-bold mb-2">Ramoji Film City</h3>
                 <p className="text-muted-foreground text-sm">World's largest film studio complex with 47 sound stages and iconic Egyptian-themed architecture</p>
               </div>
             </div>
             
             {/* AVM Studios */}
             <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
               <div className="aspect-video bg-muted overflow-hidden">
                 <img 
                   src="/download (1).jpeg" 
                   alt="AVM Studios - Professional film production equipment and awards" 
                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                 />
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-muted/80 via-transparent to-transparent"></div>
               <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                 <h3 className="text-xl font-bold mb-2">AVM Studios</h3>
                 <p className="text-muted-foreground text-sm">Historic studio with state-of-the-art sound stages and professional equipment</p>
               </div>
             </div>
             
                           {/* Film City Mumbai */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img 
                    src="/Mumbaiii babyyy.jpeg" 
                    alt="Film City Mumbai - Bollywood Park Filmcity Mumbai with iconic entrance sign" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-muted/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Film City Mumbai</h3>
                  <p className="text-muted-foreground text-sm">Bollywood's iconic studio with diverse shooting locations and grand entrance</p>
                </div>
              </div>
           </div>
         </div>
       </section>

       {/* Professional Tools Section */}
       <section className="py-20 sm:py-20 bg-background">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12 sm:mb-16">
             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
               Professional Tools & Export Options
             </h2>
             <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
               Industry-standard tools for professional production planning and documentation
             </p>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
             {/* Report Generator */}
             <div className="bg-muted/50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-border">
               <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                 <ChartBar className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
               </div>
               <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Report Generator</h3>
               <ul className="space-y-2 sm:space-y-3 text-muted-foreground text-sm sm:text-base">
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Industry-standard PDF reports</span>
                 </li>
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Customizable templates</span>
                 </li>
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Professional formatting</span>
                 </li>
               </ul>
             </div>

             {/* Checklist System */}
             <div className="bg-muted/50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-border">
               <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                 <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
               </div>
               <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Checklist System</h3>
               <ul className="space-y-2 sm:space-y-3 text-muted-foreground text-sm sm:text-base">
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Comprehensive checklists</span>
                 </li>
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Genre-specific templates</span>
                 </li>
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Progress tracking</span>
                 </li>
               </ul>
             </div>

             {/* Export Options */}
             <div className="bg-muted/50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-border">
               <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                 <Rocket className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
               </div>
               <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Export Options</h3>
               <ul className="space-y-2 sm:space-y-3 text-muted-foreground text-sm sm:text-base">
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Multiple formats (PDF, CAD)</span>
                 </li>
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>3D model exports</span>
                 </li>
                 <li className="flex items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                   <span>Spreadsheet integration</span>
                 </li>
               </ul>
             </div>
           </div>
         </div>
       </section>

             {/* CTA Section */}
       <section className="py-24 sm:py-20 bg-background text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
             Ready to Transform Your Pre-Production?
           </h2>
           <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
             Join leading filmmakers who are already using AI Studio to plan smarter, shoot safer, and deliver better results.
           </p>
           
           {/* ROI Calculator Preview */}
           <div className="bg-muted/50 rounded-2xl p-6 sm:p-8 mb-8 max-w-4xl mx-auto">
             <h3 className="text-xl font-bold text-white mb-4">Calculate Your Savings</h3>
             <div className="grid md:grid-cols-3 gap-4 text-center">
               <div className="bg-background rounded-lg p-4">
                 <div className="text-2xl font-bold text-primary mb-2">70%</div>
                 <div className="text-sm text-muted-foreground">Time Saved on Recce</div>
               </div>
               <div className="bg-background rounded-lg p-4">
                 <div className="text-2xl font-bold text-primary mb-2">₹50K+</div>
                 <div className="text-sm text-muted-foreground">Cost Savings per Project</div>
               </div>
               <div className="bg-background rounded-lg p-4">
                 <div className="text-2xl font-bold text-primary mb-2">95%</div>
                 <div className="text-sm text-muted-foreground">Planning Accuracy</div>
               </div>
             </div>
           </div>
           
           {/* Feature Comparison */}
           <div className="bg-muted/50 rounded-2xl p-6 sm:p-8 mb-8 max-w-4xl mx-auto">
             <h3 className="text-xl font-bold text-white mb-4">Why Choose AI Studio Recce?</h3>
             <div className="grid md:grid-cols-2 gap-6 text-left">
               <div>
                 <h4 className="font-semibold text-white mb-3">Traditional Recce</h4>
                 <ul className="space-y-2 text-muted-foreground text-sm">
                   <li>• Manual site visits</li>
                   <li>• Paper-based documentation</li>
                   <li>• Limited team collaboration</li>
                   <li>• No standardization</li>
                 </ul>
               </div>
               <div>
                 <h4 className="font-semibold text-primary mb-3">AI Studio Recce</h4>
                 <ul className="space-y-2 text-muted-foreground text-sm">
                   <li>• Virtual walkthroughs</li>
                   <li>• Digital documentation</li>
                   <li>• Real-time collaboration</li>
                   <li>• Industry standards</li>
                 </ul>
               </div>
             </div>
           </div>
           
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <button className="bg-primary text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
                 <Rocket className="w-5 h-5 mr-2 inline" />
                 Start Free Trial
               </button>
               <button className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-black transition-all duration-300 transform hover:scale-105">
                 <Calendar className="w-5 h-5 mr-2 inline" />
                 Schedule Demo
               </button>
             </div>
        </div>
      </section>
      </div>
    </>
  );
}
