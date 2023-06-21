import { Dispatch, SetStateAction } from "react"
import { create } from "zustand"

interface DoneModalProps {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  visible: boolean
  setVisible: (visible: boolean) => void
  setDone: Dispatch<SetStateAction<boolean>> | null
  setSetDone: (setDone: Dispatch<SetStateAction<boolean>>) => void
  id: string
  setId: (id: string) => void
  feedId: string
  setFeedId: (feeId: string) => void
}

const useDoneModal = create<DoneModalProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  visible: false,
  setVisible: (visible: boolean) => set({ visible }),
  setDone: null,
  setSetDone: (setDone: Dispatch<SetStateAction<boolean>>) => set({ setDone }),
  id: '',
  setId: (id: string) => set({ id }),
  feedId: '',
  setFeedId: (feedId: string) => set({ feedId })
}))

export default useDoneModal