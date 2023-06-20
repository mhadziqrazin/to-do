import { create } from "zustand"

interface ShareModalProps {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  id: string
  setId: (id: string) => void
  visible: boolean
  setVisible: (visible: boolean) => void
}

const useShareModal = create<ShareModalProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  id: '',
  setId: (id: string) => set({ id }),
  visible: false,
  setVisible: (visible: boolean) => set({ visible })
}))

export default useShareModal