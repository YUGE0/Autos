import { getCanonicalUrl } from '@/utils';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Uplode",
    description: "Uplode your car details.",
    openGraph: {
      images: [`${getCanonicalUrl()}/Autos.png`],
    },
    alternates:{
      canonical: getCanonicalUrl(),
    }
  };

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
  return (
    <>{children}</>
  )
}
