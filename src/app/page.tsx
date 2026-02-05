import Link from "next/link";

// 11 อาการของโรคต่อมลูกหมากโต
const symptoms = [
  { num: 1, text: "ปัสสาวะบ่อย ตื่นกลางคืน" },
  { num: 2, text: "ปัสสาวะไม่พุ่ง ติดๆขัดๆ" },
  { num: 3, text: "กลั้นปัสสาวะไม่อยู่" },
  { num: 4, text: "ปัสสาวะไม่สุด" },
  { num: 5, text: "ปัสสาวะไหลๆ หยุดๆ" },
  { num: 6, text: "ต้องเบ่งช่วยเวลาปัสสาวะ" },
  { num: 7, text: "ปัสสาวะกะปริบกะปรอย" },
  { num: 8, text: "ปวดแสบ ปวดท้องน้อย" },
  { num: 9, text: "ปัสสาวะเป็นเลือด" },
  { num: 10, text: "นกเขาไม่ขัน" },
  { num: 11, text: "ค่า PSA สูง" },
];

// 10 ประโยชน์
const benefits = [
  "ลดอาการอักเสบ ต่อมลูกหมาก",
  "แก้อาการปัสสาวะกะปริบกะปรอย",
  "แก้อาการปัสสาวะเป็นเลือด",
  "แก้อาการปวดขณะถ่ายปัสสาวะ",
  "แก้อาการปัสสาวะไม่สุด",
  "แก้อาการกลั้นปัสสาวะไม่อยู่",
  "ป้องกันการอักเสบของต่อมลูกหมาก",
  "ป้องกันกระเพาะปัสสาวะอักเสบ",
  "ป้องกันไตเสื่อมและไตวาย",
  "คืนความเป็นชายอย่างเต็มตัว",
];

// ส่วนผสมสำคัญ
const ingredients = [
  { name: "ไลโคปีน (Lycopene)", desc: "จากมะเขือเทศ ช่วยลดอาการต่อมลูกหมากโต" },
  { name: "ซิงค์ออกไซด์", desc: "สังเคราะห์ฮอร์โมนเพศ" },
  { name: "ซิงค์คลอไรด์", desc: "ช่วยให้ต่อมลูกหมากทำงานปกติ" },
  { name: "วิตามิน B1 B2 B3", desc: "บำรุงต่อมลูกหมาก" },
];

