'use client'

import { FieldValues, useForm } from "react-hook-form"
import InputText from "../inputs/InputText"
import Modal from "./Modal"
import useCreateModal from "@/hooks/useCreateModal"
import TextArea from "../inputs/TextArea"

const CreateModal = () => {
  const createModal = useCreateModal()

  const {register} = useForm<FieldValues>({
    defaultValues: {
      title: ''
    }
  })

  return (
    <Modal
      isOpen={createModal.isOpen}
      title="Create new To Do list"
      action={() => {}}
      actionLabel="Create"
      onClose={createModal.onClose}
    >
      <InputText
        id="title"
        label="Title"
        register={register}
      />
      <TextArea
        id="description"
        label="Tell more about your task"
        register={register}
      />
    </Modal>
  )
}

export default CreateModal