'use server'

import { FieldValues } from "react-hook-form"

const createToDo = async (data: FieldValues, userId: string) => {
  const {title, description, dueAt} = data
  
}

export default createToDo