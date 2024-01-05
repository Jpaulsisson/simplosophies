'use client'

import { ColorRing } from 'react-loader-spinner';

export default function Spinner({ visible, className }: { visible: boolean, className?: string }) {
  return <ColorRing ariaLabel='Loading spinner' height={'120'} width={'120'} visible={visible} wrapperClass={className} colors={['#222', '#333', '#444', '#555', '#665']} />
}