'use client'

import { ColorRing } from 'react-loader-spinner';

const SIZES = {
  XS: '25',
  SM: '35',
  MD: '50',
  LG: '75',
  XL: '100'
}

type Size = 'XS' | 'SM' | 'MD' | 'LG' | 'XL';

export default function Spinner({ visible, size = 'MD', color = '#248f7d', className }: { visible: boolean, size?: Size, color?: string, className?: string }) {
  return <ColorRing ariaLabel='Loading spinner' height={SIZES[size]} width={SIZES[size]} visible={visible} wrapperClass={className} colors={[color, color, color, color, color]} />
}