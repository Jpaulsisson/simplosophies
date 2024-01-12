'use client'

import { ColorRing } from 'react-loader-spinner';

export default function Spinner({ visible, className }: { visible: boolean, className?: string }) {
  return <ColorRing ariaLabel='Loading spinner' height={'25'} width={'25'} visible={visible} wrapperClass={className} colors={['#222', '#222', '#222', '#222', '#222']} />
}