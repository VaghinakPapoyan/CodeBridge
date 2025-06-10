import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  CheckCircle,
  Clock,
  Code,
  Globe,
  Laptop,
  Mail,
  MapPin,
  Phone,
  Smartphone,
  Star,
  Users,
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
              src="/images/codebridge-logo.webp"
              alt="CodeBridge Logo"
              width={64}
              height={44}
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
          <Button className="bg-secondary hover:bg-secondary/90 text-[#eee]">
            Գրանցվել հիմա
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
            <h1 className="main-text text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Սովորելը Երբեք <br />
              <span className="text-[#3399ff]">Չի Հոգնեցնում</span>
            </h1>
            <p className="text-muted-foreground md:text-xl">
              CodeBridge-ը առաջարկում է բարձրակարգ ծրագրավորման դասընթացներ
              Արմավիր քաղաքում
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-[#eee] "
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

          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden gradient">
            <Image
              src="/images/kids-computers.webp"
              alt="Students learning to code"
              fill
              className="object-cover p-2 rounded-my overflow-hidden"
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
              Մենք ծրագրավորման կենտրոն ենք Արմավիրում, որի նպատակն է տրամադրել
              որակյալ կրթություն: Օգտագործելով դասավանդման ամենաժամանակակից
              մեթոդները` վստահ ենք, որ մեր տված գիտելիքները պետք կգան բոլորին:
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
                    <polyline points="23 4 23 10 17 10" />
                    <polyline points="1 20 1 14 7 14" />
                    <path d="M3.51 9a9 9 0 0 1 14.64-3.36L23 10" />
                    <path d="M1 14l4.36 4.36A9 9 0 0 0 20.49 15" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-medium">Պրակտիկ Դասեր</h3>
                <p className="text-gray-600">
                  Մեր դասընթացների 80%-ը պրակտիկ աշխատանքներ են:
                </p>
              </div>
              <div className="rounded-lg bg-[#3399ff]/5 p-6 text-center rounded-lg text-card-foreground bg-white border-0 shadow-lg">
                <div
                  className="mx-auto mb-4 flex h-12 w-12 items-center justify-center 
                rounded-full bg-[#3399ff]/10 text-[#3399ff]"
                >
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
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-medium">Ինտերակտիվ դասեր</h3>
                <p className="text-gray-600">
                  Դասերը դինամիկ են, սովորում ենք խաղերով
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
                    {/* User head */}
                    <circle cx="8" cy="8" r="4" />
                    {/* User shoulders */}
                    <path d="M2 20c0-4 4-6 6-6s6 2 6 6" />
                    {/* Heart (personalized) */}
                    <path d="M18 6l-1.5-1.5a2 2 0 0 0-2.828 0L14 6v.5a2 2 0 0 0 0 2.828L16 11l2-1.672a2 2 0 0 0 0-2.828L18 6z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-medium">Անհատական մոտեցում</h3>
                <p className="text-gray-600">
                  Քանի որ խմբերը փոքր են, յուրաքանչյուրին կտրամադրվի անհատական
                  մոտեցում
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ինչու՞ ընտրել մեզ
            </h2>
            <p className="text-xl text-gray-600">
              Ինչո՞վ ենք մենք տարբերվում մյուս ծրագրավորման կենտրոններից
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Փոքր խմբեր{" "}
                </h3>
                <p className="text-gray-600">
                  Մեր խմբերը բաղկացած են ամենաշատը 7-8 աշակերտներից
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <BookOpen className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Ժամանակակից ուսուցում
                </h3>
                <p className="text-gray-600">
                  Մենք օգտագործում ենք դասավանդման ամենաժամանակակից մեթոդները
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Laptop className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Պետքական Դասեր
                </h3>
                <p className="text-gray-600">
                  Մեր տված գիտելիքները պետք կգան իրական աշխատանքի համար
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Բարձրորակ Դասացուցակ
                </h3>
                <p className="text-gray-600">
                  Մենք ստեղծել ենք բարձրորակ և մտածված դասացուցակ
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Սերտիֆիկատ
                </h3>
                <p className="text-gray-600">
                  Մենք տալիս ենք սերտիֆիկատ մեր բոլոր աշակերտներին
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Star className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Հասանելի
                </h3>
                <p className="text-gray-600">
                  Մեր դասերը հասանելի են բոլորի համար
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
              Դասացուցակի մասին տեղեկություն
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
                    <Clock className="h-6 w-6 text-primary mt-1 mh-6 mw-6" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        Ժամակարգ և Տևողություն
                      </p>
                      <p className="text-gray-600">
                        Շաբաթական 3 անգամ - 1:30 ժամ
                      </p>
                      <p className="text-gray-600">
                        Հիմնական ծրագրի ընդհանուր տևողությունը 3-4 ամիս է
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="h-6 w-6 text-primary mt-1 mh-6 mw-6" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        Խմբում աշակերտների քանակը
                      </p>
                      <p className="text-gray-600">
                        Խմբում կարող են առավելագույնը լինել 7-8 աշակերտ
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 mh-6 mw-6" />
                    <div>
                      <p className="font-semibold text-gray-900">Պահանջներ</p>
                      <p className="text-gray-600">
                        Մենք տրամադրում ենք բոլոր անհրաժեշտ պարագաները, սակայն
                        ցանկալի է ունենալ համակարգիչ` տնային աշխատանքները
                        կատարելու համար:
                      </p>
                      <p className="text-gray-600">
                        Դասընթացների ծրագրերը նախատեսված են 13-17 տարեկանների
                        համար:
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Դասընթացներ
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
                      Խորացված Javascript, React JS
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-gray-900">
                      Full-Stack Development
                    </h4>
                    <p className="text-gray-600">Node.js + React JS, Next,</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-primary to-secondary gradient text-gray-900">
            <CardContent className="card-gradient">
              <div className="card-background ">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10"></div>
              </div>
              <div className="card-cont p-7 pb-2 text-center">
                <h3 className="text-3xl font-bold mb-5 text-gray-900">
                  Ամսավճար
                </h3>
                <div className="mb-1 text-gray-900 price price-sm">
                  <s className="text-2xl text-[#D32F2F]">30.000֏</s>
                  <span className="font-bold text-4xl text-[#3399ff]">
                    24.000֏
                  </span>
                </div>
                <p className="text-xl mb-4 text-gray-900">
                  Զեղչը գործում է մինչև
                  <span className="font-bold">Սեպտեմբերի 1</span>
                </p>
                <Button
                  size="lg"
                  className="sign-now-sm border-blue text-[#3399ff] hover:bg-[#3399ff]/10 bg-[#eee] px-8 py-4 text-lg"
                >
                  ԳՐԱՆՑՎԻՐ ՀԻՄԱ ՓՈՐՁՆԱԿԱՆ ԴԱՍԻՆ
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What You Will Learn */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ինչ Կսովորեք
            </h2>
            <p className="text-xl text-gray-600">
              Ինչ գիտելիքներ կունենա աշակերտը` հիմնական կուրսը անցնելուց հետո
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Code className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">HTML</h3>
              <p className="text-gray-600">
                Կսովորենք բոլոր հիմնական թեգերը և ատրիբուտները
              </p>
              <p className="mt-0 text-gray-600">Կստեղծենք կայքի հիմքը</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                <Globe className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">CSS</h3>
              <p className="text-gray-600">
                Կսովորենք բոլոր հիմնական հատկությունները և բոլոր{" "}
              </p>
              <p className="mt-0 text-gray-600">Կստեղծենք կայքի տեսքը</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Smartphone className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">JS</h3>
              <p className="text-gray-600">
                Կսովորենք բոլոր հիմնական հասկացությունները
              </p>
              <p className="mt-0 text-gray-600">
                Կդարձնենք մեր կայքը ինտերակտիվ
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                <Laptop className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Կայքերի ստեղծում
              </h3>
              <p className="text-gray-600">
                Օգտագործելով մեր ամբողջ գիտելիքները կանցնենք կայք ստեղծելու
                բոլոր էտապներով և կստեղծենք մեր սեփական կայքը
              </p>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-1 text-center">
              Փափուկ հմտություններ
            </h3>
            <div className="dfjccaic mb-6">
              <h4 className="font-Semi-bold text-gray-900 text-center text-primary-underline">
                Մեր դասերը զարգացնում են նաև կոգնիտիվ ունակությունները
              </h4>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-[#eee] font-bold text-xl">
                  1
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Ալգորիթմիկ մտածելակերպ
                </h4>
                <p className="text-gray-600">խնդիրները քայլ առ քայլ լուծել։</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-[#eee] font-bold text-xl">
                  2
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Քննադատական մտածելակերպ
                </h4>
                <p className="text-gray-600">
                  Տրամաբանական և վերլուծական մոտեցում խնդիրներին։
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-[#eee] font-bold text-xl">
                  3
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Խնդիր-լուծում մտածելակերպ{" "}
                </h4>
                <p className="text-gray-600">
                  լուծումներ գտնելու ունակություն:
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action & Contact */}
      <section id="contact" className="py-20 text-[#eee] gradient1">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Պատրաստ ե՞ք սկսել ձեր ուղին
            </h2>
            <p className="text-xl mb-8"></p>
            <Button
              size="lg"
              className="sign-now-sm bg-white border-blue text-primary hover:bg-gray-100 px-8 py-4 text-lg mr-4"
            >
              Գրանցվիր Հիմա Փորձնական Դասին
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-[#ff9933bb] rounded-full flex items-center justify-center mx-auto">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Այցելեք մեր կենտրոն</h3>
              <p>
                Նալբանդյան 5
                <br />
                Ք. Արմավիր
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-[#ff9933bb] rounded-full flex items-center justify-center mx-auto">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Զանգահարեք մեզ</h3>
              <p>
                +374 (93) 943-945
                <br />
                Երկուշաբթիից-ուրբաթ: 9:00 - 20:00
                <br />
                շաբաթ-կիրակի: 10:00 - 19:00
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-[#ff9933bb] rounded-full flex items-center justify-center mx-auto">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Գրեք մեզ էլ. փոստով</h3>
              <p>
                info@codebridge.am
                <br />
                vaghinak.papoyan@codebridge.am
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#095590] text-[#eee] py-9">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Image
                src="/images/codebridge-logo-footer.webp"
                alt="CodeBridge Logo"
                width={150}
                height={45}
                className="h-10 w-auto"
              />
              <p className="text-[#eee]">
                Empowering the next generation of web developers through
                hands-on learning and expert instruction.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-[#eee]">
                <li>
                  <Link
                    href="#about"
                    className="hover:text-[#eee] transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#programs"
                    className="hover:text-[#eee] transition-colors"
                  >
                    Programs
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href="#testimonials"
                    className="hover:text-[#eee] transition-colors"
                  >
                    Testimonials
                  </Link>
                </li> */}
                <li>
                  <Link
                    href="#contact"
                    className="hover:text-[#eee] transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-[#eee]">
                <li>Frontend</li>
                <li>Վեբ Ծրագրավորում</li>
                <li>Full-Stack</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-[#eee]">
                <li>vaghinak.papoyan@codebridge.am</li>
                <li>info@codebridge.am</li>
                <li>Ք. Արմավիր Նալբանդյան 5</li>
                <li>+374 (93) 943-945</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#eee] mt-5 pt-5 text-center text-[#eee] fontsize-12">
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
