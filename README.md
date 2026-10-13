# Dayloom · Daily Tracker

Sizning eski Daily Tracker loyihangiz asosida qayta ishlangan shaxsiy makon.
Vocabulary saytidagi indigo/violet uslubi, o‘zbekcha interfeys, yorug‘ va tungi rejim.

## Tez boshlash

1. ZIP faylni to‘liq oching.
2. **Daily_Tracker/index.html** faylini ikki marta bosing.
3. Safari yoki Chrome’da reja yoki qayd qo‘shib boshlang. O‘rnatish, terminal, npm yoki build kerak emas.

**Bugun** ekranining yuqori o‘ngidagi tugma endi **Bajarilgan ishni yozish**.
Binafsha blokdagi takroriy tugma olib tashlangan. Yangi rejani **Bugungi reja**
qatoridagi + yoki **Rejalar** bo‘limidan qo‘shing.

Asosiy kod (HTML, CSS va JavaScript) index.html ichida. Uni alohida olib yurish ham
mumkin. manifest.json, service-worker.js va ikon fayllari saytni HTTPS orqali
joylashtirganda offline ilova sifatida ishlashi uchun qo‘shilgan.

GitHub Pages uchun ZIP ichidagi barcha fayllarni bir xil joyga yuklang:
`index.html`, `manifest.json`, `service-worker.js`, `icon.svg`,
`icon-192.png`, `icon-512.png`, `maskable-512.png`. Iconlar uchun alohida
papka talab qilinmaydi. Sayt repozitoriyning ichki katalogida bo‘lsa ham
nisbiy yo‘llar shu katalog ichidan ishlaydi.

Dastur bo‘sh tarix bilan boshlanadi: sun’iy natijalar yoki bajarilgan ishlar yo‘q.
Odatlar bo‘limidagi tayyor takliflardan birini o‘zingiz tanlab qo‘shishingiz mumkin.

## Eski ma’lumotlarni ko‘chirish

Yangi ZIP brauzeringizdagi shaxsiy tarixni o‘z ichiga olmaydi.

- Eski saytdan JSON nusxangizni oling.
- Yangisida **Sozlamalar → Import qilish** orqali uni tanlang.
- Eski parolli fayl bo‘lsa, o‘sha fayl parolini kiriting.
- Tarkibini ko‘rib chiqing va **Birlashtirish** yoki **To‘liq tiklash**ni tanlang.

Bir xil brauzer va origin ichida eski daily_activity_data_v1 nusxasi topilsa,
avtomatik ko‘chiriladi. Eski kalit hech qachon o‘chirilmaydi yoki ustiga yozilmaydi.
Fayl joylashuvi yoki brauzer o‘zgarsa, JSON importidan foydalaning.

Birlashtirish ID bo‘yicha takrorlarni ajratadi. Bir xil ID uchun joriy nusxa ustun
turadi; odatning yo‘q kunlari va yangi yozuvlar qo‘shiladi. Bu avtomatik qurilmalararo
sinxronlash emas. To‘liq tiklashdan oldin joriy nusxa JSON sifatida yuklab olinadi.

## Nimalar yangilandi?

- **Bugun:** kun rejasi, odatlar, fokus maqsadi, faollik seriyasi, haftalik ritm,
  kayfiyat va avtomatik saqlanuvchi qisqa kundalik.
- **Rejalar:** kun, hafta, oy va to‘liq ro‘yxat; qidiruv, kategoriya va holat filtrlari;
  muhimlik, vaqt, taxminiy davomiylik, izoh; kunlik/ish kunlari/haftalik/oylik takrorlash.
  Kompyuterda reja satrini boshqa sanaga sudrash mumkin; telefonda tahrirlashdan sana tanlang.
- **Odatlar:** miqdorli maqsadlar, tanlangan hafta kunlari, tarixni tuzatish,
  ketma-ketlik va arxiv.
- **Faollik:** yillik xarita, sana tafsiloti, qidiruv va filtrlar; oldingi kun uchun
  yozuv qo‘shish, yozuvni tahrirlash/o‘chirish.
- **Fokus:** fokus va ikki xil tanaffus; pauza/davom etish; vazifaga bog‘lash;
  qisman vaqtni saqlash; sahifa qayta ochilganda davom etadigan taymer.
- **Statistika:** tanlangan oy natijalari, yil grafigi, kategoriya ulushlari,
  fokus vaqti, kayfiyat, oylik maqsad va 12 ta yutuq.
- **Sozlamalar:** ism, maqsadlar, tema, animatsiya va ovoz, kategoriya ranglari,
  JSON/parolli zaxira va ixtiyoriy faylga avtomatik yozish.

Vazifa bajarilganda faqat o‘sha vazifaga bog‘langan qayd qo‘shiladi. Bir xil kategoriya
boshqa rejani tasodifan bajarmaydi. Katakni qayta bossangiz, reja ochiladi va uning
bog‘langan qaydi olib tashlanadi. Takroriy reja bajarilganda bugundan keyingi mos
sana yaratiladi. Oylik rejalar oy oxiriga moslashib, asl kun raqamini saqlaydi.