// FAQ
const faqs = [
  {
    q: "Tomazing Plus2 คืออะไร?",
    a: "ผลิตภัณฑ์เสริมอาหารจากสารสกัดไลโคปีน (Lycopene) จากมะเขือเทศ ที่ผ่านการวิจัยโดย ดร.ณสพน โพธิ์วิจิตร และได้รับรางวัลระดับโลก 9 รางวัล",
  },
  {
    q: "ทานนานแค่ไหนถึงจะเห็นผล?",
    a: "ทานเพียง 3 วันอาการดีขึ้น ถ้าทานต่อเนื่อง 3-4 เดือน อาการจะหายไป",
  },
  {
    q: "มีผลข้างเคียงหรือไม่?",
    a: "ไม่มีผลข้างเคียง เพราะทำจากสมุนไพรธรรมชาติ 100% ปลอดภัยสำหรับทุกคน",
  },
  {
    q: "สั่งซื้อได้อย่างไร?",
    a: "ติดต่อทาง LINE หรือโทร 063-629-4452",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Mobile-First Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="text-lg sm:text-xl font-bold gradient-text">
            Tomazing Plus2
          </Link>
          <a
            href="https://lin.ee/riWkqmk"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-2 px-4 rounded-full transition"
          >
            สั่งซื้อ
          </a>
        </div>
      </nav>

      {/* Hero Section - Mobile First */}
      <section className="pt-20 pb-8 px-4 sm:pt-24 sm:pb-12">
        <div className="container mx-auto max-w-4xl">
          {/* Badge */}
          <div className="text-center mb-6">
            <span className="inline-block bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-xs sm:text-sm">
              🏆 งานวิจัย 9 รางวัลระดับโลก
            </span>
          </div>

          {/* Main Headline - Mobile Optimized */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-4 leading-tight">
            เผยข้อมูลสุดยอดงานวิจัย
            <br />
            <span className="gradient-text">วิธีหายจากต่อมลูกหมากโต!</span>
          </h1>

          <p className="text-center text-gray-300 text-sm sm:text-base mb-6 max-w-xl mx-auto">
            อ่านเรื่องราวต่อไปนี้แล้วท่านจะรู้ว่า &quot;โรคต่อมลูกหมากโต&quot;
            ปัสสาวะบ่อย ไม่สุด ติดๆขัดๆ เป็นเลือด <strong className="text-white">หายได้อย่างไร</strong>
          </p>

          {/* CTA Buttons - Stack on Mobile */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <a
              href="https://lin.ee/riWkqmk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center animate-pulse-glow"
            >
              🛒 สั่งซื้อตอนนี้
            </a>
            <a href="#symptoms" className="btn-secondary text-center">
              ดูอาการที่ควรระวัง
            </a>
          </div>

          {/* Quick Stats - Mobile Grid */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
            <div className="glass rounded-xl p-3 sm:p-4">
              <div className="text-xl sm:text-2xl font-bold gradient-text">3 วัน</div>
              <div className="text-xs sm:text-sm text-gray-400">เห็นผลลัพธ์</div>
            </div>
            <div className="glass rounded-xl p-3 sm:p-4">
              <div className="text-xl sm:text-2xl font-bold gradient-text">40,000+</div>
              <div className="text-xs sm:text-sm text-gray-400">คนหายแล้ว</div>
            </div>
            <div className="glass rounded-xl p-3 sm:p-4">
              <div className="text-xl sm:text-2xl font-bold gradient-text">99%</div>
              <div className="text-xs sm:text-sm text-gray-400">ซื้อซ้ำ</div>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms Section - Mobile Optimized */}
      <section id="symptoms" className="py-10 px-4 bg-gradient-to-b from-transparent to-red-950/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2">
            11 <span className="gradient-text">อาการของโรคต่อมลูกหมากโต</span>
          </h2>
          <p className="text-gray-400 text-sm text-center mb-6">
            คุณมีอาการเหล่านี้หรือไม่? ถ้ามี รีบดูแลตัวเอง
          </p>

          {/* Symptoms List - 2 columns on mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mb-6">
            {symptoms.map((symptom) => (
              <div
                key={symptom.num}
                className="glass rounded-lg p-3 flex items-center gap-2"
              >
                <span className="flex-shrink-0 w-6 h-6 bg-red-500/30 text-red-400 rounded-full flex items-center justify-center text-xs font-bold">
                  {symptom.num}
                </span>
                <span className="text-xs sm:text-sm">{symptom.text}</span>
              </div>
            ))}
          </div>

          {/* Warning */}
          <div className="card border-yellow-500/50 bg-yellow-500/10 text-center">
            <p className="text-sm sm:text-base">
              ⚠️ โรคต่อมลูกหมากโตอาจนำไปสู่{" "}
              <strong className="text-yellow-400">มะเร็งต่อมลูกหมาก</strong>,{" "}
              ไตเสื่อม, กระเพาะปัสสาวะเสื่อม
            </p>
          </div>
        </div>
      </section>

      {/* Story Section - Mobile Optimized */}
      <section className="py-10 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="card">
            <h2 className="text-lg sm:text-xl font-bold mb-4 gradient-text">
              ประสบการณ์จริง: ลุงผมเป็นมา 7 ปี
            </h2>
            <div className="text-sm sm:text-base text-gray-300 space-y-4">
              <p>
                สวัสดีครับ ผมชื่อเบิร์ด เป็นหลานคุณลุงที่เป็นโรคต่อมลูกหมากโต
                ปัจจุบันลุง<strong className="text-green-400">ไม่มีอาการแล้ว หายดีเป็นปกติ</strong>
              </p>
              <p>
                ลุงทนทานยาเดิมๆมา 7 ปี อาการเหมือนจะดีขึ้นแต่ก็ไม่เคยหายขาด
                จนผมไปเจอคลิปของ <strong className="text-white">ดร.ณสพน โพธิ์วิจิตร</strong>{" "}
                ที่วิจัยสารสกัดไลโคปีนจากมะเขือเทศ
              </p>
              <p className="text-lg sm:text-xl font-bold text-center py-4 gradient-text">
                ทานได้เพียง 3 วัน อาการดีขึ้น!
              </p>
              <p>
                หลังจากทาน TOMAZING PLUS + ARSHITHONG GOLD ต่อเนื่อง 3-4 เดือน
                <strong className="text-green-400"> อาการที่แสนทรมานไม่มีมาอีกเลย</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section - Mobile First */}
      <section className="py-10 px-4 bg-gradient-to-b from-transparent via-red-950/10 to-transparent">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <span className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-xs mb-4">
              อัพเกรดเข้มข้น 2 เท่า
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              TOMAZING PLUS2
            </h2>
            <p className="text-gray-400 text-sm">
              ผลิตภัณฑ์จากงานวิจัย ดร.ณสพน โพธิ์วิจิตร
            </p>
          </div>

          {/* Product Visual */}
          <div className="flex justify-center mb-8">
            <div className="relative w-40 h-40 sm:w-56 sm:h-56">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative w-full h-full glass rounded-full flex items-center justify-center animate-float">
                <span className="text-6xl sm:text-8xl">🍅</span>
              </div>
            </div>
          </div>

          {/* Ingredients - Mobile Grid */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {ingredients.map((ing, index) => (
              <div key={index} className="card text-center p-4">
                <div className="text-2xl mb-2">💊</div>
                <p className="font-semibold text-sm sm:text-base">{ing.name}</p>
                <p className="text-xs text-gray-400">{ing.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-green-400 text-sm sm:text-base mb-4">
            ✅ ส่วนผสมทุกอย่างเป็นสมุนไพร ปลอดภัย 100%
          </p>
        </div>
      </section>

      {/* Benefits Section - Mobile Optimized */}
      <section className="py-10 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
            10 <span className="gradient-text">ประโยชน์</span>ที่คุณจะได้รับ
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 glass rounded-lg p-3 sm:p-4"
              >
                <span className="flex-shrink-0 w-8 h-8 bg-green-500/30 text-green-400 rounded-full flex items-center justify-center">
                  ✓
                </span>
                <span className="text-sm sm:text-base">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof - Mobile First */}
      <section className="py-10 px-4 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">
            พิสูจน์แล้วกว่า <span className="gradient-text">40,000 คน</span>
          </h2>
          <p className="text-gray-400 text-sm text-center mb-6">
            ลูกค้า 99% กลับมาซื้อซ้ำ
          </p>

          {/* Stats Bar */}
          <div className="card text-center mb-6 bg-gradient-to-r from-red-900/50 to-orange-900/50">
            <p className="text-sm text-gray-400">ยอดสั่งซื้อรวมแล้ว</p>
            <p className="text-3xl sm:text-4xl font-bold gradient-text">624,562 กล่อง</p>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="glass rounded-lg p-3">
              <div className="text-2xl mb-1">💉</div>
              <p className="text-xs">ไม่ต้องเจ็บตัว</p>
            </div>
            <div className="glass rounded-lg p-3">
              <div className="text-2xl mb-1">💰</div>
              <p className="text-xs">ไม่ต้องจ่ายแพง</p>
            </div>
            <div className="glass rounded-lg p-3">
              <div className="text-2xl mb-1">🌿</div>
              <p className="text-xs">ไม่มีผลข้างเคียง</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Optimized */}
      <section className="py-10 px-4">
        <div className="container mx-auto max-w-lg">
          <div className="card text-center bg-gradient-to-br from-red-900/50 to-orange-900/50 border-red-500/50">
            <span className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-xs mb-4">
              🔥 โปรโมชั่นพิเศษวันนี้
            </span>
            <h2 className="text-xl sm:text-2xl font-bold mb-3">
              พร้อมหายจากอาการทรมาน?
            </h2>
            <p className="text-gray-300 text-sm mb-6">
              สั่งซื้อตอนนี้ มีผู้เชี่ยวชาญให้คำปรึกษาตลอดการใช้งาน
            </p>
            <div className="space-y-3">
              <a
                href="https://lin.ee/riWkqmk"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center block animate-pulse-glow"
              >
                💬 ปรึกษาฟรี / สั่งซื้อ
              </a>
              <a
                href="tel:0636294452"
                className="btn-secondary w-full text-center block"
              >
                📞 โทร 063-629-4452
              </a>
            </div>

            {/* Guarantees */}
            <div className="mt-6 pt-4 border-t border-gray-700 grid grid-cols-2 gap-2 text-xs text-gray-400">
              <div>✅ ของแท้ 100%</div>
              <div>✅ จัดส่งฟรีทั่วไทย</div>
              <div>✅ ผู้เชี่ยวชาญให้คำปรึกษา</div>
              <div>✅ รับประกันสินค้า</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Mobile First */}
      <section className="py-10 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
            <span className="gradient-text">คำถาม</span>ที่พบบ่อย
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details key={index} className="card group">
                <summary className="cursor-pointer font-semibold text-sm sm:text-base flex justify-between items-center">
                  {faq.q}
                  <span className="text-red-400 group-open:rotate-180 transition-transform ml-2">▼</span>
                </summary>
                <p className="mt-3 text-sm text-gray-300 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-10 px-4 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold">
              <span className="gradient-text">บทความ</span>สุขภาพ
            </h2>
            <Link href="/blog" className="text-red-400 text-sm hover:text-red-300">
              ดูทั้งหมด →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "10 สัญญาณเตือนโรคต่อมลูกหมากโต", slug: "10-warning-signs-prostate" },
              { title: "ไลโคปีนคืออะไร? ทำไมช่วยได้", slug: "what-is-lycopene" },
              { title: "อาหารบำรุงต่อมลูกหมาก", slug: "foods-for-prostate-health" },
            ].map((article, index) => (
              <Link
                key={index}
                href={`/blog/${article.slug}`}
                className="card block hover:border-red-500 transition"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-3xl">📚</span>
                </div>
                <h3 className="font-semibold text-sm sm:text-base line-clamp-2">{article.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Mobile Optimized */}
      <footer className="glass py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-6">
            <p className="text-xl font-bold gradient-text mb-2">Tomazing Plus2</p>
            <p className="text-gray-400 text-sm">
              ผลิตภัณฑ์จากงานวิจัยไลโคปีน ช่วยดูแลสุขภาพต่อมลูกหมาก
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-gray-400 mb-6">
            <span>📞 063-629-4452</span>
            <span>💬 LINE: @tomazingplus</span>
          </div>
          <div className="flex justify-center gap-4 mb-6">
            <Link href="/blog" className="text-gray-400 hover:text-white text-sm">
              บทความ
            </Link>
            <a href="https://lin.ee/riWkqmk" className="text-gray-400 hover:text-white text-sm">
              สั่งซื้อ
            </a>
          </div>
          <p className="text-center text-gray-600 text-xs">
            © 2026 Tomazing Plus2. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Fixed Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-3 glass sm:hidden">
        <a
          href="https://lin.ee/riWkqmk"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full text-center block animate-pulse-glow"
        >
          💬 สั่งซื้อ / ปรึกษาฟรี
        </a>
      </div>

      {/* Desktop Fixed CTA */}
      <a
        href="https://lin.ee/riWkqmk"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:flex fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg items-center gap-2 transition-all hover:scale-105"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z" />
        </svg>
        LINE สั่งซื้อ
      </a>

      {/* Add padding at bottom for fixed mobile CTA */}
      <div className="h-20 sm:hidden"></div>
    </main>
  );
}
