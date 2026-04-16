import { NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Navigation from '@/components/Navigation';
import Footer from '@/components/sections/Footer';
import Link from 'next/link';
import messages from '../../../messages/uk.json';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Політика cookies | Draft2Live',
  description: 'Інформація про використання файлів cookies на платформі Draft2Live.',
};

export default function CookiesPage() {
  setRequestLocale('uk');
  return (
    <NextIntlClientProvider locale="uk" messages={messages}>
      <Navigation />
      <main className="min-h-screen pt-32 pb-20">
        <article className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link href="/" className="text-primary text-sm hover:underline mb-8 inline-block">&larr; На головну</Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Політика cookies</h1>
          <p className="text-text-muted text-sm mb-12">Останнє оновлення: 10 квітня 2026</p>

          <div className="space-y-8 text-text-secondary text-[15px] leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Що таке cookies</h2>
              <p>Cookies — це невеликі текстові файли, які зберігаються на вашому пристрої (компʼютері, планшеті, смартфоні) під час відвідування веб-сайтів. Вони допомагають сайту запамʼятовувати ваші налаштування та покращувати роботу сервісу.</p>
              <p className="mt-3">Окрім cookies, ми можемо використовувати аналогічні технології: пікселі, локальне сховище (localStorage) та ідентифікатори сеансу.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Типи cookies, які ми використовуємо</h2>

              <div className="mt-4 space-y-4">
                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-medium">Необхідні cookies</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">Завжди активні</span>
                  </div>
                  <p className="text-sm">Забезпечують базову функціональність сайту. Без них Платформа не зможе працювати коректно. Ці cookies не можна відключити.</p>
                  <table className="w-full mt-3 text-sm">
                    <thead>
                      <tr className="text-left text-text-muted border-b border-border">
                        <th className="pb-2 pr-4">Cookie</th>
                        <th className="pb-2 pr-4">Постачальник</th>
                        <th className="pb-2 pr-4">Призначення</th>
                        <th className="pb-2">Термін</th>
                      </tr>
                    </thead>
                    <tbody className="text-text-secondary">
                      <tr className="border-b border-border/50">
                        <td className="py-2 pr-4 font-mono text-xs text-white">session_id</td>
                        <td className="py-2 pr-4">Draft2Live</td>
                        <td className="py-2 pr-4">Ідентифікація сеансу користувача</td>
                        <td className="py-2">Сеанс</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2 pr-4 font-mono text-xs text-white">csrf_token</td>
                        <td className="py-2 pr-4">Draft2Live</td>
                        <td className="py-2 pr-4">Захист від CSRF-атак</td>
                        <td className="py-2">Сеанс</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2 pr-4 font-mono text-xs text-white">auth_token</td>
                        <td className="py-2 pr-4">Draft2Live</td>
                        <td className="py-2 pr-4">Автентифікація користувача</td>
                        <td className="py-2">30 днів</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4 font-mono text-xs text-white">cookie_consent</td>
                        <td className="py-2 pr-4">Draft2Live</td>
                        <td className="py-2 pr-4">Збереження налаштувань cookies</td>
                        <td className="py-2">6 місяців</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-medium">Аналітичні cookies</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-text-muted">Потребують згоди</span>
                  </div>
                  <p className="text-sm">Допомагають нам розуміти, як відвідувачі взаємодіють з Платформою, що дозволяє покращувати її роботу та зручність використання.</p>
                  <table className="w-full mt-3 text-sm">
                    <thead>
                      <tr className="text-left text-text-muted border-b border-border">
                        <th className="pb-2 pr-4">Cookie</th>
                        <th className="pb-2 pr-4">Постачальник</th>
                        <th className="pb-2 pr-4">Призначення</th>
                        <th className="pb-2">Термін</th>
                      </tr>
                    </thead>
                    <tbody className="text-text-secondary">
                      <tr className="border-b border-border/50">
                        <td className="py-2 pr-4 font-mono text-xs text-white">_ga</td>
                        <td className="py-2 pr-4">Google</td>
                        <td className="py-2 pr-4">Ідентифікація унікальних відвідувачів</td>
                        <td className="py-2">13 місяців</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2 pr-4 font-mono text-xs text-white">_ga_*</td>
                        <td className="py-2 pr-4">Google</td>
                        <td className="py-2 pr-4">Google Analytics 4 — збереження стану сеансу</td>
                        <td className="py-2">13 місяців</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4 font-mono text-xs text-white">_gid</td>
                        <td className="py-2 pr-4">Google</td>
                        <td className="py-2 pr-4">Ідентифікація відвідувачів протягом дня</td>
                        <td className="py-2">24 години</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-border">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-medium">Маркетингові cookies</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-text-muted">Потребують згоди</span>
                  </div>
                  <p className="text-sm">Використовуються для показу релевантної реклами та вимірювання ефективності рекламних кампаній.</p>
                  <table className="w-full mt-3 text-sm">
                    <thead>
                      <tr className="text-left text-text-muted border-b border-border">
                        <th className="pb-2 pr-4">Cookie</th>
                        <th className="pb-2 pr-4">Постачальник</th>
                        <th className="pb-2 pr-4">Призначення</th>
                        <th className="pb-2">Термін</th>
                      </tr>
                    </thead>
                    <tbody className="text-text-secondary">
                      <tr className="border-b border-border/50">
                        <td className="py-2 pr-4 font-mono text-xs text-white">_fbp</td>
                        <td className="py-2 pr-4">Meta</td>
                        <td className="py-2 pr-4">Відстеження конверсій</td>
                        <td className="py-2">3 місяці</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2 pr-4 font-mono text-xs text-white">_gcl_au</td>
                        <td className="py-2 pr-4">Google</td>
                        <td className="py-2 pr-4">Google Ads — відстеження конверсій</td>
                        <td className="py-2">3 місяці</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4 font-mono text-xs text-white">li_sugr</td>
                        <td className="py-2 pr-4">LinkedIn</td>
                        <td className="py-2 pr-4">Insight Tag — аналітика реклами</td>
                        <td className="py-2">3 місяці</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Правова основа</h2>
              <p>Відповідно до Директиви ePrivacy (2002/58/EC) та GDPR:</p>
              <ul className="list-disc list-inside mt-3 space-y-1.5">
                <li><strong className="text-white">Необхідні cookies</strong> встановлюються без згоди, оскільки вони необхідні для функціонування Платформи (ст. 6(1)(f) GDPR)</li>
                <li><strong className="text-white">Аналітичні та маркетингові cookies</strong> встановлюються лише після отримання вашої явної згоди (ст. 6(1)(a) GDPR)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Керування cookies</h2>
              <p>Ви можете керувати cookies кількома способами:</p>

              <h3 className="text-white font-medium mt-4 mb-2">4.1. Банер згоди</h3>
              <p>При першому відвідуванні Платформи вам показується банер із запитом згоди. Ви можете прийняти всі cookies, відхилити необовʼязкові або налаштувати категорії вручну. <strong className="text-white">Відмова від cookies так само проста, як і їх прийняття.</strong> Змінити свій вибір можна в будь-який момент у налаштуваннях Платформи.</p>
              <p className="mt-3"><strong className="text-white">Наслідки відмови:</strong> Відмова від аналітичних та маркетингових cookies не впливає на функціональність Платформи. Ви зможете користуватися всіма Послугами. Однак ми не зможемо персоналізувати ваш досвід та показувати релевантну рекламу.</p>

              <h3 className="text-white font-medium mt-4 mb-2">4.2. Налаштування браузера</h3>
              <p>Ви можете налаштувати свій браузер для блокування або видалення cookies. Зверніть увагу, що блокування необхідних cookies може вплинути на роботу Платформи.</p>
              <ul className="list-disc list-inside mt-2 space-y-1.5 text-sm">
                <li><strong className="text-white">Chrome:</strong> Налаштування &rarr; Конфіденційність та безпека &rarr; Файли cookie</li>
                <li><strong className="text-white">Firefox:</strong> Налаштування &rarr; Приватність та захист &rarr; Cookies</li>
                <li><strong className="text-white">Safari:</strong> Налаштування &rarr; Конфіденційність &rarr; Cookies</li>
                <li><strong className="text-white">Edge:</strong> Налаштування &rarr; Конфіденційність &rarr; Файли cookie</li>
              </ul>

              <h3 className="text-white font-medium mt-4 mb-2">4.3. Відмова від аналітики</h3>
              <p>Для відмови від Google Analytics ви можете встановити офіційне розширення браузера: Google Analytics Opt-out Browser Add-on.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Передача даних</h2>
              <p>Деякі cookies встановлюються сторонніми сервісами, серверами яких розташовані за межами ЄЕЗ. У таких випадках ми забезпечуємо відповідний рівень захисту даних згідно з GDPR (детальніше в <Link href="/privacy" className="text-primary hover:underline">Політиці конфіденційності</Link>, розділ 6).</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Зміни до Політики</h2>
              <p>Строк дії cookies не перевищує 13 місяців відповідно до рекомендацій EDPB. Після закінчення строку дії ваша згода буде запитана повторно.</p>
              <p className="mt-3">Ми можемо оновлювати цю Політику cookies у разі зміни типів або цілей використання cookies. Про суттєві зміни ми повідомимо через банер згоди або інтерфейс Платформи.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Контакти</h2>
              <p>З питань щодо cookies:</p>
              <ul className="list-none mt-3 space-y-1.5">
                <li>Email: <a href="mailto:info@draft2live.ai" className="text-primary hover:underline">info@draft2live.ai</a></li>
                <li>Веб-сайт: <a href="https://draft2live.ai" className="text-primary hover:underline">draft2live.ai</a></li>
              </ul>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </NextIntlClientProvider>
  );
}
