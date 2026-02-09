export const landingStyles = {
  page: {
    root: 'min-h-screen bg-slate-50 text-slate-900',
  },

  header: {
    root: 'sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100',
    container: 'h-16 flex items-center justify-between',
    brand: 'font-extrabold text-blue-800 tracking-tight',
    nav: 'hidden md:flex items-center gap-8 text-sm text-slate-700',
    navLink: 'hover:text-slate-900',
    ctaDesktop: 'px-5 py-2.5 rounded-lg',
    ctaMobileWrap: 'md:hidden',
    ctaMobile: 'px-4 py-2 rounded-lg',
  },

  hero: {
    root: 'pt-14 pb-16 bg-white',
    inner: 'text-center max-w-4xl mx-auto',
    title: 'text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900',
    brand: 'text-blue-800',
    subtitle: 'mt-6 text-sm sm:text-base text-slate-600 leading-relaxed',
    chips: 'mt-8 flex flex-wrap justify-center gap-2',
    ctas: 'mt-10 flex flex-col sm:flex-row justify-center gap-3',
    ctaButton: 'px-8 py-3.5 rounded-xl',
    ctaInline: 'inline-flex items-center gap-2',
  },

  stats: {
    root: 'bg-blue-900 text-white',
    container: 'py-8',
    grid: 'grid grid-cols-1 sm:grid-cols-3 gap-10 text-center',
    item: 'space-y-1',
    label: 'text-[11px] font-semibold text-white/70',
    value: 'text-3xl font-extrabold tracking-tight',
  },

  about: {
    root: 'py-16 bg-white',
    grid: 'grid grid-cols-1 lg:grid-cols-2 gap-12 items-start',
    title: 'text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-snug',
    titleAccent: 'text-blue-800',
    p: 'text-sm text-slate-600 leading-relaxed',
    p1: 'mt-6',
    p2: 'mt-5',
    right: 'lg:pl-8',
  },

  carousel: {
    root: 'relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(2,6,23,0.14)] bg-slate-100',
    img: 'w-full h-[280px] sm:h-[320px] object-cover',
    dotsWrap: 'absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2',
    dotBase: 'h-2.5 rounded-full transition-all',
    dotActive: 'w-8 bg-blue-700',
    dotInactive: 'w-2.5 bg-white/70 hover:bg-white',
  },

  services: {
    root: 'py-16 bg-white',
    headingWrap: 'text-center',
    title: 'text-3xl font-extrabold tracking-tight text-slate-900',
    subtitle: 'mt-3 text-sm text-slate-600',
    cardsGrid: 'mt-12 grid grid-cols-1 md:grid-cols-3 gap-6',
    cardsGridBottom: 'md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6',
    cardsSpacer: 'md:col-span-1',
    disclaimerWrap: 'mt-10 flex justify-center',
    disclaimer:
      'max-w-3xl w-full rounded-xl bg-blue-50 border border-blue-100 px-6 py-4 text-center text-sm text-blue-900',
    card: {
      root: 'rounded-2xl bg-white border border-slate-100 shadow-sm p-6',
      title: 'text-base font-extrabold text-slate-900',
      meta: 'mt-5 space-y-3 text-sm',
      metaRow: 'flex items-center justify-between text-slate-500',
      cost: 'font-bold text-blue-700',
      duration: 'font-semibold text-slate-900',
      extra: 'text-xs text-rose-500 text-right',
      desc: 'mt-5 pt-5 border-t border-slate-100 text-sm text-slate-600 leading-relaxed',
    },
  },

  inquiry: {
    root: 'py-20 bg-white',
    grid: 'grid grid-cols-1 lg:grid-cols-2 gap-12 items-start',
    title: 'text-3xl font-extrabold tracking-tight text-slate-900',
    subtitle: 'mt-4 text-sm text-slate-600 leading-relaxed',
    stepsGrid: 'mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg',
    stepCard: 'rounded-xl border border-slate-100 bg-white shadow-sm px-6 py-5 flex items-center gap-4',
    stepNo: 'text-blue-800 font-extrabold',
    stepTitle: 'font-semibold text-slate-800',
    formCard: 'bg-white rounded-2xl border border-slate-100 shadow-[0_30px_80px_rgba(2,6,23,0.10)] p-8',
    form: 'space-y-5',
    field: 'space-y-2',
    label: 'text-sm font-semibold text-slate-800',
    input:
      'w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200',
    select:
      'w-full rounded-xl border border-slate-200 px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-200',
    submit: 'w-full py-4 rounded-xl text-base font-extrabold',
    consent: 'text-[11px] text-slate-400 text-center',
  },

  floating: {
    wrap: 'fixed right-4 bottom-4 z-50 flex flex-col gap-3',
    call:
      'inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 shadow-lg border border-slate-200 text-sm font-semibold text-slate-800 hover:bg-slate-50',
    kakao:
      'inline-flex items-center gap-2 rounded-full bg-yellow-300 px-4 py-3 shadow-lg border border-yellow-200 text-sm font-semibold text-slate-900 hover:bg-yellow-200',
  },
} as const;

