import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react"


const Info = {
    name:"Muhammed Furkan GÜNEŞ",
    stack:["Bilgisayar Mühendisi","Backend Developer","Freelancer"],
    bio:"İskenderun Teknik Üniversitesi Bilgisayar Mühendisliği'nden Mayıs 2024'te mezun oldum. Uzun dönem stajımı TEDAŞ Genel Müdürlüğü'nde Java üzerine yaptım.Backend geliştirmede Java Spring Boot teknolojisiyle çalışıyor, aynı zamanda frontend alanında React ile kendimi geliştiriyorum. Öğrenmeye açık, çözüm odaklı, ekip çalışmasına yatkın ve yazılım dünyasında sağlam adımlarla ilerlemeye kararlıyım."
}

const ProjectInfo=[
    {
        title: "E-Commerce App",
        desc: "Hem kullanıcı hem de admin tarafında güçlü özellikler sunan E-Ticaret platformumu sizlerle paylaşmaktan heyecan duyuyorum. Bu Projede backend tarafında Spring Boot ve frontend tarafında Spring Boot'un bir kütüphanesi olan Thymeleaf ile HTML,CSS,JavaScript kullanarak modern ve güvenli bir alışveriş platformu oluşturdum.",
        image: "springboot.png",
        live: true,
        technologies:["Spring Boot","Thymeleaf","HTML","CSS","JavaScript","Bootstrap","MySQL"],
        link:"https://github.com/themfg63/E-Commerce-FULL-STACK-",
        github:"https://github.com/themfg63/E-Commerce-FULL-STACK-"
    },
    {
        title:"E-Learn",
        desc:"Lisans eğitimim son eğitim döneminde yaptığım bitirme projemdir. Spring Boot ve Thymeleaf kullanarak oluşturduğum full stack projenin online eğitim platformlarından farksız bir şekilde tasarlanması, eğitimlerin alınması, eğitmenlerle iletişime geçilmesi imkanını sağlıyor. Kullanıcı dostu bir arayüzle kullanıma sunulacak hale getirdiğim bu projede veritabanında MySQL kullandım.",
        image: "springboot.png",
        live: true,
        technologies:["Spring Boot","Thymeleaf","HTML","CSS","JavaScript","Bootstrap","MySQL"],
        link: "https://github.com/themfg63/E-Learn",
        github: "https://github.com/themfg63/E-Learn"
    },
    {
        title: "Hotel Management",
        desc: "Java ve React kullanarak geliştirdiğim bir Full Stack proje. Otel rezervasyonu, oda bilgileri, fiyat bilgileri ve müsaitlik durumunu kolaylıkla kontrol edebileceğin bir rezervasyon uygulaması. Backendinde Spring Boot, frontendinde React ve veritabanında PostgreSQL kullanarak geliştirdiğim bir projedir.",
        image: "springboot.png",
        live: true,
        technologies:["Spring Boot","React","Bootstrap","JavaScript","Heroicons","PostgreSQL"],
        link: "https://github.com/themfg63/HotelManagement-FULL-STACK-Backend",
        github: "https://github.com/themfg63/HotelManagement-FULL-STACK-Backend"
    },
    {
        title: "Job Find",
        desc: "Sadece Yazılım dünyasına ait bir iş bulma uygulaması. Full stack olarak geliştirdiğim projenin backend'inde Spring Boot, frontendinde React kullandım. Typescript ve Tailwindcss kullanarak kulllanıcı dostu ve kolay anlaşılır bir arayüz tasarladım. Arka tarafında iş başvurusu, ilan paylaşımı gibi işlevleri RESTAPI'lerle gerçekleştirdim. Projenin veritabanında MySQL kullandım.",
        image: "springboot.png",
        live:true,
        technologies:["Spring Boot","React","Typescript","TailwindCSS","Heroicons","MySQL"],
        link: "https://github.com/themfg63/JobFind",
        github: "https://github.com/themfg63/JobFind"
    }
]

