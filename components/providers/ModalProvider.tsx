"use client"

import CoverImageModal from "@/components/modals/CoverImageModal"
import SettingsModal from "@/components/modals/SettingsModal"
import { useEffect, useState } from "react"

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <SettingsModal />
      <CoverImageModal />
    </>
  )
}

export default ModalProvider
