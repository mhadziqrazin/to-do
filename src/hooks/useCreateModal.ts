import { create } from "zustand"

interface UseCreateModalProps {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  visible: boolean
  setVisible: (value: boolean) => void
}

const useCreateModal = create<UseCreateModalProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  visible: false,
  setVisible: (visible: boolean) => set({ visible })
}))

export default useCreateModal