const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML","CSS","JavaScript","TypeScript","React JS","Tailwind CSS","Material UI","Bootstrap"]
    },
    {
        title: "Backend",
        skills: ["Spring Boot",".Net Core MVC"]
    },
    {
        title: "Database",
        skills: ["MySQL","PostgreSQL","MSSQL","H2 Database","MongoDB"]
    },
    {
        title: "Diller",
        skills: ["Java","C#","JavaScript","TypeScript"]
    },
    {
        title: "Araçlar",
        skills: ["Intellij Idea","Eclipse","Visual Studio Code","Visual Studio 2019","Visual Studio 2022","Postman","Swagger","Docker","MySQL Workspace","DBeaver","Git","Github"]
    }
]

const CertificatesInfo = [
    {
        title: "English Courses Pre-Intermediate (B1)",
        company: "English Time",
        image:"englisTime.png"
    },
    {
        title:"Java Eğitimi",
        company: "Tübitak Bilgem YTE Bootcamp 2023",
        image: "tübitakJava.png"
    },
    {
        title: "Spring Boot Eğitimi",
        company: "Tübitak Bilgem YTE Bootcamp 2023",
        image:"tübitakSpring.png"
    },
    {
        title: "Mikroservis Mimarileri Eğitimi",
        company: "Tübitak Bilgem YTE Bootcamp 2023",
        image:"tübitakMikroservis.png"
    },
    {
        title: "İleri Java 101",
        company: "Turkcell Geleceği Yazanlar",
        image: "turkcellİleriJava.png"
    },
    {
        title: "Asp.Net Core MVC 101",
        company: "Turkcell Geleceği Yazanlar",
        image:"turkcellNetCore101.png"
    },
    {
        title: "Asp.Net Core MVC 201",
        company: "Turkcell Geleceği Yazanlar",
        image:"turkcellNetCore201.png"
    },
    {
        title: "Asp.Net Core MVC 301",
        company: "Turkcell Geleceği Yazanlar",
        image:"turkcellNetCore301.png"
    },
    {
        title: "Java İle Programlamaya Giriş",
        company: "BTK Akademi",
        image:"btkJava.png"
    },
    {
        title:"İleri Seviye Java",
        company: "BTK Akademi",
        image:"btkİleriJava.png"
    }
]

const ExperienceInfo = [
    {
        role: "Freelancer",
        company: "Freelance",
        date: "Mayıs 2024 - Halen",
        desc: "Freelancer olarak C#, C# Form ve Spring Boot projelerini full stack şekilde geliştiriyorum.",
        skills:["C#","C# Form","Java Spring Boot","MySQL","MSSQL"]
    },
    {
        role: "Akademi Öğrencisi",
        company: "Enoca Yazılım",
        date: "Ocak 2025 - Halen",
        desc: "Enoca Yazılım firmasının Akademisinde Hybris, Mikroservis ve Java Spring Boot eğitimi almaktayım.",
        skills:["Spring Boot","Docker","MSSQL","Hybris","Angular"]
    },
    {
        role: "Stajyer",
        company: "Türkiye Elektrik Dağıtım A.Ş.",
        date: "Şubat 2024 - Mayıs 2024",
        desc: "Uzun Dönem stajımı TEDAŞ Genel Müdürlüğü Yazılım Geliştirme Ekibinde yaptım. Stajımda Java Spring Boot ve React kullanarak kendimi full stack şekilde geliştirme fırsatı buldum. Yazmış olduğum karışık SQL sorguları sayesinde ise veritabanı bağlantıları ve işlemleri tarafında da kendimi geliştirmiş oldum.",
        skills:["Spring Boot","React","Oracle","PostgreSQL"]
    },
    {
        role: "Stajyer",
        company: "Eysel Bilişim",
        date: "Temmuz 2023 - Ağustos 2023",
        desc: "Yaz dönemi stajımı Şanlıurfa'da Eysel Bilişim'de yaptım. Stajımı Java ile backend teknolojileri üzerine yaptım.",
        skills:["Spring Boot","React","MySQL"]
    }
]

const Slugs = [
    "springboot",
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];

const socialLinks = [
    {
        link: "https://github.com/themfg63", icon: IconBrandGithub
    },{
        link: "https://www.linkedin.com/in/muhammedfurkangunes/", icon: IconBrandLinkedin
    },{
        link: "https://www.instagram.com/mefege_", icon: IconBrandInstagram
    },{
        link: "https://x.com/mefege_", icon: IconBrandX
    },
]

export {Info,ProjectInfo,SkillInfo,CertificatesInfo,ExperienceInfo,Slugs,socialLinks}