export const landingStyles = {
  page: {
    root: 'min-h-screen bg-slate-50 text-slate-900',
  },

  header: {
    root: 'sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100',
    container: 'h-16 flex items-center justify-between',
    brand: 'font-extrabold text-[#2E75CB] tracking-tight',
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
    brand: 'text-[#2E75CB]',
    subtitle: 'mt-6 text-sm sm:text-base text-slate-600 leading-relaxed',
    chips: 'mt-8 flex flex-wrap justify-center gap-2',
    ctas: 'mt-10 flex flex-col sm:flex-row justify-center gap-3',
    ctaButton: 'px-8 py-3.5 rounded-xl',
    ctaInline: 'inline-flex items-center gap-2',
  },

  stats: {
    root: 'bg-[#1a5090] text-white',
    container: 'py-8',
    grid: 'grid grid-cols-1 sm:grid-cols-3 gap-10 text-center',
    item: 'space-y-1',
    label: 'text-[11px] font-semibold text-white/70',
    value: 'text-3xl font-extrabold tracking-tight',
  },

  about: {
    root: 'py-16 bg-white',
    grid: 'grid grid-cols-1 lg:grid-cols-2 gap-12 items-center',
    title: 'text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-snug',
    titleAccent: 'text-[#2E75CB]',
    p: 'text-base text-slate-600 leading-relaxed whitespace-pre-line',
    p1: 'mt-6',
    p2: 'mt-5',
    right: 'lg:pl-8',
  },

  carousel: {
    root: 'relative rounded-2xl overflow-hidden bg-white',
    img: 'w-full h-[280px] sm:h-[320px] object-cover',
    dotsWrap: 'absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2',
    dotBase: 'h-2.5 rounded-full transition-all',
    dotActive: 'w-8 bg-[#2E75CB]',
    dotInactive: 'w-2.5 bg-white/70 hover:bg-white',
  },

  services: {
    root: 'py-16 bg-white',
    headingWrap: 'text-center',
    title: 'text-3xl font-extrabold tracking-tight text-slate-900',
    subtitle: 'mt-3 text-sm text-slate-600',
    cardsGrid: 'mt-12 grid grid-cols-1 md:grid-cols-3 gap-6',
    disclaimerWrap: 'mt-10 flex justify-center',
    disclaimer:
      'max-w-3xl w-full rounded-xl bg-[#2E75CB]/10 border border-[#2E75CB]/20 px-6 py-4 text-center text-sm text-[#1a5090]',
    card: {
      root: 'rounded-2xl bg-white border border-slate-100 shadow-sm p-6 flex flex-col',
      top: 'min-h-[7.5rem] flex flex-col',
      featured: 'inline-flex items-center gap-1.5 text-xs font-semibold text-[#2E75CB] mb-3',
      featuredIcon: 'w-3.5 h-3.5',
      title: 'text-base font-extrabold text-slate-900',
      meta: 'mt-5 space-y-3 text-sm',
      metaRow: 'flex items-center justify-between text-slate-500',
      costWrapper: 'flex items-center gap-2',
      oldCost: 'text-xs text-rose-500 line-through',
      cost: 'font-bold text-[#2E75CB]',
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
    stepNo: 'text-[#2E75CB] font-extrabold',
    stepTitle: 'font-semibold text-slate-800',
    formCard: 'bg-white rounded-2xl border border-slate-100 shadow-[0_30px_80px_rgba(2,6,23,0.10)] p-8',
    form: 'space-y-5',
    field: 'space-y-2',
    label: 'text-sm font-semibold text-slate-800',
    input:
      'w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2E75CB]/30',
    select:
      'w-full rounded-xl border border-slate-200 px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#2E75CB]/30',
    submit: 'w-full py-4 rounded-xl text-base font-extrabold',
    consent: 'text-[11px] text-slate-400 text-center',
  },

  floating: {
    wrap: 'fixed right-4 bottom-4 z-50 flex flex-col gap-3',
    call:
      'inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 shadow-lg border border-slate-200 text-sm font-semibold text-slate-800 hover:bg-slate-50',
  },
} as const;

