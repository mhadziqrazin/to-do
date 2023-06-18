import { create } from "zustand";

interface UseDeleteModalProps {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  id: string
  setId: (id: string) => void
}

const useDeleteModal = create<UseDeleteModalProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  id: '',
  setId: (id: string) => set({ id }),
}))

export default useDeleteModal