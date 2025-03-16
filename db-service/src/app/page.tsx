import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Database, Server, Shield, Zap, Clock, Code } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="sticky top-0 z-40 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Database className="h-6 w-6 text-[hsl(var(--primary))]" />
            <span className="text-xl font-bold">DBaaS</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]">
              Características
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]">
              Precios
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]">
              Cómo funciona
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]">
              Testimonios
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]">
              Iniciar sesión
            </Link>
            <Button>Comenzar gratis</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Base de datos gestionada para desarrolladores modernos
              </h1>
              <p className="text-lg text-[hsl(var(--muted-foreground))] md:text-xl">
                Implementa, escala y gestiona tus bases de datos sin preocupaciones. Enfócate en tu aplicación, nosotros
                nos encargamos del resto.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">Comenzar gratis</Button>
                <Button size="lg" variant="outline">
                  Ver demo
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg border bg-[hsl(var(--background))] p-2 shadow-sm">
              <Image
                src="/placeholder.svg"
                alt="Dashboard"
                fill
                className="object-cover rounded"
              />
            </div>
          </div>
        </section>

        <section id="features" className="container py-20 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Características principales</h2>
            <p className="text-[hsl(var(--muted-foreground))] text-lg max-w-2xl mx-auto">
              Todo lo que necesitas para gestionar tus bases de datos sin complicaciones
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg border shadow-sm space-y-4">
              <div className="bg-[hsl(var(--primary)_/_0.1)] p-3 rounded-full w-fit">
                <Zap className="h-6 w-6 text-[hsl(var(--primary))]" />
              </div>
              <h3 className="text-xl font-bold">Alto rendimiento</h3>
              <p className="text-[hsl(var(--muted-foreground))]">
                Bases de datos optimizadas para ofrecer el máximo rendimiento en cualquier escala.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border shadow-sm space-y-4">
              <div className="bg-[hsl(var(--primary)_/_0.1)] p-3 rounded-full w-fit">
                <Shield className="h-6 w-6 text-[hsl(var(--primary))]" />
              </div>
              <h3 className="text-xl font-bold">Seguridad avanzada</h3>
              <p className="text-[hsl(var(--muted-foreground))]">
                Protección de datos de nivel empresarial con cifrado en reposo y en tránsito.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border shadow-sm space-y-4">
              <div className="bg-[hsl(var(--primary)_/_0.1)] p-3 rounded-full w-fit">
                <Server className="h-6 w-6 text-[hsl(var(--primary))]" />
              </div>
              <h3 className="text-xl font-bold">Escalabilidad automática</h3>
              <p className="text-[hsl(var(--muted-foreground))]">
                Escala vertical y horizontalmente según tus necesidades sin tiempo de inactividad.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border shadow-sm space-y-4">
              <div className="bg-[hsl(var(--primary)_/_0.1)] p-3 rounded-full w-fit">
                <Clock className="h-6 w-6 text-[hsl(var(--primary))]" />
              </div>
              <h3 className="text-xl font-bold">Backups automáticos</h3>
              <p className="text-[hsl(var(--muted-foreground))]">
                Copias de seguridad programadas y point-in-time recovery para proteger tus datos.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border shadow-sm space-y-4">
              <div className="bg-[hsl(var(--primary)_/_0.1)] p-3 rounded-full w-fit">
                <Code className="h-6 w-6 text-[hsl(var(--primary))]" />
              </div>
              <h3 className="text-xl font-bold">APIs intuitivas</h3>
              <p className="text-[hsl(var(--muted-foreground))]">
                Interfaces de programación sencillas para integrar con cualquier aplicación.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border shadow-sm space-y-4">
              <div className="bg-[hsl(var(--primary)_/_0.1)] p-3 rounded-full w-fit">
                <Database className="h-6 w-6 text-[hsl(var(--primary))]" />
              </div>
              <h3 className="text-xl font-bold">Múltiples motores</h3>
              <p className="text-[hsl(var(--muted-foreground))]">
                Soporte para PostgreSQL, MySQL, MongoDB y más, todo en una sola plataforma.
              </p>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="bg-slate-50 py-20">
          <div className="container space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Cómo funciona</h2>
              <p className="text-[hsl(var(--muted-foreground))] text-lg max-w-2xl mx-auto">
                Implementar y gestionar tu base de datos nunca ha sido tan sencillo
              </p>
            </div>
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Selecciona tu motor de base de datos</h3>
                    <p className="text-[hsl(var(--muted-foreground))] mt-2">
                      Elige entre PostgreSQL, MySQL, MongoDB y más según tus necesidades.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Configura tu instancia</h3>
                    <p className="text-[hsl(var(--muted-foreground))] mt-2">
                      Selecciona el tamaño, región y opciones de seguridad que necesitas.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Conecta tu aplicación</h3>
                    <p className="text-[hsl(var(--muted-foreground))] mt-2">
                      Utiliza nuestras APIs o conexiones directas para integrar con tu aplicación.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg border bg-[hsl(var(--background))] p-2 shadow-sm">
                <Image
                  src="/placeholder.svg"
                  alt="Dashboard configuration"
                  fill
                  className="object-cover rounded"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="container py-20 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Planes simples y transparentes</h2>
            <p className="text-[hsl(var(--muted-foreground))] text-lg max-w-2xl mx-auto">
              Sin sorpresas. Paga solo por lo que necesitas.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-8 rounded-lg border shadow-sm space-y-6">
              <div>
                <h3 className="text-xl font-bold">Desarrollador</h3>
                <p className="text-[hsl(var(--muted-foreground))] mt-2">Perfecto para proyectos personales y startups</p>
              </div>
              <div>
                <span className="text-4xl font-bold">€19</span>
                <span className="text-[hsl(var(--muted-foreground))]">/mes</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
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
                    className="h-5 w-5 text-[hsl(var(--primary))]"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>1GB de almacenamiento</span>
                </li>
                <li className="flex items-center gap-2">
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
                    className="h-5 w-5 text-[hsl(var(--primary))]"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>10 conexiones simultáneas</span>
                </li>
                <li className="flex items-center gap-2">
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
                    className="h-5 w-5 text-[hsl(var(--primary))]"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Backups diarios</span>
                </li>
              </ul>
              <Button className="w-full">Comenzar</Button>
            </div>
            <div className="bg-white p-8 rounded-lg border shadow-sm space-y-6 ring-2 ring-[hsl(var(--primary))]">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold">Profesional</h3>
                  <span className="bg-[hsl(var(--primary)_/_0.1)] text-[hsl(var(--primary))] text-xs px-2 py-1 rounded-full">Popular</span>
                </div>
                <p className="text-[hsl(var(--muted-foreground))] mt-2">Ideal para aplicaciones en producción</p>
              </div>
              <div>
                <span className="text-4xl font-bold">€49</span>
                <span className="text-[hsl(var(--muted-foreground))]">/mes</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
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
                    className="h-5 w-5 text-[hsl(var(--primary))]"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>10GB de almacenamiento</span>
                </li>
                <li className="flex items-center gap-2">
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
                    className="h-5 w-5 text-[hsl(var(--primary))]"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>50 conexiones simultáneas</span>
                </li>
                <li className="flex items-center gap-2">
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
                    className="h-5 w-5 text-[hsl(var(--primary))]"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Backups horarios</span>
                </li>
                <li className="flex items-center gap-2">
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
                    className="h-5 w-5 text-[hsl(var(--primary))]"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Soporte 24/7</span>
                </li>
              </ul>
              <Button className="w-full">Comenzar</Button>
            </div>
            <div className="bg-white p-8 rounded-lg border shadow-sm space-y-6">
              <div>
                <h3 className="text-xl font-bold">Empresarial</h3>
                <p className="text-[hsl(var(--muted-foreground))] mt-2">Para grandes empresas con necesidades específicas</p>
              </div>
              <div>
                <span className="text-4xl font-bold">€199</span>
                <span className="text-[hsl(var(--muted-foreground))]">/mes</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
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
                    className="h-5 w-5 text-[hsl(var(--primary))]"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>100GB+ de almacenamiento</span>
                </li>
                <li className="flex items-center gap-2">
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
                    className="h-5 w-5 text-[hsl(var(--primary))]"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Conexiones ilimitadas</span>
                </li>
                <li className="flex items-center gap-2">
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
                    className="h-5 w-5 text-[hsl(var(--primary))]"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Backups continuos</span>
                </li>
                <li className="flex items-center gap-2">
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
                    className="h-5 w-5 text-[hsl(var(--primary))]"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Soporte dedicado</span>
                </li>
                <li className="flex items-center gap-2">
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
                    className="h-5 w-5 text-[hsl(var(--primary))]"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>SLA garantizado</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">
                Contactar
              </Button>
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-slate-50 py-20">
          <div className="container space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Lo que dicen nuestros clientes</h2>
              <p className="text-[hsl(var(--muted-foreground))] text-lg max-w-2xl mx-auto">
                Miles de desarrolladores confían en nosotros para sus bases de datos
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg border shadow-sm space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 text-[hsl(var(--yellow-400))]"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-[hsl(var(--muted-foreground))]">
                  "Desde que migramos a esta plataforma, nuestros tiempos de respuesta mejoraron un 40%. El soporte
                  técnico es excepcional."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-[hsl(var(--slate-200))]"></div>
                  <div>
                    <p className="font-medium">María García</p>
                    <p className="text-sm text-[hsl(var(--muted-foreground))]">CTO, TechStart</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg border shadow-sm space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 text-[hsl(var(--yellow-400))]"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-[hsl(var(--muted-foreground))]">
                  "La facilidad de escalado nos permitió crecer de 1.000 a 100.000 usuarios sin preocuparnos por la
                  infraestructura."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-[hsl(var(--slate-200))]"></div>
                  <div>
                    <p className="font-medium">Carlos Rodríguez</p>
                    <p className="text-sm text-[hsl(var(--muted-foreground))]">Fundador, AppGrowth</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg border shadow-sm space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 text-[hsl(var(--yellow-400))]"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-[hsl(var(--muted-foreground))]">
                  "Los backups automáticos nos salvaron en más de una ocasión. La tranquilidad que nos da esta
                  plataforma no tiene precio."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-[hsl(var(--slate-200))]"></div>
                  <div>
                    <p className="font-medium">Laura Martínez</p>
                    <p className="text-sm text-[hsl(var(--muted-foreground))]">Lead Developer, DataFlow</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-20">
          <div className="rounded-lg bg-[hsl(var(--primary))] p-8 md:p-16 text-[hsl(var(--primary-foreground))]">
            <div className="mx-auto max-w-3xl text-center space-y-8">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Comienza a usar la mejor plataforma de bases de datos hoy mismo
              </h2>
              <p className="text-lg text-[hsl(var(--primary-foreground/_90))]">
                Únete a miles de desarrolladores que confían en nosotros para sus bases de datos. Prueba gratis durante
                14 días, sin tarjeta de crédito.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" variant="secondary">
                  Comenzar gratis
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-[hsl(var(--primary-foreground)_/_0.2)] hover:bg-[hsl(var(--primary-foreground)_/_0.1)]"
                >
                  Contactar con ventas
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-white">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Database className="h-6 w-6 text-[hsl(var(--primary))]" />
                <span className="text-xl font-bold">DBaaS</span>
              </div>
              <p className="text-[hsl(var(--muted-foreground))]">
                La plataforma de bases de datos como servicio más avanzada para desarrolladores modernos.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-4">Producto</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]">
                    Características
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]">
                    Precios
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]">
                    Documentación
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]">
                    Guías
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Empresa</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]">
                    Sobre nosotros
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]">
                    Carreras
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]">
                    Términos de servicio
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]">
                    Política de privacidad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]">
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]">
                    Seguridad
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t">
            <p className="text-center text-[hsl(var(--muted-foreground))]">
              &copy; {new Date().getFullYear()} DBaaS Inc. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}