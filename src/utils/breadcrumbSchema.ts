// Breadcrumb JSON-LD Schema Generator for SEO
// Generates structured data for Google rich results

export interface BreadcrumbSchemaItem {
  label: string;
  url: string;
}

export const generateBreadcrumbSchema = (items: BreadcrumbSchemaItem[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://www.yourintegrativehealth.com${item.url}`
    }))
  };
};
