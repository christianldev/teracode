import type { Metadata } from 'next';

export const DEFAULT_URL = 'https://teracode-six.vercel.app/'; // Actualiza a https://teracode.tech cuando conectes tu dominio propio
export const DEFAULT_TITLE = 'TeraCode | Desarrollo Web, Catálogos y Tiendas Online en Ecuador';
export const DEFAULT_DESCRIPTION =
  'Diseñamos y desarrollamos páginas web modernas, catálogos interactivos con pedidos a WhatsApp y tiendas online para negocios y pymes en Guayaquil y todo el Ecuador.';
export const DEFAULT_IMAGE_URL = '/images/og-teracode.jpeg'; // Guarda aquí tu banner de 1200x630 px

const defaultMetadata: Metadata = {
  metadataBase: new URL(DEFAULT_URL),
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  icons: {
    icon: [{ url: '/images/favicon.ico', type: 'image/x-icon' }],
    shortcut: ['/images/favicon.ico'],
  },
  openGraph: {
    type: 'website',
    locale: 'es_EC',
    siteName: 'TeraCode',
    url: DEFAULT_URL,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: DEFAULT_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: 'TeraCode - Desarrollo Web y Tiendas Online en Ecuador',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_IMAGE_URL],
  },
};

const generateMetadata = (
  title?: string,
  description?: string,
  canonicaUrl?: string,
  imageUrl?: string,
): Metadata => {
  return {
    ...defaultMetadata,
    title: title ?? defaultMetadata.title,
    description: description ?? defaultMetadata.description,
    alternates: {
      canonical: canonicaUrl,
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      title: title ?? defaultMetadata.openGraph?.title,
      description: description ?? defaultMetadata.openGraph?.description,
      url: canonicaUrl ?? defaultMetadata.openGraph?.url,
      images: imageUrl
        ? [{ url: imageUrl, width: 1200, height: 630 }]
        : defaultMetadata.openGraph?.images,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: title ?? defaultMetadata.twitter?.title,
      description: description ?? defaultMetadata.twitter?.description,
      images: imageUrl ? [imageUrl] : defaultMetadata.twitter?.images,
    },
  };
};

export { defaultMetadata, generateMetadata };
