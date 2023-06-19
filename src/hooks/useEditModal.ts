import { create } from "zustand"

interface UseEditModalProps {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  visible: boolean
  setVisible: (value: boolean) => void
  title: string
  setTitle: (title: string) => void
  description: string
  setDescription: (description: string) => void
  dueAt: Date
  setDueAt: (dueAt: Date) => void
}

const UseEditModal = create<UseEditModalProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  visible: false,
  setVisible: (visible: boolean) => set({ visible }),
  title: '',
  setTitle: (title: string) => set({ title }),
  description: '',
  setDescription: (description: string) => set({ description }),
  dueAt: new Date(),
  setDueAt: (dueAt: Date) => set({ dueAt })
}))

export default UseEditModal