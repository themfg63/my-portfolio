import { Info, socialLinks } from "../User";

const Footer = () => {
  const socialIcons = socialLinks.map((socialLink, index) => {
    const Icon = socialLink.icon;
    return (
      <a
        key={index}
        href={socialLink.link}
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-lg hover:text-primaryColor hover:scale-105 transition-transform duration-300 ease-in-out"
      >
        <Icon stroke={1.5} size={25} />
      </a>
    );
  });

  return (
    <div className="mt-20 mb-10 font-mono flex flex-col gap-2 items-center">
      <div className="text-3xl md:text-2xl text-primaryColor font-semibold">
        {Info.name}
      </div>
      <div className="hidden md:flex text-textColor gap-8 sm:gap-6">
        {socialIcons}
      </div>
      <div className="text-textColor text-xl md:text-lg sm:text-base xs:text-sm xs:flex flex items-center">
        Copyright &copy; {new Date().getFullYear()} {Info.name}
        <span className="hidden xs:inline"> | </span> <span>Tüm Hakları Saklıdır.</span>
        
      </div>
    </div>
  );
};

export default Footer;
