import Link from "next/link";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
    let links: links = [
        { link: "Dashboard", url: "/admin/dashboard" },
        { link: "Orders", url: "/admin/orders" },
        { link: "Products", url: "/admin/products" },
        { link: "Messages", url: "/admin/messages" },
        { link: "Add New Product", url: "/admin/products/add" },
      ];

  return (
    <div className="grid grid-cols-[450px,1fr]">
      <aside className="h-[100vh] bg-gray-100 pt-32 px-12 sticky top-0">
        <ul className="flex flex-col gap-12 pt-8">
          {links &&
            links.map((link) => (
              <Link key={link.url}
                className="p-6  bg-white shadow-lg rounded-lg text-gray-600"
                href={link.url}
              >
                {link.link}
              </Link>
            ))}
        </ul>
      </aside>
      <main className="pt-32">{children}</main>
    </div>
  );
};

export default layout;
