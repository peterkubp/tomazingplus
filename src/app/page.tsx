import Link from "next/link";
import Image from "next/image";

// รูปภาพจากเว็บอ้างอิง และ placeholder
const images = {
  hero: "https://drsuntchai.com/wp-content/uploads/2025/01/treat-benign-prostatic-hyperplasia.webp",
  prostate: "https://drsuntchai.com/wp-content/uploads/2024/12/Benign-Prostatic-Hyperplasia-02.webp",
  symptoms: "https://drsuntchai.com/wp-content/uploads/2024/12/Benign-Prostatic-Hyperplasia-04.webp",
  doctor: "https://drsuntchai.com/wp-content/uploads/2024/12/dr-suntchai-profile.webp",
};

// อาการหลัก - ลดจำนวนเหลือ 6 ข้อ แสดงชัดเจน
const symptoms = [
  { icon: "🚽", text: "ปัสสาวะบ่อย ตื่นกลางคืน" },
  { icon: "💧", text: "ปัสสาวะไม่พุ่ง ไหลช้า" },
  { icon: "😣", text: "ต้องเบ่ง ออกยาก" },
  { icon: "🔁", text: "ไหลๆ หยุดๆ" },
  { icon: "⚠️", text: "กลั้นไม่อยู่" },
  { icon: "🩸", text: "ปัสสาวะเป็นเลือด" },
];

// ประโยชน์ - ลดเหลือ 6 ข้อหลัก
const benefits = [
  { icon: "✅", text: "ลดอาการอักเสบ" },
  { icon: "✅", text: "ปัสสาวะคล่องขึ้น" },
  { icon: "✅", text: "ไม่ต้องตื่นกลางคืน" },
  { icon: "✅", text: "หายปวดแสบ" },
  { icon: "✅", text: "ไม่ต้องผ่าตัด" },
  { icon: "✅", text: "สมุนไพรปลอดภัย" },
];

