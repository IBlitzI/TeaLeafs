import { Recipe } from '@/types/recipe';

export const mockRecipes: Recipe[] = [
  {
    id: 1,
    name: "Papatya Çayı",
    ailments: ["Stres", "Uykusuzluk"],
    ingredients: [
      "1 yemek kaşığı kurutulmuş papatya çiçeği",
      "1 su bardağı sıcak su",
      "Bal (isteğe bağlı)"
    ],
    steps: [
      "Su ısıtıcısında suyu kaynatın",
      "Papatya çiçeklerini demliğe koyun",
      "Sıcak suyu üzerine dökün",
      "5 dakika demlemeye bırakın",
      "Süzün ve isteğe bağlı bal ekleyin"
    ],
    description: "Stresi azaltmaya ve daha iyi uyumaya yardımcı olan sakinleştirici bir çay.",
    benefits: [
      "Uyku kalitesini artırır",
      "Stresi azaltır",
      "Sindirime yardımcı olur"
    ],
    image: "/images/papatya-çayı.jpg"
  },
  {
    id: 2,
    name: "Zencefil Çayı",
    ailments: ["Bulantı", "Sindirim", "İltihap"],
    ingredients: [
      "5 cm taze zencefil kökü",
      "2 su bardağı su",
      "Limon dilimi",
      "Bal"
    ],
    steps: [
      "Zencefil kökünü soyun ve dilimleyin",
      "Suyu kaynatın",
      "Zencefili ekleyin ve 10 dakika kaynatın",
      "Süzün",
      "Limon ve bal ekleyerek servis yapın"
    ],
    description: "Sindirime yardımcı olan ve iltihabı azaltan ısıtıcı bir çay.",
    benefits: [
      "Sindirimi kolaylaştırır",
      "Bulantıyı azaltır",
      "Bağışıklığı güçlendirir"
    ],
    image: "/images/zencefil-çayı.jpg"
  },
  {
    id: 3,
    name: "Nane Limon Çayı",
    ailments: ["Soğuk Algınlığı", "Boğaz Ağrısı"],
    ingredients: [
      "2 dal taze nane",
      "1/2 limon (dilimlenmiş)",
      "1 su bardağı su",
      "Bal (isteğe bağlı)"
    ],
    steps: [
      "Suyu kaynatın",
      "Nane yapraklarını ve limon dilimlerini bardağa koyun",
      "Üzerine sıcak suyu dökün",
      "5 dakika demleyin",
      "Bal ekleyerek servis yapın"
    ],
    description: "Soğuk algınlığı ve boğaz ağrısı için yatıştırıcı bir çay.",
    benefits: [
      "Boğazı rahatlatır",
      "Bağışıklığı destekler",
      "Soğuk algınlığını hafifletir"
    ],
    image: "/images/nane-limon.jpg"
  },
  {
    id: 4,
    name: "Elma Tarçın Çayı",
    ailments: ["Metabolizma Hızlandırma", "Bağışıklık Güçlendirme"],
    ingredients: [
      "1 elma (dilimlenmiş)",
      "1 çubuk tarçın",
      "2 su bardağı su"
    ],
    steps: [
      "Elma dilimlerini ve çubuk tarçını suya ekleyin",
      "Karışımı 10 dakika kaynatın",
      "Süzerek sıcak servis yapın"
    ],
    description: "Metabolizmayı hızlandıran ve bağışıklığı güçlendiren aromatik bir çay.",
    benefits: [
      "Enerji verir",
      "Bağışıklığı destekler",
      "Kan şekerini düzenler"
    ],
    image: "/images/elma-tarçın.jpg"
  },
  {
    id: 5,
    name: "Kuşburnu Çayı",
    ailments: ["C Vitamini Eksikliği", "Bağışıklık"],
    ingredients: [
      "2 yemek kaşığı kuşburnu",
      "2 su bardağı su"
    ],
    steps: [
      "Kuşburnunu bir cezveye koyun",
      "Üzerine su ekleyin ve kaynatın",
      "5-10 dakika demleyin",
      "Süzerek servis yapın"
    ],
    description: "Yüksek C vitamini içeriğiyle bağışıklık sistemini destekleyen bir çay.",
    benefits: [
      "C vitamini sağlar",
      "Bağışıklığı güçlendirir",
      "Cildi yeniler"
    ],
    image: "/images/kuşburnu.jpg"
  },
  {
    id: 6,
    name: "Adaçayı",
    ailments: ["Boğaz Ağrısı", "Stres"],
    ingredients: [
      "1 yemek kaşığı adaçayı yaprağı",
      "1 su bardağı sıcak su"
    ],
    steps: [
      "Adaçayı yapraklarını sıcak suya ekleyin",
      "5-7 dakika demleyin",
      "Süzerek servis yapın"
    ],
    description: "Boğaz ağrısını yatıştıran ve sakinleştirici etkisi olan bir çay.",
    benefits: [
      "Boğazı rahatlatır",
      "Stresi azaltır",
      "Ağız sağlığını destekler"
    ],
    image: "/images/adaçayı.jpg"
  },
  {
    id: 7,
    name: "Ihlamur Çayı",
    ailments: ["Soğuk Algınlığı", "Stres"],
    ingredients: [
      "1 yemek kaşığı ıhlamur yaprağı",
      "1 su bardağı sıcak su",
      "Bal (isteğe bağlı)"
    ],
    steps: [
      "Ihlamur yapraklarını sıcak suya ekleyin",
      "5-7 dakika demleyin",
      "Süzerek bal ile servis yapın"
    ],
    description: "Soğuk algınlığı ve stresi azaltmaya yardımcı olan rahatlatıcı bir çay.",
    benefits: [
      "Stresi azaltır",
      "Bağışıklığı destekler",
      "Sakinleştirir"
    ],
    image: "/images/ıhlamur.jpg"
  },
  {
    id: 8,
    name: "Tarçınlı Süt",
    ailments: ["Uyku Sorunları", "Soğuk Algınlığı"],
    ingredients: [
      "1 su bardağı süt",
      "1 çubuk tarçın",
      "Bal (isteğe bağlı)"
    ],
    steps: [
      "Sütü ısıtın",
      "İçine tarçın çubuğunu ekleyin",
      "5 dakika demleyin",
      "Bal ekleyerek servis yapın"
    ],
    description: "Uyku sorunlarını azaltan ve vücudu rahatlatan sıcak bir içecek.",
    benefits: [
      "Uykuya yardımcı olur",
      "Vücudu rahatlatır",
      "Soğuk algınlığına iyi gelir"
    ],
    image: "/images/tarçınlı-süt.jpg"
  },
  {
    id: 9,
    name: "Limonlu Su",
    ailments: ["Detoks", "Sindirim"],
    ingredients: [
      "1/2 limon (suyu)",
      "1 su bardağı ılık su"
    ],
    steps: [
      "Limon suyunu bir bardağa sıkın",
      "Ilık su ekleyerek karıştırın",
      "Sabahları aç karna için"
    ],
    description: "Vücudu temizlemeye ve sindirimi desteklemeye yardımcı olan basit bir içecek.",
    benefits: [
      "Detoks etkisi sağlar",
      "Sindirim sistemini destekler",
      "C vitamini sağlar"
    ],
    image: "/images/limonlu-su.jpg"
  },
  {
    id: 10,
    name: "Rezene Çayı",
    ailments: ["Gaz", "Sindirim", "Stres"],
    ingredients: [
      "1 tatlı kaşığı rezene tohumu",
      "1 su bardağı sıcak su"
    ],
    steps: [
      "Rezeneyi sıcak suya ekleyin",
      "5-7 dakika demleyin",
      "Süzerek servis yapın"
    ],
    description: "Gaz sorunlarına iyi gelen ve sindirimi kolaylaştıran bir çay.",
    benefits: [
      "Sindirim sistemini rahatlatır",
      "Gazı azaltır",
      "Stresi hafifletir"
    ],
    image: "/images/rezene.jpg"
  },
  {
    id: 11,
    name: "Lavanta Çayı",
    ailments: ["Stres", "Uykusuzluk"],
    ingredients: [
        "1 tatlı kaşığı kuru lavanta",
        "1 su bardağı sıcak su"
    ],
    steps: [
        "Lavanta çiçeklerini sıcak suya ekleyin",
        "5 dakika demlemeye bırakın",
        "Süzerek servis yapın"
    ],
    description: "Stresi azaltan ve uykuya geçişi kolaylaştıran hoş kokulu bir çay.",
    benefits: [
        "Stresi hafifletir",
        "Uyku düzenini iyileştirir",
        "Rahatlama sağlar"
    ],
    image: "/images/lavanta.jpg"
},
{
    id: 12,
    name: "Karabaş Otu Çayı",
    ailments: ["Bağışıklık", "Sindirim"],
    ingredients: [
        "1 tatlı kaşığı karabaş otu",
        "1 su bardağı sıcak su"
    ],
    steps: [
        "Karabaş otunu sıcak suya ekleyin",
        "7-10 dakika demleyin",
        "Süzerek servis yapın"
    ],
    description: "Bağışıklığı güçlendiren ve sindirim sorunlarına iyi gelen bir çay.",
    benefits: [
        "Bağışıklığı destekler",
        "Sindirim sistemini rahatlatır",
        "Vücudu toksinlerden arındırır"
    ],
    image: "/images/karabaşotu.jpg"
},
{
    id: 13,
    name: "Melisa Çayı",
    ailments: ["Anksiyete", "Stres", "Uyku Bozukluğu"],
    ingredients: [
        "1 yemek kaşığı melisa yaprağı",
        "1 su bardağı sıcak su"
    ],
    steps: [
        "Melisa yapraklarını sıcak suya ekleyin",
        "5 dakika demlemeye bırakın",
        "Süzerek servis yapın"
    ],
    description: "Anksiyete ve stresi azaltan doğal bir rahatlatıcı.",
    benefits: [
        "Sinirleri yatıştırır",
        "Uyku kalitesini artırır",
        "Zihinsel rahatlama sağlar"
    ],
    image: "/images/melisa.jpg"
},
{
    id: 14,
    name: "Biberiye Çayı",
    ailments: ["Hafıza", "Yorgunluk"],
    ingredients: [
        "1 tatlı kaşığı kuru biberiye",
        "1 su bardağı sıcak su"
    ],
    steps: [
        "Biberiyeyi sıcak suya ekleyin",
        "10 dakika demleyin",
        "Süzerek servis yapın"
    ],
    description: "Hafızayı destekleyen ve enerji veren doğal bir bitki çayı.",
    benefits: [
        "Hafızayı güçlendirir",
        "Enerji seviyesini artırır",
        "Bağışıklığı destekler"
    ],
    image: "/images/biberiye.jpg"
},
{
    id: 15,
    name: "Tarhun Çayı",
    ailments: ["Mide Rahatsızlıkları", "Bağışıklık"],
    ingredients: [
        "1 tatlı kaşığı tarhun otu",
        "1 su bardağı sıcak su"
    ],
    steps: [
        "Tarhun otunu sıcak suya ekleyin",
        "5 dakika demleyin",
        "Süzerek sıcak servis yapın"
    ],
    description: "Mideyi yatıştıran ve bağışıklığı destekleyen bir bitki çayı.",
    benefits: [
        "Sindirim sorunlarına iyi gelir",
        "Bağışıklık sistemini güçlendirir",
        "Stresi hafifletir"
    ],
    image: "/images/tarhun.jpg"
},
{
    id: 16,
    name: "Zerdeçal Suyu",
    ailments: ["İltihap", "Bağışıklık"],
    ingredients: [
        "1 çay kaşığı toz zerdeçal",
        "1 su bardağı ılık su",
        "1 çay kaşığı bal"
    ],
    steps: [
        "Toz zerdeçalı ve balı ılık suya ekleyin",
        "İyice karıştırarak tüketin"
    ],
    description: "Bağışıklığı destekleyen ve iltihabı azaltan doğal bir içecek.",
    benefits: [
        "İltihabı hafifletir",
        "Bağışıklık sistemini güçlendirir",
        "Enerji verir"
    ],
    image: "/images/zerdeçal.jpg"
},
{
    id: 17,
    name: "Hibiskus Çayı",
    ailments: ["Tansiyon", "Sindirim"],
    ingredients: [
        "1 tatlı kaşığı kuru hibiskus çiçeği",
        "1 su bardağı sıcak su"
    ],
    steps: [
        "Hibiskus çiçeklerini sıcak suya ekleyin",
        "5-7 dakika demleyin",
        "Süzerek servis yapın"
    ],
    description: "Tansiyonu dengelemeye ve sindirimi kolaylaştırmaya yardımcı bir çay.",
    benefits: [
        "Tansiyonu düşürür",
        "Bağışıklığı destekler",
        "C vitamini sağlar"
    ],
    image: "/images/hibiskus.jpg"
},
{
    id: 18,
    name: "Isırgan Otu Çayı",
    ailments: ["Detoks", "Bağışıklık"],
    ingredients: [
        "1 tatlı kaşığı kuru ısırgan otu",
        "1 su bardağı sıcak su"
    ],
    steps: [
        "Isırgan otunu sıcak suya ekleyin",
        "5-10 dakika demleyin",
        "Süzerek servis yapın"
    ],
    description: "Vücudu toksinlerden arındıran ve bağışıklığı destekleyen bir çay.",
    benefits: [
        "Detoks etkisi sağlar",
        "Bağışıklığı güçlendirir",
        "Cilt sağlığını destekler"
    ],
    image: "/images/ısırgan-otu.jpg"
},
{
    id: 19,
    name: "Fesleğen Çayı",
    ailments: ["Baş Ağrısı", "Stres"],
    ingredients: [
        "1 tatlı kaşığı kuru fesleğen yaprağı",
        "1 su bardağı sıcak su"
    ],
    steps: [
        "Fesleğen yapraklarını sıcak suya ekleyin",
        "7-10 dakika demleyin",
        "Süzerek servis yapın"
    ],
    description: "Baş ağrısını hafifletmeye ve stresi azaltmaya yardımcı bir çay.",
    benefits: [
        "Baş ağrısını hafifletir",
        "Rahatlama sağlar",
        "Sindirime yardımcı olur"
    ],
    image: "/images/fesleğen.jpg"
},
{
    id: 20,
    name: "Yeşil Çay",
    ailments: ["Metabolizma", "Detoks"],
    ingredients: [
        "1 çay kaşığı yeşil çay",
        "1 su bardağı sıcak su",
        "Limon dilimi (isteğe bağlı)"
    ],
    steps: [
        "Yeşil çayı sıcak suya ekleyin",
        "3-5 dakika demleyin",
        "Süzerek limonla servis yapın"
    ],
    description: "Metabolizmayı hızlandıran ve detoks etkisi sağlayan bir çay.",
    benefits: [
        "Metabolizmayı hızlandırır",
        "Vücudu arındırır",
        "Enerji verir"
    ],
    image: "/images/yeşil.jpg"
},
{
    id: 21,
    name: "Zencefilli Limonata",
    ailments: ["Bağışıklık", "Soğuk Algınlığı"],
    ingredients: [
        "1 tatlı kaşığı taze zencefil rendesi",
        "1 limonun suyu",
        "1 su bardağı su",
        "1 tatlı kaşığı bal"
    ],
    steps: [
        "Zencefili ve limon suyunu suya ekleyin",
        "Bal ile tatlandırın",
        "Soğuk veya ılık servis yapın"
    ],
    description: "Bağışıklığı güçlendiren ve soğuk algınlığına iyi gelen ferahlatıcı bir içecek.",
    benefits: [
        "Bağışıklığı destekler",
        "C vitamini sağlar",
        "Soğuk algınlığını hafifletir"
    ],
    image: "/images/zencefilli-limonata.jpg"
},
{
    id: 22,
    name: "Elmalı Zencefil Çayı",
    ailments: ["Bağışıklık", "Sindirim"],
    ingredients: [
        "1/2 elma (dilimlenmiş)",
        "1 tatlı kaşığı taze zencefil rendesi",
        "2 su bardağı su",
        "Tarçın çubuğu (isteğe bağlı)"
    ],
    steps: [
        "Elma dilimlerini ve zencefili suya ekleyin",
        "10 dakika kaynatın",
        "Süzerek sıcak servis yapın"
    ],
    description: "Bağışıklığı güçlendiren ve sindirimi destekleyen aromatik bir çay.",
    benefits: [
        "Bağışıklığı destekler",
        "Sindirim sistemini rahatlatır",
        "Enerji sağlar"
    ],
    image: "/images/elmalı-zencefil.jpg"
},
{
    id: 23,
    name: "Nane ve Fesleğen Çayı",
    ailments: ["Stres", "Sindirimi Kolaylaştırma"],
    ingredients: [
        "1 tatlı kaşığı taze nane",
        "1 tatlı kaşığı kuru fesleğen",
        "1 su bardağı sıcak su"
    ],
    steps: [
        "Nane ve fesleğeni sıcak suya ekleyin",
        "5-7 dakika demleyin",
        "Süzerek servis yapın"
    ],
    description: "Sindirimi kolaylaştıran ve stresi azaltan doğal bir çay.",
    benefits: [
        "Sindirimi kolaylaştırır",
        "Zihni sakinleştirir",
        "Enerji sağlar"
    ],
    image: "/images/nane-fesleğen.jpg"
},
{
    id: 24,
    name: "Defne Yaprağı Çayı",
    ailments: ["Metabolizma", "Soğuk Algınlığı"],
    ingredients: [
        "2 adet defne yaprağı",
        "1 su bardağı sıcak su"
    ],
    steps: [
        "Defne yapraklarını sıcak suya ekleyin",
        "5-7 dakika demleyin",
        "Süzerek sıcak servis yapın"
    ],
    description: "Metabolizmayı hızlandıran ve soğuk algınlığına karşı etkili bir çay.",
    benefits: [
        "Metabolizmayı destekler",
        "Soğuk algınlığını hafifletir",
        "Bağışıklığı güçlendirir"
    ],
    image: "/images/defne-yaprağı.jpg"
},
{
    id: 25,
    name: "Ballı Kakule Çayı",
    ailments: ["Sindirim", "Stres"],
    ingredients: [
        "2 adet kakule tohumu",
        "1 su bardağı sıcak su",
        "1 tatlı kaşığı bal"
    ],
    steps: [
        "Kakule tohumlarını ezin ve sıcak suya ekleyin",
        "5 dakika demleyin",
        "Bal ile tatlandırarak servis yapın"
    ],
    description: "Sindirim sorunlarına iyi gelen ve rahatlama sağlayan aromatik bir çay.",
    benefits: [
        "Sindirimi destekler",
        "Stresi hafifletir",
        "Zihinsel rahatlama sağlar"
    ],
    image: "/images/ballı-kakule.jpg"
},
{
    id: 26,
    name: "Zencefil ve Limon Çayı",
    ailments: ["Soğuk Algınlığı", "Bağışıklık Sistemi"],
    ingredients: [
        "1 parça taze zencefil",
        "1 su bardağı sıcak su",
        "1 dilim limon",
        "1 tatlı kaşığı bal"
    ],
    steps: [
        "Zencefili ince dilimler halinde kesin ve sıcak suya ekleyin",
        "10 dakika demleyin",
        "Limon dilimi ve bal ile tatlandırarak servis yapın"
    ],
    description: "Soğuk algınlığına iyi gelen ve bağışıklık sistemini güçlendiren bir çay.",
    benefits: [
        "Boğaz ağrısını hafifletir",
        "Bağışıklık sistemini destekler",
        "Antioksidan etkisi vardır"
    ],
    image: "/images/zencefil-limon.jpg"
},
{
    id: 27,
    name: "Nane ve Rezene Çayı",
    ailments: ["Gaz", "Mide Rahatsızlıkları"],
    ingredients: [
        "1 tatlı kaşığı kuru nane",
        "1 tatlı kaşığı rezene tohumu",
        "1 su bardağı sıcak su"
    ],
    steps: [
        "Nane ve rezene tohumlarını sıcak suya ekleyin",
        "7-10 dakika demleyin",
        "Süzerek servis yapın"
    ],
    description: "Gaz ve mide rahatsızlıklarına iyi gelen ferahlatıcı bir çay.",
    benefits: [
        "Gazı giderir",
        "Mideyi rahatlatır",
        "Sindirimi kolaylaştırır"
    ],
    image: "/images/nane-rezene.jpg"
},
{
    id: 28,
    name: "Adaçayı ve Karanfil Çayı",
    ailments: ["Boğaz Ağrısı", "Ağız Sağlığı"],
    ingredients: [
        "1 tatlı kaşığı adaçayı",
        "2 adet karanfil",
        "1 su bardağı sıcak su",
        "1 tatlı kaşığı bal"
    ],
    steps: [
        "Adaçayı ve karanfili sıcak suya ekleyin",
        "8-10 dakika demleyin",
        "Bal ile tatlandırarak servis yapın"
    ],
    description: "Boğaz ağrısına ve ağız sağlığına iyi gelen antiseptik bir çay.",
    benefits: [
        "Boğaz ağrısını hafifletir",
        "Ağız içi enfeksiyonlarına karşı korur",
        "Antiseptik özelliklere sahiptir"
    ],
    image: "/images/karanfil-adaçayı.jpg"
},
{
    id: 29,
    name: "Papatya ve Lavanta Çayı",
    ailments: ["Uyku Problemleri", "Stres"],
    ingredients: [
        "1 tatlı kaşığı kuru papatya",
        "1 tatlı kaşığı kuru lavanta",
        "1 su bardağı sıcak su",
        "1 tatlı kaşığı bal"
    ],
    steps: [
        "Papatya ve lavantayı sıcak suya ekleyin",
        "10 dakika demleyin",
        "Bal ile tatlandırarak servis yapın"
    ],
    description: "Uyku problemlerine ve strese iyi gelen rahatlatıcı bir çay.",
    benefits: [
        "Uyku kalitesini artırır",
        "Stresi azaltır",
        "Sinirleri yatıştırır"
    ],
    image: "/images/papatya-lavanta.jpg"
},
{
    id: 30,
    name: "Tarçın ve Elma Çayı",
    ailments: ["Kan Şekeri", "Antioksidan"],
    ingredients: [
        "1 adet elma",
        "1 çubuk tarçın",
        "1 su bardağı sıcak su",
        "1 tatlı kaşığı bal"
    ],
    steps: [
        "Elmayı dilimleyin ve tarçın çubuğu ile birlikte sıcak suya ekleyin",
        "10-15 dakika demleyin",
        "Bal ile tatlandırarak servis yapın"
    ],
    description: "Kan şekerini dengeleyen ve antioksidan özellikleri olan bir çay.",
    benefits: [
        "Kan şekerini dengeler",
        "Antioksidan etkisi vardır",
        "Metabolizmayı hızlandırır"
    ],
    image: "/images/tarçın-elma.jpg"
},
{
    id: 31,
    name: "Kuşburnu ve Hibiskus Çayı",
    ailments: ["C Vitamini Eksikliği", "Enfeksiyon"],
    ingredients: [
        "1 tatlı kaşığı kurutulmuş kuşburnu",
        "1 tatlı kaşığı hibiskus",
        "1 su bardağı sıcak su",
        "1 tatlı kaşığı bal"
    ],
    steps: [
        "Kuşburnu ve hibiskusu sıcak suya ekleyin",
        "10-12 dakika demleyin",
        "Bal ile tatlandırarak servis yapın"
    ],
    description: "C vitamini deposu olan ve enfeksiyonlara karşı koruyucu bir çay.",
    benefits: [
        "Bağışıklık sistemini güçlendirir",
        "Enfeksiyonlara karşı korur",
        "Antioksidan özelliklere sahiptir"
    ],
    image: "/images/kuşburnu-hibiskus.jpg"
},
{
    id: 32,
    name: "Yeşil Çay ve Zerdeçal Karışımı",
    ailments: ["Enflamasyon", "Antioksidan"],
    ingredients: [
        "1 tatlı kaşığı yeşil çay",
        "1 çay kaşığı zerdeçal tozu",
        "1 su bardağı sıcak su",
        "1 tatlı kaşığı bal"
    ],
    steps: [
        "Yeşil çay ve zerdeçalı sıcak suya ekleyin",
        "5-7 dakika demleyin",
        "Bal ile tatlandırarak servis yapın"
    ],
    description: "Enflamasyonu azaltan ve antioksidan özellikleri olan bir çay.",
    benefits: [
        "Enflamasyonu azaltır",
        "Antioksidan etkisi vardır",
        "Metabolizmayı hızlandırır"
    ],
    image: "/images/zerdeçal.jpg"
},
{
    id: 33,
    name: "Kekik ve Limon Çayı",
    ailments: ["Öksürük", "Boğaz Ağrısı"],
    ingredients: [
        "1 tatlı kaşığı kuru kekik",
        "1 dilim limon",
        "1 su bardağı sıcak su",
        "1 tatlı kaşığı bal"
    ],
    steps: [
        "Kekiği sıcak suya ekleyin",
        "8-10 dakika demleyin",
        "Limon dilimi ve bal ile tatlandırarak servis yapın"
    ],
    description: "Öksürük ve boğaz ağrısına iyi gelen şifalı bir çay.",
    benefits: [
        "Öksürüğü hafifletir",
        "Boğaz ağrısını azaltır",
        "Antiseptik özelliklere sahiptir"
    ],
    image: "/images/kekik-limon.jpg"
},
{
    id: 34,
    name: "Biberiye ve Limon Çayı",
    ailments: ["Hafıza", "Konsantrasyon"],
    ingredients: [
        "1 tatlı kaşığı biberiye",
        "1 dilim limon",
        "1 su bardağı sıcak su",
        "1 tatlı kaşığı bal"
    ],
    steps: [
        "Biberiyeyi sıcak suya ekleyin",
        "7-10 dakika demleyin",
        "Limon dilimi ve bal ile tatlandırarak servis yapın"
    ],
    description: "Hafızayı güçlendiren ve konsantrasyonu artıran bir çay.",
    benefits: [
        "Hafızayı güçlendirir",
        "Konsantrasyonu artırır",
        "Zihinsel berraklık sağlar"
    ],
    image: "/images/biberiye-limon.jpg"
},
{
    id: 35,
    name: "Ihlamur ve Ayva Yaprağı Çayı",
    ailments: ["Soğuk Algınlığı", "Öksürük"],
    ingredients: [
        "1 tatlı kaşığı ıhlamur",
        "1 tatlı kaşığı kurutulmuş ayva yaprağı",
        "1 su bardağı sıcak su",
        "1 tatlı kaşığı bal"
    ],
    steps: [
        "Ihlamur ve ayva yapraklarını sıcak suya ekleyin",
        "10 dakika demleyin",
        "Bal ile tatlandırarak servis yapın"
    ],
    description: "Soğuk algınlığı ve öksürüğe iyi gelen şifalı bir çay.",
    benefits: [
        "Soğuk algınlığı semptomlarını hafifletir",
        "Öksürüğü azaltır",
        "Boğazı yumuşatır"
    ],
    image: "/images/ıhlamur-ayvayaprağı.jpg"
},
{
    id: 36,
    name: "Karahindiba Kökü Çayı",
    ailments: ["Karaciğer Sağlığı", "Detoks"],
    ingredients: [
        "1 tatlı kaşığı kurutulmuş karahindiba kökü",
        "1 su bardağı sıcak su",
        "1 tatlı kaşığı bal"
    ],
    steps: [
        "Karahindiba kökünü sıcak suya ekleyin",
        "10-12 dakika demleyin",
        "Bal ile tatlandırarak servis yapın"
    ],
    description: "Karaciğer sağlığını destekleyen ve detoks etkisi olan bir çay.",
    benefits: [
        "Karaciğer fonksiyonlarını destekler",
        "Detoks etkisi vardır",
        "Sindirimi kolaylaştırır"
    ],
    image: "/images/karahindiba-kökü.jpg"
},
{
    id: 37,
    name: "Meyan Kökü Çayı",
    ailments: ["Mide Yanması", "Boğaz Ağrısı"],
    ingredients: [
        "1 tatlı kaşığı kurutulmuş meyan kökü",
        "1 su bardağı sıcak su"
    ],
    steps: [
        "Meyan kökünü sıcak suya ekleyin",
        "8-10 dakika demleyin",
        "Süzerek servis yapın"
    ],
    description: "Mide yanması ve boğaz ağrısına iyi gelen şifalı bir çay.",
    benefits: [
        "Mide yanmasını hafifletir",
        "Boğaz ağrısını azaltır",
        "Anti-enflamatuar özelliklere sahiptir"
    ],
    image: "/images/meyan-koku.jpg"
},
{
    id: 38,
    name: "Fesleğen Çayı",
    ailments: ["Baş Ağrısı", "Stres"],
    ingredients: [
        "1 tatlı kaşığı kuru fesleğen yaprağı",
        "1 su bardağı sıcak su"
    ],
    steps: [
        "Fesleğen yapraklarını sıcak suya ekleyin",
        "7-10 dakika demleyin",
        "Süzerek servis yapın"
    ],
    description: "Baş ağrısını hafifletmeye ve stresi azaltmaya yardımcı bir çay.",
    benefits: [
        "Baş ağrısını hafifletir",
        "Rahatlama sağlar",
        "Sindirime yardımcı olur"
    ],
    image: "/images/fesleğen.jpg"
},
{
    id: 39,
    name: "Karanfil ve Tarçın Çayı",
    ailments: ["Ağız Sağlığı", "Antioksidan"],
    ingredients: [
        "2 adet karanfil",
        "1 çubuk tarçın",
        "1 su bardağı sıcak su",
        "1 tatlı kaşığı bal"
    ],
    steps: [
        "Karanfil ve tarçın çubuğunu sıcak suya ekleyin",
        "10 dakika demleyin",
        "Bal ile tatlandırarak servis yapın"
    ],
    description: "Ağız sağlığını koruyan ve antioksidan özellikleri olan bir çay.",
    benefits: [
        "Ağız içi enfeksiyonlarına karşı korur",
        "Antioksidan etkisi vardır",
        "Nefesi tazeler"
    ],
    image: "/images/karanfil-tarçın.jpg"
},
{
    id: 40,
    name: "Zencefil ve Nane Çayı",
    ailments: ["Mide Bulantısı", "Sindirim"],
    ingredients: [
        "1 parça taze zencefil",
        "1 tatlı kaşığı kuru nane",
        "1 su bardağı sıcak su",
        "1 tatlı kaşığı bal"
    ],
    steps: [
        "Zencefili ince dilimler halinde kesin ve naneyle birlikte sıcak suya ekleyin",
        "10 dakika demleyin",
        "Bal ile tatlandırarak servis yapın"
    ],
    description: "Mide bulantısına ve sindirim problemlerine iyi gelen bir çay.",
    benefits: [
        "Mide bulantısını hafifletir",
        "Sindirimi kolaylaştırır",
        "Anti-enflamatuar özelliklere sahiptir"
    ],
    image: "/images/zencefil-nane.jpg"
},
{
    id: 41,
    name: "Ekinezya Çayı",
    ailments: ["Bağışıklık Sistemi", "Soğuk Algınlığı"],
    ingredients: [
        "1 tatlı kaşığı kurutulmuş ekinezya",
        "1 su bardağı sıcak su",
        "1 tatlı kaşığı bal"
    ],
    steps: [
        "Ekinezyayı sıcak suya ekleyin",
        "10 dakika demleyin",
        "Bal ile tatlandırarak servis yapın"
    ],
    description: "Bağışıklık sistemini güçlendiren ve soğuk algınlığına iyi gelen bir çay.",
    benefits: [
        "Bağışıklık sistemini destekler",
        "Soğuk algınlığı semptomlarını hafifletir",
        "Antiviral özelliklere sahiptir"
    ],
    image: "/images/ekinezya.jpg"
},
{
    id: 42,
    name: "Sarı Kantaron Çayı",
    ailments: ["Depresyon", "Anksiyete"],
    ingredients: [
        "1 tatlı kaşığı kurutulmuş sarı kantaron",
        "1 su bardağı sıcak su",
        "1 tatlı kaşığı bal"
    ],
    steps: [
        "Sarı kantaronu sıcak suya ekleyin",
        "8-10 dakika demleyin",
        "Bal ile tatlandırarak servis yapın"
    ],
    description: "Depresyon ve anksiyete semptomlarını hafifleten bir çay.",
    benefits: [
        "Ruh halini iyileştirir",
        "Anksiyeteyi azaltır",
        "Sinirleri yatıştırır"
    ],
    image: "/images/sarı-kantoron.jpg"
},
{
    id: 43,
    name: "Kırmızı Ginseng Çayı",
    ailments: ["Enerji", "Konsantrasyon"],
    ingredients: [
        "1 tatlı kaşığı kırmızı ginseng kökü",
        "1 su bardağı sıcak su",
        "1 tatlı kaşığı bal"
    ],
    steps: [
        "Kırmızı ginseng kökünü sıcak suya ekleyin",
        "10-12 dakika demleyin",
        "Bal ile tatlandırarak servis yapın"
    ],
    description: "Enerji veren ve konsantrasyonu artıran bir çay.",
    benefits: [
        "Enerji seviyesini artırır",
        "Konsantrasyonu güçlendirir",
        "Zihinsel berraklık sağlar"
    ],
    image: "/images/kırmızı-ginseng.jpg"
},
{
    id: 44,
    name: "Lavanta ve Papatya Çayı",
    ailments: ["Uyku Problemleri", "Stres"],
    ingredients: [
        "1 tatlı kaşığı kurutulmuş lavanta",
        "1 tatlı kaşığı kurutulmuş papatya",
        "1 su bardağı sıcak su",
        "1 tatlı kaşığı bal"
    ],
    steps: [
        "Lavanta ve papatyayı sıcak suya ekleyin",
        "10 dakika demleyin",
        "Bal ile tatlandırarak servis yapın"
    ],
    description: "Uyku problemlerine ve strese iyi gelen rahatlatıcı bir çay.",
    benefits: [
        "Uyku kalitesini artırır",
        "Stresi azaltır",
        "Sinirleri yatıştırır"
    ],
    image: "/images/lavanta-paptya.jpg"
},
{
    id: 45,
    name: "Tarhun Otu Çayı",
    ailments: ["Sindirim", "İştah Açıcı"],
    ingredients: [
        "1 tatlı kaşığı kurutulmuş tarhun otu",
        "1 su bardağı sıcak su",
        "1 tatlı kaşığı bal"
    ],
    steps: [
        "Tarhun otunu sıcak suya ekleyin",
        "8-10 dakika demleyin",
        "Bal ile tatlandırarak servis yapın"
    ],
    description: "Sindirimi kolaylaştıran ve iştah açan bir çay.",
    benefits: [
        "Sindirimi destekler",
        "İştah açar",
        "Mideyi rahatlatır"
    ],
    image: "/images/tarhun.jpg"
},
{
    id: 46,
    name: "Yaban Mersini Yaprağı Çayı",
    ailments: ["Kan Şekeri", "İdrar Yolu Enfeksiyonları"],
    ingredients: [
        "1 tatlı kaşığı kurutulmuş yaban mersini yaprağı",
        "1 su bardağı sıcak su",
        "1 tatlı kaşığı bal"
    ],
    steps: [
        "Yaban mersini yapraklarını sıcak suya ekleyin",
        "10 dakika demleyin",
        "Bal ile tatlandırarak servis yapın"
    ],
    description: "Kan şekerini dengeleyen ve idrar yolu enfeksiyonlarına iyi gelen bir çay.",
    benefits: [
        "Kan şekerini dengeler",
        "İdrar yolu enfeksiyonlarını önler",
        "Antioksidan özelliklere sahiptir"
    ],
    image: "/images/yapan-mersini.jpg"
},
{
    id: 47,
    name: "Kırmızı Biber ve Limon Çayı",
    ailments: ["Metabolizma", "Bağışıklık Sistemi"],
    ingredients: [
        "1/4 çay kaşığı kırmızı biber tozu",
        "1 dilim limon",
        "1 su bardağı sıcak su",
        "1 tatlı kaşığı bal"
    ],
    steps: [
        "Kırmızı biber tozunu ve limon dilimini sıcak suya ekleyin",
        "5 dakika demleyin",
        "Bal ile tatlandırarak servis yapın"
    ],
    description: "Metabolizmayı hızlandıran ve bağışıklık sistemini güçlendiren bir çay.",
    benefits: [
        "Metabolizmayı hızlandırır",
        "Bağışıklık sistemini destekler",
        "Antioksidan etkisi vardır"
    ],
    image: "/images/kırmızı-biber-limon.jpg"
},
{
    id: 48,
    name: "Çörek Otu Çayı",
    ailments: ["Antioksidan", "Sindirim"],
    ingredients: [
        "1 tatlı kaşığı çörek otu",
        "1 su bardağı sıcak su",
        "1 tatlı kaşığı bal"
    ],
    steps: [
        "Çörek otunu sıcak suya ekleyin",
        "10 dakika demleyin",
        "Bal ile tatlandırarak servis yapın"
    ],
    description: "Antioksidan özellikleri olan ve sindirimi destekleyen bir çay.",
    benefits: [
        "Antioksidan etkisi vardır",
        "Sindirimi kolaylaştırır",
        "Bağışıklık sistemini güçlendirir"
    ],
    image: "/images/çörek-otu.jpg"
},
{
    id: 49,
    name: "Rezene ve Anason Çayı",
    ailments: ["Gaz", "Sindirim"],
    ingredients: [
        "1 tatlı kaşığı rezene tohumu",
        "1 tatlı kaşığı anason tohumu",
        "1 su bardağı sıcak su"
    ],
    steps: [
        "Rezene ve anason tohumlarını sıcak suya ekleyin",
        "8-10 dakika demleyin",
        "Süzerek servis yapın"
    ],
    description: "Gaz ve sindirim problemlerine iyi gelen bir çay.",
    benefits: [
        "Gazı giderir",
        "Sindirimi kolaylaştırır",
        "Mideyi rahatlatır"
    ],
    image: "/images/rezene-anason.jpg"
},
{
    id: 50,
    name: "Kekik ve Zeytin Yaprağı Çayı",
    ailments: ["Antioksidan", "Bağışıklık Sistemi"],
    ingredients: [
        "1 tatlı kaşığı kuru kekik",
        "1 tatlı kaşığı kurutulmuş zeytin yaprağı",
        "1 su bardağı sıcak su",
        "1 tatlı kaşığı bal"
    ],
    steps: [
        "Kekik ve zeytin yapraklarını sıcak suya ekleyin",
        "10 dakika demleyin",
        "Bal ile tatlandırarak servis yapın"
    ],
    description: "Antioksidan özellikleri olan ve bağışıklık sistemini güçlendiren bir çay.",
    benefits: [
        "Antioksidan etkisi vardır",
        "Bağışıklık sistemini destekler",
        "Enfeksiyonlara karşı korur"
    ],
    image: "/images/zeytin-yaprağı-kekik.jpg"
},
{
    id: 51,
    name: "Moringa Çayı",
    ailments: ["Enerji", "Antioksidan"],
    ingredients: [
        "1 tatlı kaşığı kurutulmuş moringa yaprağı",
        "1 su bardağı sıcak su",
        "1 tatlı kaşığı bal"
    ],
    steps: [
        "Moringa yapraklarını sıcak suya ekleyin",
        "5-7 dakika demleyin",
        "Bal ile tatlandırarak servis yapın"
    ],
    description: "Enerji veren ve antioksidan özellikleri olan bir çay.",
    benefits: [
        "Enerji seviyesini artırır",
        "Antioksidan etkisi vardır",
        "Bağışıklık sistemini güçlendirir"
    ],
    image: "/images/moringa.jpg"
},
{
    id: 52,
    name: "Kedi Otu Çayı",
    ailments: ["Uyku Problemleri", "Stres"],
    ingredients: [
        "1 tatlı kaşığı kurutulmuş kedi otu kökü",
        "1 su bardağı sıcak su",
        "1 tatlı kaşığı bal"
    ],
    steps: [
        "Kedi otu kökünü sıcak suya ekleyin",
        "10 dakika demleyin",
        "Bal ile tatlandırarak servis yapın"
    ],
    description: "Uyku problemlerine ve strese iyi gelen rahatlatıcı bir çay.",
    benefits: [
        "Uyku kalitesini artırır",
        "Stresi azaltır",
        "Sinirleri yatıştırır"
    ],
    image: "/images/kediotu.jpg"
},
{
    id: 53,
    name: "Karabaş Otu Çayı",
    ailments: ["Baş Ağrısı", "Sinüs Tıkanıklığı"],
    ingredients: [
        "1 tatlı kaşığı kurutulmuş karabaş otu",
        "1 su bardağı sıcak su",
        "1 tatlı kaşığı bal"
    ],
    steps: [
        "Karabaş otunu sıcak suya ekleyin",
        "8-10 dakika demleyin",
        "Bal ile tatlandırarak servis yapın"
    ],
    description: "Baş ağrısına ve sinüs tıkanıklığına iyi gelen bir çay.",
    benefits: [
        "Baş ağrısını hafifletir",
        "Sinüs tıkanıklığını açar",
        "Rahatlatıcı etkisi vardır"
    ],
    image: "/images/karabaşotu.jpg"
},
{
    id: 54,
    name: "Zerdeçal ve Karabiber Çayı",
    ailments: ["Enflamasyon", "Antioksidan"],
    ingredients: [
        "1 çay kaşığı zerdeçal tozu",
        "1/4 çay kaşığı karabiber",
        "1 su bardağı sıcak su",
        "1 tatlı kaşığı bal"
    ],
    steps: [
        "Zerdeçal ve karabiberi sıcak suya ekleyin",
        "5-7 dakika demleyin",
        "Bal ile tatlandırarak servis yapın"
    ],
    description: "Enflamasyonu azaltan ve antioksidan özellikleri olan bir çay.",
    benefits: [
        "Enflamasyonu azaltır",
        "Antioksidan etkisi vardır",
        "Bağışıklık sistemini güçlendirir"
    ],
    image: "/images/zerdeçal-karabiber.jpg"
},
{
    id: 55,
    name: "Aloe Vera Çayı",
    ailments: ["Sindirim", "Cilt Sağlığı"],
    ingredients: [
        "2 yemek kaşığı taze aloe vera jeli",
        "1 su bardağı sıcak su",
        "1 tatlı kaşığı bal"
    ],
    steps: [
        "Aloe vera jelini sıcak suya ekleyin",
        "5 dakika karıştırın",
        "Bal ile tatlandırarak servis yapın"
    ],
    description: "Sindirimi destekleyen ve cilt sağlığına iyi gelen bir çay.",
    benefits: [
        "Sindirimi kolaylaştırır",
        "Cilt sağlığını destekler",
        "Antioksidan özelliklere sahiptir"
    ],
    image: "/images/aleovera.jpg"
},
{
    id: 56,
    name: "Kırmızı Yonca Çayı",
    ailments: ["Detoks", "Hormon Dengesi"],
    ingredients: [
        "1 tatlı kaşığı kurutulmuş kırmızı yonca",
        "1 su bardağı sıcak su",
        "1 tatlı kaşığı bal"
    ],
    steps: [
        "Kırmızı yoncayı sıcak suya ekleyin",
        "10 dakika demleyin",
        "Bal ile tatlandırarak servis yapın"
    ],
    description: "Detoks etkisi olan ve hormon dengesini destekleyen bir çay.",
    benefits: [
        "Detoks etkisi vardır",
        "Hormon dengesini destekler",
        "Antioksidan özelliklere sahiptir"
    ],
    image: "/images/kırmızı-yonca.jpg"
},
{
    id: 57,
    name: "Keçiboynuzu Çayı",
    ailments: ["Öksürük", "Enerji"],
    ingredients: [
        "2 adet keçiboynuzu",
        "1 su bardağı sıcak su",
        "1 tatlı kaşığı bal"
    ],
    steps: [
        "Keçiboynuzunu küçük parçalara bölün ve sıcak suya ekleyin",
        "10-12 dakika demleyin",
        "Bal ile tatlandırarak servis yapın"
    ],
    description: "Öksürüğe iyi gelen ve enerji veren bir çay.",
    benefits: [
        "Öksürüğü hafifletir",
        "Enerji seviyesini artırır",
        "Antioksidan etkisi vardır"
    ],
    image: "/images/keçiboynuzu.jpg"
},
{
    id: 58,
    name: "Kızılcık Çayı",
    ailments: ["İdrar Yolu Sağlığı", "Antioksidan"],
    ingredients: [
        "1 tatlı kaşığı kurutulmuş kızılcık",
        "1 su bardağı sıcak su",
        "1 tatlı kaşığı bal"
    ],
    steps: [
        "Kızılcığı sıcak suya ekleyin",
        "10 dakika demleyin",
        "Bal ile tatlandırarak servis yapın"
    ],
    description: "İdrar yolu sağlığını destekleyen ve antioksidan özellikleri olan bir çay.",
    benefits: [
        "İdrar yolu sağlığını destekler",
        "Antioksidan etkisi vardır",
        "Enfeksiyonlara karşı korur"
    ],
    image: "/images/kızılcık.jpg"
},
{
    id: 59,
    name: "Karanfil ve Limon Çayı",
    ailments: ["Ağız Sağlığı", "Bağışıklık Sistemi"],
    ingredients: [
        "2 adet karanfil",
        "1 dilim limon",
        "1 su bardağı sıcak su",
        "1 tatlı kaşığı bal"
    ],
    steps: [
        "Karanfil ve limon dilimini sıcak suya ekleyin",
        "8-10 dakika demleyin",
        "Bal ile tatlandırarak servis yapın"
    ],
    description: "Ağız sağlığını koruyan ve bağışıklık sistemini güçlendiren bir çay.",
    benefits: [
        "Ağız içi enfeksiyonlarına karşı korur",
        "Bağışıklık sistemini destekler",
        "Antiseptik özelliklere sahiptir"
    ],
    image: "/images/limon-karanfil.jpg"
},
{
    id: 60,
    name: "Zencefil ve Tarçın Çayı",
    ailments: ["Kan Dolaşımı", "Sindirim"],
    ingredients: [
        "1 parça taze zencefil",
        "1 çubuk tarçın",
        "1 su bardağı sıcak su",
        "1 tatlı kaşığı bal"
    ],
    steps: [
        "Zencefili ince dilimler halinde kesin ve tarçın çubuğu ile birlikte sıcak suya ekleyin",
        "10 dakika demleyin",
        "Bal ile tatlandırarak servis yapın"
    ],
    description: "Kan dolaşımını artıran ve sindirimi destekleyen bir çay.",
    benefits: [
        "Kan dolaşımını artırır",
        "Sindirimi kolaylaştırır",
        "Anti-enflamatuar özelliklere sahiptir"
    ],
    image: "/images/zencefil-tarçın.jpg"
},
{
    id: 61,
    name: "Biberiye ve Limon Çayı",
    ailments: ["Hafıza", "Konsantrasyon"],
    ingredients: [
        "1 tatlı kaşığı kurutulmuş biberiye",
        "1 dilim limon",
        "1 su bardağı sıcak su",
        "1 tatlı kaşığı bal"
    ],
    steps: [
        "Biberiyeyi sıcak suya ekleyin",
        "8-10 dakika demleyin",
        "Limon dilimi ve bal ile tatlandırarak servis yapın"
    ],
    description: "Hafızayı güçlendiren ve konsantrasyonu artıran bir çay.",
    benefits: [
        "Hafızayı güçlendirir",
        "Konsantrasyonu artırır",
        "Zihinsel berraklık sağlar"
    ],
    image: "/images/biberiye-limon.jpg"
},
{
    id: 62,
    name: "Kekik ve Zencefil Çayı",
    ailments: ["Boğaz Ağrısı", "Sindirim"],
    ingredients: [
        "1 tatlı kaşığı kurutulmuş kekik",
        "1 parça taze zencefil",
        "1 su bardağı sıcak su",
        "1 tatlı kaşığı bal"
    ],
    steps: [
        "Kekiği ve zencefili sıcak suya ekleyin",
        "10 dakika demleyin",
        "Bal ile tatlandırarak servis yapın"
    ],
    description: "Boğaz ağrısına ve sindirim problemlerine iyi gelen bir çay.",
    benefits: [
        "Boğaz ağrısını hafifletir",
        "Sindirimi kolaylaştırır",
        "Anti-enflamatuar özelliklere sahiptir"
    ],
    image: "/images/kekik-zencefil.jpg"
},
{
    id: 63,
    name: "Lavanta ve Nane Çayı",
    ailments: ["Stres", "Sindirim"],
    ingredients: [
        "1 tatlı kaşığı kurutulmuş lavanta",
        "1 tatlı kaşığı kurutulmuş nane",
        "1 su bardağı sıcak su",
        "1 tatlı kaşığı bal"
    ],
    steps: [
        "Lavanta ve naneyi sıcak suya ekleyin",
        "8-10 dakika demleyin",
        "Bal ile tatlandırarak servis yapın"
    ],
    description: "Stresi azaltan ve sindirimi destekleyen bir çay.",
    benefits: [
        "Stresi azaltır",
        "Sindirimi kolaylaştırır",
        "Sinirleri yatıştırır"
    ],
    image: "/images/lavanta-nane.jpg"
},
{
    id: 64,
    name: "Tarçın ve Elma Çayı",
    ailments: ["Kan Şekeri", "Antioksidan"],
    ingredients: [
        "1 adet elma",
        "1 çubuk tarçın",
        "1 su bardağı sıcak su",
        "1 tatlı kaşığı bal"
    ],
    steps: [
        "Elmayı dilimleyin ve tarçın çubuğu ile birlikte sıcak suya ekleyin",
        "10-15 dakika demleyin",
        "Bal ile tatlandırarak servis yapın"
    ],
    description: "Kan şekerini dengeleyen ve antioksidan özellikleri olan bir çay.",
    benefits: [
        "Kan şekerini dengeler",
        "Antioksidan etkisi vardır",
        "Metabolizmayı hızlandırır"
    ],
    image: "/images/tarçın-elma.jpg"
},
{
    id: 65,
    name: "Karanfil ve Tarçın Çayı",
    ailments: ["Ağız Sağlığı", "Antioksidan"],
    ingredients: [
        "2 adet karanfil",
        "1 çubuk tarçın",
        "1 su bardağı sıcak su",
        "1 tatlı kaşığı bal"
    ],
    steps: [
        "Karanfil ve tarçın çubuğunu sıcak suya ekleyin",
        "10 dakika demleyin",
        "Bal ile tatlandırarak servis yapın"
    ],
    description: "Ağız sağlığını koruyan ve antioksidan özellikleri olan bir çay.",
    benefits: [
        "Ağız içi enfeksiyonlarına karşı korur",
        "Antioksidan etkisi vardır",
        "Nefesi tazeler"
    ],
    image: "/images/karanfil-tarçın.jpg"
},
{
    id: 66,
    name: "Kuşburnu ve Hibiskus Çayı",
    ailments: ["C Vitamini Eksikliği", "Enfeksiyon"],
    ingredients: [
        "1 tatlı kaşığı kurutulmuş kuşburnu",
        "1 tatlı kaşığı hibiskus",
        "1 su bardağı sıcak su",
        "1 tatlı kaşığı bal"
    ],
    steps: [
        "Kuşburnu ve hibiskusu sıcak suya ekleyin",
        "10-12 dakika demleyin",
        "Bal ile tatlandırarak servis yapın"
    ],
    description: "C vitamini deposu olan ve enfeksiyonlara karşı koruyucu bir çay.",
    benefits: [
        "Bağışıklık sistemini güçlendirir",
        "Enfeksiyonlara karşı korur",
        "Antioksidan özelliklere sahiptir"
    ],
    image: "/images/kuşburnu-hibiskus.jpg"
},
{
    id: 67,
    name: "Yeşil Çay ve Zerdeçal Karışımı",
    ailments: ["Enflamasyon", "Antioksidan"],
    ingredients: [
        "1 tatlı kaşığı yeşil çay",
        "1 çay kaşığı zerdeçal tozu",
        "1 su bardağı sıcak su",
        "1 tatlı kaşığı bal"
    ],
    steps: [
        "Yeşil çay ve zerdeçalı sıcak suya ekleyin",
        "5-7 dakika demleyin",
        "Bal ile tatlandırarak servis yapın"
    ],
    description: "Enflamasyonu azaltan ve antioksidan özellikleri olan bir çay.",
    benefits: [
        "Enflamasyonu azaltır",
        "Antioksidan etkisi vardır",
        "Metabolizmayı hızlandırır"
    ],
    image: "/images/zerdeçal.jpg"
},
{
    id: 68,
    name: "Kekik ve Limon Çayı",
    ailments: ["Öksürük", "Boğaz Ağrısı"],
    ingredients: [
        "1 tatlı kaşığı kuru kekik",
        "1 dilim limon",
        "1 su bardağı sıcak su",
        "1 tatlı kaşığı bal"
    ],
    steps: [
        "Kekiği sıcak suya ekleyin",
        "8-10 dakika demleyin",
        "Limon dilimi ve bal ile tatlandırarak servis yapın"
    ],
    description: "Öksürük ve boğaz ağrısına iyi gelen şifalı bir çay.",
    benefits: [
        "Öksürüğü hafifletir",
        "Boğaz ağrısını azaltır",
        "Antiseptik özelliklere sahiptir"
    ],
    image: "/images/kekik-limon.jpg"
},
{
    id: 69,
    name: "Biberiye ve Limon Çayı",
    ailments: ["Hafıza", "Konsantrasyon"],
    ingredients: [
        "1 tatlı kaşığı biberiye",
        "1 dilim limon",
        "1 su bardağı sıcak su",
        "1 tatlı kaşığı bal"
    ],
    steps: [
        "Biberiyeyi sıcak suya ekleyin",
        "7-10 dakika demleyin",
        "Limon dilimi ve bal ile tatlandırarak servis yapın"
    ],
    description: "Hafızayı güçlendiren ve konsantrasyonu artıran bir çay.",
    benefits: [
        "Hafızayı güçlendirir",
        "Konsantrasyonu artırır",
        "Zihinsel berraklık sağlar"
    ],
    image: "/images/biberiye-limon.jpg"
},
{
    id: 70,
    name: "Ihlamur ve Ayva Yaprağı Çayı",
    ailments: ["Soğuk Algınlığı", "Öksürük"],
    ingredients: [
        "1 tatlı kaşığı ıhlamur",
        "1 tatlı kaşığı kurutulmuş ayva yaprağı",
        "1 su bardağı sıcak su",
        "1 tatlı kaşığı bal"
    ],
    steps: [
        "Ihlamur ve ayva yapraklarını sıcak suya ekleyin",
        "10 dakika demleyin",
        "Bal ile tatlandırarak servis yapın"
    ],
    description: "Soğuk algınlığı ve öksürüğe iyi gelen şifalı bir çay.",
    benefits: [
        "Soğuk algınlığı semptomlarını hafifletir",
        "Öksürüğü azaltır",
        "Boğazı yumuşatır"
    ],
    image: "/images/ıhlamur-ayvayaprağı.jpg"
},
{
    id: 71,
    name: "Karahindiba Kökü Çayı",
    ailments: ["Karaciğer Sağlığı", "Detoks"],
    ingredients: [
        "1 tatlı kaşığı kurutulmuş karahindiba kökü",
        "1 su bardağı sıcak su",
        "1 tatlı kaşığı bal"
    ],
    steps: [
        "Karahindiba kökünü sıcak suya ekleyin",
        "10-12 dakika demleyin",
        "Bal ile tatlandırarak servis yapın"
    ],
    description: "Karaciğer sağlığını destekleyen ve detoks etkisi olan bir çay.",
    benefits: [
        "Karaciğer fonksiyonlarını destekler",
        "Detoks etkisi vardır",
        "Sindirimi kolaylaştırır"
    ],
    image: "/images/karahindiba-kökü.jpg"
},
{
    id: 72,
    name: "Meyan Kökü Çayı",
    ailments: ["Mide Yanması", "Boğaz Ağrısı"],
    ingredients: [
        "1 tatlı kaşığı kurutulmuş meyan kökü",
        "1 su bardağı sıcak su"
    ],
    steps: [
        "Meyan kökünü sıcak suya ekleyin",
        "8-10 dakika demleyin",
        "Süzerek servis yapın"
    ],
    description: "Mide yanması ve boğaz ağrısına iyi gelen şifalı bir çay.",
    benefits: [
        "Mide yanmasını hafifletir",
        "Boğaz ağrısını azaltır",
        "Anti-enflamatuar özelliklere sahiptir"
    ],
    image: "/images/meyan-koku.jpg"
},
{
    id: 73,
    name: "Karanfil ve Tarçın Çayı",
    ailments: ["Ağız Sağlığı", "Antioksidan"],
    ingredients: [
        "2 adet karanfil",
        "1 çubuk tarçın",
        "1 su bardağı sıcak su",
        "1 tatlı kaşığı bal"
    ],
    steps: [
        "Karanfil ve tarçın çubuğunu sıcak suya ekleyin",
        "10 dakika demleyin",
        "Bal ile tatlandırarak servis yapın"
    ],
    description: "Ağız sağlığını koruyan ve antioksidan özellikleri olan bir çay.",
    benefits: [
        "Ağız içi enfeksiyonlarına karşı korur",
        "Antioksidan etkisi vardır",
        "Nefesi tazeler"
    ],
    image: "/images/karanfil-tarçın.jpg"
},
{
    id: 74,
    name: "Zencefil ve Nane Çayı",
    ailments: ["Mide Bulantısı", "Sindirim"],
    ingredients: [
        "1 parça taze zencefil",
        "1 tatlı kaşığı kuru nane",
        "1 su bardağı sıcak su",
        "1 tatlı kaşığı bal"
    ],
    steps: [
        "Zencefili ince dilimler halinde kesin ve naneyle birlikte sıcak suya ekleyin",
        "10 dakika demleyin",
        "Bal ile tatlandırarak servis yapın"
    ],
    description: "Mide bulantısına ve sindirim problemlerine iyi gelen bir çay.",
    benefits: [
        "Mide bulantısını hafifletir",
        "Sindirimi kolaylaştırır",
        "Anti-enflamatuar özelliklere sahiptir"
    ],
    image: "/images/zencefil-nane.jpg"
},

];
