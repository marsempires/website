import { useInformationPanel } from '@/hooks/use-information-panel'
import React from 'react'

export default function InformationPanel() {
  const [opening, open, close] = useInformationPanel((s) => [s.opening, s.open, s.close])

  return (
    <>
      {opening && (
        <div className="absolute z-20 right-0 w-2/6 h-full p-6">
          <div className="w-full h-full rounded-xl bg-white">
            <button onClick={close}>Close</button>
          </div>
        </div>
      )}
    </>
  )
}
