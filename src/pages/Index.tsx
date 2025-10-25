import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлена:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/20 to-background">
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-playfair font-bold text-accent">ВУША</h1>
            <div className="hidden md:flex gap-6">
              <a href="#about" className="text-foreground/80 hover:text-accent transition-colors">Обо мне</a>
              <a href="#services" className="text-foreground/80 hover:text-accent transition-colors">Практики</a>
              <a href="#consultations" className="text-foreground/80 hover:text-accent transition-colors">Консультации</a>
              <a href="#directions" className="text-foreground/80 hover:text-accent transition-colors">Направления</a>
              <a href="#cats" className="text-foreground/80 hover:text-accent transition-colors">Помощь кошкам</a>
              <a href="#reviews" className="text-foreground/80 hover:text-accent transition-colors">Отзывы</a>
              <a href="#contact" className="text-foreground/80 hover:text-accent transition-colors">Контакты</a>
            </div>
            <Button variant="outline" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://cdn.poehali.dev/projects/eb05331b-73bb-4a5f-b51c-51c36b2cf680/files/4517bff5-6a68-4403-84b5-102530b754dd.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <div className="flex justify-center gap-8 mb-6 animate-float">
            <Icon name="Zap" size={48} className="text-accent" />
            <Icon name="Heart" size={48} className="text-secondary" />
            <Icon name="Sparkles" size={48} className="text-accent" />
          </div>
          <h2 className="text-5xl md:text-7xl font-playfair font-bold mb-6 bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent animate-fade-in">
            Возроди свою энергию — измени реальность
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in">
            Энергетическая работа помогает освободиться от невидимых блоков, вернуть силу, вдохновение и внутреннюю поддержку, чтобы жизнь снова наполнилась движением и смыслом.
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 animate-fade-in">
            Записаться на сеанс
          </Button>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl font-playfair font-bold text-center mb-12 text-accent">Обо мне</h3>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3">
              <div className="aspect-square rounded-lg overflow-hidden border-2 border-accent/30">
                <img 
                  src="https://cdn.poehali.dev/projects/eb05331b-73bb-4a5f-b51c-51c36b2cf680/files/f3a37c1d-977f-4a7e-bd22-bea26213ac9b.jpg" 
                  alt="Консультация таролога" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 space-y-4 text-muted-foreground">
              <p>
                Приветствую вас в мире древних знаний и мистических практик. Меня зовут [Ваше имя], и я практикующий эзотерик с более чем [X] летним опытом работы с различными системами предсказаний и духовными практиками.
              </p>
              <p>
                Моя миссия — помочь вам найти ответы на важные вопросы через Таро, раскрыть коды судьбы с помощью нумерологии, понять влияние планет через астрологию и получить мудрость предков через рунические практики. Я работаю с медитациями, энергетическими практиками и помогаю людям найти свой духовный путь.
              </p>
              <p>
                Помимо эзотерических практик, я занимаюсь пристройством кошек — этих магических существ, которые издревле считались проводниками между мирами и хранителями священных знаний.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-playfair font-bold text-center mb-12 text-accent">Эзотерические практики</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-card border-border hover:border-accent transition-colors group">
              <CardContent className="p-6 text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name="Sparkles" size={40} className="text-accent" />
                  </div>
                </div>
                <h4 className="text-2xl font-playfair font-semibold">Гадание на Таро</h4>
                <p className="text-muted-foreground">
                  Классические расклады на любовь, работу, финансы и жизненный путь
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-accent transition-colors group">
              <CardContent className="p-6 text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name="BookOpen" size={40} className="text-accent" />
                  </div>
                </div>
                <h4 className="text-2xl font-playfair font-semibold">Нумерология</h4>
                <p className="text-muted-foreground">
                  Расчет матрицы судьбы, кода личности и прогноз по персональным числам
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-accent transition-colors group">
              <CardContent className="p-6 text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name="MessageCircle" size={40} className="text-accent" />
                  </div>
                </div>
                <h4 className="text-2xl font-playfair font-semibold">Рунические практики</h4>
                <p className="text-muted-foreground">
                  Гадание на рунах, создание рунических амулетов и защитных ставов
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="consultations" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl font-playfair font-bold text-center mb-12 text-accent">Консультации</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-primary border-border">
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <Icon name="Video" size={24} className="text-accent" />
                  <h4 className="text-xl font-playfair font-semibold">Онлайн-сеанс</h4>
                </div>
                <p className="text-muted-foreground">Онлайн-консультация по любому направлению в удобное время</p>
                <p className="text-2xl font-bold text-accent">3000 ₽</p>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Записаться
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-primary border-border">
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <Icon name="Users" size={24} className="text-accent" />
                  <h4 className="text-xl font-playfair font-semibold">Личная встреча</h4>
                </div>
                <p className="text-muted-foreground">Индивидуальный сеанс в уютной атмосфере студии</p>
                <p className="text-2xl font-bold text-accent">5000 ₽</p>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Записаться
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="directions" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-playfair font-bold text-center mb-12 text-accent">Направления работы</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card/50 border-border hover:border-accent transition-colors">
              <CardContent className="p-6 text-center space-y-3">
                <Icon name="Star" size={40} className="text-accent mx-auto" />
                <h4 className="text-xl font-playfair font-semibold">Астрология</h4>
                <p className="text-sm text-muted-foreground">Натальная карта, совместимость, транзиты</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-border hover:border-accent transition-colors">
              <CardContent className="p-6 text-center space-y-3">
                <Icon name="Brain" size={40} className="text-accent mx-auto" />
                <h4 className="text-xl font-playfair font-semibold">Медитации</h4>
                <p className="text-sm text-muted-foreground">Управляемые практики, работа с подсознанием</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-border hover:border-accent transition-colors">
              <CardContent className="p-6 text-center space-y-3">
                <Icon name="Sparkles" size={40} className="text-accent mx-auto" />
                <h4 className="text-xl font-playfair font-semibold">Энергопрактики</h4>
                <p className="text-sm text-muted-foreground">Чакры, аура, энергетическая защита</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-border hover:border-accent transition-colors">
              <CardContent className="p-6 text-center space-y-3">
                <Icon name="Flame" size={40} className="text-accent mx-auto" />
                <h4 className="text-xl font-playfair font-semibold">Свечная магия</h4>
                <p className="text-sm text-muted-foreground">Ритуалы, обряды, работа с огнём</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="cats" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-center gap-4 mb-12">
            <Icon name="Cat" size={48} className="text-accent animate-float" />
            <h3 className="text-4xl font-playfair font-bold text-accent">Помощь в пристройстве кошек</h3>
          </div>
          <div className="bg-card/50 rounded-lg p-8 border border-border relative overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-64 opacity-20">
              <img 
                src="https://cdn.poehali.dev/projects/eb05331b-73bb-4a5f-b51c-51c36b2cf680/files/e472ee0c-30ce-48e7-82d9-5cce381c5d4f.jpg" 
                alt="" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="text-muted-foreground text-center mb-6 relative z-10">
              Кошки — это мистические существа, обладающие особой энергетикой. Я помогаю найти дом для бездомных кошек, 
              верю, что каждая из них заслуживает любви и заботы.
            </p>
            <p className="text-center text-foreground font-semibold mb-6 relative z-10">
              Если вы хотите принять кошку или знаете о животном, нуждающемся в помощи — свяжитесь со мной.
            </p>
            <div className="flex justify-center">
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                Связаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-4xl font-playfair font-bold text-center mb-12 text-accent">Отзывы</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: 'Анна',
                text: 'Невероятно точный расклад! Все, что было сказано, сбылось. Теперь обращаюсь только сюда.',
                stars: 5
              },
              {
                name: 'Мария',
                text: 'Очень понравилась атмосфера консультации. Получила ответы на все свои вопросы.',
                stars: 5
              },
              {
                name: 'Елена',
                text: 'Профессиональный подход, глубокое толкование карт. Рекомендую всем!',
                stars: 5
              },
              {
                name: 'Ольга',
                text: 'Спасибо за помощь с пристройством кошки! Нашли ей прекрасный дом.',
                stars: 5
              }
            ].map((review, idx) => (
              <Card key={idx} className="bg-primary border-border">
                <CardContent className="p-6 space-y-3">
                  <div className="flex gap-1">
                    {[...Array(review.stars)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                  <p className="font-semibold text-foreground">— {review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h3 className="text-4xl font-playfair font-bold text-center mb-12 text-accent">Контакты</h3>
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Введите ваше имя"
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="example@email.com"
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Расскажите, что вас интересует..."
                    rows={5}
                    className="bg-background border-border"
                  />
                </div>
                <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                  Отправить
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Icon name="Mail" size={20} className="text-accent" />
                  <span>tarot@example.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Icon name="Phone" size={20} className="text-accent" />
                  <span>+7 (XXX) XXX-XX-XX</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Icon name="Instagram" size={20} className="text-accent" />
                  <span>@tarot_username</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border bg-card/30">
        <div className="container mx-auto text-center text-muted-foreground">
          <div className="flex justify-center gap-4 mb-4">
            <Icon name="Moon" size={24} className="text-accent animate-float" />
            <Icon name="Star" size={24} className="text-secondary animate-float" />
            <Icon name="Sparkles" size={24} className="text-accent animate-float" />
          </div>
          <p className="font-playfair text-lg mb-2">ВУША — Путь к познанию себя</p>
          <p className="text-sm">© 2025 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;