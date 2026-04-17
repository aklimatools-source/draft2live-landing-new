import { NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Navigation from '@/components/Navigation';
import Footer from '@/components/sections/Footer';
import Link from 'next/link';
import messages from '../../../messages/uk.json';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Політика конфіденційності | Draft2Live',
  description: 'Політика конфіденційності Draft2Live — обробка персональних даних відповідно до GDPR та польського законодавства.',
};

export default function PrivacyPage() {
  setRequestLocale('uk');
  return (
    <NextIntlClientProvider locale="uk" messages={messages}>
      <Navigation />
      <main className="min-h-screen pt-32 pb-20">
        <article className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link href="/" className="text-primary text-sm hover:underline mb-8 inline-block">&larr; На головну</Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Політика конфіденційності</h1>
          <p className="text-text-muted text-sm mb-12">Останнє оновлення: 10 квітня 2026</p>

          <div className="prose-legal space-y-8 text-text-secondary text-[15px] leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Загальні положення</h2>
              <p>Ця Політика конфіденційності пояснює, як Aklima Polska sp. z o.o. з зареєстрованим офісом у Варшаві (ul. Postępu 15, 02-676 Warszawa, KRS: 0000978391, NIP: 9512544995, REGON: 522520422) (далі — «Оператор», «ми»), що керує платформою Draft2Live (далі — «Платформа»), збирає, обробляє, зберігає та захищає ваші персональні дані відповідно до Загального регламенту захисту даних (Regulation (EU) 2016/679, далі — GDPR) та Закону Республіки Польща від 10 травня 2018 року про захист персональних даних.</p>
              <p className="mt-3">Використовуючи Платформу, ви підтверджуєте, що ознайомились з цією Політикою. Якщо ви не згодні з умовами обробки даних, будь ласка, не використовуйте Платформу.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Контролер даних</h2>
              <div className="p-4 rounded-xl bg-white/5 border border-border">
                <p><strong className="text-white">Aklima Polska sp. z o.o.</strong></p>
                <p className="mt-1">ul. Postępu 15, 02-676 Warszawa, Polska</p>
                <p className="mt-1">KRS: 0000978391 | NIP: 9512544995 | REGON: 522520422</p>
                <p className="mt-1">Платформа: Draft2Live</p>
                <p className="mt-1">Email: <a href="mailto:info@draft2live.ai" className="text-primary hover:underline">info@draft2live.ai</a></p>
                <p className="mt-1">Веб-сайт: <a href="https://draft2live.ai" className="text-primary hover:underline">draft2live.ai</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Які дані ми збираємо</h2>

              <h3 className="text-lg font-semibold text-white mt-6 mb-2">3.1. Дані, які ви надаєте безпосередньо</h3>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong className="text-white">Реєстраційні дані:</strong> імʼя, прізвище, електронна пошта, пароль</li>
                <li><strong className="text-white">Платіжні дані:</strong> інформація кредитної/дебетової картки, платіжна адреса (обробляються через сертифікованого платіжного провайдера)</li>
                <li><strong className="text-white">Профільні дані:</strong> назва компанії, вебсайт, мовні налаштування, Brand Voice</li>
                <li><strong className="text-white">Завантажені файли:</strong> документи Knowledge Base, зображення, тексти для обробки</li>
                <li><strong className="text-white">Комунікаційні дані:</strong> повідомлення в службу підтримки, зворотний звʼязок</li>
              </ul>

              <h3 className="text-lg font-semibold text-white mt-6 mb-2">3.2. Дані, що збираються автоматично</h3>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong className="text-white">Технічні дані:</strong> IP-адреса, тип та версія браузера, операційна система, роздільна здатність екрана</li>
                <li><strong className="text-white">Дані використання:</strong> відвідані сторінки, час сеансу, дії на Платформі, кількість згенерованих статей</li>
                <li><strong className="text-white">Cookies та аналогічні технології:</strong> детальніше в нашій <Link href="/cookies" className="text-primary hover:underline">Політиці cookies</Link></li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Цілі та правова основа обробки</h2>
              <p>Ми обробляємо ваші персональні дані на таких правових підставах (стаття 6 GDPR):</p>

              <div className="mt-4 space-y-4">
                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <p><strong className="text-white">Виконання договору (ст. 6(1)(b) GDPR)</strong></p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Створення та управління обліковим записом</li>
                    <li>Надання послуг Платформи (генерація контенту, SEO-оптимізація, публікація)</li>
                    <li>Обробка платежів та виставлення рахунків</li>
                    <li>Технічна підтримка</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <p><strong className="text-white">Законний інтерес (ст. 6(1)(f) GDPR)</strong></p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Покращення та розвиток Платформи</li>
                    <li>Аналітика використання та продуктивності</li>
                    <li>Забезпечення безпеки та запобігання шахрайству</li>
                    <li>Надсилання сервісних повідомлень про роботу Платформи</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <p><strong className="text-white">Згода (ст. 6(1)(a) GDPR)</strong></p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Маркетингові розсилки та SEO-поради</li>
                    <li>Аналітичні та маркетингові cookies</li>
                    <li>Обробка даних для персоналізації рекомендацій</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <p><strong className="text-white">Юридичний обовʼязок (ст. 6(1)(c) GDPR)</strong></p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Ведення бухгалтерської та податкової документації</li>
                    <li>Виконання вимог законодавства про захист даних</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Передача даних третім особам</h2>
              <p>Для надання Послуг ми передаємо ваші дані стороннім постачальникам послуг (процесорам даних). Нижче наведені категорії одержувачів та конкретні сервіси.</p>

              <div className="mt-4 space-y-4">
                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <h3 className="text-lg font-semibold text-white mt-6 mb-2">Інфраструктура та хостинг</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong className="text-white">Hetzner Online GmbH</strong> (Німеччина/ЄС) — серверна інфраструктура та зберігання даних</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <h3 className="text-lg font-semibold text-white mt-6 mb-2">AI-сервіси</h3>
                  <p>Платформа використовує <strong className="text-white">OpenRouter, Inc.</strong> (США) як єдиний API-шлюз для доступу до моделей штучного інтелекту. Через OpenRouter ваш контент може оброблятись такими провайдерами:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong className="text-white">Anthropic</strong> (США) — Claude: генерація тексту, гуманізація контенту</li>
                    <li><strong className="text-white">OpenAI</strong> (США) — GPT: генерація тексту, переклад, ембедінги (векторний пошук), генерація зображень</li>
                    <li><strong className="text-white">Google</strong> (США) — Gemini: генерація тексту та зображень</li>
                    <li><strong className="text-white">Meta</strong> (США) — Llama: генерація тексту</li>
                    <li><strong className="text-white">Mistral AI</strong> (Франція/ЄС) — генерація тексту</li>
                    <li><strong className="text-white">Black Forest Labs</strong> (FLUX) — генерація зображень</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <h3 className="text-lg font-semibold text-white mt-6 mb-2">AI-детекція та якість контенту</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong className="text-white">GPTZero</strong> (США) — перевірка тексту на AI-маркери</li>
                    <li><strong className="text-white">ZeroGPT</strong> — альтернативний детектор AI-тексту</li>
                    <li><strong className="text-white">Winston AI</strong> — детекція AI-контенту</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <h3 className="text-lg font-semibold text-white mt-6 mb-2">Обробка медіа</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong className="text-white">Replicate, Inc.</strong> (США) — збільшення роздільності зображень (апскейл)</li>
                    <li><strong className="text-white">Kling AI</strong> — генерація відео з тексту та зображень</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <h3 className="text-lg font-semibold text-white mt-6 mb-2">SEO та аналіз контенту</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong className="text-white">Serpstat</strong> — дослідження ключових слів, обсяг пошуку, аналіз конкурентів</li>
                    <li><strong className="text-white">Jina AI</strong> (Німеччина/ЄС) — витяг тексту з веб-сторінок для аналізу конкурентів</li>
                    <li><strong className="text-white">Tavily</strong> — веб-пошук та збір даних для дослідження</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <h3 className="text-lg font-semibold text-white mt-6 mb-2">Платежі</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong className="text-white">Stripe, Inc.</strong> (США) — обробка платежів, підписки, управління білінгом. Дані карток обробляються виключно Stripe (PCI DSS Level 1) і не зберігаються на наших серверах.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <h3 className="text-lg font-semibold text-white mt-6 mb-2">Аналітика та маркетинг</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong className="text-white">Google Analytics</strong> (Google LLC, США) — аналіз відвідуваності та використання Платформи</li>
                    <li><strong className="text-white">Meta Pixel</strong> (Meta Platforms, Inc., США) — вимірювання ефективності реклами</li>
                    <li><strong className="text-white">Google Ads</strong> (Google LLC, США) — відстеження конверсій</li>
                    <li><strong className="text-white">LinkedIn Insight Tag</strong> (LinkedIn Corp., США) — аналітика рекламних кампаній</li>
                  </ul>
                  <p className="mt-2">Ці сервіси використовують cookies. Детальніше — у нашій <Link href="/cookies" className="text-primary hover:underline">Політиці cookies</Link>.</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <h3 className="text-lg font-semibold text-white mt-6 mb-2">Сповіщення</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong className="text-white">Telegram Bot API</strong> (Telegram FZ-LLC, ОАЕ) — службові сповіщення адміністраторам Платформи</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <h3 className="text-lg font-semibold text-white mt-6 mb-2">Опціональні інтеграції (за вибором Користувача)</h3>
                  <p>Наступні сервіси активуються лише якщо Користувач самостійно підключає власний API-ключ. У такому разі Користувач вступає в прямі договірні відносини з відповідним постачальником:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong className="text-white">DeepL SE</strong> (Німеччина/ЄС) — автоматичний переклад контенту</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
                <h3 className="text-lg font-semibold text-white mt-6 mb-2">Важливе застереження щодо сторонніх сервісів</h3>
                <p>Ми передаємо стороннім постачальникам лише ті дані, які необхідні для виконання конкретної функції (принцип мінімізації даних, ст. 5(1)(c) GDPR). <strong className="text-white">Ми не зберігаємо дані від імені сторонніх постачальників і не контролюємо їхні процеси обробки даних після передачі.</strong></p>
                <p className="mt-2">Кожен сторонній постачальник є незалежним контролером або процесором даних і діє відповідно до власної політики конфіденційності. Зокрема, але не виключно:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>OpenAI — <a href="https://openai.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">openai.com/privacy</a></li>
                  <li>Google — <a href="https://policies.google.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a></li>
                  <li>Anthropic — <a href="https://www.anthropic.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">anthropic.com/privacy</a></li>
                  <li>Stripe — <a href="https://stripe.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">stripe.com/privacy</a></li>
                  <li>Meta — <a href="https://www.facebook.com/privacy/policy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">facebook.com/privacy/policy</a></li>
                </ul>
                <p className="mt-2"><strong className="text-white">Оператор не несе відповідальності за практики обробки персональних даних сторонніми постачальниками</strong> після належної передачі даних відповідно до умов DPA. Ми рекомендуємо ознайомитись з їхніми політиками конфіденційності.</p>
              </div>

              <p className="mt-4">З усіма процесорами даних, яким передаються персональні дані, укладено угоди про обробку даних (Data Processing Agreement, DPA) відповідно до ст. 28 GDPR.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Міжнародна передача даних</h2>
              <p>Деякі з наших провайдерів знаходяться за межами Європейської економічної зони (ЄЕЗ). У таких випадках ми забезпечуємо належний рівень захисту даних шляхом:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Стандартних договірних положень (Standard Contractual Clauses), затверджених Європейською Комісією</li>
                <li>Рішень про адекватність рівня захисту, ухвалених Європейською Комісією</li>
                <li>Додаткових технічних та організаційних заходів відповідно до рекомендацій EDPB</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Строки зберігання даних</h2>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong className="text-white">Дані акаунту:</strong> протягом дії вашого облікового запису та 30 днів після його видалення</li>
                <li><strong className="text-white">Платіжні дані:</strong> відповідно до вимог податкового законодавства (зазвичай до 10 років)</li>
                <li><strong className="text-white">Аналітичні дані:</strong> до 26 місяців</li>
                <li><strong className="text-white">Маркетингова згода:</strong> до відкликання згоди</li>
                <li><strong className="text-white">Завантажені файли:</strong> протягом дії акаунту; видаляються протягом 30 днів після видалення акаунту</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">8. Ваші права</h2>
              <p>Відповідно до GDPR, ви маєте такі права щодо своїх персональних даних:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong className="text-white">Право на доступ</strong> (ст. 15 GDPR) — отримати копію ваших персональних даних</li>
                <li><strong className="text-white">Право на виправлення</strong> (ст. 16 GDPR) — виправити неточні або неповні дані</li>
                <li><strong className="text-white">Право на видалення</strong> (ст. 17 GDPR) — «право бути забутим»</li>
                <li><strong className="text-white">Право на обмеження обробки</strong> (ст. 18 GDPR)</li>
                <li><strong className="text-white">Право на перенесення даних</strong> (ст. 20 GDPR)</li>
                <li><strong className="text-white">Право на заперечення</strong> (ст. 21 GDPR)</li>
                <li><strong className="text-white">Право відкликати згоду</strong> (ст. 7(3) GDPR)</li>
              </ul>
              <p className="mt-4">Для реалізації будь-якого з цих прав напишіть на <a href="mailto:info@draft2live.ai" className="text-primary hover:underline">info@draft2live.ai</a>. Ми відповімо протягом 30 днів.</p>
              <p className="mt-3">Ви також маєте право подати скаргу до наглядового органу із захисту даних. Для Польщі це Urząd Ochrony Danych Osobowych (UODO), ul. Stawki 2, 00-193 Warszawa, <a href="https://uodo.gov.pl" className="text-primary hover:underline">uodo.gov.pl</a>. Якщо ви перебуваєте в іншій країні ЄС, ви можете звернутись до наглядового органу у вашій країні.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">9. Обовʼязковість надання даних</h2>
              <p>Надання реєстраційних даних (імʼя, email) є необхідною умовою для укладення Договору та використання Платформи. Без цих даних ми не зможемо створити обліковий запис та надати Послуги.</p>
              <p className="mt-3">Надання платіжних даних є необхідним для оплати Підписки. Надання даних для маркетингових розсилок є добровільним і не впливає на можливість використання Платформи.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">10. Безпека даних</h2>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Шифрування даних під час передачі (TLS/SSL) та зберігання</li>
                <li>Регулярне резервне копіювання</li>
                <li>Контроль доступу та аутентифікація</li>
                <li>Моніторинг безпеки інфраструктури</li>
                <li>Регулярний перегляд та оновлення заходів безпеки</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">11. Автоматизоване прийняття рішень</h2>
              <p>Платформа використовує AI для генерації контенту, що є основною функцією сервісу. Ми не використовуємо автоматизоване прийняття рішень або профілювання, що має правові наслідки для вас (ст. 22 GDPR).</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">12. Дані дітей</h2>
              <p>Платформа не призначена для осіб молодше 16 років. Ми свідомо не збираємо дані дітей. Якщо ви дізнались, що дитина надала нам персональні дані, зверніться на <a href="mailto:info@draft2live.ai" className="text-primary hover:underline">info@draft2live.ai</a>.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">13. Зміни до Політики</h2>
              <p>Ми можемо оновлювати цю Політику. Про суттєві зміни ми повідомимо електронною поштою або через інтерфейс Платформи. Дата останнього оновлення зазначена вгорі цієї сторінки.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">14. Контакти</h2>
              <div className="p-4 rounded-xl bg-white/5 border border-border">
                <p><strong className="text-white">Aklima Polska sp. z o.o.</strong></p>
                <p className="mt-1">ul. Postępu 15, 02-676 Warszawa, Polska</p>
                <p className="mt-1">Email: <a href="mailto:info@draft2live.ai" className="text-primary hover:underline">info@draft2live.ai</a></p>
                <p className="mt-1">Веб-сайт: <a href="https://draft2live.ai" className="text-primary hover:underline">draft2live.ai</a></p>
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </NextIntlClientProvider>
  );
}
