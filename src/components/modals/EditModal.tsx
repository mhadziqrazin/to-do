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
import dateFormat from "dateformat"

const EditModal = () => {
  const editModal = UseEditModal()
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const { register, watch, handleSubmit, setValue, reset } = useForm<FieldValues>({
    defaultValues: {
      title: editModal.title,
      description: editModal.description,
      dueAt: dateFormat(editModal.dueAt, 'yyyy-mm-dd HH:MM')
    }
  })

  useEffect(() => {
    setValue('title', editModal.title)
    setValue('description', editModal.description)
    setValue('dueAt', dateFormat(editModal.dueAt, 'yyyy-mm-dd HH:MM'))
  }, [editModal.title, editModal.description, editModal.dueAt])

  const title = watch('title')
  const description = watch('description')
  const dueAt = watch('dueAt') as string

  const disabledButton = useMemo(() => {
    return (title === '') || (description === '') || (dueAt === '')
  }, [title, description, dueAt])

  const handleEdit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true)

    try {
      let newData: any = {}

      if (data.title !== editModal.title) {
        newData.title = data.title
      }

      if (data.description !== editModal.description) {
        newData.description = data.description
      }

      if (dateFormat(data.dueAt, 'yyyy-mm-dd HH:MM') !== dateFormat(editModal.dueAt, 'yyyy-mm-dd HH:MM')) {
        newData.dueAt = new Date(data.dueAt)
      }

      const res = await axios.put(`/api/update/${editModal.id}`, newData)

      if (res.status !== 200) {
        throw new Error()
      }
      
      toast.success('To do list created')
      router.refresh()
      reset()
      editModal.setVisible(false)
      setTimeout(() => {
        editModal.onClose()
      }, 300)

    } catch (err) {
      console.log(err)
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

export default EditModal