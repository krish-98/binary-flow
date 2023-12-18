"use server"

import { connectToDatabase } from "./mongoose"

export async function createQuestion(params: any) {
  try {
    // connent to DB
    connectToDatabase()
  } catch (error) {}
}
