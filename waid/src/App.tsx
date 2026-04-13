import { useState } from 'react';
import { Play, Star, Clock, Camera, Sparkles, ChevronDown, Check, Film } from 'lucide-react';

function App() {
  const [expandedFilm, setExpandedFilm] = useState<'film1' | 'film2' | null>(null);

  const scenes = [
    {
      num: '01',
      title: 'Abertura: "A gente acredita"',
      time: '8s',
      image: 'Close-ups de mãos trabalhando com dedicação — escrevendo, pintando, criando. Banco de imagens cinematográfico — cenas de artesãos e criadores',
      text: 'A gente acredita em quem continua.'
    },
    {
      num: '02',
      title: 'Repetição e melhoria',
      time: '10s',
      image: 'Time-lapse do processo criativo: rabiscar, apagar, refazer, aperfeiçoar. Banco de imagens — artistas em processo de criação',
      text: 'Em quem repete até melhorar. Aprende, ajusta, tenta de novo e cresce no processo.'
    },
    {
      num: '03',
      title: 'Tempo como valor',
      time: '9s',
      image: 'Relógio antigo contrastando com natureza em crescimento. Banco de imagens — elementos temporais e natureza',
      text: 'Porque tudo o que realmente importa leva tempo. Construir leva tempo. Evoluir leva tempo. Aprender leva tempo.'
    },
    {
      num: '04',
      title: 'A obsessão pela velocidade',
      time: '10s',
      image: 'Cidade frenética, pessoas correndo, telas piscando, trânsito acelerado. Banco de imagens — time-lapse urbano',
      text: 'Vivemos numa época obcecada por velocidade. Atalhos para tudo.'
    },
    {
      num: '05',
      title: 'Contraste: Pressa vs Profundidade',
      time: '8s',
      image: 'Tela dividida: esteira de academia vs caminhada tranquila na floresta. Banco de imagens — contraste de ritmos',
      text: 'Mas as mudanças que realmente importam não nascem da pressa.'
    },
    {
      num: '06',
      title: 'Nascimento da mudança',
      time: '9s',
      image: 'Semente brotando, raízes crescendo em macro fotografia. Banco de imagens — macro de natureza e crescimento',
      text: 'Elas nascem da consistência. Da prática que se aprofunda.'
    },
    {
      num: '07',
      title: 'Prática profunda',
      time: '10s',
      image: 'Atleta treinando, músico ensaiando escalas, dançarino repetindo movimentos. Banco de imagens — treino e prática dedicada',
      text: 'Da evolução que acontece todos os dias.'
    },
    {
      num: '08',
      title: 'Conhecimento em movimento',
      time: '11s',
      image: 'Pessoas caminhando com propósito, cidade em movimento, energia. Banco de imagens — movimento urbano com propósito',
      text: 'Conhecimento, sozinho, não muda nada. Ele precisa ganhar forma.'
    },
    {
      num: '09',
      title: 'Impacto real',
      time: '10s',
      image: 'Vista aérea de pessoas em círculo, conexões se formando, ondas de impacto. Banco de imagens — aerial e conexão humana',
      text: 'Precisa virar prática. Precisa se transformar em movimento. Porque quando o conhecimento se move, algo muda.'
    },
    {
      num: '10',
      title: 'Propósito da existência',
      time: '9s',
      image: 'Mãos unidas, equipe construindo algo juntos, colaboração. Banco de imagens — trabalho em equipe e colaboração',
      text: 'Pessoas evoluem. Negócios avançam. Ideias se espalham.'
    },
    {
      num: '11',
      title: 'Sustentando jornadas',
      time: '10s',
      image: 'Drone sobre estradas longas, pessoa caminhando rumo ao horizonte. Banco de imagens — jornada e caminho',
      text: 'É por isso que existimos. Para dar tração ao conhecimento. Para sustentar jornadas que começam pequenas.'
    },
    {
      num: '12',
      title: 'Fechamento épico',
      time: '12s',
      image: 'Silhueta no horizonte, nascer do sol dourado, esperança. Banco de imagens — paisagens épicas e amanhecer',
      text: 'Para sustentar jornadas que começam pequenas, mas que podem chegar longe.'
    },
  ];

  const animations = [
    { name: 'Text Reveal', desc: 'Palavras aparecem com fade suave' },
    { name: 'Morphing Shapes', desc: 'Formas geométricas que se transformam' },
    { name: 'Motion Graphics', desc: 'Elementos em movimento contínuo' },
  ];

  return (
    <div className="min-h-screen bg-[#FEFEFE] text-[#1A1A1A] font-['Inter',sans-serif]">
      {/* Header - Elegante */}
      <header className="px-6 md:px-12 py-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1D4E38] to-[#3AA862] flex items-center justify-center font-bold text-white text-xl">
            O
          </div>
          <div>
            <span className="text-xl font-semibold tracking-tight">Organika</span>
            <span className="block text-xs text-[#8A8A7A] mt-0.5">Produção Cinematográfica</span>
          </div>
        </div>
        <button className="text-sm text-[#1D4E38] hover:text-[#3AA862] transition-colors font-medium tracking-wide">
          ← Voltar
        </button>
      </header>

      {/* Hero Section - Editorial */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-6xl mx-auto">
        <div className="text-center">
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#1D4E38] mb-6 font-semibold">Orçamento Cinematográfico</p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
            Orçamento
            <br />
            <span className="text-[#1D4E38]">para Waid</span>
          </h1>

          <p className="text-2xl md:text-3xl text-[#3A3A3A] mb-6 font-light">Um Filme + Cinco Shorts</p>

          <p className="text-lg md:text-xl text-[#6B6B6B] leading-relaxed mb-4 italic">
            "A Gente Acredita em Quem Continua"
          </p>

          <p className="text-sm text-[#8A8A8A] mb-10">
            Projeto de vídeo manifesto com versões para redes sociais
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center gap-3 px-5 py-3 bg-[#F8F8F8] rounded-full border border-[#E5E5E5]">
              <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                <Camera className="w-4 h-4 text-[#D4AF37]" />
              </div>
              <div>
                <span className="text-xs text-[#8A8A8A] block">Filme Principal</span>
                <span className="text-sm font-medium">10:00 minutos</span>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 bg-[#F8F8F8] rounded-full border border-[#E5E5E5]">
              <div className="w-8 h-8 rounded-full bg-[#9333EA]/10 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[#9333EA]" />
              </div>
              <div>
                <span className="text-xs text-[#8A8A8A] block">Short Films</span>
                <span className="text-sm font-medium">5x até 30seg</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-6 md:px-12 max-w-6xl mx-auto">
        <div className="h-px bg-[#E5E5E5]" />
      </div>

      {/* Two Films Section */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#3AA862] mb-4 font-semibold">Proposta</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">Você Recebe Tudo</h2>
          <p className="text-base text-[#6B6B6B] max-w-2xl mx-auto">
            Um filme completo + 5 shorts otimizados para redes sociais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Film 1 */}
          <div
            className="bg-white rounded-2xl p-8 border border-[#E5E5E5] hover:border-[#D4AF37]/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
            onClick={() => setExpandedFilm(expandedFilm === 'film1' ? null : 'film1')}
          >
            <div className="flex items-start justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center">
                  <Camera className="w-7 h-7 text-[#D4AF37]" />
                </div>
                <div>
                  <span className="text-xs tracking-[0.2em] uppercase text-[#D4AF37] font-bold block">Filme Principal</span>
                  <span className="text-sm text-[#6B6B6B] mt-1 block">10 minutos</span>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 text-[#8A8A8A] transition-transform ${expandedFilm === 'film1' ? 'rotate-180' : ''}`} />
            </div>

            <h3 className="text-2xl font-bold mb-3 text-[#1A1A1A]">Filme Cinematográfico</h3>
            <p className="text-sm text-[#6B6B6B] leading-relaxed mb-6">
              Imagens de alta qualidade de banco cinematográfico. Montagem com ritmo, emoção e alma.
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-[#F0F0F0]">
              <div className="flex items-center gap-6 text-sm text-[#6B6B6B]">
                <span>Duração: <strong className="text-[#1A1A1A]">10:00 min</strong></span>
                <span>12 cenas</span>
              </div>
              <div className="text-xl font-bold text-[#D4AF37]">R$ 3.500</div>
            </div>
          </div>

          {/* Short Films */}
          <div
            className="bg-white rounded-2xl p-8 border border-[#E5E5E5] hover:border-[#9333EA]/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
            onClick={() => setExpandedFilm(expandedFilm === 'film2' ? null : 'film2')}
          >
            <div className="flex items-start justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#9333EA]/10 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-[#9333EA]" />
                </div>
                <div>
                  <span className="text-xs tracking-[0.2em] uppercase text-[#9333EA] font-bold block">Short Films</span>
                  <span className="text-sm text-[#6B6B6B] mt-1 block">5 unidades</span>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 text-[#8A8A8A] transition-transform ${expandedFilm === 'film2' ? 'rotate-180' : ''}`} />
            </div>

            <h3 className="text-2xl font-bold mb-3 text-[#1A1A1A]">5 Shorts para Redes</h3>
            <p className="text-sm text-[#6B6B6B] leading-relaxed mb-6">
              Versões de até 30 segundos cada, extraídas do filme principal. Otimizadas para Instagram, TikTok e YouTube Shorts.
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-[#F0F0F0]">
              <div className="flex items-center gap-6 text-sm text-[#6B6B6B]">
                <span>Duração: <strong className="text-[#1A1A1A]">até 30seg</strong></span>
                <span>5 unidades</span>
              </div>
              <div className="text-xl font-bold text-[#9333EA]">R$ 1.500</div>
            </div>
          </div>
        </div>
      </section>

      {/* Film 1 Details */}
      {expandedFilm === 'film1' && (
        <section className="px-6 md:px-12 py-12 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-[#E5E5E5]">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center">
                <Camera className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <h3 className="text-2xl font-bold text-[#D4AF37]">Filme 1</h3>
              <span className="text-[#E5E5E5] text-2xl">—</span>
              <span className="text-lg text-[#6B6B6B]">Roteiro Completo</span>
            </div>

            <div className="flex items-center gap-8 mb-10 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-[#1A1A1A] font-medium">10:00 minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <Film className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-[#1A1A1A] font-medium">12 cenas</span>
              </div>
              <div className="px-4 py-1.5 bg-[#D4AF37]/10 rounded-full">
                <span className="text-[#D4AF37] font-bold">R$ 3.500</span>
              </div>
            </div>

            {/* Scenes - Clean Layout */}
            <div className="space-y-4 mb-10">
              {scenes.map((scene) => (
                <div key={scene.num} className="bg-[#FAFAFA] rounded-xl p-6 border border-[#F0F0F0]">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[#D4AF37] font-bold text-lg font-['Space_Mono',monospace] w-8">{scene.num}</span>
                    <span className="text-[#1A1A1A] font-semibold flex-1">{scene.title}</span>
                    <span className="text-xs text-[#1D4E38] font-medium px-3 py-1 bg-[#1D4E38]/5 rounded-full">{scene.time}</span>
                  </div>

                  <p className="text-sm text-[#8A8A8A] leading-relaxed mb-4 pl-12">{scene.image}</p>

                  <p className="text-base text-[#3A3A3A] leading-relaxed italic pl-12 border-l-2 border-[#E5E5E5]">
                    "{scene.text}"
                  </p>
                </div>
              ))}
            </div>

            {/* What's Included */}
            <div className="bg-[#FAFAFA] rounded-xl p-8 border border-[#F0F0F0]">
              <h5 className="text-sm tracking-[0.2em] uppercase text-[#1A1A1A] font-bold mb-6">O que está incluído</h5>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  'Imagens 4K do banco cinematográfico',
                  '10 minutos de filme final',
                  'Narração profissional',
                  'Trilha sonora licenciada',
                  'Color grading cinematográfico',
                  'Entrega em 10-12 dias',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#1D4E38]/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#1D4E38]" />
                    </div>
                    <span className="text-sm text-[#3A3A3A]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Film 2 Details - Short Films */}
      {expandedFilm === 'film2' && (
        <section className="px-6 md:px-12 py-12 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-[#E5E5E5]">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 bg-[#9333EA]/10 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#9333EA]" />
              </div>
              <h3 className="text-2xl font-bold text-[#9333EA]">5 Short Films</h3>
              <span className="text-[#E5E5E5] text-2xl">—</span>
              <span className="text-lg text-[#6B6B6B]">Para Redes Sociais</span>
            </div>

            <div className="flex items-center gap-8 mb-8 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#9333EA]" />
                <span className="text-[#1A1A1A] font-medium">até 30 segundos cada</span>
              </div>
              <div className="px-4 py-1.5 bg-[#9333EA]/10 rounded-full">
                <span className="text-[#9333EA] font-bold">5 unidades</span>
              </div>
              <div className="px-4 py-1.5 bg-[#1D4E38]/10 rounded-full">
                <span className="text-[#1D4E38] font-bold">R$ 1.500</span>
              </div>
            </div>

            <div className="bg-[#FAFAFA] rounded-xl p-8 border border-[#F0F0F0] mb-8">
              <h5 className="text-sm tracking-[0.2em] uppercase text-[#1A1A1A] font-bold mb-6">O que está incluído</h5>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  '5 shorts de até 30 segundos',
                  'Extraídos do filme principal',
                  'Otimizados para Instagram/TikTok/Shorts',
                  'Formatos verticais e horizontais',
                  'Trilha sonora licenciada',
                  'Entrega junto com o filme principal',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#1D4E38]/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#1D4E38]" />
                    </div>
                    <span className="text-sm text-[#3A3A3A]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
              {['Instagram', 'TikTok', 'YouTube Shorts', 'LinkedIn', 'Facebook'].map((platform) => (
                <div key={platform} className="bg-[#FAFAFA] rounded-xl p-5 border border-[#F0F0F0] text-center">
                  <span className="text-sm font-medium text-[#1A1A1A] block">{platform}</span>
                  <span className="text-xs text-[#8A8A8A]">Otimizado</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="px-6 md:px-12 py-16 border-t border-[#E5E5E5]">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1D4E38] to-[#3AA862] flex items-center justify-center font-bold text-white">
              O
            </div>
            <span className="font-semibold text-[#1A1A1A]">Organika</span>
          </div>
          <p className="text-[#6B6B6B] mb-4">Orçamento para Waid</p>
          <p className="text-lg text-[#1A1A1A] mb-8 font-light italic">
            "A Gente Acredita em Quem Continua"
          </p>
          <p className="text-xs text-[#8A8A8A]">
            © 2024 — Produção cinematográfica com imagens de banco e animação glassmorphism
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;