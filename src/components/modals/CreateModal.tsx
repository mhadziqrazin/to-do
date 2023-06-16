'use client'

import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import InputText from "../inputs/InputText"
import Modal from "./Modal"
import useCreateModal from "@/hooks/useCreateModal"
import TextArea from "../inputs/TextArea"
import { useMemo, useState } from "react"
import InputDateTime from "../inputs/InputDateTime"

const CreateModal = () => {
  const createModal = useCreateModal()
  const [loading, setLoading] = useState(false)

  const {register, watch, handleSubmit, setValue} = useForm<FieldValues>({
    defaultValues: {
      title: '',
      description: '',
      dueAt: new Date()
    }
  })

  const title = watch('title')
  const description = watch('description')
  const dueAt = watch('dueAt') as string

  const setDate = (id: string, value: string) => {
    setValue(id, new Date(value), {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true
    })
  }

  const disabledButton = useMemo(() => {
    return (title === '') || (description === '') || (dueAt === '')
  }, [title, description])

  const handleCreate: SubmitHandler<FieldValues> = async (data) => {
    console.log(data)
  }

  return (
    <Modal
      isOpen={createModal.isOpen}
      title="Create new To Do list"
      action={handleSubmit(handleCreate)}
      actionLabel="Create"
      onClose={createModal.onClose}
      disabled={disabledButton}
      loading={loading}
    >
      <InputText
        id="title"
        label="Title"
        register={register}
      />
      <InputDateTime
        id="dueAt"
        onChange={setDate}
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