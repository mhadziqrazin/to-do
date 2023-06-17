import { create } from "zustand"

interface UseCreateModalProps {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

const useCreateModal = create<UseCreateModalProps>((set) => ({
  isOpen: false,
  onOpen: () => set({isOpen: true}),
  onClose: () => set({isOpen: false})
}))

export default useCreateModal