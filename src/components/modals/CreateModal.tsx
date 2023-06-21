'use client'

import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import InputText from "../inputs/InputText"
import Modal from "./Modal"
import useCreateModal from "@/hooks/useCreateModal"
import TextArea from "../inputs/TextArea"
import { useEffect, useMemo, useState } from "react"
import InputDateTime from "../inputs/InputDateTime"
import { toast } from "react-hot-toast"
import axios from "axios"
import { useRouter } from "next/navigation"
import { format } from "date-fns"

const CreateModal = () => {
  const createModal = useCreateModal()
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const { register, watch, handleSubmit, setValue, reset } = useForm<FieldValues>({
    defaultValues: {
      title: '',
      description: '',
      dueAt: format(new Date(), 'yyyy-MM-dd HH:mm')
    }
  })

  useEffect(() => {
    setValue('dueAt', format(new Date(), 'yyyy-MM-dd HH:mm'))
  }, [setValue])

  const title = watch('title')
  const description = watch('description')
  const dueAt = watch('dueAt')

  const disabledButton = useMemo(() => {
    return (title === '') || (description === '') || (dueAt === '')
  }, [title, description, dueAt])

  const handleCreate: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true)

    try {
      data.dueAt = new Date(data.dueAt)

      const res = await axios.post('/api/create', data)

      if (res.status !== 201) {
        throw new Error()
      }

      toast.success('To do list created')
      router.refresh()
      reset()
      setValue('dueAt', format(new Date(), 'yyyy-MM-dd HH:mm'))
      createModal.setVisible(false)
      setTimeout(() => {
        createModal.onClose()
      }, 300)

    } catch {
      toast.error('Something went wrong')
    }

    setLoading(false)
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
      visible={createModal.visible}
      setVisible={createModal.setVisible}
    >
      <InputText
        id="title"
        label="Title"
        register={register}
      />
      <InputDateTime
        id="dueAt"
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