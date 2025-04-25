

const Info = {
    name:"Muhammed Furkan GÜNEŞ",
    stack:["Bilgisayar Mühendisi","Backend Developer"],
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
    },
    {
        title: "Sertifikalar",
        skills: ["Tübitak Bilgem YTE Bootcamp 2023 - Java Eğitimi","Tübitak Bilgem YTE Bootcamp 2023 - Spring Boot Eğitimi", "Tübitak Bilgem YTE Bootcamp 2023 - Mikroservis Mimarileri Eğitimi","Turkcell Geleceği Yazanlar - Java 101, 102, 103","Turkcell Geleceği Yazanlar - .Net Core MVC 101,102,103","Patika - Java 101,102","BTK Akademi - Java", "BTK Akademi - İleri Seviye Java", "BTK Akademi - B1 Seviye İngilizce", "English Time - B1 Certificate"]
    }
]

const Certificates = [
    {
        title:"Java Eğitimi",
        company: "Tübitak Bilgem YTE Bootcamp 2023",
        date: "Eylül 2023"
    },
    {
        title: "Spring Boot Eğitimi",
        company: "Tübitak Bilgem YTE Bootcamp 2023",
        date: "Eylül 2023"
    },
    {
        title: "Mikroservis Mimarileri Eğitimi",
        company: "Tübitak Bilgem YTE Bootcamp 2023",
        date: "Eylül 2023",
    },
    {
        title: "İleri Java 101",
        company: "Turkcell Geleceği Yazanlar",
        date: "Mayıs 2024"
    },
    {
        title: "Asp.Net Core MVC 101",
        company: "Turkcell Geleceği Yazanlar",
        date: "Haziran 2024"
    },
    {
        title: "Asp.Net Core MVC 201",
        company: "Turkcell Geleceği Yazanlar",
        date: "Temmuz 2024"
    },
    {
        title: "Asp.Net Core MVC 301",
        company: "Turkcell Geleceği Yazanlar",
        date: "Temmuz 2024"
    },
    {
        title: "Java İle Programlamaya Giriş",
        company: "BTK Akademi",
        date: "Şubat 2024"
    },
    {
        title:"İleri Seviye Java",
        company: "BTK Akademi",
        date: "Şubat 2024"
    },
    {
        title: "English Courses Pre-Intermediate (B1)",
        company: "English Time",
        date: "Eylül 2024"
    }
]

export {Info,ProjectInfo,SkillInfo,Certificates}