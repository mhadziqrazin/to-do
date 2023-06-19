'use client'

import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import InputText from "../inputs/InputText"
import Modal from "./Modal"
import TextArea from "../inputs/TextArea"
import { useEffect, useMemo, useState } from "react"
import InputDateTime from "../inputs/InputDateTime"
import { toast } from "react-hot-toast"
import axios from "axios"
import { useRouter } from "next/navigation"
import UseEditModal from "@/hooks/useEditModal"

const EditModal = () => {
  const editModal = UseEditModal()
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const { register, watch, handleSubmit, setValue, reset } = useForm<FieldValues>({
    defaultValues: {
      title: editModal.title,
      description: editModal.description,
      dueAt: editModal.dueAt
    }
  })

  useEffect(() => {
    setValue('title', editModal.title)
    setValue('description', editModal.description)
    setValue('dueAt', new Date(editModal.dueAt))
  }, [editModal.title, editModal.description, editModal.dueAt])

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
  }, [title, description, dueAt])

  const handleEdit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true)
    console.log(editModal.dueAt)
    console.log((editModal.dueAt))
    try {
      let newData: any = {}

      if (data.title !== editModal.title) {
        newData.title = data.title
      }

      if (data.description !== editModal.description) {
        newData.description = data.description
      }

      if (data.dueAt.toISOString() !== editModal.dueAt.toISOString()) {
        newData.dueAt = data.dueAt
      }

      console.log(newData)

      // const res = await axios.post('/api/create', data)

      // if (res.status == 201) {
      //   toast.success('To do list created')
      //   router.refresh()
      //   reset()
      //   editModal.setVisible(false)
      //   setTimeout(() => {
      //     editModal.onClose()
      //   }, 300)

      // } else {
      //   throw new Error()
      // }
    } catch {
      toast.error('Something went wrong')
    }

    setLoading(false)
  }

  return (
    <Modal
      isOpen={editModal.isOpen}
      title="Edit To Do list"
      action={handleSubmit(handleEdit)}
      actionLabel="Save"
      onClose={editModal.onClose}
      disabled={disabledButton}
      loading={loading}
      visible={editModal.visible}
      setVisible={editModal.setVisible}
    >
      <InputText
        id="title"
        label="Title"
        register={register}
      />
      <InputDateTime
        id="dueAt"
        onChange={setDate}
        defaultValue={editModal.dueAt.toLocaleString()}
      />
      <TextArea
        id="description"
        label="Tell more about your task"
        register={register}
      />
    </Modal>
  )
}

export default EditModal