import React from "react";

interface NavProps {
  links: { name: string; url: string }[];
}

const Nav: React.FC<NavProps> = ({ links }) => {
  return (
    <div className="transition-all duration-1000 fixed opacity-0 m-0 min-w-0 h-full z-50 border-r border-solid border-[#323442] w-full lg:opacity-100 lg:w-72">
      <nav className="flex flex-col mt-14 justify-center items-center py-4">
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
{
  /* <div class="nav-menu width-full lg:block lg:width-280 hidden">
    <nav class="m-top-52">
        <ul>
            <li><a class="btn active" href="index.html">Home</a></li><li><a class="btn" href="articoli.html">Articoli</a></li><li><a class="btn" href="pagine/3/privacy-policy.html">Privacy Policy</a></li>
        </ul>
    </nav>
</div> */
}
