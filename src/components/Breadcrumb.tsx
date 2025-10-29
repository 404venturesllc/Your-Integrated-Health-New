import React from 'react';

interface BreadcrumbItem {
  label: string;
  page?: "home" | "services" | "about" | "faq" | "contact" | "blog" | "disclaimer" | "privacy" | "terms";
  isActive?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  setCurrentPage: (page: "home" | "services" | "about" | "faq" | "contact" | "blog" | "disclaimer" | "privacy" | "terms") => void;
}

export default function Breadcrumb({ items, setCurrentPage }: BreadcrumbProps) {
  return (
    <div className="bg-gradient-to-r from-[#236189]/5 via-[#61a94e]/5 to-[#236189]/5 border-b border-gray-200">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-4">
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm font-['Poppins']">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && <span className="text-gray-400">/</span>}
              {item.isActive ? (
                <span className="text-[#236189] font-medium">{item.label}</span>
              ) : (
                <button
                  onClick={() => item.page && setCurrentPage(item.page)}
                  className="text-gray-600 hover:text-[#236189] transition-colors"
                >
                  {item.label}
                </button>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  );
}
