import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogImage?: string;
}

export function useSEO({
  title,
  description,
  keywords,
  canonicalPath,
  ogImage = 'https://mahadevasports.in/og-image.jpg',
}: SEOProps) {
  useEffect(() => {
    // 1. Update Title
    const fullTitle = `${title} | Mahadeva Sports`;
    document.title = fullTitle;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // 3. Update Meta Keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      }
    }

    // 4. Update Canonical
    if (canonicalPath !== undefined) {
      let canonical = document.querySelector('link[rel="canonical"]');
      const url = `https://mahadevasports.in${canonicalPath}`;
      if (canonical) {
        canonical.setAttribute('href', url);
      }
    }

    // 5. Update Open Graph
    const setMetaProp = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (tag) tag.setAttribute('content', content);
    };

    setMetaProp('og:title', fullTitle);
    setMetaProp('og:description', description);
    setMetaProp('og:image', ogImage);
    if (canonicalPath !== undefined) {
      setMetaProp('og:url', `https://mahadevasports.in${canonicalPath}`);
    }

    // 6. Update Twitter Card
    const setMetaName = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (tag) tag.setAttribute('content', content);
    };

    setMetaName('twitter:title', fullTitle);
    setMetaName('twitter:description', description);
    setMetaName('twitter:image', ogImage);

  }, [title, description, keywords, canonicalPath, ogImage]);
}
