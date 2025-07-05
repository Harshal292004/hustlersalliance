import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-[#E9E5D8] dark:bg-[#292929]">
      {children}
    </div>
  )
}

export default layout