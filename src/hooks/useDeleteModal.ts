import { create } from "zustand";

interface UseDeleteModalProps {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  id: string
  setId: (id: string) => void
  visible: boolean
  setVisible: (value: boolean) => void
  feedId: string
  setFeedId: (feedId: string) => void
}

const useDeleteModal = create<UseDeleteModalProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  id: '',
  setId: (id: string) => set({ id }),
  visible: false,
  setVisible: (visible) => set({ visible }),
  feedId: '',
  setFeedId: (feedId: string) => set({ feedId })
}))

export default useDeleteModal