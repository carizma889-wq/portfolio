import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from '/src/assets/images/logo.svg'
import location from '/src/assets/images/icon-location.svg'
function Footer() {
  const [contact, setContact] = useState([
    { icon: "icon-phone.svg", text: "+20121212121" },
    { icon: "icon-email.svg", text: "example@fylo.com" },
  ]);
  const [links, setLinks] = useState([
    "About Us",
    "Contact Us",
    "Jobs",
    "Terms",
    "Press",
    "Privacy",
    "Blog",
  ]);
  const [socialIcons, setSocialIcons] = useState([
    "facebook",
    "twitter",
    "instagram",
  ]);
  return (
    <section className="bg-[#0c1524] pt-[320px] md:pt-[200px] pb-[100px] text-white ">
      <div className="container">
        <Link to="/">
          <img
            src={logo}
            alt="logo-img"
            className="w-[175px] h-[66px] object-contain"
          />
        </Link>
        <div className="flex justify-between flex-wrap flex-col md:flex-row gap-[30px] mt-[30px]">
          <div className="flex items-start gap-[15px] w-[340px] max-w-full">
            <img
              src={location}
              alt="location-img"
              className="w-[18px] h-[18px] object-contain"
            />
            <p className=" font-normal text-sm tracking-[0.8px] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              nisi dignissimos unde ipsam modi facilis nam magni, assumenda ad
              fuga.
            </p>
          </div>
          <div>
            {contact.map((item) => {
              const Url = new URL(`../assets/images/${item.icon}`, import.meta.url).href;

              return <div
                key={item.text}
                className="flex items-center gap-[15px] mb-[15px] last-of-type:mb-0"
              >
                <img
                  src={Url}
                  alt="icon"
                  className="w-[18px] h-[18px] object-contain"
                />
                <p>{item.text}</p>
              </div>
            })}
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            {links.map((item) => (
              <li key={item}>
                <Link
                  to={item.toLowerCase()}
                  className=" hover:text-primary transition-all duration-200 text-base"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex gap-[15px] w-full justify-center md:w-auto">
            {socialIcons.map((item) => (
              <li key={item}>
                <Link to={item} className="group">
                  <div className="w-[40px] h-[40px] element-center border border-white rounded-[50%]">
                    {item === "facebook" ? (
                      <FaFacebookF className="  group-hover:text-primary transition-all duration-200" />
                    ) : item === "twitter" ? (
                      <FaTwitter className="  group-hover:text-primary transition-all duration-200" />
                    ) : (
                      <FaInstagram className="  group-hover:text-primary transition-all duration-200" />
                    )}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
