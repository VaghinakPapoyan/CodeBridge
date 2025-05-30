import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Users,
  BookOpen,
  Star,
  CheckCircle,
  Code,
  Laptop,
  Globe,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import "./index.css";

export default function CodeBridgeLanding() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-3 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/images/codebridge-logo.png"
              alt="CodeBridge Logo"
              width={170}
              height={60}
              className="h-11 w-auto"
            />
            <div className="logo-text">
              <p>Code</p>
              <p className="orange">Bridge</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link
              href="#about"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Մեր Մասին
            </Link>
            <Link
              href="#programs"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Ծրագիր
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Կոնտակտներ
            </Link>
          </nav>
          <Button className="bg-secondary hover:bg-secondary/90 text-white">
            Գրանցվել Փորձնական Դասին
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-12 md:py-24">
        <div className="container grid gap-6 md:grid-cols-2 md:gap-12 items-center container mx-auto px-4">
          <div className="space-y-4">
            <div className="inline-block rounded-full bg-[#ff9933]/10 px-4 py-1 text-sm font-medium text-[#ff9933]">
              Վեբ Ծրագրավորման Դասընթացներ
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Unlock Your Child's{" "}
              <span className="text-[#3399ff]">Coding Potential</span>
            </h1>
            <p className="text-muted-foreground md:text-xl">
              CodeBridge offers hands-on web programming courses for teens aged
              13-17, building skills for the digital future.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white "
              >
                Գրանցվել Փորձնական Դասին
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#3399ff] text-[#3399ff] hover:bg-[#3399ff]/10"
              >
                Իմանալ Ավելին
              </Button>
            </div>
          </div>

          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Students learning to code"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Մեր Մասին
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              CodeBridge is a premier offline programming center dedicated to
              teaching web development to teenagers. Our mission is to bridge
              the gap between curiosity and capability, providing young minds
              with the technical skills and creative confidence they need to
              thrive in the digital age.
            </p>

            <div className="grid gap-10 md:grid-cols-3">
              <div
                className="rounded-lg bg-[#3399ff]/5 p-6 text-center
              rounded-lg text-card-foreground bg-white border-0 shadow-lg
              "
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#3399ff]/10 text-[#3399ff]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z" />
                    <path d="M12 13v8" />
                    <path d="M5 13v6a2 2 0 0 0 2 2h12" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-medium">Practical Learning</h3>
                <p className="text-gray-600">
                  Hands-on projects that build real-world skills
                </p>
              </div>
              <div className="rounded-lg bg-[#3399ff]/5 p-6 text-center rounded-lg text-card-foreground bg-white border-0 shadow-lg">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#3399ff]/10 text-[#3399ff]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-medium">Expert Instructors</h3>
                <p className="text-gray-600">
                  Learn from industry professionals
                </p>
              </div>
              <div className="rounded-lg bg-[#3399ff]/5 p-6 text-center rounded-lg text-card-foreground bg-white border-0 shadow-lg">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#3399ff]/10 text-[#3399ff]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 2v20" />
                    <path d="m17 5-5-3-5 3" />
                    <path d="m17 19-5 3-5-3" />
                    <path d="M12 9v6" />
                    <path d="m15 12-3-3-3 3" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-medium">Modern Curriculum</h3>
                <p className="text-gray-600">
                  Up-to-date with industry standards
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ինչու՞ ընտրել մեզ
            </h2>
            <p className="text-xl text-gray-600">
              What makes us different from other programming schools
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Small Class Sizes
                </h3>
                <p className="text-gray-600">
                  Maximum 8 students per class ensures personalized attention
                  and faster learning
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <BookOpen className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Expert Instructors
                </h3>
                <p className="text-gray-600">
                  Industry professionals with 5+ years of web development
                  experience
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Laptop className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Hands-On Learning
                </h3>
                <p className="text-gray-600">
                  Build real projects from day one with our project-based
                  curriculum
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Flexible Scheduling
                </h3>
                <p className="text-gray-600">
                  Weekend and after-school classes that fit your family's
                  schedule
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Proven Results
                </h3>
                <p className="text-gray-600">
                  95% of our students complete the program and build their own
                  websites
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Star className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Offline Environment
                </h3>
                <p className="text-gray-600">
                  Focused learning without online distractions and social media
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Parents & Students Say
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from our CodeBridge community
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-background border-0 shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  "My daughter went from knowing nothing about coding to
                  building her own portfolio website. The instructors are
                  patient and really know how to teach teenagers."
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">Sarah Johnson</p>
                  <p className="text-sm text-gray-600">Parent of Emma, 15</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-background border-0 shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  "CodeBridge gave me the confidence to pursue computer science
                  in college. The projects we built were actually fun and I
                  learned so much!"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">Alex Chen</p>
                  <p className="text-sm text-gray-600">Student, Age 17</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-background border-0 shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  "The small class sizes make all the difference. My son gets
                  individual help and the teachers really care about each
                  student's progress."
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">
                    Michael Rodriguez
                  </p>
                  <p className="text-sm text-gray-600">Parent of David, 14</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Program & Pricing */}
      <section id="programs" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Մեր Ծրագիրը
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive curriculum designed for teenagers
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Ծրագրի Մասին
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Clock className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        Ժամակարգ և Տևողություն
                      </p>
                      <p className="text-gray-600">Շաբաթը 3 անգամ - 1:30 ժամ</p>
                      <p className="text-gray-600">
                        հիմնական ծրագիրի ընդհանուր տևողությունն է 3-4 ամիս
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        Խմբում աշակերտների քանակը
                      </p>
                      <p className="text-gray-600">
                        Ամենաշատը խմբում կարող են լինել 7-8 աշակերտ
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Պահանջներ</p>
                      <p className="text-gray-600">
                        Մենք տրամադրում ենք բոլոր անհրաժեշտ պարագաները սակայն
                        ցանակի է ունենալ համակարգիչ տնայինները կատարելու համար
                      </p>
                      <p className="text-gray-600">
                        Դասընթացների նախատեսված են 13-17 տարեկանների համար բայց
                        տարիքը պարտադիր պայման չէ
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Դասընթացների տեսակներ տեսակներ
                </h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-gray-900">
                      Frontend Development
                    </h4>
                    <p className="text-gray-600">HTML, CSS, JavaScript</p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <h4 className="font-semibold text-gray-900">
                      Վեբ ծրագրավորում
                    </h4>
                    <p className="text-gray-600">
                      Խորացված Javascript, React js
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-gray-900">
                      Full-Stack Development
                    </h4>
                    <p className="text-gray-600">
                      Back-end Development + Front-end Development
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-primary to-secondary gradient">
            <CardContent className="card-gradient">
              <div className="card-background">
                <div></div>
              </div>
              <div className="card-cont p-8 text-center">
                <h3 className="text-3xl font-bold mb-4">Program Investment</h3>
                <div className="text-5xl font-bold mb-2">$899</div>
                <p className="text-xl mb-6">Complete 12-week program</p>
                <div className="grid md:grid-cols-3 gap-4 text-sm mb-8">
                  <div>✓ 48 hours of instruction</div>
                  <div>✓ All materials included</div>
                  <div>✓ Portfolio projects</div>
                  <div>✓ Certificate of completion</div>
                  <div>✓ Career guidance session</div>
                  <div>✓ Lifetime access to resources</div>
                </div>
                <Button
                  size="lg"
                  className="border-blue text-[#3399ff] hover:bg-[#3399ff]/10 bg-[#eee] px-8 py-4 text-lg"
                >
                  ԳՐԱՆՑՎԻՐ ՀԻՄԱ ՓՈՐՁՆԱԿԱՆ ԴԱՍԻՆ
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What You Will Learn */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ինչ Կսովորի Ձեր Երեխան
            </h2>
            <p className="text-xl text-gray-600">
              Essential skills for the digital future
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Code className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                HTML & CSS
              </h3>
              <p className="text-gray-600">
                Structure and style beautiful web pages from scratch
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                <Globe className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                JavaScript
              </h3>
              <p className="text-gray-600">
                Add interactivity and dynamic features to websites
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Smartphone className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Responsive Design
              </h3>
              <p className="text-gray-600">
                Create websites that work on all devices and screen sizes
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                <Laptop className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Project Development
              </h3>
              <p className="text-gray-600">
                Build a complete portfolio of real-world projects
              </p>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Learning Path
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  1
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Foundation (Weeks 1-4)
                </h4>
                <p className="text-gray-600">
                  HTML basics, CSS styling, web design principles
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  2
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Interactive (Weeks 5-8)
                </h4>
                <p className="text-gray-600">
                  JavaScript programming, DOM manipulation, events
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  3
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Advanced (Weeks 9-12)
                </h4>
                <p className="text-gray-600">
                  Full-stack concepts, APIs, final portfolio project
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action & Contact */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-primary to-secondary text-white gradient1"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Պատրաստ ե՞ք սկսել ձեր
            </h2>
            <p className="text-xl mb-8">Փ</p>
            <Button
              size="lg"
              className="bg-white border-blue text-primary hover:bg-gray-100 px-8 py-4 text-lg mr-4"
            >
              Գրանցվեք Հիմա Փորձնական դասին
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Այցելեք մեր կենտրոն</h3>
              <p>
                Հանրապետության 1
                <br />
                Ք. Արմավիր
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Զանգահարեք մեզ</h3>
              <p>
                +374 (93) 62-62-02
                <br />
                Երկուշաբթիից-ուրբաթ: 9:00 - 20:00
                <br />
                շաբաթ-կիրակի: 10:00 - 19:00
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Գրեք մեզ էլ. փոստով</h3>
              <p>
                vaghinak.papoyan@gmail.com
                <br />
                programming.school.armenia@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Image
                src="/images/codebridge-logo.png"
                alt="CodeBridge Logo"
                width={150}
                height={45}
                className="h-10 w-auto"
              />
              <p className="text-gray-400">
                Empowering the next generation of web developers through
                hands-on learning and expert instruction.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#programs"
                    className="hover:text-white transition-colors"
                  >
                    Programs
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href="#testimonials"
                    className="hover:text-white transition-colors"
                  >
                    Testimonials
                  </Link>
                </li> */}
                <li>
                  <Link
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Frontend Development</li>
                <li>Backend Basics</li>
                <li>Full-Stack Projects</li>
                <li>Portfolio Building</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>123 Tech Street</li>
                <li>Innovation District</li>
                <li>Your City, State 12345</li>
                <li>(555) 123-CODE</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} CodeBridge Programming Center.
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
