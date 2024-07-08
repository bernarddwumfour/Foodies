import Link from "next/link";
import React from "react";

const page = () => {

    let links: links = [
        { link: "Dashboard", url: "/admin/dashboard" },
        { link: "Orders", url: "/admin/orders" },
        { link: "Products", url: "/admin/products" },
        { link: "Messages", url: "/admin/messages" },
        { link: "Add New Product", url: "/admin/products/add" },
      ];

  return (

      <div className="grid grid-cols-3 gap-8 p-12">
      
        {links &&
            links.map((link) => (
                <Link key={link.url}
                className="p-6  bg-white shadow-lg rounded-lg text-gray-600 h-[200px] flex items-center justify-center"
                href={link.url}
              >
                {link.link}
              </Link>
            ))}

    </div>
  );
};

export default page;
