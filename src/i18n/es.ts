export const es = {
  meta: {
    title: 'Damn Luck — Inteligencia de mercados deportivos',
    description:
      'Plataforma de inteligencia de mercados deportivos en tiempo real. Detectamos oportunidades y convertimos datos complejos en decisiones claras. Sin suerte, solo números.',
  },
  nav: {
    langSwitch: 'EN',
    langSwitchHref: '/en/',
  },
  hero: {
    badge: 'Motor de probabilidad en vivo',
    headline: ['Sin suerte.', 'Solo probabilidad.', 'Gana.'],
    description:
      'Plataforma de inteligencia de mercados deportivos en tiempo real. Agregamos datos, detectamos oportunidades matemáticas y transformamos información compleja en decisiones accionables.',
    cta: 'Unirse a la lista de espera',
    ctaSecondary: 'Saber más',
  },
  about: {
    badge: '¿Qué es Damn Luck?',
    title: 'Donde otros ven suerte,\nnosotros vemos probabilidad.',
    body: 'Damn Luck es una plataforma enfocada en el análisis de mercados deportivos en tiempo real. Combinamos modelos probabilísticos, análisis de datos y velocidad para aproximarnos a los mercados de apuestas con la mentalidad del análisis cuantitativo, no del azar.',
    vision:
      'Nuestro objetivo es redefinir cómo las personas interactúan con los mercados deportivos, dándoles las herramientas que usan los profesionales.',
  },
  features: {
    badge: 'En qué nos enfocamos',
    title: 'Las variables que importan',
    items: [
      {
        title: 'Inteligencia en tiempo real',
        description:
          'Datos de mercado agregados al instante. Detectamos movimientos antes de que el mercado se ajuste.',
      },
      {
        title: 'Análisis probabilístico',
        description:
          'Cada decisión respaldada por modelos. Sin corazonadas, sin intuición — solo matemáticas.',
      },
      {
        title: 'Detección de oportunidades',
        description:
          'Identificamos gaps matemáticos en los mercados automáticamente, antes de que desaparezcan.',
      },
      {
        title: 'Experiencia clara e intuitiva',
        description:
          'Información compleja presentada de forma limpia. La complejidad es nuestra, la claridad es tuya.',
      },
      {
        title: 'Visualización rápida y fiable',
        description:
          'Latencia mínima. Los datos llegan cuando los necesitas, no después.',
      },
      {
        title: 'Decisiones más inteligentes',
        description:
          'No te decimos en qué apostar. Te damos los datos para que decidas mejor.',
      },
    ],
  },
  philosophy: {
    quote: '"La suerte es solo aquello que todavía no ha sido calculado."',
    tagline: 'Las matemáticas siempre ganan.',
  },
  waitlist: {
    badge: 'Acceso anticipado',
    title: 'Sé el primero en entrar.',
    description:
      'Estamos construyendo algo diferente. Únete a la lista de espera y obtén acceso anticipado cuando abramos.',
    placeholder: 'tu@email.com',
    cta: 'Notificarme',
    disclaimer: 'Sin spam. Solo te avisamos cuando esté listo.',
    success: '¡Listo! Te avisaremos cuando abramos.',
    error: 'Algo salió mal. Inténtalo de nuevo.',
  },
  footer: {
    tagline: 'No se necesita suerte.',
    copy: '© 2026 Damn Luck.',
  },

} as const;

export type Translations = typeof es;