// ส่วนผสม - แสดงเป็นรูปภาพ
const ingredients = [
  { name: "ไลโคปีน", desc: "จากมะเขือเทศ", emoji: "🍅" },
  { name: "ซิงค์", desc: "บำรุงต่อมลูกหมาก", emoji: "💊" },
  { name: "วิตามิน B", desc: "ฟื้นฟูร่างกาย", emoji: "🌿" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation - Fixed */}
      <nav className="nav-fixed">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl sm:text-2xl font-bold gradient-text">
            Tomazing Plus2
          </Link>
          <a href="tel:0636294452" className="text-base sm:text-lg font-semibold text-gray-700 flex items-center gap-2">
            <span className="text-xl">📞</span>
            <span className="hidden sm:inline">063-629-4452</span>
          </a>
        </div>
      </nav>

      {/* Hero Section - Image Focused */}
      <section className="pt-24 sm:pt-28 pb-10 sm:pb-12 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Main Image */}
          <div className="image-container mb-8">
            <Image
              src={images.hero}
              alt="วิธีรักษาต่อมลูกหมากโต"
              width={800}
              height={450}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Simple Headline */}
          <h1 className="text-center mb-6 px-2">
            <span className="gradient-text">รักษาต่อมลูกหมากโต</span>
            <br />
            หายได้ ไม่ต้องผ่าตัด!
          </h1>

          <p className="text-center text-gray-600 text-lg sm:text-xl mb-8 px-4">
            ผลิตภัณฑ์จากงานวิจัย <strong className="text-gray-800">9 รางวัลระดับโลก</strong>
          </p>

          {/* Big CTA */}
          <div className="text-center mb-10 px-4">
            <a
              href="https://lin.ee/riWkqmk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-line animate-pulse-glow"
            >
              💬 สั่งซื้อ / ปรึกษาฟรี
            </a>
          </div>

          {/* Stats - Large Visual */}
          <div className="grid grid-cols-3 gap-4 px-2">
            <div className="stat-card">
              <div className="stat-number">3 วัน</div>
              <div className="stat-label">เห็นผล</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">4 หมื่น</div>
              <div className="stat-label">คนหายแล้ว</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">99%</div>
              <div className="stat-label">ซื้อซ้ำ</div>
            </div>
          </div>
        </div>
      </section>

      {/* What is BPH - Visual */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 section-light">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-center mb-8">
            <span className="gradient-text">ต่อมลูกหมากโต</span> คืออะไร?
          </h2>

          {/* Image */}
          <div className="image-container mb-8">
            <Image
              src={images.prostate}
              alt="ต่อมลูกหมากโตคืออะไร"
              width={800}
              height={450}
              className="w-full h-auto"
            />
          </div>

          <div className="card mx-2 sm:mx-0">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4">
              ต่อมลูกหมาก <strong className="text-red-600">โตจนไปกดท่อปัสสาวะ</strong> ทำให้ปัสสาวะลำบาก
              เหมือนท่อน้ำตีบ น้ำจึงไหลได้ไม่ดี
            </p>
            <p className="text-lg sm:text-xl text-gray-700">
              <span className="text-green-600 font-bold">✅ ข่าวดี:</span> โรคนี้ไม่ใช่มะเร็ง และ<strong className="text-green-600">รักษาหายได้</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms - Visual Grid */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-center mb-4">
            คุณมี<span className="gradient-text">อาการเหล่านี้</span>ไหม?
          </h2>
          <p className="text-center text-gray-500 text-lg mb-8">
            ถ้ามี 2-3 ข้อขึ้นไป ควรรีบดูแลตัวเอง
          </p>

          {/* Symptoms Image */}
          <div className="image-container mb-8">
            <Image
              src={images.symptoms}
              alt="อาการต่อมลูกหมากโต"
              width={800}
              height={450}
              className="w-full h-auto"
            />
          </div>

          {/* Symptoms Grid - Large Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            {symptoms.map((s, index) => (
              <div key={index} className="symptom-badge">
                <span className="text-4xl">{s.icon}</span>
                <span className="font-semibold text-base sm:text-lg">{s.text}</span>
              </div>
            ))}
          </div>

          {/* Warning */}
          <div className="warning-box text-center mx-2 sm:mx-0">
            <p className="text-lg sm:text-xl font-semibold">
              ⚠️ ถ้าปล่อยไว้ อาจนำไปสู่ <strong>มะเร็ง</strong> หรือ <strong>ไตเสื่อม</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Product Section - Big Images */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 section-highlight">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <span className="inline-block bg-red-600 text-white px-5 py-2 rounded-full text-lg sm:text-xl font-bold mb-6">
              🏆 9 รางวัลระดับโลก
            </span>
            <h2 className="mb-3">TOMAZING PLUS2</h2>
            <p className="text-xl sm:text-2xl text-gray-600">อัพเกรด เข้มข้น 2 เท่า!</p>
          </div>

          {/* Product Visual */}
          <div className="flex justify-center mb-10">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-red-100 animate-float">
                <span className="text-8xl sm:text-9xl">🍅</span>
              </div>
            </div>
          </div>

          {/* Ingredients - Visual Cards */}
          <div className="grid grid-cols-3 gap-4 mb-8 px-2 sm:px-0">
            {ingredients.map((ing, i) => (
              <div key={i} className="card text-center py-6">
                <div className="text-5xl sm:text-6xl mb-3">{ing.emoji}</div>
                <p className="font-bold text-lg sm:text-xl mb-1">{ing.name}</p>
                <p className="text-gray-500 text-sm sm:text-base">{ing.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-green-600 text-xl sm:text-2xl font-bold px-4">
            ✅ สมุนไพร 100% ปลอดภัย ไม่มีผลข้างเคียง
          </p>
        </div>
      </section>

      {/* Benefits - Large Visual */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-center mb-8">
            <span className="gradient-text">ประโยชน์</span>ที่ได้รับ
          </h2>

          <div className="grid grid-cols-2 gap-4 px-2 sm:px-0">
            {benefits.map((b, i) => (
              <div key={i} className="benefit-item py-4">
                <span className="benefit-check text-lg">{b.icon}</span>
                <span className="text-lg sm:text-xl font-semibold">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial - Big Photo */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 section-light">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-center mb-8">
            เสียงจาก<span className="gradient-text">ลูกค้าจริง</span>
          </h2>

          <div className="card bg-white mx-2 sm:mx-0 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center text-5xl sm:text-6xl shadow-inner">
                  👴
                </div>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-xl sm:text-2xl leading-relaxed mb-4">
                  &quot;ทนทานมา <strong>7 ปี</strong> พอทาน TOMAZING PLUS
                  แค่ <span className="gradient-text font-bold">3 วัน อาการดีขึ้น!</span>
                  เดี๋ยวนี้ไม่ต้องตื่นกลางคืนแล้ว&quot;
                </p>
                <p className="text-gray-500 text-lg font-semibold">— ลุงเบิร์ด อายุ 65 ปี</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="card mt-8 text-center bg-gradient-to-r from-red-50 to-orange-50 mx-2 sm:mx-0 py-8">
            <p className="text-gray-600 text-lg mb-2">ยอดสั่งซื้อรวมแล้ว</p>
            <p className="text-4xl sm:text-5xl font-bold gradient-text">624,562 กล่อง</p>
          </div>
        </div>
      </section>

      {/* Big CTA Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-lg">
          <div className="card text-center bg-gradient-to-br from-red-50 to-orange-50 border-red-200 p-8 sm:p-10">
            <div className="icon-circle mx-auto mb-6">
              📞
            </div>

            <h2 className="mb-4">พร้อมหายจากอาการ?</h2>
            <p className="text-gray-600 text-lg sm:text-xl mb-8">
              ทีมผู้เชี่ยวชาญให้คำปรึกษาฟรี!
            </p>

            <div className="space-y-4">
              <a
                href="https://lin.ee/riWkqmk"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-line w-full animate-pulse-glow"
              >
                💬 LINE สั่งซื้อ / ปรึกษา
              </a>
              <a
                href="tel:0636294452"
                className="btn-secondary w-full block"
              >
                📞 โทร 063-629-4452
              </a>
            </div>

            {/* Guarantees */}
            <div className="mt-8 pt-6 border-t border-gray-200 grid grid-cols-2 gap-3 text-base">
              <div className="text-gray-600 flex items-center justify-center gap-1">
                <span>✅</span> ของแท้ 100%
              </div>
              <div className="text-gray-600 flex items-center justify-center gap-1">
                <span>✅</span> ส่งฟรีทั่วไทย
              </div>
              <div className="text-gray-600 flex items-center justify-center gap-1">
                <span>✅</span> ปรึกษาตลอดการใช้
              </div>
              <div className="text-gray-600 flex items-center justify-center gap-1">
                <span>✅</span> รับประกันสินค้า
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Tips - Visual */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 section-light">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-center mb-8">
            <span className="gradient-text">ป้องกัน</span>ต่อมลูกหมากโต
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-2 sm:px-0">
            {/* Avoid */}
            <div className="card border-red-200 p-6">
              <h3 className="text-red-600 text-xl sm:text-2xl mb-6 flex items-center gap-3">
                <span className="text-3xl">❌</span> หลีกเลี่ยง
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-lg sm:text-xl">
                  <span className="text-3xl">🥩</span>
                  <span>เนื้อแดง</span>
                </li>
                <li className="flex items-center gap-4 text-lg sm:text-xl">
                  <span className="text-3xl">🧈</span>
                  <span>ไขมันสูง เนย ชีส</span>
                </li>
                <li className="flex items-center gap-4 text-lg sm:text-xl">
                  <span className="text-3xl">🍺</span>
                  <span>แอลกอฮอล์</span>
                </li>
              </ul>
            </div>

            {/* Recommended */}
            <div className="card border-green-200 p-6">
              <h3 className="text-green-600 text-xl sm:text-2xl mb-6 flex items-center gap-3">
                <span className="text-3xl">✅</span> แนะนำ
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-lg sm:text-xl">
                  <span className="text-3xl">🥬</span>
                  <span>ผักผลไม้กากใยสูง</span>
                </li>
                <li className="flex items-center gap-4 text-lg sm:text-xl">
                  <span className="text-3xl">🍅</span>
                  <span>มะเขือเทศ (ไลโคปีน)</span>
                </li>
                <li className="flex items-center gap-4 text-lg sm:text-xl">
                  <span className="text-3xl">🫘</span>
                  <span>ถั่วเหลือง เต้าหู้</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Simple */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-center mb-8">
            <span className="gradient-text">คำถาม</span>ที่พบบ่อย
          </h2>

          <div className="space-y-4 px-2 sm:px-0">
            <details className="faq">
              <summary>
                ทานนานแค่ไหนถึงเห็นผล?
                <span className="text-red-500 ml-2">▼</span>
              </summary>
              <div className="faq-content text-lg">
                ทานเพียง <strong>3 วันอาการดีขึ้น</strong> ถ้าทานต่อเนื่อง 3-4 เดือน อาการจะหายไป
              </div>
            </details>

            <details className="faq">
              <summary>
                มีผลข้างเคียงไหม?
                <span className="text-red-500 ml-2">▼</span>
              </summary>
              <div className="faq-content text-lg">
                <strong>ไม่มีผลข้างเคียง</strong> เพราะทำจากสมุนไพรธรรมชาติ 100%
              </div>
            </details>

            <details className="faq">
              <summary>
                ต่อมลูกหมากโตหายเองได้ไหม?
                <span className="text-red-500 ml-2">▼</span>
              </summary>
              <div className="faq-content text-lg">
                โรคนี้<strong>ไม่หายเอง</strong> แต่สามารถรักษาได้ด้วยการดูแลสุขภาพและผลิตภัณฑ์เสริมอาหารที่เหมาะสม
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 section-light">
        <div className="container mx-auto max-w-4xl">
          <div className="flex justify-between items-center mb-8 px-2 sm:px-0">
            <h2><span className="gradient-text">บทความ</span>สุขภาพ</h2>
            <Link href="/blog" className="text-red-600 font-semibold text-lg">
              ดูทั้งหมด →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 px-2 sm:px-0">
            {[
              { title: "10 สัญญาณเตือน", slug: "10-warning-signs-prostate", emoji: "⚠️" },
              { title: "ไลโคปีนช่วยอย่างไร", slug: "what-is-lycopene", emoji: "🍅" },
              { title: "อาหารบำรุงต่อมลูกหมาก", slug: "foods-for-prostate-health", emoji: "🥗" },
            ].map((a, i) => (
              <Link key={i} href={`/blog/${a.slug}`} className="card block text-center hover:border-red-300 py-8">
                <div className="text-6xl mb-4">{a.emoji}</div>
                <p className="font-bold text-lg sm:text-xl">{a.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 sm:py-12 px-4 sm:px-6 border-t-2 border-gray-200">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-2xl sm:text-3xl font-bold gradient-text mb-6">Tomazing Plus2</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-lg sm:text-xl text-gray-600 mb-6">
            <span className="flex items-center justify-center gap-2">
              <span className="text-2xl">📞</span> 063-629-4452
            </span>
            <span className="flex items-center justify-center gap-2">
              <span className="text-2xl">💬</span> LINE: @tomazingplus
            </span>
          </div>
          <p className="text-gray-400 text-base">© 2026 Tomazing Plus2. All rights reserved.</p>
        </div>
      </footer>

      {/* Fixed Mobile CTA */}
      <div className="fixed-cta hide-desktop">
        <a
          href="https://lin.ee/riWkqmk"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-line w-full animate-pulse-glow"
        >
          💬 สั่งซื้อ / ปรึกษาฟรี
        </a>
      </div>

      {/* Desktop Fixed CTA */}
      <a
        href="https://lin.ee/riWkqmk"
        target="_blank"
        rel="noopener noreferrer"
        className="hide-mobile fixed bottom-6 right-6 z-50 btn-line shadow-xl"
      >
        💬 LINE สั่งซื้อ
      </a>

      {/* Bottom Padding for Mobile CTA */}
      <div className="h-28 sm:h-0"></div>
    </main>
  );
}