Odat maqsadiga yetganda faollikka bitta yozuv qo‘shiladi; miqdor kamaytirilsa o‘sha
yozuv olib tashlanadi. Arxivlash tarixni saqlaydi. Odat jadvali yoki maqsadini tahrirlash
joriy ketma-ketlik hisobini o‘zgartirishi mumkin.

Fokus seansi vazifani avtomatik bajarmaydi. Uni keyin o‘zingiz belgilang. Fokus va
vazifa alohida faollik yozuvlari hisoblanadi. O‘tgan vaqt taymer maqsadi asosida
hisoblanadi; tab fon rejimida qolsa ham muddati yo‘qolmaydi. Yopiq brauzerda tovush
chalinmaydi, qayta ochilganda tugagan seans qayd etiladi. Qurilma soati ishlatiladi.

## Saqlash va zaxira

Ma’lumotlar brauzerning localStorage xotirasida, shu brauzer/profil/origin uchun
saqlanadi. Brauzer nusxasi shifrlanmagan. Maxfiy rejim, xotira cheklovi yoki brauzer
ma’lumotlarini tozalash saqlashga ta’sir qiladi. Dastur xato bo‘lsa ogohlantiradi;
muntazam JSON zaxira olib turing.

**Parolli zaxira** AES-GCM 256 va PBKDF2 SHA-256 (yangi fayllarda 600 000 takror)
bilan shifrlanadi. Har yozishda yangi IV ishlatiladi. Parol va kalit serverga
yuborilmaydi, doimiy saqlanmaydi. Eski 100 000 takrorli fayllar ham import qilinadi.
Parolni unutganda parolli nusxani tiklash imkoni yo‘q.

**Avtomatik fayl zaxirasi** File System Access API mavjud brauzerlarda, odatda
Chrome’da ishlaydi. Ruxsat bering, parolli faylni tanlang, tarkibini ko‘rib chiqing va
tasdiqlang. Har ochganda qayta ulang. Fayl tashqarida o‘zgartirilgani aniqlansa
avtomatik yozish to‘xtaydi: uni qayta ochib birlashtiring. Bu faylga zaxira yozish,
bulut sinxronlashi emas.

Safari’da **JSON zaxira**, **Parolli zaxira nusxa** va **Import qilish** tugmalari
orqali foydalaning. Shifrlash WebCrypto mavjud bo‘lishini talab qiladi.

Ikki tab bir vaqtda ma’lumotni o‘zgartirsa, dastur eskirgan tab yozishini to‘xtatadi.
U yerdagi o‘zgarishlarni avval JSON eksport qiling, keyin yangi nusxani yuklab
birlashtiring. Buzilgan saqlangan JSON avtomatik tozalanmaydi: asl nusxani yuklab olish mumkin.

## Offline va o‘rnatish

index.html mahalliy fayl sifatida internetsiz ishlaydi. Google Fonts faqat internet
mavjud paytda yuklanadi; bo‘lmasa tizim shriftlari ishlatiladi. Ilova ishlashi uchun
Google Fonts yoki boshqa tashqi kutubxona zarur emas.

Hostingga joylashtirish uchun butun Daily_Tracker papkasini birga yuklang.
HTTPS orqali ilk muvaffaqiyatli ochilishdan so‘ng service worker asosiy fayllarni
offline keshlaydi. Brauzer qo‘llasa, Sozlamalarda o‘rnatish tugmasi paydo bo‘ladi.
file:// rejimida service worker va ilova o‘rnatish chaqirilmaydi.
Eski hosting keshidan foydalanilayotgan bo‘lsa, yangilanishdan keyin tabni qayta oching.

## Klaviatura va qulaylik

- **/** — umumiy qidiruv
- **N** — yangi reja
- **A** — bajarilgan ishni qo‘shish
- **F** — fokus bo‘limi
- **Space** — Fokus bo‘limida boshlash/pauza (matn yoki tugmaga fokus bo‘lmasa)
- **Esc** — dialogni yopish
- **Tab, Enter, Space** — standart boshqaruv
- Faollik kataklarida yo‘nalish tugmalari; **Home/End** — yilning boshi/oxiri

Yozish maydonida turganingizda tezkor harf tugmalari matn terishga xalaqit bermaydi.
Tizimdagi kamaytirilgan animatsiya sozlamasi va qo‘lda tema tanlovi qo‘llab-quvvatlanadi.

## Tekshiruv

Asosiy ish oqimlari Node.js muhitida haqiqiy ilova kodi va WebCrypto bilan dasturiy
tekshirildi: migratsiya, saqlash xatolari, rejalar/odatlar, takrorlash, undo, taymer,
import birlashtirish, eski/yangi shifrlash, parol xatosi va fayl konfliktlari.
HTML ekranlarida takroriy ID va belgisiz boshqaruvlar tekshirildi.

Ushbu topshirish muhitida Safari/Chrome orqali vizual va qurilmadagi native fayl
dialoglarini yakuniy tekshirish imkoni bo‘lmadi. Kod oddiy HTML/CSS/JavaScript;
framework, npm va build bosqichi talab etilmaydi.
